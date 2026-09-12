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
    title: 'Prenotazione Trasporti Sanitari Ordinari',
    description: 'Hai bisogno di un trasporto programmato in ambulanza, pulmino con pedana o autovettura? Puoi prenotare il tuo servizio per visite, esami, ricoveri o dimissioni contattando il nostro centralino con almeno 24-48 ore di anticipo.',
    imageUrl: 'https://picsum.photos/seed/prenotazionetrasporto/800/600',
  },
  {
    id: 2,
    title: 'Informazioni sui Corsi di Formazione',
    description: 'Per iscrizioni a corsi di Primo Soccorso (BLSD), disostruzione pediatrica o formazione aziendale D.Lgs. 81/08, il nostro ufficio formazione è a disposizione per fornirti il calendario delle prossime date e le modalità di registrazione.',
    imageUrl: 'https://picsum.photos/seed/infocorsi/800/600',
  },
  {
    id: 3,
    title: 'Preventivi per Assistenza a Eventi e Manifestazioni',
    description: 'Organizzi un evento sportivo, culturale o una manifestazione pubblica? Richiedi un preventivo gratuito e la valutazione del rischio per l\'allestimento della copertura sanitaria dedicata e il relativo piano di soccorso.',
    imageUrl: 'https://picsum.photos/seed/preventivoeventi/800/600',
  },
  {
    id: 4,
    title: 'Orari di Apertura degli Uffici e Centralino',
    description: 'I nostri uffici amministrativi e lo sportello prenotazioni sono operativi dal lunedì al venerdì. Per emergenze sanitarie urgenti non contattare la sede, ma componi immediatamente il Numero Unico Europeo per le Emergenze 112.',
    imageUrl: 'https://picsum.photos/seed/uffici/800/600',
  },
  {
    id: 5,
    title: 'Documenti e Informazioni Utili da Fornire',
    description: 'Quando chiedi una prenotazione o un\'informazione, assicurati di avere a portata di mano i dati dell\'utente (nome, codice fiscale, indirizzo), le specifiche sulle condizioni di deambulazione e l\'orario preciso dell\'appuntamento sanitario.',
    imageUrl: 'https://picsum.photos/seed/documenti/800/600',
  },
  {
    id: 6,
    title: 'Accesso ai Servizi di Supporto Sociale',
    description: 'Per richiedere l\'accesso ai servizi di sostegno alle famiglie, consegna pacchi alimentari o assistenza anziani, puoi fissare un colloquio con il nostro sportello dedicato che lavora in rete con i servizi sociali del territorio.',
    imageUrl: 'https://picsum.photos/seed/contattisociali/800/600',
  },
]
</script>