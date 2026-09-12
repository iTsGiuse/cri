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
    title: 'Servizio di Emergenza-Urgenza 118',
    description: 'Garantiamo la copertura dei servizi di soccorso sanitario in convenzione con il sistema 118 dell\'Azienda USL di Reggio Emilia. Le nostre ambulanze e i nostri equipaggi, formati e certificati secondo i protocolli regionali, sono operativi H24 per intervenire tempestivamente in caso di malori, traumi o emergenze sul territorio di Rubiera e nei comuni limitrofi.',
    imageUrl: 'https://picsum.photos/seed/emergenza118/800/600',
  },
  {
    id: 2,
    title: 'Trasporti Sanitari e Inserimenti Ospedalieri',
    description: 'Offriamo un servizio continuo di trasporto programmato per cittadini che necessitano di spostamenti da e per strutture ospedaliere, centri di riabilitazione o cliniche private. Effettuiamo dimissioni, ricoveri, visite specialistiche, dialisi e terapie ricorrenti mediante ambulanze, pulmini attrezzati con pedana per disabili e autovetture dedicate.',
    imageUrl: 'https://picsum.photos/seed/trasporto-sanitario/800/600',
    cta: { label: 'Prenota un trasporto', url: '/contatti' },
  },
  {
    id: 3,
    title: 'Assistenza Sanitaria a Manifestazioni ed Eventi',
    description: 'Mettiamo a disposizione squadre di soccorritori, ambulanze e postazioni mediche avanzate per la copertura sanitaria di eventi sportivi, concerti, sagre, fiere ed eventi pubblici o privati. Progettiamo il piano dei soccorsi in conformità con la normativa vigente sulla sicurezza dei grandi eventi.',
    imageUrl: 'https://picsum.photos/seed/assistenza-eventi/800/600',
    cta: { label: 'Richiedi assistenza per un evento', url: '/contatti' },
  },
  {
    id: 4,
    title: 'Formazione e Primo Soccorso per la Cittadinanza',
    description: 'Organizziamo corsi teorico-pratici dedicati alla popolazione, alle famiglie e alle scuole: manovre di disostruzione pediatrica, utilizzo del defibrillatore semi-automatico (BLSD) e nozioni base di primo soccorso. Il nostro obiettivo è rendere ogni cittadino un anello attivo della catena del soccorso.',
    imageUrl: 'https://picsum.photos/seed/formazione-salute/800/600',
    cta: { label: 'Scopri i prossimi corsi', url: '/corsi' },
  },
  {
    id: 5,
    title: 'Corsi Sicurezza sul Lavoro (D.Lgs. 81/08)',
    description: 'Forniamo percorsi formativi specifici dedicati alle aziende del territorio per la formazione e l\'aggiornamento degli addetti al primo soccorso aziendale (Gruppi A, B e C), garantendo il rispetto delle normative di legge sulla tutela e salute nei luoghi di lavoro.',
    imageUrl: 'https://picsum.photos/seed/primo-soccorso-aziende/800/600',
    cta: { label: 'Contatta il settore formazione', url: 'mailto:rubiera@cri.it' },
  },
  {
    id: 6,
    title: 'Prevenzione, Stili di Vita e Screening',
    description: 'Promuoviamo la cultura della salute attraverso campagne di sensibilizzazione, giornate di prevenzione cardiovascolare e controlli gratuiti della pressione arteriosa o della glicemia in piazza. Lavoriamo quotidianamente per contrastare le malattie croniche e diffondere stili di vita sani.',
    imageUrl: 'https://picsum.photos/seed/prevenzione-salute/800/600',
  },
  {
    id: 7,
    title: 'Diventa Volontario nei Servizi Sanitari',
    description: 'Tutti i nostri servizi nell\'Area Salute sono possibili grazie alla dedizione dei nostri volontari. Se desideri salire in ambulanza, aiutare nei trasporti ordinari o contribuire alla formazione della comunità, entra a far parte della nostra squadra.',
    imageUrl: 'https://picsum.photos/seed/volontari-cri/800/600',
    cta: { label: 'Diventa Volontario', url: '/diventa-volontario' },
  },
]
</script>
