<template>
  <section class="hero-wrapper bg-danger text-white py-5">
    <div class="container py-lg-4">
      <div class="row align-items-center g-5">
        <!-- COLONNA TESTO -->
        <div class="col-12 col-lg-6">
          <!-- BADGE (Se presente per la pagina corrente) -->
          <div v-if="contenutoCorrente.badge" class="mb-3">
            <span class="badge bg-white bg-opacity-20 text-danger px-3 py-2 rounded-pill fw-semibold border border-white border-opacity-25 fs-6">
              <i v-if="contenutoCorrente.badgeIcona" :class="[contenutoCorrente.badgeIcona, 'me-2']"></i>
              {{ contenutoCorrente.badge }}
            </span>
          </div>

          <!-- TITOLO E SOTTOTITOLO -->
          <h1 class="display-4 fw-bold text-white lh-sm mb-3">
            {{ contenutoCorrente.titolo }}
          </h1>

          <p class="lead text-white text-opacity-85 mb-4 fs-5">
            {{ contenutoCorrente.descrizione }}
          </p>

          <!-- PULSANTI D'AZIONE -->
          <div class="d-flex flex-column flex-sm-row gap-3">
            <!-- Pulsante Principale -->
            <NuxtLink
              v-if="contenutoCorrente.ctaPrincipale"
              :to="contenutoCorrente.ctaPrincipale.url"
              class="btn btn-light text-danger btn-lg px-4 py-3 shadow-sm d-inline-flex align-items-center justify-content-center fw-bold"
            >
              <i v-if="contenutoCorrente.ctaPrincipale.icona" :class="[contenutoCorrente.ctaPrincipale.icona, 'me-2 fs-5']"></i>
              {{ contenutoCorrente.ctaPrincipale.label }}
            </NuxtLink>

            <!-- Pulsante Secondario -->
            <NuxtLink
              v-if="contenutoCorrente.ctaSecondaria"
              :to="contenutoCorrente.ctaSecondaria.url"
              class="btn btn-outline-light btn-lg px-4 py-3 shadow-sm d-inline-flex align-items-center justify-content-center fw-semibold"
            >
              <i v-if="contenutoCorrente.ctaSecondaria.icona" :class="[contenutoCorrente.ctaSecondaria.icona, 'me-2 fs-5']"></i>
              {{ contenutoCorrente.ctaSecondaria.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- COLONNA IMMAGINE -->
        <div class="col-12 col-lg-6">
          <div class="hero-image-container position-relative">
            <div class="image-wrapper rounded-4 overflow-hidden shadow-lg border border-white border-opacity-25">
              <NuxtImg
                :src="contenutoCorrente.immagine"
                :alt="contenutoCorrente.altImmagine || contenutoCorrente.titolo"
                class="img-fluid w-100 object-fit-cover"
                sizes="sm:100vw md:100vw lg:50vw"
                style="min-height: 380px; max-height: 480px"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

// Mappa dei contenuti per ogni percorso del sito
const contenutiPagine: Record<string, any> = {
  // Home Page
  '/': {
    badge: 'Emergenza & Soccorso 24/7',
    badgeIcona: 'bi bi-heart-pulse-fill',
    titolo: 'Al servizio della comunità, ogni giorno.',
    descrizione: 'La Croce Rossa Italiana - Comitato di Rubiera è al tuo fianco con servizi di trasporto sanitario, assistenza sociale e interventi di emergenza.',
    immagine: 'https://picsum.photos/id/1025/1200/800',
    altImmagine: 'Volontari Croce Rossa Rubiera',
    ctaPrincipale: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario', icona: 'bi bi-person-plus-fill' },
    ctaSecondaria: { label: 'Richiedi un trasporto', url: '/servizi/richiedi-trasporto', icona: 'bi bi-truck' }
  },

  // Chi Siamo - Il Comitato
  '/chi-siamo/il-comitato': {
    badge: 'La Nostra Storia',
    badgeIcona: 'bi bi-building-fill',
    titolo: 'Il Comitato di Rubiera',
    descrizione: 'Scopri chi siamo, i nostri valori fondamentali e come operiamo sul territorio per offrire supporto quotidiano a chi ne ha più bisogno.',
    immagine: 'https://picsum.photos/id/1018/1200/800',
    altImmagine: 'Sede Croce Rossa Rubiera',
    ctaPrincipale: { label: 'I Nostri Principi', url: '/chi-siamo/principi-e-valori', icona: 'bi bi-heart-fill' }
  },

  // Chi Siamo - Organizzazione e Governance
  '/chi-siamo/organizzazione': {
    badge: 'Trasparenza & Struttura',
    badgeIcona: 'bi bi-diagram-3-fill',
    titolo: 'Organizzazione e Governance',
    descrizione: 'La struttura organizzativa, il Consiglio Direttivo e gli organi di gestione che guidano le attività della Croce Rossa Italiana - Comitato di Rubiera.',
    immagine: 'https://picsum.photos/id/1069/1200/800',
    altImmagine: 'Organizzazione e Governance del Comitato',
    ctaPrincipale: { label: 'Trasparenza e Atti', url: '/chi-siamo/trasparenza', icona: 'bi bi-file-earmark-text-fill' },
    ctaSecondaria: { label: 'Il Comitato', url: '/chi-siamo/il-comitato', icona: 'bi bi-building-fill' }
  },

  // Servizi
  '/servizi/richiedi-trasporto': {
    badge: 'Servizio Sanitario',
    badgeIcona: 'bi bi-truck-front-fill',
    titolo: 'Richiedi un Trasporto Sanitario',
    descrizione: 'Organizziamo trasferimenti in ambulanza o con mezzi attrezzati per visite mediche, ricoveri, terapie ed esami specialistici.',
    immagine: 'https://picsum.photos/id/1070/1200/800',
    altImmagine: 'Ambulanza Croce Rossa',
    ctaPrincipale: { label: 'Prenota Ora', url: '/servizi/prenotazioni-e-informazioni', icona: 'bi bi-calendar-check-fill' },
    ctaSecondaria: { label: 'Consulta le FAQ', url: '/servizi/faq', icona: 'bi bi-question-circle-fill' }
  },

  // Volontariato
  '/volontariato/diventa-volontario': {
    badge: 'Unisciti a Noi',
    badgeIcona: 'bi bi-people-fill',
    titolo: 'Metti il tuo tempo al servizio degli altri',
    descrizione: 'Entra a far parte della famiglia della Croce Rossa. Offriamo corsi di formazione gratuiti per prepararti a ogni tipo di attività.',
    immagine: 'https://picsum.photos/id/1005/1200/800',
    altImmagine: 'Gruppo Volontari',
    ctaPrincipale: { label: 'Iscriviti al Corso', url: '/volontariato/percorso-formativo', icona: 'bi bi-mortarboard-fill' }
  },

  // Contatti
  '/contatti': {
    badge: 'Siamo qui per te',
    badgeIcona: 'bi bi-geo-alt-fill',
    titolo: 'Contatta la sede di Rubiera',
    descrizione: 'Hai bisogno di informazioni, di richiedere un servizio o di parlare con i nostri uffici? Trovi tutti i nostri recapiti qui sotto.',
    immagine: 'https://picsum.photos/id/1011/1200/800',
    altImmagine: 'Contatti e centralino',
    ctaPrincipale: { label: 'Dove Siamo', url: '/chi-siamo/dove-siamo', icona: 'bi bi-signpost-2-fill' }
  }
}

// Fallback generico se la rotta non è presente nella mappa
const contenutoDefault = {
  badge: 'Croce Rossa Italiana',
  badgeIcona: 'bi bi-heart-fill',
  titolo: 'Comitato di Rubiera',
  descrizione: 'Al servizio delle persone e della comunità attraverso assistenza, soccorso e prevenzione.',
  immagine: 'https://picsum.photos/id/1040/1200/800',
  altImmagine: 'Croce Rossa Italiana Rubiera',
  ctaPrincipale: { label: 'Torna alla Home', url: '/', icona: 'bi bi-house-fill' }
}

// Seleziona il contenuto corretto in base all'URL attivo
const contenutoCorrente = computed(() => {
  return contenutiPagine[route.path] || contenutoDefault
})
</script>

<style scoped>
.hero-wrapper {
  overflow: hidden;
}

.object-fit-cover {
  object-fit: cover;
}
</style>