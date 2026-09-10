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
    titolo: 'Formazione Primo Soccorso Aziendale (D.Lgs. 81/08)',
    descrizione: 'Percorsi formativi obbligatori previsti dall\'Art. 45 del D.Lgs. 81/2008 e dal D.M. 388/2003. Prepariamo i lavoratori designati dal datore di lavoro ad affrontare con tempestività, lucidità e competenza ogni emergenza sanitaria all\'interno dell\'ambiente di lavoro.',
    immagine: 'https://picsum.photos/seed/aziendali1/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Corsi per Aziende di Gruppo A, B e C',
    descrizione: 'Eroghiamo corsi differenziati in base alla classificazione del rischio aziendale: moduli da 16 ore per aziende ad alto rischio (Gruppo A) e da 12 ore per le restanti categorie (Gruppi B e C). Il programma unisce una solida base teorica a sessioni pratiche di intervento.',
    immagine: 'https://picsum.photos/seed/aziendali2/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Aggiornamenti Periodici Obbligatori',
    descrizione: 'La normativa prevede il rinnovo delle competenze pratiche con cadenza triennale (richiamo da 4 a 6 ore). I nostri corsi di aggiornamento permettono di ripassare le procedure di primo intervento, mantenendo gli addetti aziendali sempre pronti ed efficienti.',
    immagine: 'https://picsum.photos/seed/aziendali3/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Abilitazione all\'Uso del Defibrillatore (BLSD Aziendale)',
    descrizione: 'Integrabile nei percorsi aziendali, la formazione BLSD (Basic Life Support & Defibrillation) addestra l\'infortunista all\'uso rapido del defibrillatore semiautomatico (DAE) e alle manovre di rianimazione cardiopolmonare in caso di arresto cardiaco improvviso.',
    immagine: 'https://picsum.photos/seed/aziendali4/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Sessioni Pratiche On-Site o Presso le Nostre Sedi',
    descrizione: 'Flessibilità organizzativa totale: eroghiamo i corsi direttamente presso i locali della tua azienda per minimizzare gli spostamenti del personale, oppure ospitiamo le classi nelle nostre aule formative attrezzate con manichini da simulazione interattivi.',
    immagine: 'https://picsum.photos/seed/aziendali5/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Attestati di Frequenza e Documentazione Valida per la Sicurezza',
    descrizione: 'Al superamento della prova pratica viene rilasciato l\'attestato individuale conforme ai requisiti di legge richiesti dagli organi di vigilanza (ASL/ATS e Ispettorato del Lavoro). Forniamo supporto anche per il corretto allestimento della cassetta di pronto soccorso.',
    immagine: 'https://picsum.photos/seed/aziendali6/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
]
</script>