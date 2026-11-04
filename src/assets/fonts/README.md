# Fonts

Self-hosted latin subsets, copied from Fontsource packages:

- **Inter Variable** — SIL Open Font License 1.1. Body text and UI.
- **Bricolage Grotesque Variable** — SIL Open Font License 1.1. Display headlines, card names, footer wordmark.
- **JetBrains Mono Variable** — SIL Open Font License 1.1. Mono labels and telemetry.

Only the `latin` subset is shipped, which covers Spanish, English and Portuguese diacritics. The source files live here and are loaded by `src/styles/global.css` with `@font-face` and `font-display: optional`.
