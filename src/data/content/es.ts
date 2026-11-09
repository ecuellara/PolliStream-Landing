import type { Content } from './types'

export const es: Content = {
  meta: {
    title: 'PolliStream — Tu IPTV en LG, Samsung, Android TV y Windows',
    description:
      'Reproductor IPTV para Smart TV, Android y Windows. Conecta tu lista Xtream, ordena en vivo, películas y series y disfruta con audio y subtítulos. Descarga gratis.',
    ogAlt: 'PolliStream, tu lista Xtream en todas tus pantallas',
  },
  common: {
    download: 'Descargar',
    downloadFree: 'Descargar gratis',
    viewPlatforms: 'Ver plataformas',
    chooseScreen: 'Elegir mi pantalla',
    comingSoon: 'Próximamente',
    available: 'Disponible',
    version: 'Versión',
    size: 'Tamaño',
    format: 'Formato',
    updated: 'Actualizado',
    requirements: 'Requisitos',
    install: 'Instalación',
    otherScreens: 'Otras pantallas',
    back: 'Volver',
    open: 'Abrir',
    close: 'Cerrar',
    menu: 'Menú',
    language: 'Idioma',
    readMore: 'Leer más',
    adLabel: 'Publicidad',
    sponsor: 'Espacio para patrocinador',
    sponsorCta: 'Tu marca aquí',
    adsOff: 'Anuncios desactivados',
    adsOffBody: 'Activa los anuncios para ayudar a mantener las descargas gratuitas.',
    activateAds: 'Activar anuncios',
    consentTitle: 'Cookies y anuncios',
    consentBody:
      'Usamos cookies publicitarias solo si las aceptas. La medición es agregada y no te identifica. Puedes cambiar de opinión cuando quieras.',
    consentAccept: 'Aceptar anuncios',
    consentEssential: 'Solo esenciales',
    consentLink: 'Política de cookies',
    external: 'abre en una pestaña nueva',
    share: 'Compartir',
    copied: 'Enlace copiado',
    notFoundTitle: 'Señal perdida',
    notFoundBody: 'Esta página no existe o cambió de frecuencia.',
    goHome: 'Volver al inicio',
    skip: 'Saltar al contenido',
    breadcrumb: 'Ruta de navegación',
  },
  nav: {
    platforms: 'Plataformas',
    features: 'Funciones',
    install: 'Instalación',
    faq: 'Preguntas',
    support: 'Apoyar',
    download: 'Descargar',
  },
  device: {
    live: 'EN VIVO',
    now: 'AHORA',
    signal: 'SEÑAL DE TU PROVEEDOR',
    channel: 'CANAL 01',
    titleLine1: 'Tu canal',
    titleLine2: 'en directo.',
    sample: 'CONTENIDO DE TU LISTA XTREAM · EJEMPLO',
    guide: 'GUÍA',
    guideItems: ['Cine', 'Series', 'Deportes', 'Infantil'],
    audio: 'AUDIO ES',
    subtitles: 'SUBS ES',
    quality: '1080p',
  },
  hero: {
    eyebrow: 'REPRODUCTOR IPTV · XTREAM · MULTIPLATAFORMA',
    titleA: 'Toda tu IPTV.',
    titleB: 'En la pantalla que elijas.',
    description:
      'PolliStream conecta tu lista Xtream y ordena en vivo, películas y series en una interfaz hecha para el sofá. Sin cuenta PolliStream. Sin intermediarios.',
    primary: 'Descargar gratis',
    secondary: 'Ver funciones',
    stats: [
      { value: '9', label: 'plataformas' },
      { value: '1', label: 'lista Xtream' },
      { value: '0', label: 'registros' },
      { value: 'A/V', label: 'audio y subtítulos' },
    ],
    demoLabel: 'VISTA PREVIA DE INTERFAZ · DATOS DE EJEMPLO',
    selectLabel: 'Sintoniza tu pantalla',
    deviceLabels: {
      lg: 'webOS 4+',
      samsung: 'Tizen 3.0 Legacy',
      'samsung-modern': 'Tizen moderno',
      android: 'Android',
      'android-tv': 'Android TV',
      windows: 'Windows',
      roku: 'Roku',
      macos: 'macOS',
      ios: 'iOS / iPad',
    },
    microcopy: 'Gratis. Sin suscripción de PolliStream. Sin registro.',
  },
  platforms: {
    kicker: 'SINTONIZA TU PANTALLA',
    title: 'Una app. Nueve plataformas.',
    body: 'Elige tu dispositivo. Consulta su guía de instalación y descarga solo los paquetes que ya están publicados.',
    cta: 'Ver descarga',
    live: 'Disponible',
    soon: 'Próximamente',
    all: 'Ver todas las plataformas',
  },
  features: {
    kicker: 'LO QUE HACE',
    title: 'Menos buscar. Más ver.',
    body: 'Cada pantalla está pensada para el mando, no para un cursor. El catálogo viene de tu proveedor; la experiencia la pone PolliStream.',
    items: [
      {
        index: '01',
        tag: 'EN VIVO',
        title: 'En vivo, sin rodeos',
        body: 'Categorías, búsqueda y zapping. Cambia entre dos canales con el cambio rápido A/B sin perder el hilo de lo que estabas viendo.',
      },
      {
        index: '02',
        tag: 'CATÁLOGO',
        title: 'Películas y series ordenadas',
        body: 'Portadas, sinopsis, temporadas y episodios en filas horizontales. Retoma donde lo dejaste con Continuar viendo.',
      },
      {
        index: '03',
        tag: 'A/V',
        title: 'Audio y subtítulos',
        body: 'Cambia la pista de audio y los subtítulos cuando el archivo los incluye. En LG, un servicio local extrae las pistas embebidas del MKV/MP4 sin depender de CORS.',
      },
      {
        index: '04',
        tag: 'HOGAR',
        title: 'Perfiles de casa',
        body: 'Hasta tres perfiles normales y uno infantil. Cada uno con su historial y su lista, para que nadie tenga que buscar su sitio.',
      },
      {
        index: '05',
        tag: 'CONTROL',
        title: 'Control parental',
        body: 'Bloquea el contenido +18 con un PIN de cuatro dígitos. Se configura desde el mando, sin apps externas ni cuentas adicionales.',
      },
      {
        index: '06',
        tag: 'PRIVACIDAD',
        title: 'Tu cuenta, tus reglas',
        body: 'Guarda varias cuentas Xtream y cambia entre ellas. Las credenciales se quedan en tu dispositivo; no pasan por servidores de PolliStream.',
      },
    ],
  },
  signal: {
    kicker: 'SIN INTERMEDIARIOS',
    title: 'Tu proveedor habla directo con tu pantalla.',
    body: 'PolliStream no vende contenido ni aloja listas. Es el reproductor: tú pones la cuenta Xtream que ya pagas y la app hace el resto.',
    nodes: [
      { index: '01', title: 'Tu proveedor', body: 'La lista Xtream que ya tienes, con sus canales y su catálogo.' },
      { index: '02', title: 'PolliStream', body: 'Ordena la señal y la reproduce en tu dispositivo, con el mando o el teclado.' },
      { index: '03', title: 'Tu pantalla', body: 'TV, móvil o PC. La misma lista, el mismo historial, tu perfil.' },
    ],
    note: 'Las credenciales se guardan en el almacenamiento local del dispositivo. No hay backend de PolliStream que las reciba.',
    cta: 'Ver cómo se instala',
  },
  install: {
    kicker: 'DE CERO A SINTONIZAR',
    title: 'Tres pasos. Ninguna cuenta nueva.',
    body: 'No pedimos email, tarjeta ni registro. Elige tu pantalla, instala el paquete y conecta la cuenta que ya usas.',
    steps: [
      {
        index: '01',
        title: 'Elige tu pantalla',
        body:                 'LG, Samsung Tizen 3.0, Samsung moderno, Android, Android TV, Windows, Roku, macOS, iPhone o iPad. Cada plataforma tiene su propia guía y estado de disponibilidad.',
      },
      {
        index: '02',
        title: 'Descarga e instala',
        body: 'Sigue el método de tu plataforma. En Android, permite la instalación de la APK; en TV, usa el flujo de desarrollador cuando corresponda.',
      },
      {
        index: '03',
        title: 'Conecta tu Xtream',
        body: 'Introduce servidor, usuario y contraseña. Elige perfil y empieza a ver. Puedes guardar más de una cuenta.',
      },
    ],
    note: 'Si un paso no encaja con tu modelo, revisa la página de tu plataforma o el canal de soporte del proyecto.',
  },
  download: {
    kicker: 'DESCARGA',
    title: 'Preparando tu descarga',
    description: 'Estás a un paso de instalar PolliStream en {platform}.',
    preparing: 'Preparando el enlace',
    ready: 'Tu descarga está lista',
    countdown: 'El enlace estará listo en',
    button: 'Descargar {format}',
    lockerButton: 'Continuar a la descarga',
    soonTitle: 'Aún no hay instalador publicado',
    soonBody:
      'Estamos preparando el build para {platform}. Vuelve pronto o revisa las otras pantallas mientras tanto.',
    back: 'Volver a {platform}',
    securityTitle: 'Antes de instalar',
    security: [
      'Descarga solo desde esta página o desde el enlace oficial que publicamos.',
      'Comprueba el nombre y el tamaño del archivo antes de abrirlo.',
      'En Android, instala solo si aceptas el origen de la APK. En TV, usa el flujo de desarrollador cuando corresponda.',
    ],
    partnerNote:
      'Este enlace puede pasar por una oferta de nuestro socio de descargas. La descarga sigue siendo gratuita.',
    adNote: 'Los anuncios ayudan a mantener las descargas gratuitas.',
    file: 'Archivo',
    version: 'Versión',
    size: 'Tamaño',
    format: 'Formato',
    checksum: 'SHA-256',
    whatsNext: 'Después de descargar',
    whatsNextBody:
      'Abre el instalador y sigue la guía de tu plataforma. Si tu TV pide un paso de desarrollador, lo tienes explicado en la página del producto.',
    openInstaller: 'Abrir instalador',
    tutorialKicker: 'GUÍA DE INSTALACIÓN',
    tutorialTitle: 'Instala PolliStream en {platform}',
    tutorialBody: 'Sigue estos pasos para instalar el paquete y preparar tu cuenta.',
    tutorialPrep: 'Antes de empezar',
    tutorialPrepBody: 'Comprueba que tu equipo cumple estos requisitos para evitar errores a mitad de la instalación.',
    tutorialStep: 'PASO',
    tutorialImage: 'Ilustración del paso {step} de la instalación',
    tutorialVideo: 'Tutorial en video',
    tutorialVideoSoon: 'El video de instalación para esta plataforma estará disponible próximamente.',
    pairingScript: 'Descargar herramienta para vincular el televisor',
  },
  support: {
    kicker: 'MANTENER LA SEÑAL',
    title: 'Gratis para ti. Sostenible para el proyecto.',
    body: 'No cobramos por la app ni por el instalador. Los anuncios, las descargas y los apoyos cubren el hosting y las horas de desarrollo.',
    donate: 'Apoyar el proyecto',
    share: 'Compartir PolliStream',
    copied: 'Enlace copiado',
    fallback: 'También puedes ayudar compartiendo PolliStream con alguien que tenga tu mismo proveedor.',
  },
  affiliate: {
    kicker: 'SI AÚN NO TIENES PROVEEDOR',
    title: 'Un proveedor legal para tu lista.',
    body: 'PolliStream no vende suscripciones. Si necesitas un proveedor, estos son partners que conocemos; el enlace está marcado como afiliado.',
    cta: 'Ver opciones',
    disclosure: 'Enlace de afiliado. Si contratas, podemos recibir una comisión sin coste extra para ti.',
  },
  faq: {
    kicker: 'PREGUNTAS DE SINTONÍA',
    title: 'Lo que suele preguntar la gente.',
    items: [
      {
        question: '¿PolliStream incluye canales o películas?',
        answer:
          'No. PolliStream es un reproductor. Necesitas una cuenta Xtream de un proveedor con los derechos del contenido que quieres ver. No alojamos ni distribuimos contenido.',
      },
      {
        question: '¿Necesito crear una cuenta en PolliStream?',
        answer:
          'No. La app se conecta directamente a tu proveedor. No hay registro, email ni tarjeta. Solo el servidor, el usuario y la contraseña de tu lista Xtream.',
      },
      {
        question: '¿Dónde se guardan mis credenciales?',
        answer:
          'En el almacenamiento local de tu dispositivo. No pasan por servidores de PolliStream. La conexión va de tu dispositivo a tu proveedor.',
      },
      {
        question: '¿Por qué algunos instaladores tardan más?',
        answer:
          'Cada plataforma tiene su propio empaquetado, firmas y pruebas. Publicamos cada build cuando está probado. Si aún no aparece, es que no está listo; no ponemos enlaces de relleno.',
      },
      {
        question: '¿La descarga es gratis?',
        answer:
          'Sí. El instalador es gratuito. La web se mantiene con anuncios, ofertas de descarga y apoyos voluntarios. Los anuncios solo se cargan si aceptas las cookies publicitarias.',
      },
      {
        question: '¿Funciona con listas M3U?',
        answer:
          'La conexión principal es Xtream Codes. No prometemos M3U hasta que esté publicado y probado en la app. Si tu proveedor solo ofrece M3U, consúltalo antes de instalar.',
      },
      {
        question: '¿Es legal usar PolliStream?',
        answer:
          'Depende de tu proveedor. Usa PolliStream solo con servicios que tengas derecho a acceder. Tú eres responsable de la cuenta y del contenido que reproduces.',
      },
    ],
  },
  footer: {
    tagline: 'El reproductor que pone tu lista en pantalla.',
    product: 'Producto',
    platforms: 'Plataformas',
    support: 'Soporte',
    legal: 'Legal',
    allPlatforms: 'Todas las plataformas',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
    contact: 'Contacto',
    disclaimer:
      'PolliStream no vende, aloja ni distribuye contenido. Es un reproductor para el proveedor que tú elijas.',
    copyright: '© {year} PolliStream. Hecho para el sofá.',
    madeFor: 'LG webOS · Samsung Tizen 3.0 y moderno · Android · Android TV · Windows · Roku · macOS · iPhone · iPad',
    status: 'SEÑAL ABIERTA',
  },
  product: {
    breadcrumb: 'Plataformas',
    sectionKicker: 'LA FICHA TÉCNICA',
    sectionTitle: 'Lo que necesitas para sintonizar.',
    about: 'Sobre esta versión',
    specs: 'Especificaciones',
    requirements: 'Requisitos',
    install: 'Cómo instalar',
    other: 'Otras pantallas',
    related: 'También te puede servir',
    items: {
      lg: {
        kicker: 'LG WEBOS · SMART TV',
        title: 'PolliStream para LG',
        tagline: 'La app completa para tu LG, con pistas de audio y subtítulos.',
        description:
          'Pensada para webOS 4.x y superior. Incluye el servicio local que lista las pistas embebidas del MKV/MP4 y extrae subtítulos sin depender de CORS.',
        features: [
          { index: '01', tag: 'MANDO', title: 'Mando primero', body: 'Navegación con foco visible, pensada para verse desde el sofá y no desde un monitor.' },
          { index: '02', tag: 'A/V', title: 'Pistas embebidas', body: 'El paquete incluye el servicio local de ffmpeg que lista audio y subtítulos del archivo.' },
          { index: '03', tag: 'HOGAR', title: 'Perfiles y PIN', body: 'Tres perfiles normales, uno infantil y control parental con PIN de cuatro dígitos.' },
          { index: '04', tag: 'HISTORIAL', title: 'Continuar viendo', body: 'Retoma el episodio donde lo dejaste, con marcas de intro por serie.' },
        ],
        requirements: [
          'LG webOS 4.0 o superior',
          'Conexión a internet estable',
          'Cuenta Xtream activa',
          'Modo desarrollador para instalar el IPK',
        ],
        install: [
          {
            index: '01',
            title: 'Comprueba los requisitos y la red',
            body: 'Deja el televisor y el ordenador en la misma red antes de empezar.',
            details: [
              'Confirma en Ajustes › General › Información del televisor que tienes webOS 4.0 o superior.',
              'Conecta el TV por cable o Wi-Fi estable; evita redes de invitados que aíslan los dispositivos.',
              'Ten a mano el servidor, usuario y contraseña de tu cuenta Xtream.',
              'Instala Node.js 18 o superior en el ordenador que usará la CLI de webOS.',
            ],
          },
          {
            index: '02',
            title: 'Activa el Modo desarrollador en el TV',
            body: 'La app Developer Mode abre una sesión de instalación temporal en el televisor.',
            details: [
              'Busca "Developer Mode" en LG Content Store e instálala.',
              'Inicia sesión con una cuenta LG Developer gratuita.',
              'Activa Dev Mode Status y Key Server, y acepta el reinicio del televisor.',
              'Anota el nombre del dispositivo y la contraseña de seis caracteres que muestra la app.',
              'La sesión caduca a las 1000 horas: renueva el Modo desarrollador antes de actualizar PolliStream.',
            ],
          },
          {
            index: '03',
            title: 'Conecta la CLI con el televisor',
            body: 'Instala webOS CLI en el ordenador y registra el TV por SSH.',
            details: [
              'En ares-setup-device elige "add device" y usa la IP del televisor.',
              'Indica el puerto 9922 y las credenciales que viste en Developer Mode.',
              'Si la conexión falla, comprueba que el TV y el PC están en la misma red y que el puerto 9922 no está bloqueado.',
            ],
            commands: [
              'npm install -g @webos-tools/cli',
              'ares-setup-device',
              'ares-setup-device --list',
            ],
          },
          {
            index: '04',
            title: 'Instala el IPK completo',
            body: 'Envía el paquete y ábrelo desde la barra de inicio del televisor.',
            details: [
              'Descarga pollistream-lg.ipk desde esta página y no lo renombres.',
              'Instala siempre el paquete completo: incluye la app y el servicio local de pistas de audio y subtítulos.',
              'Si ares-install pide confirmación, acepta; el televisor puede mostrar un aviso breve.',
              'Al terminar, busca PolliStream en la barra de inicio de webOS.',
            ],
            commands: ['ares-install --device tv pollistream-lg.ipk'],
          },
          {
            index: '05',
            title: 'Conecta tu cuenta y prueba',
            body: 'Configura Xtream y comprueba reproducción, audio y subtítulos.',
            details: [
              'Abre PolliStream y acepta los permisos de red local si aparecen.',
              'Introduce el servidor con http:// o https://, el usuario y la contraseña de Xtream.',
              'Usa Probar conexión y espera a que cargue el catálogo.',
              'Crea o selecciona un perfil y configura el PIN parental si lo necesitas.',
              'Reproduce un canal en vivo y una película para confirmar audio y subtítulos.',
            ],
          },
        ],
        note: 'El IPK incluye la app y el servicio local de pistas. Instala el paquete completo para que el menú de audio funcione.',
      },
      samsung: {
        kicker: 'SAMSUNG TIZEN 3.0 · LEGACY',
        title: 'PolliStream para Samsung Legacy',
        tagline: 'La versión para televisores Samsung con Tizen 3.0.',
        description:
          'Este instalador es la versión Legacy para Tizen 3.0. No lo instales en televisores Samsung modernos; tendrán un paquete separado.',
        features: [
          { index: '01', tag: 'MANDO', title: 'Navegación por mando', body: 'Filas de catálogo y foco claro para moverte sin ratón.' },
          { index: '02', tag: 'CATÁLOGO', title: 'Todo ordenado', body: 'En vivo, películas y series con el mismo orden que en el resto de pantallas.' },
          { index: '03', tag: 'HOGAR', title: 'Perfiles', body: 'Cada persona de la casa conserva su historial y su lista.' },
          { index: '04', tag: 'CONTROL', title: 'Control parental', body: 'PIN de cuatro dígitos para el contenido +18.' },
        ],
        requirements: [
          'TV Samsung compatible con Tizen 3.0',
          'Conexión a internet estable',
          'Cuenta Xtream activa',
          'Modo desarrollador y herramienta de instalación Tizen',
        ],
        install: [
          {
            index: '01',
            title: 'Confirma el modelo y la versión',
            body: 'Este paquete es exclusivo para televisores Samsung con Tizen 3.0.',
            details: [
              'Abre Ajustes › Soporte › Información del televisor y revisa el modelo y la versión del sistema.',
              'Si el televisor usa Tizen 6.5 o superior, usa la ficha de Samsung moderno en lugar de este paquete.',
              'Comprueba que el televisor y el ordenador están en la misma red.',
              'Ten a mano el servidor, usuario y contraseña de tu cuenta Xtream.',
            ],
          },
          {
            index: '02',
            title: 'Prepara Tizen Studio',
            body: 'Necesitas las herramientas de desarrollo de Tizen y un certificado de autor.',
            details: [
              'Descarga Tizen Studio desde developer.samsung.com e instala el SDK con las herramientas CLI.',
              'Abre Certificate Manager y crea un certificado de autor (Author) para tu equipo.',
              'Acepta la clave pública del certificado; la usarás al firmar o reinstalar el WGT.',
              'Instala el controlador del televisor si Tizen Studio lo solicita.',
            ],
          },
          {
            index: '03',
            title: 'Activa el Modo desarrollador',
            body: 'El televisor debe aceptar conexiones del ordenador donde corre Tizen Studio.',
            details: [
              'Abre la sección Apps del televisor y pulsa 1, 2, 3, 4, 5 con el mando.',
              'Elige Developer mode, introduce la IP del ordenador y reinicia el televisor.',
              'Vuelve a conectar el TV y el PC a la misma red; el puerto de desarrollo es 26101.',
              'En Device Manager añade el televisor por su IP y confirma que aparece conectado.',
            ],
          },
          {
            index: '04',
            title: 'Instala el WGT Legacy',
            body: 'Envía el paquete compatible con Tizen 3.0 desde la línea de comandos.',
            details: [
              'Descarga pollistream-samsung.wgt desde esta página y no lo renombres.',
              'Usa solo este WGT en televisores Tizen 3.0 Legacy; no lo instales en modelos modernos.',
              'Si la instalación falla por certificado, vuelve a firmar el paquete en Tizen Studio y repite el envío.',
              'Al terminar, el icono de PolliStream aparece en la fila de apps del televisor.',
            ],
            commands: [
              'sdb connect <IP_DEL_TV>:26101',
              'tizen install -n pollistream-samsung.wgt -t <IP_DEL_TV>:26101',
            ],
          },
          {
            index: '05',
            title: 'Abre PolliStream y conecta tu cuenta',
            body: 'Configura Xtream y revisa el catálogo con el mando.',
            details: [
              'Abre PolliStream desde la fila de apps del televisor.',
              'Introduce el servidor completo, el usuario y la contraseña de Xtream.',
              'Prueba la conexión y espera a que se carguen en vivo, películas y series.',
              'Elige un perfil y activa el PIN parental si hay menores en casa.',
            ],
          },
        ],
        note: 'No uses este paquete en televisores Samsung modernos. Publicaremos su versión por separado.',
      },
      'samsung-modern': {
        kicker: 'SAMSUNG TIZEN MODERNO · 6.5+',
        title: 'PolliStream para Samsung moderno',
        tagline: 'Un paquete independiente para televisores Tizen modernos.',
        description:
          'La versión moderna todavía no está publicada. El instalador y las instrucciones específicas aparecerán aquí cuando estén probados.',
        features: [
          { index: '01', tag: 'EN PREPARACIÓN', title: 'Build moderno', body: 'El WGT para Tizen moderno se publicará después de validar la compatibilidad.' },
          { index: '02', tag: 'GUÍA', title: 'Pasos específicos', body: 'La guía distinguirá esta versión del paquete Legacy para Tizen 3.0.' },
        ],
        requirements: ['Televisor Samsung compatible con Tizen 6.5 o superior', 'Build moderno aún no disponible'],
        install: [
          {
            index: '01',
            title: 'Comprueba tu versión de Tizen',
            body: 'Este paquete será exclusivo para Samsung con Tizen 6.5 o superior.',
            details: [
              'Abre Ajustes › Soporte › Información del televisor y anota la versión del sistema.',
              'Si el televisor usa Tizen 3.0, descarga el paquete Legacy en su ficha correspondiente.',
              'No instales el WGT Legacy en un televisor moderno: la app puede no arrancar.',
            ],
          },
          {
            index: '02',
            title: 'Espera el WGT moderno probado',
            body: 'El instalador moderno aún no está publicado.',
            details: [
              'El paquete aparecerá en esta ficha cuando termine la validación de compatibilidad.',
              'No uses paquetes WGT de terceros ni versiones antiguas para forzar la instalación.',
              'Cuando se publique, verifica el nombre del archivo y su tamaño antes de instalarlo.',
            ],
          },
          {
            index: '03',
            title: 'Instala con Tizen Studio',
            body: 'El método será el mismo flujo de desarrollo que en Tizen moderno.',
            details: [
              'Activa el Modo desarrollador con la IP del PC y reinicia el televisor.',
              'Conecta por sdb al puerto 26101 y confirma el dispositivo en Device Manager.',
              'Envía el WGT con el certificado de autor y espera a que el televisor muestre la app.',
            ],
            commands: [
              'sdb connect <IP_DEL_TV>:26101',
              'tizen install -n pollistream-samsung-modern.wgt -t <IP_DEL_TV>:26101',
            ],
          },
          {
            index: '04',
            title: 'Conecta tu cuenta',
            body: 'Cuando el paquete esté disponible, configura Xtream y elige tu perfil.',
            details: [
              'Introduce el servidor, el usuario y la contraseña de tu cuenta Xtream.',
              'Prueba la conexión y revisa el catálogo en vivo, películas y series.',
              'Configura el PIN parental si lo necesitas.',
            ],
          },
        ],
        note: 'No instales aquí el WGT Legacy de Tizen 3.0.',
      },
      android: {
        kicker: 'ANDROID · MÓVIL Y TABLET',
        title: 'PolliStream para Android',
        tagline: 'Tu proveedor en el bolsillo, con la misma lista y los mismos perfiles.',
        description:
          'APK para móviles y tablets Android. La interfaz táctil conserva el catálogo, el historial y el control parental.',
        features: [
          { index: '01', tag: 'TÁCTIL', title: 'Hecha para el dedo', body: 'Listas, búsqueda y reproductor con controles claros en pantalla.' },
          { index: '02', tag: 'SINCRONÍA', title: 'La misma lista', body: 'Tu cuenta Xtream y tus perfiles, sin crear una cuenta nueva.' },
          { index: '03', tag: 'HISTORIAL', title: 'Sigue donde ibas', body: 'Continuar viendo y favoritos compartidos con tu forma de ver.' },
          { index: '04', tag: 'CONTROL', title: 'Control parental', body: 'Bloquea el contenido +18 con un PIN de cuatro dígitos.' },
        ],
        requirements: [
          'Android compatible con la APK',
          'Conexión a internet estable',
          'Cuenta Xtream activa',
          'Permiso para instalar apps de origen desconocido',
        ],
        install: [
          {
            index: '01',
            title: 'Descarga la APK',
            body: 'Guarda el archivo oficial en el teléfono o la tablet.',
            details: [
              'Pulsa Descargar y espera a que finalice la descarga; el archivo se llama pollistream-android.apk.',
              'Si el navegador avisa de un archivo potencialmente peligroso, confirma solo si la descarga vino de esta página.',
              'Comprueba en la ficha de descarga que el tamaño coincide con el archivo guardado.',
              'No uses APKs de espejos, grupos ni sitios de terceros.',
            ],
          },
          {
            index: '02',
            title: 'Permite instalar apps desconocidas',
            body: 'Android bloquea por defecto las APK que no vienen de Play Store.',
            details: [
              'Abre Ajustes › Apps › Acceso especial › Instalar apps desconocidas.',
              'Elige el navegador o el gestor de archivos con el que abrirás la APK.',
              'Activa Permitir desde esta fuente.',
              'En Android 7 o inferior, usa Ajustes › Seguridad › Orígenes desconocidos.',
            ],
          },
          {
            index: '03',
            title: 'Instala la APK',
            body: 'Abre la descarga y confirma la instalación.',
            details: [
              'Toca la notificación de descarga o abre Descargas y selecciona pollistream-android.apk.',
              'Pulsa Instalar y espera el análisis de Play Protect.',
              'Si aparece un aviso, elige Instalar de todas formas solo cuando el archivo venga de esta página.',
              'No cierres la pantalla ni bloquees el teléfono durante la instalación.',
            ],
          },
          {
            index: '04',
            title: 'Abre PolliStream y conecta tu cuenta',
            body: 'Configura tu proveedor Xtream y elige un perfil.',
            details: [
              'Abre PolliStream desde el cajón de apps y acepta los permisos que solicite.',
              'Escribe el servidor completo con http:// o https://, el usuario y la contraseña de Xtream.',
              'Pulsa Probar conexión y espera a que cargue el catálogo.',
              'Elige un perfil y activa el PIN parental si lo necesitas.',
            ],
          },
          {
            index: '05',
            title: 'Actualiza sin perder tus datos',
            body: 'Las versiones nuevas se instalan encima de la anterior.',
            details: [
              'Descarga la APK actualizada desde esta página.',
              'Ábrela e instálala sin desinstalar primero PolliStream.',
              'Tus perfiles, favoritos e historial se conservan al actualizar.',
              'Si Android rechaza la actualización, comprueba que ambas APK tengan la misma firma y origen.',
            ],
          },
        ],
        note: 'No instales APKs de sitios que no sean esta web o el canal oficial del proyecto.',
      },
      'android-tv': {
        kicker: 'ANDROID TV / FIRE TV · TV',
        title: 'PolliStream para Android TV',
        tagline: 'La experiencia de sofá en tu Android TV o Fire TV.',
        description:
          'Navegación con D-pad, filas de catálogo y reproducción a pantalla completa en Android TV y Fire TV.',
        features: [
          { index: '01', tag: 'D-PAD', title: 'Mando y D-pad', body: 'Foco visible y atajos para moverte por el catálogo sin ratón.' },
          { index: '02', tag: 'PANTALLA', title: 'Pantalla completa', body: 'Reproducción a pantalla completa con controles que se esconden.' },
          { index: '03', tag: 'HOGAR', title: 'Perfiles', body: 'Cada perfil con su historial y su lista.' },
          { index: '04', tag: 'HISTORIAL', title: 'Continuar viendo', body: 'Retoma series y películas desde donde las dejaste.' },
        ],
        requirements: [
          'Android TV o Fire TV compatible',
          'Conexión a internet estable',
          'Cuenta Xtream activa',
          'Instalación por APK / sideload',
        ],
        install: [
          {
            index: '01',
            title: 'Prepara el dispositivo y la red',
            body: 'Activa las opciones de desarrollo y deja el TV en la misma red que el ordenador.',
            details: [
              'Android TV: abre Ajustes › Sistema › Acerca de y pulsa Compilación siete veces.',
              'Fire TV: abre Ajustes › Mi Fire TV › Acerca de y pulsa Compilación siete veces.',
              'Anota la IP del televisor en Ajustes › Red o Estado.',
              'Conecta el TV y el ordenador a la misma red; evita redes de invitados.',
            ],
          },
          {
            index: '02',
            title: 'Activa la depuración',
            body: 'La depuración permite instalar la APK desde el ordenador o desde Downloader.',
            details: [
              'Android TV: en Opciones de desarrollador activa Depuración USB y Depuración por red.',
              'Fire TV: en Opciones de desarrollador activa Depuración ADB y Apps de origen desconocido.',
              'Acepta el aviso de seguridad del sistema.',
              'Si el menú no aparece, reinicia el televisor y vuelve a revisar el apartado de desarrollo.',
            ],
          },
          {
            index: '03',
            title: 'Instala con ADB o Downloader',
            body: 'Puedes enviar la APK desde un PC o descargarla directamente en el televisor.',
            details: [
              'Desde un PC con ADB, conecta el televisor por su IP y envía pollistream-androidtv.apk.',
              'Sin PC: instala Downloader en Fire TV, abre esta página en el navegador y descarga la APK.',
              'En Android TV también puedes copiar la APK a una memoria USB y abrirla con un gestor de archivos.',
              'Si ADB responde unauthorized, acepta el diálogo que aparece en el televisor con el mando.',
            ],
            commands: [
              'adb connect <IP_DEL_TV>:5555',
              'adb install pollistream-androidtv.apk',
            ],
          },
          {
            index: '04',
            title: 'Permite la instalación',
            body: 'Confirma el origen de la APK cuando el sistema lo pregunte.',
            details: [
              'Permite instalar apps desconocidas para ADB, Downloader o el gestor de archivos que uses.',
              'En Fire TV puede pedirte desactivar temporalmente el escaneo de apps; vuelve a activarlo al terminar.',
              'Espera a que finalice la instalación y comprueba que PolliStream aparece en la fila de apps.',
              'No instales APKs de enlaces que no vengan de esta página.',
            ],
          },
          {
            index: '05',
            title: 'Abre PolliStream y conecta tu cuenta',
            body: 'Configura Xtream con el mando y revisa la reproducción.',
            details: [
              'Abre PolliStream desde la fila de apps o el lanzador del televisor.',
              'Introduce el servidor completo, el usuario y la contraseña de Xtream.',
              'Prueba la conexión y espera a que cargue el catálogo.',
              'Elige un perfil, configura el PIN parental si lo necesitas y reproduce un canal en vivo.',
            ],
          },
        ],
        note: 'En Fire TV, el método de instalación puede variar según la generación del dispositivo.',
      },
      windows: {
        kicker: 'WINDOWS · PC',
        title: 'PolliStream para Windows',
        tagline: 'La misma lista, en una ventana de escritorio.',
        description:
          'Instalador para Windows con reproducción en ventana o pantalla completa, teclado y ratón.',
        features: [
          { index: '01', tag: 'VENTANA', title: 'Ventana o pantalla completa', body: 'Elige cómo ver: una ventana para multitarea o pantalla completa para el sofá.' },
          { index: '02', tag: 'TECLADO', title: 'Teclado y ratón', body: 'Atajos y controles de reproducción pensados para escritorio.' },
          { index: '03', tag: 'HOGAR', title: 'Perfiles', body: 'Tu historial y tu lista, separados por perfil.' },
          { index: '04', tag: 'HISTORIAL', title: 'Continuar viendo', body: 'Retoma el episodio donde lo dejaste.' },
        ],
        requirements: [
          'Windows 10 u 11',
          'Conexión a internet estable',
          'Cuenta Xtream activa',
          'Permiso para ejecutar el instalador',
        ],
        install: [
          {
            index: '01',
            title: 'Descarga el instalador',
            body: 'Guarda el archivo oficial en tu equipo antes de ejecutarlo.',
            details: [
              'Pulsa Descargar y guarda pollistream-windows.exe en tu carpeta de Descargas.',
              'Comprueba que el tamaño coincide con el que muestra esta página.',
              'No ejecutes el archivo desde el navegador: ábrelo desde Descargas.',
              'Descarga solo desde esta página o desde el canal oficial del proyecto.',
            ],
          },
          {
            index: '02',
            title: 'Verifica el archivo',
            body: 'Comprueba la huella SHA-256 si quieres descartar una descarga alterada.',
            details: [
              'Abre PowerShell en la carpeta de descarga.',
              'Ejecuta el comando y compara el resultado con el SHA-256 de esta ficha.',
              'Si la huella no coincide, borra el archivo y vuelve a descargarlo.',
              'Si Windows SmartScreen avisa, usa Más información › Ejecutar de todas formas solo cuando la huella coincida.',
            ],
            commands: ['Get-FileHash .\\pollistream-windows.exe -Algorithm SHA256'],
          },
          {
            index: '03',
            title: 'Ejecuta el asistente',
            body: 'Instala PolliStream con tu usuario habitual.',
            details: [
              'Haz doble clic en el archivo descargado y acepta el aviso de control de cuentas si aparece.',
              'Elige la carpeta de instalación; deja la predeterminada si no tienes una preferencia.',
              'Mantén marcada la opción de crear acceso directo si quieres abrirlo desde el escritorio.',
              'Espera a que termine la instalación y pulsa Finalizar.',
            ],
          },
          {
            index: '04',
            title: 'Abre PolliStream y conecta tu cuenta',
            body: 'Configura Xtream y comprueba la reproducción.',
            details: [
              'Abre PolliStream desde el menú Inicio o el acceso directo.',
              'Si Windows Firewall pregunta, permite el acceso en redes privadas.',
              'Introduce el servidor completo, el usuario y la contraseña de Xtream.',
              'Prueba la conexión, elige un perfil y reproduce un canal para validar audio y video.',
            ],
          },
          {
            index: '05',
            title: 'Actualiza encima de la versión anterior',
            body: 'No necesitas desinstalar para recibir una versión nueva.',
            details: [
              'Descarga el instalador actualizado desde esta página.',
              'Ejecútalo y deja que reemplace la versión instalada.',
              'Tus perfiles, favoritos e historial se conservan.',
              'Si Windows bloquea el archivo, revisa la huella SHA-256 antes de continuar.',
            ],
          },
        ],
        note: 'Descarga solo desde esta página o desde el canal oficial del proyecto.',
      },
      roku: {
        kicker: 'ROKU · REPRODUCTOR DE STREAMING',
        title: 'PolliStream para Roku',
        tagline: 'Una versión para Roku está en preparación.',
        description:
          'El paquete y el método de instalación para Roku aún no están publicados. Esta página se actualizará cuando la versión esté lista y probada.',
        features: [
          { index: '01', tag: 'EN PREPARACIÓN', title: 'Paquete Roku', body: 'El archivo ZIP se publicará cuando el build esté listo.' },
          { index: '02', tag: 'GUÍA', title: 'Instrucciones verificadas', body: 'Añadiremos los pasos específicos para Roku junto con el paquete.' },
        ],
        requirements: ['Dispositivo Roku compatible', 'La versión aún no está disponible para instalar'],
        install: [
          {
            index: '01',
            title: 'Confirma el dispositivo y la red',
            body: 'Necesitas un Roku compatible y acceso a su dirección IP en la red local.',
            details: [
              'Comprueba el modelo y la versión de Roku OS en Ajustes › Sistema › Información.',
              'Conecta el Roku y el ordenador a la misma red; evita redes de invitados.',
              'Anota la IP del Roku desde Ajustes › Red › Información de la conexión.',
              'Descarga el ZIP solo cuando esté publicado en esta ficha.',
            ],
          },
          {
            index: '02',
            title: 'Activa el modo desarrollador',
            body: 'El modo desarrollador permite instalar canales ZIP sin publicarlos en la tienda.',
            details: [
              'En el mando, desde Inicio, pulsa Inicio tres veces, Arriba dos veces y luego Derecha, Izquierda, Derecha, Izquierda, Derecha.',
              'Cuando aparezca la pantalla de desarrollador, crea una contraseña y anótala.',
              'Activa el modo desarrollador y acepta el reinicio del dispositivo.',
              'Si la combinación no funciona, revisa que estés en la pantalla de Inicio y no dentro de una app.',
            ],
          },
          {
            index: '03',
            title: 'Instala el ZIP por el navegador',
            body: 'El instalador web de Roku sube el paquete al dispositivo.',
            details: [
              'Abre http://<IP_DEL_ROKU> en el navegador del ordenador.',
              'Inicia sesión con el usuario rokudev y la contraseña que creaste.',
              'Selecciona pollistream-roku.zip, pulsa Upload e instala el canal.',
              'Espera a que el Roku muestre el mensaje de instalación correcta antes de cerrar la página.',
            ],
          },
          {
            index: '04',
            title: 'Abre el canal',
            body: 'PolliStream aparecerá al final de la fila de canales.',
            details: [
              'Vuelve al Inicio del Roku y busca PolliStream en la lista de canales.',
              'Si no aparece, reinicia el dispositivo desde Ajustes › Sistema › Reiniciar.',
              'No borres el modo desarrollador hasta terminar la instalación.',
            ],
          },
          {
            index: '05',
            title: 'Conecta tu cuenta',
            body: 'Cuando el paquete esté disponible, configura Xtream con el mando.',
            details: [
              'Introduce el servidor completo, el usuario y la contraseña de Xtream.',
              'Prueba la conexión y espera a que cargue el catálogo.',
              'Elige un perfil y configura el PIN parental si lo necesitas.',
            ],
          },
        ],
        note: 'No descargues paquetes Roku de terceros. La instalación se habilitará después de validar el build.',
      },
      macos: {
        kicker: 'MACOS · ESCRITORIO',
        title: 'PolliStream para Mac',
        tagline: 'Una versión de escritorio para macOS está en preparación.',
        description: 'El instalador para Mac aún no está publicado. La ficha se actualizará cuando exista un build probado.',
        features: [
          { index: '01', tag: 'EN PREPARACIÓN', title: 'Build para macOS', body: 'El formato y los requisitos se confirmarán junto con el instalador.' },
        ],
        requirements: ['Mac compatible; requisitos por confirmar', 'Versión aún no disponible'],
        install: [
          {
            index: '01',
            title: 'Confirma tu Mac',
            body: 'El instalador para macOS todavía no está publicado.',
            details: [
              'Revisa el modelo y la versión de macOS en el menú Apple › Acerca de este Mac.',
              'El formato definitivo (DMG o PKG) y los requisitos se confirmarán con el build.',
              'No descargues instaladores para Mac desde sitios de terceros.',
            ],
          },
          {
            index: '02',
            title: 'Espera el instalador oficial',
            body: 'Publicaremos el archivo probado en esta ficha.',
            details: [
              'El enlace de descarga aparecerá cuando el build esté firmado y verificado.',
              'Comprueba el nombre del archivo y su tamaño antes de abrirlo.',
              'Si el archivo no está en esta página, no lo instales.',
            ],
          },
          {
            index: '03',
            title: 'Instala el paquete',
            body: 'El proceso será el habitual de una app de macOS.',
            details: [
              'Abre el DMG y arrastra PolliStream a la carpeta Aplicaciones.',
              'Expulsa la imagen de disco después de copiar la app.',
              'Si el instalador es un PKG, ábrelo y sigue el asistente con tu usuario.',
            ],
          },
          {
            index: '04',
            title: 'Permite la apertura en macOS',
            body: 'Gatekeeper puede pedir una confirmación la primera vez.',
            details: [
              'Abre Ajustes del Sistema › Privacidad y seguridad.',
              'Si aparece un aviso sobre PolliStream, pulsa Abrir igualmente.',
              'También puedes hacer clic derecho en la app y elegir Abrir la primera vez.',
              'No desactives Gatekeeper de forma permanente.',
            ],
          },
          {
            index: '05',
            title: 'Conecta tu cuenta',
            body: 'Cuando el build esté disponible, configura Xtream y elige tu perfil.',
            details: [
              'Introduce el servidor completo, el usuario y la contraseña de Xtream.',
              'Prueba la conexión y revisa el catálogo.',
              'Configura el PIN parental si lo necesitas.',
            ],
          },
        ],
        note: 'No descargues instaladores de terceros.',
      },
      ios: {
        kicker: 'IPHONE Y IPAD · IOS / IPAD',
        title: 'PolliStream para iPhone y iPad',
        tagline: 'Una versión para dispositivos Apple móviles está en preparación.',
        description: 'El método de distribución para iPhone y iPad aún no está definido ni publicado.',
        features: [
          { index: '01', tag: 'EN PREPARACIÓN', title: 'iOS y iPad', body: 'Publicaremos la app por un canal compatible cuando esté lista.' },
        ],
        requirements: ['iPhone o iPad compatible; requisitos por confirmar', 'Versión aún no disponible'],
        install: [
          {
            index: '01',
            title: 'Espera el canal oficial',
            body: 'No hay app ni archivo IPA publicado para iPhone y iPad.',
            details: [
              'No instales IPA de webs, grupos ni servicios de firmas de terceros.',
              'Anunciaremos el canal válido (App Store o TestFlight) cuando esté definido.',
              'Mientras tanto, puedes usar PolliStream en Android, Android TV o Windows.',
            ],
          },
          {
            index: '02',
            title: 'Actualiza el sistema',
            body: 'El build requerirá una versión compatible de iOS o iPadOS.',
            details: [
              'Abre Ajustes › General › Actualización de software.',
              'Instala la actualización disponible y reinicia el dispositivo si hace falta.',
              'La versión mínima se publicará junto con el enlace oficial.',
            ],
          },
          {
            index: '03',
            title: 'Instala desde el canal oficial',
            body: 'La instalación se hará desde la App Store o desde TestFlight.',
            details: [
              'Abre el enlace oficial desde esta ficha en Safari.',
              'Si es TestFlight, acepta la invitación y pulsa Instalar.',
              'Si es App Store, pulsa Obtener o el icono de descarga y confirma con Face ID o Touch ID.',
              'Espera a que la app aparezca en la pantalla de inicio.',
            ],
          },
          {
            index: '04',
            title: 'Conecta tu cuenta',
            body: 'Cuando esté disponible, configura Xtream y elige tu perfil.',
            details: [
              'Abre PolliStream y acepta los permisos que solicite.',
              'Introduce el servidor completo, el usuario y la contraseña de Xtream.',
              'Prueba la conexión y configura el PIN parental si lo necesitas.',
            ],
          },
        ],
        note: 'No instales archivos IPA de fuentes no verificadas.',
      },
    },
  },
  legal: {
    hubTitle: 'Legal',
    hubBody: 'Privacidad, términos y cookies de la web de PolliStream.',
    backHome: 'Volver al inicio',
    privacy: {
      title: 'Política de privacidad',
      description: 'Qué datos trata PolliStream cuando visitas la web o descargas la app.',
      updated: 'Última revisión: noviembre de 2026',
      intro:
        'Esta política explica qué datos trata PolliStream cuando visitas esta web y descargas la aplicación. La app en sí no envía tus credenciales a PolliStream.',
      sections: [
        {
          title: 'Quién es el responsable',
          body: [
            'PolliStream es un proyecto independiente de desarrollo de software. Para cualquier consulta sobre privacidad, usa el canal de contacto publicado en el pie de página.',
          ],
        },
        {
          title: 'Qué datos tratamos',
          body: [
            'Esta web es estática y no tiene cuentas de usuario. Podemos tratar datos técnicos de la visita (dirección IP, agente de usuario y página solicitada) a través de Cloudflare, métricas agregadas y sin cookies si activamos Cloudflare Web Analytics, y datos de anuncios solo si aceptas cookies publicitarias.',
          ],
        },
        {
          title: 'Descargas y enlaces de socios',
          body: [
            'Cuando pulsas una descarga, la web puede redirigirte a un socio de descargas (CPA) o a un alojamiento externo. Ese socio aplica su propia política. No recibimos tu contraseña de Xtream ni el contenido que ves.',
          ],
        },
        {
          title: 'La app',
          body: [
            'La app guarda la configuración y las credenciales en el almacenamiento local del dispositivo. No hay backend de PolliStream que reciba esos datos. El proveedor Xtream recibe la conexión directamente desde tu dispositivo.',
          ],
        },
        {
          title: 'Base legal',
          body: [
            'Consentimiento para cookies publicitarias y comunicaciones; interés legítimo para seguridad y métricas agregadas; ejecución del servicio para entregar la descarga.',
          ],
        },
        {
          title: 'Conservación',
          body: [
            'Los registros técnicos de Cloudflare se conservan según su configuración. Las preferencias de cookies se guardan en tu navegador hasta que las borres.',
          ],
        },
        {
          title: 'Tus derechos',
          body: [
            'Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad, y retirar el consentimiento. También puedes reclamar ante tu autoridad de protección de datos.',
          ],
        },
        {
          title: 'Cambios',
          body: ['Podemos actualizar esta política. Publicaremos la fecha de la última revisión.'],
        },
      ],
    },
    terms: {
      title: 'Términos de uso',
      description: 'Condiciones de uso de la web y de los instaladores de PolliStream.',
      updated: 'Última revisión: noviembre de 2026',
      intro:
        'Al usar esta web y descargar PolliStream aceptas estos términos. Si no estás de acuerdo, no uses el sitio ni los instaladores.',
      sections: [
        {
          title: 'Objeto',
          body: [
            'PolliStream es un reproductor de IPTV. No vende, aloja, distribuye ni recomienda contenido audiovisual. La web solo distribuye el software y explica cómo instalarlo.',
          ],
        },
        {
          title: 'Uso permitido',
          body: [
            'Debes usar PolliStream únicamente con proveedores y contenidos que tengas derecho a acceder. No puedes usar la app para redistribuir contenido, eludir medidas de protección ni acceder a servicios sin autorización.',
          ],
        },
        {
          title: 'Descargas',
          body: [
            'Los instaladores se ofrecen gratuitamente y tal cual. Podemos cambiar, retirar o actualizar builds sin previo aviso. No garantizamos que una versión concreta funcione en todos los modelos o versiones de sistema.',
          ],
        },
        {
          title: 'Propiedad intelectual',
          body: [
            'El nombre, el logo y el código de PolliStream pertenecen a sus autores. Los canales, películas, series y marcas de terceros pertenecen a sus titulares. PolliStream no reclama derechos sobre ese contenido.',
          ],
        },
        {
          title: 'Enlaces de terceros',
          body: [
            'La web puede incluir enlaces de afiliados, anuncios o enlaces a alojamientos de descarga. No controlamos esos sitios y no somos responsables de su contenido o sus prácticas.',
          ],
        },
        {
          title: 'Limitación de responsabilidad',
          body: [
            'En la medida permitida por la ley, PolliStream no responde por daños derivados del uso de la app, de la indisponibilidad del sitio o de la actuación de tu proveedor. Nada en estos términos limita los derechos que la ley te reconozca como consumidor.',
          ],
        },
        {
          title: 'Ley aplicable',
          body: [
            'Se aplicará la legislación que corresponda al titular del sitio. Si eres consumidor, conservas la protección de las normas de tu país de residencia.',
          ],
        },
        {
          title: 'Contacto',
          body: ['Para cuestiones sobre estos términos, usa el canal de contacto publicado en el pie de página.'],
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description: 'Cómo usa PolliStream las cookies y cómo puedes cambiar tus preferencias.',
      updated: 'Última revisión: noviembre de 2026',
      intro:
        'Usamos el mínimo necesario para que la web funcione. Los anuncios y sus cookies solo se cargan si das tu consentimiento.',
      sections: [
        {
          title: 'Qué son',
          body: [
            'Las cookies y el almacenamiento local son pequeños datos que el navegador guarda para recordar preferencias o medir el uso de un sitio.',
          ],
        },
        {
          title: 'Almacenamiento esencial',
          body: [
            'Guardamos tu elección de cookies en el almacenamiento local del navegador para no preguntarte en cada visita. No se usa para identificarte ni para publicidad.',
          ],
        },
        {
          title: 'Publicidad',
          body: [
            'Si aceptas, podemos cargar anuncios de redes como Google AdSense o Adsterra. Esas redes pueden usar cookies o identificadores para medir y personalizar anuncios. Sin consentimiento, los anuncios no se cargan.',
          ],
        },
        {
          title: 'Analítica',
          body: [
            'Podemos usar Cloudflare Web Analytics o Plausible, que son mediciones agregadas y sin cookies. No crean un perfil publicitario de ti.',
          ],
        },
        {
          title: 'Afiliados',
          body: [
            'Los enlaces de afiliados pueden incluir parámetros de seguimiento del partner para atribuir la visita. Se marcan como enlaces de afiliado en la página.',
          ],
        },
        {
          title: 'Cómo gestionar tus preferencias',
          body: [
            'Puedes aceptar o rechazar los anuncios desde el aviso de cookies. También puedes borrar el almacenamiento local y las cookies desde la configuración de tu navegador.',
          ],
        },
        {
          title: 'Cambios',
          body: ['Si cambiamos los proveedores o las finalidades, actualizaremos esta página y volveremos a pedir consentimiento cuando sea necesario.'],
        },
      ],
    },
  },
  notFound: {
    title: 'Señal perdida',
    body: 'Esta página no existe o cambió de frecuencia. Vuelve al inicio y elige tu pantalla.',
    cta: 'Volver al inicio',
  },
}
