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

  ],

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

      meta: [
        { name: 'theme-color', content: '#dc3545' },
        { name: 'color-scheme', content: 'light' },
      ],

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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
  },

  postcss: {
    plugins: {
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { svgo: false }] }
          : false,
    },
  },
})
