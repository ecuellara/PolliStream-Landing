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
      { value: '5', label: 'platforms' },
      { value: '1', label: 'Xtream list' },
      { value: '0', label: 'sign-ups' },
      { value: 'A/V', label: 'audio & subtitles' },
    ],
    demoLabel: 'INTERFACE PREVIEW · SAMPLE DATA',
    selectLabel: 'Tune your screen',
    deviceLabels: {
      lg: 'webOS 4+',
      samsung: 'Tizen',
      android: 'Android',
      'android-tv': 'Android TV',
      windows: 'Windows',
    },
    microcopy: 'Free. No PolliStream subscription. No sign-up.',
  },
  platforms: {
    kicker: 'TUNE YOUR SCREEN',
    title: 'One app. Five ways to watch.',
    body: 'Pick the device you already own. We take you to the right installer and the right install steps, with no guessing.',
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
        body: 'LG, Samsung, Android, Android TV or Windows. Each build has its own installer and guide.',
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
  },
  support: {
    kicker: 'KEEP THE SIGNAL ON',
    title: 'Free for you. Sustainable for the project.',
    body: 'We do not charge for the app or the installer. Ads, downloads and voluntary support cover hosting and development time.',
    donate: 'Support the project',
    share: 'Share PolliStream',
    copied: 'Link copied',
    fallback: 'You can also help by sharing PolliStream with someone who uses the same provider.',
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
    madeFor: 'LG webOS · Samsung Tizen · Android · Android TV · Windows',
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
          { index: '01', title: 'Prepare the TV', body: 'Enable Developer Mode on your LG and connect the TV to the same network as your computer.' },
          { index: '02', title: 'Install the IPK', body: 'Download the full package and install it with ares-install or from the developer menu.' },
          { index: '03', title: 'Connect your account', body: 'Open PolliStream, enter your Xtream server, username and password, and pick your profile.' },
        ],
        note: 'The IPK includes the app and the local track service. Install the full package so the audio menu works.',
      },
      samsung: {
        kicker: 'SAMSUNG TIZEN · SMART TV',
        title: 'PolliStream for Samsung',
        tagline: 'Your Xtream list on a Samsung TV, with remote navigation.',
        description:
          'An interface adapted to Tizen and the Samsung remote. The installer is published according to the app distribution method.',
        features: [
          { index: '01', tag: 'REMOTE', title: 'Remote navigation', body: 'Catalog rows and clear focus so you can move without a mouse.' },
          { index: '02', tag: 'CATALOG', title: 'Everything in order', body: 'Live TV, movies and series with the same order as on your other screens.' },
          { index: '03', tag: 'HOME', title: 'Profiles', body: 'Everyone in the house keeps their own history and list.' },
          { index: '04', tag: 'CONTROL', title: 'Parental control', body: 'Four-digit PIN for adult content.' },
        ],
        requirements: [
          'Samsung TV compatible with the app',
          'Stable internet connection',
          'Active Xtream account',
          'Install method shown in the guide',
        ],
        install: [
          { index: '01', title: 'Check your model', body: 'Check the model and Tizen version in the TV settings.' },
          { index: '02', title: 'Install the package', body: 'Download the WGT/TPK when it is published and install it with your model flow.' },
          { index: '03', title: 'Connect your account', body: 'Open the app and connect your Xtream account. Pick a profile and start watching.' },
        ],
        note: 'Availability depends on the model and the distribution method enabled for the app.',
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
          { index: '01', title: 'Download the APK', body: 'Tap Download and save the file on your device.' },
          { index: '02', title: 'Allow the install', body: 'Open the file and accept the install from that source when Android asks.' },
          { index: '03', title: 'Connect your account', body: 'Open PolliStream and enter your Xtream details.' },
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
          { index: '01', title: 'Allow sideloading', body: 'Enable installs from unknown sources on your Android TV or Fire TV.' },
          { index: '02', title: 'Install the APK', body: 'Download the APK from this page and open it with a file installer.' },
          { index: '03', title: 'Connect your account', body: 'Open PolliStream with the remote and connect your Xtream account.' },
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
          { index: '01', title: 'Download the installer', body: 'Tap Download and save the .exe file.' },
          { index: '02', title: 'Run the wizard', body: 'Open the installer and follow the steps. If Windows SmartScreen warns, check the file signature.' },
          { index: '03', title: 'Connect your account', body: 'Open PolliStream and connect your Xtream account.' },
        ],
        note: 'Download only from this page or from the official project channel.',
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
