import type { Content } from './types'

export const pt: Content = {
  meta: {
    title: 'PolliStream — Sua IPTV na LG, Samsung, Android TV e Windows',
    description:
      'Player IPTV para Smart TV, Android e Windows. Conecte sua lista Xtream, organize ao vivo, filmes e séries e aproveite com áudio e legendas. Baixe grátis.',
    ogAlt: 'PolliStream, sua lista Xtream em todas as telas',
  },
  common: {
    download: 'Baixar',
    downloadFree: 'Baixar grátis',
    viewPlatforms: 'Ver plataformas',
    chooseScreen: 'Escolher minha tela',
    comingSoon: 'Em breve',
    available: 'Disponível',
    version: 'Versão',
    size: 'Tamanho',
    format: 'Formato',
    updated: 'Atualizado',
    requirements: 'Requisitos',
    install: 'Instalação',
    otherScreens: 'Outras telas',
    back: 'Voltar',
    open: 'Abrir',
    close: 'Fechar',
    menu: 'Menu',
    language: 'Idioma',
    readMore: 'Ler mais',
    adLabel: 'Publicidade',
    sponsor: 'Espaço para patrocinador',
    sponsorCta: 'Sua marca aqui',
    adsOff: 'Anúncios desativados',
    adsOffBody: 'Ative os anúncios para ajudar a manter os downloads gratuitos.',
    activateAds: 'Ativar anúncios',
    consentTitle: 'Cookies e anúncios',
    consentBody:
      'Usamos cookies de publicidade apenas se você aceitar. A medição é agregada e não identifica você. Você pode mudar de ideia quando quiser.',
    consentAccept: 'Aceitar anúncios',
    consentEssential: 'Somente essenciais',
    consentLink: 'Política de cookies',
    external: 'abre em uma nova aba',
    share: 'Compartilhar',
    copied: 'Link copiado',
    notFoundTitle: 'Sinal perdido',
    notFoundBody: 'Esta página não existe ou mudou de frequência.',
    goHome: 'Voltar ao início',
    skip: 'Pular para o conteúdo',
    breadcrumb: 'Trilha de navegação',
  },
  nav: {
    platforms: 'Plataformas',
    features: 'Recursos',
    install: 'Instalação',
    faq: 'Perguntas',
    support: 'Apoiar',
    download: 'Baixar',
  },
  device: {
    live: 'AO VIVO',
    now: 'AGORA',
    signal: 'SINAL DO SEU PROVEDOR',
    channel: 'CANAL 01',
    titleLine1: 'Seu canal',
    titleLine2: 'ao vivo.',
    sample: 'CONTEÚDO DA SUA LISTA XTREAM · EXEMPLO',
    guide: 'GUIA',
    guideItems: ['Filmes', 'Séries', 'Esportes', 'Infantil'],
    audio: 'ÁUDIO PT',
    subtitles: 'LEGENDAS PT',
    quality: '1080p',
  },
  hero: {
    eyebrow: 'PLAYER IPTV · XTREAM · MULTIPLATAFORMA',
    titleA: 'Toda a sua IPTV.',
    titleB: 'Na tela que você escolher.',
    description:
      'O PolliStream conecta sua lista Xtream e organiza ao vivo, filmes e séries em uma interface feita para o sofá. Sem conta PolliStream. Sem intermediários.',
    primary: 'Baixar grátis',
    secondary: 'Ver recursos',
    stats: [
      { value: '9', label: 'plataformas' },
      { value: '1', label: 'lista Xtream' },
      { value: '0', label: 'cadastros' },
      { value: 'A/V', label: 'áudio e legendas' },
    ],
    demoLabel: 'PRÉVIA DA INTERFACE · DADOS DE EXEMPLO',
    selectLabel: 'Sintonize sua tela',
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
    microcopy: 'Grátis. Sem assinatura PolliStream. Sem cadastro.',
  },
  platforms: {
    kicker: 'SINTONIZE SUA TELA',
    title: 'Um app. Nove plataformas.',
    body: 'Escolha seu dispositivo. Consulte o guia de instalação e baixe somente os pacotes que já foram publicados.',
    cta: 'Ver download',
    live: 'Disponível',
    soon: 'Em breve',
    all: 'Ver todas as plataformas',
  },
  features: {
    kicker: 'O QUE ELE FAZ',
    title: 'Menos busca. Mais tela.',
    body: 'Cada tela foi pensada para o controle remoto, não para um cursor. O catálogo vem do seu provedor; a experiência fica com o PolliStream.',
    items: [
      {
        index: '01',
        tag: 'AO VIVO',
        title: 'Ao vivo, sem rodeios',
        body: 'Categorias, busca e zapping. Troque entre dois canais com a troca rápida A/B sem perder o fio do que estava vendo.',
      },
      {
        index: '02',
        tag: 'CATÁLOGO',
        title: 'Filmes e séries organizados',
        body: 'Capas, sinopses, temporadas e episódios em fileiras horizontais. Continue de onde parou com Continuar assistindo.',
      },
      {
        index: '03',
        tag: 'A/V',
        title: 'Áudio e legendas',
        body: 'Troque a faixa de áudio e as legendas quando o arquivo inclui. Na LG, um serviço local extrai as faixas embutidas do MKV/MP4 sem depender de CORS.',
      },
      {
        index: '04',
        tag: 'CASA',
        title: 'Perfis da casa',
        body: 'Até três perfis normais e um infantil. Cada um com seu histórico e sua lista, para ninguém precisar procurar seu lugar.',
      },
      {
        index: '05',
        tag: 'CONTROLE',
        title: 'Controle dos pais',
        body: 'Bloqueie o conteúdo +18 com um PIN de quatro dígitos. Configurado pelo controle remoto, sem apps extras nem contas adicionais.',
      },
      {
        index: '06',
        tag: 'PRIVACIDADE',
        title: 'Sua conta, suas regras',
        body: 'Salve várias contas Xtream e alterne entre elas. As credenciais ficam no seu dispositivo; não passam pelos servidores do PolliStream.',
      },
    ],
  },
  signal: {
    kicker: 'SEM INTERMEDIÁRIOS',
    title: 'Seu provedor fala direto com sua tela.',
    body: 'O PolliStream não vende conteúdo nem hospeda listas. É o player: você coloca a conta Xtream que já paga e o app faz o resto.',
    nodes: [
      { index: '01', title: 'Seu provedor', body: 'A lista Xtream que você já tem, com seus canais e seu catálogo.' },
      { index: '02', title: 'PolliStream', body: 'Organiza o sinal e reproduz no seu dispositivo, com controle remoto ou teclado.' },
      { index: '03', title: 'Sua tela', body: 'TV, celular ou PC. A mesma lista, o mesmo histórico, seu perfil.' },
    ],
    note: 'As credenciais ficam no armazenamento local do dispositivo. Não há backend do PolliStream recebendo esses dados.',
    cta: 'Ver como instalar',
  },
  install: {
    kicker: 'DO ZERO AO SINTONIZADO',
    title: 'Três passos. Nenhuma conta nova.',
    body: 'Não pedimos e-mail, cartão nem cadastro. Escolha sua tela, instale o pacote e conecte a conta que você já usa.',
    steps: [
      {
        index: '01',
        title: 'Escolha sua tela',
        body:                 'LG, Samsung Tizen 3.0, Samsung moderno, Android, Android TV, Windows, Roku, macOS, iPhone ou iPad. Cada plataforma tem seu guia e status de disponibilidade.',
      },
      {
        index: '02',
        title: 'Baixe e instale',
        body: 'Siga o método da sua plataforma. No Android, permita a instalação do APK; na TV, use o fluxo de desenvolvedor quando necessário.',
      },
      {
        index: '03',
        title: 'Conecte seu Xtream',
        body: 'Informe servidor, usuário e senha. Escolha um perfil e comece a assistir. Você pode salvar mais de uma conta.',
      },
    ],
    note: 'Se um passo não combinar com seu modelo, veja a página da sua plataforma ou o canal de suporte do projeto.',
  },
  download: {
    kicker: 'DOWNLOAD',
    title: 'Preparando seu download',
    description: 'Você está a um passo de instalar o PolliStream em {platform}.',
    preparing: 'Preparando o link',
    ready: 'Seu download está pronto',
    countdown: 'O link estará pronto em',
    button: 'Baixar {format}',
    lockerButton: 'Continuar para o download',
    soonTitle: 'Ainda não há instalador publicado',
    soonBody:
      'Estamos preparando o build para {platform}. Volte em breve ou veja as outras telas enquanto isso.',
    back: 'Voltar para {platform}',
    securityTitle: 'Antes de instalar',
    security: [
      'Baixe somente desta página ou do link oficial que publicamos.',
      'Confira o nome e o tamanho do arquivo antes de abrir.',
      'No Android, instale somente se aceitar a origem do APK. Na TV, use o fluxo de desenvolvedor quando necessário.',
    ],
    partnerNote:
      'Este link pode passar por uma oferta do nosso parceiro de downloads. O download continua gratuito.',
    adNote: 'Os anúncios ajudam a manter os downloads gratuitos.',
    file: 'Arquivo',
    version: 'Versão',
    size: 'Tamanho',
    format: 'Formato',
    checksum: 'SHA-256',
    whatsNext: 'Depois de baixar',
    whatsNextBody:
      'Abra o instalador e siga o guia da sua plataforma. Se sua TV pedir um passo de desenvolvedor, a página do produto explica.',
    openInstaller: 'Abrir instalador',
    tutorialKicker: 'GUIA DE INSTALAÇÃO',
    tutorialTitle: 'Instale o PolliStream no {platform}',
    tutorialBody: 'Siga estes passos para instalar o pacote e configurar sua conta.',
    tutorialPrep: 'Antes de começar',
    tutorialPrepBody: 'Confira se o seu dispositivo cumpre estes requisitos para evitar erros no meio da instalação.',
    tutorialStep: 'ETAPA',
    tutorialImage: 'Ilustração da etapa {step} da instalação',
    tutorialVideo: 'Tutorial em vídeo',
    tutorialVideoSoon: 'O vídeo de instalação para esta plataforma estará disponível em breve.',
    pairingScript: 'Baixar ferramenta para vincular a TV',
  },
  support: {
    kicker: 'MANTER O SINAL',
    title: 'Grátis para você. Sustentável para o projeto.',
    body: 'Não cobramos pelo app nem pelo instalador. Os anúncios, os downloads e os apoios cobrem a hospedagem e as horas de desenvolvimento.',
    donate: 'Apoiar o projeto',
    share: 'Compartilhar PolliStream',
    copied: 'Link copiado',
    fallback: 'Você também pode ajudar compartilhando o PolliStream com alguém que use o mesmo provedor.',
  },
  affiliate: {
    kicker: 'AINDA NÃO TEM PROVEDOR?',
    title: 'Um provedor legal para sua lista.',
    body: 'O PolliStream não vende assinaturas. Se você precisa de um provedor, estes são parceiros que conhecemos; o link está marcado como afiliado.',
    cta: 'Ver opções',
    disclosure: 'Link de afiliado. Se você assinar, podemos receber uma comissão sem custo extra para você.',
  },
  faq: {
    kicker: 'PERGUNTAS FREQUENTES',
    title: 'O que as pessoas costumam perguntar.',
    items: [
      {
        question: 'O PolliStream inclui canais ou filmes?',
        answer:
          'Não. O PolliStream é um player. Você precisa de uma conta Xtream de um provedor com os direitos do conteúdo que quer assistir. Não hospedamos nem distribuímos conteúdo.',
      },
      {
        question: 'Preciso criar uma conta no PolliStream?',
        answer:
          'Não. O app se conecta diretamente ao seu provedor. Não há cadastro, e-mail nem cartão. Apenas o servidor, o usuário e a senha da sua lista Xtream.',
      },
      {
        question: 'Onde ficam minhas credenciais?',
        answer:
          'No armazenamento local do seu dispositivo. Elas não passam pelos servidores do PolliStream. A conexão vai do seu dispositivo ao seu provedor.',
      },
      {
        question: 'Por que alguns instaladores demoram mais?',
        answer:
          'Cada plataforma tem seu próprio empacotamento, assinatura e testes. Publicamos cada build quando está testado. Se ainda não aparece, é porque não está pronto; não colocamos links de preenchimento.',
      },
      {
        question: 'O download é grátis?',
        answer:
          'Sim. O instalador é gratuito. O site é mantido com anúncios, ofertas de download e apoios voluntários. Os anúncios só carregam se você aceitar os cookies de publicidade.',
      },
      {
        question: 'Funciona com listas M3U?',
        answer:
          'A conexão principal é Xtream Codes. Não prometemos M3U até que esteja publicado e testado no app. Se seu provedor só oferece M3U, confirme antes de instalar.',
      },
      {
        question: 'É legal usar o PolliStream?',
        answer:
          'Depende do seu provedor. Use o PolliStream apenas com serviços que você tem direito de acessar. Você é responsável pela conta e pelo conteúdo que reproduz.',
      },
    ],
  },
  footer: {
    tagline: 'O player que coloca sua lista na tela.',
    product: 'Produto',
    platforms: 'Plataformas',
    support: 'Suporte',
    legal: 'Legal',
    allPlatforms: 'Todas as plataformas',
    privacy: 'Privacidade',
    terms: 'Termos',
    cookies: 'Cookies',
    contact: 'Contato',
    disclaimer:
      'O PolliStream não vende, hospeda nem distribui conteúdo. É um player para o provedor que você escolher.',
    copyright: '© {year} PolliStream. Feito para o sofá.',
    madeFor: 'LG webOS · Samsung Tizen 3.0 e moderno · Android · Android TV · Windows · Roku · macOS · iPhone · iPad',
    status: 'SINAL ABERTO',
  },
  product: {
    breadcrumb: 'Plataformas',
    sectionKicker: 'A FICHA TÉCNICA',
    sectionTitle: 'O que você precisa para sintonizar.',
    about: 'Sobre esta versão',
    specs: 'Especificações',
    requirements: 'Requisitos',
    install: 'Como instalar',
    other: 'Outras telas',
    related: 'Também pode servir',
    items: {
      lg: {
        kicker: 'LG WEBOS · SMART TV',
        title: 'PolliStream para LG',
        tagline: 'O app completo para sua LG, com faixas de áudio e legendas.',
        description:
          'Pensado para webOS 4.x e superior. Inclui o serviço local que lista as faixas embutidas do MKV/MP4 e extrai legendas sem depender de CORS.',
        features: [
          { index: '01', tag: 'CONTROLE', title: 'Controle em primeiro lugar', body: 'Navegação com foco visível, pensada para ser vista do sofá e não de um monitor.' },
          { index: '02', tag: 'A/V', title: 'Faixas embutidas', body: 'O pacote inclui o serviço local de ffmpeg que lista áudio e legendas do arquivo.' },
          { index: '03', tag: 'CASA', title: 'Perfis e PIN', body: 'Três perfis normais, um infantil e controle dos pais com PIN de quatro dígitos.' },
          { index: '04', tag: 'HISTÓRICO', title: 'Continuar assistindo', body: 'Retome o episódio de onde parou, com marcas de intro por série.' },
        ],
        requirements: [
          'LG webOS 4.0 ou superior',
          'Conexão de internet estável',
          'Conta Xtream ativa',
          'Modo desenvolvedor para instalar o IPK',
        ],
        install: [
          {
            index: '01',
            title: 'Confira os requisitos e a rede',
            body: 'Deixe a TV e o computador na mesma rede antes de começar.',
            details: [
              'Abra Configurações › Geral › Informações da TV e confirme webOS 4.0 ou superior.',
              'Conecte a TV por cabo ou Wi-Fi estável; evite redes de convidados que isolam dispositivos.',
              'Tenha em mãos o servidor, o usuário e a senha da sua conta Xtream.',
              'Instale Node.js 18 ou superior no computador que vai usar a CLI do webOS.',
            ],
          },
          {
            index: '02',
            title: 'Ative o Modo desenvolvedor na TV',
            body: 'O app Developer Mode abre uma sessão temporária de instalação na TV.',
            details: [
              'Procure Developer Mode na LG Content Store e instale o app.',
              'Entre com uma conta LG Developer gratuita.',
              'Ative Dev Mode Status e Key Server, e aceite a reinicialização da TV.',
              'Anote o nome do dispositivo e a senha de seis caracteres mostrada pelo app.',
              'A sessão expira após 1000 horas: renove o Modo desenvolvedor antes de atualizar o PolliStream.',
            ],
          },
          {
            index: '03',
            title: 'Conecte a CLI à TV',
            body: 'Instale a webOS CLI no computador e registre a TV por SSH.',
            details: [
              'No ares-setup-device escolha add device e use o IP da TV.',
              'Informe a porta 9922 e as credenciais que apareceram no Developer Mode.',
              'Se a conexão falhar, confira se a TV e o PC estão na mesma rede e se a porta 9922 não está bloqueada.',
            ],
            commands: [
              'npm install -g @webos-tools/cli',
              'ares-setup-device',
              'ares-setup-device --list',
            ],
          },
          {
            index: '04',
            title: 'Instale o IPK completo',
            body: 'Envie o pacote e abra-o pela barra inicial da TV.',
            details: [
              'Baixe pollistream-lg.ipk desta página e não renomeie o arquivo.',
              'Instale sempre o pacote completo: ele inclui o app e o serviço local de faixas de áudio e legendas.',
              'Se o ares-install pedir confirmação, aceite; a TV pode mostrar um aviso rápido.',
              'Ao terminar, procure o PolliStream na barra inicial do webOS.',
            ],
            commands: ['ares-install --device tv pollistream-lg.ipk'],
          },
          {
            index: '05',
            title: 'Conecte sua conta e teste',
            body: 'Configure o Xtream e confira reprodução, áudio e legendas.',
            details: [
              'Abra o PolliStream e aceite as permissões de rede local se aparecerem.',
              'Informe o servidor com http:// ou https://, o usuário e a senha do Xtream.',
              'Use Testar conexão e aguarde o catálogo carregar.',
              'Crie ou selecione um perfil e configure o PIN dos pais se precisar.',
              'Reproduza um canal ao vivo e um filme para confirmar áudio e legendas.',
            ],
          },
        ],
        note: 'O IPK inclui o app e o serviço local de faixas. Instale o pacote completo para que o menu de áudio funcione.',
      },
      samsung: {
        kicker: 'SAMSUNG TIZEN 3.0 · LEGACY',
        title: 'PolliStream para Samsung Legacy',
        tagline: 'A versão para TVs Samsung com Tizen 3.0.',
        description:
          'Este instalador é a versão Legacy para Tizen 3.0. Não instale em TVs Samsung modernas; elas terão um pacote separado.',
        features: [
          { index: '01', tag: 'CONTROLE', title: 'Navegação pelo controle', body: 'Fileiras de catálogo e foco claro para você se mover sem mouse.' },
          { index: '02', tag: 'CATÁLOGO', title: 'Tudo organizado', body: 'Ao vivo, filmes e séries com a mesma ordem das outras telas.' },
          { index: '03', tag: 'CASA', title: 'Perfis', body: 'Cada pessoa da casa mantém seu histórico e sua lista.' },
          { index: '04', tag: 'CONTROLE', title: 'Controle dos pais', body: 'PIN de quatro dígitos para o conteúdo +18.' },
        ],
        requirements: [
          'TV Samsung compatível com Tizen 3.0',
          'Conexão de internet estável',
          'Conta Xtream ativa',
          'Modo de desenvolvedor e ferramenta de instalação Tizen',
        ],
        install: [
          {
            index: '01',
            title: 'Confirme o modelo e a versão',
            body: 'Este pacote é exclusivo para TVs Samsung com Tizen 3.0.',
            details: [
              'Abra Configurações › Suporte › Sobre esta TV e confira o modelo e a versão do sistema.',
              'Se a TV usa Tizen 6.5 ou superior, use a página do Samsung moderno em vez deste pacote.',
              'Verifique se a TV e o computador estão na mesma rede.',
              'Tenha em mãos o servidor, o usuário e a senha da sua conta Xtream.',
            ],
          },
          {
            index: '02',
            title: 'Prepare o Tizen Studio',
            body: 'Você precisa das ferramentas de desenvolvimento Tizen e de um certificado de autor.',
            details: [
              'Baixe o Tizen Studio em developer.samsung.com e instale o SDK com as ferramentas CLI.',
              'Abra o Certificate Manager e crie um certificado de autor (Author) para o seu computador.',
              'Aceite a chave pública do certificado; ela será usada ao assinar ou reinstalar o WGT.',
              'Instale o driver da TV se o Tizen Studio solicitar.',
            ],
          },
          {
            index: '03',
            title: 'Ative o Modo de desenvolvedor',
            body: 'A TV precisa aceitar conexões do computador que executa o Tizen Studio.',
            details: [
              'Abra a seção Apps da TV e pressione 1, 2, 3, 4, 5 no controle.',
              'Escolha Developer mode, informe o IP do computador e reinicie a TV.',
              'Reconecte a TV e o PC à mesma rede; a porta de desenvolvimento é 26101.',
              'No Device Manager adicione a TV pelo IP e confirme que ela aparece conectada.',
            ],
          },
          {
            index: '04',
            title: 'Instale o WGT Legacy',
            body: 'Envie o pacote compatível com Tizen 3.0 pela linha de comando.',
            details: [
              'Baixe pollistream-samsung.wgt desta página e não renomeie o arquivo.',
              'Use este WGT somente em TVs Tizen 3.0 Legacy; não o instale em modelos modernos.',
              'Se a instalação falhar por certificado, assine o pacote novamente no Tizen Studio e reenvie.',
              'Ao terminar, o ícone do PolliStream aparece na fileira de apps da TV.',
            ],
            commands: [
              'sdb connect <IP_DA_TV>:26101',
              'tizen install -n pollistream-samsung.wgt -t <IP_DA_TV>:26101',
            ],
          },
          {
            index: '05',
            title: 'Abra o PolliStream e conecte sua conta',
            body: 'Configure o Xtream e navegue pelo catálogo com o controle.',
            details: [
              'Abra o PolliStream pela fileira de apps da TV.',
              'Informe o endereço completo do servidor, o usuário e a senha do Xtream.',
              'Teste a conexão e aguarde o carregamento de ao vivo, filmes e séries.',
              'Escolha um perfil e ative o PIN dos pais se houver crianças em casa.',
            ],
          },
        ],
        note: 'Não use este pacote em TVs Samsung modernas. A versão delas será publicada separadamente.',
      },
      'samsung-modern': {
        kicker: 'SAMSUNG TIZEN MODERNO · 6.5+',
        title: 'PolliStream para Samsung moderno',
        tagline: 'Um pacote separado para TVs Tizen modernas.',
        description:
          'A versão moderna ainda não foi publicada. O instalador e as instruções específicas aparecerão aqui após os testes.',
        features: [
          { index: '01', tag: 'EM PREPARAÇÃO', title: 'Build moderno', body: 'O WGT para Tizen moderno será publicado após validar a compatibilidade.' },
          { index: '02', tag: 'GUIA', title: 'Instruções específicas', body: 'O guia diferenciará esta versão do pacote Legacy para Tizen 3.0.' },
        ],
        requirements: ['TV Samsung compatível com Tizen 6.5 ou superior', 'Build moderno ainda indisponível'],
        install: [
          {
            index: '01',
            title: 'Confira sua versão do Tizen',
            body: 'Este pacote será exclusivo para TVs Samsung com Tizen 6.5 ou superior.',
            details: [
              'Abra Configurações › Suporte › Sobre esta TV e anote a versão do sistema.',
              'Se a TV usa Tizen 3.0, baixe o pacote Legacy na página correspondente.',
              'Não instale o WGT Legacy em uma TV moderna: o app pode não abrir.',
            ],
          },
          {
            index: '02',
            title: 'Aguarde o WGT moderno testado',
            body: 'O instalador moderno ainda não foi publicado.',
            details: [
              'O pacote aparecerá nesta página quando a validação de compatibilidade terminar.',
              'Não use WGT de terceiros nem versões antigas para forçar a instalação.',
              'Quando for publicado, confira o nome e o tamanho do arquivo antes de instalar.',
            ],
          },
          {
            index: '03',
            title: 'Instale com o Tizen Studio',
            body: 'O método seguirá o mesmo fluxo de desenvolvimento do Tizen moderno.',
            details: [
              'Ative o Modo de desenvolvedor com o IP do PC e reinicie a TV.',
              'Conecte por sdb à porta 26101 e confirme o dispositivo no Device Manager.',
              'Envie o WGT com o certificado de autor e aguarde o app aparecer na TV.',
            ],
            commands: [
              'sdb connect <IP_DA_TV>:26101',
              'tizen install -n pollistream-samsung-modern.wgt -t <IP_DA_TV>:26101',
            ],
          },
          {
            index: '04',
            title: 'Conecte sua conta',
            body: 'Quando o pacote estiver disponível, configure o Xtream e escolha seu perfil.',
            details: [
              'Informe o servidor, o usuário e a senha da sua conta Xtream.',
              'Teste a conexão e revise ao vivo, filmes e séries.',
              'Configure o PIN dos pais se precisar.',
            ],
          },
        ],
        note: 'Não instale aqui o WGT Legacy do Tizen 3.0.',
      },
      android: {
        kicker: 'ANDROID · CELULAR E TABLET',
        title: 'PolliStream para Android',
        tagline: 'Seu provedor no bolso, com a mesma lista e os mesmos perfis.',
        description:
          'APK para celulares e tablets Android. A interface touch mantém o catálogo, o histórico e o controle dos pais.',
        features: [
          { index: '01', tag: 'TOUCH', title: 'Feito para o dedo', body: 'Listas, busca e player com controles claros na tela.' },
          { index: '02', tag: 'SINCRONIA', title: 'A mesma lista', body: 'Sua conta Xtream e seus perfis, sem criar uma conta nova.' },
          { index: '03', tag: 'HISTÓRICO', title: 'Continue de onde parou', body: 'Continuar assistindo e favoritos que acompanham seu jeito de ver.' },
          { index: '04', tag: 'CONTROLE', title: 'Controle dos pais', body: 'Bloqueie o conteúdo +18 com um PIN de quatro dígitos.' },
        ],
        requirements: [
          'Android compatível com o APK',
          'Conexão de internet estável',
          'Conta Xtream ativa',
          'Permissão para instalar apps de origem desconhecida',
        ],
        install: [
          {
            index: '01',
            title: 'Baixe o APK',
            body: 'Salve o arquivo oficial no celular ou tablet.',
            details: [
              'Toque em Baixar e aguarde o fim do download; o arquivo se chama pollistream-android.apk.',
              'Se o navegador avisar sobre um arquivo potencialmente perigoso, continue apenas se o download veio desta página.',
              'Confira se o tamanho na ficha de download corresponde ao arquivo salvo.',
              'Não use APKs de espelhos, grupos ou sites de terceiros.',
            ],
          },
          {
            index: '02',
            title: 'Permita instalar apps desconhecidos',
            body: 'O Android bloqueia por padrão APKs que não vêm da Play Store.',
            details: [
              'Abra Configurações › Apps › Acesso especial › Instalar apps desconhecidos.',
              'Escolha o navegador ou o gerenciador de arquivos que abrirá o APK.',
              'Ative Permitir desta fonte.',
              'No Android 7 ou anterior, use Configurações › Segurança › Origens desconhecidas.',
            ],
          },
          {
            index: '03',
            title: 'Instale o APK',
            body: 'Abra o download e confirme a instalação.',
            details: [
              'Toque na notificação de download ou abra Downloads e selecione pollistream-android.apk.',
              'Toque em Instalar e aguarde a análise do Play Protect.',
              'Se aparecer um aviso, escolha Instalar mesmo assim apenas quando o arquivo veio desta página.',
              'Não feche a tela nem bloqueie o celular durante a instalação.',
            ],
          },
          {
            index: '04',
            title: 'Abra o PolliStream e conecte sua conta',
            body: 'Configure seu provedor Xtream e escolha um perfil.',
            details: [
              'Abra o PolliStream na gaveta de apps e aceite as permissões solicitadas.',
              'Informe o servidor completo com http:// ou https://, o usuário e a senha do Xtream.',
              'Toque em Testar conexão e aguarde o catálogo carregar.',
              'Escolha um perfil e ative o PIN dos pais se precisar.',
            ],
          },
          {
            index: '05',
            title: 'Atualize sem perder seus dados',
            body: 'As versões novas são instaladas sobre a anterior.',
            details: [
              'Baixe o APK atualizado desta página.',
              'Abra e instale sem desinstalar o PolliStream primeiro.',
              'Perfis, favoritos e histórico são preservados na atualização.',
              'Se o Android recusar a atualização, confira se os dois APKs têm a mesma assinatura e origem.',
            ],
          },
        ],
        note: 'Não instale APKs de sites que não sejam este ou o canal oficial do projeto.',
      },
      'android-tv': {
        kicker: 'ANDROID TV / FIRE TV · TV',
        title: 'PolliStream para Android TV',
        tagline: 'A experiência de sofá na sua Android TV ou Fire TV.',
        description:
          'Navegação com D-pad, fileiras de catálogo e reprodução em tela cheia na Android TV e Fire TV.',
        features: [
          { index: '01', tag: 'D-PAD', title: 'Controle e D-pad', body: 'Foco visível e atalhos para percorrer o catálogo sem mouse.' },
          { index: '02', tag: 'TELA', title: 'Tela cheia', body: 'Reprodução em tela cheia com controles que saem do caminho.' },
          { index: '03', tag: 'CASA', title: 'Perfis', body: 'Cada perfil com seu histórico e sua lista.' },
          { index: '04', tag: 'HISTÓRICO', title: 'Continuar assistindo', body: 'Retome séries e filmes de onde parou.' },
        ],
        requirements: [
          'Android TV ou Fire TV compatível',
          'Conexão de internet estável',
          'Conta Xtream ativa',
          'Instalação por APK / sideload',
        ],
        install: [
          {
            index: '01',
            title: 'Prepare o dispositivo e a rede',
            body: 'Ative as opções de desenvolvedor e deixe a TV na mesma rede do computador.',
            details: [
              'Android TV: abra Configurações › Sistema › Sobre e pressione Compilação sete vezes.',
              'Fire TV: abra Configurações › Meu Fire TV › Sobre e pressione Compilação sete vezes.',
              'Anote o IP da TV em Configurações › Rede ou Status.',
              'Conecte a TV e o computador à mesma rede; evite redes de convidados.',
            ],
          },
          {
            index: '02',
            title: 'Ative a depuração',
            body: 'A depuração permite instalar o APK pelo computador ou pelo Downloader.',
            details: [
              'Android TV: em Opções do desenvolvedor ative Depuração USB e Depuração de rede.',
              'Fire TV: em Opções do desenvolvedor ative Depuração ADB e Apps de origem desconhecida.',
              'Aceite o aviso de segurança do sistema.',
              'Se o menu não aparecer, reinicie a TV e revise novamente a seção de desenvolvimento.',
            ],
          },
          {
            index: '03',
            title: 'Instale com ADB ou Downloader',
            body: 'Envie o APK por um PC ou baixe diretamente na TV.',
            details: [
              'Em um PC com ADB, conecte à TV pelo IP e envie pollistream-androidtv.apk.',
              'Sem PC: instale o Downloader no Fire TV, abra esta página no navegador e baixe o APK.',
              'Na Android TV você também pode copiar o APK para um pen drive e abrir com um gerenciador de arquivos.',
              'Se o ADB responder unauthorized, aceite o diálogo que aparece na TV com o controle.',
            ],
            commands: [
              'adb connect <IP_DA_TV>:5555',
              'adb install pollistream-androidtv.apk',
            ],
          },
          {
            index: '04',
            title: 'Permita a instalação',
            body: 'Confirme a origem do APK quando o sistema perguntar.',
            details: [
              'Permita apps desconhecidos para o ADB, o Downloader ou o gerenciador de arquivos usado.',
              'O Fire TV pode pedir para desativar temporariamente a verificação de apps; reative ao terminar.',
              'Aguarde o fim da instalação e confirme se o PolliStream aparece na fileira de apps.',
              'Não instale APKs de links que não venham desta página.',
            ],
          },
          {
            index: '05',
            title: 'Abra o PolliStream e conecte sua conta',
            body: 'Configure o Xtream com o controle e confira a reprodução.',
            details: [
              'Abra o PolliStream pela fileira de apps ou pelo launcher da TV.',
              'Informe o servidor completo, o usuário e a senha do Xtream.',
              'Teste a conexão e aguarde o catálogo carregar.',
              'Escolha um perfil, configure o PIN dos pais se precisar e reproduza um canal ao vivo.',
            ],
          },
        ],
        note: 'Na Fire TV, o método de instalação pode variar conforme a geração do dispositivo.',
      },
      windows: {
        kicker: 'WINDOWS · PC',
        title: 'PolliStream para Windows',
        tagline: 'A mesma lista, em uma janela de desktop.',
        description:
          'Instalador para Windows com reprodução em janela ou tela cheia, teclado e mouse.',
        features: [
          { index: '01', tag: 'JANELA', title: 'Janela ou tela cheia', body: 'Escolha como assistir: uma janela para multitarefa ou tela cheia para o sofá.' },
          { index: '02', tag: 'TECLADO', title: 'Teclado e mouse', body: 'Atalhos e controles de reprodução pensados para desktop.' },
          { index: '03', tag: 'CASA', title: 'Perfis', body: 'Seu histórico e sua lista, separados por perfil.' },
          { index: '04', tag: 'HISTÓRICO', title: 'Continuar assistindo', body: 'Retome o episódio de onde parou.' },
        ],
        requirements: [
          'Windows 10 ou 11',
          'Conexão de internet estável',
          'Conta Xtream ativa',
          'Permissão para executar o instalador',
        ],
        install: [
          {
            index: '01',
            title: 'Baixe o instalador',
            body: 'Salve o arquivo oficial no computador antes de executá-lo.',
            details: [
              'Toque em Baixar e salve pollistream-windows.exe na pasta Downloads.',
              'Confira se o tamanho corresponde ao valor mostrado nesta página.',
              'Não execute o arquivo pelo navegador: abra-o pela pasta Downloads.',
              'Baixe somente desta página ou do canal oficial do projeto.',
            ],
          },
          {
            index: '02',
            title: 'Verifique o arquivo',
            body: 'Confira o hash SHA-256 se quiser descartar um download alterado.',
            details: [
              'Abra o PowerShell na pasta de download.',
              'Execute o comando e compare o resultado com o SHA-256 desta página.',
              'Se o hash não coincidir, apague o arquivo e baixe novamente.',
              'Se o Windows SmartScreen avisar, use Mais informações › Executar mesmo assim somente quando o hash coincidir.',
            ],
            commands: ['Get-FileHash .\\pollistream-windows.exe -Algorithm SHA256'],
          },
          {
            index: '03',
            title: 'Execute o assistente',
            body: 'Instale o PolliStream com seu usuário normal.',
            details: [
              'Dê duplo clique no arquivo baixado e aceite o aviso de controle de conta se aparecer.',
              'Escolha a pasta de instalação; mantenha a padrão se não tiver preferência.',
              'Deixe marcada a opção de criar atalho na área de trabalho se quiser abrir por ela.',
              'Aguarde o fim da instalação e clique em Concluir.',
            ],
          },
          {
            index: '04',
            title: 'Abra o PolliStream e conecte sua conta',
            body: 'Configure o Xtream e confira a reprodução.',
            details: [
              'Abra o PolliStream pelo menu Iniciar ou pelo atalho.',
              'Se o Firewall do Windows perguntar, permita o acesso em redes privadas.',
              'Informe o servidor completo, o usuário e a senha do Xtream.',
              'Teste a conexão, escolha um perfil e reproduza um canal para validar áudio e vídeo.',
            ],
          },
          {
            index: '05',
            title: 'Atualize sobre a versão anterior',
            body: 'Não é preciso desinstalar para receber uma versão nova.',
            details: [
              'Baixe o instalador atualizado desta página.',
              'Execute-o e deixe que substitua a versão instalada.',
              'Perfis, favoritos e histórico são preservados.',
              'Se o Windows bloquear o arquivo, confira o hash SHA-256 antes de continuar.',
            ],
          },
        ],
        note: 'Baixe somente desta página ou do canal oficial do projeto.',
      },
      roku: {
        kicker: 'ROKU · PLAYER DE STREAMING',
        title: 'PolliStream para Roku',
        tagline: 'Uma versão para Roku está em preparação.',
        description:
          'O pacote e o método de instalação para Roku ainda não foram publicados. Esta página será atualizada quando a versão estiver pronta e testada.',
        features: [
          { index: '01', tag: 'EM PREPARAÇÃO', title: 'Pacote Roku', body: 'O arquivo ZIP será publicado quando o build estiver pronto.' },
          { index: '02', tag: 'GUIA', title: 'Instruções verificadas', body: 'Adicionaremos as etapas específicas para Roku junto com o pacote.' },
        ],
        requirements: ['Dispositivo Roku compatível', 'A versão ainda não está disponível para instalar'],
        install: [
          {
            index: '01',
            title: 'Confira o dispositivo e a rede',
            body: 'Você precisa de um Roku compatível e acesso ao IP dele na rede local.',
            details: [
              'Confira o modelo e a versão do Roku OS em Configurações › Sistema › Sobre.',
              'Conecte o Roku e o computador à mesma rede; evite redes de convidados.',
              'Anote o IP do Roku em Configurações › Rede › Informações da conexão.',
              'Baixe o ZIP somente quando ele estiver publicado nesta página.',
            ],
          },
          {
            index: '02',
            title: 'Ative o Modo desenvolvedor',
            body: 'O Modo desenvolvedor permite instalar canais ZIP sem publicá-los na loja.',
            details: [
              'No controle, a partir do Início, pressione Início três vezes, Cima duas vezes e depois Direita, Esquerda, Direita, Esquerda, Direita.',
              'Quando a tela de desenvolvedor aparecer, crie uma senha e anote.',
              'Ative o Modo desenvolvedor e aceite a reinicialização do dispositivo.',
              'Se a sequência não funcionar, confirme que você está na tela Início e não dentro de um app.',
            ],
          },
          {
            index: '03',
            title: 'Instale o ZIP pelo navegador',
            body: 'O instalador web do Roku envia o pacote ao dispositivo.',
            details: [
              'Abra http://<IP_DO_ROKU> no navegador do computador.',
              'Entre com o usuário rokudev e a senha que você criou.',
              'Selecione pollistream-roku.zip, clique em Upload e instale o canal.',
              'Aguarde a mensagem de instalação concluída no Roku antes de fechar a página.',
            ],
          },
          {
            index: '04',
            title: 'Abra o canal',
            body: 'O PolliStream aparecerá no fim da fileira de canais.',
            details: [
              'Volte ao Início do Roku e procure o PolliStream na lista de canais.',
              'Se não aparecer, reinicie o dispositivo em Configurações › Sistema › Reiniciar.',
              'Não remova o Modo desenvolvedor até concluir a instalação.',
            ],
          },
          {
            index: '05',
            title: 'Conecte sua conta',
            body: 'Quando o pacote estiver disponível, configure o Xtream com o controle.',
            details: [
              'Informe o servidor completo, o usuário e a senha do Xtream.',
              'Teste a conexão e aguarde o catálogo carregar.',
              'Escolha um perfil e configure o PIN dos pais se precisar.',
            ],
          },
        ],
        note: 'Não baixe pacotes Roku de terceiros. A instalação será habilitada após a validação do build.',
      },
      macos: {
        kicker: 'MACOS · DESKTOP',
        title: 'PolliStream para Mac',
        tagline: 'Uma versão para desktop macOS está em preparação.',
        description: 'O instalador para Mac ainda não foi publicado. Esta página será atualizada quando houver um build testado.',
        features: [
          { index: '01', tag: 'EM PREPARAÇÃO', title: 'Build para macOS', body: 'O formato e os requisitos serão confirmados junto com o instalador.' },
        ],
        requirements: ['Mac compatível; requisitos a confirmar', 'Versão ainda indisponível'],
        install: [
          {
            index: '01',
            title: 'Confira seu Mac',
            body: 'O instalador para macOS ainda não foi publicado.',
            details: [
              'Confira o modelo e a versão do macOS no menu Apple › Sobre este Mac.',
              'O formato definitivo (DMG ou PKG) e os requisitos serão confirmados com o build.',
              'Não baixe instaladores para Mac em sites de terceiros.',
            ],
          },
          {
            index: '02',
            title: 'Aguarde o instalador oficial',
            body: 'O arquivo testado será publicado nesta página.',
            details: [
              'O link de download aparecerá quando o build estiver assinado e verificado.',
              'Confira o nome e o tamanho do arquivo antes de abri-lo.',
              'Se o arquivo não estiver nesta página, não o instale.',
            ],
          },
          {
            index: '03',
            title: 'Instale o pacote',
            body: 'O processo seguirá o fluxo normal de um app macOS.',
            details: [
              'Abra o DMG e arraste o PolliStream para a pasta Aplicativos.',
              'Ejete a imagem de disco depois de copiar o app.',
              'Se o instalador for um PKG, abra-o e siga o assistente com seu usuário.',
            ],
          },
          {
            index: '04',
            title: 'Permita a abertura no macOS',
            body: 'O Gatekeeper pode pedir uma confirmação na primeira vez.',
            details: [
              'Abra Ajustes do Sistema › Privacidade e segurança.',
              'Se aparecer um aviso sobre o PolliStream, clique em Abrir mesmo assim.',
              'Você também pode clicar com o botão direito no app e escolher Abrir na primeira vez.',
              'Não desative o Gatekeeper permanentemente.',
            ],
          },
          {
            index: '05',
            title: 'Conecte sua conta',
            body: 'Quando o build estiver disponível, configure o Xtream e escolha seu perfil.',
            details: [
              'Informe o servidor completo, o usuário e a senha do Xtream.',
              'Teste a conexão e revise o catálogo.',
              'Configure o PIN dos pais se precisar.',
            ],
          },
        ],
        note: 'Não baixe instaladores de terceiros.',
      },
      ios: {
        kicker: 'IPHONE E IPAD · IOS / IPAD',
        title: 'PolliStream para iPhone e iPad',
        tagline: 'Uma versão para dispositivos móveis Apple está em preparação.',
        description: 'O método de distribuição para iPhone e iPad ainda não foi definido nem publicado.',
        features: [
          { index: '01', tag: 'EM PREPARAÇÃO', title: 'iOS e iPad', body: 'O app será publicado por um canal compatível quando estiver pronto.' },
        ],
        requirements: ['iPhone ou iPad compatível; requisitos a confirmar', 'Versão ainda indisponível'],
        install: [
          {
            index: '01',
            title: 'Aguarde o canal oficial',
            body: 'Ainda não há app nem arquivo IPA publicado para iPhone e iPad.',
            details: [
              'Não instale IPAs de sites, grupos ou serviços de assinatura de terceiros.',
              'Anunciaremos o canal válido (App Store ou TestFlight) quando estiver definido.',
              'Enquanto isso, você pode usar o PolliStream no Android, Android TV ou Windows.',
            ],
          },
          {
            index: '02',
            title: 'Atualize o sistema',
            body: 'O build exigirá uma versão compatível de iOS ou iPadOS.',
            details: [
              'Abra Ajustes › Geral › Atualização de software.',
              'Instale a atualização disponível e reinicie o dispositivo se necessário.',
              'A versão mínima será publicada junto com o link oficial.',
            ],
          },
          {
            index: '03',
            title: 'Instale pelo canal oficial',
            body: 'A instalação será feita pela App Store ou pelo TestFlight.',
            details: [
              'Abra o link oficial desta página no Safari.',
              'No TestFlight, aceite o convite e toque em Instalar.',
              'Na App Store, toque em Obter ou no ícone de download e confirme com Face ID ou Touch ID.',
              'Aguarde o app aparecer na tela de início.',
            ],
          },
          {
            index: '04',
            title: 'Conecte sua conta',
            body: 'Quando estiver disponível, configure o Xtream e escolha seu perfil.',
            details: [
              'Abra o PolliStream e aceite as permissões solicitadas.',
              'Informe o servidor completo, o usuário e a senha do Xtream.',
              'Teste a conexão e configure o PIN dos pais se precisar.',
            ],
          },
        ],
        note: 'Não instale arquivos IPA de fontes não verificadas.',
      },
    },
  },
  legal: {
    hubTitle: 'Legal',
    hubBody: 'Privacidade, termos e cookies do site do PolliStream.',
    backHome: 'Voltar ao início',
    privacy: {
      title: 'Política de privacidade',
      description: 'Quais dados o PolliStream trata quando você visita o site ou baixa o app.',
      updated: 'Última revisão: novembro de 2026',
      intro:
        'Esta política explica quais dados o PolliStream trata quando você visita este site e baixa o aplicativo. O app em si não envia suas credenciais ao PolliStream.',
      sections: [
        {
          title: 'Quem é o responsável',
          body: [
            'O PolliStream é um projeto independente de desenvolvimento de software. Para qualquer dúvida sobre privacidade, use o canal de contato publicado no rodapé.',
          ],
        },
        {
          title: 'Quais dados tratamos',
          body: [
            'Este site é estático e não tem contas de usuário. Podemos tratar dados técnicos da visita (endereço IP, agente de usuário e página solicitada) pelo Cloudflare, métricas agregadas e sem cookies se ativarmos o Cloudflare Web Analytics, e dados de anúncios somente se você aceitar cookies de publicidade.',
          ],
        },
        {
          title: 'Downloads e links de parceiros',
          body: [
            'Quando você clica em um download, o site pode redirecionar para um parceiro de downloads (CPA) ou uma hospedagem externa. Esse parceiro aplica sua própria política. Não recebemos sua senha do Xtream nem o conteúdo que você assiste.',
          ],
        },
        {
          title: 'O app',
          body: [
            'O app guarda a configuração e as credenciais no armazenamento local do dispositivo. Não há backend do PolliStream recebendo esses dados. O provedor Xtream recebe a conexão diretamente do seu dispositivo.',
          ],
        },
        {
          title: 'Base legal',
          body: [
            'Consentimento para cookies de publicidade e comunicações; interesse legítimo para segurança e métricas agregadas; execução do serviço para entregar o download.',
          ],
        },
        {
          title: 'Conservação',
          body: [
            'Os registros técnicos do Cloudflare são mantidos conforme sua configuração. As preferências de cookies ficam no seu navegador até você apagá-las.',
          ],
        },
        {
          title: 'Seus direitos',
          body: [
            'Você pode solicitar acesso, retificação, exclusão, oposição, limitação e portabilidade, e retirar o consentimento. Também pode reclamar junto à sua autoridade de proteção de dados.',
          ],
        },
        {
          title: 'Alterações',
          body: ['Podemos atualizar esta política. Publicaremos a data da última revisão.'],
        },
      ],
    },
    terms: {
      title: 'Termos de uso',
      description: 'Condições de uso do site e dos instaladores do PolliStream.',
      updated: 'Última revisão: novembro de 2026',
      intro:
        'Ao usar este site e baixar o PolliStream, você aceita estes termos. Se não concordar, não use o site nem os instaladores.',
      sections: [
        {
          title: 'Objeto',
          body: [
            'O PolliStream é um player de IPTV. Não vende, hospeda, distribui nem recomenda conteúdo audiovisual. O site apenas distribui o software e explica como instalá-lo.',
          ],
        },
        {
          title: 'Uso permitido',
          body: [
            'Você deve usar o PolliStream apenas com provedores e conteúdos que tem direito de acessar. Não pode usar o app para redistribuir conteúdo, contornar medidas de proteção nem acessar serviços sem autorização.',
          ],
        },
        {
          title: 'Downloads',
          body: [
            'Os instaladores são oferecidos gratuitamente e como estão. Podemos alterar, retirar ou atualizar builds sem aviso prévio. Não garantimos que uma versão específica funcione em todos os modelos ou versões de sistema.',
          ],
        },
        {
          title: 'Propriedade intelectual',
          body: [
            'O nome, o logo e o código do PolliStream pertencem aos seus autores. Canais, filmes, séries e marcas de terceiros pertencem aos seus titulares. O PolliStream não reclama direitos sobre esse conteúdo.',
          ],
        },
        {
          title: 'Links de terceiros',
          body: [
            'O site pode incluir links de afiliados, anúncios ou links para hospedagens de download. Não controlamos esses sites e não somos responsáveis por seu conteúdo ou suas práticas.',
          ],
        },
        {
          title: 'Limitação de responsabilidade',
          body: [
            'Na medida permitida por lei, o PolliStream não responde por danos decorrentes do uso do app, da indisponibilidade do site ou da atuação do seu provedor. Nada nestes termos limita os direitos que a lei reconhece a você como consumidor.',
          ],
        },
        {
          title: 'Lei aplicável',
          body: [
            'Aplica-se a legislação correspondente ao titular do site. Se você é consumidor, mantém a proteção das normas do seu país de residência.',
          ],
        },
        {
          title: 'Contato',
          body: ['Para questões sobre estes termos, use o canal de contato publicado no rodapé.'],
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description: 'Como o PolliStream usa cookies e como alterar suas preferências.',
      updated: 'Última revisão: novembro de 2026',
      intro:
        'Usamos o mínimo necessário para o site funcionar. Os anúncios e seus cookies só carregam se você der consentimento.',
      sections: [
        {
          title: 'O que são',
          body: [
            'Cookies e armazenamento local são pequenos dados que o navegador guarda para lembrar preferências ou medir o uso de um site.',
          ],
        },
        {
          title: 'Armazenamento essencial',
          body: [
            'Guardamos sua escolha de cookies no armazenamento local do navegador para não perguntar a cada visita. Não é usado para identificar você nem para publicidade.',
          ],
        },
        {
          title: 'Publicidade',
          body: [
            'Se você aceitar, podemos carregar anúncios de redes como Google AdSense ou Adsterra. Essas redes podem usar cookies ou identificadores para medir e personalizar anúncios. Sem consentimento, os anúncios não carregam.',
          ],
        },
        {
          title: 'Análise',
          body: [
            'Podemos usar Cloudflare Web Analytics ou Plausible, que são medições agregadas e sem cookies. Eles não criam um perfil publicitário de você.',
          ],
        },
        {
          title: 'Afiliados',
          body: [
            'Links de afiliados podem incluir parâmetros de rastreamento do parceiro para atribuir a visita. Eles são marcados como links de afiliado na página.',
          ],
        },
        {
          title: 'Como gerenciar suas preferências',
          body: [
            'Você pode aceitar ou recusar os anúncios pelo aviso de cookies. Também pode apagar o armazenamento local e os cookies nas configurações do navegador.',
          ],
        },
        {
          title: 'Alterações',
          body: ['Se mudarmos os provedores ou as finalidades, atualizaremos esta página e pediremos consentimento novamente quando necessário.'],
        },
      ],
    },
  },
  notFound: {
    title: 'Sinal perdido',
    body: 'Esta página não existe ou mudou de frequência. Volte ao início e escolha sua tela.',
    cta: 'Voltar ao início',
  },
}
