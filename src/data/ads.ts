export type AdProvider = 'none' | 'adsense' | 'adsterra' | 'custom'
export type AdSlotName = 'home-top' | 'home-mid' | 'product' | 'download' | 'legal'

type AdSenseConfig = {
  client: string
  slots: Record<AdSlotName, string>
  /** Reserved height per slot, so a late ad never shifts the layout. */
  heights: Record<AdSlotName, number>
}

type AdsterraConfig = {
  /** Adsterra ad key, used by the invoke script. */
  key: string
  width: number
  height: number
  /** Optional override when Adsterra gives you a different invoke URL. */
  scriptSrc?: string
}

/**
 * Ads are manual and slot-based on purpose.
 *
 * If you enable "Auto ads" (Anuncios automáticos) in the AdSense dashboard,
 * Google injects units wherever it wants, including sections that are not
 * defined in this site. Turn Auto ads OFF and create one display unit per slot
 * below; paste each unit ID in the matching `slots` entry or in the env vars.
 */
export const ads = {
  /** Set to false to hide every ad slot and placeholder. */
  enabled: true,
  /** Show a tasteful "sponsor space" placeholder when no network is configured. */
  showPlaceholders: true,
  /** Ad scripts load only after the visitor accepts advertising cookies. */
  requireConsent: true,
  /** Keep this false; the site renders fixed, declared slots only. */
  autoAds: false,
  provider: (import.meta.env.PUBLIC_ADS_PROVIDER as AdProvider | undefined) ?? 'adsense',
  adsense: {
    client: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? 'ca-pub-7102655397941820',
    slots: {
      'home-top': import.meta.env.PUBLIC_ADSENSE_SLOT_HOME_TOP ?? '',
      'home-mid': import.meta.env.PUBLIC_ADSENSE_SLOT_HOME_MID ?? '',
      product: import.meta.env.PUBLIC_ADSENSE_SLOT_PRODUCT ?? '',
      download: import.meta.env.PUBLIC_ADSENSE_SLOT_DOWNLOAD ?? '',
      legal: import.meta.env.PUBLIC_ADSENSE_SLOT_LEGAL ?? '',
    },
    heights: {
      'home-top': 90,
      'home-mid': 90,
      product: 250,
      download: 250,
      legal: 90,
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

export function adSlotHeight(slot: AdSlotName): number {
  return ads.adsense.heights[slot] ?? 90
}
