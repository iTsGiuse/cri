<template>
  <div class="trasparenza-wrapper py-4 py-lg-5 bg-light-subtle">
    <div class="container">

      <div class="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
        <div class="card-body p-3 p-md-4 bg-white">
          <div class="row g-3 align-items-center">

            <div class="col-12 col-lg-5">
              <label for="ricerca-documenti" class="form-label text-muted fw-bold text-uppercase text-xs tracking-wider mb-1">Cerca documento</label>
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0 text-secondary rounded-start-3">
                  <Icon name="i-bi:search" class="" />
                </span>
                <input
                  id="ricerca-documenti"
                  v-model="searchQuery"
                  type="search"
                  class="form-control bg-light border-start-0 shadow-none rounded-end-3 py-2 text-sm"
                  placeholder="Nome documento o parola chiave..."
                />
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <label for="categoria-documenti" class="form-label text-muted fw-bold text-uppercase text-xs tracking-wider mb-1">Categoria</label>
              <select id="categoria-documenti" v-model="selectedCategory" class="form-select bg-light border-0 shadow-none py-2 text-sm rounded-3">
                <option :value="ALL_CATEGORIES">Tutte le Categorie</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <label for="anno-documenti" class="form-label text-muted fw-bold text-uppercase text-xs tracking-wider mb-1">Anno</label>
              <select id="anno-documenti" v-model="selectedYear" class="form-select bg-light border-0 shadow-none py-2 text-sm rounded-3">
                <option :value="ALL_YEARS">Tutti gli Anni</option>
                <option v-for="year in resolvedYears" :key="year" :value="year">
                  Anno {{ year }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mb-4 px-1">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-bold text-dark fs-5">Documenti trovati</span>
          <span class="badge bg-danger rounded-pill px-3 py-1.5 fs-6">{{ filteredDocuments.length }}</span>
        </div>
        <button
          v-if="hasActiveFilters"
          type="button"
          @click="resetFilters"
          class="btn btn-link text-danger text-decoration-none p-0 fw-semibold text-sm d-flex align-items-center gap-1 hover-opacity"
        >
          <Icon name="i-bi:x-circle" class="" /> Ripristina filtri
        </button>
      </div>

      <div v-if="filteredDocuments.length > 0" class="d-flex flex-column gap-3">
        <div
          v-for="doc in filteredDocuments"
          :key="doc.id"
          class="card doc-card border-0 shadow-sm rounded-4 transition-all"
        >
          <div class="card-body p-3 p-md-4">
            <div class="row align-items-center g-3">

              <div class="col-12 col-md-8 col-lg-9 d-flex align-items-center gap-3">

                <div class="icon-box rounded-4 bg-danger-subtle text-danger d-flex align-items-center justify-content-center flex-shrink-0">
                  <Icon :name="getFormatIcon(doc.format)" class="fs-2" />
                </div>

                <div class="w-100">
                  <div class="d-flex align-items-center gap-2 flex-wrap mb-2">
                    <span class="badge bg-light text-dark border px-2.5 py-1.5 rounded-pill fw-medium text-xs">
                      {{ getCategoryName(doc.categoryId) }}
                    </span>
                    <span class="badge bg-danger text-white px-2.5 py-1.5 rounded-pill fw-bold text-xs">
                      {{ doc.year }}
                    </span>
                  </div>
                  <h2 class="h5 fw-bold text-dark mb-1 doc-title">
                    {{ doc.title }}
                  </h2>
                  <p class="text-secondary small mb-3 leading-relaxed">
                    {{ doc.description }}
                  </p>

                  <div class="d-flex align-items-center gap-2 gap-md-3 text-muted text-xs flex-wrap">
                    <span class="d-inline-flex align-items-center gap-1">
                      <Icon name="i-bi:file-earmark-code" class=" text-danger" /> {{ doc.format.toUpperCase() }}
                    </span>
                    <span class="dot-separator"></span>
                    <span class="d-inline-flex align-items-center gap-1">
                      <Icon name="i-bi:hdd-network" class=" text-danger" /> {{ doc.size }}
                    </span>
                    <span class="dot-separator"></span>
                    <span class="d-inline-flex align-items-center gap-1">
                      <Icon name="i-bi:calendar-event" class=" text-danger" /> Pubblicato: {{ doc.publishedAt }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-3 text-md-end pt-2 pt-md-0 border-top border-md-0">
                <a
                  :href="doc.downloadUrl"
                  :download="doc.title"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="onDownload(doc)"
                  class="btn btn-danger btn-download rounded-3 px-4 py-2.5 w-100 w-md-auto d-inline-flex align-items-center justify-content-center gap-2 shadow-sm fw-semibold"
                >
                  <Icon name="i-bi:download" class=" download-icon" />
                  <span>Scarica File</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="card border-0 shadow-sm rounded-4 text-center py-5 px-3 bg-white">
        <div class="card-body">
          <div class="empty-icon-wrapper rounded-circle bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center mb-3">
            <Icon name="i-bi:folder-x" class=" fs-1" />
          </div>
          <h2 class="h4 fw-bold text-dark mb-2">Nessun documento trovato</h2>
          <p class="text-secondary mx-auto max-w-md mb-4">
            Non ci sono documenti corrispondenti ai filtri applicati. Prova a modificare i termini di ricerca o l'anno selezionato.
          </p>
          <button
            type="button"
            class="btn btn-outline-danger rounded-3 px-4 fw-semibold"
            @click="resetFilters"
          >
            <Icon name="i-bi:arrow-counterclockwise" class=" me-1" /> Ripristina tutti i filtri
          </button>
        </div>
      </div>

      <LazyDivisore />

      <div class="card bg-light border-0 rounded-4 p-4 p-md-5 text-center shadow-lg">
        <div class="card-body p-0">
          <div class="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle mb-3 p-3" style="width: 50px; height: 50px;">
            <Icon :name="ctaContent.icon" class="fs-4" />
          </div>

          <h2 class="h4 fw-bold text-dark mb-2">{{ ctaContent.title }}</h2>
          <p class="text-secondary mb-4 col-md-8 mx-auto">
            {{ ctaContent.description }}
          </p>

          <a
            :href="`mailto:${ctaContent.email}`"
            class="btn btn-danger btn-lg rounded-pill px-4 py-2 text-white fw-semibold d-inline-flex align-items-center gap-2 shadow-sm"
          >
            <span>{{ ctaContent.buttonLabel }}</span>
            <Icon :name="ctaContent.buttonIcon" aria-hidden="true" />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { contactConfig } from '~/data/config'

export interface DocumentCategory {
  id: string
  name: string
}

export interface TransparencyDocument {
  id: string
  title: string
  description: string
  categoryId: string
  year: number
  format: 'pdf' | 'zip' | 'xlsx' | string

  size: string

  publishedAt: string
  downloadUrl: string
}

export interface TransparencyCta {
  title?: string
  description?: string

  email?: string
  buttonLabel?: string
  icon?: string
  buttonIcon?: string
}

const ALL_CATEGORIES = 'tutte'
const ALL_YEARS = 'tutti'

const props = withDefaults(
  defineProps<{
    documents?: TransparencyDocument[]
    categories?: DocumentCategory[]
    availableYears?: number[]
    cta?: TransparencyCta
  }>(),
  {
    documents: () => [],
    categories: () => [
      { id: 'bilanci', name: 'Bilanci e Rendiconti Economici' },
      { id: '5x1000', name: 'Rendicontazione 5x1000' },
      { id: 'contributi', name: 'Contributi Pubblici (L. 124/2017)' },
      { id: 'statuto', name: 'Statuto e Regolamenti Associativi' },
      { id: 'organi', name: 'Organi Sociali e Incarichi' }
    ],
    availableYears: () => [],
    cta: () => ({})
  }
)

const emit = defineEmits<{
  (e: 'download', document: TransparencyDocument): void
  (e: 'reset-filters'): void
}>()

const searchQuery = ref('')
const selectedCategory = ref<string>(ALL_CATEGORIES)
const selectedYear = ref<string | number>(ALL_YEARS)

const hasActiveFilters = computed(
  () =>
    searchQuery.value !== '' ||
    selectedCategory.value !== ALL_CATEGORIES ||
    selectedYear.value !== ALL_YEARS
)

const ctaContent = computed<Required<TransparencyCta>>(() => {
  return {
    title: props.cta.title ?? 'Non trovi il documento che cerchi?',
    description:
      props.cta.description ??
      'I soci ed i cittadini aventi diritto possono presentare una richiesta formale di accesso agli atti e verbali direttamente alla nostra segreteria amministrativa.',
    email: props.cta.email ?? contactConfig.pec,
    buttonLabel: props.cta.buttonLabel ?? 'Invia richiesta via PEC',
    icon: props.cta.icon ?? 'i-bi:file-earmark-lock',
    buttonIcon: props.cta.buttonIcon ?? 'i-bi:envelope-at'
  }
})

const resolvedYears = computed<number[]>(() => {
  if (props.availableYears && props.availableYears.length > 0) {
    return props.availableYears
  }
  const years = new Set(props.documents.map((doc) => doc.year))
  return Array.from(years).sort((a, b) => b - a)
})

const filteredDocuments = computed(() => {
  return props.documents.filter((doc) => {
    const matchesCategory =
      selectedCategory.value === ALL_CATEGORIES ||
      doc.categoryId === selectedCategory.value

    const matchesYear =
      selectedYear.value === ALL_YEARS ||
      doc.year === Number(selectedYear.value)

    const query = searchQuery.value.toLowerCase().trim()
    const matchesQuery =
      !query ||
      doc.title.toLowerCase().includes(query) ||
      doc.description.toLowerCase().includes(query) ||
      doc.year.toString().includes(query)

    return matchesCategory && matchesYear && matchesQuery
  })
})

const getCategoryName = (categoryId: string): string => {
  const category = props.categories.find((item) => item.id === categoryId)
  return category ? category.name : 'Generale'
}

const getFormatIcon = (format: string): string => {
  switch (format.toLowerCase()) {
    case 'pdf':
      return 'i-bi:file-earmark-pdf-fill'
    case 'zip':
    case 'rar':
      return 'i-bi:file-earmark-zip-fill'
    case 'xlsx':
    case 'xls':
    case 'csv':
      return 'i-bi:file-earmark-excel-fill'
    case 'doc':
    case 'docx':
      return 'i-bi:file-earmark-word-fill'
    default:
      return 'i-bi:file-earmark-text-fill'
  }
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ALL_CATEGORIES
  selectedYear.value = ALL_YEARS
  emit('reset-filters')
}

const onDownload = (doc: TransparencyDocument) => {
  emit('download', doc)
}
</script>

<style scoped>
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.tracking-wider { letter-spacing: 0.05em; }
.max-w-md { max-width: 28rem; }

.doc-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.06) !important;
}

.doc-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.08) !important;
}

.icon-box {
  width: 54px;
  height: 54px;
}

.btn-danger {
  background-color: #d61827;
  border-color: #d61827;
}

.btn-danger:hover {
  background-color: #b8101d;
  border-color: #b8101d;
}

.btn-download:hover .download-icon {
  animation: bounce 0.5s ease infinite alternate;
}

.dot-separator {
  width: 4px;
  height: 4px;
  background-color: #cbd5e1;
  border-radius: 50%;
  display: inline-block;
}

.empty-icon-wrapper {
  width: 72px;
  height: 72px;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(3px); }
}

.hover-opacity:hover {
  opacity: 0.8;
}

@media (max-width: 767.98px) {
  .border-md-0 {
    border: 0 !important;
  }
}
</style>
