
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  Breadcrumbs: typeof import("../../app/components/Breadcrumbs.vue")['default']
  Carosello: typeof import("../../app/components/Carosello.vue")['default']
  Cta: typeof import("../../app/components/Cta.vue")['default']
  Footer: typeof import("../../app/components/Footer.vue")['default']
  Header: typeof import("../../app/components/Header.vue")['default']
  Hero: typeof import("../../app/components/Hero.vue")['default']
  SezioniAlternate: typeof import("../../app/components/SezioniAlternate.vue")['default']
  Sponsor: typeof import("../../app/components/Sponsor.vue")['default']
  StrutturaGovernance: typeof import("../../app/components/StrutturaGovernance.vue")['default']
  TopBar: typeof import("../../app/components/TopBar.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/.pnpm/@nuxt+image@2.1.0_magic-string@1.2.3_magicast@0.5.4_rolldown@1.2.8_unplugin@3.3.0_esbui_fba6af01930d5f3a7a33e90f37a6d79b/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/.pnpm/@nuxt+image@2.1.0_magic-string@1.2.3_magicast@0.5.4_rolldown@1.2.8_unplugin@3.3.0_esbui_fba6af01930d5f3a7a33e90f37a6d79b/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtPage: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyBreadcrumbs: LazyComponent<typeof import("../../app/components/Breadcrumbs.vue")['default']>
  LazyCarosello: LazyComponent<typeof import("../../app/components/Carosello.vue")['default']>
  LazyCta: LazyComponent<typeof import("../../app/components/Cta.vue")['default']>
  LazyFooter: LazyComponent<typeof import("../../app/components/Footer.vue")['default']>
  LazyHeader: LazyComponent<typeof import("../../app/components/Header.vue")['default']>
  LazyHero: LazyComponent<typeof import("../../app/components/Hero.vue")['default']>
  LazySezioniAlternate: LazyComponent<typeof import("../../app/components/SezioniAlternate.vue")['default']>
  LazySponsor: LazyComponent<typeof import("../../app/components/Sponsor.vue")['default']>
  LazyStrutturaGovernance: LazyComponent<typeof import("../../app/components/StrutturaGovernance.vue")['default']>
  LazyTopBar: LazyComponent<typeof import("../../app/components/TopBar.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+image@2.1.0_magic-string@1.2.3_magicast@0.5.4_rolldown@1.2.8_unplugin@3.3.0_esbui_fba6af01930d5f3a7a33e90f37a6d79b/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+image@2.1.0_magic-string@1.2.3_magicast@0.5.4_rolldown@1.2.8_unplugin@3.3.0_esbui_fba6af01930d5f3a7a33e90f37a6d79b/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_2d0f774cbdd328a44c29a5743a71b931/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
