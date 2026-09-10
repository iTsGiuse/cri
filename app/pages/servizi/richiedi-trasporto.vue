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
    titolo: 'Trasporto Sanitario Programmato',
    descrizione: 'Servizio dedicato a chi necessita di trasferimenti verso strutture sanitarie, ospedali o cliniche per visite specialistiche, esami diagnostici, ricoveri o dimissioni. Disponiamo di mezzi attrezzati per garantire comfort e sicurezza durante tutto il tragitto.',
    immagine: 'https://picsum.photos/seed/trasportoprogrammato/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 2,
    titolo: 'Trasporto Pazienti Oncologici e Dializzati',
    descrizione: 'Offriamo un servizio continuativo e personalizzato per i pazienti che devono sottoporsi regolarmente a cicli di chemioterapia, radioterapia o dialisi. Garantiamo puntualità e assistenza qualificata per ridurre al minimo lo stress del paziente e delle famiglie.',
    immagine: 'https://picsum.photos/seed/terapie/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Trasporto in Ambulanza e Mezzi Attrezzati',
    descrizione: 'La nostra flotta include ambulanze da trasporto, pulmini attrezzati con pedana idraulica per sedie a ruote e autovetture dedicate. Ogni mezzo è igienizzato dopo ogni servizio e condotto da personale formato per la gestione del paziente non autosufficiente.',
    immagine: 'https://picsum.photos/seed/mezzi/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 4,
    titolo: 'Trasferimenti a Lunga Percorrenza',
    descrizione: 'Organizziamo trasferimenti sanitari su tutto il territorio nazionale ed estero per pazienti che devono raggiungere centri di eccellenza, trasferirsi in altre strutture o rientrare al proprio domicilio. Possibilità di equipaggio con infermiere o medico a bordo su richiesta.',
    immagine: 'https://picsum.photos/seed/lungapercorrenza/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Assistenza Sanitaria per Eventi e Manifestazioni',
    descrizione: 'Forniamo copertura sanitaria per eventi sportivi, concerti, fiere, feste patronali e manifestazioni pubbliche o private. Predisponiamo ambulanze, squadre appiedate e posti di primo soccorso in conformità alle normative regionali sulla sicurezza negli eventi.',
    immagine: 'https://picsum.photos/seed/eventi/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 6,
    titolo: 'Come Prenotare e Documentazione Necessaria',
    descrizione: 'È consigliabile prenotare il servizio con almeno 24-48 ore di anticipo. Al momento della richiesta indica la tipologia di trasporto (in barella, sedia a ruote o deambulante), gli orari della visita e l\'eventuale presenza di un accompagnatore o di barriere architettoniche.',
    immagine: 'https://picsum.photos/seed/prenota/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
]
</script>