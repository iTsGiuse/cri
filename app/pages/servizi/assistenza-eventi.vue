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
    title: 'Copertura Sanitaria per Eventi e Manifestazioni',
    description: 'Garantiamo la presenza di personale qualificato e mezzi di soccorso coordinati per qualsiasi tipologia di evento pubblico o privato: manifestazioni sportive, concerti, sagre, fieri, spettacoli e feste patronali. Operiamo in conformità con la normativa vigente in materia di pianificazione dei soccorsi sanitari.',
    imageUrl: 'https://picsum.photos/seed/assistenzaeventi/800/600',
  },
  {
    id: 2,
    title: 'Assistenza alle Competizioni Sportive',
    description: 'Forniamo presidi sanitari specializzati per gare ciclistiche, tornei di calcio, maratone, sport acquatici e motoristici. Le nostre squadre d\'emergenza, dotate di defibrillatore (DAE) e presidi per il trauma, garantiscono interventi tempestivi sul luogo dell\'infortunio.',
    imageUrl: 'https://picsum.photos/seed/eventisportivi/800/600',
  },
  {
    id: 3,
    title: 'Posti di Primo Soccorso e Squadre Appiedate',
    description: 'Per grandi affluenze di pubblico allestiamo Posti di Primo Soccorso (PST) campali completamente attrezzati e impieghiamo squadre appiedate con zaini di primo intervento e DAE per un monitoraggio dinamico e capillare di tutta l\'area dell\'evento.',
    imageUrl: 'https://picsum.photos/seed/postoprimosoccorso/800/600',
  },
  {
    id: 4,
    title: 'Ambulanze e Equipaggi Sanitari Qualificati',
    description: 'Mettiamo a disposizione ambulanze da soccorso con equipaggi addestrati e certificati (soccorritori DAE, con possibilità di integrazione con Infermieri di area critica e Medici su richiesta). Tutti i mezzi sono coordinati e collegati in radiofrequenza con la centrale operativa.',
    imageUrl: 'https://picsum.photos/seed/ambulanzaevento/800/600',
  },
  {
    id: 5,
    title: 'Calcolo del Rischio e Piano di Soccorso Sanitario',
    description: 'Supportiamo gli organizzatori nell\'analisi dell\'algoritmo di calcolo del rischio (es. Griglia di Maurer / Delibere Regionali Safety & Security). Predisponiamo l\'apposito Piano Sanitario d\'Evento da inoltrare e convalidare presso le autorità sanitarie di competenza (112/118 di riferimento).',
    imageUrl: 'https://picsum.photos/seed/pianificazionesicurezza/800/600',
  },
  {
    id: 6,
    title: 'Come Richiedere un Preventivo o un Sopralluogo',
    description: 'Consigliamo di contattarci con congruo anticipo (almeno 30 giorni prima per grandi eventi) indicando date, tipologia di manifestazione, affluenza prevista e layout della location. Il nostro ufficio tecnico formulerà un piano preventivo personalizzato e senza impegno.',
    imageUrl: 'https://picsum.photos/seed/preventivoevento/800/600',
  },
]
</script>
