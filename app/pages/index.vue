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
    titolo: 'Diventa Volontario: Fai la Differenza',
    descrizione: 'Il cuore pulsante della Croce Rossa di Rubiera sono i nostri volontari. Unisciti alla nostra grande famiglia: che tu voglia dedicarti al soccorso, al sociale, ai giovani o alla protezione civile, c\'è un posto anche per te. Partecipa al prossimo corso di accesso.',
    immagine: 'https://picsum.photos/seed/cri-volontariato-principale/800/600',
    testoPulsante: 'Diventa Volontario',
    linkPulsante: '/volontariato/diventa-volontario',
  },
  {
    id: 2,
    titolo: 'Emergenza e Soccorso 118',
    descrizione: 'Siamo operativi 24 ore su 24, 365 giorni all\'anno per garantire interventi tempestivi di soccorso sanitario in convenzione con il sistema 118 / 112, impiegando ambulanze all\'avanguardia e personale altamente formato.',
    immagine: 'https://picsum.photos/seed/cri-soccorso-118/800/600',
    testoPulsante: 'Scopri i nostri servizi',
    linkPulsante: '/servizi/emergenza-118',
  },
  {
    id: 3,
    titolo: 'Corsi di Primo Soccorso e BLSD',
    descrizione: 'La prevenzione e la conoscenza salvano la vita. Organizziamo corsi di primo soccorso, manovre di rianimazione cardiopolmonare con defibrillatore (BLSD) e incontri formativi aperti a tutta la cittadinanza e alle aziende.',
    immagine: 'https://picsum.photos/seed/cri-formazione/800/600',
    testoPulsante: 'Scopri i corsi',
    linkPulsante: '/servizi/corsi-popolazione',
  },
  {
    id: 4,
    titolo: 'Supporto Sociale e Assistenza alla Comunità',
    descrizione: 'Siamo vicini alle persone più vulnerabili di Rubiera attraverso la distribuzione di beni alimentari, servizi di prossimità, supporto agli anziani e iniziative concrete per contrastare le nuove povertà e l\'isolamento.',
    immagine: 'https://picsum.photos/seed/cri-sociale/800/600',
    testoPulsante: 'Area Sociale',
    linkPulsante: '/cosa-facciamo/sociale',
  },
  {
    id: 5,
    titolo: 'Protezione Civile e Gestione Emergenze',
    descrizione: 'Interveniamo tempestivamente in caso di calamità naturali, alluvioni o emergenze territoriali e nazionali. Le nostre squadre specializzate gestiscono la logistica, i campi di accoglienza e il monitoraggio del territorio.',
    immagine: 'https://picsum.photos/seed/cri-protezione-civile/800/600',
    testoPulsante: 'Protezione Civile',
    linkPulsante: '/cosa-facciamo/protezione-civile',
  },
  {
    id: 6,
    titolo: 'Trasporti Sanitari e Assistenza Eventi',
    descrizione: 'Garantiamo trasferimenti protetti, dimissioni ospedaliere, visite e terapie, oltre a fornire copertura sanitaria qualificata e presidi di primo soccorso in occasione di manifestazioni sportive, culturali e pubbliche.',
    immagine: 'https://picsum.photos/seed/cri-trasporti/800/600',
    testoPulsante: 'Richiedi un trasporto',
    linkPulsante: '/servizi/richiedi-trasporto',
  },
]

</script>
