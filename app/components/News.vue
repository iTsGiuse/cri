<template>
  <div class="news-wrapper bg-light-subtle">
    <div class="container py-4 py-lg-5">

      <!-- FILTRI -->
      <div class="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
        <div class="card-body p-3 p-md-4 bg-white">
          <div class="row g-3 align-items-end">

            <!-- Ricerca -->
            <div class="col-12 col-lg-5">
              <label
                for="ricerca-news"
                class="form-label text-muted fw-bold text-uppercase small mb-1"
              >
                {{ pageConfig.filters.search.label }}
              </label>

              <div class="input-group">
                <span
                  class="input-group-text bg-light border-end-0 text-secondary rounded-start-3"
                  aria-hidden="true"
                >
                  <Icon :name="pageConfig.filters.search.icon" />
                </span>

                <input
                  id="ricerca-news"
                  v-model="searchQuery"
                  type="search"
                  class="form-control bg-light border-start-0 shadow-none py-2"
                  :placeholder="pageConfig.filters.search.placeholder"
                  :aria-label="pageConfig.filters.search.ariaLabel"
                />

                <button
                  v-if="searchQuery"
                  type="button"
                  class="btn bg-light border-0 text-secondary"
                  :aria-label="pageConfig.filters.search.clearLabel"
                  @click="searchQuery = ''"
                >
                  <Icon :name="pageConfig.filters.search.clearIcon" />
                </button>
              </div>
            </div>

            <!-- Categoria -->
            <div class="col-12 col-md-6 col-lg-4">
              <label
                for="categoria-news"
                class="form-label text-muted fw-bold text-uppercase small mb-1"
              >
                {{ pageConfig.filters.category.label }}
              </label>

              <select
                id="categoria-news"
                v-model="selectedCategory"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
                :aria-label="pageConfig.filters.category.ariaLabel"
              >
                <option :value="ALL_CATEGORIES">
                  {{ pageConfig.filters.category.allLabel }}
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
                {{ pageConfig.filters.year.label }}
              </label>

              <select
                id="anno-news"
                v-model="selectedYear"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
                :aria-label="pageConfig.filters.year.ariaLabel"
              >
                <option :value="ALL_YEARS">
                  {{ pageConfig.filters.year.allLabel }}
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

          <!-- FILTRI ATTIVI -->
          <div
            v-if="hasActiveFilters"
            class="d-flex flex-wrap align-items-center gap-2 mt-3 pt-3 border-top"
          >
            <span class="small text-secondary">
              {{ pageConfig.activeFilters.label }}
            </span>

            <span
              v-if="searchQuery"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                :name="pageConfig.activeFilters.searchIcon"
                class="me-1"
                aria-hidden="true"
              />

              {{ searchQuery }}
            </span>

            <span
              v-if="selectedCategory !== ALL_CATEGORIES"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                :name="pageConfig.activeFilters.categoryIcon"
                class="me-1"
                aria-hidden="true"
              />

              {{ getCategoryName(selectedCategory) }}
            </span>

            <span
              v-if="selectedYear !== ALL_YEARS"
              class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2"
            >
              <Icon
                :name="pageConfig.activeFilters.yearIcon"
                class="me-1"
                aria-hidden="true"
              />

              {{ selectedYear }}
            </span>
          </div>
        </div>
      </div>

      <!-- RISULTATI -->
      <div
        class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4 px-1"
      >
        <div class="d-flex align-items-center gap-2">
          <span class="fw-bold text-dark fs-5">
            {{ pageConfig.results.label }}
          </span>

          <span class="badge bg-danger rounded-pill px-3 py-2">
            {{ filteredArticles.length }}
          </span>
        </div>

        <button
          v-if="hasActiveFilters"
          type="button"
          class="btn btn-link text-danger text-decoration-none p-0 fw-semibold d-inline-flex align-items-center gap-1 align-self-start align-self-sm-center"
          @click="resetFilters"
        >
          <Icon
            :name="pageConfig.results.resetIcon"
            aria-hidden="true"
          />

          {{ pageConfig.results.resetLabel }}
        </button>
      </div>

      <!-- NEWS -->
      <div
        v-if="filteredArticles.length"
        class="row g-3 g-md-4"
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
              class="text-decoration-none d-block"
              :aria-label="`${pageConfig.card.openArticleLabel}: ${article.title}`"
            >
              <div class="ratio ratio-16x9 bg-light overflow-hidden">
                <NuxtImg
                  :src="article.imageUrl"
                  :alt="article.title"
                  width="800"
                  height="450"
                  format="webp"
                  loading="lazy"
                  decoding="async"
                  sizes="100vw sm:50vw xl:33vw"
                  class="w-100 h-100 object-fit-cover"
                />
              </div>
            </NuxtLink>

            <!-- Contenuto -->
            <div class="card-body p-3 p-md-4 d-flex flex-column">

              <!-- Meta -->
              <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span
                  class="badge bg-danger-subtle text-danger rounded-pill px-3 py-2"
                >
                  {{ getCategoryName(article.categoryId) }}
                </span>

                <small class="text-secondary">
                  <Icon
                    :name="pageConfig.card.dateIcon"
                    class="me-1"
                    aria-hidden="true"
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

              <!-- CTA -->
              <div class="mt-auto">
                <NuxtLink
                  :to="`/news/${article.slug}`"
                  class="btn btn-link text-danger text-decoration-none fw-semibold p-0 d-inline-flex align-items-center gap-2"
                >
                  {{ pageConfig.card.readLabel }}

                  <Icon
                    :name="pageConfig.card.readIcon"
                    aria-hidden="true"
                  />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- NESSUN RISULTATO -->
      <div
        v-else
        class="card border-0 shadow-sm rounded-4 text-center bg-white"
      >
        <div class="card-body py-5 px-3 px-md-4">

          <div
            class="empty-state-icon d-inline-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger mb-4"
            aria-hidden="true"
          >
            <Icon
              :name="pageConfig.emptyState.icon"
              class="fs-2"
            />
          </div>

          <h2 class="h4 fw-bold text-dark mb-2">
            {{ pageConfig.emptyState.title }}
          </h2>

          <p class="text-secondary mx-auto mb-4 empty-state-description">
            {{ pageConfig.emptyState.description }}
          </p>

          <button
            type="button"
            class="btn btn-outline-danger rounded-3 px-4 fw-semibold"
            @click="resetFilters"
          >
            <Icon
              :name="pageConfig.emptyState.buttonIcon"
              class="me-1"
              aria-hidden="true"
            />

            {{ pageConfig.emptyState.buttonLabel }}
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

const ALL_CATEGORIES = 'tutte'
const ALL_YEARS = 'tutti'

const pageConfig = {
  filters: {
    search: {
      label: 'Cerca nelle news',
      placeholder: 'Cerca una notizia o una parola chiave...',
      ariaLabel: 'Cerca nelle news',
      clearLabel: 'Cancella ricerca',
      icon: 'i-bi:search',
      clearIcon: 'i-bi:x-circle-fill',
    },

    category: {
      label: 'Categoria',
      ariaLabel: 'Filtra per categoria',
      allLabel: 'Tutte le categorie',
    },

    year: {
      label: 'Anno',
      ariaLabel: 'Filtra per anno',
      allLabel: 'Tutti gli anni',
    },
  },

  activeFilters: {
    label: 'Filtri attivi:',
    searchIcon: 'i-bi:search',
    categoryIcon: 'i-bi:tag',
    yearIcon: 'i-bi:calendar3',
  },

  results: {
    label: 'News trovate',
    resetLabel: 'Ripristina filtri',
    resetIcon: 'i-bi:arrow-counterclockwise',
  },

  card: {
    openArticleLabel: 'Apri la news',
    dateIcon: 'i-bi:calendar-event',
    readLabel: 'Leggi la news',
    readIcon: 'i-bi:arrow-right',
  },

  emptyState: {
    icon: 'i-bi:newspaper',
    title: 'Nessuna news trovata',
    description:
      'Non ci sono notizie corrispondenti ai filtri selezionati.',
    buttonLabel: 'Mostra tutte le news',
    buttonIcon: 'i-bi:arrow-counterclockwise',
  },

  seo: {
    title: `News | ${siteConfig.shortName}`,
    description:
      `Tutte le news, le attività e le iniziative della ${siteConfig.name}.`,
  },
}

const searchQuery = ref('')

const selectedCategory = ref<string>(ALL_CATEGORIES)

const selectedYear = ref<string | number>(ALL_YEARS)

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

const hasActiveFilters = computed(() => {
  return (
    searchQuery.value.trim() !== '' ||
    selectedCategory.value !== ALL_CATEGORIES ||
    selectedYear.value !== ALL_YEARS
  )
})

const getCategoryName = (
  categoryId: string,
): string => {
  const category = newsCategories.find(
    (item) => item.id === categoryId,
  )

  return category?.name ?? 'Generale'
}

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
        new Date(article.publishedAt).getFullYear() ===
          Number(selectedYear.value)

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

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ALL_CATEGORIES
  selectedYear.value = ALL_YEARS
}

useSeoMeta({
  title: pageConfig.seo.title,
  description: pageConfig.seo.description,
})
</script>

<style scoped>
.news-wrapper {
  min-width: 0;
}

.news-card {
  min-width: 0;
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

.empty-state-icon {
  width: 72px;
  height: 72px;
}

.empty-state-description {
  max-width: 520px;
}

@media (max-width: 767.98px) {
  .news-wrapper {
    overflow-x: hidden;
  }

  .news-card {
    transform: none;
  }

  .news-card:hover {
    transform: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
  }

  .news-card img {
    transition: none;
  }

  .news-card:hover img {
    transform: none;
  }
}

@media (max-width: 575.98px) {
  .news-wrapper > .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .card-body {
    min-width: 0;
  }

  .active-filters {
    align-items: flex-start;
  }

  .empty-state-description {
    max-width: 100%;
  }
}
</style>