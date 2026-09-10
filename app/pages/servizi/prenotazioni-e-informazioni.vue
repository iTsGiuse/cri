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
    titolo: 'Prenotazione Trasporti Sanitari Ordinari',
    descrizione: 'Hai bisogno di un trasporto programmato in ambulanza, pulmino con pedana o autovettura? Puoi prenotare il tuo servizio per visite, esami, ricoveri o dimissioni contattando il nostro centralino con almeno 24-48 ore di anticipo.',
    immagine: 'https://picsum.photos/seed/prenotazionetrasporto/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Informazioni sui Corsi di Formazione',
    descrizione: 'Per iscrizioni a corsi di Primo Soccorso (BLSD), disostruzione pediatrica o formazione aziendale D.Lgs. 81/08, il nostro ufficio formazione è a disposizione per fornirti il calendario delle prossime date e le modalità di registrazione.',
    immagine: 'https://picsum.photos/seed/infocorsi/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Preventivi per Assistenza a Eventi e Manifestazioni',
    descrizione: 'Organizzi un evento sportivo, culturale o una manifestazione pubblica? Richiedi un preventivo gratuito e la valutazione del rischio per l\'allestimento della copertura sanitaria dedicata e il relativo piano di soccorso.',
    immagine: 'https://picsum.photos/seed/preventivoeventi/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Orari di Apertura degli Uffici e Centralino',
    descrizione: 'I nostri uffici amministrativi e lo sportello prenotazioni sono operativi dal lunedì al venerdì. Per emergenze sanitarie urgenti non contattare la sede, ma componi immediatamente il Numero Unico Europeo per le Emergenze 112.',
    immagine: 'https://picsum.photos/seed/uffici/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Documenti e Informazioni Utili da Fornire',
    descrizione: 'Quando chiedi una prenotazione o un\'informazione, assicurati di avere a portata di mano i dati dell\'utente (nome, codice fiscale, indirizzo), le specifiche sulle condizioni di deambulazione e l\'orario preciso dell\'appuntamento sanitario.',
    immagine: 'https://picsum.photos/seed/documenti/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Accesso ai Servizi di Supporto Sociale',
    descrizione: 'Per richiedere l\'accesso ai servizi di sostegno alle famiglie, consegna pacchi alimentari o assistenza anziani, puoi fissare un colloquio con il nostro sportello dedicato che lavora in rete con i servizi sociali del territorio.',
    immagine: 'https://picsum.photos/seed/contattisociali/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
]
</script>