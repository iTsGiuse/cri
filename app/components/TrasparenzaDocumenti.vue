<template>
  <div class="trasparenza-wrapper py-4 py-lg-5 bg-light-subtle">
    <div class="container">
      <!-- Filter Bar -->
      <div class="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
        <div class="card-body p-3 p-md-4 bg-white">
          <div class="row g-3 align-items-center">
            <!-- Search Input -->
            <div class="col-12 col-lg-5">
              <label class="form-label text-muted fw-bold text-uppercase text-xs tracking-wider mb-1">Cerca documento</label>
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0 text-secondary rounded-start-3">
                  <Icon name="i-bi:search" class="" />
                </span>
                <input
                  v-model="filtroRicerca"
                  type="text"
                  class="form-control bg-light border-start-0 shadow-none rounded-end-3 py-2 text-sm"
                  placeholder="Nome documento o parola chiave..."
                />
              </div>
            </div>

            <!-- Category Select -->
            <div class="col-12 col-md-6 col-lg-4">
              <label class="form-label text-muted fw-bold text-uppercase text-xs tracking-wider mb-1">Categoria</label>
              <select v-model="categoriaSelezionata" class="form-select bg-light border-0 shadow-none py-2 text-sm rounded-3">
                <option value="tutte">Tutte le Categorie</option>
                <option v-for="cat in categorie" :key="cat.id" :value="cat.id">
                  {{ cat.nome }}
                </option>
              </select>
            </div>

            <!-- Year Select -->
            <div class="col-12 col-md-6 col-lg-3">
              <label class="form-label text-muted fw-bold text-uppercase text-xs tracking-wider mb-1">Anno</label>
              <select v-model="annoSelezionato" class="form-select bg-light border-0 shadow-none py-2 text-sm rounded-3">
                <option value="tutti">Tutti gli Anni</option>
                <option v-for="anno in anniDisponibiliCalcolati" :key="anno" :value="anno">
                  Anno {{ anno }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Counter & Reset Bar -->
      <div class="d-flex justify-content-between align-items-center mb-4 px-1">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-bold text-dark fs-5">Documenti trovati</span>
          <span class="badge bg-danger rounded-pill px-3 py-1.5 fs-6">{{ documentiFiltrati.length }}</span>
        </div>
        <button
          v-if="filtroRicerca || categoriaSelezionata !== 'tutte' || annoSelezionato !== 'tutti'"
          @click="resetFiltri"
          class="btn btn-link text-danger text-decoration-none p-0 fw-semibold text-sm d-flex align-items-center gap-1 hover-opacity"
        >
          <Icon name="i-bi:x-circle" class="" /> Ripristina filtri
        </button>
      </div>

      <!-- Document Cards List -->
      <div v-if="documentiFiltrati.length > 0" class="d-flex flex-column gap-3">
        <div
          v-for="doc in documentiFiltrati"
          :key="doc.id"
          class="card doc-card border-0 shadow-sm rounded-4 transition-all"
        >
          <div class="card-body p-3 p-md-4">
            <div class="row align-items-center g-3">
              <!-- Document Details -->
              <!-- CAMBIATO: align-items-center allinea l'icona al centro verticale del blocco di testo -->
              <div class="col-12 col-md-8 col-lg-9 d-flex align-items-center gap-3">
                <!-- Icon Box -->
                <div class="icon-box rounded-4 bg-danger-subtle text-danger d-flex align-items-center justify-content-center flex-shrink-0">
                  <Icon :name="getIconaEstensione(doc.formato)" class="fs-2" />
                </div>

                <!-- Text Content -->
                <div class="w-100">
                  <div class="d-flex align-items-center gap-2 flex-wrap mb-2">
                    <span class="badge bg-light text-dark border px-2.5 py-1.5 rounded-pill fw-medium text-xs">
                      {{ getNomeCategoria(doc.categoriaId) }}
                    </span>
                    <span class="badge bg-danger text-white px-2.5 py-1.5 rounded-pill fw-bold text-xs">
                      {{ doc.anno }}
                    </span>
                  </div>
                  <h5 class="fw-bold text-dark mb-1 doc-title">
                    {{ doc.titolo }}
                  </h5>
                  <p class="text-secondary small mb-3 leading-relaxed">
                    {{ doc.descrizione }}
                  </p>
                  
                  <!-- File Meta Info -->
                  <div class="d-flex align-items-center gap-2 gap-md-3 text-muted text-xs flex-wrap">
                    <span class="d-inline-flex align-items-center gap-1">
                      <Icon name="i-bi:file-earmark-code" class=" text-danger" /> {{ doc.formato.toUpperCase() }}
                    </span>
                    <span class="dot-separator"></span>
                    <span class="d-inline-flex align-items-center gap-1">
                      <Icon name="i-bi:hdd-network" class=" text-danger" /> {{ doc.dimensione }}
                    </span>
                    <span class="dot-separator"></span>
                    <span class="d-inline-flex align-items-center gap-1">
                      <Icon name="i-bi:calendar-event" class=" text-danger" /> Pubblicato: {{ doc.dataPubblicazione }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Download Button -->
              <div class="col-12 col-md-4 col-lg-3 text-md-end pt-2 pt-md-0 border-top border-md-0">
                <a
                  :href="doc.urlDownload"
                  :download="doc.titolo"
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

      <!-- Empty State -->
      <div v-else class="card border-0 shadow-sm rounded-4 text-center py-5 px-3 bg-white">
        <div class="card-body">
          <div class="empty-icon-wrapper rounded-circle bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center mb-3">
            <Icon name="i-bi:folder-x" class=" fs-1" />
          </div>
          <h4 class="fw-bold text-dark mb-2">Nessun documento trovato</h4>
          <p class="text-secondary mx-auto max-w-md mb-4">
            Non ci sono documenti corrispondenti ai filtri applicati. Prova a modificare i termini di ricerca o l'anno selezionato.
          </p>
          <button
            @click="resetFiltri"
            class="btn btn-outline-danger btn-md rounded-3 px-4 fw-semibold"
          >
            <Icon name="i-bi:arrow-counterclockwise" class=" me-1" /> Ripristina tutti i filtri
          </button>
        </div>
      </div>

      <!-- Divisore Component -->
      <Divisore />

      <!-- Card Call to Action Dinamica -->
      <div class="card bg-light border-0 rounded-4 p-4 p-md-5 text-center shadow-lg">
        <div class="card-body p-0">
          <div class="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle mb-3 p-3" style="width: 50px; height: 50px;">
            <Icon :name="ctaInfoCalculated.icona" class="fs-4" />
          </div>
          
          <h4 class="fw-bold text-dark mb-2">{{ ctaInfoCalculated.titolo }}</h4>
          <p class="text-secondary mb-4 col-md-8 mx-auto">
            {{ ctaInfoCalculated.descrizione }}
          </p>

          <a
            :href="`mailto:${ctaInfoCalculated.emailPec}`"
            class="btn btn-danger btn-lg rounded-pill px-4 py-2 text-white fw-semibold d-inline-flex align-items-center gap-2 shadow-sm"
          >
            <span>{{ ctaInfoCalculated.testoPulsante }}</span>
            <Icon :name="ctaInfoCalculated.iconaPulsante" aria-hidden="true" />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

export interface Categoria {
  id: string
  nome: string
}

export interface Documento {
  id: string
  titolo: string
  descrizione: string
  categoriaId: string
  anno: number
  formato: 'pdf' | 'zip' | 'xlsx' | string
  dimensione: string
  dataPubblicazione: string
  urlDownload: string
}

export interface CtaConfig {
  titolo?: string
  descrizione?: string
  emailPec?: string
  testoPulsante?: string
  icona?: string
  iconaPulsante?: string
}

// Props con defaults
const props = withDefaults(
  defineProps<{
    documenti?: Documento[]
    categorie?: Categoria[]
    anniDisponibili?: number[]
    ctaInfo?: CtaConfig
  }>(),
  {
    documenti: () => [],
    categorie: () => [
      { id: 'bilanci', nome: 'Bilanci e Rendiconti Economici' },
      { id: '5x1000', nome: 'Rendicontazione 5x1000' },
      { id: 'contributi', nome: 'Contributi Pubblici (L. 124/2017)' },
      { id: 'statuto', nome: 'Statuto e Regolamenti Associativi' },
      { id: 'organi', nome: 'Organi Sociali e Incarichi' }
    ],
    anniDisponibili: () => [],
    ctaInfo: () => ({})
  }
)

// Emits per eventuale tracciamento/gestione eventi dal genitore
const emit = defineEmits<{
  (e: 'download', documento: Documento): void
  (e: 'reset-filtri'): void
}>()

// Gestione dei filtri di stato
const filtroRicerca = ref('')
const categoriaSelezionata = ref('tutte')
const annoSelezionato = ref<string | number>('tutti')

// Configurazione Call to Action dinamica con valori predefiniti
const ctaInfoCalculated = computed<Required<CtaConfig>>(() => {
  return {
    titolo: props.ctaInfo.titolo ?? 'Non trovi il documento che cerchi?',
    descrizione:
      props.ctaInfo.descrizione ??
      'I soci ed i cittadini aventi diritto possono presentare una richiesta formale di accesso agli atti e verbali direttamente alla nostra segreteria amministrativa.',
    emailPec: props.ctaInfo.emailPec ?? 'comitato.rubiera@cert.cri.it',
    testoPulsante: props.ctaInfo.testoPulsante ?? 'Invia richiesta via PEC',
    icona: props.ctaInfo.icona ?? 'i-bi:file-earmark-lock',
    iconaPulsante: props.ctaInfo.iconaPulsante ?? 'i-bi:envelope-at'
  }
})

// Estrae automaticamente gli anni univoci dai documenti se non specificati espressamente
const anniDisponibiliCalcolati = computed<number[]>(() => {
  if (props.anniDisponibili && props.anniDisponibili.length > 0) {
    return props.anniDisponibili
  }
  const anniSet = new Set(props.documenti.map((doc) => doc.anno))
  return Array.from(anniSet).sort((a, b) => b - a)
})

// Filtraggio Reattivo dei Documenti
const documentiFiltrati = computed(() => {
  return props.documenti.filter((doc) => {
    const matchCategoria =
      categoriaSelezionata.value === 'tutte' ||
      doc.categoriaId === categoriaSelezionata.value

    const matchAnno =
      annoSelezionato.value === 'tutti' ||
      doc.anno === Number(annoSelezionato.value)

    const testo = filtroRicerca.value.toLowerCase().trim()
    const matchTesto =
      !testo ||
      doc.titolo.toLowerCase().includes(testo) ||
      doc.descrizione.toLowerCase().includes(testo) ||
      doc.anno.toString().includes(testo)

    return matchCategoria && matchAnno && matchTesto
  })
})

const getNomeCategoria = (categoriaId: string): string => {
  const cat = props.categorie.find((c) => c.id === categoriaId)
  return cat ? cat.nome : 'Generale'
}

const getIconaEstensione = (formato: string): string => {
  switch (formato.toLowerCase()) {
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

const resetFiltri = () => {
  filtroRicerca.value = ''
  categoriaSelezionata.value = 'tutte'
  annoSelezionato.value = 'tutti'
  emit('reset-filtri')
}

const onDownload = (doc: Documento) => {
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
