<script setup lang="ts">
const config = useRuntimeConfig()
const siteName = config.public.siteShortName
const siteUrl = config.public.siteUrl.replace(/\/$/, '')
const description = config.public.siteDescription
const iubenda = config.public.iubenda

useSeoMeta({
  titleTemplate: (title) => title ? `${title} | ${siteName}` : siteName,
  description,
  ogSiteName: siteName,
  ogDescription: description,
  ogImage: `${siteUrl}/images/logo.jpg`,
  ogImageAlt: siteName,
  twitterCard: 'summary_large_image',
})

// Iubenda must be present in the server-rendered <head>, before optional tags.
// Autoblocking is the global gate for existing and future third-party scripts.
if (iubenda.siteId && iubenda.cookiePolicyId) {
  const iubendaConfiguration = {
    siteId: Number(iubenda.siteId),
    cookiePolicyId: Number(iubenda.cookiePolicyId),
    lang: 'it',
    perPurposeConsent: true,
    localConsentDomain: new URL(siteUrl).hostname,
  }

  useHead({
    script: [
      {
        key: 'iubenda-autoblocking',
        src: `https://cs.iubenda.com/autoblocking/${iubenda.siteId}.js`,
        tagPriority: 'critical',
      },
      {
        key: 'iubenda-configuration',
        innerHTML: `window._iub = window._iub || []; window._iub.csConfiguration = ${JSON.stringify(iubendaConfiguration)};`,
        tagPriority: 'critical',
      },
      {
        key: 'iubenda-cookie-solution',
        src: 'https://cdn.iubenda.com/cs/iubenda_cs.js',
        async: true,
        tagPriority: 'critical',
      },
    ],
  })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
