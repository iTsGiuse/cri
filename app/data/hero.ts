import type { CtaLink } from '~/types'

export interface HeroContent {
  badge?: string
  badgeIcon?: string
  title: string
  description: string
  imageUrl: string
  imageAlt?: string
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
}

export const heroContentByPath: Record<string, HeroContent> = {
  '/': {
    badge: 'Emergenza & Soccorso 24/7',
    badgeIcon: 'i-bi:heart-pulse-fill',
    title: 'Al servizio della comunità, ogni giorno.',
    description:
      'La Croce Rossa Italiana - Comitato di Rubiera è al tuo fianco con servizi di trasporto sanitario, assistenza sociale e interventi di emergenza.',
    imageUrl: 'https://picsum.photos/id/1025/1200/800',
    imageAlt: 'Volontari Croce Rossa Rubiera',
    primaryCta: {
      label: 'Diventa Volontario',
      url: '/volontariato/diventa-volontario',
      icon: 'i-bi:person-plus-fill',
    },
    secondaryCta: {
      label: 'Richiedi un trasporto',
      url: '/servizi/richiedi-trasporto',
      icon: 'i-bi:truck-front-fill',
    },
  },

  '/chi-siamo/comitato-e-contatti': {
    badge: 'Chi Siamo',
    badgeIcon: 'i-bi:building-fill',
    title: 'Comitato e Contatti',
    description:
      'Chi siamo, dove trovarci e come contattarci: la sede, i recapiti e i riferimenti del Comitato di Rubiera.',
    imageUrl: 'https://picsum.photos/id/1018/1200/800',
    imageAlt: 'Sede Croce Rossa Rubiera',
    primaryCta: {
      label: 'I Nostri Principi',
      url: '/chi-siamo/principi-e-valori',
      icon: 'i-bi:heart-fill',
    },
    secondaryCta: {
      label: 'Organizzazione',
      url: '/chi-siamo/organizzazione',
      icon: 'i-bi:diagram-3-fill',
    },
  },

  '/chi-siamo/storia': {
    badge: 'Le Nostre Radici',
    badgeIcon: 'i-bi:clock-history',
    title: 'La Nostra Storia',
    description:
      'Un viaggio nel tempo attraverso i momenti salienti, le sfide e i traguardi che hanno segnato la nascita e la crescita del nostro Comitato.',
    imageUrl: 'https://picsum.photos/id/1059/1200/800',
    imageAlt: 'Foto storica della Croce Rossa',
    primaryCta: {
      label: 'Scopri il Comitato',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:building-fill',
    },
  },

  '/chi-siamo/organizzazione': {
    badge: 'Trasparenza & Struttura',
    badgeIcon: 'i-bi:diagram-3-fill',
    title: 'Organizzazione e Governance',
    description:
      'La struttura organizzativa, il Consiglio Direttivo e gli organi di gestione che guidano responsabilmente le attività del Comitato.',
    imageUrl: 'https://picsum.photos/id/1069/1200/800',
    imageAlt: 'Organizzazione e Governance',
    primaryCta: {
      label: 'Trasparenza e Atti',
      url: '/chi-siamo/trasparenza',
      icon: 'i-bi:file-earmark-text-fill',
    },
    secondaryCta: {
      label: 'Sede e Contatti',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:geo-alt-fill',
    },
  },

  '/chi-siamo/principi-e-valori': {
    badge: 'Movimento Internazionale',
    badgeIcon: 'i-bi:heart-fill',
    title: 'I 7 Principi Fondamentali',
    description:
      'Umanità, Imparzialità, Neutralità, Indipendenza, Volontariato, Unità ed Universalità: le linee guida di ogni nostra azione.',
    imageUrl: 'https://picsum.photos/id/1081/1200/800',
    imageAlt: 'I sette principi della Croce Rossa',
    primaryCta: {
      label: 'Diventa Volontario',
      url: '/volontariato/diventa-volontario',
      icon: 'i-bi:person-plus-fill',
    },
  },

  '/chi-siamo/trasparenza': {
    badge: 'Amministrazione Trasparente',
    badgeIcon: 'i-bi:file-earmark-text-fill',
    title: 'Trasparenza e Documenti',
    description:
      'Consulta i bilanci consuntivi, le rendicontazioni dei contributi pubblici, gli atti ufficiali e i regolamenti associativi del Comitato.',
    imageUrl: 'https://picsum.photos/id/1068/1200/800',
    imageAlt: 'Documenti e trasparenza',
    primaryCta: {
      label: 'Richiedi Info',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:envelope-fill',
    },
  },

  '/cosa-facciamo/salute': {
    badge: 'Area 1 - Salute',
    badgeIcon: 'i-bi:heart-pulse-fill',
    title: 'Salute e Prevenzione',
    description:
      'Promuoviamo la tutela della salute, la prevenzione e stili di vita sani attraverso iniziative sul territorio e formazione della popolazione.',
    imageUrl: 'https://picsum.photos/id/1020/1200/800',
    imageAlt: 'Attività di tutela della salute',
    primaryCta: {
      label: 'Corsi Popolazione',
      url: '/servizi/corsi-popolazione',
      icon: 'i-bi:mortarboard-fill',
    },
  },

  '/cosa-facciamo/sociale': {
    badge: 'Area 2 - Sociale',
    badgeIcon: 'i-bi:people-fill',
    title: 'Sociale e Inclusione',
    description:
      'Combattiamo la povertà, la solitudine e le fragilità sociali offrendo supporto concreto alle famiglie e alle persone vulnerabili.',
    imageUrl: 'https://picsum.photos/id/1005/1200/800',
    imageAlt: 'Assistenza e supporto sociale',
    primaryCta: {
      label: 'Supporto Sociale',
      url: '/servizi/supporto-sociale',
      icon: 'i-bi:house-heart-fill',
    },
  },

  '/cosa-facciamo/protezione-civile': {
    badge: 'Area 3 - Emergenze',
    badgeIcon: 'i-bi:shield-fill-check',
    title: 'Emergenza e Protezione Civile',
    description:
      'Prepariamo le comunità alle emergenze e garantiamo una risposta tempestiva e coordinata in caso di calamità naturali o crisi.',
    imageUrl: 'https://picsum.photos/id/1043/1200/800',
    imageAlt: 'Mezzi e squadra Protezione Civile',
    primaryCta: {
      label: 'Servizio 118',
      url: '/servizi/emergenza-118',
      icon: 'i-bi:exclamation-triangle-fill',
    },
  },

  '/cosa-facciamo/diritto-umanitario': {
    badge: 'Area 4 - Principi',
    badgeIcon: 'i-bi:book-fill',
    title: 'Principi e Diritto Umanitario',
    description:
      'Diffondiamo il Diritto Internazionale Umanitario, la cultura della pace, del rispetto e della non discriminazione.',
    imageUrl: 'https://picsum.photos/id/1024/1200/800',
    imageAlt: 'Diffusione Diritto Umanitario',
    primaryCta: {
      label: 'Scopri i Principi',
      url: '/chi-siamo/principi-e-valori',
      icon: 'i-bi:heart-fill',
    },
  },

  '/cosa-facciamo/giovani': {
    badge: 'Area 5 - Gioventù',
    badgeIcon: 'i-bi:person-hearts',
    title: 'Giovani e Futuro',
    description:
      'Promuoviamo lo sviluppo dei giovani e il loro coinvolgimento attivo come agenti di cambiamento positivo nella comunità.',
    imageUrl: 'https://picsum.photos/id/1012/1200/800',
    imageAlt: 'Gruppo Giovani Croce Rossa',
    primaryCta: {
      label: 'Unisciti ai Giovani',
      url: '/volontariato/diventa-volontario',
      icon: 'i-bi:person-plus-fill',
    },
  },

  '/cosa-facciamo/sviluppo': {
    badge: 'Area 6 - Sviluppo',
    badgeIcon: 'i-bi:graph-up-arrow',
    title: 'Sviluppo e Comunicazione',
    description:
      'Lavoriamo per rafforzare la trasparenza, l’efficienza organizzativa, la presenza sul territorio e la raccolta fondi.',
    imageUrl: 'https://picsum.photos/id/1074/1200/800',
    imageAlt: 'Sviluppo e Comunicazione',
    primaryCta: {
      label: 'Dona Ora',
      url: '/dona',
      icon: 'i-bi:heart-fill',
    },
  },

  '/servizi/emergenza-118': {
    badge: 'Soccorso Sanitario',
    badgeIcon: 'i-bi:exclamation-triangle-fill',
    title: 'Emergenza e Soccorso 118 / 112',
    description:
      'Operiamo H24 in convenzione con il sistema di emergenza-urgenza territoriale 118 per garantire interventi di primo soccorso tempestivi.',
    imageUrl: 'https://picsum.photos/id/1070/1200/800',
    imageAlt: 'Ambulanza in servizio di emergenza',
    primaryCta: {
      label: 'Iscriviti ai Corsi',
      url: '/servizi/corsi-popolazione',
      icon: 'i-bi:mortarboard-fill',
    },
    secondaryCta: {
      label: 'Richiedi Trasporto',
      url: '/servizi/richiedi-trasporto',
      icon: 'i-bi:truck-front-fill',
    },
  },

  '/servizi/richiedi-trasporto': {
    badge: 'Trasporto Intramurale & Privato',
    badgeIcon: 'i-bi:truck-front-fill',
    title: 'Richiedi un Trasporto Sanitario',
    description:
      'Organizziamo trasferimenti in ambulanza o con mezzi attrezzati con pedana per visite mediche, ricoveri, terapie ed esami.',
    imageUrl: 'https://picsum.photos/id/1071/1200/800',
    imageAlt: 'Mezzo attrezzato per trasporto sanitario',
    primaryCta: {
      label: 'Prenota o Richiedi Info',
      url: '/servizi/prenotazioni-e-informazioni',
      icon: 'i-bi:calendar-check-fill',
    },
    secondaryCta: {
      label: 'FAQ Trasporti',
      url: '/faq',
      icon: 'i-bi:question-circle-fill',
    },
  },

  '/servizi/assistenza-eventi': {
    badge: 'Grandi Eventi e Manifestazioni',
    badgeIcon: 'i-bi:hospital-fill',
    title: 'Assistenza Sanitaria Eventi',
    description:
      'Offriamo servizio di presidio sanitario e soccorso per eventi sportivi, concerti, fiere e manifestazioni pubbliche o private.',
    imageUrl: 'https://picsum.photos/id/1050/1200/800',
    imageAlt: 'Assistenza sanitaria a manifestazione',
    primaryCta: {
      label: 'Contatta gli Uffici',
      url: '/servizi/prenotazioni-e-informazioni',
      icon: 'i-bi:envelope-fill',
    },
  },

  '/servizi/corsi-popolazione': {
    badge: 'Formazione Cittadini',
    badgeIcon: 'i-bi:mortarboard-fill',
    title: 'Corsi per la Popolazione',
    description:
      'Impara le manovre salvavita, la disostruzione delle vie aeree pediatriche e l’uso del defibrillatore (DAE) con i nostri istruttori qualificati.',
    imageUrl: 'https://picsum.photos/id/1062/1200/800',
    imageAlt: 'Corso Primo Soccorso popolazione',
    primaryCta: {
      label: 'FAQ Corsi',
      url: '/faq',
      icon: 'i-bi:question-circle-fill',
    },
  },

  '/servizi/corsi-aziende': {
    badge: 'Sicurezza sul Lavoro',
    badgeIcon: 'i-bi:briefcase-fill',
    title: 'Corsi Aziendali (D.Lgs 81/08)',
    description:
      'Formazione professionale e aggiornamento in materia di primo soccorso aziendale per datori di lavoro e dipendenti (Gruppo A, B, C).',
    imageUrl: 'https://picsum.photos/id/1076/1200/800',
    imageAlt: 'Corso aziendale sicurezza',
    primaryCta: {
      label: 'Richiedi Preventivo',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:envelope-fill',
    },
  },

  '/servizi/supporto-sociale': {
    badge: 'Inclusione & Aiuto Concreto',
    badgeIcon: 'i-bi:house-heart-fill',
    title: 'Supporto Sociale e Assistenza',
    description:
      'Consegna farmaci e spesa a domicilio, distribuzione viveri e supporto morale alle persone anziane e con difficoltà motorie.',
    imageUrl: 'https://picsum.photos/id/1027/1200/800',
    imageAlt: 'Volontario in assistenza sociale',
    primaryCta: {
      label: 'Contatta il Centralino',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:telephone-fill',
    },
  },

  '/servizi/prenotazioni-e-informazioni': {
    badge: 'Ufficio Servizi',
    badgeIcon: 'i-bi:calendar-check-fill',
    title: 'Prenotazioni e Informazioni',
    description:
      'Modulo unico per prenotare un trasporto ordinario, richiedere un preventivo o ricevere informazioni sui nostri servizi territoriali.',
    imageUrl: 'https://picsum.photos/id/1015/1200/800',
    imageAlt: 'Modulo prenotazioni e info',
    primaryCta: {
      label: 'FAQ Servizi',
      url: '/faq',
      icon: 'i-bi:question-circle-fill',
    },
  },

  '/volontariato/diventa-volontario': {
    badge: 'Fai la Differenza',
    badgeIcon: 'i-bi:person-plus-fill',
    title: 'Diventa Volontario',
    description:
      'Metti il tuo tempo, le tue competenze e il tuo cuore al servizio degli altri. Diventa parte della più grande organizzazione umanitaria al mondo.',
    imageUrl: 'https://picsum.photos/id/1005/1200/800',
    imageAlt: 'Volontari sorridenti Croce Rossa',
    primaryCta: {
      label: 'Percorso formativo',
      url: '/volontariato/percorso-formativo',
      icon: 'i-bi:mortarboard-fill',
    },
    secondaryCta: {
      label: 'Contatta il Comitato',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:envelope-fill',
    },
  },

  '/volontariato/percorso-formativo': {
    badge: 'Crescita e Specializzazioni',
    badgeIcon: 'i-bi:mortarboard-fill',
    title: 'Percorso Formativo e Qualifiche',
    description:
      'Dal corso di accesso alle specializzazioni: soccorso in ambulanza, protezione civile, area sociale e diritto internazionale umanitario.',
    imageUrl: 'https://picsum.photos/id/1062/1200/800',
    imageAlt: 'Formazione dei volontari della Croce Rossa',
    primaryCta: {
      label: 'Diventa volontario',
      url: '/volontariato/diventa-volontario',
      icon: 'i-bi:person-plus-fill',
    },
    secondaryCta: {
      label: 'Domande frequenti',
      url: '/faq',
      icon: 'i-bi:question-circle-fill',
    },
  },

  '/news': {
    badge: 'Comunicazione & Aggiornamenti',
    badgeIcon: 'i-bi:newspaper',
    title: 'Notizie',
    description:
      'Rimani aggiornato sulle attività, le iniziative, i progetti e tutte le novità del Comitato di Rubiera.',
    imageUrl: 'https://picsum.photos/id/1058/1200/800',
    imageAlt: 'Notizie della Croce Rossa Italiana - Comitato di Rubiera',
    primaryCta: {
      label: 'Scopri gli Eventi',
      url: '/eventi',
      icon: 'i-bi:calendar-event-fill',
    },
    secondaryCta: {
      label: 'Campagne',
      url: '/campagne',
      icon: 'i-bi:megaphone-fill',
    },
  },

  '/eventi': {
    badge: 'Appuntamenti sul Territorio',
    badgeIcon: 'i-bi:calendar-event-fill',
    title: 'Eventi',
    description:
      'Scopri gli eventi, le iniziative e gli appuntamenti organizzati dal Comitato di Rubiera e partecipa alla vita della nostra comunità.',
    imageUrl: 'https://picsum.photos/id/1048/1200/800',
    imageAlt: 'Eventi e iniziative della Croce Rossa Italiana - Comitato di Rubiera',
    primaryCta: {
      label: 'Scopri le Notizie',
      url: '/news',
      icon: 'i-bi:newspaper',
    },
    secondaryCta: {
      label: 'Campagne',
      url: '/campagne',
      icon: 'i-bi:megaphone-fill',
    },
  },

  '/campagne': {
    badge: 'Sensibilizzazione',
    badgeIcon: 'i-bi:megaphone-fill',
    title: 'Campagne di Sensibilizzazione',
    description:
      'Scopri le campagne di sensibilizzazione promosse dalla Croce Rossa per diffondere prevenzione, consapevolezza, solidarietà e cultura umanitaria.',
    imageUrl: 'https://picsum.photos/id/1021/1200/800',
    imageAlt: 'Campagne di sensibilizzazione della Croce Rossa Italiana - Comitato di Rubiera',
    primaryCta: {
      label: 'Scopri le Notizie',
      url: '/news',
      icon: 'i-bi:newspaper',
    },
    secondaryCta: {
      label: 'Scopri gli Eventi',
      url: '/eventi',
      icon: 'i-bi:calendar-event-fill',
    },
  },

  '/faq': {
    badge: 'Domande Frequenti',
    badgeIcon: 'i-bi:question-circle-fill',
    title: 'Domande frequenti',
    description:
      'Risposte rapide su trasporti sanitari, corsi di formazione, volontariato e modalità di sostegno al Comitato di Rubiera.',
    imageUrl: 'https://picsum.photos/id/1039/1200/800',
    imageAlt: 'Risposte alle domande più frequenti',
    primaryCta: {
      label: 'Richiedi un trasporto',
      url: '/servizi/richiedi-trasporto',
      icon: 'i-bi:truck-front-fill',
    },
    secondaryCta: {
      label: 'Contatta il Comitato',
      url: '/chi-siamo/comitato-e-contatti',
      icon: 'i-bi:envelope-fill',
    },
  },

  '/dona': {
    badge: 'Sostieni la Croce Rossa',
    badgeIcon: 'i-bi:heart-fill',
    title: 'Sostieni il Comitato di Rubiera',
    description:
      'Il tuo contributo ci permette di acquistare nuovi mezzi di soccorso, attrezzature mediche e aiutare le famiglie in difficoltà.',
    imageUrl: 'https://picsum.photos/id/1055/1200/800',
    imageAlt: 'Sostieni la Croce Rossa',
    primaryCta: {
      label: 'FAQ Donazioni',
      url: '/faq',
      icon: 'i-bi:question-circle-fill',
    },
  },
}

export const defaultHeroContent: HeroContent = {
  badge: 'Croce Rossa Italiana',
  badgeIcon: 'i-bi:heart-fill',
  title: 'Comitato di Rubiera',
  description:
    'Al servizio delle persone e della comunità attraverso assistenza, soccorso e prevenzione.',
  imageUrl: 'https://picsum.photos/id/1040/1200/800',
  imageAlt: 'Croce Rossa Italiana Rubiera',
  primaryCta: {
    label: 'Torna alla Home',
    url: '/',
    icon: 'i-bi:house-fill',
  },
}