<template>
  <main class="bg-light py-5">
    <div class="container pb-5">
      <!-- REQUISITI -->
      <section class="mb-5" aria-labelledby="requirements-title">
        <div class="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-4">
          <div>
            <span class="text-danger fw-semibold small text-uppercase">
              {{ pageData.requirementsSection.eyebrow }}
            </span>

            <h2 id="requirements-title" class="h3 fw-bold text-dark mb-0 mt-1">
              {{ pageData.requirementsSection.title }}
            </h2>
          </div>

          <span class="text-secondary small">
            {{ pageData.requirementsSection.subtitle }}
          </span>
        </div>

        <div class="row g-4">
          <div
            v-for="requirement in requirements"
            :key="requirement.number"
            class="col-12 col-md-4"
          >
            <article
              class="card border-0 rounded-4 shadow-sm h-100 border-top border-danger border-4"
            >
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div
                    class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style="width: 44px; height: 44px;"
                    aria-hidden="true"
                  >
                    <Icon :name="requirement.icon" />
                  </div>

                  <span class="text-danger fw-bold small">
                    {{ requirement.number }}
                  </span>
                </div>

                <h3 class="h5 fw-bold text-dark mb-2">
                  {{ requirement.title }}
                </h3>

                <p class="text-secondary small mb-0">
                  {{ requirement.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- PERCORSO -->
      <section class="mb-5" aria-labelledby="steps-title">
        <div class="card border-0 rounded-4 shadow-sm bg-white overflow-hidden">
          <div class="card-body p-4 p-lg-5">
            <div class="mb-4">
              <span
                class="badge bg-danger-subtle text-danger fw-bold text-uppercase px-3 py-2 rounded-pill mb-2"
              >
                {{ pageData.stepsSection.badge }}
              </span>

              <h2 id="steps-title" class="h3 fw-bold text-dark mb-2">
                {{ pageData.stepsSection.title }}
              </h2>

              <p class="text-secondary small mb-0">
                {{ pageData.stepsSection.description }}
              </p>
            </div>

            <div class="row g-4">
              <div
                v-for="step in steps"
                :key="step.number"
                class="col-12 col-sm-6 col-lg-3"
              >
                <article
                  class="bg-light border rounded-4 h-100 p-4"
                >
                  <div
                    class="d-flex align-items-center justify-content-between mb-4"
                  >
                    <span class="badge bg-danger text-white rounded-pill px-3 py-2">
                      Step {{ step.number }}
                    </span>

                    <Icon
                      :name="step.icon"
                      class="text-danger fs-5"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 class="h5 fw-bold text-dark mb-2">
                    {{ step.title }}
                  </h3>

                  <p class="text-secondary small mb-0">
                    {{ step.description }}
                  </p>
                </article>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="border-top mt-5 pt-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4"
            >
              <div class="d-flex align-items-center gap-3">
                <div
                  class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style="width: 48px; height: 48px;"
                  aria-hidden="true"
                >
                  <Icon name="bi:envelope-heart-fill" />
                </div>

                <div>
                  <h3 class="h6 fw-bold text-dark mb-1">
                    {{ pageData.stepsSection.cta.title }}
                  </h3>

                  <p class="text-secondary small mb-0">
                    {{ pageData.stepsSection.cta.description }}
                  </p>
                </div>
              </div>

              <a
                :href="`mailto:${contactConfig.email}`"
                class="btn btn-danger rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 flex-shrink-0"
              >
                {{ pageData.stepsSection.cta.buttonText }}
                <Icon name="bi:arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ + CONTATTI -->
      <section aria-labelledby="info-title">
        <h2 id="info-title" class="visually-hidden">
          Informazioni e contatti
        </h2>

        <div class="row g-4">
          <!-- FAQ -->
          <div class="col-12 col-lg-7">
            <div class="card border-0 rounded-4 shadow-sm bg-white h-100">
              <div class="card-body p-4 p-lg-5">
                <span class="text-danger fw-semibold small text-uppercase">
                  {{ pageData.faqSection.eyebrow }}
                </span>

                <h3 class="h3 fw-bold text-dark mt-1 mb-2">
                  {{ pageData.faqSection.title }}
                </h3>

                <p class="text-secondary small mb-4">
                  {{ pageData.faqSection.description }}
                </p>

                <div class="accordion accordion-flush" id="volunteerFaq">
                  <div
                    v-for="(faq, index) in faqs"
                    :key="faq.question"
                    class="accordion-item"
                  >
                    <h4
                      :id="`faq-heading-${index}`"
                      class="accordion-header"
                    >
                      <button
                        class="accordion-button collapsed px-0 shadow-none bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#faq-${index}`"
                        :aria-controls="`faq-${index}`"
                      >
                        <span class="fw-semibold text-dark">
                          {{ faq.question }}
                        </span>
                      </button>
                    </h4>

                    <div
                      :id="`faq-${index}`"
                      class="accordion-collapse collapse"
                      :aria-labelledby="`faq-heading-${index}`"
                      data-bs-parent="#volunteerFaq"
                    >
                      <div class="accordion-body px-0 pt-0 text-secondary small">
                        {{ faq.answer }}
                      </div>
                    </div>
                  </div>
                </div>

                <NuxtLink
                  to="/faq"
                  class="text-danger fw-semibold text-decoration-none small d-inline-flex align-items-center gap-2 mt-4"
                >
                  {{ pageData.faqSection.linkText }}
                  <Icon name="bi:arrow-right" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- CONTATTI -->
          <div class="col-12 col-lg-5">
            <aside
              class="card border-0 rounded-4 shadow-sm bg-white h-100"
              aria-labelledby="contacts-title"
            >
              <div class="card-body p-4 p-lg-5">
                <span class="text-danger fw-semibold small text-uppercase">
                  {{ pageData.contactsSection.eyebrow }}
                </span>

                <h3 id="contacts-title" class="h3 fw-bold text-dark mt-1 mb-2">
                  {{ pageData.contactsSection.title }}
                </h3>

                <p class="text-secondary small mb-4">
                  {{ pageData.contactsSection.description }}
                </p>

                <div class="d-flex flex-column gap-3">
                  <!-- TELEFONO -->
                  <a
                    :href="`tel:${contactConfig.phone.value}`"
                    class="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border text-decoration-none"
                  >
                    <div
                      class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style="width: 44px; height: 44px;"
                      aria-hidden="true"
                    >
                      <Icon name="bi:telephone-fill" />
                    </div>

                    <div>
                      <span class="d-block text-secondary small">
                        Telefono
                      </span>

                      <span class="text-dark fw-bold">
                        {{ contactConfig.phone.label }}
                      </span>
                    </div>
                  </a>

                  <!-- EMAIL -->
                  <a
                    :href="`mailto:${contactConfig.email}`"
                    class="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border text-decoration-none"
                  >
                    <div
                      class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style="width: 44px; height: 44px;"
                      aria-hidden="true"
                    >
                      <Icon name="bi:envelope-fill" />
                    </div>

                    <div>
                      <span class="d-block text-secondary small">
                        Email
                      </span>

                      <span class="text-danger fw-bold">
                        {{ contactConfig.email }}
                      </span>
                    </div>
                  </a>

                  <!-- INDIRIZZO -->
                  <a
                    :href="contactConfig.address.mapsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border text-decoration-none"
                  >
                    <div
                      class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style="width: 44px; height: 44px;"
                      aria-hidden="true"
                    >
                      <Icon name="bi:geo-alt-fill" />
                    </div>

                    <div>
                      <span class="d-block text-secondary small">
                        Sede
                      </span>

                      <address class="text-dark fw-semibold small mb-0 fst-normal">
                        {{ contactConfig.address.label }}
                      </address>
                    </div>
                  </a>
                </div>

                <div
                  class="alert alert-danger border-0 bg-danger-subtle text-danger small fw-semibold d-flex align-items-start gap-2 mt-4 mb-0"
                  role="note"
                >
                  <Icon
                    name="bi:info-circle-fill"
                    class="fs-5 flex-shrink-0"
                    aria-hidden="true"
                  />

                  <span>
                    {{ pageData.contactsSection.note }}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- CTA FINALE -->
      <section
        class="mt-5"
        aria-labelledby="final-cta-title"
      >
        <div class="bg-danger text-white rounded-4 p-4 p-lg-5 text-center">
          <div class="mx-auto" style="max-width: 720px;">
            <span class="opacity-75 small fw-semibold text-uppercase">
              {{ pageData.finalCta.eyebrow }}
            </span>

            <h2 id="final-cta-title" class="h2 fw-bold mt-2 mb-3">
              {{ pageData.finalCta.title }}
            </h2>

            <p class="mb-4 opacity-75">
              {{ pageData.finalCta.description }}
            </p>

            <a
              :href="`mailto:${contactConfig.email}`"
              class="btn btn-light text-danger rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2"
            >
              {{ pageData.finalCta.buttonText }}
              <Icon name="bi:arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { contactConfig } from '~/data/config'

const pageData = {
  requirementsSection: {
    eyebrow: 'Prima di iniziare',
    title: 'Cosa serve per diventare volontario',
    subtitle: 'Requisiti di accesso',
  },
  stepsSection: {
    badge: 'Il percorso',
    title: 'Come entrare in Croce Rossa',
    description:
      'Quattro passaggi per conoscere il Comitato, seguire il percorso formativo e iniziare la tua esperienza da volontario.',
    cta: {
      title: 'Vuoi sapere quando parte il prossimo corso?',
      description:
        'Contattaci per ricevere informazioni sulle prossime attività formative.',
      buttonText: 'Scrivici',
    },
  },
  faqSection: {
    eyebrow: 'Domande frequenti',
    title: 'Hai ancora qualche dubbio?',
    description:
      'Ecco alcune delle domande più comuni sul percorso per diventare volontario.',
    linkText: 'Consulta tutte le FAQ',
  },
  contactsSection: {
    eyebrow: 'Riferimenti',
    title: 'Contatti del Comitato',
    description:
      'Hai domande sul volontariato? Puoi contattarci direttamente attraverso i nostri recapiti ufficiali.',
    note: 'Per informazioni sul prossimo corso, contattaci direttamente: ti forniremo date e modalità aggiornate.',
  },
  finalCta: {
    eyebrow: 'Fai la differenza',
    title: 'Il tuo tempo può diventare aiuto concreto',
    description:
      'Scopri il volontariato in Croce Rossa e trova il modo migliore per mettere le tue capacità al servizio della comunità.',
    buttonText: 'Contattaci',
  },
}

const requirements = [
  {
    number: '01',
    icon: 'bi:person-fill',
    title: 'Età minima',
    description:
      "È possibile intraprendere il percorso a partire dai 14 anni. Per i minorenni sono previste le autorizzazioni richieste dalla normativa e dai regolamenti CRI.",
  },
  {
    number: '02',
    icon: 'bi:globe2',
    title: 'Condivisione dei Principi',
    description:
      'È necessario condividere i Principi Fondamentali della Croce Rossa e aderire ai valori che guidano l’attività dei volontari.',
  },
  {
    number: '03',
    icon: 'bi:mortarboard-fill',
    title: 'Formazione',
    description:
      'Il percorso prevede la partecipazione alla formazione prevista per l’accesso all’attività di volontariato presso il Comitato.',
  },
]

const steps = [
  {
    number: '01',
    icon: 'bi:chat-dots-fill',
    title: 'Contattaci',
    description:
      'Scrivici o contattaci per manifestare il tuo interesse e ricevere informazioni sul prossimo percorso di accesso.',
  },
  {
    number: '02',
    icon: 'bi:people-fill',
    title: 'Conosci il Comitato',
    description:
      'Partecipa agli incontri previsti per conoscere le attività, i volontari e le opportunità offerte dal Comitato di Rubiera.',
  },
  {
    number: '03',
    icon: 'bi:book-half',
    title: 'Segui la formazione',
    description:
      'Partecipa al percorso formativo previsto e acquisisci le conoscenze necessarie per iniziare la tua esperienza.',
  },
  {
    number: '04',
    icon: 'bi:patch-check-fill',
    title: 'Inizia il volontariato',
    description:
      'Concluse le attività previste dal percorso, potrai iniziare a partecipare alle attività del Comitato secondo le tue disponibilità.',
  },
]

const faqs = [
  {
    question: 'Quanto dura il percorso di accesso?',
    answer:
      'La durata e l’organizzazione del percorso possono variare in base alla programmazione del Comitato. Contattaci per conoscere le prossime date disponibili.',
  },
  {
    question: 'È previsto un costo per il percorso?',
    answer:
      'Eventuali quote, contributi o costi collegati al percorso possono dipendere dalle disposizioni e dalla programmazione in vigore. Per informazioni aggiornate è consigliato contattare direttamente il Comitato.',
  },
  {
    question: 'Quanto tempo devo dedicare al volontariato?',
    answer:
      'L’impegno può variare in base alle attività svolte e alla disponibilità del volontario. Durante il percorso potrai conoscere le diverse possibilità e individuare quelle più compatibili con il tuo tempo.',
  },
  {
    question: 'Posso diventare volontario anche se sono minorenne?',
    answer:
      'Il percorso può iniziare dai 14 anni. Per i minorenni sono previste specifiche condizioni e autorizzazioni: contattaci per conoscere le modalità applicabili.',
  },
]

</script>