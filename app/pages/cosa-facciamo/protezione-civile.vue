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
    title: 'Gestione delle Emergenze e Calamità Naturali',
    description: 'Siamo parte integrante del Servizio Nazionale di Protezione Civile. In caso di eventi calamitosi come terremoti, alluvioni, ondate di maltempo o incendi boschivi, il nostro Comitato attiva squadre specializzate e mezzi fuoristrada per intervenire tempestivamente a supporto della popolazione colpita, sia a livello locale che nazionale.',
    imageUrl: 'https://picsum.photos/seed/emergenza-pc/800/600',
  },
  {
    id: 2,
    title: 'Montaggio e Gestione Campi di Accoglienza',
    description: 'In caso di sfollati o evacuazioni a seguito di emergenze, i nostri volontari sono formati per montare e gestire tendopoli, cucine da campo, moduli abitativi e strutture di prima accoglienza temporanea, garantendo vitto, alloggio e assistenza psicologica e sanitaria alle persone in difficoltà.',
    imageUrl: 'https://picsum.photos/seed/campo-accoglienza/800/600',
  },
  {
    id: 3,
    title: 'Logistica, Sale Operative e Colonne Mobili',
    description: 'Curiamo la logistica dei materiali di soccorso e la gestione dei flussi di rifornimento. Il nostro personale partecipa alla catena logistica e alle sale operative mobili per coordinare gli interventi sul campo, assicurando comunicazioni radio efficienti e supporto tecnico costante.',
    imageUrl: 'https://picsum.photos/seed/logistica-cri/800/600',
  },
  {
    id: 4,
    title: 'Monitoraggio del Territorio e Allerta Meteo',
    description: 'Collaboriamo con il sistema di monitoraggio locale e regionale per prevenire e fronteggiare i rischi legati alle allerte meteo (piene fluviali, criticità idrogeologiche). Effettuiamo sopralluoghi preventivi e presidiamo il territorio di Rubiera e dintorni durante le fasi di allerta.',
    imageUrl: 'https://picsum.photos/seed/monitoraggio-meteo/800/600',
  },
  {
    id: 5,
    title: 'Informazione alla Popolazione e Resilienza',
    description: 'La prevenzione parte dai cittadini. Promuoviamo campagne di informazione e incontri pubblici (come la campagna nazionale "Io Non Rischio") per insegnare alle persone quali comportamenti corretti adottare prima, durante e dopo un\'emergenza, aumentando la resilienza della nostra comunità.',
    imageUrl: 'https://picsum.photos/seed/iononrischio/800/600',
    cta: { label: 'Scopri i comportamenti di autoprotezione', url: '/prevenzione' },
  },
  {
    id: 6,
    title: 'Esercitazioni e Formazione Continua',
    description: 'I nostri operatori di protezione civile seguono percorsi formativi specialistici e partecipano regolarmente a esercitazioni congiunte con le istituzioni locali, i Vigili del Fuoco e le altre associazioni, per testare la prontezza operativa e l\'efficacia dei protocolli d\'intervento.',
    imageUrl: 'https://picsum.photos/seed/esercitazione-pc/800/600',
  },
  {
    id: 7,
    title: 'Diventa Volontario di Protezione Civile',
    description: 'Se hai spirito di adattamento, ti piace lavorare in squadra e desideri metterti a disposizione della comunità nei momenti di maggiore bisogno, unisciti alla nostra squadra di protezione civile. C\'è bisogno di competenze tecniche, logistiche e operative.',
    imageUrl: 'https://picsum.photos/seed/volontario-pc/800/600',
    cta: { label: 'Diventa Volontario', url: '/diventa-volontario' },
  },
]
</script>