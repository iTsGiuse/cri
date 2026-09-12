<template>
  <div class="news-wrapper py-4 py-lg-5 bg-light-subtle">

    <div class="container">

      <!-- ========================================== -->
      <!-- HEADER -->
      <!-- ========================================== -->

      <div class="mb-4 mb-lg-5 text-center text-lg-start">

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
                  v-model="searchQuery"
                  type="search"
                  class="form-control bg-light border-start-0 shadow-none py-2"
                  placeholder="Cerca una notizia o una parola chiave..."
                />

                <button
                  v-if="searchQuery"
                  type="button"
                  class="btn bg-light border-0 text-secondary"
                  aria-label="Cancella ricerca"
                  @click="searchQuery = ''"
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
                v-model="selectedCategory"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
              >

                <option :value="ALL_CATEGORIES">
                  Tutte le categorie
                </option>

                <option
                  v-for="category in newsCategories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
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
                v-model="selectedYear"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
              >

                <option :value="ALL_YEARS">
                  Tutti gli anni
                </option>

                <option
                  v-for="year in availableYears"
                  :key="year"
                  :value="year"
                >
                  {{ year }}
                </option>

              </select>

            </div>

          </div>

          <!-- Filtri attivi -->
          <div
            v-if="hasActiveFilters"
            class="d-flex flex-wrap align-items-center gap-2 mt-3 pt-3 border-top"
          >

            <span class="small text-secondary">
              Filtri attivi:
            </span>

            <span
              v-if="searchQuery"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                name="i-bi:search"
                class="me-1"
              />

              {{ searchQuery }}
            </span>

            <span
              v-if="selectedCategory !== ALL_CATEGORIES"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                name="i-bi:tag"
                class="me-1"
              />

              {{ getCategoryName(selectedCategory) }}
            </span>

            <span
              v-if="selectedYear !== ALL_YEARS"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                name="i-bi:calendar3"
                class="me-1"
              />

              {{ selectedYear }}
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
            {{ filteredArticles.length }}
          </span>

        </div>

        <button
          v-if="hasActiveFilters"
          type="button"
          class="btn btn-link text-danger text-decoration-none p-0 fw-semibold d-inline-flex align-items-center gap-1"
          @click="resetFilters"
        >
          <Icon name="i-bi:arrow-counterclockwise" />

          Ripristina filtri
        </button>

      </div>

      <!-- ========================================== -->
      <!-- ARTICOLI -->
      <!-- ========================================== -->

      <div
        v-if="filteredArticles.length"
        class="row g-4"
      >

        <div
          v-for="article in filteredArticles"
          :key="article.id"
          class="col-12 col-md-6 col-xl-4"
        >

          <article
            class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden news-card"
          >

            <!-- Immagine -->
            <NuxtLink
              :to="`/news/${article.slug}`"
              class="text-decoration-none"
            >

              <div class="ratio ratio-16x9 bg-light overflow-hidden">

                <NuxtImg
                  :src="article.imageUrl"
                  :alt="article.title"
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
                  {{ getCategoryName(article.categoryId) }}
                </span>

                <small class="text-secondary">

                  <Icon
                    name="i-bi:calendar-event"
                    class="me-1"
                  />

                  {{ formatDate(article.publishedAt) }}

                </small>

              </div>

              <!-- Titolo -->
              <h2 class="h5 fw-bold text-dark mb-3">

                <NuxtLink
                  :to="`/news/${article.slug}`"
                  class="text-dark text-decoration-none"
                >
                  {{ article.title }}
                </NuxtLink>

              </h2>

              <!-- Descrizione -->
              <p class="text-secondary small mb-4">
                {{ article.description }}
              </p>

              <!-- Link -->
              <div class="mt-auto">

                <NuxtLink
                  :to="`/news/${article.slug}`"
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
            @click="resetFilters"
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

  </div>
</template>

<script setup lang="ts">

import { siteConfig } from '~/data/config'
import {
  newsArticles,
  newsCategories,
} from '~/data/news'

/* ========================================== */
/* FILTRI */
/* ========================================== */

/** Valori sentinella dei filtri quando non è selezionata alcuna opzione. */
const ALL_CATEGORIES = 'tutte'
const ALL_YEARS = 'tutti'

const searchQuery = ref('')

const selectedCategory = ref<string>(ALL_CATEGORIES)

const selectedYear = ref<string | number>(ALL_YEARS)

/* ========================================== */
/* ANNI */
/* ========================================== */

const availableYears = computed(() => {

  const years = new Set(
    newsArticles.map((article) =>
      new Date(article.publishedAt).getFullYear(),
    ),
  )

  return Array.from(years).sort(
    (first, second) => second - first,
  )
})

/* ========================================== */
/* FILTRI ATTIVI */
/* ========================================== */

const hasActiveFilters = computed(() => {

  return (
    searchQuery.value.trim() !== '' ||
    selectedCategory.value !== ALL_CATEGORIES ||
    selectedYear.value !== ALL_YEARS
  )
})

/* ========================================== */
/* CATEGORIA */
/* ========================================== */

const getCategoryName = (
  categoryId: string,
): string => {

  const category = newsCategories.find(
    (item) => item.id === categoryId,
  )

  return category?.name ?? 'Generale'
}

/* ========================================== */
/* ARTICOLI FILTRATI */
/* ========================================== */

const filteredArticles = computed(() => {

  const query = searchQuery.value
    .toLowerCase()
    .trim()

  return newsArticles
    .filter((article) => {

      const matchesCategory =
        selectedCategory.value === ALL_CATEGORIES ||
        article.categoryId === selectedCategory.value

      const matchesYear =
        selectedYear.value === ALL_YEARS ||
        new Date(
          article.publishedAt,
        ).getFullYear() === Number(
          selectedYear.value,
        )

      const searchableText = [
        article.title,
        article.description,
        getCategoryName(article.categoryId),
      ]
        .join(' ')
        .toLowerCase()

      const matchesQuery =
        !query ||
        searchableText.includes(query)

      return (
        matchesCategory &&
        matchesYear &&
        matchesQuery
      )
    })
    .sort(
      (first, second) =>
        new Date(
          second.publishedAt,
        ).getTime() -
        new Date(
          first.publishedAt,
        ).getTime(),
    )
})

/* ========================================== */
/* DATA */
/* ========================================== */

const formatDate = (
  date: string,
): string => {

  return new Intl.DateTimeFormat(
    'it-IT',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  ).format(new Date(date))
}

/* ========================================== */
/* RESET */
/* ========================================== */

const resetFilters = () => {

  searchQuery.value = ''

  selectedCategory.value = ALL_CATEGORIES

  selectedYear.value = ALL_YEARS
}

/* ========================================== */
/* SEO */
/* ========================================== */

useSeoMeta({
  title: `News | ${siteConfig.shortName}`,

  description:
    `Tutte le news, le attività e le iniziative della ${siteConfig.name}.`,
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