<template>
  <div
    class="min-vh-100 w-100 position-fixed top-0 start-0 bg-danger text-white loading-screen overflow-hidden"
    role="status"
    aria-live="polite"
    aria-label="Caricamento in corso"
  >
    <div class="container min-vh-100 d-flex align-items-center justify-content-center py-4">
      <div class="row w-100 justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-center d-flex flex-column align-items-center">
          
          <!-- Logo -->
          <div class="mb-3 logo-container">
            <NuxtImg
              :src="organizationConfig.logo.imageUrl"
              :alt="siteConfig.name"
              class="rounded-circle bg-white shadow mb-2 object-fit-cover p-1 responsive-logo"
            />
          </div>

          <!-- Titolo -->
          <h1 class="fw-bold fs-4 fs-md-3 lh-sm mb-1 px-2">
            {{ siteConfig.name }}
          </h1>

          <!-- Descrizione -->
          <p
            v-if="siteConfig.description"
            class="text-white-75 small mb-4 px-2 px-sm-3 my-2 my-sm-3 fs-7 fs-sm-6"
          >
            {{ siteConfig.description }}
          </p>

          <!-- Indicatore di Caricamento -->
          <div class="mt-3 d-inline-flex align-items-center justify-content-center gap-2 gap-sm-3 bg-white bg-opacity-10 rounded-pill px-3 px-sm-4 py-2 border border-white border-opacity-25 shadow-sm max-w-content">
            <div
              class="spinner-border spinner-border-sm text-white flex-shrink-0"
              role="status"
            >
              <span class="visually-hidden">Caricamento...</span>
            </div>
            <span class="fw-semibold text-white tracking-wider fs-7 fs-sm-6 text-nowrap">
              Caricamento in corso...
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { siteConfig, organizationConfig } from '~/data/config'

const config = useRuntimeConfig()
const siteDescription = computed(
  () => config.public?.siteDescription || ''
)
</script>

<style scoped>
.loading-screen {
  z-index: 9999;
}

.max-w-content {
  max-width: 90%;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

/* Gestione responsive del Logo */
.responsive-logo {
  width: 70px;
  height: 70px;
}

@media (min-width: 576px) {
  .responsive-logo {
    width: 90px;
    height: 90px;
  }
}

/* Utility per font small su mobile */
.fs-7 {
  font-size: 0.875rem;
}

.logo-container {
  animation: pulse-subtle 2s infinite ease-in-out;
}

@keyframes pulse-subtle {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>