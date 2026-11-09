/**
 * Minimal Cloudflare bindings used by the Pages Functions in this project.
 * Keeping only what we use avoids pulling `@cloudflare/workers-types` into the
 * Astro type-check, where it would collide with the DOM lib.
 */
interface D1Result<T = Record<string, unknown>> {
  results?: T[]
  success: boolean
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  first<T = Record<string, unknown>>(): Promise<T | null>
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>
  run(): Promise<unknown>
}

interface D1Database {
  prepare(query: string): D1PreparedStatement
  batch(statements: D1PreparedStatement[]): Promise<unknown>
}
