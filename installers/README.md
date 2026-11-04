# Installers

Coloca aquí los instaladores que quieras que el build copie a `public/downloads/`.

Coloca cada instalador en la carpeta de su plataforma. El script `scripts/sync-installers.mjs` selecciona la versión más reciente y genera `src/data/installers.generated.json`; no copia binarios al build del sitio.

| Carpeta | Formatos |
| --- | --- |
| `lg/` | `.ipk` |
| `samsung/` | `.wgt`, `.tpk` |
| `android/`, `android-tv/` | `.apk` |
| `windows/` | `.exe`, `.msi` |

El número de versión se detecta en el nombre del archivo (por ejemplo, `PolliStream-Setup-1.0.0.exe`). Si no aparece, se usa `latest`.

- Los binarios están ignorados por `.gitignore`; no se suben al repositorio privado del sitio.
- Publica o actualiza los archivos de la release pública ejecutando `npm run github:upload`. Requiere GitHub CLI (`gh`) autenticado con permiso para `ecuellara/PolliStream-Downloads`.
- Las descargas de la web apuntan a esa release de GitHub. Android TV seguirá como "Próximamente" hasta que haya un `.apk` en `installers/android-tv/` y se vuelva a ejecutar la subida.
