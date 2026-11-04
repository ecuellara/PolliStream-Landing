import type { APIRoute } from 'astro'
import { site } from '../data/site'
import { products } from '../data/products'
import { legalPath, locales, productPath, homePath } from '../lib/i18n'

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10)
  const entries: { path: string; alternates: Record<string, string> }[] = []

  entries.push({
    path: homePath('es'),
    alternates: { es: homePath('es'), en: homePath('en'), pt: homePath('pt') },
  })

  for (const product of products) {
    entries.push({
      path: productPath('es', product.slug),
      alternates: {
        es: productPath('es', product.slug),
        en: productPath('en', product.slug),
        pt: productPath('pt', product.slug),
      },
    })
  }

  for (const doc of ['privacy', 'terms', 'cookies'] as const) {
    entries.push({
      path: legalPath('es', doc),
      alternates: {
        es: legalPath('es', doc),
        en: legalPath('en', doc),
        pt: legalPath('pt', doc),
      },
    })
  }

  const urls = entries
    .map((entry) => {
      const links = locales
        .map(
          (locale) =>
            `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(site.url + entry.alternates[locale])}" />`,
        )
        .join('\n')
      return `  <url>
    <loc>${escapeXml(site.url + entry.path)}</loc>
    <lastmod>${today}</lastmod>
${links}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(site.url + entry.alternates.es)}" />
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
