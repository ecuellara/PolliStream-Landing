import { site } from './site'
import generated from './installers.generated.json'

export const productSlugs = [
  'lg',
  'samsung',
  'samsung-modern',
  'android',
  'android-tv',
  'windows',
  'roku',
  'macos',
  'ios',
] as const
export type ProductSlug = (typeof productSlugs)[number]
export type ProductStatus = 'live' | 'soon'
export type DownloadMode = 'direct' | 'locker' | 'soon'

type GeneratedInstaller = {
  available?: boolean
  version?: string
  size?: string
  bytes?: number
  url?: string
  sha256?: string
  fileName?: string
}

const generatedInstallers = generated as Record<string, GeneratedInstaller | undefined>

export type DownloadConfig = {
  /** Direct installer URL (R2, GitHub release asset, own server). */
  directUrl?: string
  /** CPA / link-locker URL. Takes precedence over directUrl. */
  lockerUrl?: string
  /** GitHub release page, used when there is no direct asset URL. */
  githubUrl?: string
  /** Optional YouTube or Facebook video URL for the platform installation guide. */
  tutorialVideoUrl?: string
  /** Optional public URL for a future TV-pairing script. */
  pairingScriptUrl?: string
  /** File name inside PUBLIC_R2_BASE_URL, e.g. "lg/pollistream-lg-1.0.4.ipk". */
  r2Key?: string
  fileName?: string
  version?: string
  size?: string
  updated?: string
  sha256?: string
}

/**
 * Fill these in as each installer is published.
 *
 * LG is wired automatically by scripts/sync-installers.mjs from installers/lg/.
 * For the other platforms, paste a direct URL or a CPA locker URL. Empty values
 * are shown as "Próximamente" — never as a dead link.
 */
export const downloadConfig: Record<ProductSlug, DownloadConfig> = {
  lg: {
    githubUrl:
      'https://github.com/ecuellara/PolliStream-Downloads/releases/download/downloads/pollistream-lg.ipk',
    updated: '2026-10',
    fileName: 'pollistream-lg.ipk',
    tutorialVideoUrl: 'https://www.facebook.com/61583684859011/videos/pcb.1855460372556026/1878130016941448',
  },
  samsung: {
    githubUrl:
      'https://github.com/ecuellara/PolliStream-Downloads/releases/download/downloads/pollistream-samsung.wgt',
    fileName: 'pollistream-samsung.wgt',
  },
  'samsung-modern': {
    fileName: 'pollistream-samsung-modern.wgt',
  },
  android: {
    githubUrl:
      'https://github.com/ecuellara/PolliStream-Downloads/releases/download/downloads/pollistream-android.apk',
    fileName: 'pollistream-android.apk',
  },
  'android-tv': {
    fileName: 'pollistream-androidtv.apk',
  },
  roku: {
    fileName: 'pollistream-roku.zip',
  },
  macos: {
  },
  ios: {
  },
  windows: {
    githubUrl:
      'https://github.com/ecuellara/PolliStream-Downloads/releases/download/downloads/pollistream-windows.exe',
    fileName: 'pollistream-windows.exe',
  },
}

export type ProductMeta = {
  slug: ProductSlug
  name: string
  shortName: string
  platform: string
  family: 'tv' | 'mobile' | 'desktop'
  fileType: string
  icon: 'lg' | 'samsung' | 'android' | 'android-tv' | 'windows' | 'roku' | 'apple'
  accent: 'lime' | 'cyan' | 'blue' | 'violet' | 'amber'
  order: number
  featured?: boolean
  status: ProductStatus
  downloadMode: DownloadMode
  downloadUrl: string
  version: string
  size: string
  updated: string
  sha256: string
  fileName: string
  tutorialVideoUrl?: string
  pairingScriptUrl?: string
}

const base: Record<
  ProductSlug,
  Pick<ProductMeta, 'name' | 'shortName' | 'platform' | 'family' | 'fileType' | 'icon' | 'accent' | 'order' | 'featured'>
> = {
  lg: {
    name: 'LG webOS',
    shortName: 'LG',
    platform: 'Smart TV',
    family: 'tv',
    fileType: 'IPK',
    icon: 'lg',
    accent: 'lime',
    order: 1,
    featured: true,
  },
  samsung: {
    name: 'Samsung Tizen Legacy',
    shortName: 'Samsung Legacy',
    platform: 'Smart TV',
    family: 'tv',
    fileType: 'WGT / TPK',
    icon: 'samsung',
    accent: 'blue',
    order: 2,
  },
  'samsung-modern': {
    name: 'Samsung Tizen moderno',
    shortName: 'Samsung Tizen',
    platform: 'Smart TV · Tizen 6.5+',
    family: 'tv',
    fileType: 'WGT',
    icon: 'samsung',
    accent: 'cyan',
    order: 3,
  },
  android: {
    name: 'Android',
    shortName: 'Android',
    platform: 'Móvil y tablet',
    family: 'mobile',
    fileType: 'APK',
    icon: 'android',
    accent: 'lime',
    order: 4,
  },
  'android-tv': {
    name: 'Android TV / Fire TV',
    shortName: 'Android TV',
    platform: 'TV y Fire TV',
    family: 'tv',
    fileType: 'APK',
    icon: 'android-tv',
    accent: 'cyan',
    order: 5,
  },
  windows: {
    name: 'Windows',
    shortName: 'Windows',
    platform: 'PC',
    family: 'desktop',
    fileType: 'EXE',
    icon: 'windows',
    accent: 'violet',
    order: 6,
  },
  roku: {
    name: 'Roku',
    shortName: 'Roku',
    platform: 'Streaming player',
    family: 'tv',
    fileType: 'ZIP',
    icon: 'roku',
    accent: 'amber',
    order: 7,
  },
  macos: {
    name: 'macOS',
    shortName: 'Mac',
    platform: 'Escritorio',
    family: 'desktop',
    fileType: 'DMG / PKG',
    icon: 'apple',
    accent: 'violet',
    order: 8,
  },
  ios: {
    name: 'iPhone y iPad',
    shortName: 'iOS / iPad',
    platform: 'Móvil y tablet',
    family: 'mobile',
    fileType: 'App Store / IPA',
    icon: 'apple',
    accent: 'lime',
    order: 9,
  },
}

function resolveDownload(slug: ProductSlug, config: DownloadConfig): {
  status: ProductStatus
  downloadMode: DownloadMode
  downloadUrl: string
} {
  if (config.lockerUrl) return { status: 'live', downloadMode: 'locker', downloadUrl: config.lockerUrl }
  if (config.directUrl) return { status: 'live', downloadMode: 'direct', downloadUrl: config.directUrl }
  if (config.githubUrl) return { status: 'live', downloadMode: 'direct', downloadUrl: config.githubUrl }
  if (site.r2BaseUrl && config.r2Key) {
    return { status: 'live', downloadMode: 'direct', downloadUrl: `${site.r2BaseUrl}/${config.r2Key}` }
  }
  const local = generatedInstallers[slug]
  if (local?.available && local.url) {
    return { status: 'live', downloadMode: 'direct', downloadUrl: local.url }
  }
  return { status: 'soon', downloadMode: 'soon', downloadUrl: '' }
}

export const products: ProductMeta[] = productSlugs
  .map((slug) => {
    const config = downloadConfig[slug]
    const local = generatedInstallers[slug]
    const download = resolveDownload(slug, config)
    return {
      ...base[slug],
      slug,
      ...download,
      version: config.version ?? local?.version ?? '—',
      size: config.size ?? local?.size ?? '—',
      updated: config.updated ?? '',
      sha256: config.sha256 ?? local?.sha256 ?? '',
      fileName: config.fileName ?? local?.fileName ?? '',
      tutorialVideoUrl: config.tutorialVideoUrl,
      pairingScriptUrl: config.pairingScriptUrl,
    }
  })
  .sort((a, b) => a.order - b.order)

export function getProduct(slug: string): ProductMeta | undefined {
  return products.find((product) => product.slug === slug)
}

export function isProductSlug(slug: string): slug is ProductSlug {
  return productSlugs.includes(slug as ProductSlug)
}
