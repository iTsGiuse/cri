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
    title: 'NUE 112: Il Numero Unico Europeo per le Emergenze',
    description: 'In Europa e in Italia, il 112 è il numero gratuito per richiedere qualsiasi tipo di soccorso. Una volta effettuata la chiamata, la Centrale Unica di Risposta (CUR) localizza il chiamante, individua la natura dell\'emergenza e smista la richiesta entro pochi secondi alla centrale operativa più idonea (Sanità, Forze dell\'Ordine o Vigili del Fuoco).',
    imageUrl: 'https://picsum.photos/seed/nue112/800/600',
  },
  {
    id: 2,
    title: 'Emergenza Sanitaria e Centrale Operativa 118',
    description: 'Il 118 (o l\'estensione sanitaria del 112) è dedicato alle urgenze mediche, malori e traumi gravemente compromettenti per la vita. Gli operatori di centrale valutano la gravità dell\'evento tramite il triage telefonico, guidano il chiamante nelle prime manovre di soccorso e inviano il mezzo adeguato (Ambulanza di Base, Mezzo di Soccorso Avanzato con Infermiere o Automedica).',
    imageUrl: 'https://picsum.photos/seed/soccorso118/800/600',
  },
  {
    id: 3,
    title: 'Soccorso Stradale e Autostradale',
    description: 'Negli incidenti stradali, la tempestività è fondamentale. La chiamata attiva simultaneamente la catena del soccorso: il personale sanitario per la cura dei feriti, i Vigili del Fuoco per l\'estricazione dei passeggeri o la messa in sicurezza dei veicoli e le Forze dell\'Ordine per la gestione della viabilità e i rilievi.',
    imageUrl: 'https://picsum.photos/seed/stradale/800/600',
  },
  {
    id: 4,
    title: 'Elisoccorso e Servizio HEMS',
    description: 'L\'elisoccorso (Helicopter Emergency Medical Service) interviene quando le condizioni del paziente sono critiche o quando la zona dell\'evento è difficile o lenta da raggiungere via terra. A bordo dell\'elicottero sono sempre presenti un medico anestesista-rianimatore, un infermiere di area critica e personale tecnico di volo o di soccorso alpino.',
    imageUrl: 'https://picsum.photos/seed/elisoccorso/800/600',
  },
  {
    id: 5,
    title: 'Soccorso Acquatico e Fluviale',
    description: 'Per emergenze in mare, laghi, fiumi o durante eventi alluvionali, il sistema d\'emergenza si avvale di idroambulanze, imbarcazioni speciali e moto d\'acqua gestite da personale sanitario con brevetti di salvamento acquatico, spesso operanti in stretta collaborazione con la Guardia Costiera e i Sommozzatori.',
    imageUrl: 'https://picsum.photos/seed/idroambulanza/800/600',
  },
  {
    id: 6,
    title: 'Soccorso Alpino e Ambientale',
    description: 'In caso di infortuni in montagna, valanghe, forre o ambienti ipogei (grotte), intervengono le squadre di terra del Soccorso Alpino. Svolgono operazioni di ricerca dispersi e recupero in contesti impervi, coordinandosi frequentemente con l\'elisoccorso per l\'impiego del verricello.',
    imageUrl: 'https://picsum.photos/seed/alpino/800/600',
  },
  {
    id: 7,
    title: 'Geolocalizzazione: L\'App "Where Are U"',
    description: 'L\'applicazione ufficiale collegata alle centrali NUE 112 permette di effettuare chiamate di emergenza inviando automaticamente le coordinate GPS esatte della tua posizione. Consente anche di effettuare chiamate "mute" o d\'emergenza tramite chat e icone per chi si trova in impossibilità di parlare o per persone con disabilità.',
    imageUrl: 'https://picsum.photos/seed/app112/800/600',
    cta: { label: 'Scarica l\'App (iOS / Android)', url: 'https://where.areu.lombardia.it/' },
  },
  {
    id: 8,
    title: 'Cosa Fare e Dire Durante la Chiamata',
    description: 'Quando si compone il 112 o il 118, occorre mantenere la calma e rispondere con precisione alle domande dell\'operatore: indicare DOVE ci si trova (comune, via, punti di riferimento), COSA è successo, QUANTE persone sono coinvolte e le LORO CONDIZIONI. Non riattaccare mai per primi: l\'operatore darà indicazioni pre-arrivo fondamentali.',
    imageUrl: 'https://picsum.photos/seed/primosoccorso/800/600',
  },
]
</script>