<template>
  <div class="container py-4 py-md-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-9">
        
        <!-- Accordion FAQ -->
        <div id="accordionFaqRubiera" class="accordion accordion-flush d-flex flex-column gap-3">
          <div
            v-for="(item, index) in faq.items"
            :key="item.id"
            class="accordion-item border rounded-3 overflow-hidden shadow-sm"
          >
            <h2 class="accordion-header" :id="`heading-${item.id}`">
              <!--
                La prima voce è aperta (`show` sul pannello) ma il pulsante
                aveva comunque `collapsed`: stato visivo e aria-expanded
                risultavano in contraddizione. Ora la classe segue il dato.
              -->
              <button
                class="accordion-button bg-white text-dark fw-semibold p-3 p-md-4 shadow-none"
                :class="{ collapsed: index !== 0 }"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#faq-${item.id}`"
                :aria-expanded="index === 0"
                :aria-controls="`faq-${item.id}`"
              >
                <!-- Badge Numerico -->
                <span class="badge bg-danger-subtle text-danger fs-6 rounded-pill me-3 px-3 py-2">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>

                <!-- Domanda -->
                <span class="flex-grow-1 pe-3 fs-6 fs-md-5">
                  {{ item.question }}
                </span>
              </button>
            </h2>

            <!-- Contenuto Risposta -->
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

        <!-- Divisore Premium Croce Rossa -->
        <LazyDivisore />

        <!-- Card Call to Action (Contatti) -->
        <div class="card bg-light border-0 rounded-4 p-4 p-md-5 text-center shadow-lg">
          <div class="card-body p-0">
            <div class="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle mb-3 p-3" style="width: 50px; height: 50px;">
              <Icon name="i-bi:question-lg" class=" fs-4" />
            </div>
            
            <h2 class="h4 fw-bold text-dark mb-2">Non hai trovato la risposta che cercavi?</h2>
            <p class="text-secondary mb-4 col-md-8 mx-auto">
              Il nostro team è sempre a disposizione per fornirti tutte le informazioni necessarie sui nostri servizi e attività.
            </p>

            <NuxtLink
              to="/contatti"
              class="btn btn-danger btn-lg rounded-pill px-4 py-2 text-white fw-semibold d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <span>Contatta il Comitato di Rubiera</span>
              <Icon name="i-bi:arrow-right" class="" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface FaqItem {
  /** Identificativo stabile: usato per gli id DOM dell'accordion. */
  id: string
  question: string
  answer: string
}

export interface FaqData {
  items: FaqItem[]
}

defineProps<{
  faq: FaqData
}>()
</script>

<style scoped>
.accordion-button:hover {
  background-color: var(--bs-light) !important;
}

.accordion-button:not(.collapsed) {
  color: var(--bs-danger) !important;
}

.accordion-button::after {
  transition: transform 0.2s ease-in-out;
}
</style>