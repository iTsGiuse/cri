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
    title: 'Trasporto Sanitario Programmato',
    description: 'Servizio dedicato a chi necessita di trasferimenti verso strutture sanitarie, ospedali o cliniche per visite specialistiche, esami diagnostici, ricoveri o dimissioni. Disponiamo di mezzi attrezzati per garantire comfort e sicurezza durante tutto il tragitto.',
    imageUrl: 'https://picsum.photos/seed/trasportoprogrammato/800/600',
  },
  {
    id: 2,
    title: 'Trasporto Pazienti Oncologici e Dializzati',
    description: 'Offriamo un servizio continuativo e personalizzato per i pazienti che devono sottoporsi regolarmente a cicli di chemioterapia, radioterapia o dialisi. Garantiamo puntualità e assistenza qualificata per ridurre al minimo lo stress del paziente e delle famiglie.',
    imageUrl: 'https://picsum.photos/seed/terapie/800/600',
  },
  {
    id: 3,
    title: 'Trasporto in Ambulanza e Mezzi Attrezzati',
    description: 'La nostra flotta include ambulanze da trasporto, pulmini attrezzati con pedana idraulica per sedie a ruote e autovetture dedicate. Ogni mezzo è igienizzato dopo ogni servizio e condotto da personale formato per la gestione del paziente non autosufficiente.',
    imageUrl: 'https://picsum.photos/seed/mezzi/800/600',
  },
  {
    id: 4,
    title: 'Trasferimenti a Lunga Percorrenza',
    description: 'Organizziamo trasferimenti sanitari su tutto il territorio nazionale ed estero per pazienti che devono raggiungere centri di eccellenza, trasferirsi in altre strutture o rientrare al proprio domicilio. Possibilità di equipaggio con infermiere o medico a bordo su richiesta.',
    imageUrl: 'https://picsum.photos/seed/lungapercorrenza/800/600',
  },
  {
    id: 5,
    title: 'Assistenza Sanitaria per Eventi e Manifestazioni',
    description: 'Forniamo copertura sanitaria per eventi sportivi, concerti, fiere, feste patronali e manifestazioni pubbliche o private. Predisponiamo ambulanze, squadre appiedate e posti di primo soccorso in conformità alle normative regionali sulla sicurezza negli eventi.',
    imageUrl: 'https://picsum.photos/seed/eventi/800/600',
  },
  {
    id: 6,
    title: 'Come Prenotare e Documentazione Necessaria',
    description: 'È consigliabile prenotare il servizio con almeno 24-48 ore di anticipo. Al momento della richiesta indica la tipologia di trasporto (in barella, sedia a ruote o deambulante), gli orari della visita e l\'eventuale presenza di un accompagnatore o di barriere architettoniche.',
    imageUrl: 'https://picsum.photos/seed/prenota/800/600',
  },
]
</script>