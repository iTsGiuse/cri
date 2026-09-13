<template>
  <section class="py-5 bg-light" id="comitato">
    <div class="container">

      <!-- 1. EMERGENZA IN PRIMO PIANO -->
      <div class="alert border-0 bg-danger text-white rounded-4 p-4 p-lg-4 mb-4 shadow">
        <div class="row align-items-center justify-content-between g-3">
          <div class="col-lg-8 d-flex align-items-center gap-3.5">
            <div class="bg-white text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 56px; height: 56px;">
              <Icon name="bi:heart-pulse-fill" class="fs-3" />
            </div>
            <div>
              <div class="d-flex align-items-center gap-2 mb-1 ms-2">
                <span class="badge bg-white text-danger fw-bold text-uppercase px-2.5 py-1 rounded-pill" style="font-size: 0.75rem;">Urgenza / Soccorso</span>
                <span class="text-white-50 small">Attivo 24/7</span>
              </div>
              <h2 class="h4 fw-bold mb-0 ms-2">
                Emergenza Sanitaria: 
                <NuxtLink :to="`tel:${contactConfig.emergencyNumber}`" class="text-white text-decoration-underline">{{ contactConfig.emergencyNumber }}</NuxtLink>
              </h2>
            </div>
          </div>
          <div class="col-lg-4 text-lg-end">
            <NuxtLink
              :to="`tel:${contactConfig.emergencyNumber}`"
              class="btn btn-white text-danger fw-bold rounded-pill px-4 py-3 w-100 w-lg-auto d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"
              style="background-color: #fff; color: var(--bs-danger);"
            >
              <Icon name="bi:telephone-fill" class="fs-4" />
              <span>Chiama Ora {{ contactConfig.emergencyNumber }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- 2. CORPO PRINCIPALE: CONTATTI + MAPPA -->
      <div class="row g-4">
        
        <!-- Colonna Sinistra: Contatti & Orari -->
        <div class="col-lg-5 d-flex flex-column gap-4">
          
          <div class="card border-0 rounded-4 shadow-sm p-4 bg-white d-flex flex-column justify-content-between h-100">
            <div>
              <!-- Header Card Info -->
              <div class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                <div>
                  <span class="text-muted small text-uppercase fw-semibold d-block">Contatti ufficiali</span>
                  <h3 class="h5 fw-bold text-dark mb-0">Sede e Riferimenti</h3>
                </div>
                <NuxtImg
                  :src="organizationConfig.logo.imageUrl"
                  :alt="organizationConfig.logo.imageAlt"
                  width="48"
                  height="48"
                  class="rounded-circle border object-fit-cover"
                />
              </div>

              <!-- Lista Azioni rapide (centrate verticalmente rispetto al testo) -->
              <div class="d-flex flex-column gap-3">
                
                <!-- Indirizzo / Sede -->
                <div class="d-flex gap-3 align-items-center">
                  <div class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 44px; height: 44px;">
                    <Icon name="bi:building" class="fs-5" />
                  </div>
                  <div>
                    <span class="text-muted small d-block">Sede Legale e Operativa</span>
                    <div class="fw-bold text-dark">{{ organizationConfig.legalName }}</div>
                    <div class="text-secondary small">{{ contactConfig.address.label }}</div>
                  </div>
                </div>

                <!-- Telefono -->
                <div class="d-flex gap-3 align-items-center">
                  <div class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 44px; height: 44px;">
                    <Icon name="bi:telephone-fill" class="fs-5" />
                  </div>
                  <div>
                    <span class="text-muted small d-block">Telefono Sede</span>
                    <NuxtLink :to="`tel:${contactConfig.phone.value}`" class="fw-bold text-dark text-decoration-none fs-5">
                      {{ contactConfig.phone.label }}
                    </NuxtLink>
                  </div>
                </div>

                <!-- Email & PEC -->
                <div class="d-flex gap-3 align-items-center">
                  <div class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 44px; height: 44px;">
                    <Icon name="bi:envelope-fill" class="fs-5" />
                  </div>
                  <div>
                    <span class="text-muted small d-block">Email & PEC</span>
                    <NuxtLink :to="`mailto:${contactConfig.email}`" class="fw-semibold text-dark text-decoration-none d-block">
                      {{ contactConfig.email }}
                    </NuxtLink>
                    <NuxtLink :to="`mailto:${contactConfig.pec}`" class="text-secondary small text-decoration-none">
                      PEC: {{ contactConfig.pec }}
                    </NuxtLink>
                  </div>
                </div>

              </div>

              <!-- Orari -->
              <div class="mt-4 pt-3 border-top">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <Icon name="bi:clock" class="text-danger fs-5" />
                  <span class="fw-bold text-dark small text-uppercase">Orari di Apertura</span>
                </div>
                <div class="d-flex justify-content-between small py-1 border-bottom border-light">
                  <span class="text-secondary">Lunedì – Venerdì</span>
                  <span class="fw-semibold text-dark">09:00 – 12:30 / 15:00 – 18:00</span>
                </div>
                <div class="d-flex justify-content-between small py-1 border-bottom border-light">
                  <span class="text-secondary">Sabato</span>
                  <span class="fw-semibold text-dark">Su appuntamento</span>
                </div>
                <div class="d-flex justify-content-between small pt-1">
                  <span class="text-secondary">Domenica</span>
                  <span class="fw-semibold text-dark">Chiuso</span>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-top d-flex flex-column gap-3">
              <div class="text-muted" style="font-size: 0.75rem; line-height: 1.4;">
                {{ legalInfo }}
              </div>
              <div class="d-flex align-items-center justify-content-between flex-wrap gap-2" v-if="activeSocialLinks.length > 0">
                <span class="fw-semibold text-dark small">Seguici sui canali ufficiali</span>
                <div class="d-flex gap-2">
                  <NuxtLink
                    v-for="social in activeSocialLinks"
                    :key="social.name"
                    :to="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-danger bg-danger text-white rounded-circle d-flex align-items-center justify-content-center shadow-2xs social-btn"
                    style="width: 38px; height: 38px;"
                    :title="social.name"
                  >
                    <Icon :name="social.icon" class="fs-5" />
                  </NuxtLink>
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Colonna Destra: Mappa interattiva -->
        <div class="col-lg-7 d-flex flex-column">
          <div class="card border-0 rounded-4 shadow-sm overflow-hidden h-100 d-flex flex-column bg-white">
            <!-- Intestazione mappa più alta e generosa -->
            <div class="px-4 py-4 bg-white border-bottom d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-2.5">
                <div class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;">
                  <Icon name="bi:geo-alt-fill" class="fs-5" />
                </div>
                <span class="fw-bold text-dark fs-6 ms-3">Dove trovarci</span>
              </div>
              <NuxtLink
                :to="contactConfig.address.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-danger rounded-pill px-3.5 py-2 small fw-semibold d-inline-flex align-items-center gap-2 shadow-2xs"
              >
                <span>Apri indicazioni stradali</span>
                <Icon name="bi:arrow-up-right" class="fs-6" />
              </NuxtLink>
            </div>
            <div class="flex-grow-1 ratio ratio-16x9">
              <iframe
                :src="mapEmbedUrl"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                :title="`Mappa per ${organizationConfig.legalName}`"
              ></iframe>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {
  siteConfig,
  organizationConfig,
  contactConfig,
  activeSocialLinks,
  legalInfo
} from '~/data/config'

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.21667086819!2d10.776632!3d44.653924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f884102c9d099%3A0xb363adbd0bc3c180!2sVia%20Alcide%20De%20Gasperi%2C%201%2FB%2C%2042048%20Rubiera%20RE!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit'
</script>

<style scoped>
.social-btn {
  transition: all 0.2s ease-in-out;
}
.social-btn:hover {
  transform: translateY(-2px);
}
</style>