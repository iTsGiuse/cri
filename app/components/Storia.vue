<template>
  <div class="min-vh-100 d-flex flex-column bg-white text-dark">
    <main class="container py-5 my-md-3 flex-grow-1">

      <!-- TIMELINE CENTRALE -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-xl-11">
          <div class="position-relative py-4">
            
            <!-- Linea verticale centrale visibile solo da md in poi -->
            <div class="position-absolute start-50 translate-middle-x border-start border-2 border-danger-subtle d-none d-md-block top-0 bottom-0 opacity-75"></div>

            <div
              v-for="(tappa, indice) in configStoria.tappe"
              :key="indice"
              class="row g-0 mb-5 position-relative align-items-center"
            >
              <!-- BLOCCO CONTENUTO -->
              <div 
                class="col-12 col-md-5"
                :class="[
                  indice % 2 === 0 
                    ? 'order-md-1 pe-md-4 text-start' 
                    : 'order-md-3 ps-md-4 text-start'
                ]"
              >
                <div 
                  class="card border-0 shadow-lg rounded-4 p-4 p-lg-5 bg-white h-100"
                  :class="indice % 2 === 0 ? 'border-start border-4 border-danger' : 'border-end border-4 border-danger'"
                >
                  
                  <div class="d-flex flex-wrap align-items-center justify-content-start gap-2 mb-3">
                    <span class="badge bg-danger text-white px-3 py-2 fw-bold rounded-pill text-uppercase shadow-sm">
                      {{ tappa.anno }}
                    </span>
                  </div>

                  <h2 class="h4 fw-bold text-dark mb-3">
                    {{ tappa.titolo }}
                  </h2>

                  <p class="text-secondary lh-base mb-3 fs-6">
                    {{ tappa.descrizione1 }}
                  </p>
                  
                  <p v-if="tappa.descrizione2" class="text-secondary lh-base mb-0 fs-6">
                    {{ tappa.descrizione2 }}
                  </p>
                </div>
              </div>

              <!-- CENTRO: PALLINI DELLA TIMELINE (Visibili solo da md in su) -->
              <div class="col-md-2 d-none d-md-flex justify-content-center align-items-center order-md-2 position-relative">
                <div class="bg-danger rounded-circle shadow-lg position-absolute border border-4 border-white"
                     style="width: 24px; height: 24px;">
                </div>
              </div>

              <!-- BLOCCO SIMMETRICO VUOTO (Per mantenere la struttura a zig-zag su desktop) -->
              <div 
                class="col-12 col-md-5 d-none d-md-block"
                :class="indice % 2 === 0 ? 'order-md-3' : 'order-md-1'"
              >
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="my-5">
        <Divisore />
      </div>

      <!-- SEZIONE FINALE CALL TO ACTION -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-lg-10 col-xl-9 text-center">
          <div class="p-4 p-md-5 rounded-4 bg-white border shadow-lg position-relative overflow-hidden">
            <!-- Dettaglio grafico superiore -->
            <div class="position-absolute top-0 start-0 w-100 bg-danger" style="height: 6px;"></div>

            <div class="py-2">
              <span class="text-danger fw-bold text-uppercase small mb-2 d-block">
                {{ configStoria.conclusione.sopraTitolo }}
              </span>
              <h2 class="h3 fw-bold mb-3 text-dark">
                {{ configStoria.conclusione.titolo }}
              </h2>
              <p class="text-secondary mb-4 lh-base mx-auto fs-6" style="max-width: 650px;">
                {{ configStoria.conclusione.testo }}
              </p>
              <NuxtLink
                :to="configStoria.conclusione.urlPulsante"
                class="btn btn-danger fw-bold px-4 py-3 shadow-sm rounded-pill text-white"
              >
                <Icon :name="configStoria.conclusione.iconaPulsante" class="me-2" aria-hidden="true" />
                {{ configStoria.conclusione.testoPulsante }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
const configStoria = {
  tappe: [
    {
      anno: 'Anni ’70',
      titolo: 'La nascita del presidio e i primi passi a Rubiera',
      descrizione1: 'Tutto ha origine dall’intuizione e dalla spinta ideale di un gruppo di cittadini lungimiranti e sensibili alle tematiche umanitarie. Di fronte alla necessità di garantire risposte sanitarie e di soccorso più vicine alla comunità locale, vengono poste le basi per la costituzione di una presenza ufficiale della Croce Rossa sul territorio.',
      descrizione2: 'In un’epoca in cui il volontariato organizzato muoveva i suoi primi passi moderni, i pionieri di Rubiera hanno affrontato le difficoltà iniziali contando unicamente sulla forza della solidarietà, sull’autofinanziamento e su una straordinaria voglia di fare del bene.',
    },
    {
      anno: 'Anni ’80 e ’90',
      titolo: 'Il potenziamento dei mezzi e la risposta all’emergenza',
      descrizione1: 'Con il passare degli anni, il comitato supera la fase pionieristica e si radica profondamente nel tessuto sociale ed economico reggiano. Vengono ampliati gli spazi operativi, acquisiti i primi automezzi dedicati al trasporto sanitario e strutturati i servizi di assistenza ordinaria.',
      descrizione2: 'È il periodo in cui la popolazione di Rubiera comincia a riconoscere nella Croce Rossa un punto di riferimento costante e sicuro. Cresce il numero dei volontari formati e si consolidano i rapporti di collaborazione con le istituzioni locali e le altre realtà associative del territorio.',
    },
    {
      anno: 'Anni 2000',
      titolo: 'La modernizzazione e la specializzazione',
      descrizione1: 'L’inizio del nuovo millennio porta con sé una profonda evoluzione tecnologica e normativa nel mondo del soccorso sanitario di emergenza-urgenza. Il comitato si adegua prontamente agli standard regionali e nazionali, integrandosi a pieno titolo nel sistema integrato 118.',
      descrizione2: 'Vengono introdotte nuove figure di specializzazione all’interno del corpo dei volontari, si potenzia la formazione della popolazione attraverso corsi di primo soccorso aperti ai cittadini e si sviluppano nuovi settori d’intervento, tra cui la Protezione Civile e le attività di supporto sociale.',
    },
    {
      anno: 'Il Cinquantenario',
      titolo: 'Mezzo secolo di storia ufficiale',
      descrizione1: 'Il comitato taglia il prestigioso traguardo dei cinquant’anni di attività ininterrotta sul territorio. Una ricorrenza solenne celebrata insieme alla cittadinanza, alle autorità e ai soci fondatori, che ha permesso di riannodare i fili della memoria collettiva.',
      descrizione2: 'Le celebrazioni del cinquantenario non sono state solo un momento di festa, ma un’occasione fondamentale per ribadire l’attualità dei valori fondanti della Croce Rossa e ringraziare tutte le generazioni di volontari che si sono succedute nel tempo.',
    },
    {
      anno: 'Oggi',
      titolo: 'Testimonianze e sfide odierne',
      descrizione1: 'Attualmente, il Comitato di Rubiera conta una grande e attiva famiglia di oltre 200 volontari. Un’organizzazione dinamica, operativa 24 ore su 24, 365 giorni all’anno, capace di spaziare dal soccorso sanitario d’emergenza alla protezione civile, dalla promozione giovanile ai servizi di welfare e prossimità per le persone vulnerabili.',
      descrizione2: 'Il presente ci vede impegnati nell’affrontare nuove sfide sociali e sanitarie, mantenendo inalterato lo spirito originario: esserci sempre, ovunque, per chiunque abbia bisogno.',
    },
  ],

  conclusione: {
    sopraTitolo: 'Unisciti alla nostra missione',
    titolo: 'Il futuro lo scriviamo insieme',
    testo: 'La storia della Croce Rossa a Rubiera non appartiene al passato: è un racconto in costante evoluzione che si arricchisce ogni giorno grazie all’energia, al tempo e al cuore di chi sceglie di donarsi agli altri. Unisciti a noi.',
    testoPulsante: 'Scopri come diventare volontario',
    urlPulsante: '/chi-siamo/sede-e-contatti',
    iconaPulsante: 'i-bi:heart-fill'
  },
}

useHead({
  title: 'La Nostra Storia - Croce Rossa Italiana Comitato di Rubiera',
  meta: [
    { name: 'description', content: 'Ripercorri la lunga storia del Comitato di Rubiera della Croce Rossa Italiana: oltre 50 anni di volontariato, evoluzione e presenza costante al servizio della comunità.' }
  ]
})
</script>
