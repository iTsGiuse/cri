<template>
  <div class="bg-light">

    <!-- ================================================== -->
    <!-- INTRODUZIONE -->
    <!-- ================================================== -->

    <section class="py-4 py-lg-5">
      <div class="container">

        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">

            <div class="mb-4 mb-lg-5 text-center text-lg-start">
              <span class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 mb-3">
                <Icon
                  :name="pageContent.badge.icon"
                  class="me-1"
                />

                {{ pageContent.badge.label }}
              </span>

              <!-- L'h1 della pagina è quello dell'hero: qui si riparte da h2. -->
              <h2 class="display-5 fw-bold text-dark mb-3">
                {{ pageContent.title }}
              </h2>

              <p class="lead text-secondary mb-0">
                {{ pageContent.intro }}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>


    <!-- ================================================== -->
    <!-- PERCHÉ DIVENTARE VOLONTARIO -->
    <!-- ================================================== -->

    <section class="pb-4 pb-lg-5">
      <div class="container">

        <div class="row g-4">

          <div
            v-for="benefit in pageContent.benefits"
            :key="benefit.title"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="card h-100 border-0 shadow-sm rounded-4">
              <div class="card-body p-4">

                <div
                  class="d-inline-flex align-items-center justify-content-center rounded-3 bg-danger-subtle text-danger mb-4"
                  style="width: 52px; height: 52px;"
                >
                  <Icon
                    :name="benefit.icon"
                    class="fs-4"
                  />
                </div>

                <h2 class="h5 fw-bold text-dark mb-3">
                  {{ benefit.title }}
                </h2>

                <p class="text-secondary mb-0">
                  {{ benefit.description }}
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- ================================================== -->
    <!-- CHI PUÒ DIVENTARE VOLONTARIO -->
    <!-- ================================================== -->

    <section class="py-4 py-lg-5 bg-white">
      <div class="container">

        <div class="row align-items-center g-4 g-lg-5">

          <!-- Immagine -->
          <div class="col-12 col-lg-6">

            <div class="rounded-4 overflow-hidden shadow-sm">
              <NuxtImg
                :src="pageContent.requirements.imageUrl"
                :alt="pageContent.requirements.imageAlt"
                width="1000"
                height="750"
                format="webp"
                loading="lazy"
                class="img-fluid w-100"
              />
            </div>

          </div>

          <!-- Testo -->
          <div class="col-12 col-lg-6">

            <span class="text-danger text-uppercase fw-bold small">
              {{ pageContent.requirements.eyebrow }}
            </span>

            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">
              {{ pageContent.requirements.title }}
            </h2>

            <p class="text-secondary mb-4">
              {{ pageContent.requirements.description }}
            </p>

            <div class="d-flex flex-column gap-3">

              <div
                v-for="requirement in pageContent.requirements.items"
                :key="requirement.title"
                class="d-flex align-items-start gap-3"
              >

                <div
                  class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger"
                  style="width: 40px; height: 40px;"
                >
                  <Icon :name="requirement.icon" />
                </div>

                <div>
                  <h3 class="h6 fw-bold text-dark mb-1">
                    {{ requirement.title }}
                  </h3>

                  <p class="small text-secondary mb-0">
                    {{ requirement.description }}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ================================================== -->
    <!-- COME DIVENTARE VOLONTARIO -->
    <!-- ================================================== -->

    <section class="py-4 py-lg-5">
      <div class="container">

        <div class="row justify-content-center mb-4 mb-lg-5">
          <div class="col-12 col-xl-8 text-center">

            <span class="text-danger text-uppercase fw-bold small">
              {{ pageContent.path.eyebrow }}
            </span>

            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">
              {{ pageContent.path.title }}
            </h2>

            <p class="text-secondary mb-0">
              {{ pageContent.path.description }}
            </p>

          </div>
        </div>


        <div class="row g-4">

          <div
            v-for="(step, index) in pageContent.path.steps"
            :key="step.title"
            class="col-12 col-md-6 col-lg-3"
          >

            <div class="card h-100 border-0 shadow-sm rounded-4">
              <div class="card-body p-4">

                <div
                  class="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white fw-bold mb-4"
                  style="width: 48px; height: 48px;"
                >
                  {{ index + 1 }}
                </div>

                <h3 class="h5 fw-bold text-dark mb-3">
                  {{ step.title }}
                </h3>

                <p class="text-secondary small mb-0">
                  {{ step.description }}
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ================================================== -->
    <!-- COSA PUOI FARE -->
    <!-- ================================================== -->

    <section class="py-4 py-lg-5 bg-white">
      <div class="container">

        <div class="row justify-content-center mb-4 mb-lg-5">
          <div class="col-12 col-xl-8 text-center">

            <span class="text-danger text-uppercase fw-bold small">
              {{ pageContent.activities.eyebrow }}
            </span>

            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">
              {{ pageContent.activities.title }}
            </h2>

            <p class="text-secondary mb-0">
              {{ pageContent.activities.description }}
            </p>

          </div>
        </div>


        <div class="row g-3 g-lg-4">

          <div
            v-for="activity in pageContent.activities.items"
            :key="activity.title"
            class="col-12 col-sm-6 col-lg-4"
          >

            <div class="d-flex align-items-start gap-3 p-3 p-lg-4 border rounded-4 h-100 bg-light">

              <div
                class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3 bg-danger text-white"
                style="width: 44px; height: 44px;"
              >
                <Icon :name="activity.icon" />
              </div>

              <div>
                <h3 class="h6 fw-bold text-dark mb-1">
                  {{ activity.title }}
                </h3>

                <p class="small text-secondary mb-0">
                  {{ activity.description }}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ================================================== -->
    <!-- FAQ -->
    <!-- ================================================== -->

    <section class="py-4 py-lg-5">
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-12 col-xl-9">

            <div class="text-center mb-4 mb-lg-5">

              <span class="text-danger text-uppercase fw-bold small">
                {{ pageContent.faq.eyebrow }}
              </span>

              <h2 class="display-6 fw-bold text-dark mt-2 mb-0">
                {{ pageContent.faq.title }}
              </h2>

            </div>


            <div class="accordion" id="faqVolontari">

              <div
                v-for="(faqItem, index) in pageContent.faq.items"
                :key="faqItem.question"
                class="accordion-item border-0 shadow-sm rounded-3 mb-3 overflow-hidden"
              >

                <h3
                  :id="`faq-heading-${index}`"
                  class="accordion-header"
                >
                  <button
                    class="accordion-button collapsed fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#faq-collapse-${index}`"
                    :aria-controls="`faq-collapse-${index}`"
                  >
                    {{ faqItem.question }}
                  </button>
                </h3>

                <div
                  :id="`faq-collapse-${index}`"
                  class="accordion-collapse collapse"
                  :aria-labelledby="`faq-heading-${index}`"
                  data-bs-parent="#faqVolontari"
                >
                  <div class="accordion-body text-secondary">
                    {{ faqItem.answer }}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ================================================== -->
    <!-- CTA -->
    <!-- ================================================== -->

    <section class="pb-5">
      <div class="container">

        <div class="bg-danger rounded-4 shadow-lg p-4 p-md-5">

          <div class="row align-items-center g-4">

            <div class="col-12 col-lg-8">

              <h2 class="display-6 fw-bold text-white mb-3">
                {{ pageContent.cta.title }}
              </h2>

              <p class="text-white text-opacity-75 mb-0">
                {{ pageContent.cta.description }}
              </p>

            </div>

            <div class="col-12 col-lg-4">

              <div class="d-flex flex-column flex-sm-row flex-lg-column gap-2">

                <NuxtLink
                  :to="pageContent.cta.primary.url"
                  class="btn btn-light text-danger fw-semibold rounded-3 py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                >
                  <Icon :name="pageContent.cta.primary.icon" />

                  {{ pageContent.cta.primary.label }}

                  <Icon name="i-bi:arrow-right" />
                </NuxtLink>

                <NuxtLink
                  :to="pageContent.cta.secondary.url"
                  class="btn btn-outline-light fw-semibold rounded-3 py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                >
                  <Icon :name="pageContent.cta.secondary.icon" />

                  {{ pageContent.cta.secondary.label }}
                </NuxtLink>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

  </div>
</template>


<script setup lang="ts">
import { siteConfig } from '~/data/config'

/* ================================================== */
/* DATI PAGINA */
/* ================================================== */

const pageContent = {

  badge: {
    label: 'Croce Rossa Italiana',
    icon: 'i-bi:heart-fill',
  },

  title: 'Diventa volontario',
  
  intro:
    'Entra nella Croce Rossa Italiana e metti il tuo tempo, le tue capacità e la tua voglia di aiutare al servizio della comunità.',


  /* ================================================== */
  /* VANTAGGI */
  /* ================================================== */

  benefits: [

    {
      title: 'Aiuta chi ha bisogno',
      description:
        'Contribuisci concretamente alle attività del Comitato e porta il tuo aiuto alle persone che ne hanno più bisogno.',
      icon: 'i-bi:heart-pulse',
    },

    {
      title: 'Impara nuove competenze',
      description:
        'Partecipa a corsi e attività formative che ti permettono di acquisire competenze utili nella vita di tutti i giorni.',
      icon: 'i-bi:book',
    },

    {
      title: 'Fai parte di una squadra',
      description:
        'Conosci nuove persone, condividi esperienze e collabora con altri volontari accomunati dagli stessi valori.',
      icon: 'i-bi:people',
    },

  ],


  /* ================================================== */
  /* REQUISITI */
  /* ================================================== */

  requirements: {

    eyebrow: 'Prima di iniziare',

    title: 'Chi può diventare volontario?',

    description:
      'Il volontariato in Croce Rossa è aperto a tutte le persone che desiderano impegnarsi per gli altri e condividere i nostri Principi Fondamentali.',

    imageUrl: '/images/volontari.jpg',

    imageAlt: 'Volontari della Croce Rossa Italiana',

    items: [

      {
        title: 'Avere almeno 14 anni',
        description:
          'È possibile iniziare il percorso di volontariato a partire dai 14 anni, secondo le modalità previste per la propria fascia di età.',
        icon: 'i-bi:person-check',
      },

      {
        title: 'Condividere i nostri valori',
        description:
          'È importante riconoscersi nei Principi Fondamentali della Croce Rossa e nel suo impegno a favore delle persone.',
        icon: 'i-bi:heart',
      },

      {
        title: 'Avere voglia di partecipare',
        description:
          'Non è necessario essere esperti: formazione e affiancamento ti accompagneranno durante il percorso.',
        icon: 'i-bi:hand-thumbs-up',
      },

      {
        title: 'Mettere a disposizione il proprio tempo',
        description:
          'Ogni volontario può contribuire compatibilmente con i propri impegni e con le proprie disponibilità.',
        icon: 'i-bi:clock',
      },

    ],

  },


  /* ================================================== */
  /* PERCORSO */
/* ================================================== */

  path: {

    eyebrow: 'Come iniziare',

    title: 'Il tuo percorso da volontario',

    description:
      'Diventare volontario è un percorso semplice e graduale. Ti accompagneremo passo dopo passo.',

    steps: [

      {
        title: 'Contattaci',
        description:
          'Mettiti in contatto con il Comitato per ricevere informazioni sulle attività e sulle modalità di partecipazione.',
      },

      {
        title: 'Partecipa al corso',
        description:
          'Segui il percorso formativo previsto per conoscere la Croce Rossa, i suoi valori e il ruolo dei volontari.',
      },

      {
        title: 'Inizia l’attività',
        description:
          'Dopo la formazione potrai iniziare a partecipare alle attività del Comitato in base alle tue disponibilità.',
      },

      {
        title: 'Cresci con noi',
        description:
          'Continua a formarti, acquisisci nuove competenze e scopri le tante attività in cui puoi dare il tuo contributo.',
      },

    ],

  },


  /* ================================================== */
  /* ATTIVITÀ */
/* ================================================== */

  activities: {

    eyebrow: 'Il mondo della Croce Rossa',

    title: 'In cosa puoi impegnarti',

    description:
      'Le attività sono numerose e diverse tra loro. Potrai trovare quella più vicina alle tue passioni e alle esigenze della comunità.',

    items: [

      {
        title: 'Assistenza e soccorso',
        description:
          'Supporta le attività dedicate all’assistenza e al soccorso delle persone.',
        icon: 'i-bi:activity',
      },

      {
        title: 'Emergenze',
        description:
          'Contribuisci alle attività di preparazione e risposta alle emergenze.',
        icon: 'i-bi:exclamation-triangle',
      },

      {
        title: 'Inclusione sociale',
        description:
          'Partecipa ai progetti rivolti alle persone più vulnerabili.',
        icon: 'i-bi:people',
      },

      {
        title: 'Giovani',
        description:
          'Collabora nelle attività dedicate ai giovani e alla loro crescita.',
        icon: 'i-bi:person-hearts',
      },

      {
        title: 'Formazione',
        description:
          'Aiuta a diffondere conoscenze e comportamenti utili alla comunità.',
        icon: 'i-bi:mortarboard',
      },

      {
        title: 'Prevenzione',
        description:
          'Partecipa alle iniziative di sensibilizzazione e prevenzione.',
        icon: 'i-bi:shield-check',
      },

    ],

  },


  /* ================================================== */
  /* FAQ */
/* ================================================== */

  faq: {

    eyebrow: 'Domande frequenti',

    title: 'Hai qualche dubbio?',

    items: [

      {
        question: 'Devo avere esperienza per diventare volontario?',
        answer:
          'No. Non è necessario avere esperienza precedente. La formazione e l’affiancamento ti permetteranno di acquisire gradualmente le competenze necessarie.',
      },

      {
        question: 'Quanto tempo devo dedicare al volontariato?',
        answer:
          'Non esiste un’unica disponibilità valida per tutti. Potrai concordare la tua partecipazione in base alle attività disponibili e al tempo che puoi mettere a disposizione.',
      },

      {
        question: 'Posso scegliere le attività a cui partecipare?',
        answer:
          'Le attività a cui potrai partecipare dipendono dalla tua formazione, dalle esigenze del Comitato e dalle opportunità disponibili. Insieme potrai individuare quelle più adatte a te.',
      },

      {
        question: 'Come posso avere maggiori informazioni?',
        answer:
          'Puoi contattare direttamente il Comitato oppure utilizzare il pulsante di contatto presente in questa pagina per ricevere tutte le informazioni sul percorso.',
      },

    ],

  },


  /* ================================================== */
  /* CTA */
/* ================================================== */

  cta: {

    title: 'Vuoi metterti in gioco?',

    description:
      'Scopri come entrare nella nostra squadra e inizia il tuo percorso come volontario della Croce Rossa Italiana.',

    primary: {
      label: 'Diventa volontario',
      url: '/contatti',
      icon: 'i-bi:heart-fill',
    },

    secondary: {
      label: 'Contattaci',
      url: '/contatti',
      icon: 'i-bi:envelope',
    },

  },

}


/* ================================================== */
/* SEO */
/* ================================================== */

useSeoMeta({

  title: `Diventa volontario | ${siteConfig.shortName}`,

  description:
    `Scopri come diventare volontario della ${siteConfig.name}.`,

})

</script>