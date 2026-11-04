/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string
  readonly PUBLIC_CF_BEACON_TOKEN?: string
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string
  readonly PUBLIC_R2_BASE_URL?: string
  readonly PUBLIC_CONTACT_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
