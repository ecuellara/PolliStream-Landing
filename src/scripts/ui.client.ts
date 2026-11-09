export {}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: Array<Record<string, unknown>>
    adsbygoogle?: Array<Record<string, unknown>>
  }
}

const CONSENT_KEY = 'pollistream-consent'
type Consent = 'ads' | 'essential' | null

function getConsent(): Consent {
  try {
    const value = localStorage.getItem(CONSENT_KEY)
    return value === 'ads' || value === 'essential' ? value : null
  } catch {
    return null
  }
}

function setConsent(value: Exclude<Consent, null>): void {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* Storage can be blocked; the session still works without persistence. */
  }
}

function track(name: string, props: Record<string, string | number> = {}): void {
  try {
    window.plausible?.(name, { props })
    window.gtag?.('event', name, props)
    window.dataLayer?.push({ event: name, ...props })
  } catch {
    /* Analytics must never break the page. */
  }
}

function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]')
  const panel = document.querySelector<HTMLElement>('[data-mobile-nav]')
  if (!toggle || !panel) return

  const close = (): void => {
    panel.dataset.open = 'false'
    toggle.setAttribute('aria-expanded', 'false')
  }

  toggle.addEventListener('click', () => {
    const open = panel.dataset.open === 'true'
    panel.dataset.open = open ? 'false' : 'true'
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true')
  })

  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', close))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close()
  })
}

function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]')
  if (!header) return
  const update = (): void => {
    header.classList.toggle('is-scrolled', window.scrollY > 8)
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
}

function initReveal(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  document.documentElement.classList.add('reveal-ready')
  if (items.length === 0) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )

  items.forEach((item) => observer.observe(item))
}

function initPlatformPicker(): void {
  const stage = document.querySelector<HTMLElement>('[data-device-stage]')
  if (!stage) return
  const device = stage.querySelector<HTMLElement>('[data-device]')
  const label = stage.querySelector<HTMLElement>('[data-device-label]')
  const link = stage.querySelector<HTMLAnchorElement>('[data-platform-link]')
  const image = stage.querySelector<HTMLImageElement>('[data-device-image]')
  const buttons = Array.from(stage.querySelectorAll<HTMLButtonElement>('[data-platform-pick]'))
  if (!device || buttons.length === 0) return

  const preloaded = new Set<string>()
  const preloadScreen = (source?: string): void => {
    if (!source || preloaded.has(source)) return
    preloaded.add(source)
    const preload = new Image()
    preload.src = source
  }

  const apply = (button: HTMLButtonElement): void => {
    const slug = button.dataset.platformPick ?? ''
    const name = button.dataset.platformName ?? ''
    const href = button.dataset.platformHref ?? ''
    const screen = button.dataset.platformScreen ?? ''

    buttons.forEach((item) => item.setAttribute('aria-pressed', item === button ? 'true' : 'false'))
    device.dataset.device = slug
    device.dataset.screen = screen ? 'true' : 'false'
    if (image && screen) image.src = screen
    if (label) label.textContent = name
    if (link && href) link.href = href
    track('platform_select', { platform: slug })
  }

  buttons.forEach((button) => {
    const screen = button.dataset.platformScreen
    button.addEventListener('click', () => apply(button))
    button.addEventListener('pointerenter', () => preloadScreen(screen))
    button.addEventListener('focus', () => preloadScreen(screen))
  })
}

function initShare(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-share]').forEach((button) => {
    const originalHtml = button.innerHTML
    button.addEventListener('click', async () => {
      const url = button.dataset.shareUrl ?? window.location.href
      const title = button.dataset.shareTitle ?? document.title
      const copied = button.dataset.copiedLabel ?? 'Copied'
      track('share_click', { page: window.location.pathname })

      const markCopied = (): void => {
        button.textContent = copied
        window.setTimeout(() => {
          button.innerHTML = originalHtml
        }, 2200)
      }

      try {
        if (navigator.share) {
          await navigator.share({ title, url })
          return
        }
        await navigator.clipboard.writeText(url)
        markCopied()
      } catch {
        try {
          await navigator.clipboard.writeText(url)
          markCopied()
        } catch {
          window.prompt('', url)
        }
      }
    })
  })
}

function initTrackedLinks(): void {
  document.querySelectorAll<HTMLElement>('[data-track]').forEach((element) => {
    element.addEventListener('click', () => {
      const name = element.dataset.track ?? 'click'
      const label = element.dataset.trackLabel ?? ''
      track(name, label ? { label } : {})
    })
  })
}

function initDownloadGate(): void {
  const gate = document.querySelector<HTMLElement>('[data-download-gate]')
  if (!gate) return
  const button = gate.querySelector<HTMLAnchorElement>('[data-download-button]')
  if (!button) return

  // Keep the anchor functional without JavaScript, but gate it as soon as the
  // client script is running.
  button.setAttribute('aria-disabled', 'true')
  button.classList.remove('is-ready')

  const status = gate.querySelector<HTMLElement>('[data-download-status]')
  const countdown = gate.querySelector<HTMLElement>('[data-download-countdown]')
  const bar = gate.querySelector<HTMLElement>('[data-download-bar]')
  const readyLabel = gate.dataset.downloadReady ?? ''
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const seconds = reduced ? 1 : Math.max(0, Number(gate.dataset.downloadSeconds ?? 3))
  const total = seconds * 1000
  const started = performance.now()

  track('download_view', {
    product: button.dataset.trackLabel ?? '',
    mode: button.dataset.downloadMode ?? '',
  })

  const ready = (): void => {
    button.setAttribute('aria-disabled', 'false')
    button.classList.add('is-ready')
    if (status) status.textContent = readyLabel
    if (countdown) countdown.textContent = '✓'
    if (bar) bar.style.width = '100%'
  }

  if (total <= 0) {
    ready()
    return
  }

  button.addEventListener('click', (event) => {
    if (button.getAttribute('aria-disabled') === 'true') {
      event.preventDefault()
      return
    }
    track('download_click', {
      product: button.dataset.trackLabel ?? '',
      mode: button.dataset.downloadMode ?? '',
    })
  })

  const tick = (): void => {
    const elapsed = performance.now() - started
    const progress = Math.min(1, elapsed / total)
    if (bar) bar.style.width = `${progress * 100}%`
    if (countdown) countdown.textContent = `${Math.max(0, Math.ceil((total - elapsed) / 1000))}s`
    if (progress >= 1) {
      ready()
      return
    }
    window.requestAnimationFrame(tick)
  }

  window.requestAnimationFrame(tick)
}

function loadAdSense(client: string): Promise<void> {
  const existing = document.querySelector<HTMLScriptElement>('script[data-pollistream-adsense]')
  if (existing) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`
    script.crossOrigin = 'anonymous'
    script.dataset.pollistreamAdsense = 'true'
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('AdSense failed to load')), { once: true })
    document.head.appendChild(script)
  })
}

function makeIframe(html: string, height: number): HTMLIFrameElement {
  const iframe = document.createElement('iframe')
  iframe.style.width = '100%'
  iframe.style.height = `${height}px`
  iframe.style.border = '0'
  iframe.setAttribute('scrolling', 'no')
  iframe.setAttribute('title', 'Advertisement')
  iframe.setAttribute(
    'sandbox',
    'allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms',
  )
  iframe.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}body{display:flex;align-items:center;justify-content:center;min-height:${height}px}</style></head><body>${html}</body></html>`
  return iframe
}

async function initAds(): Promise<void> {
  const slots = Array.from(document.querySelectorAll<HTMLElement>('.ad-slot'))
  if (slots.length === 0) return

  for (const slot of slots) {
    if (slot.dataset.adConfigured !== 'true') continue
    const provider = slot.dataset.adProvider
    const mount = slot.querySelector<HTMLElement>('[data-ad-mount]')
    const placeholder = slot.querySelector<HTMLElement>('[data-ad-placeholder]')
    if (!mount) continue
    if (mount.dataset.adLoaded === 'true') continue

    if (provider === 'adsense') {
      const client = slot.dataset.adsenseClient ?? ''
      const adSlot = slot.dataset.adsenseSlot ?? ''
      if (!client || !adSlot) continue
      try {
        await loadAdSense(client)
        const ins = document.createElement('ins')
        ins.className = 'adsbygoogle'
        ins.style.display = 'block'
        ins.dataset.adClient = client
        ins.dataset.adSlot = adSlot
        ins.dataset.adFormat = 'auto'
        ins.dataset.fullWidthResponsive = 'true'
        mount.hidden = false
        if (placeholder) placeholder.hidden = true
        mount.appendChild(ins)
        window.adsbygoogle = window.adsbygoogle ?? []
        window.adsbygoogle.push({})
        mount.dataset.adLoaded = 'true'
      } catch {
        /* Keep the placeholder when an ad blocker or network blocks the script. */
      }
    } else if (provider === 'adsterra') {
      const key = slot.dataset.adsterraKey ?? ''
      const width = Number(slot.dataset.adsterraWidth ?? 728)
      const height = Number(slot.dataset.adsterraHeight ?? 90)
      const scriptSrc =
        slot.dataset.adsterraScript ||
        `https://www.highperformanceformat.com/${encodeURIComponent(key)}/invoke.js`
      if (!key) continue
      const html = `<script type="text/javascript">atOptions = { key: ${JSON.stringify(key)}, format: 'iframe', height: ${height}, width: ${width}, params: {} };</script><script type="text/javascript" src="${scriptSrc}"></script>`
      mount.hidden = false
      if (placeholder) placeholder.hidden = true
      mount.appendChild(makeIframe(html, height))
      mount.dataset.adLoaded = 'true'
    } else if (provider === 'custom') {
      const template = slot.querySelector<HTMLTemplateElement>('template[data-ad-custom]')
      if (!template) continue
      const height = slot.dataset.format === 'rect' ? 250 : 100
      mount.hidden = false
      if (placeholder) placeholder.hidden = true
      mount.appendChild(makeIframe(template.innerHTML, height))
      mount.dataset.adLoaded = 'true'
    }
  }
}

function showAdsOff(): void {
  document.querySelectorAll<HTMLElement>('.ad-slot').forEach((slot) => {
    const mount = slot.querySelector<HTMLElement>('[data-ad-mount]')
    const placeholder = slot.querySelector<HTMLElement>('[data-ad-placeholder]')
    if (mount) {
      mount.hidden = true
      mount.innerHTML = ''
      delete mount.dataset.adLoaded
    }
    if (placeholder) placeholder.hidden = false
  })
}

function initConsent(): void {
  const banner = document.querySelector<HTMLElement>('[data-consent-banner]')
  const accept = document.querySelector<HTMLButtonElement>('[data-consent-accept]')
  const essential = document.querySelector<HTMLButtonElement>('[data-consent-essential]')
  const openers = document.querySelectorAll<HTMLElement>('[data-consent-open]')
  const consent = getConsent()
  const slots = Array.from(document.querySelectorAll<HTMLElement>('.ad-slot'))
  const hasSlots = slots.length > 0
  const requiresConsent = slots.some(
    (slot) => slot.dataset.adConsentRequired === 'true' && slot.dataset.adConfigured === 'true',
  )

  const open = (): void => {
    if (banner) banner.hidden = false
  }

  if (hasSlots && requiresConsent && !consent && banner) open()
  if (hasSlots && (consent === 'ads' || !requiresConsent)) void initAds()
  if (consent === 'essential') showAdsOff()

  accept?.addEventListener('click', () => {
    const previous = getConsent()
    setConsent('ads')
    if (banner) banner.hidden = true
    track('consent_ads')
    if (previous === 'essential') {
      window.location.reload()
      return
    }
    void initAds()
  })

  essential?.addEventListener('click', () => {
    const previous = getConsent()
    setConsent('essential')
    if (banner) banner.hidden = true
    track('consent_essential')
    if (previous === 'ads') {
      window.location.reload()
      return
    }
    showAdsOff()
  })

  openers.forEach((opener) => opener.addEventListener('click', open))
}

function init(): void {
  initMenu()
  initHeader()
  initReveal()
  initPlatformPicker()
  initShare()
  initTrackedLinks()
  initDownloadGate()
  initConsent()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true })
} else {
  init()
}
