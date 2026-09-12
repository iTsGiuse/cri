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
    title: 'Raccolta Fondi e Sostenibilità delle Attività',
    description: 'Garantiamo la continuità e la crescita dei nostri servizi alla comunità attraverso campagne di raccolta fondi trasparenti, donazioni liberali, il 5×1000 e partenariati con realtà del territorio. Ogni risorsa raccolta viene reinvestita direttamente per l\'acquisto di mezzi, attrezzature e beni di prima necessità.',
    imageUrl: 'https://picsum.photos/seed/raccolta-fondi/800/600',
    cta: { label: 'Scopri come sostenerci', url: '/sostienici' },
  },
  {
    id: 2,
    title: 'Comunicazione Locale e Trasparenza',
    description: 'Raccontiamo quotidianamente le attività, i progetti e l\'impegno dei nostri volontari attraverso i canali digitali, i social media e i comunicati stampa. Crediamo in una comunicazione trasparente, tempestiva e vicina ai cittadini, per informare la comunità su cosa facciamo e come usiamo le risorse.',
    imageUrl: 'https://picsum.photos/seed/comunicazione-cri/800/600',
  },
  {
    id: 3,
    title: 'Promozione del Volontariato e Arruolamento',
    description: 'Curiamo le campagne di sensibilizzazione e i percorsi di accoglienza per chi desidera diventare volontario della Croce Rossa a Rubiera. Gestiamo i canali informativi dedicati ai nuovi aspiranti, accompagnandoli dal primo contatto fino all\'ingresso ufficiale in squadra.',
    imageUrl: 'https://picsum.photos/seed/promozione-volontariato/800/600',
    cta: { label: 'Diventa Volontario', url: '/diventa-volontario' },
  },
  {
    id: 4,
    title: 'Eventi Pubblici e Manifestazioni di Sensibilizzazione',
    description: 'Organizziamo e partecipiamo a fiere, mercatini, banchetti informativi e feste di comunità per incontrare i cittadini di Rubiera, far conoscere da vicino la storia e la missione della Croce Rossa e promuovere stili di vita sani e solidali.',
    imageUrl: 'https://picsum.photos/seed/eventi-pubblici-cri/800/600',
  },
  {
    id: 5,
    title: 'Relazioni con il Territorio e le Istituzioni',
    description: 'Costruiamo e manteniamo reti di collaborazione stabili con il Comune di Rubiera, le realtà associative locali, le scuole e le aziende. Crediamo che la forza di una comunità risieda nella capacità di fare rete per rispondere ai bisogni delle persone.',
    imageUrl: 'https://picsum.photos/seed/relazioni-territorio/800/600',
    cta: { label: 'Contattaci per collaborare', url: 'mailto:rubiera@cri.it' },
  },
  {
    id: 6,
    title: 'Formazione Interna e Crescita Associativa',
    description: 'Curiamo lo sviluppo organizzativo del Comitato, promuovendo percorsi di formazione dedicati alla leadership, al lavoro di squadra, al crisis management e alle competenze digitali e comunicative per i nostri volontari.',
    imageUrl: 'https://picsum.photos/seed/sviluppo-organizzativo/800/600',
  },
  {
    id: 7,
    title: 'Unisciti al Team di Sviluppo e Comunicazione',
    description: 'Hai competenze nella grafica, nella gestione dei social, nella scrittura, nell\'organizzazione di eventi o nel fundraising? Metti il tuo talento al servizio della Croce Rossa di Rubiera e aiuta a far crescere la nostra voce sul territorio.',
    imageUrl: 'https://picsum.photos/seed/volontario-comunicazione/800/600',
    cta: { label: 'Unisciti a noi', url: '/diventa-volontario' },
  },
]
</script>