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
    titolo: 'I Sette Principi Fondamentali della Croce Rossa',
    descrizione: 'Umanità, Imparzialità, Neutralità, Indipendenza, Volontariato, Unità e Universalità. Questi sette principi non sono solo le linee guida del nostro agire quotidiano a Rubiera e nel mondo, ma rappresentano un sistema valoriale ed etico che ispira ogni nostra attività di soccorso e tutela.',
    immagine: 'https://picsum.photos/seed/principi-cri/800/600',
    testoPulsante: 'Scopri i nostri principi',
    linkPulsante: '/chi-siamo',
  },
  {
    id: 2,
    titolo: 'Diffusione del Diritto Internazionale Umanitario (DIU)',
    descrizione: 'Il Diritto Internazionale Umanitario è l\'insieme delle regole che, in tempo di conflitto armato, limitano gli effetti della violenza proteggendo le persone che non partecipano o hanno cessato di partecipare ai combattimenti. Promuoviamo la conoscenza di queste norme fondamentali attraverso incontri, seminari e percorsi formativi dedicati.',
    immagine: 'https://picsum.photos/seed/diu-diritto/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Educazione alla Pace e alla Convivenza Civile',
    descrizione: 'Crediamo che la prevenzione dei conflitti parta dall\'educazione. Realizziamo laboratori e attività di sensibilizzazione rivolti alle scuole e alla cittadinanza per promuovere la cultura del dialogo, la tolleranza, la risoluzione pacifica dei conflitti e il rispetto reciproco.',
    immagine: 'https://picsum.photos/seed/educazione-pace/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Lotta contro ogni Forma di Discriminazione',
    descrizione: 'In linea con il principio di Imparzialità, ci opponiamo fermamente a qualsiasi forma di discriminazione basata su razza, sesso, nazionalità, religione, lingua, classe sociale o opinioni politiche. Operiamo per garantire che a chiunque venga riconosciuta la pari dignità e l\'accesso ai diritti fondamentali.',
    immagine: 'https://picsum.photos/seed/no-discriminazione/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Protezione dell\'Emblema di Croce Rossa',
    descrizione: 'L\'emblema della Croce Rossa non è un semplice logo commerciale o decorativo, ma un segno protettivo riconosciuto dalle Convenzioni di Ginevra. Ci occupiamo di vigilare e informare sul corretto utilizzo dell\'emblema, tutelandone il valore giuridico e umanitario contro ogni abuso o uso improprio.',
    immagine: 'https://picsum.photos/seed/emblema-cri/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Formazione e Promozione per i Volontari',
    descrizione: 'Garantiamo che ogni operatore e volontario del nostro Comitato riceva una formazione approfondita sui Principi e sul DIU, affinché l\'azione umanitaria sia sempre consapevole, rispettosa delle regole internazionali e coerente con la missione globale del Movimento.',
    immagine: 'https://picsum.photos/seed/formazione-diu/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 7,
    titolo: 'Diventa Volontario per i Diritti e l\'Umanità',
    descrizione: 'Promuovere i diritti umani, i principi umanitari e la cultura della pace richiede impegno e voce. Se vuoi contribuire a diffondere questi valori fondamentali all\'interno della comunità di Rubiera e delle scuole, unisciti alla nostra squadra.',
    immagine: 'https://picsum.photos/seed/volontario-diritti/800/600',
    testoPulsante: 'Diventa Volontario',
    linkPulsante: '/diventa-volontario',
  },
]
</script>