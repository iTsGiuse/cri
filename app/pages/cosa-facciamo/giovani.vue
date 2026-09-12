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
    title: 'Protagonismo Giovanile e Partecipazione Attiva',
    description: 'I giovani non sono solo il futuro, ma il presente della Croce Rossa. A Rubiera diamo spazio alle idee e all\'energia dei ragazzi, rendendoli protagonisti nella progettazione e nella realizzazione delle attività associative e dei progetti rivolti al territorio.',
    imageUrl: 'https://picsum.photos/seed/giovani-protagonismo/800/600',
    cta: { label: 'Unisciti ai Giovani CRI', url: '/diventa-volontario' },
  },
  {
    id: 2,
    title: 'Educazione alla Salute e Prevenzione tra Pari',
    description: 'Attraverso l\'approccio dell\'educazione tra pari (peer education), i nostri giovani volontari parlano la stessa lingua dei loro coetanei. Promuovono corretti stili di vita, prevenzione delle infezioni sessualmente trasmissibili (IST), educazione affettiva e contrasto alle dipendenze (alcol, fumo e sostanze).',
    imageUrl: 'https://picsum.photos/seed/peer-education/800/600',
  },
  {
    id: 3,
    title: 'Promozione della Sicurezza Stradale e Mobilità Sostenibile',
    description: 'Realizziamo campagne di sensibilizzazione rivolte ai giovani e agli studenti per prevenire gli incidenti stradali, promuovendo la guida sicura, l\'uso delle cinture, il rispetto dei limiti e la consapevolezza dei rischi legati all\'alcol e allo smartphone alla guida.',
    imageUrl: 'https://picsum.photos/seed/sicurezza-stradale-giovani/800/600',
  },
  {
    id: 4,
    title: 'Educazione alla Pace, Inclusione e Lotta al Bullismo',
    description: 'Lottiamo contro ogni forma di discriminazione, bullismo e cyberbullismo nelle scuole e nei luoghi di aggregazione. Promuoviamo laboratori interattivi per incoraggiare il rispetto reciproco, la tolleranza e la cultura dell\'accoglienza.',
    imageUrl: 'https://picsum.photos/seed/no-bullismo/800/600',
  },
  {
    id: 5,
    title: 'Sviluppo Sostenibile, Clima e Ambiente',
    description: 'I giovani della Croce Rossa sono in prima linea per la salvaguardia del pianeta. Promuoviamo attività di educazione ambientale, riciclo, riduzione degli sprechi e iniziative di pulizia del territorio per costruire comunità più verdi e resilienti.',
    imageUrl: 'https://picsum.photos/seed/ambiente-giovani/800/600',
  },
  {
    id: 6,
    title: 'Attività Ludiche e Animazione per Bambini e Ragazzi',
    description: 'Organizziamo laboratori creativi, giochi di gruppo e momenti di animazione in occasione di eventi locali, feste di paese o reparti pediatrici, portando allegria, sorrisi e momenti di leggerezza ai più piccoli della comunità.',
    imageUrl: 'https://picsum.photos/seed/animazione-bambini/800/600',
  },
  {
    id: 7,
    title: 'Entra a Far Parte dell\'Area Giovani',
    description: 'Hai tra i 14 e i 32 anni e vuoi fare la differenza a Rubiera? Entrare nell\'Area Giovani della Croce Rossa significa fare nuove amicizie, acquisire competenze trasversali (soft skills), viaggiare, fare formazione e metterti in gioco per gli altri.',
    imageUrl: 'https://picsum.photos/seed/entra-giovani/800/600',
    cta: { label: 'Diventa Volontario', url: '/diventa-volontario' },
  },
]
</script>