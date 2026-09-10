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
    titolo: 'Corsi Primo Soccorso e Blsd (Rianimazione e Defibrillatore)',
    descrizione: 'Impara a riconoscere un\'emergenza sanitaria, ad allertare correttamente i soccorsi e a praticare la Rianimazione Cardiopolmonare (RCP) con l\'uso del Defibrillatore Semiautomatico Esterno (DAE). Un corso teorico-pratico aperto a tutti per salvare una vita.',
    immagine: 'https://picsum.photos/seed/corsoblsd/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Disostruzione Pediatrica e Primo Soccorso Infantile',
    descrizione: 'Incontri informativi e formativi dedicati a genitori, nonni, maestre ed educatori per imparare le manovre di disostruzione delle vie aeree nei lattanti e nei bambini, oltre alla gestione di piccoli traumi, febbre alta e convulsioni.',
    immagine: 'https://picsum.photos/seed/disostrizionepediatrica/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Formazione Sicurezza nei Luoghi di Lavoro (D.Lgs. 81/08)',
    descrizione: 'Organizziamo corsi dedicati alle aziende per la formazione degli addetti al Primo Soccorso aziendale (Gruppi A, B e C), conformi alle normative vigenti. Includiamo esercitazioni pratiche su manichini e aggiornamenti periodici obbligatori.',
    immagine: 'https://picsum.photos/seed/sicurezzaaziendale/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Progetti nelle Scuole e Giovani',
    descrizione: 'Promuoviamo la cultura del soccorso e della prevenzione negli istituti scolastici di ogni ordine e grado. Moduli didattici adattati per studenti con simulazioni pratiche, educazione alla chiamata al 112 e nozioni di corretta chiamata d\'emergenza.',
    immagine: 'https://picsum.photos/seed/scuolesoccorso/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Esercitazioni Pratiche con Manichini di Ultima Generazione',
    descrizione: 'Tutti i nostri corsi prevedono un\'ampia parte pratica: l\'addestramento avviene su manichini interattivi e DAE da addestramento, seguiti passo-passo da istruttori certificati per acquisire la giusta manualità e sicurezza nelle manovre.',
    immagine: 'https://picsum.photos/seed/esercitazionepratica/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Certificazioni Rilasciate e Calendario Corsi',
    descrizione: 'Al termine delle attività formative qualificate viene rilasciato un attestato di partecipazione o l\'abilitazione ufficiale all\'uso del DAE riconosciuta a livello regionale. Consulta il calendario periodico per scoprire le prossime date disponibili o richiedi un corso su misura.',
    immagine: 'https://picsum.photos/seed/attestatocorso/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
]
</script>