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
    titolo: 'Raccolta Fondi e Sostenibilità delle Attività',
    descrizione: 'Garantiamo la continuità e la crescita dei nostri servizi alla comunità attraverso campagne di raccolta fondi trasparenti, donazioni liberali, il 5×1000 e partenariati con realtà del territorio. Ogni risorsa raccolta viene reinvestita direttamente per l\'acquisto di mezzi, attrezzature e beni di prima necessità.',
    immagine: 'https://picsum.photos/seed/raccolta-fondi/800/600',
    testoPulsante: 'Scopri come sostenerci',
    linkPulsante: '/sostienici',
  },
  {
    id: 2,
    titolo: 'Comunicazione Locale e Trasparenza',
    descrizione: 'Raccontiamo quotidianamente le attività, i progetti e l\'impegno dei nostri volontari attraverso i canali digitali, i social media e i comunicati stampa. Crediamo in una comunicazione trasparente, tempestiva e vicina ai cittadini, per informare la comunità su cosa facciamo e come usiamo le risorse.',
    immagine: 'https://picsum.photos/seed/comunicazione-cri/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 3,
    titolo: 'Promozione del Volontariato e Arruolamento',
    descrizione: 'Curiamo le campagne di sensibilizzazione e i percorsi di accoglienza per chi desidera diventare volontario della Croce Rossa a Rubiera. Gestiamo i canali informativi dedicati ai nuovi aspiranti, accompagnandoli dal primo contatto fino all\'ingresso ufficiale in squadra.',
    immagine: 'https://picsum.photos/seed/promozione-volontariato/800/600',
    testoPulsante: 'Diventa Volontario',
    linkPulsante: '/diventa-volontario',
  },
  {
    id: 4,
    titolo: 'Eventi Pubblici e Manifestazioni di Sensibilizzazione',
    descrizione: 'Organizziamo e partecipiamo a fiere, mercatini, banchetti informativi e feste di comunità per incontrare i cittadini di Rubiera, far conoscere da vicino la storia e la missione della Croce Rossa e promuovere stili di vita sani e solidali.',
    immagine: 'https://picsum.photos/seed/eventi-pubblici-cri/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 5,
    titolo: 'Relazioni con il Territorio e le Istituzioni',
    descrizione: 'Costruiamo e manteniamo reti di collaborazione stabili con il Comune di Rubiera, le realtà associative locali, le scuole e le aziende. Crediamo che la forza di una comunità risieda nella capacità di fare rete per rispondere ai bisogni delle persone.',
    immagine: 'https://picsum.photos/seed/relazioni-territorio/800/600',
    testoPulsante: 'Contattaci per collaborare',
    linkPulsante: 'mailto:rubiera@cri.it',
  },
  {
    id: 6,
    titolo: 'Formazione Interna e Crescita Associativa',
    descrizione: 'Curiamo lo sviluppo organizzativo del Comitato, promuovendo percorsi di formazione dedicati alla leadership, al lavoro di squadra, al crisis management e alle competenze digitali e comunicative per i nostri volontari.',
    immagine: 'https://picsum.photos/seed/sviluppo-organizzativo/800/600',
    testoPulsante: '',
    linkPulsante: '',
  },
  {
    id: 7,
    titolo: 'Unisciti al Team di Sviluppo e Comunicazione',
    descrizione: 'Hai competenze nella grafica, nella gestione dei social, nella scrittura, nell\'organizzazione di eventi o nel fundraising? Metti il tuo talento al servizio della Croce Rossa di Rubiera e aiuta a far crescere la nostra voce sul territorio.',
    immagine: 'https://picsum.photos/seed/volontario-comunicazione/800/600',
    testoPulsante: 'Unisciti a noi',
    linkPulsante: '/diventa-volontario',
  },
]
</script>