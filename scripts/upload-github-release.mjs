import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from './load-env.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
loadEnv(root)
const repo = 'ecuellara/PolliStream-Downloads'
const tag = 'downloads'
const generatedPath = join(root, 'src', 'data', 'installers.generated.json')
const installersDir = resolve(root, process.env.INSTALLERS_DIR ?? 'installers')
const platforms = ['lg', 'samsung', 'samsung-modern', 'android', 'android-tv', 'windows', 'roku', 'macos', 'ios']
const dryRun = process.argv.includes('--dry-run')
const prune = process.argv.includes('--prune')
const gh = process.platform === 'win32' ? 'gh.exe' : 'gh'
const generated = JSON.parse(readFileSync(generatedPath, 'utf8'))

// `gh release upload file#name` sets the asset *label*, not its name, which
// leaves duplicate assets behind. Stage every file under its final asset name
// so the upload replaces the previous asset cleanly.
const stagingDir = join(installersDir, '.upload-staging')
rmSync(stagingDir, { recursive: true, force: true })
mkdirSync(stagingDir, { recursive: true })

const expectedNames = new Set()
const assets = platforms.flatMap((slug) => {
  const entry = generated[slug]
  if (!entry?.available || !entry.fileName) return []
  if (!entry.sourcePath) throw new Error(`Missing source path for ${slug} installer.`)
  const file = join(installersDir, entry.sourcePath)
  if (!existsSync(file)) throw new Error(`Missing synchronized installer: ${file}`)
  const staged = join(stagingDir, entry.fileName)
  copyFileSync(file, staged)
  expectedNames.add(entry.fileName)
  return [staged]
})

if (assets.length === 0) {
  rmSync(stagingDir, { recursive: true, force: true })
  throw new Error('No available installer files to upload.')
}

const listAssets = () =>
  JSON.parse(
    execFileSync(gh, ['release', 'view', tag, '--repo', repo, '--json', 'assets'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }),
  ).assets

try {
  if (dryRun) {
    console.log(`[dry-run] Upload ${assets.map((file) => file.slice(stagingDir.length + 1)).join(', ')} to ${repo} release ${tag}`)
    if (prune) console.log(`[dry-run] Prune assets not named: ${[...expectedNames].join(', ')}`)
  } else {
    let releaseExists = false
    try {
      execFileSync(gh, ['release', 'view', tag, '--repo', repo], { cwd: root, stdio: 'ignore' })
      releaseExists = true
    } catch {
      releaseExists = false
    }

    if (releaseExists) {
      execFileSync(gh, ['release', 'upload', tag, '--repo', repo, '--clobber', ...assets], {
        cwd: root,
        stdio: 'inherit',
      })
    } else {
      execFileSync(
        gh,
        [
          'release',
          'create',
          tag,
          '--repo',
          repo,
          '--title',
          'PolliStream installers',
          '--notes',
          'Public installer downloads for PolliStream.',
          ...assets,
        ],
        { cwd: root, stdio: 'inherit' },
      )
    }

    if (prune) {
      const stale = listAssets().filter((asset) => !expectedNames.has(asset.name))
      for (const asset of stale) {
        console.log(`[github] Removing stale asset ${asset.name}`)
        execFileSync(
          gh,
          ['release', 'delete-asset', tag, asset.name, '--repo', repo, '--yes'],
          { cwd: root, stdio: 'inherit' },
        )
      }
    }

    const finalNames = listAssets().map((asset) => asset.name).sort()
    console.log(`[github] Release ${tag} assets: ${finalNames.join(', ')}`)
  }
} finally {
  rmSync(stagingDir, { recursive: true, force: true })
}
