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
    titolo: 'Protagonismo Giovanile e Partecipazione Attiva',
    descrizione: 'I giovani non sono solo il futuro, ma il presente della Croce Rossa. A Rubiera diamo spazio alle idee e all\'energia dei ragazzi, rendendoli protagonisti nella progettazione e nella realizzazione delle attività associative e dei progetti rivolti al territorio.',
    immagine: 'https://picsum.photos/seed/giovani-protagonismo/800/600',
    testoPulsante: 'Unisciti ai Giovani CRI',
    linkPulsante: '/diventa-volontario',
  },
  {
    id: 2,
    titolo: 'Educazione alla Salute e Prevenzione tra Pari',
    descrizione: 'Attraverso l\'approccio dell\'educazione tra pari (peer education), i nostri giovani volontari parlano la stessa lingua dei loro coetanei. Promuovono corretti stili di vita, prevenzione delle infezioni sessualmente trasmissibili (IST), educazione affettiva e contrasto alle dipendenze (alcol, fumo e sostanze).',
    immagine: 'https://picsum.photos/seed/peer-education/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Promozione della Sicurezza Stradale e Mobilità Sostenibile',
    descrizione: 'Realizziamo campagne di sensibilizzazione rivolte ai giovani e agli studenti per prevenire gli incidenti stradali, promuovendo la guida sicura, l\'uso delle cinture, il rispetto dei limiti e la consapevolezza dei rischi legati all\'alcol e allo smartphone alla guida.',
    immagine: 'https://picsum.photos/seed/sicurezza-stradale-giovani/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Educazione alla Pace, Inclusione e Lotta al Bullismo',
    descrizione: 'Lottiamo contro ogni forma di discriminazione, bullismo e cyberbullismo nelle scuole e nei luoghi di aggregazione. Promuoviamo laboratori interattivi per incoraggiare il rispetto reciproco, la tolleranza e la cultura dell\'accoglienza.',
    immagine: 'https://picsum.photos/seed/no-bullismo/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Sviluppo Sostenibile, Clima e Ambiente',
    descrizione: 'I giovani della Croce Rossa sono in prima linea per la salvaguardia del pianeta. Promuoviamo attività di educazione ambientale, riciclo, riduzione degli sprechi e iniziative di pulizia del territorio per costruire comunità più verdi e resilienti.',
    immagine: 'https://picsum.photos/seed/ambiente-giovani/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Attività Ludiche e Animazione per Bambini e Ragazzi',
    descrizione: 'Organizziamo laboratori creativi, giochi di gruppo e momenti di animazione in occasione di eventi locali, feste di paese o reparti pediatrici, portando allegria, sorrisi e momenti di leggerezza ai più piccoli della comunità.',
    immagine: 'https://picsum.photos/seed/animazione-bambini/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 7,
    titolo: 'Entra a Far Parte dell\'Area Giovani',
    descrizione: 'Hai tra i 14 e i 32 anni e vuoi fare la differenza a Rubiera? Entrare nell\'Area Giovani della Croce Rossa significa fare nuove amicizie, acquisire competenze trasversali (soft skills), viaggiare, fare formazione e metterti in gioco per gli altri.',
    immagine: 'https://picsum.photos/seed/entra-giovani/800/600',
    testoPulsante: 'Diventa Volontario',
    linkPulsante: '/diventa-volontario',
  },
]
</script>