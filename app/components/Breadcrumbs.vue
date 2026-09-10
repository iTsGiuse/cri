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
              <i class="bi bi-house-door-fill me-1" aria-hidden="true"></i>
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
              <i :class="[voce.icona, 'me-1']" aria-hidden="true"></i>
              <span>{{ voce.etichetta }}</span>
            </span>

            <NuxtLink
              v-else
              :to="voce.url"
              class="text-white text-opacity-75 text-opacity-100-hover text-decoration-none text-nowrap d-inline-flex align-items-center"
            >
              <i :class="[voce.icona, 'me-1']" aria-hidden="true"></i>
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
  'chi-siamo': { etichetta: 'Chi siamo', icona: 'bi bi-people-fill' },
  'il-comitato': { etichetta: 'Il Comitato', icona: 'bi bi-building-fill' },
  'storia': { etichetta: 'La nostra storia', icona: 'bi bi-clock-history' },
  'organizzazione': { etichetta: 'Organizzazione e governance', icona: 'bi bi-diagram-3-fill' },
  'principi-e-valori': { etichetta: 'Principi e valori', icona: 'bi bi-heart-fill' },
  'trasparenza': { etichetta: 'Trasparenza e documenti', icona: 'bi bi-file-earmark-text-fill' },
  'sede-e-contatti': { etichetta: 'Sede e contatti', icona: 'bi bi-geo-alt-fill' },

  'cosa-facciamo': { etichetta: 'Cosa facciamo', icona: 'bi bi-activity' },
  'salute': { etichetta: 'Salute e Prevenzione', icona: 'bi bi-heart-pulse-fill' },
  'sociale': { etichetta: 'Sociale e Inclusione', icona: 'bi bi-people-fill' },
  'protezione-civile': { etichetta: 'Emergenza e Protezione Civile', icona: 'bi bi-shield-fill-check' },
  'diritto-umanitario': { etichetta: 'Principi e Diritto Umanitario', icona: 'bi bi-book-fill' },
  'giovani': { etichetta: 'Giovani', icona: 'bi bi-person-hearts' },
  'sviluppo': { etichetta: 'Sviluppo e Comunicazione', icona: 'bi bi-graph-up-arrow' },

  'servizi': { etichetta: 'Servizi', icona: 'bi bi-grid-fill' },
  'emergenza-118': { etichetta: 'Emergenza e Soccorso 118 / 112', icona: 'bi bi-exclamation-triangle-fill' },
  'richiedi-trasporto': { etichetta: 'Richiedi un trasporto sanitario', icona: 'bi bi-truck-front-fill' },
  'assistenza-eventi': { etichetta: 'Assistenza sanitaria a manifestazioni', icona: 'bi bi-hospital-fill' },
  'corsi-popolazione': { etichetta: 'Corsi per la popolazione', icona: 'bi bi-mortarboard-fill' },
  'corsi-aziende': { etichetta: 'Corsi aziendali (D.Lgs 81/08)', icona: 'bi bi-briefcase-fill' },
  'supporto-sociale': { etichetta: 'Supporto sociale e assistenza', icona: 'bi bi-house-heart-fill' },
  'prenotazioni-e-informazioni': { etichetta: 'Prenotazioni e informazioni', icona: 'bi bi-calendar-check-fill' },

  'volontariato': { etichetta: 'Volontariato', icona: 'bi bi-person-plus-fill' },
  'diventa-volontario': { etichetta: 'Diventa volontario', icona: 'bi bi-person-plus-fill' },
  'corso-di-accesso': { etichetta: 'Come funziona il corso di accesso', icona: 'bi bi-info-circle-fill' },
  'percorso-formativo': { etichetta: 'Percorso formativo e qualifiche', icona: 'bi bi-mortarboard-fill' },
  'attivita-e-gruppi': { etichetta: 'Attività e gruppi di lavoro', icona: 'bi bi-people-fill' },

  'news': { etichetta: 'News & Eventi', icona: 'bi bi-newspaper' },
  'notizie': { etichetta: 'Notizie', icona: 'bi bi-newspaper' },
  'eventi': { etichetta: 'Eventi', icona: 'bi bi-calendar-event-fill' },
  'campagne': { etichetta: 'Campagne di sensibilizzazione', icona: 'bi bi-megaphone-fill' },

  'faq': { etichetta: 'FAQ', icona: 'bi bi-question-circle-fill' },
  'servizi-e-trasporti': { etichetta: 'Trasporti e Servizi Sanitari', icona: 'bi bi-truck-front-fill' },
  'corsi-formazione': { etichetta: 'Corsi di Formazione', icona: 'bi bi-mortarboard-fill' },
  'donazioni': { etichetta: 'Donazioni e 5x1000', icona: 'bi bi-piggy-bank-fill' },

  'dona': { etichetta: 'Dona ora', icona: 'bi bi-heart-fill' },
  'contatti': { etichetta: 'Contatti', icona: 'bi bi-envelope-fill' }
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
      icona: configurazioneVoce ? configurazioneVoce.icona : 'bi bi-folder-fill',
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