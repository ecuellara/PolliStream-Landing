import { es } from '../data/content/es'
import { en } from '../data/content/en'
import { pt } from '../data/content/pt'
import type { Content, Locale } from '../data/content/types'
import type { ProductSlug } from '../data/products'

export const locales = ['es', 'en', 'pt'] as const
export const defaultLocale: Locale = 'es'
export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
}
export const localeShort: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
}
export const htmlLang: Record<Locale, string> = {
  es: 'es',
  en: 'en',
  pt: 'pt',
}
export const ogLocale: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
  pt: 'pt_BR',
}

export const content: Record<Locale, Content> = { es, en, pt }

export const platformLabels: Record<Locale, Record<ProductSlug, string>> = {
  es: {
    lg: 'Smart TV',
    samsung: 'Smart TV',
    android: 'Móvil y tablet',
    'android-tv': 'TV y Fire TV',
    windows: 'PC',
  },
  en: {
    lg: 'Smart TV',
    samsung: 'Smart TV',
    android: 'Phone & tablet',
    'android-tv': 'TV & Fire TV',
    windows: 'PC',
  },
  pt: {
    lg: 'Smart TV',
    samsung: 'Smart TV',
    android: 'Celular e tablet',
    'android-tv': 'TV e Fire TV',
    windows: 'PC',
  },
}

export function platformLabel(locale: Locale, slug: ProductSlug): string {
  return platformLabels[locale][slug]
}

export type LegalDocSlug = 'privacy' | 'terms' | 'cookies'

const segments = {
  es: { download: 'descargar', legal: 'legal', privacy: 'privacidad', terms: 'terminos', cookies: 'cookies' },
  en: { download: 'download', legal: 'legal', privacy: 'privacy', terms: 'terms', cookies: 'cookies' },
  pt: { download: 'download', legal: 'legal', privacy: 'privacidade', terms: 'termos', cookies: 'cookies' },
} as const

const legalSlugs: Record<Locale, Record<LegalDocSlug, string>> = {
  es: { privacy: 'privacidad', terms: 'terminos', cookies: 'cookies' },
  en: { privacy: 'privacy', terms: 'terms', cookies: 'cookies' },
  pt: { privacy: 'privacidade', terms: 'termos', cookies: 'cookies' },
}

export function getContent(locale: Locale): Content {
  return content[locale]
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`
}

export function homePath(locale: Locale): string {
  return `${localePrefix(locale)}/`
}

export function productPath(locale: Locale, slug: ProductSlug): string {
  return `${localePrefix(locale)}/${slug}/`
}

export function downloadPath(locale: Locale, slug: ProductSlug): string {
  return `${localePrefix(locale)}/${slug}/${segments[locale].download}/`
}

export function legalPath(locale: Locale, doc: LegalDocSlug): string {
  return `${localePrefix(locale)}/${segments[locale].legal}/${legalSlugs[locale][doc]}/`
}

export function legalDocFromSlug(locale: Locale, slug: string): LegalDocSlug | undefined {
  const entry = Object.entries(legalSlugs[locale]).find(([, value]) => value === slug)
  return entry?.[0] as LegalDocSlug | undefined
}

export function alternatesForHome(): Record<Locale, string> {
  return {
    es: homePath('es'),
    en: homePath('en'),
    pt: homePath('pt'),
  }
}

export function alternatesForProduct(slug: ProductSlug): Record<Locale, string> {
  return {
    es: productPath('es', slug),
    en: productPath('en', slug),
    pt: productPath('pt', slug),
  }
}

export function alternatesForDownload(slug: ProductSlug): Record<Locale, string> {
  return {
    es: downloadPath('es', slug),
    en: downloadPath('en', slug),
    pt: downloadPath('pt', slug),
  }
}

export function alternatesForLegal(doc: LegalDocSlug): Record<Locale, string> {
  return {
    es: legalPath('es', doc),
    en: legalPath('en', doc),
    pt: legalPath('pt', doc),
  }
}

export function formatTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`)
}
