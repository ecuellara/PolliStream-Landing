import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const site = process.env.SITE_URL ?? 'https://pollistream.pages.dev'

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
