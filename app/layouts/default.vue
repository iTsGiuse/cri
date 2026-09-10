<template>
  <div>
    <TopBar :messaggio="datiMessaggio" />

    <Header :header="datiHeader" />

    <Breadcrumbs v-if="route.path !== '/'" />

    <main>
      <slot />
    </main>

    <LazyCta :cta="datiCta" />

    <LazyFooter :footer="datiFooter" />
  </div>
</template>

<script setup lang="ts">

const route = useRoute()

const datiMessaggio = {
  testo: '⚠️ Avviso: domenica il servizio sarà temporaneamente sospeso. ⚠️',
};

const datiHeader = {
  marchio: {
    immagine: '/images/logo.jpg',
    alt: 'Croce Rossa Italiana - Comitato di Rubiera',
  },

  collegamenti: [
    {
      etichetta: 'Chi siamo',
      figli: [
        {
          etichetta: 'Il Comitato',
          url: '/chi-siamo/il-comitato',
          icona: 'bi bi-building-fill',
        },
        {
          etichetta: 'La nostra storia',
          url: '/chi-siamo/storia',
          icona: 'bi bi-clock-history',
        },
        {
          etichetta: 'Organizzazione e governance',
          url: '/chi-siamo/organizzazione',
          icona: 'bi bi-diagram-3-fill',
        },
        {
          etichetta: 'Principi e valori',
          url: '/chi-siamo/principi-e-valori',
          icona: 'bi bi-heart-fill',
        },
        {
          etichetta: 'Trasparenza e documenti',
          url: '/chi-siamo/trasparenza',
          icona: 'bi bi-file-earmark-text-fill',
        },
        {
          etichetta: 'Dove siamo',
          url: '/chi-siamo/dove-siamo',
          icona: 'bi bi-geo-alt-fill',
        },
      ],
    },

    {
      etichetta: 'Cosa facciamo',
      figli: [
        {
          etichetta: 'Emergenza e soccorso',
          url: '/cosa-facciamo/emergenza-e-soccorso',
          icona: 'bi bi-exclamation-triangle-fill',
        },
        {
          etichetta: 'Trasporto sanitario',
          url: '/cosa-facciamo/trasporto-sanitario',
          icona: 'bi bi-truck-front-fill',
        },
        {
          etichetta: 'Assistenza sociale',
          url: '/cosa-facciamo/assistenza-sociale',
          icona: 'bi bi-heart-pulse-fill',
        },
        {
          etichetta: 'Inclusione e supporto alle persone',
          url: '/cosa-facciamo/inclusione-e-supporto',
          icona: 'bi bi-people-fill',
        },
        {
          etichetta: 'Giovani',
          url: '/cosa-facciamo/giovani',
          icona: 'bi bi-person-hearts',
        },
        {
          etichetta: 'Educazione e prevenzione',
          url: '/cosa-facciamo/educazione-e-prevenzione',
          icona: 'bi bi-mortarboard-fill',
        },
        {
          etichetta: 'Emergenze e protezione civile',
          url: '/cosa-facciamo/protezione-civile',
          icona: 'bi bi-shield-fill-check',
        },
        {
          etichetta: 'Attività per la comunità',
          url: '/cosa-facciamo/attivita-per-la-comunita',
          icona: 'bi bi-house-heart-fill',
        },
      ],
    },

    {
      etichetta: 'Servizi',
      figli: [
        {
          etichetta: 'Richiedi un trasporto',
          url: '/servizi/richiedi-trasporto',
          icona: 'bi bi-truck',
        },
        {
          etichetta: 'Corsi',
          url: '/servizi/corsi',
          icona: 'bi bi-mortarboard-fill',
        },
        {
          etichetta: 'Servizi sanitari',
          url: '/servizi/servizi-sanitari',
          icona: 'bi bi-hospital-fill',
        },
        {
          etichetta: 'Assistenza',
          url: '/servizi/assistenza',
          icona: 'bi bi-heart-pulse-fill',
        },
        {
          etichetta: 'Prenotazioni e informazioni',
          url: '/servizi/prenotazioni-e-informazioni',
          icona: 'bi bi-calendar-check-fill',
        },
        {
          etichetta: 'FAQ',
          url: '/servizi/faq',
          icona: 'bi bi-question-circle-fill',
        },
      ],
    },

    {
      etichetta: 'Volontariato',
      figli: [
        {
          etichetta: 'Diventa volontario',
          url: '/volontariato/diventa-volontario',
          icona: 'bi bi-person-plus-fill',
        },
        {
          etichetta: 'Come funziona',
          url: '/volontariato/come-funziona',
          icona: 'bi bi-info-circle-fill',
        },
        {
          etichetta: 'Percorso formativo',
          url: '/volontariato/percorso-formativo',
          icona: 'bi bi-mortarboard-fill',
        },
        {
          etichetta: 'Attività e gruppi',
          url: '/volontariato/attivita-e-gruppi',
          icona: 'bi bi-people-fill',
        },
        {
          etichetta: 'Diventa socio',
          url: '/volontariato/diventa-socio',
          icona: 'bi bi-person-vcard-fill',
        },
        {
          etichetta: 'FAQ volontari',
          url: '/volontariato/faq',
          icona: 'bi bi-question-circle-fill',
        },
      ],
    },

    {
      etichetta: 'News & Eventi',
      figli: [
        {
          etichetta: 'Notizie',
          url: '/notizie',
          icona: 'bi bi-newspaper',
        },
        {
          etichetta: 'Eventi',
          url: '/eventi',
          icona: 'bi bi-calendar-event-fill',
        },
        {
          etichetta: 'Campagne',
          url: '/campagne',
          icona: 'bi bi-megaphone-fill',
        },
        {
          etichetta: 'Comunicati',
          url: '/comunicati',
          icona: 'bi bi-megaphone',
        },
      ],
    },

    {
      etichetta: 'Contatti',
      figli: [
        {
          etichetta: 'Contatti',
          url: '/contatti',
          icona: 'bi bi-envelope-fill',
        },
        {
          etichetta: 'Sede',
          url: '/contatti/sede',
          icona: 'bi bi-building-fill',
        },
        {
          etichetta: 'Orari',
          url: '/contatti/orari',
          icona: 'bi bi-clock-fill',
        },
        {
          etichetta: 'Come raggiungerci',
          url: '/contatti/come-raggiungerci',
          icona: 'bi bi-signpost-2-fill',
        },
        {
          etichetta: 'Numeri utili',
          url: '/contatti/numeri-utili',
          icona: 'bi bi-telephone-fill',
        },
        {
          etichetta: 'Social',
          url: '/contatti/social',
          icona: 'bi bi-share-fill',
        },
      ],
    },
  ],

  azione: {
    etichetta: 'Dona',
    url: '/dona',
    icona: 'bi bi-heart-fill',
  },
};

const datiCta = {
  titolo: 'Dona il tuo 5×1000',
  sottotitolo: 'Sostieni la Croce Rossa di Rubiera',
  testo:
    'Con il tuo 5×1000 puoi contribuire concretamente alle attività e ai progetti della Croce Rossa di Rubiera.',
  pulsante: 'Scopri come donare',
  link: '/5x1000',
  immagine: 'https://picsum.photos/id/1018/1920/800',
  altImmagine: 'Dona il 5×1000 alla Croce Rossa di Rubiera',
};

const datiFooter = {
  marchio: {
    url: '/',
    immagine: '/images/logo.jpg',
    alt: 'Croce Rossa Italiana - Comitato di Rubiera',
    etichettaAria:
      'Vai alla home - Croce Rossa Italiana - Comitato di Rubiera',
    larghezza: 180,
    altezza: 72,
    descrizione:
      'Croce Rossa Italiana - Comitato di Rubiera. Al servizio delle persone e della comunità, ogni giorno, attraverso assistenza, soccorso, inclusione, prevenzione e volontariato.',
  },

  social: [
    {
      etichetta: 'Facebook',
      url: '#',
      icona: 'bi bi-facebook',
    },
    {
      etichetta: 'Instagram',
      url: '#',
      icona: 'bi bi-instagram',
    },
    {
      etichetta: 'YouTube',
      url: '#',
      icona: 'bi bi-youtube',
    },
  ],

  colonne: [
    {
      titolo: 'Chi siamo',
      collegamenti: [
        {
          etichetta: 'Il Comitato',
          url: '/chi-siamo/il-comitato',
        },
        {
          etichetta: 'La nostra storia',
          url: '/chi-siamo/storia',
        },
        {
          etichetta: 'Organizzazione e governance',
          url: '/chi-siamo/organizzazione',
        },
        {
          etichetta: 'Principi e valori',
          url: '/chi-siamo/principi-e-valori',
        },
        {
          etichetta: 'Trasparenza e documenti',
          url: '/chi-siamo/trasparenza',
        },
        {
          etichetta: 'Dove siamo',
          url: '/chi-siamo/dove-siamo',
        },
      ],
    },

    {
      titolo: 'Hai bisogno di aiuto?',
      collegamenti: [
        {
          etichetta: 'Richiedi un trasporto',
          url: '/servizi/richiedi-trasporto',
        },
        {
          etichetta: 'Servizi sanitari',
          url: '/servizi/servizi-sanitari',
        },
        {
          etichetta: 'Assistenza',
          url: '/servizi/assistenza',
        },
        {
          etichetta: 'Prenotazioni e informazioni',
          url: '/servizi/prenotazioni-e-informazioni',
        },
        {
          etichetta: 'FAQ',
          url: '/servizi/faq',
        },
        {
          etichetta: 'Numeri utili',
          url: '/contatti/numeri-utili',
        },
      ],
    },

    {
      titolo: 'Partecipa',
      collegamenti: [
        {
          etichetta: 'Diventa volontario',
          url: '/volontariato/diventa-volontario',
        },
        {
          etichetta: 'Come funziona',
          url: '/volontariato/come-funziona',
        },
        {
          etichetta: 'Percorso formativo',
          url: '/volontariato/percorso-formativo',
        },
        {
          etichetta: 'Attività e gruppi',
          url: '/volontariato/attivita-e-gruppi',
        },
        {
          etichetta: 'Diventa socio',
          url: '/volontariato/diventa-socio',
        },
        {
          etichetta: 'Eventi',
          url: '/eventi',
        },
      ],
    },

    {
      titolo: 'Informazioni',
      collegamenti: [
        {
          etichetta: 'Notizie',
          url: '/notizie',
        },
        {
          etichetta: 'Campagne',
          url: '/campagne',
        },
        {
          etichetta: 'Comunicati',
          url: '/comunicati',
        },
        {
          etichetta: 'Trasparenza',
          url: '/chi-siamo/trasparenza',
        },
        {
          etichetta: 'Dove siamo',
          url: '/chi-siamo/dove-siamo',
        },
        {
          etichetta: 'Contatti',
          url: '/contatti',
        },
      ],
    },
  ],

  contatti: {
    titolo: 'Contatti',

    indirizzo: {
      etichetta: 'Rubiera (RE), Emilia-Romagna, Italia',
      url:
        'https://www.google.com/maps/search/?api=1&query=Croce+Rossa+Italiana+Comitato+di+Rubiera',
      icona: 'bi bi-geo-alt-fill',
    },

    telefono: {
      etichetta: '+39 000 000 0000',
      valore: '+390000000000',
      icona: 'bi bi-telephone-fill',
    },

    email: {
      etichetta: 'info@example.it',
      valore: 'info@example.it',
      icona: 'bi bi-envelope-fill',
    },
  },

  chiamataAzione: {
    titolo: 'Fai la differenza.',
    descrizione:
      'Sostieni la Croce Rossa Italiana o diventa volontario: il tuo contributo può fare la differenza nella comunità.',
    etichetta: 'Dona',
    url: '/dona',
    icona: 'bi bi-heart-fill',
  },

  collegamentiLegali: [
    {
      etichetta: 'Privacy Policy',
      url: '/privacy',
    },
    {
      etichetta: 'Cookie Policy',
      url: '/cookie-policy',
    },
    {
      etichetta: 'Accessibilità',
      url: '/accessibilita',
    },
    {
      etichetta: 'Note legali',
      url: '/note-legali',
    },
    {
      etichetta: 'Trasparenza',
      url: '/chi-siamo/trasparenza',
    },
  ],

  copyright:
    'Croce Rossa Italiana - Comitato di Rubiera. Tutti i diritti riservati.',
};
</script>
