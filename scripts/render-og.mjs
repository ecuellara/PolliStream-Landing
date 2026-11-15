#!/usr/bin/env node
/**
 * Renders the 1200x630 Open Graph cards from the same brand fonts, colours and
 * logo used by the site, so the social preview never drifts from the landing.
 *
 * Usage: npm run og:render
 * Requires Chrome or Edge installed (puppeteer-core).
 */
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const asset = (path, mime) =>
  `data:${mime};base64,${readFileSync(resolve(root, path)).toString('base64')}`
const fontUri = (name) => asset(`src/assets/fonts/${name}`, 'font/woff2')
const iconUri = asset('public/brand/icon-256.png', 'image/png')
const outDir = resolve(root, 'public/brand')

const cards = [
  { file: 'og-es.png', a: 'Tu reproductor.', b: 'En la pantalla que elijas.' },
  { file: 'og-en.png', a: 'Your player.', b: 'On the screen you choose.' },
  { file: 'og-pt.png', a: 'Seu reprodutor.', b: 'Na tela que você escolher.' },
]

const chips = ['LG webOS', 'Samsung Tizen', 'Android TV', 'Windows']

const html = (card) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Bricolage';
    src: url('${fontUri('bricolage-latin.woff2')}') format('woff2');
    font-weight: 200 800;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Inter';
    src: url('${fontUri('inter-latin.woff2')}') format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'JBMono';
    src: url('${fontUri('jetbrains-mono-latin.woff2')}') format('woff2');
    font-weight: 100 800;
    font-style: normal;
    font-display: block;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1200px; height: 630px; background: #050706; }
  body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
  .card {
    position: relative;
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: #050706;
  }
  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(70% 90% at 0% 100%, rgba(198, 255, 61, 0.20), transparent 60%),
      radial-gradient(60% 80% at 100% 0%, rgba(198, 255, 61, 0.07), transparent 55%);
  }
  .content {
    position: absolute;
    left: 96px;
    top: 315px;
    transform: translateY(-50%);
    width: 1008px;
    display: flex;
    align-items: center;
    gap: 52px;
  }
  .mark {
    width: 132px;
    height: 132px;
    flex: none;
    border-radius: 30px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  }
  .wordmark {
    font-family: 'Bricolage', sans-serif;
    font-weight: 700;
    font-size: 86px;
    line-height: 1;
    letter-spacing: -0.045em;
    color: #f3f7ef;
    font-synthesis: none;
  }
  .wordmark span { color: #c6ff3d; }
  .tagline {
    margin-top: 22px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 33px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #94a39a;
  }
  .tagline strong { color: #f3f7ef; font-weight: 500; }
  .chips {
    display: flex;
    gap: 10px;
    margin-top: 34px;
  }
  .chip {
    display: inline-block;
    padding: 9px 14px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    color: #c9d4cd;
    font-family: 'JBMono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="grid"></div>
    <div class="glow"></div>
    <div class="content">
      <img class="mark" src="${iconUri}" width="132" height="132" alt="">
      <div>
        <div class="wordmark">Polli<span>Stream</span></div>
        <div class="tagline"><strong>${card.a}</strong> ${card.b}</div>
        <div class="chips">
          ${chips.map((chip) => `<span class="chip">${chip}</span>`).join('\n          ')}
        </div>
      </div>
    </div>
  </div>
</body>
</html>`

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter((path) => path && existsSync(path))

if (candidates.length === 0) {
  console.error('[og] No Chrome or Edge found. Set CHROME_PATH.')
  process.exit(1)
}

const browser = await puppeteer.launch({
  executablePath: candidates[0],
  headless: 'new',
  args: ['--no-sandbox', '--font-render-hinting=none'],
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
  mkdirSync(outDir, { recursive: true })

  for (const card of cards) {
    await page.setContent(html(card), { waitUntil: 'load' })
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({
      path: resolve(outDir, card.file),
      clip: { x: 0, y: 0, width: 1200, height: 630 },
      type: 'png',
    })
    console.log(`[og] ${card.file}`)
  }
} finally {
  await browser.close()
}
