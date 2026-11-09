import { createHash } from 'node:crypto'
import {
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from './load-env.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
loadEnv(root)
const installersDir = resolve(root, process.env.INSTALLERS_DIR ?? 'installers')
const publicDir = join(root, 'public', 'downloads')
const generatedPath = join(root, 'src', 'data', 'installers.generated.json')

function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const file = join(dir, name)
    return statSync(file).isDirectory() ? walk(file) : [file]
  })
}

function versionFromName(name) {
  const match = name.match(/(\d+\.\d+\.\d+)/)
  return match?.[1] ?? ''
}

function compareVersions(a, b) {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0)
    if (diff !== 0) return diff
  }
  return 0
}

function humanSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function sha256(file) {
  const hash = createHash('sha256')
  hash.update(readFileSync(file))
  return hash.digest('hex')
}

function makeEntry({ version, destName, sourceFile, source }) {
  const size = statSync(sourceFile).size
  if (size > 25 * 1024 * 1024) {
    console.warn(
      `[installers] ${destName} is ${humanSize(size)}; keep it on GitHub Releases instead of deploying it as a Pages asset.`,
    )
  }
  return {
    available: true,
    version,
    size: humanSize(size),
    bytes: size,
    url: `https://github.com/ecuellara/PolliStream-Downloads/releases/download/downloads/${destName}`,
    fileName: destName,
    sha256: sha256(sourceFile),
    source,
    sourcePath: relative(installersDir, sourceFile).replaceAll('\\', '/'),
  }
}

const result = {}
const platforms = [
  { slug: 'lg', extensions: ['.ipk'] },
  { slug: 'samsung', extensions: ['.wgt'] },
  { slug: 'samsung-modern', extensions: ['.wgt'] },
  { slug: 'android', extensions: ['.apk'] },
  { slug: 'android-tv', extensions: ['.apk'] },
  { slug: 'windows', extensions: ['.exe'] },
  { slug: 'roku', extensions: ['.zip'] },
  { slug: 'macos', extensions: ['.dmg', '.pkg'] },
  { slug: 'ios', extensions: ['.ipa'] },
]

for (const { slug, extensions } of platforms) {
  rmSync(join(publicDir, slug), { recursive: true, force: true })
  const candidates = walk(join(installersDir, slug))
    .filter((file) => extensions.includes(file.slice(file.lastIndexOf('.')).toLowerCase()))
    .sort((a, b) => compareVersions(versionFromName(basename(b)), versionFromName(basename(a))))

  if (candidates.length > 0) {
    const source = candidates[0]
    const sourceName = basename(source)
    const version = versionFromName(sourceName) || 'latest'
    const extension = sourceName.slice(sourceName.lastIndexOf('.')).toLowerCase()
    const destName = `pollistream-${slug}${extension}`
    result[slug] = makeEntry({ version, destName, sourceFile: source, source: sourceName })
    console.log(`[installers] ${slug} ${version} → ${destName} (${result[slug].size})`)
    continue
  }

  result[slug] = { available: false }
  console.warn(`[installers] No compatible installer found in installers/${slug}/.`)
}

writeFileSync(generatedPath, `${JSON.stringify(result, null, 2)}\n`)
console.log(`[installers] Wrote ${generatedPath}`)
