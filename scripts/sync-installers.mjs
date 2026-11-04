import { Buffer } from 'node:buffer'
import { createHash } from 'node:crypto'
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
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
  const match = name.match(/_(\d+\.\d+\.\d+)_all\.ipk$/i)
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

function makeEntry({ version, destName, dest, source }) {
  const size = statSync(dest).size
  if (size > 25 * 1024 * 1024) {
    console.warn(
      `[installers] ${destName} is ${humanSize(size)}; Cloudflare Pages rejects files over 25 MiB. Host it on R2 or GitHub Releases and set r2Key/directUrl instead.`,
    )
  }
  return {
    available: true,
    version,
    size: humanSize(size),
    bytes: size,
    url: `/downloads/lg/${destName}`,
    fileName: destName,
    sha256: sha256(dest),
    source,
  }
}

const result = {}

const lgCandidates = walk(installersDir)
  .filter((file) => /\.ipk$/i.test(file))
  .sort((a, b) => compareVersions(versionFromName(basename(b)), versionFromName(basename(a))))

if (lgCandidates.length > 0) {
  const source = lgCandidates[0]
  const sourceName = basename(source)
  const version = versionFromName(sourceName) || 'latest'
  const destDir = join(publicDir, 'lg')
  const destName = `pollistream-lg-${version}.ipk`
  const dest = join(destDir, destName)
  rmSync(destDir, { recursive: true, force: true })
  mkdirSync(destDir, { recursive: true })
  copyFileSync(source, dest)
  result.lg = makeEntry({ version, destName, dest, source: sourceName })
  console.log(`[installers] LG ${version} → ${destName} (${result.lg.size})`)
} else if (process.env.LG_IPK_URL) {
  let parsedVersion = ''
  try {
    parsedVersion = versionFromName(basename(new URL(process.env.LG_IPK_URL).pathname))
  } catch {
    /* The fetch below reports the invalid URL. */
  }
  const version = process.env.LG_IPK_VERSION || parsedVersion || 'latest'
  const destDir = join(publicDir, 'lg')
  const destName = `pollistream-lg-${version}.ipk`
  const dest = join(destDir, destName)
  try {
    const response = await fetch(process.env.LG_IPK_URL, { redirect: 'follow' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const buffer = Buffer.from(await response.arrayBuffer())
    rmSync(destDir, { recursive: true, force: true })
    mkdirSync(destDir, { recursive: true })
    writeFileSync(dest, buffer)
    result.lg = makeEntry({ version, destName, dest, source: process.env.LG_IPK_URL })
    console.log(`[installers] LG ${version} descargado desde LG_IPK_URL (${result.lg.size})`)
  } catch (error) {
    result.lg = { available: false }
    console.warn(`[installers] LG_IPK_URL no se pudo descargar: ${String(error)}`)
  }
} else {
  result.lg = { available: false }
  console.warn('[installers] No IPK found in installers/. LG download will show as "coming soon".')
}

writeFileSync(generatedPath, `${JSON.stringify(result, null, 2)}\n`)
console.log(`[installers] Wrote ${generatedPath}`)
