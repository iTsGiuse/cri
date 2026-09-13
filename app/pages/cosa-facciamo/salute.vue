<template>
  <div>
    <Hero />
    <LazySezioniAlternate hydrate-on-visible :sections="sections" />
  </div>
</template>

<script setup lang="ts">
import type { AlternatingSection } from '~/components/SezioniAlternate.vue'

useSeoPagina()

const sections: AlternatingSection[] = [
  {
    id: 1,
    title: 'Promuovere la Salute nella Comunità',
    description:
      'L\'Area Salute raccoglie tutte le attività con cui il Comitato di Rubiera promuove il benessere delle persone: educazione sanitaria, prevenzione, diffusione delle manovre salvavita e vicinanza a chi vive una condizione di fragilità. Il nostro obiettivo è che ogni cittadino sappia riconoscere un\'emergenza e sappia come comportarsi.',
    imageUrl: 'https://picsum.photos/seed/cri-area-salute/800/600',
  },
  {
    id: 2,
    title: 'Diffondere la Cultura del Primo Soccorso',
    description:
      'Una comunità preparata salva vite. Portiamo le manovre salvavita e le nozioni di primo soccorso nelle scuole, nelle piazze e nei luoghi di aggregazione, perché il primo soccorritore è quasi sempre una persona comune che si trova sul posto prima dei mezzi di soccorso.',
    imageUrl: 'https://picsum.photos/seed/cri-cultura-soccorso/800/600',
    cta: {
      label: 'Iscriviti a un corso per la popolazione',
      url: '/servizi/corsi-popolazione',
    },
  },
  {
    id: 3,
    title: 'Prevenzione e Stili di Vita Sani',
    description:
      'Organizziamo giornate di prevenzione aperte alla cittadinanza con controlli gratuiti della pressione arteriosa e momenti informativi sui corretti stili di vita. Informare e intercettare precocemente i fattori di rischio è uno degli strumenti più efficaci per contrastare le malattie croniche.',
    imageUrl: 'https://picsum.photos/seed/cri-prevenzione/800/600',
    cta: {
      label: 'Scopri i prossimi eventi di prevenzione',
      url: '/eventi',
    },
  },
  {
    id: 4,
    title: 'Educazione alla Salute per Ogni Età',
    description:
      'Dai laboratori per i più piccoli agli incontri dedicati ai genitori sulle manovre di disostruzione pediatrica, fino alle iniziative pensate per le persone anziane. Adattiamo linguaggio e contenuti a ogni fascia d\'età, perché l\'informazione sanitaria sia davvero comprensibile e utilizzabile.',
    imageUrl: 'https://picsum.photos/seed/cri-educazione-salute/800/600',
  },
  {
    id: 5,
    title: 'Salute e Fragilità: un Approccio Integrato',
    description:
      'La salute non è solo assenza di malattia. Lavoriamo in stretto raccordo con l\'Area Sociale del Comitato perché isolamento, povertà e difficoltà di accesso alle cure incidono direttamente sulle condizioni di salute delle persone più fragili del territorio.',
    imageUrl: 'https://picsum.photos/seed/cri-salute-fragilita/800/600',
    cta: {
      label: 'Scopri l\'area Sociale e Inclusione',
      url: '/cosa-facciamo/sociale',
    },
  },
  {
    id: 6,
    title: 'I Servizi Sanitari del Comitato',
    description:
      'Le attività di promozione della salute si affiancano ai servizi operativi che il Comitato garantisce ogni giorno: il soccorso in emergenza in convenzione con il 118, i trasporti sanitari programmati e l\'assistenza sanitaria alle manifestazioni pubbliche.',
    imageUrl: 'https://picsum.photos/seed/cri-servizi-sanitari/800/600',
    cta: {
      label: 'Consulta tutti i servizi sanitari',
      url: '/servizi/emergenza-118',
    },
  },
  {
    id: 7,
    title: 'Diventa Volontario nell\'Area Salute',
    description:
      'Le attività dell\'Area Salute sono possibili grazie ai volontari che dedicano tempo alla formazione della popolazione, alle giornate di prevenzione e ai servizi sanitari. Non servono competenze mediche pregresse: la formazione è interna e gratuita.',
    imageUrl: 'https://picsum.photos/seed/cri-volontari-salute/800/600',
    cta: {
      label: 'Scopri come diventare volontario',
      url: '/volontariato/diventa-volontario',
    },
  },
]
</script>
