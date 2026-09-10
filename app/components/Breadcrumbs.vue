<template>
  <nav
    v-if="percorsiBreadcrumb.length > 0"
    aria-label="breadcrumb"
    class="bg-danger py-3 px-3"
  >
    <div class="container d-flex justify-content-start mt-3">
      <!-- PILLOLA STILE BADGE CON SEPARATORI BIANCHI (PURE BOOTSTRAP) -->
      <div class="d-inline-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 border border-white border-opacity-25 shadow-sm overflow-hidden">
        <ul class="list-unstyled mb-0 small d-flex align-items-center flex-nowrap">
          <!-- LINK HOME -->
          <li class="d-inline-flex align-items-center">
            <NuxtLink
              to="/"
              class="text-white text-opacity-75 text-opacity-100-hover text-decoration-none d-inline-flex align-items-center"
            >
              <i class="bi bi-house-door-fill me-1" aria-hidden="true"></i>
              <span>Home</span>
            </NuxtLink>
          </li>

          <!-- VOCI DINAMICHE CON SEPARATORE BIANCO E ICONA -->
          <li
            v-for="(voce, index) in percorsiBreadcrumb"
            :key="voce.url"
            class="d-inline-flex align-items-center"
          >
            <!-- Separatore / bianco e visibile -->
            <span class="text-white opacity-75 mx-2 user-select-none" aria-hidden="true">/</span>

            <!-- Ultimo elemento (Pagina Corrente) -->
            <span
              v-if="index === percorsiBreadcrumb.length - 1"
              class="fw-semibold text-white text-nowrap d-inline-flex align-items-center"
              aria-current="page"
            >
              <i :class="[voce.icona, 'me-1']" aria-hidden="true"></i>
              <span>{{ voce.etichetta }}</span>
            </span>

            <!-- Passaggio intermedio -->
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

type DatiVoce = {
  etichetta: string
  icona: string
}

// Mappa con etichetta e icona Bootstrap dedicata per ciascun segmento
const dizionarioEtichette: Record<string, DatiVoce> = {
  'chi-siamo': { etichetta: 'Chi siamo', icona: 'bi bi-people-fill' },
  'il-comitato': { etichetta: 'Il Comitato', icona: 'bi bi-building' },
  'storia': { etichetta: 'La nostra storia', icona: 'bi bi-journal-bookmark-fill' },
  'organizzazione': { etichetta: 'Organizzazione e governance', icona: 'bi bi-diagram-3-fill' },
  'principi-e-valori': { etichetta: 'Principi e valori', icona: 'bi bi-heart-fill' },
  'trasparenza': { etichetta: 'Trasparenza e documenti', icona: 'bi bi-file-earmark-text-fill' },
  'dove-siamo': { etichetta: 'Dove siamo', icona: 'bi bi-geo-alt-fill' },
  'cosa-facciamo': { etichetta: 'Cosa facciamo', icona: 'bi bi-activity' },
  'emergenza-e-soccorso': { etichetta: 'Emergenza e soccorso', icona: 'bi bi-telephone-inbound-fill' },
  'trasporto-sanitario': { etichetta: 'Trasporto sanitario', icona: 'bi bi-truck-front-fill' },
  'assistenza-sociale': { etichetta: 'Assistenza sociale', icona: 'bi bi-hand-thumbs-up-fill' },
  'inclusione-e-supporto': { etichetta: 'Inclusione e supporto', icona: 'bi bi-person-heart' },
  'giovani': { etichetta: 'Giovani', icona: 'bi bi-emoji-smile-fill' },
  'educazione-e-prevenzione': { etichetta: 'Educazione e prevenzione', icona: 'bi bi-shield-check' },
  'protezione-civile': { etichetta: 'Protezione civile', icona: 'bi bi-shield-fill-exclamation' },
  'attivita-per-la-comunita': { etichetta: 'Attività per la comunità', icona: 'bi bi-globe-europe-africa' },
  'servizi': { etichetta: 'Servizi', icona: 'bi bi-grid-fill' },
  'richiedi-trasporto': { etichetta: 'Richiedi un trasporto', icona: 'bi bi-calendar-plus-fill' },
  'corsi': { etichetta: 'Corsi', icona: 'bi bi-mortarboard-fill' },
  'servizi-sanitari': { etichetta: 'Servizi sanitari', icona: 'bi bi-bandaid-fill' },
  'assistenza': { etichetta: 'Assistenza', icona: 'bi bi-life-preserver' },
  'prenotazioni-e-informazioni': { etichetta: 'Prenotazioni e informazioni', icona: 'bi bi-info-circle-fill' },
  'faq': { etichetta: 'FAQ', icona: 'bi bi-question-circle-fill' },
  'volontariato': { etichetta: 'Volontariato', icona: 'bi bi-person-plus-fill' },
  'diventa-volontario': { etichetta: 'Diventa volontario', icona: 'bi bi-person-badge-fill' },
  'come-funziona': { etichetta: 'Come funziona', icona: 'bi bi-gear-wide-connected' },
  'percorso-formativo': { etichetta: 'Percorso formativo', icona: 'bi bi-book-half' },
  'attivita-e-gruppi': { etichetta: 'Attività e gruppi', icona: 'bi bi-people' },
  'diventa-socio': { etichetta: 'Diventa socio', icona: 'bi bi-card-heading' },
  'notizie': { etichetta: 'Notizie', icona: 'bi bi-newspaper' },
  'eventi': { etichetta: 'Eventi', icona: 'bi bi-calendar-event-fill' },
  'campagne': { etichetta: 'Campagne', icona: 'bi bi-megaphone-fill' },
  'comunicati': { etichetta: 'Comunicati', icona: 'bi bi-broadcast' },
  'contatti': { etichetta: 'Contatti', icona: 'bi bi-envelope-fill' },
  'sede': { etichetta: 'Sede', icona: 'bi bi-house-door' },
  'orari': { etichetta: 'Orari', icona: 'bi bi-clock-fill' },
  'come-raggiungerci': { etichetta: 'Come raggiungerci', icona: 'bi bi-signpost-split-fill' },
  'numeri-utili': { etichetta: 'Numeri utili', icona: 'bi bi-telephone-fill' },
  'social': { etichetta: 'Social', icona: 'bi bi-share-fill' },
  'dona': { etichetta: 'Dona', icona: 'bi bi-heart-pulse-fill' }
}

// Genera i segmenti del breadcrumb analizzando il percorso dell'URL
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
      url: accumulatoreUrl
    }
  })
})

// Dati strutturati Schema.org per la SEO (BreadcrumbList)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (percorsiBreadcrumb.value.length === 0) return ''

        const itemListElement = [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://crocerossarubiera.it/'
          },
          ...percorsiBreadcrumb.value.map((voce, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: voce.etichetta,
            item: `https://crocerossarubiera.it${voce.url}`
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