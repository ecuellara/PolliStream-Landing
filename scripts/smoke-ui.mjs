import puppeteer from 'puppeteer-core'

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars'],
})

const base = process.env.BASE_URL ?? 'http://localhost:4321'
const page = await browser.newPage()
const results = {}

await page.setViewport({ width: 1440, height: 1000 })
await page.goto(`${base}/`, { waitUntil: 'networkidle0' })

results.consentHidden = await page.$eval('[data-consent-banner]', (el) => el.hasAttribute('hidden'))
results.desktopOverflow = await page.evaluate(
  () => document.documentElement.scrollWidth - window.innerWidth,
)
results.deviceBefore = await page.$eval('[data-device]', (el) => el.getAttribute('data-device'))
await page.click('[data-platform-pick="android"]')
await new Promise((resolve) => setTimeout(resolve, 300))
results.deviceAfter = await page.$eval('[data-device]', (el) => el.getAttribute('data-device'))
results.platformLink = await page.$eval('[data-platform-link]', (el) => el.getAttribute('href'))
results.pickerPressed = await page.$$eval('[data-platform-pick]', (els) =>
  els.map((el) => ({ slug: el.dataset.platformPick, pressed: el.getAttribute('aria-pressed') })),
)

await page.setViewport({ width: 390, height: 844 })
await page.reload({ waitUntil: 'networkidle0' })
results.mobileOverflow = await page.evaluate(
  () => document.documentElement.scrollWidth - window.innerWidth,
)
results.menuClosed = await page.$eval('[data-mobile-nav]', (el) => el.dataset.open ?? 'unset')
await page.click('[data-menu-toggle]')
results.menuOpen = await page.$eval('[data-mobile-nav]', (el) => el.dataset.open)
results.menuExpanded = await page.$eval('[data-menu-toggle]', (el) => el.getAttribute('aria-expanded'))
await page.keyboard.press('Escape')
results.menuAfterEscape = await page.$eval('[data-mobile-nav]', (el) => el.dataset.open)

await page.setViewport({ width: 1440, height: 1000 })
await page.goto(`${base}/lg/descargar/`, { waitUntil: 'networkidle0' })
await new Promise((resolve) => setTimeout(resolve, 3800))
results.downloadDisabled = await page.$eval('[data-download-button]', (el) =>
  el.getAttribute('aria-disabled'),
)
results.downloadHref = await page.$eval('[data-download-button]', (el) => el.getAttribute('href'))
results.downloadStatus = await page.$eval('[data-download-status]', (el) => el.textContent?.trim())

await page.goto(`${base}/lg/`, { waitUntil: 'networkidle0' })
results.productTitle = await page.$eval('h1', (el) => el.textContent?.trim())
results.productDownloadHref = await page.$eval('.hero-actions a.btn-primary', (el) =>
  el.getAttribute('href'),
)

await browser.close()
console.log(JSON.stringify(results, null, 2))
