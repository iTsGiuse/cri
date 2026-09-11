export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: true,
  },

  css: [
    '~/assets/css/main.scss',
  ],

  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-security',
    '@nuxt/hints',
    '@nuxt/a11y',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/devtools',
  ],

  site: {
    url: 'https://rubiera.cri.it',
    name: 'Croce Rossa Italiana – Comitato di Rubiera',
    description: 'Croce Rossa Italiana – Comitato di Rubiera. Attività, volontariato, iniziative e informazioni sul Comitato.',
    defaultLocale: 'it',
    indexable: true,
  },

  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'blob:', 'https:'],
        'script-src': ["'self'", "'unsafe-inline'", 'https://*.iubenda.com', 'https://www.googletagmanager.com'],
        'style-src': ["'self'", "'unsafe-inline'", 'https://*.iubenda.com'],
        'connect-src': ["'self'", 'https://*.iubenda.com', 'https://www.google-analytics.com', 'https://region1.google-analytics.com'],
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
    },
  },

  runtimeConfig: {
    public: {
      siteName: 'Croce Rossa Italiana – Comitato di Rubiera',
      siteShortName: 'Croce Rossa Rubiera',
      siteDescription:
        'Croce Rossa Italiana – Comitato di Rubiera. Attività, volontariato, iniziative e informazioni sul Comitato.',
      siteUrl: 'https://rubiera.cri.it',
      locale: 'it_IT',
      language: 'it',
      email: 'rubiera@cri.it',
      phone: '0522 620956',
      address: {
        street: 'Via Alcide De Gasperi 1/B',
        postalCode: '42048',
        city: 'Rubiera',
        province: 'RE',
        country: 'Italia',
      },
      social: {
        facebook: '',
        instagram: '',
        youtube: '',
        linkedin: '',
      },
      iubenda: {
        siteId: '',
        cookiePolicyId: '',
        privacyPolicyId: '',
      },
      analytics: {
        measurementId: '',
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'it',
      },
      title: 'Croce Rossa Italiana – Comitato di Rubiera',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#dc3545' },
        { name: 'color-scheme', content: 'light' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
    },
  },

  image: {
    quality: 85,
    formats: ['avif', 'webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },
})
