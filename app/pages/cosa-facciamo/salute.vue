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
    titolo: 'Servizio di Emergenza-Urgenza 118',
    descrizione: 'Garantiamo la copertura dei servizi di soccorso sanitario in convenzione con il sistema 118 dell\'Azienda USL di Reggio Emilia. Le nostre ambulanze e i nostri equipaggi, formati e certificati secondo i protocolli regionali, sono operativi H24 per intervenire tempestivamente in caso di malori, traumi o emergenze sul territorio di Rubiera e nei comuni limitrofi.',
    immagine: 'https://picsum.photos/seed/emergenza118/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Trasporti Sanitari e Inserimenti Ospedalieri',
    descrizione: 'Offriamo un servizio continuo di trasporto programmato per cittadini che necessitano di spostamenti da e per strutture ospedaliere, centri di riabilitazione o cliniche private. Effettuiamo dimissioni, ricoveri, visite specialistiche, dialisi e terapie ricorrenti mediante ambulanze, pulmini attrezzati con pedana per disabili e autovetture dedicate.',
    immagine: 'https://picsum.photos/seed/trasporto-sanitario/800/600',
    testoPulsante: 'Prenota un trasporto',
    linkPulsante: '/contatti',
  },
  {
    id: 3,
    titolo: 'Assistenza Sanitaria a Manifestazioni ed Eventi',
    descrizione: 'Mettiamo a disposizione squadre di soccorritori, ambulanze e postazioni mediche avanzate per la copertura sanitaria di eventi sportivi, concerti, sagre, fiere ed eventi pubblici o privati. Progettiamo il piano dei soccorsi in conformità con la normativa vigente sulla sicurezza dei grandi eventi.',
    immagine: 'https://picsum.photos/seed/assistenza-eventi/800/600',
    testoPulsante: 'Richiedi assistenza per un evento',
    linkPulsante: '/contatti',
  },
  {
    id: 4,
    titolo: 'Formazione e Primo Soccorso per la Cittadinanza',
    descrizione: 'Organizziamo corsi teorico-pratici dedicati alla popolazione, alle famiglie e alle scuole: manovre di disostruzione pediatrica, utilizzo del defibrillatore semi-automatico (BLSD) e nozioni base di primo soccorso. Il nostro obiettivo è rendere ogni cittadino un anello attivo della catena del soccorso.',
    immagine: 'https://picsum.photos/seed/formazione-salute/800/600',
    testoPulsante: 'Scopri i prossimi corsi',
    linkPulsante: '/corsi',
  },
  {
    id: 5,
    titolo: 'Corsi Sicurezza sul Lavoro (D.Lgs. 81/08)',
    descrizione: 'Forniamo percorsi formativi specifici dedicati alle aziende del territorio per la formazione e l\'aggiornamento degli addetti al primo soccorso aziendale (Gruppi A, B e C), garantendo il rispetto delle normative di legge sulla tutela e salute nei luoghi di lavoro.',
    immagine: 'https://picsum.photos/seed/primo-soccorso-aziende/800/600',
    testoPulsante: 'Contatta il settore formazione',
    linkPulsante: 'mailto:rubiera@cri.it',
  },
  {
    id: 6,
    titolo: 'Prevenzione, Stili di Vita e Screening',
    descrizione: 'Promuoviamo la cultura della salute attraverso campagne di sensibilizzazione, giornate di prevenzione cardiovascolare e controlli gratuiti della pressione arteriosa o della glicemia in piazza. Lavoriamo quotidianamente per contrastare le malattie croniche e diffondere stili di vita sani.',
    immagine: 'https://picsum.photos/seed/prevenzione-salute/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 7,
    titolo: 'Diventa Volontario nei Servizi Sanitari',
    descrizione: 'Tutti i nostri servizi nell\'Area Salute sono possibili grazie alla dedizione dei nostri volontari. Se desideri salire in ambulanza, aiutare nei trasporti ordinari o contribuire alla formazione della comunità, entra a far parte della nostra squadra.',
    immagine: 'https://picsum.photos/seed/volontari-cri/800/600',
    testoPulsante: 'Diventa Volontario',
    linkPulsante: '/diventa-volontario',
  },
]
</script>