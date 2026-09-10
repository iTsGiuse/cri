<template>
  <div class="min-vh-100 d-flex flex-column bg-danger text-white">
    <!-- Header -->
    <header class="container py-4 text-center">
      <NuxtLink
        to="/"
        class="d-inline-flex flex-column align-items-center text-white text-decoration-none focus-ring focus-ring-light rounded-3 p-2 mx-auto"
      >
        <NuxtImg
          :src="configVisuale.logo.percorso"
          :alt="configVisuale.logo.alt"
          :width="configVisuale.logo.larghezza"
          :height="configVisuale.logo.altezza"
          class="rounded-circle bg-white shadow-sm mb-2 object-fit-cover"
        />

        <span class="fw-bold fs-4 text-center lh-sm">
          {{ configVisuale.intestazione.ente }}
        </span>

        <small class="text-white-50 fs-6">
          {{ configVisuale.intestazione.comitato }}
        </small>
      </NuxtLink>
    </header>

    <!-- Main Content -->
    <main class="container flex-grow-1 d-flex align-items-center py-4 py-lg-5">
      <div class="row align-items-center g-4 g-lg-5 w-100 mx-auto">

        <!-- Sezione Sinistra -->
        <div class="col-12 col-lg-7 text-center text-lg-start">
          <button
            type="button"
            class="btn btn-light text-danger fw-bold px-4 py-3 shadow-sm d-inline-flex align-items-center gap-2 mb-4 mb-lg-5 justify-content-center"
            @click="gestisciHome"
          >
            <i
              :class="configVisuale.pulsanteHome.icona"
              aria-hidden="true"
            ></i>

            <span>
              {{ configVisuale.pulsanteHome.testo }}
            </span>
          </button>

          <div class="pe-lg-4">
            <!-- Dicitura errore -->
            <div class="mb-2">
              <span
                class="text-uppercase tracking-wider fw-semibold text-white-75 fs-5"
              >
                {{ configVisuale.errore.etichetta }}
              </span>
            </div>

            <!-- Motivo errore -->
            <h1 class="display-5 fw-bold mb-4 mb-lg-5">
              {{ contenutoErrore.motivo }}
            </h1>

            <!-- Social -->
            <div
              v-if="socialAttivi.length"
              class="border-top border-white border-opacity-25 pt-4"
            >
              <p class="small fst-italic text-white-75 mb-3">
                {{ configVisuale.sezioneSocialTesto }}
              </p>

              <div
                class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
              >
                <a
                  v-for="social in socialAttivi"
                  :key="social.etichetta"
                  :href="social.url"
                  :aria-label="social.etichetta"
                  :title="social.etichetta"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline-light d-inline-flex align-items-center gap-2 rounded-pill px-3 "
                >
                  <i :class="social.icona" aria-hidden="true"></i>

                  <span>
                    {{ social.etichetta }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sezione Destra -->
        <div class="col-12 col-lg-5">
          <div class="bg-white text-dark rounded-4 shadow-lg p-4 p-md-5">

            <!-- Titolo box -->
            <div class="d-flex align-items-center gap-3 mb-4">
              <div
                class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                :style="{
                  width: `${configVisuale.boxAiuto.iconaDimensione}px`,
                  height: `${configVisuale.boxAiuto.iconaDimensione}px`,
                }"
              >
                <i
                  :class="configVisuale.boxAiuto.icona"
                  aria-hidden="true"
                ></i>
              </div>

              <div>
                <h2 class="h5 fw-bold mb-0">
                  {{ configVisuale.boxAiuto.titolo }}
                </h2>

                <p class="text-secondary small mb-0">
                  {{ configVisuale.boxAiuto.sottotitolo }}
                </p>
              </div>
            </div>

            <div class="d-flex flex-column gap-3">

              <!-- Emergenza -->
              <a
                :href="`tel:${configVisuale.contatti.emergenza.numero}`"
                class="text-decoration-none text-dark d-block"
              >
                <div
                  class="border border-danger border-2 rounded-3 p-3 bg-danger-subtle bg-opacity-25 shadow-sm text-reset"
                >
                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      :style="{
                        width: `${configVisuale.contatti.emergenza.iconaDimensione}px`,
                        height: `${configVisuale.contatti.emergenza.iconaDimensione}px`,
                      }"
                    >
                      <i
                        :class="configVisuale.contatti.emergenza.icona"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div class="flex-grow-1">
                      <small
                        class="text-danger fw-bold d-block text-uppercase"
                        :style="{
                          fontSize: configVisuale.contatti.emergenza.etichettaDimensione,
                        }"
                      >
                        {{ configVisuale.contatti.emergenza.etichetta }}
                      </small>

                      <span class="fw-bolder fs-3 text-danger lh-1">
                        {{ configVisuale.contatti.emergenza.numero }}
                      </span>
                    </div>

                    <i
                      :class="configVisuale.contatti.emergenza.iconaFreccia"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </a>

              <!-- Indirizzo -->
              <a
                :href="configVisuale.contatti.indirizzo.urlMaps"
                target="_blank"
                rel="noopener noreferrer"
                class="text-decoration-none text-dark d-block"
              >
                <div
                  class="border rounded-3 p-3 bg-light-subtle shadow-sm text-reset"
                >
                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      :style="{
                        width: `${configVisuale.contatti.indirizzo.iconaDimensione}px`,
                        height: `${configVisuale.contatti.indirizzo.iconaDimensione}px`,
                      }"
                    >
                      <i
                        :class="configVisuale.contatti.indirizzo.icona"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div class="flex-grow-1">
                      <small
                        class="text-secondary d-block mb-1"
                        :style="{
                          fontSize: configVisuale.contatti.indirizzo.etichettaDimensione,
                        }"
                      >
                        {{ configVisuale.contatti.indirizzo.etichetta }}
                      </small>

                      <span class="fw-semibold d-block text-body lh-sm">
                        {{ configVisuale.contatti.indirizzo.testo }}
                      </span>
                    </div>

                    <i
                      :class="configVisuale.contatti.indirizzo.iconaFreccia"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </a>

              <!-- Telefono uffici -->
              <a
                :href="`tel:${configVisuale.contatti.telefonoUffici.numeroGrezzo}`"
                class="text-decoration-none text-dark d-block"
              >
                <div
                  class="border rounded-3 p-3 bg-light-subtle shadow-sm text-reset"
                >
                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      :style="{
                        width: `${configVisuale.contatti.telefonoUffici.iconaDimensione}px`,
                        height: `${configVisuale.contatti.telefonoUffici.iconaDimensione}px`,
                      }"
                    >
                      <i
                        :class="configVisuale.contatti.telefonoUffici.icona"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div class="flex-grow-1">
                      <small
                        class="text-secondary d-block mb-1"
                        :style="{
                          fontSize: configVisuale.contatti.telefonoUffici.etichettaDimensione,
                        }"
                      >
                        {{ configVisuale.contatti.telefonoUffici.etichetta }}
                      </small>

                      <span class="fw-bold fs-5 text-body">
                        {{ configVisuale.contatti.telefonoUffici.numeroVisualizzato }}
                      </span>
                    </div>

                    <i
                      :class="configVisuale.contatti.telefonoUffici.iconaFreccia"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="container py-3 py-md-4">
      <div class="border-top border-white border-opacity-25 pt-3">
        <div
          class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-center text-sm-start"
        >
          <small class="text-white-75">
            &copy; {{ annoCorrente }}
            {{ configVisuale.footer.copyright }}
          </small>

          <small class="text-white-75 fw-semibold">
            {{ configVisuale.motto }}
          </small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

interface ElementoSocial {
  etichetta: string
  icona: string
  url: string
}

interface DatiErrore {
  motivo: string
}

const props = defineProps<{
  error: NuxtError
}>()

const annoCorrente = new Date().getFullYear()

const configVisuale = {
  motto: 'Uniti per l’Umanità',

  logo: {
    percorso: '/images/logo.jpg',
    alt: 'Croce Rossa Italiana',
    larghezza: 72,
    altezza: 72,
  },

  intestazione: {
    ente: 'Croce Rossa Italiana',
    comitato: 'Comitato di Rubiera',
  },

  pulsanteHome: {
    testo: 'Torna al sito',
    icona: 'bi bi-arrow-left fs-5',
  },

  errore: {
    etichetta: 'Errore',
  },

  sezioneSocialTesto:
    'Seguici e resta aggiornato sulle nostre attività',

  boxAiuto: {
    titolo: 'Contatti utili',
    sottotitolo: 'Siamo a tua disposizione',
    icona: 'bi bi-telephone-fill fs-5',
    iconaDimensione: 48,
  },

  contatti: {
    emergenza: {
      etichetta: 'Emergenze sanitarie',
      numero: '118',
      icona: 'bi bi-heart-pulse-fill fs-5',
      iconaFreccia: 'bi bi-arrow-right text-danger fs-4',
      iconaDimensione: 44,
      etichettaDimensione: '0.75rem',
    },

    indirizzo: {
      etichetta: 'Sede',
      testo: 'Via Emilia Est, 12 - Rubiera (RE)',
      urlMaps:
        'https://www.google.com/maps/search/?api=1&query=Croce+Rossa+Italiana+Comitato+di+Rubiera',
      icona: 'bi bi-geo-alt-fill fs-5',
      iconaFreccia: 'bi bi-box-arrow-up-right text-secondary fs-6',
      iconaDimensione: 44,
      etichettaDimensione: '0.8rem',
    },

    telefonoUffici: {
      etichetta: 'Telefono',
      numeroGrezzo: '+390522626262',
      numeroVisualizzato: '0522 626262',
      icona: 'bi bi-telephone-fill fs-5',
      iconaFreccia: 'bi bi-arrow-right text-danger fs-5',
      iconaDimensione: 44,
      etichettaDimensione: '0.8rem',
    },
  },

  listaSocial: [
    {
      etichetta: 'Facebook',
      icona: 'bi bi-facebook',
      url: 'https://www.facebook.com/CRIRubiera',
    },
    {
      etichetta: 'Instagram',
      icona: 'bi bi-instagram',
      url: 'https://www.instagram.com/cri_rubiera',
    },
    {
      etichetta: 'YouTube',
      icona: 'bi bi-youtube',
      url: '',
    },
  ] satisfies ElementoSocial[],

  mappaErrori: {
    404: {
      motivo: 'La pagina richiesta non è stata trovata.',
    },

    403: {
      motivo:
        'Non si dispone delle autorizzazioni necessarie per accedere a questa risorsa.',
    },

    500: {
      motivo:
        'Si è verificato un problema imprevisto del server.',
    },
  },

  footer: {
    copyright:
      'Croce Rossa Italiana - Comitato di Rubiera ODV',
  },
}

const codiceStato = computed(
  () => props.error?.statusCode || 500
)

const contenutoErrore = computed<DatiErrore>(() => {
  if (codiceStato.value === 404) {
    return configVisuale.mappaErrori[404]
  }

  if (codiceStato.value === 403) {
    return configVisuale.mappaErrori[403]
  }

  return configVisuale.mappaErrori[500]
})

const socialAttivi = computed(() =>
  configVisuale.listaSocial.filter(
    (social) => social.url.trim().length > 0
  )
)

const gestisciHome = async () => {
  await clearError({
    redirect: '/',
  })
}
</script>
