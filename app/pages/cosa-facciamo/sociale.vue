<template>
  <div>
    <Hero />
    <LazySezioniAlternate hydrate-on-visible :sections="sections" />
  </div>
</template>

<script setup lang="ts">
import type { AlternatingSection } from '~/components/SezioniAlternate.vue'

const sections: AlternatingSection[] = [
  {
    id: 1,
    title: 'Supporto Alimentare e Distribuzione Viveri',
    description: 'Contrastiamo la povertà materiale e alimentare sul territorio di Rubiera attraverso la raccolta e la distribuzione periodica di generi alimentari di prima necessità e pacchi spesa alle famiglie in difficoltà economica, offrendo un ascolto empatico e un supporto concreto e discreto.',
    imageUrl: 'https://picsum.photos/seed/supporto-alimentare/800/600',
    cta: { label: 'Scopri come donare cibo', url: '/sostienici' },
  },
  {
    id: 2,
    title: 'Unità di Strada e Accoglienza',
    description: 'Operiamo a fianco delle persone più vulnerabili e marginalizzate della comunità portando beni di conforto, bevande calde, coperte e generi di prima necessità. Monitoriamo le situazioni di fragilità estrema per orientare le persone verso i servizi socio-sanitari territoriali.',
    imageUrl: 'https://picsum.photos/seed/unita-strada/800/600',
  },
  {
    id: 3,
    title: 'Trasporto Sociale e Accompagnamento Protetto',
    description: 'Garantiamo la mobilità protetta per persone anziane, con disabilità o con ridotta mobilità che necessitano di raggiungere centri diurni, luoghi di cura per terapie non urgenti o che hanno bisogno di supporto per sbrigare commissioni quotidiane essenziali.',
    imageUrl: 'https://picsum.photos/seed/trasporto-sociale/800/600',
    cta: { label: 'Richiedi il servizio', url: '/contatti' },
  },
  {
    id: 4,
    title: 'Attività per Anziani e Contrasto alla Solitudine',
    description: 'Realizziamo momenti di aggregazione, laboratori ricreativi e iniziative di vicinanza per contrastare la solitudine e l\'isolamento sociale della terza età, offrendo anche un servizio telefonico di ascolto e monitoraggio costante nei periodi di maggiore fragilità climatica o sanitaria.',
    imageUrl: 'https://picsum.photos/seed/anziani-sociale/800/600',
  },
  {
    id: 5,
    title: 'Inclusione e Supporto ai Giovani',
    description: 'Promuoviamo percorsi educativi, laboratori e spazi di socializzazione dedicati ai più giovani e agli adolescenti del territorio. Lavoriamo sulla prevenzione del disagio giovanile, sull\'educazione alla cittadinanza attiva e sull\'inclusione scolastica e sociale.',
    imageUrl: 'https://picsum.photos/seed/giovani-cri/800/600',
    cta: { label: 'Scopri le attività giovani', url: '/giovani' },
  },
  {
    id: 6,
    title: 'Progetti di Accompagnamento al Lavoro e Orientamento',
    description: 'Forniamo orientamento ai servizi del territorio, supporto nella redazione del curriculum e percorsi di accompagnamento all\'inserimento lavorativo rivolti a persone inoccupate o in situazione di temporanea difficoltà socio-economica.',
    imageUrl: 'https://picsum.photos/seed/orientamento-lavoro/800/600',
  },
  {
    id: 7,
    title: 'Diventa Volontario nell\'Area Sociale',
    description: 'L\'Area Sociale vive grazie all\'energia e al cuore dei nostri volontari. Se hai a cuore il benessere della comunità di Rubiera, vuoi dedicare un po\' del tuo tempo agli altri e fare la differenza per chi è in difficoltà, unisciti alla nostra squadra.',
    imageUrl: 'https://picsum.photos/seed/volontario-sociale/800/600',
    cta: { label: 'Diventa Volontario', url: '/diventa-volontario' },
  },
]
</script>