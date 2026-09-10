<template>
  <section class="py-5">
    <div class="container">
      <div
        class="row align-items-center g-0 overflow-hidden rounded-4 shadow-sm bg-danger text-white shadow-lg"
      >
        <div class="col-lg-5">
          <NuxtImg
            :src="cta.immagine"
            :alt="cta.altImmagine"
            format="webp"
            class="img-fluid w-100 h-100 object-fit-cover"
            style="min-height: 350px"
          />
        </div>

        <div class="col-lg-7">
          <div class="p-4 p-md-5">
            <p class="text-uppercase fw-semibold small mb-2 opacity-75">
              {{ cta.sottotitolo }}
            </p>

            <h2 class="display-6 fw-bold mb-3">
              {{ cta.titolo }}
            </h2>

            <p class="lead mb-4">
              {{ cta.testo }}
            </p>

            <NuxtLink
              :to="cta.link"
              class="btn btn-light btn-lg text-danger px-4 fw-semibold"
            >
              {{ cta.pulsante }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CtaData {
  titolo: string;
  sottotitolo: string;
  testo: string;
  pulsante: string;
  link: string;
  immagine: string;
  altImmagine: string;
}

defineProps<{
  cta: CtaData;
}>();
</script>
