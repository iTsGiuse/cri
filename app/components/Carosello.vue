<template>
  <div
    id="mainCarousel"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <!-- Indicatori -->
    <div class="carousel-indicators mb-2 mb-md-3">
      <button
        v-for="(slide, index) in carosello"
        :key="slide.titolo + index"
        type="button"
        data-bs-target="#mainCarousel"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0 ? 'true' : undefined"
        :aria-label="`Slide ${index + 1}`"
      />
    </div>

    <!-- Slides -->
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in carosello"
        :key="slide.titolo + index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <!-- Container Immagine con altezza responsive -->
        <div class="carousel-img-wrapper position-relative w-100 overflow-hidden">
          <NuxtImg
            :src="slide.immagine"
            :alt="slide.titolo"
            width="1920"
            height="800"
            sizes="100vw"
            format="webp"
            :loading="index === 0 ? 'eager' : 'lazy'"
            class="d-block w-100 h-100 object-fit-cover"
          />

          <!-- Overlay per leggibilità -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          />
        </div>

        <!-- Didascalia/Contenuto sopra l'immagine -->
        <div
          class="carousel-caption position-absolute top-50 start-0 translate-middle-y text-start p-0 w-100"
        >
          <div class="container px-4 px-md-5">
            <div class="row">
              <div class="col-12 col-md-10 col-lg-8 col-xl-7">
                <h1 class="fs-2 fs-md-1 fs-lg-display-5 fw-bold text-white mb-2 mb-md-3 text-break">
                  {{ slide.titolo }}
                </h1>

                <p class="fs-6 fs-md-5 fw-normal text-white-50 mb-3 mb-md-4 text-break lh-sm lh-md-base">
                  {{ slide.descrizione }}
                </p>

                <NuxtLink
                  v-if="slide.cta"
                  :to="slide.cta.url"
                  class="btn btn-danger btn-md btn-md-lg fw-semibold"
                >
                  {{ slide.cta.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controlli di Navigazione -->
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
interface Slide {
  titolo: string
  descrizione: string
  immagine: string
  cta?: {
    label: string
    url: string
  }
}

defineProps<{
  carosello: Slide[]
}>()
</script>

<style scoped>
/* Gestione responsive dell'altezza del carosello */
.carousel-img-wrapper {
  height: clamp(380px, 55vh, 800px);
}

@media (min-width: 768px) {
  .carousel-img-wrapper {
    height: clamp(500px, 65vh, 800px);
  }
}

/* Protezione frecce su schermi piccoli */
.carousel-control-prev,
.carousel-control-next {
  width: 10%;
}
</style>