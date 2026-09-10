<template>
  <Carosello :carosello="datiCarosello" />
  <LazySponsor :sponsor="datiSponsor" />
  <LazySezioniAlternate :sezioni="datiSezioni" />
</template>

<script setup lang="ts">
const datiCarosello = [
  {
    titolo: 'Benvenuto nel nostro sito',
    descrizione:
      'Scopri tutti i nostri servizi e trova la soluzione più adatta alle tue esigenze.',
    immagine: 'https://picsum.photos/id/1018/1920/800',
    cta: {
      label: 'Scopri di più',
      url: '/servizi',
    },
  },
  {
    titolo: 'Soluzioni moderne',
    descrizione:
      'Tecnologia, design e semplicità per offrirti un’esperienza migliore.',
    immagine: 'https://picsum.photos/id/1015/1920/800',
    cta: {
      label: 'I nostri servizi',
      url: '/servizi',
    },
  },
  {
    titolo: 'Contattaci',
    descrizione:
      'Hai bisogno di maggiori informazioni? Siamo a tua disposizione.',
    immagine: 'https://picsum.photos/id/1016/1920/800',
    cta: {
      label: 'Contattaci',
      url: '/contatti',
    },
  },
];

const datiSponsor = {
  eyebrow: 'Insieme per la comunità',
  titolo: 'I nostri sostenitori e partner',
  descrizione:
    'Grazie alle aziende e alle realtà del territorio che scelgono di sostenere la Croce Rossa Italiana – Comitato di Rubiera.',
  velocita: 25,

  sponsors: [
    {
      id: 1,
      azienda: 'Azienda Alfa',
      logo: 'https://picsum.photos/id/1/400/200',
      alt: 'Logo Azienda Alfa',
      url: 'https://example.com',
      categoria: 'Industria',
      posizione: 'Rubiera',
    },
    {
      id: 2,
      azienda: 'Azienda Beta',
      logo: 'https://picsum.photos/id/20/400/200',
      alt: 'Logo Azienda Beta',
      url: 'https://example.com',
      categoria: 'Commercio',
      posizione: 'Rubiera',
    },
    {
      id: 3,
      azienda: 'Azienda Gamma',
      logo: 'https://picsum.photos/id/30/400/200',
      alt: 'Logo Azienda Gamma',
      url: 'https://example.com',
      categoria: 'Servizi',
      posizione: 'Reggio Emilia',
    },
    {
      id: 4,
      azienda: 'Azienda Delta',
      logo: 'https://picsum.photos/id/40/400/200',
      alt: 'Logo Azienda Delta',
      url: 'https://example.com',
      categoria: 'Edilizia',
      posizione: 'Scandiano',
    },
    {
      id: 5,
      azienda: 'Azienda Epsilon',
      logo: 'https://picsum.photos/id/50/400/200',
      alt: 'Logo Azienda Epsilon',
      url: 'https://example.com',
      categoria: 'Alimentare',
      posizione: 'Modena',
    },
    {
      id: 6,
      azienda: 'Azienda Zeta',
      logo: 'https://picsum.photos/id/60/400/200',
      alt: 'Logo Azienda Zeta',
      url: 'https://example.com',
      categoria: 'Trasporti',
      posizione: 'Rubiera',
    },
    {
      id: 7,
      azienda: 'Azienda Eta',
      logo: 'https://picsum.photos/id/70/400/200',
      alt: 'Logo Azienda Eta',
      url: 'https://example.com',
      categoria: 'Tecnologia',
      posizione: 'Reggio Emilia',
    },
    {
      id: 8,
      azienda: 'Azienda Theta',
      logo: 'https://picsum.photos/id/80/400/200',
      alt: 'Logo Azienda Theta',
      url: 'https://example.com',
      categoria: 'Consulenza',
      posizione: 'Correggio',
    },
    {
      id: 9,
      azienda: 'Azienda Iota',
      logo: 'https://picsum.photos/id/90/400/200',
      alt: 'Logo Azienda Iota',
      url: 'https://example.com',
      categoria: 'Artigianato',
      posizione: 'Rubiera',
    },
    {
      id: 10,
      azienda: 'Azienda Kappa',
      logo: 'https://picsum.photos/id/100/400/200',
      alt: 'Logo Azienda Kappa',
      url: 'https://example.com',
      categoria: 'Logistica',
      posizione: 'Campogalliano',
    },
    {
      id: 11,
      azienda: 'Azienda Lambda',
      logo: 'https://picsum.photos/id/110/400/200',
      alt: 'Logo Azienda Lambda',
      url: 'https://example.com',
      categoria: 'Servizi alla persona',
      posizione: 'Reggio Emilia',
    },
    {
      id: 12,
      azienda: 'Azienda Mu',
      logo: 'https://picsum.photos/id/120/400/200',
      alt: 'Logo Azienda Mu',
      url: 'https://example.com',
      categoria: 'Commercio',
      posizione: 'Sassuolo',
    },
  ],

  cta: {
    titolo: 'Vuoi sostenere la Croce Rossa di Rubiera?',
    descrizione:
      'Il tuo sostegno ci aiuta a essere ogni giorno al fianco delle persone e della comunità.',
    label: 'Sostienici',
    url: '/sostienici',
  },
};

const datiSezioni = [
  {
    id: 1,
    titolo: 'Prima Sezione: Innovazione Digitale',
    descrizione: 'Questo è il primo blocco gestito tramite props.',
    immagine: 'https://picsum.photos/seed/nuxt1/800/600',
    testoPulsante: 'Scopri di più',
    linkPulsante: '/about',
  },
  {
    id: 2,
    titolo: 'Seconda Sezione: Design & Performance',
    descrizione: 'Questo è il secondo blocco con inversione automatica.',
    immagine: 'https://picsum.photos/seed/nuxt2/800/600',
    testoPulsante: 'I nostri servizi',
    linkPulsante: '/services',
  },
  {
    id: 3,
    titolo: 'Terza Sezione: Soluzioni su Misura',
    descrizione: 'Progettiamo soluzioni personalizzate pensate per rispondere alle esigenze specifiche di ogni cliente.',
    immagine: 'https://picsum.photos/seed/nuxt3/800/600',
    testoPulsante: 'Scopri le soluzioni',
    linkPulsante: '/solutions',
  },
  {
    id: 4,
    titolo: 'Quarta Sezione: Contattaci',
    descrizione: 'Hai un progetto in mente? Raccontaci la tua idea e troviamo insieme la soluzione più adatta.',
    immagine: 'https://picsum.photos/seed/nuxt4/800/600',
    testoPulsante: 'Contattaci',
    linkPulsante: '/contact',
  },
]

</script>
