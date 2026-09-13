<template>
  <div>
    <Transition name="fade">
      <Caricamento v-if="isLoading" />
    </Transition>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  activeSocialLinks,
  contactConfig,
  organizationConfig,
} from './data/config'

const config = useRuntimeConfig()
const siteName = config.public.siteShortName
const siteUrl = config.public.siteUrl.replace(/\/$/, '')
const description = config.public.siteDescription
const iubenda = config.public.iubenda

// --- Gestione Stato Caricamento (7 secondi) ---
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 4000)
})

// --- SEO & Meta Configuration ---
useSeoMeta({
  titleTemplate: (title) => title ? `${title} | ${siteName}` : siteName,
  description,
  ogSiteName: siteName,
  ogDescription: description,
  ogImage: `${siteUrl}${organizationConfig.logo.imageUrl}`,
  ogImageAlt: siteName,
  twitterCard: 'summary_large_image',
})

// --- Dati strutturati Schema.org ---
// Solo informazioni verificabili presenti in data/config.ts.
useSchemaOrg([
  defineOrganization({
    '@type': ['NGO', 'LocalBusiness'],
    'name': organizationConfig.legalName,
    'alternateName': siteName,
    'description': description,
    'url': siteUrl,
    'logo': `${siteUrl}${organizationConfig.logo.imageUrl}`,
    'taxID': organizationConfig.taxCode,
    'email': contactConfig.email,
    'telephone': contactConfig.phone.value,
    'sameAs': activeSocialLinks.map((social) => social.url),
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': contactConfig.address.street,
      'postalCode': contactConfig.address.postalCode,
      'addressLocality': contactConfig.address.city,
      'addressRegion': contactConfig.address.province,
      'addressCountry': 'IT',
    },
  }),
  defineWebSite({
    name: siteName,
    url: siteUrl,
    inLanguage: config.public.language,
  }),
  defineWebPage(),
])

// --- Iubenda Cookie Solution ---
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>