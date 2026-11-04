import { site } from './site'
import generated from './installers.generated.json'

export const productSlugs = ['lg', 'samsung', 'android', 'android-tv', 'windows'] as const
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
    updated: '2026-10',
  },
  samsung: {
    // directUrl: 'https://downloads.example.com/samsung/pollistream-samsung-1.0.0.wgt',
    // lockerUrl: 'https://tu-red-cpa.example.com/cl?offer=samsung',
    // r2Key: 'samsung/pollistream-samsung-1.0.0.wgt',
    fileName: 'pollistream-samsung.wgt',
  },
  android: {
    // directUrl: 'https://downloads.example.com/android/pollistream-android-1.0.0.apk',
    // lockerUrl: 'https://tu-red-cpa.example.com/cl?offer=android',
    fileName: 'pollistream-android.apk',
  },
  'android-tv': {
    // directUrl: 'https://downloads.example.com/android-tv/pollistream-androidtv-1.0.0.apk',
    // lockerUrl: 'https://tu-red-cpa.example.com/cl?offer=android-tv',
    fileName: 'pollistream-androidtv.apk',
  },
  windows: {
    // directUrl: 'https://downloads.example.com/windows/pollistream-windows-1.0.0.exe',
    // lockerUrl: 'https://tu-red-cpa.example.com/cl?offer=windows',
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
  icon: 'lg' | 'samsung' | 'android' | 'android-tv' | 'windows'
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
    name: 'Samsung Tizen',
    shortName: 'Samsung',
    platform: 'Smart TV',
    family: 'tv',
    fileType: 'WGT / TPK',
    icon: 'samsung',
    accent: 'blue',
    order: 2,
  },
  android: {
    name: 'Android',
    shortName: 'Android',
    platform: 'Móvil y tablet',
    family: 'mobile',
    fileType: 'APK',
    icon: 'android',
    accent: 'lime',
    order: 3,
  },
  'android-tv': {
    name: 'Android TV / Fire TV',
    shortName: 'Android TV',
    platform: 'TV y Fire TV',
    family: 'tv',
    fileType: 'APK',
    icon: 'android-tv',
    accent: 'cyan',
    order: 4,
  },
  windows: {
    name: 'Windows',
    shortName: 'Windows',
    platform: 'PC',
    family: 'desktop',
    fileType: 'EXE',
    icon: 'windows',
    accent: 'violet',
    order: 5,
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
    }
  })
  .sort((a, b) => a.order - b.order)

export function getProduct(slug: string): ProductMeta | undefined {
  return products.find((product) => product.slug === slug)
}

export function isProductSlug(slug: string): slug is ProductSlug {
  return productSlugs.includes(slug as ProductSlug)
}
