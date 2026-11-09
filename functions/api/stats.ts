import { json, type Env } from '../_lib/tracking'

const REPO = 'ecuellara/PolliStream-Downloads'
const TAG = 'downloads'

interface GithubAsset {
  name?: string
  download_count?: number
}

interface GithubRelease {
  assets?: GithubAsset[]
}

type Totals = Record<string, number>

function assetPlatform(name: string): string {
  const match = /^pollistream-(.+)\.(ipk|wgt|apk|exe|zip|dmg|pkg|ipa)$/i.exec(name)
  return match?.[1]?.toLowerCase() ?? ''
}

async function fetchGithubDownloads(): Promise<Totals | null> {
  try {
    const init: RequestInit & {
      cf?: { cacheTtl: number; cacheEverything: boolean }
    } = {
      headers: {
        accept: 'application/vnd.github+json',
        'user-agent': 'PolliStream-Landing',
      },
      // The asset list changes only on release; cache it at the edge. GitHub can
      // be slow, so never hold the page counter hostage for more than 3s.
      cf: { cacheTtl: 600, cacheEverything: true },
      signal: AbortSignal.timeout(3000),
    }
    const response = await fetch(`https://api.github.com/repos/${REPO}/releases/tags/${TAG}`, init)
    if (!response.ok) return null

    const release = (await response.json()) as GithubRelease
    const totals: Totals = {}
    for (const asset of release.assets ?? []) {
      const platform = assetPlatform(asset.name ?? '')
      if (!platform) continue
      totals[platform] = (totals[platform] ?? 0) + (asset.download_count ?? 0)
    }
    return totals
  } catch {
    return null
  }
}

export async function onRequestGet(context: { env: Env }): Promise<Response> {
  const { env } = context
  const clicks: Totals = {}
  const intents: Totals = {}
  const views: Totals = {}
  const devices: Totals = {}

  if (env.DB) {
    try {
      const events = await env.DB.prepare(
        `SELECT platform, event, SUM(count) AS total
           FROM events
          GROUP BY platform, event`,
      ).all<{ platform: string; event: string; total: number }>()

      for (const row of events.results ?? []) {
        const bucket =
          row.event === 'download_click'
            ? clicks
            : row.event === 'download_intent'
              ? intents
              : row.event === 'download_view'
                ? views
                : null
        if (bucket) bucket[row.platform] = (bucket[row.platform] ?? 0) + Number(row.total)
      }

      const byDevice = await env.DB.prepare(
        `SELECT device, SUM(count) AS total
           FROM events
          WHERE event IN ('download_click', 'download_intent')
          GROUP BY device`,
      ).all<{ device: string; total: number }>()

      for (const row of byDevice.results ?? []) {
        devices[row.device] = Number(row.total)
      }
    } catch {
      /* A missing table should not break the public counter. */
    }
  }

  const github = await fetchGithubDownloads()
  // GitHub's download_count is the authoritative "completed download" number.
  // When the API is unavailable, fall back to the clicks we recorded ourselves.
  const downloads: Totals = github ?? { ...clicks }

  return json(
    { ok: true, generatedAt: new Date().toISOString(), downloads, clicks, intents, views, devices },
    {
      headers: {
        // Short browser cache, slightly longer edge cache.
        'cache-control': 'public, max-age=60, s-maxage=120',
      },
    },
  )
}
