# PolliStream Landing

Landing estática de PolliStream para Cloudflare Pages. Explica el reproductor, lleva a cada visitante al instalador de su plataforma y deja preparados los puntos de monetización: anuncios por visitas, enlaces CPA de descarga, donaciones y afiliados IPTV.

- Stack: Astro 7 + Tailwind CSS 4.
- Idiomas: español (`/`), inglés (`/en/`) y portugués (`/pt/`).
- Salida: HTML estático en `dist/`.
- Sin backend ni base de datos.
- Proyecto independiente y autocontenido en `E:\PolliStream-Landing`.
- Descargas LG: el IPK se copia desde `installers/` al build.
- Descargas del resto: se configuran en un solo archivo.
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
| Dominio, email de contacto, R2, analytics | `src/data/site.ts` + `.env` |
| Versiones, tamaños y URLs de descarga | `src/data/products.ts` |
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
PUBLIC_R2_BASE_URL=
PUBLIC_CONTACT_EMAIL=
LG_IPK_URL=
LG_IPK_VERSION=1.0.4
INSTALLERS_DIR=installers
```

`SITE_URL` se usa para canonical, hreflang, sitemap y Open Graph. Cuando conectes el dominio propio, cámbialo y vuelve a desplegar.

## Descargas

### LG webOS (automático)

`scripts/sync-installers.mjs` busca el IPK más reciente dentro de `installers/` (`installers/**/*.ipk`), lo copia a `public/downloads/lg/` y genera `src/data/installers.generated.json` con versión, tamaño y SHA-256. Se ejecuta antes de `dev`, `check` y `build`. Si no encuentra el IPK, la tarjeta de LG se muestra como **Próximamente**; coloca el archivo en `installers/lg/` o define `LG_IPK_URL`.

`installers/*` y `public/downloads/` están en `.gitignore`; los binarios no se versionan por defecto.

> Cloudflare Pages acepta archivos de hasta 25 MiB. El IPK 1.0.4 pesa 22,3 MB, así que entra. Si un build futuro supera el límite, súbelo a R2 o a GitHub Releases.

**Importante para CI:** como `installers/*` está ignorado, un build limpio de GitHub Actions no tendrá el IPK. Tienes dos opciones:

1. Desplegar desde tu máquina con `npm run deploy` (el IPK local se copia a `dist/`).
2. Definir `LG_IPK_URL` (y `LG_IPK_VERSION`) en las variables del workflow para que `sync-installers.mjs` lo descargue; o subirlo a R2 y usar `r2Key`.

### Samsung, Android, Android TV y Windows

Edita `downloadConfig` en `src/data/products.ts`:

```ts
samsung: {
  directUrl: 'https://downloads.tudominio.com/samsung/pollistream-samsung-1.0.0.wgt',
  fileName: 'pollistream-samsung-1.0.0.wgt',
  version: '1.0.0',
  size: '18.4 MB',
  updated: '2026-11',
}
```

Opciones por producto:

- `directUrl`: URL directa al instalador (R2, GitHub Release asset, tu servidor).
- `lockerUrl`: URL de un link locker / CPA. Tiene prioridad sobre `directUrl`.
- `githubUrl`: página de release, si no tienes asset directo.
- `r2Key`: ruta dentro de `PUBLIC_R2_BASE_URL`, por ejemplo `android/pollistream-android-1.0.0.apk`.
- `version`, `size`, `updated`, `sha256`: metadatos que se muestran en la ficha y en la página de descarga.

Si no hay ninguna URL, la plataforma se muestra como **Próximamente** y nunca se publica un enlace muerto.

### Cloudflare R2

1. Crea un bucket, por ejemplo `pollistream-downloads`.
2. Activa acceso público o conecta un dominio (`downloads.tudominio.com`).
3. Sube archivos:

```bash
npm run build
# Opcional: R2_BUCKET=pollistream-downloads
npm run r2:upload -- public/downloads/lg/pollistream-lg-1.0.4.ipk --dry-run
npm run r2:upload -- public/downloads/lg/pollistream-lg-1.0.4.ipk
```

4. Configura `PUBLIC_R2_BASE_URL=https://downloads.tudominio.com` y usa `r2Key` en `products.ts`, por ejemplo `r2Key: 'lg/pollistream-lg-1.0.4.ipk'`.

### GitHub Releases

Publica el instalador como asset de una release y pega la URL del asset en `directUrl`, o la página de la release en `githubUrl`. Para archivos de más de 2 GB, usa R2.

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
