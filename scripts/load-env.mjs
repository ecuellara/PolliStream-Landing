import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Minimal .env loader for the Node build scripts. Astro loads .env on its own;
 * this exists so prebuild steps (installer sync, R2 upload) see the same values
 * without requiring an extra dependency.
 */
export function loadEnv(root = process.cwd()) {
  const file = resolve(root, '.env')
  if (!existsSync(file)) return

  for (const rawLine of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim()
    if (line === '' || line.startsWith('#')) continue
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/)
    if (!match) continue
    const [, key, rawValue] = match
    if (process.env[key] !== undefined) continue
    let value = rawValue.trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    process.env[key] = value
  }
}
