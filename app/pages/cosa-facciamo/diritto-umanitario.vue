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
    title: 'I Sette Principi Fondamentali della Croce Rossa',
    description: 'Umanità, Imparzialità, Neutralità, Indipendenza, Volontariato, Unità e Universalità. Questi sette principi non sono solo le linee guida del nostro agire quotidiano a Rubiera e nel mondo, ma rappresentano un sistema valoriale ed etico che ispira ogni nostra attività di soccorso e tutela.',
    imageUrl: 'https://picsum.photos/seed/principi-cri/800/600',
    cta: { label: 'Scopri i nostri principi', url: '/chi-siamo/comitato-e-contatti' },
  },
  {
    id: 2,
    title: 'Diffusione del Diritto Internazionale Umanitario (DIU)',
    description: 'Il Diritto Internazionale Umanitario è l\'insieme delle regole che, in tempo di conflitto armato, limitano gli effetti della violenza proteggendo le persone che non partecipano o hanno cessato di partecipare ai combattimenti. Promuoviamo la conoscenza di queste norme fondamentali attraverso incontri, seminari e percorsi formativi dedicati.',
    imageUrl: 'https://picsum.photos/seed/diu-diritto/800/600',
  },
  {
    id: 3,
    title: 'Educazione alla Pace e alla Convivenza Civile',
    description: 'Crediamo che la prevenzione dei conflitti parta dall\'educazione. Realizziamo laboratori e attività di sensibilizzazione rivolti alle scuole e alla cittadinanza per promuovere la cultura del dialogo, la tolleranza, la risoluzione pacifica dei conflitti e il rispetto reciproco.',
    imageUrl: 'https://picsum.photos/seed/educazione-pace/800/600',
  },
  {
    id: 4,
    title: 'Lotta contro ogni Forma di Discriminazione',
    description: 'In linea con il principio di Imparzialità, ci opponiamo fermamente a qualsiasi forma di discriminazione basata su razza, sesso, nazionalità, religione, lingua, classe sociale o opinioni politiche. Operiamo per garantire che a chiunque venga riconosciuta la pari dignità e l\'accesso ai diritti fondamentali.',
    imageUrl: 'https://picsum.photos/seed/no-discriminazione/800/600',
  },
  {
    id: 5,
    title: 'Protezione dell\'Emblema di Croce Rossa',
    description: 'L\'emblema della Croce Rossa non è un semplice logo commerciale o decorativo, ma un segno protettivo riconosciuto dalle Convenzioni di Ginevra. Ci occupiamo di vigilare e informare sul corretto utilizzo dell\'emblema, tutelandone il valore giuridico e umanitario contro ogni abuso o uso improprio.',
    imageUrl: 'https://picsum.photos/seed/emblema-cri/800/600',
  },
  {
    id: 6,
    title: 'Formazione e Promozione per i Volontari',
    description: 'Garantiamo che ogni operatore e volontario del nostro Comitato riceva una formazione approfondita sui Principi e sul DIU, affinché l\'azione umanitaria sia sempre consapevole, rispettosa delle regole internazionali e coerente con la missione globale del Movimento.',
    imageUrl: 'https://picsum.photos/seed/formazione-diu/800/600',
  },
  {
    id: 7,
    title: 'Diventa Volontario per i Diritti e l\'Umanità',
    description: 'Promuovere i diritti umani, i principi umanitari e la cultura della pace richiede impegno e voce. Se vuoi contribuire a diffondere questi valori fondamentali all\'interno della comunità di Rubiera e delle scuole, unisciti alla nostra squadra.',
    imageUrl: 'https://picsum.photos/seed/volontario-diritti/800/600',
    cta: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario' },
  },
]
</script>
