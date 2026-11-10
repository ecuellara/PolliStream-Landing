export const site = {
  name: 'PolliStream',
  shortName: 'PolliStream',
  url: (import.meta.env.SITE_URL ?? 'https://pollistream.pages.dev').replace(/\/$/, ''),
  domain: 'pollistream.pages.dev',
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL ?? '',
  r2BaseUrl: (import.meta.env.PUBLIC_R2_BASE_URL ?? '').replace(/\/$/, ''),
  cfBeaconToken:
    import.meta.env.PUBLIC_CF_BEACON_TOKEN ?? '6c34df2971364fb4b1cf90df2b1e4021',
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

/**
 * Support options rendered as cards in the #support section.
 *
 * Yape: save the QR image as `public/donate/yape-qr.png`. The card stays
 * disabled until that file exists, so the site never shows a broken QR.
 * Set `holder` if you want to show the beneficiary name next to the code.
 *
 * PayPal: the donate link works with the account email and does not need a
 * paypal.me profile. If you create one, set `handle` (without the @).
 */
export const support = {
  enabled: true,
  yape: {
    enabled: true,
    /** Public path, served as-is so it can also be downloaded. */
    qrPath: '/donate/yape-qr.png',
    /** Name used by the "download QR" link. */
    qrFileName: 'pollistream-yape.png',
    /** Empty string hides the beneficiary name. */
    holder: '',
  },
  paypal: {
    enabled: true,
    email: 'everson.20.23@gmail.com',
    /** Optional paypal.me username, without the @. */
    handle: '',
    currency: 'USD',
  },
} as const

export function paypalDonateUrl(): string {
  if (support.paypal.handle) return `https://paypal.me/${support.paypal.handle}`
  const params = new URLSearchParams({
    business: support.paypal.email,
    currency_code: support.paypal.currency,
    item_name: 'PolliStream',
  })
  return `https://www.paypal.com/donate/?${params.toString()}`
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
