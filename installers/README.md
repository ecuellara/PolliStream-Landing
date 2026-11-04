# Installers

Coloca aquí los instaladores que quieras que el build copie a `public/downloads/`.

```
installers/
└─ lg/
   └─ com.pollistv.app_1.0.4_all.ipk
```

El script `scripts/sync-installers.mjs` busca cualquier `*.ipk` dentro de esta carpeta, elige la versión más reciente y genera `public/downloads/lg/` + `src/data/installers.generated.json`.

- Los binarios están ignorados por `.gitignore` (`installers/*.ipk`, etc.). Para CI usa Cloudflare R2, GitHub Releases o `LG_IPK_URL`.
- Para otras plataformas, configura `downloadConfig` en `src/data/products.ts` (`directUrl`, `lockerUrl`, `r2Key`).
