export type AdProvider = 'none' | 'adsense' | 'adsterra' | 'custom'
export type AdSlotName = 'home-top' | 'home-mid' | 'product' | 'download' | 'legal'

type AdSenseConfig = {
  client: string
  slots: Record<AdSlotName, string>
}

type AdsterraConfig = {
  /** Adsterra ad key, used by the invoke script. */
  key: string
  width: number
  height: number
  /** Optional override when Adsterra gives you a different invoke URL. */
  scriptSrc?: string
}

export const ads = {
  /** Set to false to hide every ad slot and placeholder. */
  enabled: true,
  /** Show a tasteful "sponsor space" placeholder when no network is configured. */
  showPlaceholders: true,
  /** Ad scripts load only after the visitor accepts advertising cookies. */
  requireConsent: true,
  provider: 'none' as AdProvider,
  adsense: {
    client: '',
    slots: {
      'home-top': '',
      'home-mid': '',
      product: '',
      download: '',
      legal: '',
    },
  } satisfies AdSenseConfig,
  adsterra: {
    key: '',
    width: 728,
    height: 90,
    scriptSrc: '',
  } satisfies AdsterraConfig,
  custom: {
    /** Raw HTML rendered inside a sandboxed iframe. Scripts are allowed. */
    html: '',
  },
}

export function adSlotId(slot: AdSlotName): string {
  if (ads.provider === 'adsense') return ads.adsense.slots[slot] ?? ''
  return ''
}
