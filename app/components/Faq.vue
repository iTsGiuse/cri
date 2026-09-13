<template>
  <div class="container py-4 py-md-5">
    <div class="row">
      <div class="col-12">

        <!-- Barra Filtri -->
        <div class="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
          <div class="card-body p-3 p-md-4 bg-white">
            <div class="row g-3 align-items-center">

              <div class="col-12 col-md-7">
                <label for="ricerca-faq" class="form-label text-muted fw-semibold text-uppercase text-xs tracking-wider mb-1">Cerca nelle domande</label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0 text-secondary rounded-start-3">
                    <Icon name="i-bi:search" />
                  </span>
                  <input
                    id="ricerca-faq"
                    v-model="searchQuery"
                    type="search"
                    class="form-control bg-light border-start-0 shadow-none rounded-end-3 py-2 text-sm"
                    placeholder="Parola chiave o domanda..."
                  />
                </div>
              </div>

              <div class="col-12 col-md-5">
                <label for="categoria-faq" class="form-label text-muted fw-semibold text-uppercase text-xs tracking-wider mb-1">Categoria</label>
                <select id="categoria-faq" v-model="selectedCategory" class="form-select bg-light border-0 shadow-none py-2 text-sm rounded-3">
                  <option :value="ALL_CATEGORIES">Tutte le Categorie</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>

            </div>
          </div>
        </div>

        <!-- Contatore e Pulsante Reset -->
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mb-4 px-1">
          <div class="d-flex align-items-center gap-2">
            <span class="fw-bold text-dark fs-5">Domande trovate</span>
            <span class="badge bg-danger rounded-pill px-3 py-1.5 fs-6">{{ filteredFaqItems.length }}</span>
          </div>
          <button
            v-if="hasActiveFilters"
            type="button"
            @click="resetFilters"
            class="btn btn-link text-danger text-decoration-none p-0 fw-semibold text-sm d-flex align-items-center gap-1 hover-opacity"
          >
            <Icon name="i-bi:x-circle" /> Ripristina filtri
          </button>
        </div>

        <!-- Accordion FAQ -->
        <div v-if="filteredFaqItems.length > 0" id="accordionFaqRubiera" class="accordion accordion-flush d-flex flex-column gap-3">
          <div
            v-for="(item, index) in filteredFaqItems"
            :key="item.id"
            class="accordion-item border rounded-3 overflow-hidden shadow-sm"
          >
            <h2 class="accordion-header" :id="`heading-${item.id}`">

              <button
                class="accordion-button bg-white text-dark fw-semibold p-3 p-md-4 shadow-none"
                :class="{ collapsed: index !== 0 }"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#faq-${item.id}`"
                :aria-expanded="index === 0"
                :aria-controls="`faq-${item.id}`"
              >

                <span class="badge bg-danger-subtle text-danger fs-6 rounded-pill me-3 px-3 py-2">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>

                <span class="flex-grow-1 pe-3 fs-6 fs-md-5">
                  {{ item.question }}
                </span>
              </button>
            </h2>

            <div
              :id="`faq-${item.id}`"
              class="accordion-collapse collapse"
              :class="{ show: index === 0 }"
              :aria-labelledby="`heading-${item.id}`"
              data-bs-parent="#accordionFaqRubiera"
            >
              <div class="accordion-body bg-light text-secondary border-top p-3 p-md-4 lh-lg">
                <p class="mb-0">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stato Nessun Risultato -->
        <div v-else class="card border-0 shadow-sm rounded-4 text-center py-5 px-3 bg-white">
          <div class="card-body">
            <div class="empty-icon-wrapper rounded-circle bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center mb-3">
              <Icon name="i-bi:question-circle" class="fs-1" />
            </div>
            <h2 class="h4 fw-bold text-dark mb-2">Nessuna FAQ trovata</h2>
            <p class="text-secondary mx-auto max-w-md mb-4">
              Non ci sono domande corrispondenti ai filtri applicati. Prova a modificare i termini di ricerca o la categoria selezionata.
            </p>
            <button
              type="button"
              class="btn btn-outline-danger rounded-3 px-4 fw-semibold"
              @click="resetFilters"
            >
              <Icon name="i-bi:arrow-counterclockwise" class="me-1" /> Ripristina tutti i filtri
            </button>
          </div>
        </div>

        <LazyDivisore />

        <!-- Card CTA Contatti -->
        <div class="card bg-light border-0 rounded-4 p-4 p-md-5 text-center shadow-lg">
          <div class="card-body p-0">
            <div class="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle mb-3 p-3" style="width: 50px; height: 50px;">
              <Icon name="i-bi:question-lg" class="fs-4" />
            </div>

            <h2 class="h4 fw-bold text-dark mb-2">Non hai trovato la risposta che cercavi?</h2>
            <p class="text-secondary mb-4 col-md-8 mx-auto">
              Il nostro team è sempre a disposizione per fornirti tutte le informazioni necessarie sui nostri servizi e attività.
            </p>

            <NuxtLink
              to="/chi-siamo/comitato-e-contatti"
              class="btn btn-danger btn-lg rounded-pill px-4 py-2 text-white fw-semibold d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <span>Contatta il Comitato di Rubiera</span>
              <Icon name="i-bi:arrow-right" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface FaqCategory {
  id: string
  name: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  categoryId?: string
}

export interface FaqData {
  items: FaqItem[]
}

const ALL_CATEGORIES = 'tutte'

const props = withDefaults(
  defineProps<{
    faq: FaqData
    categories?: FaqCategory[]
  }>(),
  {
    categories: () => []
  }
)

const emit = defineEmits<{
  (e: 'reset-filters'): void
}>()

const searchQuery = ref('')
const selectedCategory = ref<string>(ALL_CATEGORIES)

const hasActiveFilters = computed(
  () => searchQuery.value !== '' || selectedCategory.value !== ALL_CATEGORIES
)

const filteredFaqItems = computed(() => {
  if (!props.faq?.items) return []

  return props.faq.items.filter((item) => {
    const matchesCategory =
      selectedCategory.value === ALL_CATEGORIES ||
      item.categoryId === selectedCategory.value

    const query = searchQuery.value.toLowerCase().trim()
    const matchesQuery =
      !query ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)

    return matchesCategory && matchesQuery
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ALL_CATEGORIES
  emit('reset-filters')
}
</script>

<style scoped>
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.tracking-wider { letter-spacing: 0.05em; }
.max-w-md { max-width: 28rem; }

.accordion-button:hover {
  background-color: var(--bs-light) !important;
}

.accordion-button:not(.collapsed) {
  color: var(--bs-danger) !important;
}

.accordion-button::after {
  transition: transform 0.2s ease-in-out;
}

.btn-danger {
  background-color: #d61827;
  border-color: #d61827;
}

.btn-danger:hover {
  background-color: #b8101d;
  border-color: #b8101d;
}

.empty-icon-wrapper {
  width: 72px;
  height: 72px;
}

.hover-opacity:hover {
  opacity: 0.8;
}
</style>