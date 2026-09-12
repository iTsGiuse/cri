import { contactConfig, siteConfig, socialConfig } from './app/data/config'

const socialUrlByName = Object.fromEntries(
  socialConfig.map((link) => [link.name.toLowerCase(), link.url]),
)

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

    // DISATTIVATO — non per scelta stilistica ma per un difetto a monte.
    // @nuxt/scripts 1.3.9 alias-a `#nuxt-scripts/network-dispatcher` sulla
    // variante Node, che fa `import { Agent, fetch } from 'undici'`.
    // In `nuxt dev` undici viene inlinato dalla pipeline SSR e il suo file
    // CJS esplode con "Class extends value [object Module] is not a
    // constructor": ogni pagina risponde 500. `nuxt build` invece funziona.
    // Il modulo serve a app/plugins/02.analytics.client.ts (GA4 + consenso
    // Iubenda), oggi inerte perché gli ID in runtimeConfig sono vuoti:
    // riattivarlo insieme alla configurazione degli ID, verificando che il
    // difetto a monte sia stato risolto.
    // '@nuxt/scripts',
  ],

  // I valori arrivano da app/data/config.ts: unica fonte per i dati
  // istituzionali, condivisa con i componenti.
  site: {
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    defaultLocale: siteConfig.language,
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
    // Con la pipeline rolldown/oxc di Nuxt 4 le opzioni esbuild vengono
    // ignorate: `removeLoggers: true` non rimuoveva nulla e generava a ogni
    // build il warning "Both esbuild and oxc options were set".
    // Per rimuovere davvero i log in produzione usare la forma a oggetto
    // (es. `{ consoleType: ['log', 'debug'] }`), che usa il plugin Vite.
    removeLoggers: false,

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

  // Restano su runtimeConfig i valori che devono poter essere sovrascritti
  // da variabili d'ambiente (NUXT_PUBLIC_*); i default vengono da config.ts.
  runtimeConfig: {
    public: {
      siteName: siteConfig.name,
      siteShortName: siteConfig.shortName,
      siteDescription: siteConfig.description,
      siteUrl: siteConfig.url,
      locale: siteConfig.locale,
      language: siteConfig.language,
      email: contactConfig.email,
      phone: contactConfig.phone.label,
      address: {
        street: contactConfig.address.street,
        postalCode: contactConfig.address.postalCode,
        city: contactConfig.address.city,
        province: contactConfig.address.province,
        country: contactConfig.address.country,
      },
      social: {
        facebook: socialUrlByName.facebook ?? '',
        instagram: socialUrlByName.instagram ?? '',
        youtube: socialUrlByName.youtube ?? '',
        linkedin: socialUrlByName.linkedin ?? '',
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
        lang: siteConfig.language,
      },
      title: siteConfig.name,
      // charset e viewport sono già impostati da Nuxt con gli stessi valori
      // (segnalati come duplicati da nuxt-seo-utils all'avvio).
      meta: [
        { name: 'theme-color', content: '#dc3545' },
        { name: 'color-scheme', content: 'light' },
      ],
      // Sono dichiarate solo le icone realmente presenti in `public/`:
      // i riferimenti a favicon-32x32.png, favicon-16x16.png e
      // apple-touch-icon.png generavano un 404 su ogni pagina.
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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

  // Bootstrap 5.3 è ancora scritto con la vecchia sintassi Sass: `quietDeps`
  // silenzia le sue deprecation senza nascondere quelle del nostro codice.
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
  },

  // cssnano è attivo solo in produzione (default Nuxt). Disattiviamo il solo
  // sotto-plugin svgo, che non riesce a leggere i data-URI SVG di Bootstrap
  // e produceva "SvgoParserError" a ogni build.
  postcss: {
    plugins: {
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { svgo: false }] }
          : false,
    },
  },
})
