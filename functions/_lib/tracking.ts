export interface Env {
  DB?: D1Database
}

export const TRACKED_EVENTS = new Set([
  'page_view',
  'download_intent',
  'download_view',
  'download_click',
  'platform_select',
  'donate_click',
  'donate_qr_download',
  'share_click',
  'affiliate_click',
  'consent_ads',
  'consent_essential',
])

export const TRACKED_PLATFORMS = new Set([
  'lg',
  'samsung',
  'samsung-modern',
  'android',
  'android-tv',
  'windows',
  'roku',
  'macos',
  'ios',
  'yape',
  'paypal',
  'whatsapp',
  'telegram',
  'facebook',
  'x',
  'email',
  'copy',
  'native',
  'site',
])

export const TRACKED_MODES = new Set([
  'direct',
  'locker',
  'share',
  'none',
  'home',
  'product',
  'download',
  'legal',
  'page',
  '',
])

export type Device = 'tv' | 'mobile' | 'tablet' | 'desktop'

export function deviceFromUserAgent(userAgent: string): Device | 'bot' {
  const ua = userAgent.toLowerCase()
  if (!ua) return 'desktop'
  if (/bot|crawler|spider|headless|lighthouse|pagespeed|google-inspectiontool/.test(ua)) return 'bot'
  if (/smart-tv|smarttv|hbbtv|netcast|web0s|webos|tizen|appletv|android tv|aft[mbst]|roku|fire tv/.test(ua)) return 'tv'
  if (/ipad|tablet|playbook|silk|(android(?!.*mobile))/.test(ua)) return 'tablet'
  if (/mobi|iphone|ipod|android.*mobile|windows phone/.test(ua)) return 'mobile'
  return 'desktop'
}

export function localeFromHeader(header: string | null): string {
  if (!header) return ''
  const first = header.split(',')[0]?.trim().toLowerCase() ?? ''
  if (first.startsWith('es')) return 'es'
  if (first.startsWith('pt')) return 'pt'
  if (first.startsWith('en')) return 'en'
  return ''
}

export function json(data: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...init.headers,
    },
  })
}

export function clean(value: unknown, max = 48): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}
