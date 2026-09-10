<template>
<div
  id="mainCarousel"
  class="carousel slide carousel-fade"
  data-bs-ride="carousel"
  data-bs-interval="5000"
>
  <div class="carousel-indicators">
    <button
      v-for="(slide, index) in carosello"
      :key="slide.titolo"
      type="button"
      data-bs-target="#mainCarousel"
      :data-bs-slide-to="index"
      :class="{ active: index === 0 }"
      :aria-current="index === 0 ? 'true' : undefined"
      :aria-label="`Slide ${index + 1}`"
    />
  </div>

  <div class="carousel-inner">
    <div
      v-for="(slide, index) in carosello"
      :key="slide.titolo"
      class="carousel-item"
      :class="{ active: index === 0 }"
    >
      <NuxtImg
        :src="slide.immagine"
        :alt="slide.titolo"
        width="1920"
        height="800"
        sizes="100vw"
        format="webp"
        :loading="index === 0 ? 'eager' : 'lazy'"
        class="d-block w-100 object-fit-cover"
        style="height: min(70vh, 800px)"
      />

      <div
        class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
      />

      <div
        class="carousel-caption position-absolute top-50 start-0 translate-middle-y text-start p-0 w-100"
      >
        <div class="container">
          <div class="row">
            <div class="col-10 col-sm-9 col-lg-6">
              <h1 class="display-5 fw-bold mb-3">
                {{ slide.titolo }}
              </h1>

              <p class="lead mb-4">
                {{ slide.descrizione }}
              </p>

              <NuxtLink
                v-if="slide.cta"
                :to="slide.cta.url"
                class="btn btn-danger btn-lg"
              >
                {{ slide.cta.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
titolo: string;
descrizione: string;
immagine: string;
cta?: {
  label: string;
  url: string;
};
}

defineProps<{
carosello: Slide[];
}>();
</script>