export const site = {
  name: 'PolliStream',
  shortName: 'PolliStream',
  url: (import.meta.env.SITE_URL ?? 'https://pollistream.pages.dev').replace(/\/$/, ''),
  domain: 'pollistream.pages.dev',
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL ?? '',
  r2BaseUrl: (import.meta.env.PUBLIC_R2_BASE_URL ?? '').replace(/\/$/, ''),
  cfBeaconToken: import.meta.env.PUBLIC_CF_BEACON_TOKEN ?? '',
  plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN ?? '',
  locale: 'es',
  themeColor: '#050706',
  icon: '/brand/icon-256.png',
  ogImages: {
    es: '/brand/og-es.png',
    en: '/brand/og-en.png',
    pt: '/brand/og-pt.png',
  },
} as const

export type SupportLink = {
  label: string
  url: string
  note?: string
}

/**
 * Donation / premium links. Leave the array empty to show the share fallback
 * instead of a dead donation button.
 *
 * Example:
 *   { label: 'Ko-fi', url: 'https://ko-fi.com/tu-usuario' }
 *   { label: 'PayPal', url: 'https://paypal.me/tu-usuario' }
 */
export const support = {
  enabled: true,
  links: [] as SupportLink[],
}

export type AffiliateLink = {
  name: string
  url: string
  note?: string
  /** Optional badge, e.g. "Recomendado". */
  badge?: string
}

/**
 * IPTV provider affiliate links. Keep this empty until you have a real,
 * disclosed partner deal; the section is hidden when empty.
 */
export const affiliate = {
  enabled: true,
  links: [] as AffiliateLink[],
}
