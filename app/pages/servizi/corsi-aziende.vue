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
    title: 'Formazione Primo Soccorso Aziendale (D.Lgs. 81/08)',
    description: 'Percorsi formativi obbligatori previsti dall\'Art. 45 del D.Lgs. 81/2008 e dal D.M. 388/2003. Prepariamo i lavoratori designati dal datore di lavoro ad affrontare con tempestività, lucidità e competenza ogni emergenza sanitaria all\'interno dell\'ambiente di lavoro.',
    imageUrl: 'https://picsum.photos/seed/aziendali1/800/600',
  },
  {
    id: 2,
    title: 'Corsi per Aziende di Gruppo A, B e C',
    description: 'Eroghiamo corsi differenziati in base alla classificazione del rischio aziendale: moduli da 16 ore per aziende ad alto rischio (Gruppo A) e da 12 ore per le restanti categorie (Gruppi B e C). Il programma unisce una solida base teorica a sessioni pratiche di intervento.',
    imageUrl: 'https://picsum.photos/seed/aziendali2/800/600',
  },
  {
    id: 3,
    title: 'Aggiornamenti Periodici Obbligatori',
    description: 'La normativa prevede il rinnovo delle competenze pratiche con cadenza triennale (richiamo da 4 a 6 ore). I nostri corsi di aggiornamento permettono di ripassare le procedure di primo intervento, mantenendo gli addetti aziendali sempre pronti ed efficienti.',
    imageUrl: 'https://picsum.photos/seed/aziendali3/800/600',
  },
  {
    id: 4,
    title: 'Abilitazione all\'Uso del Defibrillatore (BLSD Aziendale)',
    description: 'Integrabile nei percorsi aziendali, la formazione BLSD (Basic Life Support & Defibrillation) addestra l\'infortunista all\'uso rapido del defibrillatore semiautomatico (DAE) e alle manovre di rianimazione cardiopolmonare in caso di arresto cardiaco improvviso.',
    imageUrl: 'https://picsum.photos/seed/aziendali4/800/600',
  },
  {
    id: 5,
    title: 'Sessioni Pratiche On-Site o Presso le Nostre Sedi',
    description: 'Flessibilità organizzativa totale: eroghiamo i corsi direttamente presso i locali della tua azienda per minimizzare gli spostamenti del personale, oppure ospitiamo le classi nelle nostre aule formative attrezzate con manichini da simulazione interattivi.',
    imageUrl: 'https://picsum.photos/seed/aziendali5/800/600',
  },
  {
    id: 6,
    title: 'Attestati di Frequenza e Documentazione Valida per la Sicurezza',
    description: 'Al superamento della prova pratica viene rilasciato l\'attestato individuale conforme ai requisiti di legge richiesti dagli organi di vigilanza (ASL/ATS e Ispettorato del Lavoro). Forniamo supporto anche per il corretto allestimento della cassetta di pronto soccorso.',
    imageUrl: 'https://picsum.photos/seed/aziendali6/800/600',
  },
]
</script>