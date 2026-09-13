<template>
  <div class="min-vh-100 d-flex flex-column bg-danger text-white">

    <header class="container py-4 text-center">
      <NuxtLink
        to="/"
        class="d-inline-flex flex-column align-items-center text-white text-decoration-none focus-ring focus-ring-light rounded-3 p-2 mx-auto"
      >
        <NuxtImg
          :src="errorPage.logo.imageUrl"
          :alt="errorPage.logo.imageAlt"
          :width="errorPage.logo.width"
          :height="errorPage.logo.height"
          class="rounded-circle bg-white shadow-sm mb-2 object-fit-cover"
        />

        <span class="fw-bold fs-4 text-center lh-sm">
          {{ errorPage.heading.organization }}
        </span>

        <small class="text-white-50 fs-6">
          {{ errorPage.heading.committee }}
        </small>
      </NuxtLink>
    </header>

    <main class="container flex-grow-1 d-flex align-items-center py-4 py-lg-5">
      <div class="row align-items-center g-4 g-lg-5 w-100 mx-auto">

        <div class="col-12 col-lg-7 text-center text-lg-start">
          <button
            type="button"
            class="btn btn-light text-danger fw-bold px-4 py-3 shadow-sm d-inline-flex align-items-center gap-2 mb-4 mb-lg-5 justify-content-center"
            @click="goHome"
          >
            <Icon
              :name="errorPage.homeButton.icon"
              aria-hidden="true"
            ></Icon>

            <span>
              {{ errorPage.homeButton.label }}
            </span>
          </button>

          <div class="pe-lg-4">

            <div class="mb-2">
              <span
                class="text-uppercase tracking-wider fw-semibold text-white-75 fs-5"
              >
                {{ errorPage.errorLabel }}
              </span>
            </div>

            <h1 class="display-5 fw-bold mb-4 mb-lg-5">
              {{ errorContent.message }}
            </h1>

            <div
              v-if="activeSocialLinks.length"
              class="border-top border-white border-opacity-25 pt-4"
            >
              <p class="small fst-italic text-white-75 mb-3">
                {{ errorPage.socialIntro }}
              </p>

              <div
                class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
              >
                <a
                  v-for="social in activeSocialLinks"
                  :key="social.name"
                  :href="social.url"
                  :aria-label="social.name"
                  :title="social.name"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline-light fw-semibold d-inline-flex align-items-center gap-2 rounded-pill px-3"
                >
                  <Icon :name="social.icon" aria-hidden="true"></Icon>

                  <span>
                    {{ social.name }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-5">
          <div class="bg-white text-dark rounded-4 shadow-lg p-4 p-md-5">

            <div class="d-flex align-items-center gap-3 mb-4">
              <div
                class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                :style="{
                  width: `${errorPage.helpBox.iconSize}px`,
                  height: `${errorPage.helpBox.iconSize}px`,
                }"
              >
                <Icon
                  :name="errorPage.helpBox.icon"
                  aria-hidden="true"
                ></Icon>
              </div>

              <div>
                <h2 class="h5 fw-bold mb-0">
                  {{ errorPage.helpBox.title }}
                </h2>

                <p class="text-secondary small mb-0">
                  {{ errorPage.helpBox.subtitle }}
                </p>
              </div>
            </div>

            <div class="d-flex flex-column gap-3">

              <a
                :href="`tel:${errorPage.contacts.emergency.value}`"
                class="text-decoration-none text-dark d-block"
              >
                <div
                  class="border border-danger border-2 rounded-3 p-3 bg-danger-subtle bg-opacity-25 shadow-sm text-reset"
                >
                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      :style="{
                        width: `${errorPage.contacts.emergency.iconSize}px`,
                        height: `${errorPage.contacts.emergency.iconSize}px`,
                      }"
                    >
                      <Icon
                        :name="errorPage.contacts.emergency.icon"
                        aria-hidden="true"
                      ></Icon>
                    </div>

                    <div class="flex-grow-1">
                      <small
                        class="text-danger fw-semibold d-block text-uppercase"
                        :style="{
                          fontSize: errorPage.contacts.emergency.labelSize,
                        }"
                      >
                        {{ errorPage.contacts.emergency.label }}
                      </small>

                      <span class="fw-bold fs-3 text-danger lh-1">
                        {{ errorPage.contacts.emergency.value }}
                      </span>
                    </div>

                    <Icon
                      :name="errorPage.contacts.emergency.arrowIcon"
                      aria-hidden="true"
                    ></Icon>
                  </div>
                </div>
              </a>

              <a
                :href="errorPage.contacts.address.mapsUrl"
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
                        width: `${errorPage.contacts.address.iconSize}px`,
                        height: `${errorPage.contacts.address.iconSize}px`,
                      }"
                    >
                      <Icon
                        :name="errorPage.contacts.address.icon"
                        aria-hidden="true"
                      ></Icon>
                    </div>

                    <div class="flex-grow-1">
                      <small
                        class="text-secondary d-block mb-1"
                        :style="{
                          fontSize: errorPage.contacts.address.labelSize,
                        }"
                      >
                        {{ errorPage.contacts.address.label }}
                      </small>

                      <span class="fw-semibold d-block text-body lh-sm">
                        {{ errorPage.contacts.address.value }}
                      </span>
                    </div>

                    <Icon
                      :name="errorPage.contacts.address.arrowIcon"
                      aria-hidden="true"
                    ></Icon>
                  </div>
                </div>
              </a>

              <a
                :href="`tel:${errorPage.contacts.phone.value}`"
                class="text-decoration-none text-dark d-block"
              >
                <div
                  class="border rounded-3 p-3 bg-light-subtle shadow-sm text-reset"
                >
                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      :style="{
                        width: `${errorPage.contacts.phone.iconSize}px`,
                        height: `${errorPage.contacts.phone.iconSize}px`,
                      }"
                    >
                      <Icon
                        :name="errorPage.contacts.phone.icon"
                        aria-hidden="true"
                      ></Icon>
                    </div>

                    <div class="flex-grow-1">
                      <small
                        class="text-secondary d-block mb-1"
                        :style="{
                          fontSize: errorPage.contacts.phone.labelSize,
                        }"
                      >
                        {{ errorPage.contacts.phone.label }}
                      </small>

                      <span class="fw-bold fs-5 text-body">
                        {{ errorPage.contacts.phone.displayValue }}
                      </span>
                    </div>

                    <Icon
                      :name="errorPage.contacts.phone.arrowIcon"
                      aria-hidden="true"
                    ></Icon>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </main>

    <footer class="container py-3 py-md-4">
      <div class="border-top border-white border-opacity-25 pt-3">
        <div
          class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-center text-sm-start"
        >
          <small class="text-white-75">
            &copy; {{ currentYear }}
            {{ errorPage.copyright }}
          </small>

          <small class="text-white-75 fw-semibold">
            {{ errorPage.motto }}
          </small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import {
  activeSocialLinks,
  contactConfig,
  organizationConfig,
} from '~/data/config'

interface ErrorContent {
  message: string
}

const props = defineProps<{
  error: NuxtError
}>()

const currentYear = new Date().getFullYear()

const errorPage = {
  motto: 'Uniti per l’Umanità',

  logo: {
    imageUrl: organizationConfig.logo.imageUrl,
    imageAlt: organizationConfig.name,
    width: 72,
    height: 72,
  },

  heading: {
    organization: organizationConfig.name,
    committee: organizationConfig.committee,
  },

  homeButton: {
    label: 'Torna al sito',
    icon: 'i-bi:arrow-left',
  },

  errorLabel: 'Errore',

  socialIntro: 'Seguici e resta aggiornato sulle nostre attività',

  helpBox: {
    title: 'Contatti utili',
    subtitle: 'Siamo a tua disposizione',
    icon: 'i-bi:telephone-fill',
    iconSize: 48,
  },

  contacts: {
    emergency: {
      label: 'Emergenze sanitarie',
      value: contactConfig.emergencyNumber,
      icon: 'i-bi:heart-pulse-fill',
      arrowIcon: 'i-bi:arrow-right',
      iconSize: 44,
      labelSize: '0.75rem',
    },

    address: {
      label: 'Sede',
      value: contactConfig.address.label,
      mapsUrl: contactConfig.address.mapsUrl,
      icon: 'i-bi:geo-alt-fill',
      arrowIcon: 'i-bi:box-arrow-up-right',
      iconSize: 44,
      labelSize: '0.8rem',
    },

    phone: {
      label: 'Telefono',
      value: contactConfig.phone.value,
      displayValue: contactConfig.phone.label,
      icon: 'i-bi:telephone-fill',
      arrowIcon: 'i-bi:arrow-right',
      iconSize: 44,
      labelSize: '0.8rem',
    },
  },

  messagesByStatus: {
    403: {
      message:
        'Non si dispone delle autorizzazioni necessarie per accedere a questa risorsa.',
    },
    404: {
      message: 'La pagina richiesta non è stata trovata.',
    },
    500: {
      message: 'Si è verificato un problema imprevisto del server.',
    },
  } satisfies Record<number, ErrorContent>,

  copyright: organizationConfig.legalName,
}

const statusCode = computed(
  () => props.error?.statusCode || 500
)

const errorContent = computed<ErrorContent>(() => {
  if (statusCode.value === 404) {
    return errorPage.messagesByStatus[404]
  }

  if (statusCode.value === 403) {
    return errorPage.messagesByStatus[403]
  }

  return errorPage.messagesByStatus[500]
})

const goHome = async () => {
  await clearError({
    redirect: '/',
  })
}
</script>
