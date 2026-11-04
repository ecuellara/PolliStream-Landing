# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS, static output, deployed on Cloudflare Pages. Spanish is the default locale; English and Portuguese are localized routes. Downloads are hosted on Cloudflare R2 or GitHub Releases and linked from a central manifest. The site is a standalone project at `E:\PolliStream-Landing`; it does not share the TV app build or repository.

## Users

People who already have a legal IPTV subscription (Xtream Codes) and need a reliable player for one or more screens: a living-room Smart TV (LG webOS, Samsung Tizen), an Android TV / Fire TV device, an Android phone/tablet, or a Windows PC. They are usually comparing installers, checking whether their device is supported, and looking for a download that does not require an account with the player vendor. Secondary audience: visitors sent by word of mouth who need to understand what the app does before installing it.

## Product Purpose

PolliStream is a multi-platform IPTV player. The landing exists to explain the product clearly, help a visitor choose the right build for their device, and deliver the installer. Success means a qualified visitor reaches the correct download with enough confidence to install it, while the site generates sustainable revenue through advertising, download offers, donations, and clearly disclosed affiliate links.

## Positioning

One player, one Xtream list, every screen the household already owns. Unlike services that resell content, PolliStream is a player: it connects directly to the provider the user already pays for, does not require a PolliStream account, and does not route credentials through PolliStream servers. The interface is designed for a remote control first, not a desktop browser shrunk onto a TV.

## Operating Context

- The TV app is built for LG webOS 4.x+ and uses a local service for embedded audio/subtitle track extraction on LG.
- Additional clients exist for Samsung Tizen, Android mobile, Android TV, and Windows; their installers are published separately.
- LG installs through the webOS developer flow (Developer Mode + `ares-install`) or a packaged `.ipk`; Android installs from an `.apk`; Windows from an `.exe`/installer; Samsung follows the Tizen install path used by the publisher.
- Downloads may be direct, hosted on R2/GitHub Releases, or routed through a CPA/locker link. The site must never imply that a download is available when no URL is configured.
- The site will run on a free `*.pages.dev` subdomain until a custom domain is connected.
- The product is legal only when used with a provider the user is authorized to access; the site states this and does not supply playlists, credentials, or copyrighted content.

## Capabilities and Constraints

Confirmed app capabilities (from the TV implementation): Xtream Codes connection, live channel categories and search, movies and series catalogs, profiles (including a kids profile), parental PIN for adult content, favorites, watch history / continue watching, skip-intro marks, quick A/B channel switching, saved accounts, and multi-audio/subtitle track selection where the source and platform support it. The app runs without a PolliStream backend.

Undecided or publisher-supplied facts: final installer URLs, versions and file sizes for Samsung/Android/Android TV/Windows, legal entity and contact address, custom domain, ad-network accounts, CPA network, donation links, and affiliate partners. These are configuration values, not invented content.

Constraints: static hosting (no server-side user data), ad scripts must be consent-gated where required, no fake testimonials or download counts, no claims of content rights, no unauthorized streaming links, and no auto-download that bypasses the user's confirmation.

## Brand Commitments

Name: PolliStream (the TV package id is `com.pollistv.app`). Existing icon assets in `icons/` and `public/icons/` use a black ground with a white/lime TV outline, a play mark, and a lime-to-cyan signal ring. The landing may use the icon and those signal colors, but must not reuse the AI-generated splash image that carries a third-party watermark. Voice: direct, technical enough to earn trust, never hypey; Spanish-first with English and Portuguese equivalents.

## Evidence on Hand

- `icons/icon-master.png`, `icons/icon-400.png`, `icons/icon-80.png`: brand mark.
- `public/icons/splash-1920x1080.png`: contains a visible third-party watermark; not for publishing.
- `com.pollistv.app_1.0.4_all.ipk`: LG build, version 1.0.4.
- `docs/`: architecture and UX evidence for the TV app.
- No approved product screenshots, testimonials, press mentions, download counts, or revenue figures exist. Future work must not fabricate them; the UI mock in the landing is an illustrative product demo, not a screenshot.

## Product Principles

1. Route every visitor to the build that actually fits their device; a wrong download is a lost user.
2. Prove the player with an honest, authored interface demo rather than stock imagery or invented social proof.
3. Monetization must never hide the download, fake scarcity, or block access behind deceptive buttons.
4. Keep the visitor's credentials and viewing data out of PolliStream's hands; say so plainly.
5. Publish only confirmed versions, sizes, and links; "coming soon" is better than a broken installer.

## Accessibility & Inclusion

The landing targets WCAG 2.2 AA: keyboard-operable navigation and download flow, visible focus, reduced-motion support, semantic headings, sufficient contrast, and readable type at mobile and desktop sizes. The TV app itself is remote-first; the landing should mention remote-friendly installation steps without requiring a mouse.
