<template>
  <Carosello :slides="carouselSlides" />
  <LazySponsor hydrate-on-visible :sponsor="sponsorData" />
  <LazySezioniAlternate hydrate-on-visible :sections="sections" />
</template>

<script setup lang="ts">
import type { AlternatingSection } from '~/components/SezioniAlternate.vue'
import type { SponsorSectionData } from '~/components/Sponsor.vue'

const carouselSlides = getFeaturedCarouselSlides();

const sponsorData: SponsorSectionData = {
  eyebrow: 'Insieme per la comunità',
  title: 'I nostri sostenitori e partner',
  description:
    'Grazie alle aziende e alle realtà del territorio che scelgono di sostenere la Croce Rossa Italiana – Comitato di Rubiera.',
  speed: 25,

  items: [
    {
      id: 1,
      name: 'Azienda Alfa',
      imageUrl: 'https://picsum.photos/id/1/400/200',
      imageAlt: 'Logo Azienda Alfa',
      url: 'https://example.com',
      category: 'Industria',
      location: 'Rubiera',
    },
    {
      id: 2,
      name: 'Azienda Beta',
      imageUrl: 'https://picsum.photos/id/20/400/200',
      imageAlt: 'Logo Azienda Beta',
      url: 'https://example.com',
      category: 'Commercio',
      location: 'Rubiera',
    },
    {
      id: 3,
      name: 'Azienda Gamma',
      imageUrl: 'https://picsum.photos/id/30/400/200',
      imageAlt: 'Logo Azienda Gamma',
      url: 'https://example.com',
      category: 'Servizi',
      location: 'Reggio Emilia',
    },
    {
      id: 4,
      name: 'Azienda Delta',
      imageUrl: 'https://picsum.photos/id/40/400/200',
      imageAlt: 'Logo Azienda Delta',
      url: 'https://example.com',
      category: 'Edilizia',
      location: 'Scandiano',
    },
    {
      id: 5,
      name: 'Azienda Epsilon',
      imageUrl: 'https://picsum.photos/id/50/400/200',
      imageAlt: 'Logo Azienda Epsilon',
      url: 'https://example.com',
      category: 'Alimentare',
      location: 'Modena',
    },
    {
      id: 6,
      name: 'Azienda Zeta',
      imageUrl: 'https://picsum.photos/id/60/400/200',
      imageAlt: 'Logo Azienda Zeta',
      url: 'https://example.com',
      category: 'Trasporti',
      location: 'Rubiera',
    },
    {
      id: 7,
      name: 'Azienda Eta',
      imageUrl: 'https://picsum.photos/id/70/400/200',
      imageAlt: 'Logo Azienda Eta',
      url: 'https://example.com',
      category: 'Tecnologia',
      location: 'Reggio Emilia',
    },
    {
      id: 8,
      name: 'Azienda Theta',
      imageUrl: 'https://picsum.photos/id/80/400/200',
      imageAlt: 'Logo Azienda Theta',
      url: 'https://example.com',
      category: 'Consulenza',
      location: 'Correggio',
    },
    {
      id: 9,
      name: 'Azienda Iota',
      imageUrl: 'https://picsum.photos/id/90/400/200',
      imageAlt: 'Logo Azienda Iota',
      url: 'https://example.com',
      category: 'Artigianato',
      location: 'Rubiera',
    },
    {
      id: 10,
      name: 'Azienda Kappa',
      imageUrl: 'https://picsum.photos/id/100/400/200',
      imageAlt: 'Logo Azienda Kappa',
      url: 'https://example.com',
      category: 'Logistica',
      location: 'Campogalliano',
    },
    {
      id: 11,
      name: 'Azienda Lambda',
      imageUrl: 'https://picsum.photos/id/110/400/200',
      imageAlt: 'Logo Azienda Lambda',
      url: 'https://example.com',
      category: 'Servizi alla persona',
      location: 'Reggio Emilia',
    },
    {
      id: 12,
      name: 'Azienda Mu',
      imageUrl: 'https://picsum.photos/id/120/400/200',
      imageAlt: 'Logo Azienda Mu',
      url: 'https://example.com',
      category: 'Commercio',
      location: 'Sassuolo',
    },
  ],

  cta: {
    title: 'Vuoi sostenere la Croce Rossa di Rubiera?',
    description:
      'Il tuo sostegno ci aiuta a essere ogni giorno al fianco delle persone e della comunità.',
    label: 'Sostienici',
    url: '/sostienici',
  },
};

const sections: AlternatingSection[] = [
  {
    id: 1,
    title: 'Diventa Volontario: Fai la Differenza',
    description: 'Il cuore pulsante della Croce Rossa di Rubiera sono i nostri volontari. Unisciti alla nostra grande famiglia: che tu voglia dedicarti al soccorso, al sociale, ai giovani o alla protezione civile, c\'è un posto anche per te. Partecipa al prossimo corso di accesso.',
    imageUrl: 'https://picsum.photos/seed/cri-volontariato-principale/800/600',
    cta: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario' },
  },
  {
    id: 2,
    title: 'Emergenza e Soccorso 118',
    description: 'Siamo operativi 24 ore su 24, 365 giorni all\'anno per garantire interventi tempestivi di soccorso sanitario in convenzione con il sistema 118 / 112, impiegando ambulanze all\'avanguardia e personale altamente formato.',
    imageUrl: 'https://picsum.photos/seed/cri-soccorso-118/800/600',
    cta: { label: 'Scopri i nostri servizi', url: '/servizi/emergenza-118' },
  },
  {
    id: 3,
    title: 'Corsi di Primo Soccorso e BLSD',
    description: 'La prevenzione e la conoscenza salvano la vita. Organizziamo corsi di primo soccorso, manovre di rianimazione cardiopolmonare con defibrillatore (BLSD) e incontri formativi aperti a tutta la cittadinanza e alle aziende.',
    imageUrl: 'https://picsum.photos/seed/cri-formazione/800/600',
    cta: { label: 'Scopri i corsi', url: '/servizi/corsi-popolazione' },
  },
  {
    id: 4,
    title: 'Supporto Sociale e Assistenza alla Comunità',
    description: 'Siamo vicini alle persone più vulnerabili di Rubiera attraverso la distribuzione di beni alimentari, servizi di prossimità, supporto agli anziani e iniziative concrete per contrastare le nuove povertà e l\'isolamento.',
    imageUrl: 'https://picsum.photos/seed/cri-sociale/800/600',
    cta: { label: 'Area Sociale', url: '/cosa-facciamo/sociale' },
  },
  {
    id: 5,
    title: 'Protezione Civile e Gestione Emergenze',
    description: 'Interveniamo tempestivamente in caso di calamità naturali, alluvioni o emergenze territoriali e nazionali. Le nostre squadre specializzate gestiscono la logistica, i campi di accoglienza e il monitoraggio del territorio.',
    imageUrl: 'https://picsum.photos/seed/cri-protezione-civile/800/600',
    cta: { label: 'Protezione Civile', url: '/cosa-facciamo/protezione-civile' },
  },
  {
    id: 6,
    title: 'Trasporti Sanitari e Assistenza Eventi',
    description: 'Garantiamo trasferimenti protetti, dimissioni ospedaliere, visite e terapie, oltre a fornire copertura sanitaria qualificata e presidi di primo soccorso in occasione di manifestazioni sportive, culturali e pubbliche.',
    imageUrl: 'https://picsum.photos/seed/cri-trasporti/800/600',
    cta: { label: 'Richiedi un trasporto', url: '/servizi/richiedi-trasporto' },
  },
]

</script>
