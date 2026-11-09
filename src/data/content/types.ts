import type { ProductSlug } from '../products'

export type Locale = 'es' | 'en' | 'pt'

export type Stat = { value: string; label: string }

export type FeatureItem = {
  index: string
  tag: string
  title: string
  body: string
}

export type SignalNode = {
  index: string
  title: string
  body: string
}

export type Step = {
  index: string
  title: string
  body: string
  /** Optional checklist with the full detail for this step. */
  details?: string[]
  /** Optional terminal commands shown in a code block. */
  commands?: string[]
}

export type ProductCopy = {
  kicker: string
  title: string
  tagline: string
  description: string
  features: FeatureItem[]
  requirements: string[]
  install: Step[]
  note?: string
}

export type LegalSection = { title: string; body: string[] }

export type LegalDoc = {
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export type Common = {
  download: string
  downloadFree: string
  viewPlatforms: string
  chooseScreen: string
  comingSoon: string
  available: string
  version: string
  size: string
  format: string
  updated: string
  requirements: string
  install: string
  otherScreens: string
  back: string
  open: string
  close: string
  menu: string
  language: string
  readMore: string
  adLabel: string
  sponsor: string
  sponsorCta: string
  adsOff: string
  adsOffBody: string
  activateAds: string
  consentTitle: string
  consentBody: string
  consentAccept: string
  consentEssential: string
  consentLink: string
  external: string
  share: string
  copied: string
  downloads: string
  notFoundTitle: string
  notFoundBody: string
  goHome: string
  skip: string
  breadcrumb: string
}

export type Content = {
  meta: {
    title: string
    description: string
    ogAlt: string
  }
  common: Common
  nav: {
    platforms: string
    features: string
    install: string
    faq: string
    support: string
    download: string
  }
  device: {
    live: string
    now: string
    signal: string
    channel: string
    titleLine1: string
    titleLine2: string
    sample: string
    guide: string
    guideItems: string[]
    audio: string
    subtitles: string
    quality: string
  }
  hero: {
    eyebrow: string
    titleA: string
    titleB: string
    description: string
    primary: string
    secondary: string
    stats: Stat[]
    demoLabel: string
    selectLabel: string
    deviceLabels: Record<ProductSlug, string>
    microcopy: string
  }
  platforms: {
    kicker: string
    title: string
    body: string
    cta: string
    live: string
    soon: string
    all: string
  }
  features: {
    kicker: string
    title: string
    body: string
    items: FeatureItem[]
  }
  signal: {
    kicker: string
    title: string
    body: string
    nodes: SignalNode[]
    note: string
    cta: string
  }
  install: {
    kicker: string
    title: string
    body: string
    steps: Step[]
    note: string
  }
  download: {
    kicker: string
    title: string
    description: string
    preparing: string
    ready: string
    countdown: string
    button: string
    lockerButton: string
    soonTitle: string
    soonBody: string
    back: string
    securityTitle: string
    security: string[]
    partnerNote: string
    adNote: string
    file: string
    version: string
    size: string
    format: string
    checksum: string
    whatsNext: string
    whatsNextBody: string
    openInstaller: string
    tutorialKicker: string
    tutorialTitle: string
    tutorialBody: string
    tutorialPrep: string
    tutorialPrepBody: string
    tutorialStep: string
    tutorialImage: string
    tutorialVideo: string
    tutorialVideoSoon: string
    pairingScript: string
  }
  support: {
    kicker: string
    title: string
    body: string
    donate: string
    share: string
    copied: string
    fallback: string
    shareTitle: string
    shareBody: string
    yapeTitle: string
    yapeBody: string
    yapeCta: string
    paypalTitle: string
    paypalBody: string
    paypalCta: string
    yapeModalTitle: string
    yapeModalBody: string
    yapeSteps: string[]
    yapeDownload: string
    yapeClose: string
    yapePending: string
  }
  affiliate: {
    kicker: string
    title: string
    body: string
    cta: string
    disclosure: string
  }
  faq: {
    kicker: string
    title: string
    items: { question: string; answer: string }[]
  }
  footer: {
    tagline: string
    product: string
    platforms: string
    support: string
    legal: string
    allPlatforms: string
    privacy: string
    terms: string
    cookies: string
    contact: string
    disclaimer: string
    copyright: string
    madeFor: string
    status: string
  }
  product: {
    breadcrumb: string
    sectionKicker: string
    sectionTitle: string
    about: string
    specs: string
    requirements: string
    install: string
    other: string
    related: string
    items: Record<ProductSlug, ProductCopy>
  }
  legal: {
    hubTitle: string
    hubBody: string
    privacy: LegalDoc
    terms: LegalDoc
    cookies: LegalDoc
    backHome: string
  }
  notFound: {
    title: string
    body: string
    cta: string
  }
}
