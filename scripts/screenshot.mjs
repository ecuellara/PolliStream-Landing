import { mkdirSync } from 'node:fs'
import puppeteer from 'puppeteer-core'

const base = process.env.BASE_URL ?? 'http://localhost:4321'
const out = '.impeccable/review'
mkdirSync(out, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})

const errors = []
const failed = []

async function capture(name, url, width, height, fullPage = true) {
  const page = await browser.newPage()
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push({ page: name, text: message.text() })
  })
  page.on('pageerror', (error) => errors.push({ page: name, text: String(error) }))
  page.on('requestfailed', (request) => {
    failed.push({ page: name, url: request.url(), error: request.failure()?.errorText })
  })
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.goto(`${base}${url}`, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  // Trigger IntersectionObserver reveals before the full-page capture.
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto'
    const step = Math.max(320, Math.floor(window.innerHeight * 0.7))
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 120))
    }
    window.scrollTo(0, document.documentElement.scrollHeight)
    await new Promise((resolve) => setTimeout(resolve, 700))
    window.scrollTo(0, 0)
    await new Promise((resolve) => setTimeout(resolve, 700))
  })
  await page.screenshot({ path: `${out}/${name}.png`, fullPage })
  const title = await page.title()
  await page.close()
  return title
}

const results = []
results.push({ name: 'desktop', title: await capture('desktop', '/', 1440, 1000) })
results.push({ name: 'mobile', title: await capture('mobile', '/', 390, 844) })
results.push({ name: 'product-lg', title: await capture('product-lg', '/lg/', 1440, 1000) })
results.push({ name: 'download-lg', title: await capture('download-lg', '/lg/descargar/', 1440, 1000) })
results.push({ name: 'en-home', title: await capture('en-home', '/en/', 1440, 1000) })
results.push({ name: 'legal', title: await capture('legal', '/legal/privacidad/', 1440, 1000) })

await browser.close()
console.log(JSON.stringify({ results, errors, failed }, null, 2))
