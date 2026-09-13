<template>
  <div class="min-vh-100 d-flex flex-column bg-white text-dark">
    <div class="container py-5 my-md-3 flex-grow-1">

      <div class="row justify-content-center mb-5">
        <div class="col-12 col-xl-11">
          <div class="position-relative py-4">

            <div class="position-absolute start-50 translate-middle-x border-start border-2 border-danger-subtle d-none d-md-block top-0 bottom-0 opacity-75"></div>

            <div
              v-for="(milestone, index) in historyContent.timeline"
              :key="index"
              class="row g-0 mb-5 position-relative align-items-center"
            >

              <div
                class="col-12 col-md-5"
                :class="[
                  index % 2 === 0
                    ? 'order-md-1 pe-md-4 text-start'
                    : 'order-md-3 ps-md-4 text-start'
                ]"
              >
                <div
                  class="card border-0 shadow-lg rounded-4 p-4 p-lg-5 bg-white h-100"
                  :class="index % 2 === 0 ? 'border-start border-4 border-danger' : 'border-end border-4 border-danger'"
                >

                  <div class="d-flex flex-wrap align-items-center justify-content-start gap-2 mb-3">
                    <span class="badge bg-danger text-white px-3 py-2 fw-bold rounded-pill text-uppercase shadow-sm">
                      {{ milestone.year }}
                    </span>
                  </div>

                  <h2 class="h4 fw-bold text-dark mb-3">
                    {{ milestone.title }}
                  </h2>

                  <p
                    v-for="(paragraph, paragraphIndex) in milestone.paragraphs"
                    :key="paragraphIndex"
                    class="text-secondary lh-base fs-6"
                    :class="
                      paragraphIndex === milestone.paragraphs.length - 1
                        ? 'mb-0'
                        : 'mb-3'
                    "
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </div>

              <div class="col-md-2 d-none d-md-flex justify-content-center align-items-center order-md-2 position-relative">
                <div class="bg-danger rounded-circle shadow-lg position-absolute border border-4 border-white"
                     style="width: 24px; height: 24px;">
                </div>
              </div>

              <div
                class="col-12 col-md-5 d-none d-md-block"
                :class="index % 2 === 0 ? 'order-md-3' : 'order-md-1'"
              >
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="my-5">
        <Divisore />
      </div>

      <div class="row justify-content-center mb-5">
        <div class="col-12 col-lg-10 col-xl-9 text-center">
          <div class="p-4 p-md-5 rounded-4 bg-white border shadow-lg position-relative overflow-hidden">

            <div class="position-absolute top-0 start-0 w-100 bg-danger" style="height: 6px;"></div>

            <div class="py-2">
              <span class="text-danger fw-semibold text-uppercase small mb-2 d-block">
                {{ historyContent.conclusion.eyebrow }}
              </span>
              <h2 class="h3 fw-bold mb-3 text-dark">
                {{ historyContent.conclusion.title }}
              </h2>
              <p class="text-secondary mb-4 lh-base mx-auto fs-6" style="max-width: 650px;">
                {{ historyContent.conclusion.description }}
              </p>
              <NuxtLink
                :to="historyContent.conclusion.cta.url"
                class="btn btn-danger fw-bold px-4 py-3 shadow-sm rounded-pill text-white"
              >
                <Icon :name="historyContent.conclusion.cta.icon" class="me-2" aria-hidden="true" />
                {{ historyContent.conclusion.cta.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

const historyContent = {
  timeline: [
    {
      year: 'Anni ’70',
      title: 'La nascita del presidio e i primi passi a Rubiera',
      paragraphs: [
        'Tutto ha origine dall’intuizione e dalla spinta ideale di un gruppo di cittadini lungimiranti e sensibili alle tematiche umanitarie. Di fronte alla necessità di garantire risposte sanitarie e di soccorso più vicine alla comunità locale, vengono poste le basi per la costituzione di una presenza ufficiale della Croce Rossa sul territorio.',
        'In un’epoca in cui il volontariato organizzato muoveva i suoi primi passi moderni, i pionieri di Rubiera hanno affrontato le difficoltà iniziali contando unicamente sulla forza della solidarietà, sull’autofinanziamento e su una straordinaria voglia di fare del bene.',
      ],
    },
    {
      year: 'Anni ’80 e ’90',
      title: 'Il potenziamento dei mezzi e la risposta all’emergenza',
      paragraphs: [
        'Con il passare degli anni, il comitato supera la fase pionieristica e si radica profondamente nel tessuto sociale ed economico reggiano. Vengono ampliati gli spazi operativi, acquisiti i primi automezzi dedicati al trasporto sanitario e strutturati i servizi di assistenza ordinaria.',
        'È il periodo in cui la popolazione di Rubiera comincia a riconoscere nella Croce Rossa un punto di riferimento costante e sicuro. Cresce il numero dei volontari formati e si consolidano i rapporti di collaborazione con le istituzioni locali e le altre realtà associative del territorio.',
      ],
    },
    {
      year: 'Anni 2000',
      title: 'La modernizzazione e la specializzazione',
      paragraphs: [
        'L’inizio del nuovo millennio porta con sé una profonda evoluzione tecnologica e normativa nel mondo del soccorso sanitario di emergenza-urgenza. Il comitato si adegua prontamente agli standard regionali e nazionali, integrandosi a pieno titolo nel sistema integrato 118.',
        'Vengono introdotte nuove figure di specializzazione all’interno del corpo dei volontari, si potenzia la formazione della popolazione attraverso corsi di primo soccorso aperti ai cittadini e si sviluppano nuovi settori d’intervento, tra cui la Protezione Civile e le attività di supporto sociale.',
      ],
    },
    {
      year: 'Il Cinquantenario',
      title: 'Mezzo secolo di storia ufficiale',
      paragraphs: [
        'Il comitato taglia il prestigioso traguardo dei cinquant’anni di attività ininterrotta sul territorio. Una ricorrenza solenne celebrata insieme alla cittadinanza, alle autorità e ai soci fondatori, che ha permesso di riannodare i fili della memoria collettiva.',
        'Le celebrazioni del cinquantenario non sono state solo un momento di festa, ma un’occasione fondamentale per ribadire l’attualità dei valori fondanti della Croce Rossa e ringraziare tutte le generazioni di volontari che si sono succedute nel tempo.',
      ],
    },
    {
      year: 'Oggi',
      title: 'Testimonianze e sfide odierne',
      paragraphs: [
        'Attualmente, il Comitato di Rubiera conta una grande e attiva famiglia di oltre 200 volontari. Un’organizzazione dinamica, operativa 24 ore su 24, 365 giorni all’anno, capace di spaziare dal soccorso sanitario d’emergenza alla protezione civile, dalla promozione giovanile ai servizi di welfare e prossimità per le persone vulnerabili.',
        'Il presente ci vede impegnati nell’affrontare nuove sfide sociali e sanitarie, mantenendo inalterato lo spirito originario: esserci sempre, ovunque, per chiunque abbia bisogno.',
      ],
    },
  ],

  conclusion: {
    eyebrow: 'Unisciti alla nostra missione',
    title: 'Il futuro lo scriviamo insieme',
    description: 'La storia della Croce Rossa a Rubiera non appartiene al passato: è un racconto in costante evoluzione che si arricchisce ogni giorno grazie all’energia, al tempo e al cuore di chi sceglie di donarsi agli altri. Unisciti a noi.',
    cta: {
      label: 'Scopri come diventare volontario',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:heart-fill',
    },
  },
}

</script>
