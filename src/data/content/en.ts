import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'PolliStream — Your IPTV on LG, Samsung, Android TV and Windows',
    description:
      'IPTV player for Smart TV, Android and Windows. Connect your Xtream list, browse live TV, movies and series, and enjoy audio and subtitles. Download free.',
    ogAlt: 'PolliStream, your Xtream list on every screen',
  },
  common: {
    download: 'Download',
    downloadFree: 'Download free',
    viewPlatforms: 'View platforms',
    chooseScreen: 'Choose my screen',
    comingSoon: 'Coming soon',
    available: 'Available',
    version: 'Version',
    size: 'Size',
    format: 'Format',
    updated: 'Updated',
    requirements: 'Requirements',
    install: 'Installation',
    otherScreens: 'Other screens',
    back: 'Back',
    open: 'Open',
    close: 'Close',
    menu: 'Menu',
    language: 'Language',
    readMore: 'Read more',
    adLabel: 'Advertising',
    sponsor: 'Sponsor space',
    sponsorCta: 'Your brand here',
    adsOff: 'Ads are off',
    adsOffBody: 'Enable ads to help keep downloads free.',
    activateAds: 'Enable ads',
    consentTitle: 'Cookies and ads',
    consentBody:
      'We only use advertising cookies if you accept them. Measurement is aggregated and does not identify you. You can change your mind at any time.',
    consentAccept: 'Accept ads',
    consentEssential: 'Essential only',
    consentLink: 'Cookie policy',
    external: 'opens in a new tab',
    share: 'Share',
    copied: 'Link copied',
    downloads: 'downloads',
    notFoundTitle: 'Signal lost',
    notFoundBody: 'This page does not exist or changed frequency.',
    goHome: 'Back to home',
    skip: 'Skip to content',
    breadcrumb: 'Breadcrumb',
  },
  nav: {
    platforms: 'Platforms',
    features: 'Features',
    install: 'Install',
    faq: 'FAQ',
    support: 'Support',
    download: 'Download',
  },
  device: {
    live: 'LIVE',
    now: 'NOW',
    signal: 'YOUR PROVIDER SIGNAL',
    channel: 'CHANNEL 01',
    titleLine1: 'Your channel',
    titleLine2: 'live.',
    sample: 'CONTENT FROM YOUR XTREAM LIST · SAMPLE',
    guide: 'GUIDE',
    guideItems: ['Movies', 'Series', 'Sports', 'Kids'],
    audio: 'AUDIO EN',
    subtitles: 'SUBS EN',
    quality: '1080p',
  },
  hero: {
    eyebrow: 'IPTV PLAYER · XTREAM · MULTI-PLATFORM',
    titleA: 'All your IPTV.',
    titleB: 'On the screen you choose.',
    description:
      'PolliStream connects your Xtream list and organizes live TV, movies and series in an interface built for the couch. No PolliStream account. No middlemen.',
    primary: 'Download free',
    secondary: 'See features',
    stats: [
      { value: '9', label: 'platforms' },
      { value: '1', label: 'Xtream list' },
      { value: '0', label: 'sign-ups' },
      { value: 'A/V', label: 'audio & subtitles' },
    ],
    demoLabel: 'INTERFACE PREVIEW · SAMPLE DATA',
    selectLabel: 'Tune your screen',
    deviceLabels: {
      lg: 'webOS 4+',
      samsung: 'Tizen 3.0 Legacy',
      'samsung-modern': 'Modern Tizen',
      android: 'Android',
      'android-tv': 'Android TV',
      windows: 'Windows',
      roku: 'Roku',
      macos: 'macOS',
      ios: 'iOS / iPad',
    },
    microcopy: 'Free. No PolliStream subscription. No sign-up.',
  },
  platforms: {
    kicker: 'TUNE YOUR SCREEN',
    title: 'One app. Nine platforms.',
    body: 'Choose your device. Find its installation guide and download only packages that are already published.',
    cta: 'View download',
    live: 'Available',
    soon: 'Coming soon',
    all: 'View all platforms',
  },
  features: {
    kicker: 'WHAT IT DOES',
    title: 'Less searching. More watching.',
    body: 'Every screen is designed for a remote, not a cursor. Your provider supplies the catalog; PolliStream supplies the experience.',
    items: [
      {
        index: '01',
        tag: 'LIVE',
        title: 'Live TV, straight in',
        body: 'Categories, search and zapping. Jump between two channels with quick A/B switching without losing your place.',
      },
      {
        index: '02',
        tag: 'CATALOG',
        title: 'Movies and series in order',
        body: 'Posters, synopses, seasons and episodes in horizontal rows. Pick up where you left off with Continue watching.',
      },
      {
        index: '03',
        tag: 'A/V',
        title: 'Audio and subtitles',
        body: 'Switch audio tracks and subtitles when the file includes them. On LG, a local service extracts embedded MKV/MP4 tracks without relying on CORS.',
      },
      {
        index: '04',
        tag: 'HOME',
        title: 'Household profiles',
        body: 'Up to three standard profiles and one kids profile. Each with its own history and list, so nobody has to hunt for their place.',
      },
      {
        index: '05',
        tag: 'CONTROL',
        title: 'Parental control',
        body: 'Lock adult content with a four-digit PIN. Set it from the remote, with no extra apps or accounts.',
      },
      {
        index: '06',
        tag: 'PRIVACY',
        title: 'Your account, your rules',
        body: 'Save several Xtream accounts and switch between them. Credentials stay on your device; they do not pass through PolliStream servers.',
      },
    ],
  },
  signal: {
    kicker: 'NO MIDDLEMEN',
    title: 'Your provider talks straight to your screen.',
    body: 'PolliStream does not sell content or host playlists. It is the player: you bring the Xtream account you already pay for, and the app does the rest.',
    nodes: [
      { index: '01', title: 'Your provider', body: 'The Xtream list you already have, with its channels and catalog.' },
      { index: '02', title: 'PolliStream', body: 'Orders the signal and plays it on your device, with a remote or a keyboard.' },
      { index: '03', title: 'Your screen', body: 'TV, phone or PC. Same list, same history, your profile.' },
    ],
    note: 'Credentials are stored in the device local storage. There is no PolliStream backend receiving them.',
    cta: 'See how to install',
  },
  install: {
    kicker: 'FROM ZERO TO TUNED IN',
    title: 'Three steps. No new account.',
    body: 'No email, card or sign-up. Choose your screen, install the package and connect the account you already use.',
    steps: [
      {
        index: '01',
        title: 'Choose your screen',
        body:                 'LG, Samsung Tizen 3.0, modern Samsung, Android, Android TV, Windows, Roku, macOS, iPhone or iPad. Each platform has its own guide and availability status.',
      },
      {
        index: '02',
        title: 'Download and install',
        body: 'Follow your platform method. On Android, allow the APK install; on TV, use the developer flow where required.',
      },
      {
        index: '03',
        title: 'Connect your Xtream',
        body: 'Enter server, username and password. Pick a profile and start watching. You can save more than one account.',
      },
    ],
    note: 'If a step does not match your model, check your platform page or the project support channel.',
  },
  download: {
    kicker: 'DOWNLOAD',
    title: 'Preparing your download',
    description: 'You are one step away from installing PolliStream on {platform}.',
    preparing: 'Preparing the link',
    ready: 'Your download is ready',
    countdown: 'The link will be ready in',
    button: 'Download {format}',
    lockerButton: 'Continue to download',
    soonTitle: 'No installer published yet',
    soonBody:
      'We are preparing the build for {platform}. Check back soon or browse the other screens in the meantime.',
    back: 'Back to {platform}',
    securityTitle: 'Before you install',
    security: [
      'Download only from this page or from the official link we publish.',
      'Check the file name and size before opening it.',
      'On Android, install only if you accept the APK source. On TV, use the developer flow where required.',
    ],
    partnerNote:
      'This link may go through an offer from our download partner. The download is still free.',
    adNote: 'Ads help keep downloads free.',
    file: 'File',
    version: 'Version',
    size: 'Size',
    format: 'Format',
    checksum: 'SHA-256',
    whatsNext: 'After downloading',
    whatsNextBody:
      'Open the installer and follow your platform guide. If your TV needs a developer step, the product page explains it.',
    openInstaller: 'Open installer',
    tutorialKicker: 'INSTALLATION GUIDE',
    tutorialTitle: 'Install PolliStream on {platform}',
    tutorialBody: 'Follow these steps to install the package and set up your account.',
    tutorialPrep: 'Before you start',
    tutorialPrepBody: 'Check that your device meets these requirements to avoid errors halfway through the installation.',
    tutorialStep: 'STEP',
    tutorialImage: 'Illustration for installation step {step}',
    tutorialVideo: 'Video tutorial',
    tutorialVideoSoon: 'The installation video for this platform will be available soon.',
    pairingScript: 'Download TV pairing tool',
  },
  support: {
    kicker: 'KEEP THE SIGNAL ON',
    title: 'Free for you. Sustainable for the project.',
    body: 'We do not charge for the app or the installer. Ads, downloads and voluntary support cover hosting and development time.',
    donate: 'Support the project',
    share: 'Share PolliStream',
    copied: 'Link copied',
    fallback: 'You can also help by sharing PolliStream with someone who uses the same provider.',
    shareTitle: 'Share',
    shareBody: 'Recommend the app',
    shareModalTitle: 'Share PolliStream',
    shareModalBody: 'Choose where you want to share the app. You can also copy the link.',
    shareWhatsApp: 'WhatsApp',
    shareTelegram: 'Telegram',
    shareFacebook: 'Facebook',
    shareX: 'X',
    shareEmail: 'Email',
    shareCopy: 'Copy link',
    shareNative: 'More options',
    shareClose: 'Close',
    yapeTitle: 'Yape',
    yapeBody: 'Donate in soles',
    yapeCta: 'Donate with Yape',
    paypalTitle: 'PayPal',
    paypalBody: 'International support',
    paypalCta: 'Donate with PayPal',
    yapeModalTitle: 'Donate with Yape',
    yapeModalBody:
      'Scan the QR from the Yape app. If you are donating from another device, download the image and open it where Yape is installed.',
    yapeSteps: [
      'Open Yape on your phone.',
      'Tap Scan QR.',
      'Point at the code and confirm the amount.',
      'The support is credited instantly.',
    ],
    yapeDownload: 'Download QR',
    yapeClose: 'Close',
    yapePending: 'The Yape QR will be available very soon.',
  },
  affiliate: {
    kicker: 'NO PROVIDER YET?',
    title: 'A legal provider for your list.',
    body: 'PolliStream does not sell subscriptions. If you need a provider, these are partners we know; the link is marked as an affiliate link.',
    cta: 'View options',
    disclosure: 'Affiliate link. If you subscribe, we may earn a commission at no extra cost to you.',
  },
  faq: {
    kicker: 'FREQUENTLY TUNED',
    title: 'What people usually ask.',
    items: [
      {
        question: 'Does PolliStream include channels or movies?',
        answer:
          'No. PolliStream is a player. You need an Xtream account from a provider with the rights to the content you want to watch. We do not host or distribute content.',
      },
      {
        question: 'Do I need to create a PolliStream account?',
        answer:
          'No. The app connects directly to your provider. There is no sign-up, email or card. Just the server, username and password of your Xtream list.',
      },
      {
        question: 'Where are my credentials stored?',
        answer:
          'In your device local storage. They do not pass through PolliStream servers. The connection goes from your device to your provider.',
      },
      {
        question: 'Why do some installers take longer?',
        answer:
          'Each platform has its own packaging, signing and testing. We publish a build when it is tested. If it is not here yet, it is not ready; we do not publish placeholder links.',
      },
      {
        question: 'Is the download free?',
        answer:
          'Yes. The installer is free. The site is funded by ads, download offers and voluntary support. Ads only load if you accept advertising cookies.',
      },
      {
        question: 'Does it work with M3U lists?',
        answer:
          'The main connection is Xtream Codes. We do not promise M3U until it is shipped and tested in the app. If your provider only offers M3U, check before installing.',
      },
      {
        question: 'Is it legal to use PolliStream?',
        answer:
          'It depends on your provider. Use PolliStream only with services you are entitled to access. You are responsible for the account and the content you play.',
      },
    ],
  },
  footer: {
    tagline: 'The player that puts your list on screen.',
    product: 'Product',
    platforms: 'Platforms',
    support: 'Support',
    legal: 'Legal',
    allPlatforms: 'All platforms',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    contact: 'Contact',
    disclaimer:
      'PolliStream does not sell, host or distribute content. It is a player for the provider you choose.',
    copyright: '© {year} PolliStream. Built for the couch.',
    madeFor: 'LG webOS · Samsung Tizen 3.0 and modern · Android · Android TV · Windows · Roku · macOS · iPhone · iPad',
    status: 'SIGNAL OPEN',
  },
  product: {
    breadcrumb: 'Platforms',
    sectionKicker: 'THE SPEC SHEET',
    sectionTitle: 'What you need to tune in.',
    about: 'About this build',
    specs: 'Specifications',
    requirements: 'Requirements',
    install: 'How to install',
    other: 'Other screens',
    related: 'You may also need',
    items: {
      lg: {
        kicker: 'LG WEBOS · SMART TV',
        title: 'PolliStream for LG',
        tagline: 'The full app for your LG, with audio tracks and subtitles.',
        description:
          'Built for webOS 4.x and above. Includes the local service that lists embedded MKV/MP4 tracks and extracts subtitles without relying on CORS.',
        features: [
          { index: '01', tag: 'REMOTE', title: 'Remote first', body: 'Visible focus navigation designed to be read from the couch, not from a monitor.' },
          { index: '02', tag: 'A/V', title: 'Embedded tracks', body: 'The package includes the local ffmpeg service that lists audio and subtitle tracks from the file.' },
          { index: '03', tag: 'HOME', title: 'Profiles and PIN', body: 'Three standard profiles, one kids profile and parental control with a four-digit PIN.' },
          { index: '04', tag: 'HISTORY', title: 'Continue watching', body: 'Resume the episode where you left off, with per-series intro marks.' },
        ],
        requirements: [
          'LG webOS 4.0 or above',
          'Stable internet connection',
          'Active Xtream account',
          'Developer mode to install the IPK',
        ],
        install: [
          {
            index: '01',
            title: 'Check the requirements and network',
            body: 'Keep the TV and the computer on the same network before you start.',
            details: [
              'Open Settings › General › TV information and confirm webOS 4.0 or later.',
              'Connect the TV over Ethernet or stable Wi-Fi; avoid guest networks that isolate devices.',
              'Have your Xtream server, username and password ready.',
              'Install Node.js 18 or later on the computer that will run the webOS CLI.',
            ],
          },
          {
            index: '02',
            title: 'Enable Developer Mode on the TV',
            body: 'The Developer Mode app opens a temporary installation session on the TV.',
            details: [
              'Search for Developer Mode in the LG Content Store and install it.',
              'Sign in with a free LG Developer account.',
              'Enable Dev Mode Status and Key Server, then accept the TV restart.',
              'Write down the device name and the six-character password shown by the app.',
              'The session expires after 1000 hours: renew Developer Mode before updating PolliStream.',
            ],
          },
          {
            index: '03',
            title: 'Connect the CLI to the TV',
            body: 'Install webOS CLI on the computer and register the TV over SSH.',
            details: [
              'In ares-setup-device choose add device and use the TV IP address.',
              'Use port 9922 and the credentials shown in Developer Mode.',
              'If the connection fails, check that the TV and PC share the network and that port 9922 is not blocked.',
            ],
            commands: [
              'npm install -g @webos-tools/cli',
              'ares-setup-device',
              'ares-setup-device --list',
            ],
          },
          {
            index: '04',
            title: 'Install the full IPK',
            body: 'Send the package and open it from the TV home bar.',
            details: [
              'Download pollistream-lg.ipk from this page and do not rename it.',
              'Always install the full package: it contains the app and the local audio and subtitle track service.',
              'If ares-install asks for confirmation, accept it; the TV may show a brief prompt.',
              'When it finishes, look for PolliStream in the webOS home bar.',
            ],
            commands: ['ares-install --device tv pollistream-lg.ipk'],
          },
          {
            index: '05',
            title: 'Connect your account and test',
            body: 'Configure Xtream and check playback, audio and subtitles.',
            details: [
              'Open PolliStream and accept the local network permissions if prompted.',
              'Enter the server with http:// or https://, your Xtream username and password.',
              'Use Test connection and wait for the catalog to load.',
              'Create or select a profile and set the parental PIN if needed.',
              'Play a live channel and a movie to confirm audio and subtitles.',
            ],
          },
        ],
        note: 'The IPK includes the app and the local track service. Install the full package so the audio menu works.',
      },
      samsung: {
        kicker: 'SAMSUNG TIZEN 3.0 · LEGACY',
        title: 'PolliStream for Samsung Legacy',
        tagline: 'The version for Samsung TVs running Tizen 3.0.',
        description:
          'This is the Legacy build for Tizen 3.0. Do not install it on modern Samsung TVs; those will have a separate package.',
        features: [
          { index: '01', tag: 'REMOTE', title: 'Remote navigation', body: 'Catalog rows and clear focus so you can move without a mouse.' },
          { index: '02', tag: 'CATALOG', title: 'Everything in order', body: 'Live TV, movies and series with the same order as on your other screens.' },
          { index: '03', tag: 'HOME', title: 'Profiles', body: 'Everyone in the house keeps their own history and list.' },
          { index: '04', tag: 'CONTROL', title: 'Parental control', body: 'Four-digit PIN for adult content.' },
        ],
        requirements: [
          'Samsung TV compatible with Tizen 3.0',
          'Stable internet connection',
          'Active Xtream account',
          'Developer Mode and Tizen installation tool',
        ],
        install: [
          {
            index: '01',
            title: 'Confirm the model and version',
            body: 'This package is only for Samsung TVs running Tizen 3.0.',
            details: [
              'Open Settings › Support › About this TV and check the model and system version.',
              'If the TV runs Tizen 6.5 or later, use the modern Samsung page instead of this package.',
              'Make sure the TV and the computer are on the same network.',
              'Have your Xtream server, username and password ready.',
            ],
          },
          {
            index: '02',
            title: 'Set up Tizen Studio',
            body: 'You need the Tizen developer tools and an author certificate.',
            details: [
              'Download Tizen Studio from developer.samsung.com and install the SDK with the CLI tools.',
              'Open Certificate Manager and create an Author certificate for your computer.',
              'Accept the certificate public key; you will use it to sign or reinstall the WGT.',
              'Install the TV driver if Tizen Studio asks for it.',
            ],
          },
          {
            index: '03',
            title: 'Enable Developer Mode',
            body: 'The TV must accept connections from the computer running Tizen Studio.',
            details: [
              'Open the Apps section on the TV and press 1, 2, 3, 4, 5 on the remote.',
              'Choose Developer mode, enter the computer IP address and restart the TV.',
              'Reconnect the TV and PC to the same network; the development port is 26101.',
              'In Device Manager add the TV by IP and confirm it shows as connected.',
            ],
          },
          {
            index: '04',
            title: 'Install the Legacy WGT',
            body: 'Send the package compatible with Tizen 3.0 from the command line.',
            details: [
              'Download pollistream-samsung.wgt from this page and do not rename it.',
              'Use this WGT only on Tizen 3.0 Legacy TVs; do not install it on modern models.',
              'If installation fails because of the certificate, sign the package again in Tizen Studio and resend it.',
              'When it finishes, the PolliStream icon appears in the TV app row.',
            ],
            commands: [
              'sdb connect <TV_IP>:26101',
              'tizen install -n pollistream-samsung.wgt -t <TV_IP>:26101',
            ],
          },
          {
            index: '05',
            title: 'Open PolliStream and connect your account',
            body: 'Configure Xtream and browse the catalog with the remote.',
            details: [
              'Open PolliStream from the TV app row.',
              'Enter the full server address, your Xtream username and password.',
              'Test the connection and wait for live TV, movies and series to load.',
              'Choose a profile and enable the parental PIN if children use the TV.',
            ],
          },
        ],
        note: 'Do not use this package on modern Samsung TVs. Their build will be published separately.',
      },
      'samsung-modern': {
        kicker: 'MODERN SAMSUNG TIZEN · 6.5+',
        title: 'PolliStream for modern Samsung TVs',
        tagline: 'A separate package for modern Tizen TVs.',
        description:
          'The modern version is not published yet. Its installer and platform-specific instructions will appear here once tested.',
        features: [
          { index: '01', tag: 'IN PROGRESS', title: 'Modern build', body: 'The WGT for modern Tizen will be published after compatibility testing.' },
          { index: '02', tag: 'GUIDE', title: 'Specific instructions', body: 'The guide will distinguish this version from the Tizen 3.0 Legacy package.' },
        ],
        requirements: ['Samsung TV compatible with Tizen 6.5 or later', 'Modern build not available yet'],
        install: [
          {
            index: '01',
            title: 'Check your Tizen version',
            body: 'This package will be exclusive to Samsung TVs running Tizen 6.5 or later.',
            details: [
              'Open Settings › Support › About this TV and note the system version.',
              'If the TV runs Tizen 3.0, download the Legacy package from its own page.',
              'Do not install the Legacy WGT on a modern TV: the app may not start.',
            ],
          },
          {
            index: '02',
            title: 'Wait for the tested modern WGT',
            body: 'The modern installer is not published yet.',
            details: [
              'The package will appear on this page when compatibility testing is complete.',
              'Do not use third-party WGT files or older builds to force the installation.',
              'When it is published, verify the file name and size before installing.',
            ],
          },
          {
            index: '03',
            title: 'Install with Tizen Studio',
            body: 'The method will follow the same modern Tizen developer flow.',
            details: [
              'Enable Developer Mode with the PC IP address and restart the TV.',
              'Connect over sdb to port 26101 and confirm the device in Device Manager.',
              'Send the WGT with the author certificate and wait for the app to appear on the TV.',
            ],
            commands: [
              'sdb connect <TV_IP>:26101',
              'tizen install -n pollistream-samsung-modern.wgt -t <TV_IP>:26101',
            ],
          },
          {
            index: '04',
            title: 'Connect your account',
            body: 'When the package is available, configure Xtream and choose your profile.',
            details: [
              'Enter your Xtream server, username and password.',
              'Test the connection and review live TV, movies and series.',
              'Set the parental PIN if you need it.',
            ],
          },
        ],
        note: 'Do not install the Tizen 3.0 Legacy WGT here.',
      },
      android: {
        kicker: 'ANDROID · PHONE AND TABLET',
        title: 'PolliStream for Android',
        tagline: 'Your provider in your pocket, with the same list and profiles.',
        description:
          'APK for Android phones and tablets. The touch interface keeps the catalog, history and parental control.',
        features: [
          { index: '01', tag: 'TOUCH', title: 'Built for fingers', body: 'Lists, search and a player with clear on-screen controls.' },
          { index: '02', tag: 'SYNC', title: 'The same list', body: 'Your Xtream account and profiles, with no new account to create.' },
          { index: '03', tag: 'HISTORY', title: 'Keep your place', body: 'Continue watching and favorites that follow the way you watch.' },
          { index: '04', tag: 'CONTROL', title: 'Parental control', body: 'Lock adult content with a four-digit PIN.' },
        ],
        requirements: [
          'Android compatible with the APK',
          'Stable internet connection',
          'Active Xtream account',
          'Permission to install apps from unknown sources',
        ],
        install: [
          {
            index: '01',
            title: 'Download the APK',
            body: 'Save the official file on your phone or tablet.',
            details: [
              'Tap Download and wait for the file to finish; it is named pollistream-android.apk.',
              'If the browser warns about a potentially harmful file, continue only when the download came from this page.',
              'Check that the size in the download details matches the saved file.',
              'Do not use APKs from mirrors, groups or third-party sites.',
            ],
          },
          {
            index: '02',
            title: 'Allow installs from unknown sources',
            body: 'Android blocks APKs that do not come from the Play Store by default.',
            details: [
              'Open Settings › Apps › Special access › Install unknown apps.',
              'Choose the browser or file manager you will use to open the APK.',
              'Enable Allow from this source.',
              'On Android 7 or older, use Settings › Security › Unknown sources.',
            ],
          },
          {
            index: '03',
            title: 'Install the APK',
            body: 'Open the download and confirm the installation.',
            details: [
              'Tap the download notification or open Downloads and select pollistream-android.apk.',
              'Tap Install and wait for the Play Protect scan.',
              'If a warning appears, choose Install anyway only when the file came from this page.',
              'Do not close the screen or lock the phone during installation.',
            ],
          },
          {
            index: '04',
            title: 'Open PolliStream and connect your account',
            body: 'Configure your Xtream provider and choose a profile.',
            details: [
              'Open PolliStream from the app drawer and accept the permissions it requests.',
              'Enter the full server address with http:// or https://, your Xtream username and password.',
              'Tap Test connection and wait for the catalog to load.',
              'Choose a profile and enable the parental PIN if needed.',
            ],
          },
          {
            index: '05',
            title: 'Update without losing your data',
            body: 'New versions install over the previous one.',
            details: [
              'Download the updated APK from this page.',
              'Open it and install it without uninstalling PolliStream first.',
              'Profiles, favorites and history are preserved when you update.',
              'If Android rejects the update, check that both APKs share the same signature and origin.',
            ],
          },
        ],
        note: 'Do not install APKs from sites other than this one or the official project channel.',
      },
      'android-tv': {
        kicker: 'ANDROID TV / FIRE TV · TV',
        title: 'PolliStream for Android TV',
        tagline: 'The couch experience on your Android TV or Fire TV.',
        description:
          'D-pad navigation, catalog rows and full-screen playback on Android TV and Fire TV.',
        features: [
          { index: '01', tag: 'D-PAD', title: 'Remote and D-pad', body: 'Visible focus and shortcuts to move through the catalog without a mouse.' },
          { index: '02', tag: 'SCREEN', title: 'Full screen', body: 'Full-screen playback with controls that get out of the way.' },
          { index: '03', tag: 'HOME', title: 'Profiles', body: 'Each profile with its own history and list.' },
          { index: '04', tag: 'HISTORY', title: 'Continue watching', body: 'Resume series and movies where you left them.' },
        ],
        requirements: [
          'Compatible Android TV or Fire TV',
          'Stable internet connection',
          'Active Xtream account',
          'APK / sideload installation',
        ],
        install: [
          {
            index: '01',
            title: 'Prepare the device and network',
            body: 'Enable developer options and keep the TV on the same network as the computer.',
            details: [
              'Android TV: open Settings › System › About and press Build seven times.',
              'Fire TV: open Settings › My Fire TV › About and press Build seven times.',
              'Note the TV IP address under Settings › Network or Status.',
              'Connect the TV and computer to the same network; avoid guest networks.',
            ],
          },
          {
            index: '02',
            title: 'Enable debugging',
            body: 'Debugging lets you install the APK from the computer or from Downloader.',
            details: [
              'Android TV: in Developer options enable USB debugging and Network debugging.',
              'Fire TV: in Developer options enable ADB debugging and Apps from unknown sources.',
              'Accept the security prompt shown by the system.',
              'If the menu does not appear, restart the TV and check the developer section again.',
            ],
          },
          {
            index: '03',
            title: 'Install with ADB or Downloader',
            body: 'Send the APK from a PC or download it directly on the TV.',
            details: [
              'From a PC with ADB, connect to the TV IP and send pollistream-androidtv.apk.',
              'Without a PC: install Downloader on Fire TV, open this page in its browser and download the APK.',
              'On Android TV you can also copy the APK to a USB drive and open it with a file manager.',
              'If ADB replies unauthorized, accept the dialog on the TV with the remote.',
            ],
            commands: [
              'adb connect <TV_IP>:5555',
              'adb install pollistream-androidtv.apk',
            ],
          },
          {
            index: '04',
            title: 'Allow the installation',
            body: 'Confirm the APK source when the system asks.',
            details: [
              'Allow unknown apps for ADB, Downloader or the file manager you use.',
              'Fire TV may ask you to disable app scanning temporarily; enable it again when finished.',
              'Wait for the installation to finish and confirm PolliStream appears in the app row.',
              'Do not install APKs from links that do not come from this page.',
            ],
          },
          {
            index: '05',
            title: 'Open PolliStream and connect your account',
            body: 'Configure Xtream with the remote and check playback.',
            details: [
              'Open PolliStream from the app row or the TV launcher.',
              'Enter the full server address, your Xtream username and password.',
              'Test the connection and wait for the catalog to load.',
              'Choose a profile, set the parental PIN if needed and play a live channel.',
            ],
          },
        ],
        note: 'On Fire TV, the install method may vary by device generation.',
      },
      windows: {
        kicker: 'WINDOWS · PC',
        title: 'PolliStream for Windows',
        tagline: 'The same list, in a desktop window.',
        description:
          'Windows installer with windowed or full-screen playback, keyboard and mouse.',
        features: [
          { index: '01', tag: 'WINDOW', title: 'Window or full screen', body: 'Choose how to watch: a window for multitasking or full screen for the couch.' },
          { index: '02', tag: 'KEYBOARD', title: 'Keyboard and mouse', body: 'Shortcuts and playback controls designed for desktop.' },
          { index: '03', tag: 'HOME', title: 'Profiles', body: 'Your history and list, separated by profile.' },
          { index: '04', tag: 'HISTORY', title: 'Continue watching', body: 'Resume the episode where you left off.' },
        ],
        requirements: [
          'Windows 10 or 11',
          'Stable internet connection',
          'Active Xtream account',
          'Permission to run the installer',
        ],
        install: [
          {
            index: '01',
            title: 'Download the installer',
            body: 'Save the official file to your computer before running it.',
            details: [
              'Tap Download and save pollistream-windows.exe to your Downloads folder.',
              'Check that the size matches the value shown on this page.',
              'Do not run the file from the browser: open it from Downloads.',
              'Download only from this page or the official project channel.',
            ],
          },
          {
            index: '02',
            title: 'Verify the file',
            body: 'Check the SHA-256 hash if you want to rule out a modified download.',
            details: [
              'Open PowerShell in the download folder.',
              'Run the command and compare the result with the SHA-256 on this page.',
              'If the hash does not match, delete the file and download it again.',
              'If Windows SmartScreen warns, use More info › Run anyway only when the hash matches.',
            ],
            commands: ['Get-FileHash .\\pollistream-windows.exe -Algorithm SHA256'],
          },
          {
            index: '03',
            title: 'Run the installer wizard',
            body: 'Install PolliStream with your normal user account.',
            details: [
              'Double-click the downloaded file and accept the account control prompt if it appears.',
              'Choose the install folder; keep the default if you have no preference.',
              'Leave the desktop shortcut option enabled if you want to open it from the desktop.',
              'Wait for the installation to finish and click Finish.',
            ],
          },
          {
            index: '04',
            title: 'Open PolliStream and connect your account',
            body: 'Configure Xtream and check playback.',
            details: [
              'Open PolliStream from the Start menu or the desktop shortcut.',
              'If Windows Firewall asks, allow access on private networks.',
              'Enter the full server address, your Xtream username and password.',
              'Test the connection, choose a profile and play a channel to check audio and video.',
            ],
          },
          {
            index: '05',
            title: 'Update over the previous version',
            body: 'You do not need to uninstall to receive a new version.',
            details: [
              'Download the updated installer from this page.',
              'Run it and let it replace the installed version.',
              'Profiles, favorites and history are preserved.',
              'If Windows blocks the file, check the SHA-256 hash before continuing.',
            ],
          },
        ],
        note: 'Download only from this page or from the official project channel.',
      },
      roku: {
        kicker: 'ROKU · STREAMING PLAYER',
        title: 'PolliStream for Roku',
        tagline: 'A Roku version is in preparation.',
        description:
          'The Roku package and installation method are not published yet. This page will be updated when the build is ready and tested.',
        features: [
          { index: '01', tag: 'IN PROGRESS', title: 'Roku package', body: 'The ZIP archive will be published when the build is ready.' },
          { index: '02', tag: 'GUIDE', title: 'Verified instructions', body: 'Roku-specific steps will be published alongside the package.' },
        ],
        requirements: ['Compatible Roku device', 'The version is not available to install yet'],
        install: [
          {
            index: '01',
            title: 'Check the device and network',
            body: 'You need a compatible Roku and access to its IP address on the local network.',
            details: [
              'Check the model and Roku OS version under Settings › System › About.',
              'Connect the Roku and the computer to the same network; avoid guest networks.',
              'Note the Roku IP address under Settings › Network › Connection information.',
              'Download the ZIP only when it is published on this page.',
            ],
          },
          {
            index: '02',
            title: 'Enable Developer Mode',
            body: 'Developer Mode lets you install ZIP channels without publishing them to the store.',
            details: [
              'On the remote, from Home press Home three times, Up twice, then Right, Left, Right, Left, Right.',
              'When the developer screen appears, create a password and write it down.',
              'Enable Developer Mode and accept the device restart.',
              'If the sequence does not work, make sure you are on the Home screen and not inside an app.',
            ],
          },
          {
            index: '03',
            title: 'Install the ZIP from the browser',
            body: 'The Roku web installer uploads the package to the device.',
            details: [
              'Open http://<ROKU_IP> in the computer browser.',
              'Sign in with the username rokudev and the password you created.',
              'Select pollistream-roku.zip, click Upload and install the channel.',
              'Wait for the Roku to show the successful installation message before closing the page.',
            ],
          },
          {
            index: '04',
            title: 'Open the channel',
            body: 'PolliStream will appear at the end of the channel row.',
            details: [
              'Return to the Roku Home screen and look for PolliStream in the channel list.',
              'If it does not appear, restart the device from Settings › System › Restart.',
              'Do not remove Developer Mode until the installation is complete.',
            ],
          },
          {
            index: '05',
            title: 'Connect your account',
            body: 'When the package is available, configure Xtream with the remote.',
            details: [
              'Enter the full server address, your Xtream username and password.',
              'Test the connection and wait for the catalog to load.',
              'Choose a profile and set the parental PIN if needed.',
            ],
          },
        ],
        note: 'Do not download Roku packages from third parties. Installation will be enabled after the build is validated.',
      },
      macos: {
        kicker: 'MACOS · DESKTOP',
        title: 'PolliStream for Mac',
        tagline: 'A macOS desktop version is in preparation.',
        description: 'The Mac installer is not published yet. This page will be updated when a tested build is available.',
        features: [
          { index: '01', tag: 'IN PROGRESS', title: 'macOS build', body: 'The format and requirements will be confirmed alongside the installer.' },
        ],
        requirements: ['Compatible Mac; requirements to be confirmed', 'Version not available yet'],
        install: [
          {
            index: '01',
            title: 'Check your Mac',
            body: 'The macOS installer is not published yet.',
            details: [
              'Check the model and macOS version under the Apple menu › About This Mac.',
              'The final format (DMG or PKG) and requirements will be confirmed with the build.',
              'Do not download Mac installers from third-party sites.',
            ],
          },
          {
            index: '02',
            title: 'Wait for the official installer',
            body: 'The tested file will be published on this page.',
            details: [
              'The download link will appear when the build is signed and verified.',
              'Check the file name and size before opening it.',
              'If the file is not on this page, do not install it.',
            ],
          },
          {
            index: '03',
            title: 'Install the package',
            body: 'The process will follow the usual macOS app flow.',
            details: [
              'Open the DMG and drag PolliStream to the Applications folder.',
              'Eject the disk image after copying the app.',
              'If the installer is a PKG, open it and follow the wizard with your user account.',
            ],
          },
          {
            index: '04',
            title: 'Allow the app to open',
            body: 'Gatekeeper may ask for confirmation the first time.',
            details: [
              'Open System Settings › Privacy & Security.',
              'If a notice about PolliStream appears, click Open Anyway.',
              'You can also right-click the app and choose Open the first time.',
              'Do not disable Gatekeeper permanently.',
            ],
          },
          {
            index: '05',
            title: 'Connect your account',
            body: 'When the build is available, configure Xtream and choose your profile.',
            details: [
              'Enter the full server address, your Xtream username and password.',
              'Test the connection and review the catalog.',
              'Set the parental PIN if needed.',
            ],
          },
        ],
        note: 'Do not download installers from third parties.',
      },
      ios: {
        kicker: 'IPHONE AND IPAD · IOS / IPAD',
        title: 'PolliStream for iPhone and iPad',
        tagline: 'A version for Apple mobile devices is in preparation.',
        description: 'The distribution method for iPhone and iPad has not been decided or published yet.',
        features: [
          { index: '01', tag: 'IN PROGRESS', title: 'iOS and iPad', body: 'The app will be published through a compatible channel when it is ready.' },
        ],
        requirements: ['Compatible iPhone or iPad; requirements to be confirmed', 'Version not available yet'],
        install: [
          {
            index: '01',
            title: 'Wait for the official channel',
            body: 'No app or IPA file is published for iPhone and iPad yet.',
            details: [
              'Do not install IPAs from websites, groups or third-party signing services.',
              'We will announce the valid channel (App Store or TestFlight) once it is defined.',
              'In the meantime, you can use PolliStream on Android, Android TV or Windows.',
            ],
          },
          {
            index: '02',
            title: 'Update the system',
            body: 'The build will require a compatible iOS or iPadOS version.',
            details: [
              'Open Settings › General › Software Update.',
              'Install any available update and restart the device if needed.',
              'The minimum version will be published alongside the official link.',
            ],
          },
          {
            index: '03',
            title: 'Install from the official channel',
            body: 'Installation will happen through the App Store or TestFlight.',
            details: [
              'Open the official link from this page in Safari.',
              'For TestFlight, accept the invitation and tap Install.',
              'For the App Store, tap Get or the download icon and confirm with Face ID or Touch ID.',
              'Wait for the app to appear on the Home screen.',
            ],
          },
          {
            index: '04',
            title: 'Connect your account',
            body: 'When available, configure Xtream and choose your profile.',
            details: [
              'Open PolliStream and accept the permissions it requests.',
              'Enter the full server address, your Xtream username and password.',
              'Test the connection and set the parental PIN if needed.',
            ],
          },
        ],
        note: 'Do not install IPA files from unverified sources.',
      },
    },
  },
  legal: {
    hubTitle: 'Legal',
    hubBody: 'Privacy, terms and cookies for the PolliStream website.',
    backHome: 'Back to home',
    privacy: {
      title: 'Privacy policy',
      description: 'What data PolliStream processes when you visit the site or download the app.',
      updated: 'Last reviewed: November 2026',
      intro:
        'This policy explains what data PolliStream processes when you visit this site and download the app. The app itself does not send your credentials to PolliStream.',
      sections: [
        {
          title: 'Who is responsible',
          body: [
            'PolliStream is an independent software development project. For any privacy question, use the contact channel published in the footer.',
          ],
        },
        {
          title: 'What data we process',
          body: [
            'This site is static and has no user accounts. We may process technical visit data (IP address, user agent and requested page) through Cloudflare, aggregated cookieless metrics if Cloudflare Web Analytics is enabled, and advertising data only if you accept advertising cookies.',
          ],
        },
        {
          title: 'Downloads and partner links',
          body: [
            'When you click a download, the site may redirect you to a download partner (CPA) or an external host. That partner applies its own policy. We do not receive your Xtream password or the content you watch.',
          ],
        },
        {
          title: 'The app',
          body: [
            'The app stores its configuration and credentials in the device local storage. There is no PolliStream backend receiving that data. Your Xtream provider receives the connection directly from your device.',
          ],
        },
        {
          title: 'Legal basis',
          body: [
            'Consent for advertising cookies and communications; legitimate interest for security and aggregated metrics; performance of the service to deliver the download.',
          ],
        },
        {
          title: 'Retention',
          body: [
            'Cloudflare technical logs are retained according to its configuration. Cookie preferences stay in your browser until you delete them.',
          ],
        },
        {
          title: 'Your rights',
          body: [
            'You may request access, rectification, erasure, objection, restriction and portability, and withdraw consent. You may also complain to your data protection authority.',
          ],
        },
        {
          title: 'Changes',
          body: ['We may update this policy. We will publish the last reviewed date.'],
        },
      ],
    },
    terms: {
      title: 'Terms of use',
      description: 'Terms for the PolliStream website and installers.',
      updated: 'Last reviewed: November 2026',
      intro:
        'By using this site and downloading PolliStream you accept these terms. If you do not agree, do not use the site or the installers.',
      sections: [
        {
          title: 'Purpose',
          body: [
            'PolliStream is an IPTV player. It does not sell, host, distribute or recommend audiovisual content. The site only distributes the software and explains how to install it.',
          ],
        },
        {
          title: 'Permitted use',
          body: [
            'You must use PolliStream only with providers and content you are entitled to access. You may not use the app to redistribute content, bypass protection measures or access services without authorization.',
          ],
        },
        {
          title: 'Downloads',
          body: [
            'Installers are offered free of charge and as is. We may change, withdraw or update builds without notice. We do not guarantee that a specific version works on every model or system version.',
          ],
        },
        {
          title: 'Intellectual property',
          body: [
            'The PolliStream name, logo and code belong to their authors. Channels, movies, series and third-party marks belong to their owners. PolliStream claims no rights over that content.',
          ],
        },
        {
          title: 'Third-party links',
          body: [
            'The site may include affiliate links, ads or links to download hosts. We do not control those sites and are not responsible for their content or practices.',
          ],
        },
        {
          title: 'Limitation of liability',
          body: [
            'To the extent permitted by law, PolliStream is not liable for damages arising from the use of the app, the unavailability of the site or your provider actions. Nothing in these terms limits your statutory consumer rights.',
          ],
        },
        {
          title: 'Governing law',
          body: [
            'The law applicable to the site owner applies. If you are a consumer, you keep the protection of the rules of your country of residence.',
          ],
        },
        {
          title: 'Contact',
          body: ['For questions about these terms, use the contact channel published in the footer.'],
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      description: 'How PolliStream uses cookies and how to change your preferences.',
      updated: 'Last reviewed: November 2026',
      intro:
        'We use the minimum required for the site to work. Ads and their cookies only load if you give consent.',
      sections: [
        {
          title: 'What they are',
          body: [
            'Cookies and local storage are small pieces of data a browser keeps to remember preferences or measure how a site is used.',
          ],
        },
        {
          title: 'Essential storage',
          body: [
            'We store your cookie choice in browser local storage so we do not ask on every visit. It is not used to identify you or for advertising.',
          ],
        },
        {
          title: 'Advertising',
          body: [
            'If you accept, we may load ads from networks such as Google AdSense or Adsterra. Those networks may use cookies or identifiers to measure and personalize ads. Without consent, ads do not load.',
          ],
        },
        {
          title: 'Analytics',
          body: [
            'We may use Cloudflare Web Analytics or Plausible, which provide aggregated cookieless measurement. They do not create an advertising profile of you.',
          ],
        },
        {
          title: 'Affiliates',
          body: [
            'Affiliate links may include partner tracking parameters to attribute the visit. They are marked as affiliate links on the page.',
          ],
        },
        {
          title: 'Managing your preferences',
          body: [
            'You can accept or reject ads from the cookie notice. You can also clear local storage and cookies in your browser settings.',
          ],
        },
        {
          title: 'Changes',
          body: ['If we change providers or purposes, we will update this page and ask for consent again where required.'],
        },
      ],
    },
  },
  notFound: {
    title: 'Signal lost',
    body: 'This page does not exist or changed frequency. Go back home and choose your screen.',
    cta: 'Back to home',
  },
}
