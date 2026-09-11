<template>
  <main class="news-wrapper py-4 py-lg-5 bg-light-subtle">

    <div class="container">

      <!-- ========================================== -->
      <!-- HEADER -->
      <!-- ========================================== -->

      <div class="mb-4 mb-lg-5">

        <span class="text-danger text-uppercase fw-bold small">
          Croce Rossa Italiana
        </span>

        <h1 class="display-5 fw-bold text-dark mb-2 mt-1">
          News
        </h1>

        <p class="text-secondary mb-0">
          Tutte le novità, le attività e le iniziative del Comitato.
        </p>

      </div>

      <!-- ========================================== -->
      <!-- FILTRI -->
      <!-- ========================================== -->

      <div class="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">

        <div class="card-body p-3 p-md-4 bg-white">

          <div class="row g-3 align-items-end">

            <!-- Ricerca -->
            <div class="col-12 col-lg-5">

              <label
                for="ricerca-news"
                class="form-label text-muted fw-bold text-uppercase small mb-1"
              >
                Cerca nelle news
              </label>

              <div class="input-group">

                <span
                  class="input-group-text bg-light border-end-0 text-secondary rounded-start-3"
                >
                  <Icon name="i-bi:search" />
                </span>

                <input
                  id="ricerca-news"
                  v-model="filtroRicerca"
                  type="search"
                  class="form-control bg-light border-start-0 shadow-none py-2"
                  placeholder="Cerca una notizia o una parola chiave..."
                />

                <button
                  v-if="filtroRicerca"
                  type="button"
                  class="btn bg-light border-0 text-secondary"
                  aria-label="Cancella ricerca"
                  @click="filtroRicerca = ''"
                >
                  <Icon name="i-bi:x-circle-fill" />
                </button>

              </div>

            </div>

            <!-- Categoria -->
            <div class="col-12 col-md-6 col-lg-4">

              <label
                for="categoria-news"
                class="form-label text-muted fw-bold text-uppercase small mb-1"
              >
                Categoria
              </label>

              <select
                id="categoria-news"
                v-model="categoriaSelezionata"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
              >

                <option value="tutte">
                  Tutte le categorie
                </option>

                <option
                  v-for="categoria in categorie"
                  :key="categoria.id"
                  :value="categoria.id"
                >
                  {{ categoria.nome }}
                </option>

              </select>

            </div>

            <!-- Anno -->
            <div class="col-12 col-md-6 col-lg-3">

              <label
                for="anno-news"
                class="form-label text-muted fw-bold text-uppercase small mb-1"
              >
                Anno
              </label>

              <select
                id="anno-news"
                v-model="annoSelezionato"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
              >

                <option value="tutti">
                  Tutti gli anni
                </option>

                <option
                  v-for="anno in anniDisponibili"
                  :key="anno"
                  :value="anno"
                >
                  {{ anno }}
                </option>

              </select>

            </div>

          </div>

          <!-- Filtri attivi -->
          <div
            v-if="filtriAttivi"
            class="d-flex flex-wrap align-items-center gap-2 mt-3 pt-3 border-top"
          >

            <span class="small text-secondary">
              Filtri attivi:
            </span>

            <span
              v-if="filtroRicerca"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                name="i-bi:search"
                class="me-1"
              />

              {{ filtroRicerca }}
            </span>

            <span
              v-if="categoriaSelezionata !== 'tutte'"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                name="i-bi:tag"
                class="me-1"
              />

              {{ getNomeCategoria(categoriaSelezionata) }}
            </span>

            <span
              v-if="annoSelezionato !== 'tutti'"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                name="i-bi:calendar3"
                class="me-1"
              />

              {{ annoSelezionato }}
            </span>

          </div>

        </div>

      </div>

      <!-- ========================================== -->
      <!-- RISULTATI -->
      <!-- ========================================== -->

      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 px-1"
      >

        <div class="d-flex align-items-center gap-2">

          <span class="fw-bold text-dark fs-5">
            News trovate
          </span>

          <span class="badge bg-danger rounded-pill px-3 py-2">
            {{ articoliFiltrati.length }}
          </span>

        </div>

        <button
          v-if="filtriAttivi"
          type="button"
          class="btn btn-link text-danger text-decoration-none p-0 fw-semibold d-inline-flex align-items-center gap-1"
          @click="resetFiltri"
        >
          <Icon name="i-bi:arrow-counterclockwise" />

          Ripristina filtri
        </button>

      </div>

      <!-- ========================================== -->
      <!-- ARTICOLI -->
      <!-- ========================================== -->

      <div
        v-if="articoliFiltrati.length"
        class="row g-4"
      >

        <div
          v-for="articolo in articoliFiltrati"
          :key="articolo.id"
          class="col-12 col-md-6 col-xl-4"
        >

          <article
            class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden news-card"
          >

            <!-- Immagine -->
            <NuxtLink
              :to="`/news/${articolo.slug}`"
              class="text-decoration-none"
            >

              <div class="ratio ratio-16x9 bg-light overflow-hidden">

                <NuxtImg
                  :src="articolo.immagine"
                  :alt="articolo.titolo"
                  width="800"
                  height="450"
                  format="webp"
                  loading="lazy"
                  class="w-100 h-100 object-fit-cover"
                />

              </div>

            </NuxtLink>

            <!-- Contenuto -->
            <div class="card-body p-4 d-flex flex-column">

              <!-- Meta -->
              <div class="d-flex flex-wrap align-items-center gap-2 mb-3">

                <span
                  class="badge bg-danger-subtle text-danger rounded-pill px-3 py-2"
                >
                  {{ getNomeCategoria(articolo.categoriaId) }}
                </span>

                <small class="text-secondary">

                  <Icon
                    name="i-bi:calendar-event"
                    class="me-1"
                  />

                  {{ formattaData(articolo.dataPubblicazione) }}

                </small>

              </div>

              <!-- Titolo -->
              <h2 class="h5 fw-bold text-dark mb-3">

                <NuxtLink
                  :to="`/news/${articolo.slug}`"
                  class="text-dark text-decoration-none"
                >
                  {{ articolo.titolo }}
                </NuxtLink>

              </h2>

              <!-- Descrizione -->
              <p class="text-secondary small mb-4">
                {{ articolo.descrizione }}
              </p>

              <!-- Link -->
              <div class="mt-auto">

                <NuxtLink
                  :to="`/news/${articolo.slug}`"
                  class="btn btn-link text-danger text-decoration-none fw-semibold p-0 d-inline-flex align-items-center gap-2"
                >
                  Leggi la news

                  <Icon name="i-bi:arrow-right" />
                </NuxtLink>

              </div>

            </div>

          </article>

        </div>

      </div>

      <!-- ========================================== -->
      <!-- NESSUN RISULTATO -->
      <!-- ========================================== -->

      <div
        v-else
        class="card border-0 shadow-sm rounded-4 text-center bg-white"
      >

        <div class="card-body py-5 px-3">

          <div
            class="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger mb-4"
            style="width: 72px; height: 72px;"
          >
            <Icon
              name="i-bi:newspaper"
              class="fs-2"
            />
          </div>

          <h2 class="h4 fw-bold text-dark mb-2">
            Nessuna news trovata
          </h2>

          <p class="text-secondary mx-auto mb-4">
            Non ci sono notizie corrispondenti ai filtri selezionati.
          </p>

          <button
            type="button"
            class="btn btn-outline-danger rounded-3 px-4 fw-semibold"
            @click="resetFiltri"
          >
            <Icon
              name="i-bi:arrow-counterclockwise"
              class="me-1"
            />

            Mostra tutte le news
          </button>

        </div>

      </div>

    </div>

  </main>
</template>

<script setup lang="ts">

import {
  articoli,
  categorie,
} from '~/data/news'

/* ========================================== */
/* FILTRI */
/* ========================================== */

const filtroRicerca = ref('')

const categoriaSelezionata = ref('tutte')

const annoSelezionato = ref<string | number>('tutti')

/* ========================================== */
/* ANNI */
/* ========================================== */

const anniDisponibili = computed(() => {

  const anni = new Set(
    articoli.map((articolo) =>
      new Date(
        articolo.dataPubblicazione,
      ).getFullYear(),
    ),
  )

  return Array.from(anni).sort(
    (primo, secondo) => secondo - primo,
  )
})

/* ========================================== */
/* FILTRI ATTIVI */
/* ========================================== */

const filtriAttivi = computed(() => {

  return (
    filtroRicerca.value.trim() !== '' ||
    categoriaSelezionata.value !== 'tutte' ||
    annoSelezionato.value !== 'tutti'
  )
})

/* ========================================== */
/* CATEGORIA */
/* ========================================== */

const getNomeCategoria = (
  categoriaId: string,
): string => {

  const categoria = categorie.find(
    (categoria) =>
      categoria.id === categoriaId,
  )

  return categoria?.nome ?? 'Generale'
}

/* ========================================== */
/* ARTICOLI FILTRATI */
/* ========================================== */

const articoliFiltrati = computed(() => {

  const ricerca = filtroRicerca.value
    .toLowerCase()
    .trim()

  return articoli
    .filter((articolo) => {

      const categoriaValida =
        categoriaSelezionata.value === 'tutte' ||
        articolo.categoriaId === categoriaSelezionata.value

      const annoValido =
        annoSelezionato.value === 'tutti' ||
        new Date(
          articolo.dataPubblicazione,
        ).getFullYear() === Number(
          annoSelezionato.value,
        )

      const testoRicerca = [
        articolo.titolo,
        articolo.descrizione,
        getNomeCategoria(articolo.categoriaId),
      ]
        .join(' ')
        .toLowerCase()

      const ricercaValida =
        !ricerca ||
        testoRicerca.includes(ricerca)

      return (
        categoriaValida &&
        annoValido &&
        ricercaValida
      )
    })
    .sort(
      (primo, secondo) =>
        new Date(
          secondo.dataPubblicazione,
        ).getTime() -
        new Date(
          primo.dataPubblicazione,
        ).getTime(),
    )
})

/* ========================================== */
/* DATA */
/* ========================================== */

const formattaData = (
  data: string,
): string => {

  return new Intl.DateTimeFormat(
    'it-IT',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  ).format(new Date(data))
}

/* ========================================== */
/* RESET */
/* ========================================== */

const resetFiltri = () => {

  filtroRicerca.value = ''

  categoriaSelezionata.value = 'tutte'

  annoSelezionato.value = 'tutti'
}

/* ========================================== */
/* SEO */
/* ========================================== */

useSeoMeta({
  title: 'News | Croce Rossa Rubiera',

  description:
    'Tutte le news, le attività e le iniziative della Croce Rossa Italiana - Comitato di Rubiera.',
})

</script>

<style scoped>

.news-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1) !important;
}

.news-card img {
  transition: transform 0.4s ease;
}

.news-card:hover img {
  transform: scale(1.04);
}

</style>