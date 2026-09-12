<template>
  <div
    id="mainCarousel"
    class="carousel slide carousel-fade p-0 overflow-hidden w-100"
    data-bs-ride="carousel"
    data-bs-interval="5000"
    aria-roledescription="carosello"
    aria-label="Presentazione del Comitato"
  >
    <!-- Indicatori -->
    <div class="carousel-indicators mb-2 mb-md-4">
      <button
        v-for="(slide, index) in slides"
        :key="slide.title + index"
        type="button"
        data-bs-target="#mainCarousel"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0 ? 'true' : undefined"
        :aria-label="`Slide ${index + 1}`"
      />
    </div>

    <!-- Slide Inner -->
    <div class="carousel-inner w-100">
      <div
        v-for="(slide, index) in slides"
        :key="slide.title + index"
        class="carousel-item"
        :class="{ active: index === 0 }"
        role="group"
        aria-roledescription="slide"
        :aria-label="`Slide ${index + 1} di ${slides.length}`"
      >
        <!-- Container Immagine Full-Bleed -->
        <div class="carousel-img-wrapper position-relative w-100 overflow-hidden">
          <NuxtImg
            :src="slide.imageUrl"
            :alt="slide.title"
            format="webp"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            class="carousel-hero-img"
          />

          <!-- Overlay scuro full screen -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          />
        </div>

        <!-- Dettagli e Testi Slide -->
        <div
          class="carousel-caption position-absolute top-50 start-0 translate-middle-y text-start p-0 w-100"
        >
          <!-- px-5 su mobile lascia lo spazio alle frecce laterali -->
          <div class="container px-5 px-md-5">
            <div class="row">
              <div class="col-12 col-md-10 col-lg-9 col-xl-8">
                <component
                  :is="index === 0 ? 'h1' : 'h2'"
                  class="carousel-title fw-bold text-white mb-2 mb-md-3 text-break"
                >
                  {{ slide.title }}
                </component>

                <p class="carousel-desc text-white-50 mb-3 mb-md-4 text-break lh-sm">
                  {{ slide.description }}
                </p>

                <NuxtLink
                  v-if="slide.cta"
                  :to="slide.cta.url"
                  class="btn btn-danger carousel-btn fw-semibold shadow-sm"
                >
                  {{ slide.cta.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controlli Avanti / Indietro -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#mainCarousel"
      data-bs-slide="prev"
      aria-label="Slide precedente"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Precedente</span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#mainCarousel"
      data-bs-slide="next"
      aria-label="Slide successiva"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Successiva</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { CtaLink } from '~/types'

export interface CarouselSlide {
  title: string
  description: string
  imageUrl: string
  cta?: CtaLink
}

defineProps<{
  slides: CarouselSlide[]
}>()
</script>

<style scoped>
.carousel-img-wrapper {
  height: clamp(420px, 60vh, 800px);
  width: 100%;
}

@media (min-width: 768px) {
  .carousel-img-wrapper {
    height: clamp(550px, 70vh, 850px);
  }
}

/* Forzo NuxtImg full-bleed */
:deep(.carousel-hero-img),
.carousel-hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
}

/* Tipografia Responsive (Grande su Desktop) */
.carousel-title {
  font-size: calc(1.375rem + 1.5vw); /* Fluid typography */
}

.carousel-desc {
  font-size: 1rem;
}

.carousel-btn {
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
}

@media (min-width: 992px) {
  .carousel-title {
    font-size: 3.25rem; /* ~52px su schermi grandi */
    line-height: 1.15;
  }

  .carousel-desc {
    font-size: 1.35rem; /* Leggermente più grande per leggibilità desktop */
    line-height: 1.4;
  }

  .carousel-btn {
    padding: 0.85rem 2.25rem;
    font-size: 1.15rem;
  }
}

/* Gestione delle Frecce su Mobile: stretta l'area per non sovrapporsi ai testi */
.carousel-control-prev,
.carousel-control-next {
  width: 6%; /* Molto stretto su mobile per evitare collisione */
  z-index: 5;
}

@media (min-width: 768px) {
  .carousel-control-prev,
  .carousel-control-next {
    width: 8%;
  }
}
</style>