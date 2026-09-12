<template>
  <nav
    v-if="breadcrumbTrail.length > 0"
    aria-label="breadcrumb"
    class="bg-danger py-3 "
  >
    <div
      class="container d-flex justify-content-start my-3 breadcrumb-wrapper"
    >
      <div
        class="breadcrumb-container d-inline-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 border border-white border-opacity-25 shadow-sm"
      >
        <ul
          class="list-unstyled mb-0 small d-flex align-items-center flex-nowrap overflow-x-auto scrollbar-nascosta"
        >
          <!-- HOME -->
          <li class="d-inline-flex align-items-center">
            <NuxtLink
              to="/"
              class="text-white text-decoration-none d-inline-flex align-items-center text-nowrap"
            >
              <Icon
                name="i-bi:house-door-fill"
                class="me-1"
                aria-hidden="true"
              />

              <span>Home</span>
            </NuxtLink>
          </li>

          <!-- BREADCRUMB -->
          <li
            v-for="(item, index) in breadcrumbTrail"
            :key="item.url"
            class="d-inline-flex align-items-center"
          >
            <span
              class="text-white opacity-75 mx-2 user-select-none"
              aria-hidden="true"
            >
              /
            </span>

            <!-- Voce non cliccabile / pagina corrente -->
            <span
              v-if="
                index === breadcrumbTrail.length - 1 ||
                !item.clickable
              "
              class="fw-semibold text-white text-nowrap d-inline-flex align-items-center"
              :class="{
                'opacity-75':
                  !item.clickable &&
                  index !== breadcrumbTrail.length - 1,
              }"
              :aria-current="
                index === breadcrumbTrail.length - 1
                  ? 'page'
                  : undefined
              "
            >
              <Icon
                :name="item.icon"
                class="me-1"
                aria-hidden="true"
              />

              <span>{{ item.label }}</span>
            </span>

            <!-- Voce cliccabile -->
            <NuxtLink
              v-else
              :to="item.url"
              class="text-white text-decoration-none text-nowrap d-inline-flex align-items-center"
            >
              <Icon
                :name="item.icon"
                class="me-1"
                aria-hidden="true"
              />

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

interface BreadcrumbLabel {
  label: string
  icon: string
}

const breadcrumbLabels: Record<string, BreadcrumbLabel> = {
  // =========================================================
  // CHI SIAMO
  // =========================================================
  'chi-siamo': {
    label: 'Chi siamo',
    icon: 'i-bi:people-fill',
  },

  'il-comitato': {
    label: 'Il Comitato',
    icon: 'i-bi:building-fill',
  },

  storia: {
    label: 'La nostra storia',
    icon: 'i-bi:clock-history',
  },

  organizzazione: {
    label: 'Organizzazione e governance',
    icon: 'i-bi:diagram-3-fill',
  },

  'principi-e-valori': {
    label: 'Principi e valori',
    icon: 'i-bi:heart-fill',
  },

  trasparenza: {
    label: 'Trasparenza e documenti',
    icon: 'i-bi:file-earmark-text-fill',
  },

  'sede-e-contatti': {
    label: 'Sede e contatti',
    icon: 'i-bi:geo-alt-fill',
  },

  // =========================================================
  // COSA FACCIAMO
  // =========================================================
  'cosa-facciamo': {
    label: 'Cosa facciamo',
    icon: 'i-bi:activity',
  },

  salute: {
    label: 'Salute e Prevenzione',
    icon: 'i-bi:heart-pulse-fill',
  },

  sociale: {
    label: 'Sociale e Inclusione',
    icon: 'i-bi:people-fill',
  },

  'protezione-civile': {
    label: 'Emergenza e Protezione Civile',
    icon: 'i-bi:shield-fill-check',
  },

  'diritto-umanitario': {
    label: 'Principi e Diritto Umanitario',
    icon: 'i-bi:book-fill',
  },

  giovani: {
    label: 'Giovani',
    icon: 'i-bi:person-hearts',
  },

  sviluppo: {
    label: 'Sviluppo e Comunicazione',
    icon: 'i-bi:graph-up-arrow',
  },

  // =========================================================
  // SERVIZI
  // =========================================================
  servizi: {
    label: 'Servizi',
    icon: 'i-bi:grid-fill',
  },

  'emergenza-118': {
    label: 'Emergenza e Soccorso 118 / 112',
    icon: 'i-bi:exclamation-triangle-fill',
  },

  'richiedi-trasporto': {
    label: 'Richiedi un trasporto sanitario',
    icon: 'i-bi:truck-front-fill',
  },

  'assistenza-eventi': {
    label: 'Assistenza sanitaria a manifestazioni',
    icon: 'i-bi:hospital-fill',
  },

  'corsi-popolazione': {
    label: 'Corsi per la popolazione',
    icon: 'i-bi:mortarboard-fill',
  },

  'corsi-aziende': {
    label: 'Corsi aziendali (D.Lgs 81/08)',
    icon: 'i-bi:briefcase-fill',
  },

  'supporto-sociale': {
    label: 'Supporto sociale e assistenza',
    icon: 'i-bi:house-heart-fill',
  },

  'prenotazioni-e-informazioni': {
    label: 'Prenotazioni e informazioni',
    icon: 'i-bi:calendar-check-fill',
  },

  // =========================================================
  // VOLONTARIATO
  // =========================================================
  volontariato: {
    label: 'Volontariato',
    icon: 'i-bi:person-plus-fill',
  },

  'diventa-volontario': {
    label: 'Diventa volontario',
    icon: 'i-bi:person-plus-fill',
  },

  'corso-di-accesso': {
    label: 'Come funziona il corso di accesso',
    icon: 'i-bi:info-circle-fill',
  },

  'percorso-formativo': {
    label: 'Percorso formativo e qualifiche',
    icon: 'i-bi:mortarboard-fill',
  },

  'attivita-e-gruppi': {
    label: 'Attività e gruppi di lavoro',
    icon: 'i-bi:people-fill',
  },

  // =========================================================
  // COMUNICAZIONI
  // =========================================================
  news: {
    label: 'News',
    icon: 'i-bi:newspaper',
  },

  eventi: {
    label: 'Eventi',
    icon: 'i-bi:calendar-event-fill',
  },

  campagne: {
    label: 'Campagne di sensibilizzazione',
    icon: 'i-bi:megaphone-fill',
  },

  // =========================================================
  // FAQ
  // =========================================================
  faq: {
    label: 'FAQ',
    icon: 'i-bi:question-circle-fill',
  },

  'servizi-e-trasporti': {
    label: 'Trasporti e Servizi Sanitari',
    icon: 'i-bi:truck-front-fill',
  },

  'corsi-formazione': {
    label: 'Corsi di Formazione',
    icon: 'i-bi:mortarboard-fill',
  },

  donazioni: {
    label: 'Donazioni e 5x1000',
    icon: 'i-bi:piggy-bank-fill',
  },

  // =========================================================
  // ALTRE PAGINE
  // =========================================================
  dona: {
    label: 'Dona ora',
    icon: 'i-bi:heart-fill',
  },

  contatti: {
    label: 'Contatti',
    icon: 'i-bi:envelope-fill',
  },
}

/**
 * Sezioni principali che non rappresentano una pagina
 * direttamente navigabile.
 *
 * News, Eventi e Campagne NON sono presenti qui:
 * quando sono nel mezzo del breadcrumb saranno quindi cliccabili.
 */
const nonClickableSegments = [
  'chi-siamo',
  'cosa-facciamo',
  'servizi',
  'volontariato',
  'faq',
]

const breadcrumbTrail = computed(() => {
  if (route.path === '/') {
    return []
  }

  const segments = route.path
    .split('/')
    .filter(Boolean)

  let currentPath = ''

  return segments.map((segment) => {
    currentPath += `/${segment}`

    const known = breadcrumbLabels[segment]

    const fallbackLabel = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return {
      label: known
        ? known.label
        : fallbackLabel,

      icon: known
        ? known.icon
        : 'i-bi:folder-fill',

      url: currentPath,

      clickable:
        !nonClickableSegments.includes(segment),
    }
  })
})

/**
 * Schema.org BreadcrumbList
 */
useHead({
  script: [
    {
      type: 'application/ld+json',

      children: computed(() => {
        if (breadcrumbTrail.value.length === 0) {
          return ''
        }

        const baseUrl = requestUrl.origin

        const itemListElement = [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`,
          },

          ...breadcrumbTrail.value.map(
            (item, index) => ({
              '@type': 'ListItem',
              position: index + 2,
              name: item.label,
              item: `${baseUrl}${item.url}`,
            }),
          ),
        ]

        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement,
        })
      }),
    },
  ],
})
</script>

<style scoped>
.scrollbar-nascosta {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-nascosta::-webkit-scrollbar {
  display: none;
}

.breadcrumb-wrapper {
  width: 100%;
  min-width: 0;
}

.breadcrumb-container {
  max-width: 100%;
  min-width: 0;
}

.breadcrumb-container ul {
  min-width: 0;
  max-width: 100%;
}

.breadcrumb-container a {
  transition: opacity 0.15s ease;
}

.breadcrumb-container a:hover {
  opacity: 0.8;
}

@media (max-width: 767.98px) {
  .breadcrumb-wrapper {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .breadcrumb-container {
    width: 100%;
    justify-content: flex-start;
  }

  .breadcrumb-container ul {
    width: 100%;
  }
}

@media (max-width: 575.98px) {
  .breadcrumb-wrapper {
    margin-top: 0.5rem !important;
  }

  .breadcrumb-container {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }
}
</style>