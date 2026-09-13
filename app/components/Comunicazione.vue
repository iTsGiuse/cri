<template>
  <div class="catalog-wrapper bg-light-subtle">
    <div class="container py-4 py-lg-5">

      <div class="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
        <div class="card-body p-3 p-md-4 bg-white">
          <div class="row g-3 align-items-end">

            <div class="col-12 col-lg-5">
              <label
                :for="`ricerca-${entityType}`"
                class="form-label text-muted fw-semibold text-uppercase small mb-1"
              >
                {{ config.searchLabel }}
              </label>

              <div class="input-group">
                <span class="input-group-text bg-light border-end-0 text-secondary rounded-start-3">
                  <Icon name="i-bi:search" />
                </span>

                <input
                  :id="`ricerca-${entityType}`"
                  v-model="searchQuery"
                  type="search"
                  class="form-control bg-light border-start-0 shadow-none py-2"
                  :placeholder="config.searchPlaceholder"
                />

                <button
                  v-if="searchQuery"
                  type="button"
                  class="btn bg-light border-0 text-secondary"
                  @click="searchQuery = ''"
                >
                  <Icon name="i-bi:x-circle-fill" />
                </button>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <label
                :for="`categoria-${entityType}`"
                class="form-label text-muted fw-semibold text-uppercase small mb-1"
              >
                Categoria
              </label>

              <select
                :id="`categoria-${entityType}`"
                v-model="selectedCategory"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
              >
                <option :value="ALL_CATEGORIES">Tutte le categorie</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <label
                :for="`anno-${entityType}`"
                class="form-label text-muted fw-semibold text-uppercase small mb-1"
              >
                Anno
              </label>

              <select
                :id="`anno-${entityType}`"
                v-model="selectedYear"
                class="form-select bg-light border-0 shadow-none py-2 rounded-3"
              >
                <option :value="ALL_YEARS">Tutti gli anni</option>
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

          <div
            v-if="hasActiveFilters"
            class="d-flex flex-wrap align-items-center gap-2 mt-3 pt-3 border-top"
          >
            <span class="small text-secondary">Filtri attivi:</span>

            <span v-if="searchQuery" class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
              <Icon name="i-bi:search" class="me-1" />
              {{ searchQuery }}
            </span>

            <span v-if="selectedCategory !== ALL_CATEGORIES" class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
              <Icon name="i-bi:tag" class="me-1" />
              {{ getCategoryName(selectedCategory) }}
            </span>

            <span v-if="selectedYear !== ALL_YEARS" class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
              <Icon name="i-bi:calendar3" class="me-1" />
              {{ selectedYear }}
            </span>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4 px-1">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-bold text-dark fs-5">{{ config.resultsLabel }}</span>
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

      <div v-if="filteredArticles.length" class="row g-3 g-md-4">
        <div
          v-for="article in filteredArticles"
          :key="article.id"
          class="col-12 col-md-6 col-xl-4"
        >
          <article class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden news-card">
            
            <NuxtLink
              :to="`${baseRoute}/${article.slug}`"
              class="text-decoration-none d-block"
              tabindex="-1"
              aria-hidden="true"
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

            <div class="card-body p-3 p-md-4 d-flex flex-column">
              <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span class="badge bg-danger-subtle text-danger rounded-pill px-3 py-2">
                  {{ getCategoryName(article.categoryId) }}
                </span>

                <small class="text-secondary">
                  <Icon name="i-bi:calendar-event" class="me-1" />
                  {{ formatDate(article.publishedAt) }}
                </small>
              </div>

              <h2 class="h5 fw-bold text-dark mb-3">
                <NuxtLink
                  :to="`${baseRoute}/${article.slug}`"
                  class="text-dark text-decoration-none"
                >
                  {{ article.title }}
                </NuxtLink>
              </h2>

              <p class="text-secondary small mb-4">
                {{ article.description }}
              </p>

              <div class="mt-auto">
                <NuxtLink
                  :to="`${baseRoute}/${article.slug}`"
                  class="btn btn-link text-danger text-decoration-none fw-semibold p-0 d-inline-flex align-items-center gap-2"
                >
                  {{ config.readMoreLabel }}
                  <Icon name="i-bi:arrow-right" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div v-else class="card border-0 shadow-sm rounded-4 text-center bg-white">
        <div class="card-body py-5 px-3 px-md-4">
          <div class="empty-state-icon d-inline-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger mb-4">
            <Icon :name="config.emptyIcon" class="fs-2" />
          </div>

          <h2 class="h4 fw-bold text-dark mb-2">
            {{ config.emptyTitle }}
          </h2>

          <p class="text-secondary mx-auto mb-4 empty-state-description">
            {{ config.emptyDescription }}
          </p>

          <button
            type="button"
            class="btn btn-outline-danger rounded-3 px-4 fw-semibold"
            @click="resetFilters"
          >
            <Icon name="i-bi:arrow-counterclockwise" class="me-1" />
            Mostra tutti
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { NewsArticle, NewsCategory } from '~/data/eventi'

const ALL_CATEGORIES = 'tutte'
const ALL_YEARS = 'tutti'

interface CatalogConfig {
  searchLabel: string
  searchPlaceholder: string
  resultsLabel: string
  readMoreLabel: string
  emptyTitle: string
  emptyDescription: string
  emptyIcon: string
}

const props = withDefaults(
  defineProps<{
    articles?: NewsArticle[]
    categories?: NewsCategory[]
    baseRoute?: string
    entityType?: string
    config?: CatalogConfig
  }>(),
  {
    articles: () => [],
    categories: () => [],
    baseRoute: '/news',
    entityType: 'news',
    config: () => ({
      searchLabel: 'Cerca',
      searchPlaceholder: 'Cerca per parola chiave...',
      resultsLabel: 'Risultati trovati',
      readMoreLabel: 'Leggi di più',
      emptyTitle: 'Nessun elemento trovato',
      emptyDescription: 'Non ci sono elementi corrispondenti ai filtri selezionati.',
      emptyIcon: 'i-bi:search',
    }),
  }
)

const searchQuery = ref('')
const selectedCategory = ref<string>(ALL_CATEGORIES)
const selectedYear = ref<string | number>(ALL_YEARS)

const availableYears = computed(() => {
  const years = new Set(
    props.articles.map((article) => new Date(article.publishedAt).getFullYear())
  )
  return Array.from(years).sort((a, b) => b - a)
})

const hasActiveFilters = computed(() => {
  return (
    searchQuery.value.trim() !== '' ||
    selectedCategory.value !== ALL_CATEGORIES ||
    selectedYear.value !== ALL_YEARS
  )
})

const getCategoryName = (categoryId: string): string => {
  const category = props.categories.find((item) => item.id === categoryId)
  return category?.name ?? 'Generale'
}

const filteredArticles = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()

  return props.articles
    .filter((article) => {
      const matchesCategory =
        selectedCategory.value === ALL_CATEGORIES ||
        article.categoryId === selectedCategory.value

      const matchesYear =
        selectedYear.value === ALL_YEARS ||
        new Date(article.publishedAt).getFullYear() === Number(selectedYear.value)

      const searchableText = [
        article.title,
        article.description,
        getCategoryName(article.categoryId),
      ]
        .join(' ')
        .toLowerCase()

      const matchesQuery = !query || searchableText.includes(query)

      return matchesCategory && matchesYear && matchesQuery
    })
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
})

const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ALL_CATEGORIES
  selectedYear.value = ALL_YEARS
}
</script>

<style scoped>
.catalog-wrapper { min-width: 0; }
.news-card { min-width: 0; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.news-card:hover { transform: translateY(-4px); box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1) !important; }
.news-card img { transition: transform 0.4s ease; }
.news-card:hover img { transform: scale(1.04); }
.empty-state-icon { width: 72px; height: 72px; }
.empty-state-description { max-width: 520px; }
</style>