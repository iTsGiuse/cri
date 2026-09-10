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
    titolo: 'Distribuzione Viveri e Banco Alimentare',
    descrizione: 'Forniamo un sostegno concreto alle famiglie e alle persone in condizione di fragilità economica attraverso la consegna periodica di pacchi alimentari con beni di prima necessità e prodotti per l\'igiene, in collaborazione con i servizi sociali del territorio.',
    immagine: 'https://picsum.photos/seed/bancoalimentare/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Sportello di Ascolto e Orientamento Sociale',
    descrizione: 'Un punto di accoglienza per chi affronta momenti di difficoltà. I nostri volontari offrono ascolto empatico, supporto informativo e orientamento verso le reti di aiuto pubbliche, i servizi sociosanitari e i progetti di inclusione del territorio.',
    immagine: 'https://picsum.photos/seed/sportelloascolto/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Assistenza e Telepagnia per gli Anziani',
    descrizione: 'Contro la solitudine e l\'isolamento sociale della popolazione anziana, attiviamo servizi di contatto telefonico periodico, monitoraggio dello stato di benessere e consegna a domicilio di farmaci, spesa o beni essenziali per i soggetti non autosufficienti.',
    immagine: 'https://picsum.photos/seed/assistenzaanziani/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Sostegno alle Persone Senza Dimora',
    descrizione: 'Attraverso unità di strada e interventi di prossimità, garantiamo il monitoraggio serale e notturno delle persone vulnerabili senza dimora, fornendo coperte, bevande calde, kit igienici e prima assistenza durante i periodi di emergenza freddo.',
    immagine: 'https://picsum.photos/seed/unitadistrada/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Progetti di Inclusione e Pari Opportunità',
    descrizione: 'Promuoviamo iniziative educative e laboratori d\'integrazione per combattere la povertà educativa, sostenere l\'infanzia in contesti svantaggiati e favorire l\'autonomia e la partecipazione attiva delle fasce di popolazione più deboli.',
    immagine: 'https://picsum.photos/seed/inclusionesociale/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Come Accedere ai Servizi o Richiedere Aiuto',
    descrizione: 'I servizi di supporto sociale si attivano tramite colloquio presso il nostro centro o su segnalazione dei Servizi Sociali comunali. Garantiamo la massima riservatezza e il rispetto della dignità della persona in ogni fase del percorso di aiuto.',
    immagine: 'https://picsum.photos/seed/richiestaraiuto/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
]
</script>