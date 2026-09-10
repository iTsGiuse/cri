import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   siteName: string,

   siteShortName: string,

   siteDescription: string,

   siteUrl: string,

   locale: string,

   language: string,

   email: string,

   phone: string,

   address: {
      street: string,

      postalCode: string,

      city: string,

      province: string,

      country: string,
   },

   social: {
      facebook: string,

      instagram: string,

      youtube: string,

      linkedin: string,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }