<template>
  <nav
    v-if="percorsiBreadcrumb.length > 0"
    aria-label="breadcrumb"
    class="bg-danger py-3 px-3"
  >
    <div class="container d-flex justify-content-start mt-3">
      <div class="d-inline-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 border border-white border-opacity-25 shadow-sm overflow-hidden">
        <ul class="list-unstyled mb-0 small d-flex align-items-center flex-nowrap">
          <li class="d-inline-flex align-items-center">
            <NuxtLink
              to="/"
              class="text-white text-opacity-75 text-opacity-100-hover text-decoration-none d-inline-flex align-items-center"
            >
              <Icon name="i-bi:house-door-fill" class=" me-1" aria-hidden="true" />
              <span>Home</span>
            </NuxtLink>
          </li>

          <li
            v-for="(voce, index) in percorsiBreadcrumb"
            :key="voce.url"
            class="d-inline-flex align-items-center"
          >
            <span class="text-white opacity-75 mx-2 user-select-none" aria-hidden="true">/</span>

            <span
              v-if="index === percorsiBreadcrumb.length - 1 || !voce.cliccabile"
              class="fw-semibold text-white text-nowrap d-inline-flex align-items-center"
              :class="{ 'opacity-75': !voce.cliccabile && index !== percorsiBreadcrumb.length - 1 }"
              :aria-current="index === percorsiBreadcrumb.length - 1 ? 'page' : undefined"
            >
              <Icon :name="voce.icona" class="me-1" aria-hidden="true" />
              <span>{{ voce.etichetta }}</span>
            </span>

            <NuxtLink
              v-else
              :to="voce.url"
              class="text-white text-opacity-75 text-opacity-100-hover text-decoration-none text-nowrap d-inline-flex align-items-center"
            >
              <Icon :name="voce.icona" class="me-1" aria-hidden="true" />
              <span>{{ voce.etichetta }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const requestUrl = useRequestURL()

type DatiVoce = {
  etichetta: string
  icona: string
}

const dizionarioEtichette: Record<string, DatiVoce> = {
  'chi-siamo': { etichetta: 'Chi siamo', icona: 'i-bi:people-fill' },
  'il-comitato': { etichetta: 'Il Comitato', icona: 'i-bi:building-fill' },
  'storia': { etichetta: 'La nostra storia', icona: 'i-bi:clock-history' },
  'organizzazione': { etichetta: 'Organizzazione e governance', icona: 'i-bi:diagram-3-fill' },
  'principi-e-valori': { etichetta: 'Principi e valori', icona: 'i-bi:heart-fill' },
  'trasparenza': { etichetta: 'Trasparenza e documenti', icona: 'i-bi:file-earmark-text-fill' },
  'sede-e-contatti': { etichetta: 'Sede e contatti', icona: 'i-bi:geo-alt-fill' },

  'cosa-facciamo': { etichetta: 'Cosa facciamo', icona: 'i-bi:activity' },
  'salute': { etichetta: 'Salute e Prevenzione', icona: 'i-bi:heart-pulse-fill' },
  'sociale': { etichetta: 'Sociale e Inclusione', icona: 'i-bi:people-fill' },
  'protezione-civile': { etichetta: 'Emergenza e Protezione Civile', icona: 'i-bi:shield-fill-check' },
  'diritto-umanitario': { etichetta: 'Principi e Diritto Umanitario', icona: 'i-bi:book-fill' },
  'giovani': { etichetta: 'Giovani', icona: 'i-bi:person-hearts' },
  'sviluppo': { etichetta: 'Sviluppo e Comunicazione', icona: 'i-bi:graph-up-arrow' },

  'servizi': { etichetta: 'Servizi', icona: 'i-bi:grid-fill' },
  'emergenza-118': { etichetta: 'Emergenza e Soccorso 118 / 112', icona: 'i-bi:exclamation-triangle-fill' },
  'richiedi-trasporto': { etichetta: 'Richiedi un trasporto sanitario', icona: 'i-bi:truck-front-fill' },
  'assistenza-eventi': { etichetta: 'Assistenza sanitaria a manifestazioni', icona: 'i-bi:hospital-fill' },
  'corsi-popolazione': { etichetta: 'Corsi per la popolazione', icona: 'i-bi:mortarboard-fill' },
  'corsi-aziende': { etichetta: 'Corsi aziendali (D.Lgs 81/08)', icona: 'i-bi:briefcase-fill' },
  'supporto-sociale': { etichetta: 'Supporto sociale e assistenza', icona: 'i-bi:house-heart-fill' },
  'prenotazioni-e-informazioni': { etichetta: 'Prenotazioni e informazioni', icona: 'i-bi:calendar-check-fill' },

  'volontariato': { etichetta: 'Volontariato', icona: 'i-bi:person-plus-fill' },
  'diventa-volontario': { etichetta: 'Diventa volontario', icona: 'i-bi:person-plus-fill' },
  'corso-di-accesso': { etichetta: 'Come funziona il corso di accesso', icona: 'i-bi:info-circle-fill' },
  'percorso-formativo': { etichetta: 'Percorso formativo e qualifiche', icona: 'i-bi:mortarboard-fill' },
  'attivita-e-gruppi': { etichetta: 'Attività e gruppi di lavoro', icona: 'i-bi:people-fill' },

  'news': { etichetta: 'News & Eventi', icona: 'i-bi:newspaper' },
  'notizie': { etichetta: 'Notizie', icona: 'i-bi:newspaper' },
  'eventi': { etichetta: 'Eventi', icona: 'i-bi:calendar-event-fill' },
  'campagne': { etichetta: 'Campagne di sensibilizzazione', icona: 'i-bi:megaphone-fill' },

  'faq': { etichetta: 'FAQ', icona: 'i-bi:question-circle-fill' },
  'servizi-e-trasporti': { etichetta: 'Trasporti e Servizi Sanitari', icona: 'i-bi:truck-front-fill' },
  'corsi-formazione': { etichetta: 'Corsi di Formazione', icona: 'i-bi:mortarboard-fill' },
  'donazioni': { etichetta: 'Donazioni e 5x1000', icona: 'i-bi:piggy-bank-fill' },

  'dona': { etichetta: 'Dona ora', icona: 'i-bi:heart-fill' },
  'contatti': { etichetta: 'Contatti', icona: 'i-bi:envelope-fill' }
}

const categorieNonCliccabili = ['chi-siamo', 'cosa-facciamo', 'servizi', 'volontariato', 'news', 'faq']

const percorsiBreadcrumb = computed(() => {
  if (route.path === '/') return []

  const segmenti = route.path.split('/').filter(Boolean)
  let accumulatoreUrl = ''

  return segmenti.map((segmento) => {
    accumulatoreUrl += `/${segmento}`
    
    const configurazioneVoce = dizionarioEtichette[segmento]
    const etichettaFormattata = segmento
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return {
      etichetta: configurazioneVoce ? configurazioneVoce.etichetta : etichettaFormattata,
      icona: configurazioneVoce ? configurazioneVoce.icona : 'i-bi:folder-fill',
      url: accumulatoreUrl,
      cliccabile: !categorieNonCliccabili.includes(segmento)
    }
  })
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (percorsiBreadcrumb.value.length === 0) return ''

        const baseUrl = requestUrl.origin

        const itemListElement = [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`
          },
          ...percorsiBreadcrumb.value.map((voce, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: voce.etichetta,
            item: `${baseUrl}${voce.url}`
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
