<template>
  <div class="alternating-sections container-fluid p-0">
    <section
      v-for="(section, index) in sections"
      :key="section.id || index"
      :class="[
        'py-5 px-3 px-md-5',
        index % 2 === 0 ? 'bg-white' : 'bg-light',
      ]"
    >
      <div class="container">
        <div
          class="row align-items-center"
          :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }"
        >
          <!-- COLONNA IMMAGINE -->
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper rounded overflow-hidden shadow-sm">
              <NuxtImg
                :src="section.imageUrl"
                :alt="section.title"
                width="800"
                height="600"
                sizes="sm:100vw md:100vw lg:50vw"
                class="img-fluid w-100 object-fit-cover"
                style="height: 350px"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- COLONNA TESTO -->
          <div class="col-12 col-lg-6 text-center text-lg-start">
            <div
              :class="[
                index % 2 !== 0 ? 'pe-lg-5' : 'ps-lg-5',
              ]"
            >
              <h2 class="fw-bold mb-3 text-dark">
                {{ section.title }}
              </h2>

              <p class="text-muted mb-4 lead fs-6">
                {{ section.description }}
              </p>

              <!-- CTA SOLO SE COMPLETA -->
              <NuxtLink
                v-if="section.cta?.label && section.cta?.url"
                :to="section.cta.url"
                class="btn btn-danger btn-lg px-4 py-2 shadow-sm"
              >
                {{ section.cta.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { CtaLink } from '~/types'

export interface AlternatingSection {
  id?: number | string
  title: string
  description: string
  imageUrl: string
  /** Pulsante facoltativo: reso solo quando ha sia etichetta sia URL. */
  cta?: CtaLink
}

defineProps<{
  sections: AlternatingSection[]
}>()
</script>

<style scoped>
.alternating-sections {
  overflow-x: hidden;
}
/* `.object-fit-cover` è già una utility di Bootstrap 5.3: niente duplicato. */
</style>
