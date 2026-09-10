export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: false,
  },

  css: [
    '~/assets/css/main.scss',
  ],

  modules: [
    '@nuxt/image',
  ],

  runtimeConfig: {
    public: {
      siteName:
        'Croce Rossa Italiana – Comitato di Rubiera',

      siteShortName:
        'Croce Rossa Rubiera',

      siteDescription:
        'Croce Rossa Italiana – Comitato di Rubiera. Attività, volontariato, iniziative e informazioni sul Comitato.',

      siteUrl: '',

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
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'it',
      },

      title:
        'Croce Rossa Italiana – Comitato di Rubiera',

      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
            'Croce Rossa Italiana – Comitato di Rubiera. Attività, volontariato, iniziative e informazioni sul Comitato.',
        },
        {
          name: 'author',
          content:
            'Croce Rossa Italiana – Comitato di Rubiera',
        },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large',
        },
        {
          name: 'theme-color',
          content: '#dc3545',
        },
        {
          name: 'color-scheme',
          content: 'light',
        },

        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: 'it_IT',
        },
        {
          property: 'og:site_name',
          content:
            'Croce Rossa Italiana – Comitato di Rubiera',
        },
        {
          property: 'og:title',
          content:
            'Croce Rossa Italiana – Comitato di Rubiera',
        },
        {
          property: 'og:description',
          content:
            'Attività, volontariato, iniziative e informazioni della Croce Rossa Italiana – Comitato di Rubiera.',
        },

        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content:
            'Croce Rossa Italiana – Comitato di Rubiera',
        },
        {
          name: 'twitter:description',
          content:
            'Attività, volontariato, iniziative e informazioni della Croce Rossa Italiana – Comitato di Rubiera.',
        },
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
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

    formats: [
      'avif',
      'webp',
    ],

    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },

    densities: [
      1,
      2,
    ],
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },
})
