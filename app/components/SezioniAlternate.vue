<template>
  <div class="alternating-sections container-fluid p-0">
    <div
      v-for="(elemento, indice) in sezioni"
      :key="elemento.id || indice"
      ref="sectionRefs"
      :class="[
        'py-5 px-3 px-md-5',
        indice % 2 === 0 ? 'bg-white' : 'bg-light',
      ]"
      :data-index="indice"
    >
      <!--
        Placeholder leggero finché la sezione non entra
        nell'area vicina al viewport.
      -->
      <div
        v-if="!sezioniVisibili[indice]"
        class="container"
        style="min-height: 350px"
        aria-hidden="true"
      />

      <!-- Contenuto caricato quando la sezione è vicina al viewport -->
      <div v-else class="container">
        <div
          class="row align-items-center d-flex"
          :class="{ 'flex-lg-row-reverse': indice % 2 !== 0 }"
        >
          <!-- COLONNA IMMAGINE -->
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper rounded overflow-hidden shadow-sm">
              <NuxtImg
                :src="elemento.immagine"
                :alt="elemento.titolo"
                class="img-fluid w-100 object-fit-cover"
                style="height: 350px"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- COLONNA TESTO -->
          <div class="col-12 col-lg-6">
            <div
              :class="[
                indice % 2 !== 0 ? 'pe-lg-5' : 'ps-lg-5',
              ]"
            >
              <h2 class="fw-bold mb-3 text-dark">
                {{ elemento.titolo }}
              </h2>

              <p class="text-muted mb-4 lead fs-6">
                {{ elemento.descrizione }}
              </p>

              <!-- CTA SOLO SE COMPLETA -->
              <NuxtLink
                v-if="
                  (elemento.testoPulsante && elemento.linkPulsante) ||
                  (elemento.cta?.label && elemento.cta?.url)
                "
                :to="
                  elemento.linkPulsante ||
                  elemento.cta?.url
                "
                class="btn btn-danger btn-lg px-4 py-2 shadow-sm"
              >
                {{
                  elemento.testoPulsante ||
                  elemento.cta?.label
                }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

interface SezioneItem {
  id?: number | string
  titolo: string
  descrizione: string
  immagine: string
  testoPulsante?: string
  linkPulsante?: string
  cta?: {
    label: string
    url: string
  }
}

const props = defineProps<{
  sezioni: SezioneItem[]
}>()

const sezioniVisibili = ref<boolean[]>(
  props.sezioni.map(() => false)
)

const sectionRefs = ref<HTMLElement[]>([])

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const index = Number(
          (entry.target as HTMLElement).dataset.index
        )

        sezioniVisibili.value[index] = true

        // Una volta caricata, non serve più osservare
        observer?.unobserve(entry.target)
      })
    },
    {
      // Inizia a caricare la sezione
      // poco prima che sia effettivamente visibile.
      rootMargin: '300px 0px',
      threshold: 0,
    }
  )

  sectionRefs.value.forEach((section) => {
    if (section) {
      observer?.observe(section)
    }
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<style scoped>
.alternating-sections {
  overflow-x: hidden;
}

.object-fit-cover {
  object-fit: cover;
}
</style>
