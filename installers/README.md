# Installers

Coloca aquí los instaladores que quieras que el build copie a `public/downloads/`.

Coloca cada instalador en la carpeta de su plataforma. El script `scripts/sync-installers.mjs` selecciona la versión más reciente y genera `src/data/installers.generated.json`; no copia binarios al build del sitio.

| Carpeta | Formatos |
| --- | --- |
| `lg/` | `.ipk` |
| `samsung/` | `.wgt` para Tizen 3.0 Legacy |
| `samsung-modern/` | `.wgt` para Tizen moderno |
| `android/`, `android-tv/` | `.apk` |
| `windows/` | `.exe`, `.msi` |
| `roku/` | `.zip` |
| `macos/` | `.dmg`, `.pkg` |
| `ios/` | `.ipa` |

El número de versión se detecta en el nombre del archivo (por ejemplo, `PolliStream-Setup-1.0.0.exe`). Si no aparece, se usa `latest`.

- Los binarios están ignorados por `.gitignore`; no se suben al repositorio privado del sitio.
- Publica o actualiza los archivos de la release pública ejecutando `npm run github:upload`. Requiere GitHub CLI (`gh`) autenticado con permiso para `ecuellara/PolliStream-Downloads`.
- Las descargas de la web apuntan a esa release de GitHub. Los nuevos instaladores solo aparecerán disponibles cuando exista un paquete compatible en su carpeta y se vuelva a ejecutar la subida.
- Roku, Samsung moderno y las plataformas Apple permanecen como "Próximamente" hasta que sus builds estén listos y probados. iOS/iPad requiere distribuir el build por un canal válido para sus dispositivos; no publiques un `.ipa` sin firma y método de instalación verificados.
- Para publicar un video, define `tutorialVideoUrl` en `src/data/products.ts` con un enlace de YouTube o Facebook. El enlace opcional `pairingScriptUrl` queda reservado para la futura herramienta de vinculación del televisor.
