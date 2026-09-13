<template>
  <div>
    <Hero />
    <LazySezioniAlternate hydrate-on-visible :sections="sections" />
  </div>
</template>

<script setup lang="ts">
import type { AlternatingSection } from '~/components/SezioniAlternate.vue'

useSeoPagina()

const sections: AlternatingSection[] = [
  {
    id: 1,
    title: 'Distribuzione Viveri e Banco Alimentare',
    description: 'Forniamo un sostegno concreto alle famiglie e alle persone in condizione di fragilità economica attraverso la consegna periodica di pacchi alimentari con beni di prima necessità e prodotti per l\'igiene, in collaborazione con i servizi sociali del territorio.',
    imageUrl: 'https://picsum.photos/seed/bancoalimentare/800/600',
  },
  {
    id: 2,
    title: 'Sportello di Ascolto e Orientamento Sociale',
    description: 'Un punto di accoglienza per chi affronta momenti di difficoltà. I nostri volontari offrono ascolto empatico, supporto informativo e orientamento verso le reti di aiuto pubbliche, i servizi sociosanitari e i progetti di inclusione del territorio.',
    imageUrl: 'https://picsum.photos/seed/sportelloascolto/800/600',
  },
  {
    id: 3,
    title: 'Assistenza e Telepagnia per gli Anziani',
    description: 'Contro la solitudine e l\'isolamento sociale della popolazione anziana, attiviamo servizi di contatto telefonico periodico, monitoraggio dello stato di benessere e consegna a domicilio di farmaci, spesa o beni essenziali per i soggetti non autosufficienti.',
    imageUrl: 'https://picsum.photos/seed/assistenzaanziani/800/600',
  },
  {
    id: 4,
    title: 'Sostegno alle Persone Senza Dimora',
    description: 'Attraverso unità di strada e interventi di prossimità, garantiamo il monitoraggio serale e notturno delle persone vulnerabili senza dimora, fornendo coperte, bevande calde, kit igienici e prima assistenza durante i periodi di emergenza freddo.',
    imageUrl: 'https://picsum.photos/seed/unitadistrada/800/600',
  },
  {
    id: 5,
    title: 'Progetti di Inclusione e Pari Opportunità',
    description: 'Promuoviamo iniziative educative e laboratori d\'integrazione per combattere la povertà educativa, sostenere l\'infanzia in contesti svantaggiati e favorire l\'autonomia e la partecipazione attiva delle fasce di popolazione più deboli.',
    imageUrl: 'https://picsum.photos/seed/inclusionesociale/800/600',
  },
  {
    id: 6,
    title: 'Come Accedere ai Servizi o Richiedere Aiuto',
    description: 'I servizi di supporto sociale si attivano tramite colloquio presso il nostro centro o su segnalazione dei Servizi Sociali comunali. Garantiamo la massima riservatezza e il rispetto della dignità della persona in ogni fase del percorso di aiuto.',
    imageUrl: 'https://picsum.photos/seed/richiestaraiuto/800/600',
  },
]
</script>
