<template>
  <nav
    v-if="breadcrumbTrail.length > 0"
    aria-label="breadcrumb"
    class="bg-danger py-3 px-3"
  >
    <div class="container d-flex justify-content-center justify-content-md-start mt-3 mw-100">
      <div class="d-inline-flex mw-100 align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 border border-white border-opacity-25 shadow-sm">
        <ul class="list-unstyled mb-0 small d-flex align-items-center flex-nowrap overflow-x-auto scrollbar-nascosta">
          <li class="d-inline-flex align-items-center">
            <NuxtLink
              to="/"
              class="text-white text-decoration-none d-inline-flex align-items-center"
            >
              <Icon name="i-bi:house-door-fill" class=" me-1" aria-hidden="true" />
              <span>Home</span>
            </NuxtLink>
          </li>

          <li
            v-for="(item, index) in breadcrumbTrail"
            :key="item.url"
            class="d-inline-flex align-items-center"
          >
            <span class="text-white opacity-75 mx-2 user-select-none" aria-hidden="true">/</span>

            <span
              v-if="index === breadcrumbTrail.length - 1 || !item.clickable"
              class="fw-semibold text-white text-nowrap d-inline-flex align-items-center"
              :class="{ 'opacity-75': !item.clickable && index !== breadcrumbTrail.length - 1 }"
              :aria-current="index === breadcrumbTrail.length - 1 ? 'page' : undefined"
            >
              <Icon :name="item.icon" class="me-1" aria-hidden="true" />
              <span>{{ item.label }}</span>
            </span>

            <NuxtLink
              v-else
              :to="item.url"
              class="text-white text-decoration-none text-nowrap d-inline-flex align-items-center"
            >
              <Icon :name="item.icon" class="me-1" aria-hidden="true" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const requestUrl = useRequestURL()

/** Etichetta e icona associate a un segmento di percorso. */
type BreadcrumbLabel = {
  label: string
  icon: string
}

const breadcrumbLabels: Record<string, BreadcrumbLabel> = {
  'chi-siamo': { label: 'Chi siamo', icon: 'i-bi:people-fill' },
  'il-comitato': { label: 'Il Comitato', icon: 'i-bi:building-fill' },
  'storia': { label: 'La nostra storia', icon: 'i-bi:clock-history' },
  'organizzazione': { label: 'Organizzazione e governance', icon: 'i-bi:diagram-3-fill' },
  'principi-e-valori': { label: 'Principi e valori', icon: 'i-bi:heart-fill' },
  'trasparenza': { label: 'Trasparenza e documenti', icon: 'i-bi:file-earmark-text-fill' },
  'sede-e-contatti': { label: 'Sede e contatti', icon: 'i-bi:geo-alt-fill' },

  'cosa-facciamo': { label: 'Cosa facciamo', icon: 'i-bi:activity' },
  'salute': { label: 'Salute e Prevenzione', icon: 'i-bi:heart-pulse-fill' },
  'sociale': { label: 'Sociale e Inclusione', icon: 'i-bi:people-fill' },
  'protezione-civile': { label: 'Emergenza e Protezione Civile', icon: 'i-bi:shield-fill-check' },
  'diritto-umanitario': { label: 'Principi e Diritto Umanitario', icon: 'i-bi:book-fill' },
  'giovani': { label: 'Giovani', icon: 'i-bi:person-hearts' },
  'sviluppo': { label: 'Sviluppo e Comunicazione', icon: 'i-bi:graph-up-arrow' },

  'servizi': { label: 'Servizi', icon: 'i-bi:grid-fill' },
  'emergenza-118': { label: 'Emergenza e Soccorso 118 / 112', icon: 'i-bi:exclamation-triangle-fill' },
  'richiedi-trasporto': { label: 'Richiedi un trasporto sanitario', icon: 'i-bi:truck-front-fill' },
  'assistenza-eventi': { label: 'Assistenza sanitaria a manifestazioni', icon: 'i-bi:hospital-fill' },
  'corsi-popolazione': { label: 'Corsi per la popolazione', icon: 'i-bi:mortarboard-fill' },
  'corsi-aziende': { label: 'Corsi aziendali (D.Lgs 81/08)', icon: 'i-bi:briefcase-fill' },
  'supporto-sociale': { label: 'Supporto sociale e assistenza', icon: 'i-bi:house-heart-fill' },
  'prenotazioni-e-informazioni': { label: 'Prenotazioni e informazioni', icon: 'i-bi:calendar-check-fill' },

  'volontariato': { label: 'Volontariato', icon: 'i-bi:person-plus-fill' },
  'diventa-volontario': { label: 'Diventa volontario', icon: 'i-bi:person-plus-fill' },
  'corso-di-accesso': { label: 'Come funziona il corso di accesso', icon: 'i-bi:info-circle-fill' },
  'percorso-formativo': { label: 'Percorso formativo e qualifiche', icon: 'i-bi:mortarboard-fill' },
  'attivita-e-gruppi': { label: 'Attività e gruppi di lavoro', icon: 'i-bi:people-fill' },

  'news': { label: 'News & Eventi', icon: 'i-bi:newspaper' },
  'notizie': { label: 'Notizie', icon: 'i-bi:newspaper' },
  'eventi': { label: 'Eventi', icon: 'i-bi:calendar-event-fill' },
  'campagne': { label: 'Campagne di sensibilizzazione', icon: 'i-bi:megaphone-fill' },

  'faq': { label: 'FAQ', icon: 'i-bi:question-circle-fill' },
  'servizi-e-trasporti': { label: 'Trasporti e Servizi Sanitari', icon: 'i-bi:truck-front-fill' },
  'corsi-formazione': { label: 'Corsi di Formazione', icon: 'i-bi:mortarboard-fill' },
  'donazioni': { label: 'Donazioni e 5x1000', icon: 'i-bi:piggy-bank-fill' },

  'dona': { label: 'Dona ora', icon: 'i-bi:heart-fill' },
  'contatti': { label: 'Contatti', icon: 'i-bi:envelope-fill' }
}

/** Segmenti che raggruppano pagine figlie ma non hanno una pagina propria. */
const nonClickableSegments = ['chi-siamo', 'cosa-facciamo', 'servizi', 'volontariato', 'news', 'faq']

const breadcrumbTrail = computed(() => {
  if (route.path === '/') return []

  const segments = route.path.split('/').filter(Boolean)
  let currentPath = ''

  return segments.map((segment) => {
    currentPath += `/${segment}`

    const known = breadcrumbLabels[segment]
    const fallbackLabel = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return {
      label: known ? known.label : fallbackLabel,
      icon: known ? known.icon : 'i-bi:folder-fill',
      url: currentPath,
      clickable: !nonClickableSegments.includes(segment)
    }
  })
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (breadcrumbTrail.value.length === 0) return ''

        const baseUrl = requestUrl.origin

        const itemListElement = [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`
          },
          ...breadcrumbTrail.value.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.label,
            item: `${baseUrl}${item.url}`
          }))
        ]

        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement
        })
      })
    }
  ]
})
</script>

<style scoped>
/*
 * Su schermi stretti il percorso può superare la larghezza disponibile:
 * prima veniva tagliato da `overflow-hidden`, ora scorre orizzontalmente
 * dentro la pillola senza generare scroll di pagina.
 */
.scrollbar-nascosta {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-nascosta::-webkit-scrollbar {
  display: none;
}
</style>
