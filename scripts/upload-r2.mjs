import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, statSync } from 'node:fs'
import { basename, join, relative, resolve } from 'node:path'
import { loadEnv } from './load-env.mjs'

loadEnv(process.cwd())

const bucket = process.env.R2_BUCKET ?? 'pollistream-downloads'
const dryRun = process.argv.includes('--dry-run')
const args = process.argv.slice(2).filter((arg) => arg !== '--dry-run')
const downloadsDir = resolve(process.cwd(), 'public', 'downloads')
const installersDir = resolve(process.cwd(), 'installers')

function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const file = join(dir, name)
    return statSync(file).isDirectory() ? walk(file) : [file]
  })
}

const files = args.length > 0 ? args.map((file) => resolve(file)) : walk(downloadsDir)

if (files.length === 0) {
  console.error('No files found. Pass a file path or put installers under public/downloads/.')
  process.exit(1)
}

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx'

for (const file of files) {
  if (!existsSync(file)) {
    console.error(`Missing file: ${file}`)
    process.exit(1)
  }
  const installerKey = relative(installersDir, file).replaceAll('\\', '/')
  const downloadKey = relative(downloadsDir, file).replaceAll('\\', '/')
  const key = !installerKey.startsWith('..')
    ? installerKey
    : !downloadKey.startsWith('..')
      ? downloadKey
      : basename(file)
  const target = `${bucket}/${key}`
  const command = ['wrangler', 'r2', 'object', 'put', target, '--file', file, '--remote']
  console.log(`${dryRun ? '[dry-run] ' : ''}${command.join(' ')}`)
  if (!dryRun) {
    execFileSync(npx, command, { stdio: 'inherit', shell: process.platform === 'win32' })
  }
}
