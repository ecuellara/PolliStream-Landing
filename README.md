# PolliStream Landing

Landing estática de PolliStream para Cloudflare Pages. Explica el reproductor, lleva a cada visitante al instalador de su plataforma y deja preparados los puntos de monetización: anuncios por visitas, enlaces CPA de descarga, donaciones y afiliados IPTV.

- Stack: Astro 7 + Tailwind CSS 4.
- Idiomas: español (`/`), inglés (`/en/`) y portugués (`/pt/`).
- Salida: HTML estático en `dist/`.
- Sin backend ni base de datos.
- Proyecto independiente y autocontenido en `E:\PolliStream-Landing`.
- Descargas: los instaladores se sirven desde una release pública en GitHub; no se incluyen en el build de Pages.
- Diseño: [`DESIGN.md`](DESIGN.md). Ficha de producto: [`PRODUCT.md`](PRODUCT.md).

## Arranque

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
npm run check     # Astro + TypeScript
```

## Dónde se configura cada cosa

| Qué | Archivo |
|---|---|
| Dominio, email de contacto, analytics | `src/data/site.ts` + `.env` |
| Versiones, tamaños, URLs, videos y script opcional de vinculación | `src/data/products.ts` |
| Anuncios (AdSense / Adsterra / custom) | `src/data/ads.ts` |
| Donaciones / Ko-fi / PayPal | `src/data/site.ts` (`support.links`) |
| Afiliados IPTV | `src/data/site.ts` (`affiliate.links`) |
| Copy ES / EN / PT | `src/data/content/*.ts` |
| Cabeceras y caché de Cloudflare | `public/_headers` |
| Redirecciones cortas | `public/_redirects` |
| Proyecto de Pages | `wrangler.toml` |

### Variables de entorno

Copia `.env.example` a `.env` y cambia lo que necesites. En Cloudflare Pages se configuran como variables de build (Production y Preview).

```env
SITE_URL=https://pollistream.pages.dev
PUBLIC_CF_BEACON_TOKEN=
PUBLIC_PLAUSIBLE_DOMAIN=
PUBLIC_CONTACT_EMAIL=
INSTALLERS_DIR=installers
```

`SITE_URL` se usa para canonical, hreflang, sitemap y Open Graph. Cuando conectes el dominio propio, cámbialo y vuelve a desplegar.

## Descargas

### Instaladores en GitHub Releases

El proyecto del sitio es privado, por eso los binarios se publican en el repositorio público separado `ecuellara/PolliStream-Downloads`. Las rutas de descarga usan la release `downloads` y nombres de asset estables. El build de Pages no empaqueta los instaladores, incluido el `.exe` de 167 MB.

Deja los binarios en `installers/<plataforma>/` y ejecuta:

```bash
npm run github:upload
```

El comando sincroniza los archivos y los crea o actualiza como assets de la release de GitHub. Requiere `gh` instalado y autenticado con permiso de escritura en el repositorio público. Samsung Legacy y Samsung moderno usan `.wgt`, Android y Android TV `.apk`, Windows `.exe`, LG `.ipk`, Roku `.zip`, macOS `.dmg`/`.pkg` e iOS/iPad `.ipa` cuando exista una distribución válida.

Los nombres públicos siguen el formato `pollistream-<plataforma>.<extensión>` (por ejemplo, `pollistream-lg.ipk` y `pollistream-samsung-modern.wgt`). `/samsung/` conserva el paquete Legacy para Tizen 3.0; la versión moderna tiene una ficha separada y seguirá como «Próximamente» hasta publicar su build. Roku, macOS e iOS/iPad también permanecen pendientes hasta contar con paquetes probados.

Cada descarga disponible incluye una guía con pasos e ilustraciones. Configura `tutorialVideoUrl` en `src/data/products.ts` para añadir un video de YouTube o Facebook. El campo opcional `pairingScriptUrl` permitirá enlazar el script de vinculación del televisor cuando esté publicado.

## Monetización

### 1. Anuncios por visitas

Hay slots en home, ficha de producto y página de descarga. El componente `AdSlot.astro` renderiza un espacio de patrocinador mientras no haya red configurada.

**AdSense** (`src/data/ads.ts`):

```ts
provider: 'adsense',
adsense: {
  client: 'ca-pub-XXXXXXXXXXXXXXXX',
  slots: {
    'home-top': '',
    'home-mid': '1234567890',
    product: '1234567890',
    download: '1234567890',
    legal: '',
  },
}
```

**Adsterra**:

```ts
provider: 'adsterra',
adsterra: { key: 'TU_KEY', width: 728, height: 90 },
```

**Custom / cualquier red**:

```ts
provider: 'custom',
custom: { html: `<!-- pega aquí el snippet de tu red -->` },
```

Los scripts de anuncios **solo se cargan después de aceptar el aviso de cookies**. Si no hay red configurada, el aviso no aparece. Esto es intencionado: no pedir consentimiento para anuncios que no existen.

Si usas AdSense, añade también `public/ads.txt` con tu línea de vendedor autorizado:

```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

Y declara el dominio en Search Console / AdSense antes de pedir revisión.

> Aviso realista: AdSense suele revisar con dureza apps/webs de IPTV. Si rechazan el sitio, prueba Adsterra, Ezoic, PropellerAds o venta directa de patrocinios. No compres tráfico ni incentives clics: puede tumbar la cuenta.

### 2. Descargas con CPA / link locker

Pon la URL del locker en `lockerUrl`. El flujo queda así:

1. El visitante elige plataforma.
2. Ve una página `/lg/descargar/` con la ficha, aviso de socio y anuncios.
3. Tras 3 segundos se habilita el botón.
4. El botón abre el locker/CPA en pestaña nueva.
5. La descarga real la entrega el socio.

El botón directo sigue disponible si no configuras locker. No se oculta la descarga ni se usan botones falsos.

### 3. Donaciones / premium

Añade enlaces reales en `src/data/site.ts`:

```ts
export const support = {
  enabled: true,
  links: [
    { label: 'Ko-fi', url: 'https://ko-fi.com/tu-usuario' },
    { label: 'PayPal', url: 'https://paypal.me/tu-usuario' },
  ],
}
```

Si `links` está vacío, la sección muestra un botón para compartir el sitio en lugar de un enlace de donación roto.

### 4. Afiliados IPTV

```ts
export const affiliate = {
  enabled: true,
  links: [
    {
      name: 'Proveedor X',
      url: 'https://proveedor.example/afiliado',
      note: 'Plan mensual',
      badge: 'Recomendado',
    },
  ],
}
```

La sección solo aparece si hay enlaces. Los enlaces se marcan como `rel="sponsored"` y llevan el aviso de afiliado. No inventes partners ni comisiones.

## Despliegue en Cloudflare Pages

### Opción A: desde el dashboard

1. Conecta el repo de GitHub de **este proyecto** (`E:\PolliStream-Landing`).
2. **Root directory**: `/` (la raíz del repo).
3. **Build command**: `npm run build`.
4. **Build output directory**: `dist`.
5. **Node version**: `22.23.4` o superior (Astro 7 lo exige). En Pages puedes fijarlo con la variable `NODE_VERSION=22.23.4`.
6. Variables de entorno: las de `.env.example`.
7. Deploy.

Si el build de CI no tiene el IPK, sube el instalador a R2/GitHub Releases o define `LG_IPK_URL`.

### Opción B: Wrangler

```bash
npm run build
npx wrangler pages deploy dist --project-name pollistream
```

### Opción C: GitHub Actions

El workflow `.github/workflows/deploy.yml` compila y despliega en cada push a `main` de este proyecto.

Secrets/vars necesarios en GitHub:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `SITE_URL` (variable)
- `PUBLIC_CF_BEACON_TOKEN` (opcional)
- `PUBLIC_R2_BASE_URL` (opcional)
- `PUBLIC_CONTACT_EMAIL` (opcional)

### Dominio propio

1. Compra/usa el dominio.
2. En Cloudflare Pages → Custom domains, añade `pollistream.com` y `www`.
3. Actualiza `SITE_URL` y vuelve a desplegar.
4. Actualiza `public/robots.txt` no: se genera desde `src/pages/robots.txt.ts` con `SITE_URL`.
5. Envía `https://tudominio.com/sitemap.xml` en Search Console.

## Analítica

- **Cloudflare Web Analytics**: crea el beacon en el dashboard y pon el token en `PUBLIC_CF_BEACON_TOKEN`. Es cookieless.
- **Plausible** (opcional): `PUBLIC_PLAUSIBLE_DOMAIN=pollistream.com`.
- Eventos personalizados: `download_view`, `download_click`, `platform_select`, `consent_ads`, `consent_essential`, `share_click`, `affiliate_click`.

## Legal y confianza

Antes de lanzar:

- Configura `PUBLIC_CONTACT_EMAIL`; las páginas legales lo usan.
- Revisa las plantillas de privacidad, términos y cookies con un profesional. Son textos base, no asesoría legal.
- Añade el titular legal (nombre/empresa) y dirección si tu jurisdicción lo exige.
- Mantén la frase de que PolliStream es un reproductor y no vende/alójan contenido.
- No publiques capturas, testimonios, cifras de descargas ni logos de terceros que no tengas.
- Si usas AdSense/Adsterra, declara cookies y consentimiento correctamente.
- Si usas CPA, revisa que la oferta y el locker cumplan las políticas de la red y no induzcan a error.

## i18n

Rutas:

| ES | EN | PT |
|---|---|---|
| `/` | `/en/` | `/pt/` |
| `/lg/` | `/en/lg/` | `/pt/lg/` |
| `/lg/descargar/` | `/en/lg/download/` | `/pt/lg/download/` |
| `/legal/privacidad/` | `/en/legal/privacy/` | `/pt/legal/privacidade/` |

Para añadir un idioma: crea `src/data/content/<locale>.ts` con el mismo tipo `Content`, añade el locale en `src/lib/i18n.ts` y crea las rutas equivalentes. El sitemap y los hreflang se generan desde los helpers.

## Comprobaciones antes de publicar

```bash
npm run build
npm run check
node scripts/screenshot.mjs   # capturas en .impeccable/review/
```

Checklist manual:

- [ ] `SITE_URL` y `PUBLIC_CONTACT_EMAIL` configurados.
- [ ] URLs de descarga reales o estado Próximamente correcto.
- [ ] Ad network configurada y consentimiento probado.
- [ ] Política de privacidad/términos/cookies revisadas.
- [ ] Dominio y `sitemap.xml` en Search Console.
- [ ] Probar en móvil: menú, selector de plataforma, descarga.
- [ ] Probar sin JS: la descarga directa debe seguir funcionando.
- [ ] Comprobar que el IPK descarga y se instala.

## Estructura

```text
E:\PolliStream-Landing\
├─ installers/                instaladores locales (gitignored)
├─ public/
│  ├─ brand/                 iconos y OG
│  ├─ _headers               seguridad y caché
│  ├─ _redirects             enlaces cortos
│  └─ downloads/             copia generada en build (gitignored)
├─ scripts/
│  ├─ load-env.mjs           carga .env para los scripts
│  ├─ sync-installers.mjs    copia el IPK de LG
│  ├─ upload-r2.mjs          sube instaladores a R2
│  └─ screenshot.mjs         capturas de revisión
├─ src/
│  ├─ assets/fonts/          fuentes locales
│  ├─ components/            secciones y layouts
│  ├─ data/                  productos, anuncios, site, copy
│  ├─ lib/                   i18n y rutas
│  ├─ pages/                 rutas ES/EN/PT
│  ├─ scripts/               UI, consentimiento, anuncios, gate
│  └─ styles/global.css      sistema visual
├─ astro.config.mjs
├─ wrangler.toml
└─ README.md
```
