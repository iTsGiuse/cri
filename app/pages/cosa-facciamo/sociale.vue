<template>
  <div>
    <Hero />
    <LazySezioniAlternate :sezioni="datiSezioni" />
  </div>
</template>

<script setup lang="ts">
const datiSezioni = [
  {
    id: 1,
    titolo: 'Supporto Alimentare e Distribuzione Viveri',
    descrizione: 'Contrastiamo la povertà materiale e alimentare sul territorio di Rubiera attraverso la raccolta e la distribuzione periodica di generi alimentari di prima necessità e pacchi spesa alle famiglie in difficoltà economica, offrendo un ascolto empatico e un supporto concreto e discreto.',
    immagine: 'https://picsum.photos/seed/supporto-alimentare/800/600',
    testoPulsante: 'Scopri come donare cibo',
    linkPulsante: '/sostienici',
  },
  {
    id: 2,
    titolo: 'Unità di Strada e Accoglienza',
    descrizione: 'Operiamo a fianco delle persone più vulnerabili e marginalizzate della comunità portando beni di conforto, bevande calde, coperte e generi di prima necessità. Monitoriamo le situazioni di fragilità estrema per orientare le persone verso i servizi socio-sanitari territoriali.',
    immagine: 'https://picsum.photos/seed/unita-strada/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Trasporto Sociale e Accompagnamento Protetto',
    descrizione: 'Garantiamo la mobilità protetta per persone anziane, con disabilità o con ridotta mobilità che necessitano di raggiungere centri diurni, luoghi di cura per terapie non urgenti o che hanno bisogno di supporto per sbrigare commissioni quotidiane essenziali.',
    immagine: 'https://picsum.photos/seed/trasporto-sociale/800/600',
    testoPulsante: 'Richiedi il servizio',
    linkPulsante: '/contatti',
  },
  {
    id: 4,
    titolo: 'Attività per Anziani e Contrasto alla Solitudine',
    descrizione: 'Realizziamo momenti di aggregazione, laboratori ricreativi e iniziative di vicinanza per contrastare la solitudine e l\'isolamento sociale della terza età, offrendo anche un servizio telefonico di ascolto e monitoraggio costante nei periodi di maggiore fragilità climatica o sanitaria.',
    immagine: 'https://picsum.photos/seed/anziani-sociale/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Inclusione e Supporto ai Giovani',
    descrizione: 'Promuoviamo percorsi educativi, laboratori e spazi di socializzazione dedicati ai più giovani e agli adolescenti del territorio. Lavoriamo sulla prevenzione del disagio giovanile, sull\'educazione alla cittadinanza attiva e sull\'inclusione scolastica e sociale.',
    immagine: 'https://picsum.photos/seed/giovani-cri/800/600',
    testoPulsante: 'Scopri le attività giovani',
    linkPulsante: '/giovani',
  },
  {
    id: 6,
    titolo: 'Progetti di Accompagnamento al Lavoro e Orientamento',
    descrizione: 'Forniamo orientamento ai servizi del territorio, supporto nella redazione del curriculum e percorsi di accompagnamento all\'inserimento lavorativo rivolti a persone inoccupate o in situazione di temporanea difficoltà socio-economica.',
    immagine: 'https://picsum.photos/seed/orientamento-lavoro/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 7,
    titolo: 'Diventa Volontario nell\'Area Sociale',
    descrizione: 'L\'Area Sociale vive grazie all\'energia e al cuore dei nostri volontari. Se hai a cuore il benessere della comunità di Rubiera, vuoi dedicare un po\' del tuo tempo agli altri e fare la differenza per chi è in difficoltà, unisciti alla nostra squadra.',
    immagine: 'https://picsum.photos/seed/volontario-sociale/800/600',
    testoPulsante: 'Diventa Volontario',
    linkPulsante: '/diventa-volontario',
  },
]
</script>