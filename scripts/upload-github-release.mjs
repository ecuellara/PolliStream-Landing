import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
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
const gh = process.platform === 'win32' ? 'gh.exe' : 'gh'
const generated = JSON.parse(readFileSync(generatedPath, 'utf8'))
const assets = platforms.flatMap((slug) => {
  const entry = generated[slug]
  if (!entry?.available || !entry.fileName) return []
  if (!entry.sourcePath) throw new Error(`Missing source path for ${slug} installer.`)
  const file = join(installersDir, entry.sourcePath)
  if (!existsSync(file)) throw new Error(`Missing synchronized installer: ${file}`)
  return [`${file}#${entry.fileName}`]
})

if (assets.length === 0) {
  throw new Error('No available installer files to upload.')
}

if (dryRun) {
  console.log(`[dry-run] Upload ${assets.join(', ')} to ${repo} release ${tag}`)
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
}