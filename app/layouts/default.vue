<template>
  <div>
    <TopBar :messaggio="datiMessaggio" />

    <Header :header="datiHeader" />

    <Breadcrumbs v-if="route.path !== '/'" />

    <main>
      <slot />
    </main>

    <LazyDivisore v-if="!['/dona', '/chi-siamo/trasparenza', '/chi-siamo/storia'].includes(route.path)" />
    <LazyCta :cta="datiCta" v-if="!['/dona', '/chi-siamo/trasparenza', '/chi-siamo/storia'].includes(route.path)" />

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
          etichetta: 'Sede e contatti',
          url: '/chi-siamo/sede-e-contatti',
          icona: 'bi bi-geo-alt-fill',
        },
      ],
    },

    {
      etichetta: 'Cosa facciamo',
      figli: [
        {
          etichetta: 'Salute e Prevenzione',
          url: '/cosa-facciamo/salute',
          icona: 'bi bi-heart-pulse-fill',
        },
        {
          etichetta: 'Sociale e Inclusione',
          url: '/cosa-facciamo/sociale',
          icona: 'bi bi-people-fill',
        },
        {
          etichetta: 'Emergenza e Protezione Civile',
          url: '/cosa-facciamo/protezione-civile',
          icona: 'bi bi-shield-fill-check',
        },
        {
          etichetta: 'Principi e Diritto Umanitario',
          url: '/cosa-facciamo/diritto-umanitario',
          icona: 'bi bi-book-fill',
        },
        {
          etichetta: 'Giovani',
          url: '/cosa-facciamo/giovani',
          icona: 'bi bi-person-hearts',
        },
        {
          etichetta: 'Sviluppo e Comunicazione',
          url: '/cosa-facciamo/sviluppo',
          icona: 'bi bi-graph-up-arrow',
        },
      ],
    },

    {
      etichetta: 'Servizi',
      figli: [
        {
          etichetta: 'Emergenza e Soccorso 118 / 112',
          url: '/servizi/emergenza-118',
          icona: 'bi bi-exclamation-triangle-fill',
        },
        {
          etichetta: 'Richiedi un trasporto sanitario',
          url: '/servizi/richiedi-trasporto',
          icona: 'bi bi-truck-front-fill',
        },
        {
          etichetta: 'Assistenza sanitaria a manifestazioni',
          url: '/servizi/assistenza-eventi',
          icona: 'bi bi-hospital-fill',
        },
        {
          etichetta: 'Corsi per la popolazione',
          url: '/servizi/corsi-popolazione',
          icona: 'bi bi-mortarboard-fill',
        },
        {
          etichetta: 'Corsi aziendali (D.Lgs 81/08)',
          url: '/servizi/corsi-aziende',
          icona: 'bi bi-briefcase-fill',
        },
        {
          etichetta: 'Supporto sociale e assistenza',
          url: '/servizi/supporto-sociale',
          icona: 'bi bi-house-heart-fill',
        },
        {
          etichetta: 'Prenotazioni e informazioni',
          url: '/servizi/prenotazioni-e-informazioni',
          icona: 'bi bi-calendar-check-fill',
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
          etichetta: 'Come funziona il corso di accesso',
          url: '/volontariato/corso-di-accesso',
          icona: 'bi bi-info-circle-fill',
        },
        {
          etichetta: 'Percorso formativo e qualifiche',
          url: '/volontariato/percorso-formativo',
          icona: 'bi bi-mortarboard-fill',
        },
        {
          etichetta: 'Attività e gruppi di lavoro',
          url: '/volontariato/attivita-e-gruppi',
          icona: 'bi bi-people-fill',
        },
      ],
    },

    {
      etichetta: 'News & Eventi',
      figli: [
        {
          etichetta: 'Notizie',
          url: '/news/notizie',
          icona: 'bi bi-newspaper',
        },
        {
          etichetta: 'Eventi',
          url: '/news/eventi',
          icona: 'bi bi-calendar-event-fill',
        },
        {
          etichetta: 'Campagne di sensibilizzazione',
          url: '/news/campagne',
          icona: 'bi bi-megaphone-fill',
        },
      ],
    },

    {
      etichetta: 'FAQ',
      figli: [
        {
          etichetta: 'Trasporti e Servizi Sanitari',
          url: '/faq/servizi-e-trasporti',
          icona: 'bi bi-truck-front-fill',
        },
        {
          etichetta: 'Corsi di Formazione',
          url: '/faq/corsi-formazione',
          icona: 'bi bi-mortarboard-fill',
        },
        {
          etichetta: 'Diventare Volontario',
          url: '/faq/volontariato',
          icona: 'bi bi-person-heart',
        },
        {
          etichetta: 'Donazioni e 5x1000',
          url: '/faq/donazioni',
          icona: 'bi bi-piggy-bank-fill',
        },
      ],
    },
  ],

  azione: {
    etichetta: 'Dona ora',
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
  link: '/dona',
  immagine: 'https://picsum.photos/id/1018/1920/800',
  altImmagine: 'Dona il 5×1000 alla Croce Rossa di Rubiera',
};

const datiFooter = {
  marchio: {
    url: '/',
    immagine: '/images/logo.jpg',
    alt: 'Croce Rossa Italiana - Comitato Locale',
    etichettaAria: 'Vai alla home - Croce Rossa Italiana',
    larghezza: 180,
    altezza: 72,
    descrizione:
      'Croce Rossa Italiana - Comitato di Rubiera. Al servizio della comunità ogni giorno attraverso soccorso, assistenza sociale e volontariato.',
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
      titolo: 'Servizi',
      collegamenti: [
        {
          etichetta: 'Emergenza 118 / 112',
          url: '/servizi/emergenza-118',
        },
        {
          etichetta: 'Richiedi un trasporto',
          url: '/servizi/richiedi-trasporto',
        },
        {
          etichetta: 'Assistenza manifestazioni',
          url: '/servizi/assistenza-eventi',
        },
        {
          etichetta: 'Corsi alla popolazione e aziende',
          url: '/servizi/corsi-popolazione',
        },
        {
          etichetta: 'Supporto sociale',
          url: '/servizi/supporto-sociale',
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
          etichetta: 'Corso di accesso e formazione',
          url: '/volontariato/corso-di-accesso',
        },
        {
          etichetta: 'Dona ora',
          url: '/dona',
        },
      ],
    },
  ],

  contatti: {
    titolo: 'Sede e Recapiti',

    indirizzo: {
      etichetta: 'Via E. Fermi, 1 - 42048 Rubiera (RE)',
      url:
        'https://www.google.com/maps/search/?api=1&query=Croce+Rossa+Italiana+Comitato+di+Rubiera',
      icona: 'bi bi-geo-alt-fill',
    },

    telefono: {
      etichetta: '+39 0522 628 888',
      valore: '+390522628888',
      icona: 'bi bi-telephone-fill',
    },

    email: {
      etichetta: 'rubiera@cri.it',
      valore: 'rubiera@cri.it',
      icona: 'bi bi-envelope-fill',
    },
  },

  chiamataAzione: {
    titolo: 'Fai la differenza.',
    descrizione:
      'Sostieni la Croce Rossa Italiana o diventa volontario: il tuo contributo può fare la differenza nella nostra comunità.',
    etichetta: 'Diventa volontario',
    url: '/volontariato/diventa-volontario',
    icona: 'bi bi-person-plus-fill',
  },

  collegamentiLegali: [
    {
      etichetta: 'Trasparenza e Documenti',
      url: '/chi-siamo/trasparenza',
    },
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
  ],

  fiscali:
    'C.F. e P.IVA 00000000000 | Codice SDI: 000000',
};
</script>
