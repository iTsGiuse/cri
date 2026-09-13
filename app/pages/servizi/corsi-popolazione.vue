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
    title: 'Corsi Primo Soccorso e Blsd (Rianimazione e Defibrillatore)',
    description: 'Impara a riconoscere un\'emergenza sanitaria, ad allertare correttamente i soccorsi e a praticare la Rianimazione Cardiopolmonare (RCP) con l\'uso del Defibrillatore Semiautomatico Esterno (DAE). Un corso teorico-pratico aperto a tutti per salvare una vita.',
    imageUrl: 'https://picsum.photos/seed/corsoblsd/800/600',
  },
  {
    id: 2,
    title: 'Disostruzione Pediatrica e Primo Soccorso Infantile',
    description: 'Incontri informativi e formativi dedicati a genitori, nonni, maestre ed educatori per imparare le manovre di disostruzione delle vie aeree nei lattanti e nei bambini, oltre alla gestione di piccoli traumi, febbre alta e convulsioni.',
    imageUrl: 'https://picsum.photos/seed/disostrizionepediatrica/800/600',
  },
  {
    id: 3,
    title: 'Formazione Sicurezza nei Luoghi di Lavoro (D.Lgs. 81/08)',
    description: 'Organizziamo corsi dedicati alle aziende per la formazione degli addetti al Primo Soccorso aziendale (Gruppi A, B e C), conformi alle normative vigenti. Includiamo esercitazioni pratiche su manichini e aggiornamenti periodici obbligatori.',
    imageUrl: 'https://picsum.photos/seed/sicurezzaaziendale/800/600',
  },
  {
    id: 4,
    title: 'Progetti nelle Scuole e Giovani',
    description: 'Promuoviamo la cultura del soccorso e della prevenzione negli istituti scolastici di ogni ordine e grado. Moduli didattici adattati per studenti con simulazioni pratiche, educazione alla chiamata al 112 e nozioni di corretta chiamata d\'emergenza.',
    imageUrl: 'https://picsum.photos/seed/scuolesoccorso/800/600',
  },
  {
    id: 5,
    title: 'Esercitazioni Pratiche con Manichini di Ultima Generazione',
    description: 'Tutti i nostri corsi prevedono un\'ampia parte pratica: l\'addestramento avviene su manichini interattivi e DAE da addestramento, seguiti passo-passo da istruttori certificati per acquisire la giusta manualità e sicurezza nelle manovre.',
    imageUrl: 'https://picsum.photos/seed/esercitazionepratica/800/600',
  },
  {
    id: 6,
    title: 'Certificazioni Rilasciate e Calendario Corsi',
    description: 'Al termine delle attività formative qualificate viene rilasciato un attestato di partecipazione o l\'abilitazione ufficiale all\'uso del DAE riconosciuta a livello regionale. Consulta il calendario periodico per scoprire le prossime date disponibili o richiedi un corso su misura.',
    imageUrl: 'https://picsum.photos/seed/attestatocorso/800/600',
  },
]
</script>
