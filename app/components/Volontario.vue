<template>
  <main class="bg-light">

    <!-- ================================================== -->
    <!-- INTRODUZIONE -->
    <!-- ================================================== -->

    <section class="py-4 py-lg-5">
      <div class="container">

        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">

            <div class="mb-4 mb-lg-5">
              <span class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 mb-3">
                <Icon
                  :name="pagina.badge.icona"
                  class="me-1"
                />

                {{ pagina.badge.testo }}
              </span>

              <h1 class="display-5 fw-bold text-dark mb-3">
                {{ pagina.titolo }}
              </h1>

              <p class="lead text-secondary mb-0">
                {{ pagina.introduzione }}
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
            v-for="vantaggio in pagina.vantaggi"
            :key="vantaggio.titolo"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="card h-100 border-0 shadow-sm rounded-4">
              <div class="card-body p-4">

                <div
                  class="d-inline-flex align-items-center justify-content-center rounded-3 bg-danger-subtle text-danger mb-4"
                  style="width: 52px; height: 52px;"
                >
                  <Icon
                    :name="vantaggio.icona"
                    class="fs-4"
                  />
                </div>

                <h2 class="h5 fw-bold text-dark mb-3">
                  {{ vantaggio.titolo }}
                </h2>

                <p class="text-secondary mb-0">
                  {{ vantaggio.descrizione }}
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
                :src="pagina.requisiti.immagine"
                :alt="pagina.requisiti.alt"
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
              {{ pagina.requisiti.sovratitolo }}
            </span>

            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">
              {{ pagina.requisiti.titolo }}
            </h2>

            <p class="text-secondary mb-4">
              {{ pagina.requisiti.descrizione }}
            </p>

            <div class="d-flex flex-column gap-3">

              <div
                v-for="requisito in pagina.requisiti.elenco"
                :key="requisito.titolo"
                class="d-flex align-items-start gap-3"
              >

                <div
                  class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger"
                  style="width: 40px; height: 40px;"
                >
                  <Icon :name="requisito.icona" />
                </div>

                <div>
                  <h3 class="h6 fw-bold text-dark mb-1">
                    {{ requisito.titolo }}
                  </h3>

                  <p class="small text-secondary mb-0">
                    {{ requisito.descrizione }}
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
              {{ pagina.percorso.sovratitolo }}
            </span>

            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">
              {{ pagina.percorso.titolo }}
            </h2>

            <p class="text-secondary mb-0">
              {{ pagina.percorso.descrizione }}
            </p>

          </div>
        </div>


        <div class="row g-4">

          <div
            v-for="(passo, indice) in pagina.percorso.passaggi"
            :key="passo.titolo"
            class="col-12 col-md-6 col-lg-3"
          >

            <div class="card h-100 border-0 shadow-sm rounded-4">
              <div class="card-body p-4">

                <div
                  class="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white fw-bold mb-4"
                  style="width: 48px; height: 48px;"
                >
                  {{ indice + 1 }}
                </div>

                <h3 class="h5 fw-bold text-dark mb-3">
                  {{ passo.titolo }}
                </h3>

                <p class="text-secondary small mb-0">
                  {{ passo.descrizione }}
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
              {{ pagina.attivita.sovratitolo }}
            </span>

            <h2 class="display-6 fw-bold text-dark mt-2 mb-3">
              {{ pagina.attivita.titolo }}
            </h2>

            <p class="text-secondary mb-0">
              {{ pagina.attivita.descrizione }}
            </p>

          </div>
        </div>


        <div class="row g-3 g-lg-4">

          <div
            v-for="attivita in pagina.attivita.elenco"
            :key="attivita.titolo"
            class="col-12 col-sm-6 col-lg-4"
          >

            <div class="d-flex align-items-start gap-3 p-3 p-lg-4 border rounded-4 h-100 bg-light">

              <div
                class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3 bg-danger text-white"
                style="width: 44px; height: 44px;"
              >
                <Icon :name="attivita.icona" />
              </div>

              <div>
                <h3 class="h6 fw-bold text-dark mb-1">
                  {{ attivita.titolo }}
                </h3>

                <p class="small text-secondary mb-0">
                  {{ attivita.descrizione }}
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
                {{ pagina.faq.sovratitolo }}
              </span>

              <h2 class="display-6 fw-bold text-dark mt-2 mb-0">
                {{ pagina.faq.titolo }}
              </h2>

            </div>


            <div class="accordion" id="faqVolontari">

              <div
                v-for="(domanda, indice) in pagina.faq.domande"
                :key="domanda.domanda"
                class="accordion-item border-0 shadow-sm rounded-3 mb-3 overflow-hidden"
              >

                <h3
                  :id="`faq-heading-${indice}`"
                  class="accordion-header"
                >
                  <button
                    class="accordion-button collapsed fw-semibold shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#faq-collapse-${indice}`"
                    :aria-controls="`faq-collapse-${indice}`"
                  >
                    {{ domanda.domanda }}
                  </button>
                </h3>

                <div
                  :id="`faq-collapse-${indice}`"
                  class="accordion-collapse collapse"
                  :aria-labelledby="`faq-heading-${indice}`"
                  data-bs-parent="#faqVolontari"
                >
                  <div class="accordion-body text-secondary">
                    {{ domanda.risposta }}
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
                {{ pagina.cta.titolo }}
              </h2>

              <p class="text-white text-opacity-75 mb-0">
                {{ pagina.cta.descrizione }}
              </p>

            </div>

            <div class="col-12 col-lg-4">

              <div class="d-flex flex-column flex-sm-row flex-lg-column gap-2">

                <NuxtLink
                  :to="pagina.cta.pulsante.url"
                  class="btn btn-light text-danger fw-semibold rounded-3 py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                >
                  <Icon :name="pagina.cta.pulsante.icona" />

                  {{ pagina.cta.pulsante.testo }}

                  <Icon name="i-bi:arrow-right" />
                </NuxtLink>

                <NuxtLink
                  :to="pagina.cta.secondario.url"
                  class="btn btn-outline-light fw-semibold rounded-3 py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                >
                  <Icon :name="pagina.cta.secondario.icona" />

                  {{ pagina.cta.secondario.testo }}
                </NuxtLink>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

  </main>
</template>


<script setup lang="ts">

/* ================================================== */
/* DATI PAGINA */
/* ================================================== */

const pagina = {

  badge: {
    testo: 'Croce Rossa Italiana',
    icona: 'i-bi:heart-fill',
  },

  titolo: 'Diventa volontario',
  
  introduzione:
    'Entra nella Croce Rossa Italiana e metti il tuo tempo, le tue capacità e la tua voglia di aiutare al servizio della comunità.',


  /* ================================================== */
  /* VANTAGGI */
  /* ================================================== */

  vantaggi: [

    {
      titolo: 'Aiuta chi ha bisogno',
      descrizione:
        'Contribuisci concretamente alle attività del Comitato e porta il tuo aiuto alle persone che ne hanno più bisogno.',
      icona: 'i-bi:heart-pulse',
    },

    {
      titolo: 'Impara nuove competenze',
      descrizione:
        'Partecipa a corsi e attività formative che ti permettono di acquisire competenze utili nella vita di tutti i giorni.',
      icona: 'i-bi:book',
    },

    {
      titolo: 'Fai parte di una squadra',
      descrizione:
        'Conosci nuove persone, condividi esperienze e collabora con altri volontari accomunati dagli stessi valori.',
      icona: 'i-bi:people',
    },

  ],


  /* ================================================== */
  /* REQUISITI */
  /* ================================================== */

  requisiti: {

    sovratitolo: 'Prima di iniziare',

    titolo: 'Chi può diventare volontario?',

    descrizione:
      'Il volontariato in Croce Rossa è aperto a tutte le persone che desiderano impegnarsi per gli altri e condividere i nostri Principi Fondamentali.',

    immagine: '/images/volontari.jpg',

    alt: 'Volontari della Croce Rossa Italiana',

    elenco: [

      {
        titolo: 'Avere almeno 14 anni',
        descrizione:
          'È possibile iniziare il percorso di volontariato a partire dai 14 anni, secondo le modalità previste per la propria fascia di età.',
        icona: 'i-bi:person-check',
      },

      {
        titolo: 'Condividere i nostri valori',
        descrizione:
          'È importante riconoscersi nei Principi Fondamentali della Croce Rossa e nel suo impegno a favore delle persone.',
        icona: 'i-bi:heart',
      },

      {
        titolo: 'Avere voglia di partecipare',
        descrizione:
          'Non è necessario essere esperti: formazione e affiancamento ti accompagneranno durante il percorso.',
        icona: 'i-bi:hand-thumbs-up',
      },

      {
        titolo: 'Mettere a disposizione il proprio tempo',
        descrizione:
          'Ogni volontario può contribuire compatibilmente con i propri impegni e con le proprie disponibilità.',
        icona: 'i-bi:clock',
      },

    ],

  },


  /* ================================================== */
  /* PERCORSO */
/* ================================================== */

  percorso: {

    sovratitolo: 'Come iniziare',

    titolo: 'Il tuo percorso da volontario',

    descrizione:
      'Diventare volontario è un percorso semplice e graduale. Ti accompagneremo passo dopo passo.',

    passaggi: [

      {
        titolo: 'Contattaci',
        descrizione:
          'Mettiti in contatto con il Comitato per ricevere informazioni sulle attività e sulle modalità di partecipazione.',
      },

      {
        titolo: 'Partecipa al corso',
        descrizione:
          'Segui il percorso formativo previsto per conoscere la Croce Rossa, i suoi valori e il ruolo dei volontari.',
      },

      {
        titolo: 'Inizia l’attività',
        descrizione:
          'Dopo la formazione potrai iniziare a partecipare alle attività del Comitato in base alle tue disponibilità.',
      },

      {
        titolo: 'Cresci con noi',
        descrizione:
          'Continua a formarti, acquisisci nuove competenze e scopri le tante attività in cui puoi dare il tuo contributo.',
      },

    ],

  },


  /* ================================================== */
  /* ATTIVITÀ */
/* ================================================== */

  attivita: {

    sovratitolo: 'Il mondo della Croce Rossa',

    titolo: 'In cosa puoi impegnarti',

    descrizione:
      'Le attività sono numerose e diverse tra loro. Potrai trovare quella più vicina alle tue passioni e alle esigenze della comunità.',

    elenco: [

      {
        titolo: 'Assistenza e soccorso',
        descrizione:
          'Supporta le attività dedicate all’assistenza e al soccorso delle persone.',
        icona: 'i-bi:activity',
      },

      {
        titolo: 'Emergenze',
        descrizione:
          'Contribuisci alle attività di preparazione e risposta alle emergenze.',
        icona: 'i-bi:exclamation-triangle',
      },

      {
        titolo: 'Inclusione sociale',
        descrizione:
          'Partecipa ai progetti rivolti alle persone più vulnerabili.',
        icona: 'i-bi:people',
      },

      {
        titolo: 'Giovani',
        descrizione:
          'Collabora nelle attività dedicate ai giovani e alla loro crescita.',
        icona: 'i-bi:person-hearts',
      },

      {
        titolo: 'Formazione',
        descrizione:
          'Aiuta a diffondere conoscenze e comportamenti utili alla comunità.',
        icona: 'i-bi:mortarboard',
      },

      {
        titolo: 'Prevenzione',
        descrizione:
          'Partecipa alle iniziative di sensibilizzazione e prevenzione.',
        icona: 'i-bi:shield-check',
      },

    ],

  },


  /* ================================================== */
  /* FAQ */
/* ================================================== */

  faq: {

    sovratitolo: 'Domande frequenti',

    titolo: 'Hai qualche dubbio?',

    domande: [

      {
        domanda: 'Devo avere esperienza per diventare volontario?',
        risposta:
          'No. Non è necessario avere esperienza precedente. La formazione e l’affiancamento ti permetteranno di acquisire gradualmente le competenze necessarie.',
      },

      {
        domanda: 'Quanto tempo devo dedicare al volontariato?',
        risposta:
          'Non esiste un’unica disponibilità valida per tutti. Potrai concordare la tua partecipazione in base alle attività disponibili e al tempo che puoi mettere a disposizione.',
      },

      {
        domanda: 'Posso scegliere le attività a cui partecipare?',
        risposta:
          'Le attività a cui potrai partecipare dipendono dalla tua formazione, dalle esigenze del Comitato e dalle opportunità disponibili. Insieme potrai individuare quelle più adatte a te.',
      },

      {
        domanda: 'Come posso avere maggiori informazioni?',
        risposta:
          'Puoi contattare direttamente il Comitato oppure utilizzare il pulsante di contatto presente in questa pagina per ricevere tutte le informazioni sul percorso.',
      },

    ],

  },


  /* ================================================== */
  /* CTA */
/* ================================================== */

  cta: {

    titolo: 'Vuoi metterti in gioco?',

    descrizione:
      'Scopri come entrare nella nostra squadra e inizia il tuo percorso come volontario della Croce Rossa Italiana.',

    pulsante: {
      testo: 'Diventa volontario',
      url: '/contatti',
      icona: 'i-bi:heart-fill',
    },

    secondario: {
      testo: 'Contattaci',
      url: '/contatti',
      icona: 'i-bi:envelope',
    },

  },

}


/* ================================================== */
/* SEO */
/* ================================================== */

useSeoMeta({

  title: 'Diventa volontario | Croce Rossa Rubiera',

  description:
    'Scopri come diventare volontario della Croce Rossa Italiana - Comitato di Rubiera.',

})

</script>