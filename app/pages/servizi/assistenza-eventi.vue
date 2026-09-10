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
    titolo: 'Copertura Sanitaria per Eventi e Manifestazioni',
    descrizione: 'Garantiamo la presenza di personale qualificato e mezzi di soccorso coordinati per qualsiasi tipologia di evento pubblico o privato: manifestazioni sportive, concerti, sagre, fieri, spettacoli e feste patronali. Operiamo in conformità con la normativa vigente in materia di pianificazione dei soccorsi sanitari.',
    immagine: 'https://picsum.photos/seed/assistenzaeventi/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Assistenza alle Competizioni Sportive',
    descrizione: 'Forniamo presidi sanitari specializzati per gare ciclistiche, tornei di calcio, maratone, sport acquatici e motoristici. Le nostre squadre d\'emergenza, dotate di defibrillatore (DAE) e presidi per il trauma, garantiscono interventi tempestivi sul luogo dell\'infortunio.',
    immagine: 'https://picsum.photos/seed/eventisportivi/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Posti di Primo Soccorso e Squadre Appiedate',
    descrizione: 'Per grandi affluenze di pubblico allestiamo Posti di Primo Soccorso (PST) campali completamente attrezzati e impieghiamo squadre appiedate con zaini di primo intervento e DAE per un monitoraggio dinamico e capillare di tutta l\'area dell\'evento.',
    immagine: 'https://picsum.photos/seed/postoprimosoccorso/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Ambulanze e Equipaggi Sanitari Qualificati',
    descrizione: 'Mettiamo a disposizione ambulanze da soccorso con equipaggi addestrati e certificati (soccorritori DAE, con possibilità di integrazione con Infermieri di area critica e Medici su richiesta). Tutti i mezzi sono coordinati e collegati in radiofrequenza con la centrale operativa.',
    immagine: 'https://picsum.photos/seed/ambulanzaevento/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Calcolo del Rischio e Piano di Soccorso Sanitario',
    descrizione: 'Supportiamo gli organizzatori nell\'analisi dell\'algoritmo di calcolo del rischio (es. Griglia di Maurer / Delibere Regionali Safety & Security). Predisponiamo l\'apposito Piano Sanitario d\'Evento da inoltrare e convalidare presso le autorità sanitarie di competenza (112/118 di riferimento).',
    immagine: 'https://picsum.photos/seed/pianificazionesicurezza/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Come Richiedere un Preventivo o un Sopralluogo',
    descrizione: 'Consigliamo di contattarci con congruo anticipo (almeno 30 giorni prima per grandi eventi) indicando date, tipologia di manifestazione, affluenza prevista e layout della location. Il nostro ufficio tecnico formulerà un piano preventivo personalizzato e senza impegno.',
    immagine: 'https://picsum.photos/seed/preventivoevento/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
]
</script>