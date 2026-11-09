# PolliStream Landing — Design System

## Direction

**Broadcast signal desk.** The page behaves like a well-kept transmission console: black chassis, phosphor lime as the live signal, electric cyan and blue as secondary channels, mono telemetry for labels, and a large display face for the human voice. The product is demonstrated with an authored player interface, not a stock screenshot. The world is carried by the structure (channel cards, signal flow, download gate, ticker), not by decorative effects.

This is a Persuade surface: the visitor must understand the offer, choose the right screen, and take the download action.

## Color

| Token | Value | Role |
|---|---|---|
| `--color-ink` | `#050706` | Page ground |
| `--color-surface` | `#0a0f0c` | Elevated surface |
| `--color-panel` | `#0e1511` | Cards and panels |
| `--color-paper` | `#f3f7ef` | Primary text |
| `--color-muted` | `#94a39a` | Secondary text |
| `--color-lime` | `#c6ff3d` | Primary action, live signal, focus |
| `--color-cyan` | `#38e8d0` | Secondary signal / Android TV |
| `--color-blue` | `#3b82f6` | Samsung / link accent |
| `--color-violet` | `#a78bfa` | Windows accent |
| `--color-amber` | `#fbbf24` | Reserved warm accent |
| `--color-danger` | `#ff6b5e` | Errors only |

The palette is committed: lime owns the primary action and the ticker; cyan/blue/violet are product-channel identifiers, never decorative confetti. Backgrounds are near-black, not flat #000, so panels and borders remain legible on OLED and LCD.

## Typography

- **Display:** Bricolage Grotesque Variable, 650 weight, tight tracking (`-0.045em`), line-height `0.94`. Used for the hero, section titles, card names, and the footer wordmark.
- **Body:** Inter Variable, 400/500, 16px base, 1.6–1.7 line-height. Chosen for continuity with the TV app, which already ships Inter; the landing's personality comes from the display face and the broadcast system, not from swapping the body face.
- **Telemetry:** JetBrains Mono Variable, 8–12px, `0.08–0.2em` tracking, uppercase. Used for eyebrows, labels, versions, file sizes, channel numbers, legal metadata.

Fonts are self-hosted from `src/assets/fonts/` (latin subset only) and declared with `@font-face` + `font-display: swap`. No Google Fonts or external font CDN.

## Layout and rhythm

- Content width: `min(100% - 2 × gutter, 1240px)` with `--page-gutter: clamp(1rem, 4vw, 4rem)`.
- Header: sticky, 72px, semi-opaque ink with a hairline border.
- Section rhythm: `clamp(4.5rem, 9vw, 8rem)` block padding; tight sections use `clamp(3rem, 6vw, 5rem)`.
- Spacing follows a 4/8px base; cards breathe with 18–32px internal padding.
- Desktop hero: two columns (copy / device stage). Under 1024px the copy becomes `display: contents` and the order is title → lead → actions → microcopy → device → stats, so the product appears earlier in the first mobile viewport.
- Platform grid: 12 columns on desktop (LG 6, Samsung Legacy 6, other platforms 4 each); 2 columns tablet; 1 column mobile.

## Components

### Buttons

`.btn` is a pill with a mono uppercase label, 48px minimum height, 1px border, and a 160ms color/transform transition. Variants:

- `.btn-primary`: lime fill, ink text.
- `.btn-secondary`: transparent, hairline border.
- `.btn-ghost`: no border until hover.
- Disabled: `aria-disabled="true"` or `disabled` with 46% opacity and no transform.

### Platform card

A channel strip: icon tile, index `01 / 09`, status badge, platform label, product name, version/size/format telemetry, and a bottom CTA. Accent is set with `data-accent` and drives the icon, ring, status, and hover border through `color-mix`.

### Device stage

An authored CSS/SVG player interface inside a TV, phone, or window frame. The platform picker changes `data-device` on the frame:

- `lg`, both Samsung builds, `android-tv`, `roku`: 16:9 TV frame.
- `android`, `ios`: 9:18.5 phone frame, sidebar/guide hidden.
- `windows`, `macos`: window chrome, no stand.
- macOS and iOS/iPad use generic Apple-platform device icons.

The stage is labelled “VISTA PREVIA DE INTERFAZ · DATOS DE EJEMPLO” so it is never mistaken for a real screenshot. The visitor drives it; it does not auto-advance, so the page never shifts under them while they read.

### Signal band

Full-bleed lime ticker with black mono text, 34s linear loop. It repeats the feature tags and is decorative (`aria-hidden`); the same information exists in the feature rack.

### Feature rack

A grid of bordered modules with index, tag, title, and body. It is a rack, not a row of equal marketing cards: the border grid and mono indices carry the console grammar.

### Signal flow

A three-node diagram (provider → PolliStream → screen) on a bordered panel. The connector line, dots, and note explain the direct-connection/privacy mechanism. This is the trust section, not a feature list.

### Download gate

A focused card with product summary, a 3-second preparation bar, the final CTA, file metadata, and a security panel. The button is `aria-disabled` until ready. Without JavaScript the link remains usable. The final URL may be a direct installer or a CPA/locker URL; the page never hides the download or fakes a countdown.

Available download pages also render the platform installation guide, illustrative step diagrams, and an optional YouTube/Facebook video. Video links are configured per platform; a future TV-pairing script can be linked through its optional configuration field.

### Ad slots

Dashed “PUBLICIDAD” surfaces with a sponsor placeholder when no network is configured. Configured slots load only after advertising consent. Placeholder copy is honest: “Espacio para patrocinador” / “Tu marca aquí”.

### Consent

A fixed bottom-right dialog with accept/essential choices, stored in `localStorage` under `pollistream-consent`. It only appears when a configured ad network exists. Ads never load before consent. The footer and cookie page can reopen it.

## Motion

- Reveal: 18px rise + fade, 600ms, triggered by IntersectionObserver; disabled under `prefers-reduced-motion`.
- Ticker: 34s linear marquee; stopped under reduced motion.
- Signal pulse/blink: CSS only, low amplitude, 1.6–2.8s.
- Device platform change: max-width/aspect-ratio/border-radius transitions, 420ms.
- No parallax, blur-heavy effects, or scroll-jacking.

## Accessibility

- WCAG 2.2 AA target.
- Skip link, semantic landmarks, one `h1` per page, logical heading order.
- Visible `:focus-visible` lime outline; platform picker is keyboard-operable with `aria-pressed`.
- Icon-only buttons have `aria-label`; the platform picker exposes the platform name.
- Decorative SVGs are `aria-hidden`; demo UI is labelled as sample data.
- Reduced-motion support for reveal, ticker, and countdown.
- Ads are consent-gated; no auto-download; the download anchor keeps its href if JavaScript is unavailable.
- Lighthouse (production build): Performance 100, Accessibility 100, Best Practices 100, SEO 100.

## Content rules

- No invented testimonials, download counts, press mentions, ratings, or revenue figures.
- Only publish a download URL when it exists; otherwise show “Próximamente”.
- Demo interface data is labelled as sample data.
- The legal pages are base templates; the publisher must add their legal entity and contact email before launch.
- Paid/affiliate links carry a visible disclosure and `rel="sponsored"`.

## Files

- Tokens and primitives: `src/styles/global.css`
- Product/download manifest: `src/data/products.ts`
- Site, support, affiliate: `src/data/site.ts`
- Ads: `src/data/ads.ts`
- Copy ES/EN/PT: `src/data/content/*.ts`
- Routes and hreflang: `src/lib/i18n.ts`
- UI behavior: `src/scripts/ui.client.ts`
- Components: `src/components/`
- Pages: `src/pages/`
