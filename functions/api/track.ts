import {
  TRACKED_EVENTS,
  TRACKED_MODES,
  TRACKED_PLATFORMS,
  clean,
  deviceFromUserAgent,
  json,
  localeFromHeader,
  type Env,
} from '../_lib/tracking'

interface TrackPayload {
  event?: unknown
  platform?: unknown
  mode?: unknown
  locale?: unknown
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  const { request, env } = context
  if (!env.DB) return json({ ok: false, reason: 'storage_unavailable' }, { status: 503 })

  let payload: TrackPayload
  try {
    payload = (await request.json()) as TrackPayload
  } catch {
    return json({ ok: false }, { status: 400 })
  }

  const event = clean(payload.event)
  if (!TRACKED_EVENTS.has(event)) return json({ ok: true, skipped: true })

  const platform = clean(payload.platform) || 'site'
  if (!TRACKED_PLATFORMS.has(platform)) return json({ ok: true, skipped: true })

  const mode = clean(payload.mode, 16)
  const device = deviceFromUserAgent(request.headers.get('user-agent') ?? '')
  // Bots inflate counters and never convert; drop them before writing.
  if (device === 'bot') return json({ ok: true, skipped: true })

  const locale = clean(payload.locale, 8) || localeFromHeader(request.headers.get('accept-language'))
  const day = new Date().toISOString().slice(0, 10)

  await env.DB.prepare(
    `INSERT INTO events (day, event, platform, mode, device, locale, count)
     VALUES (?, ?, ?, ?, ?, ?, 1)
     ON CONFLICT(day, event, platform, mode, device, locale)
     DO UPDATE SET count = count + 1`,
  )
    .bind(day, event, platform, TRACKED_MODES.has(mode) ? mode : '', device, locale)
    .run()

  return json({ ok: true }, { status: 202, headers: { 'cache-control': 'no-store' } })
}
