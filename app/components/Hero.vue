<template>
  <section class="hero-wrapper bg-danger text-white py-5">
    <div class="container py-lg-4">
      <div class="row align-items-center g-5">
        <div class="col-12 col-lg-6 text-center text-lg-start">
          <div v-if="currentContent.badge" class="mb-3">
            <span
              class="badge bg-white bg-opacity-20 text-danger px-3 py-2 rounded-pill fw-semibold border border-white border-opacity-25 fs-6"
            >
              <Icon
                v-if="currentContent.badgeIcon"
                :name="currentContent.badgeIcon"
                class="me-2"
                aria-hidden="true"
              />
              {{ currentContent.badge }}
            </span>
          </div>

          <component
            :is="headingLevel"
            class="display-4 fw-bold text-white lh-sm mb-3"
          >
            {{ currentContent.title }}
          </component>

          <p class="lead text-white text-opacity-85 mb-4 fs-5">
            {{ currentContent.description }}
          </p>

          <div
            class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
          >
            <NuxtLink
              v-if="currentContent.primaryCta"
              :to="currentContent.primaryCta.url"
              class="btn btn-light text-danger btn-lg px-4 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2 fw-bold cta-button"
            >
              <Icon
                v-if="currentContent.primaryCta.icon"
                :name="currentContent.primaryCta.icon"
                class="fs-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="cta-label">
                {{ currentContent.primaryCta.label }}
              </span>
            </NuxtLink>

            <NuxtLink
              v-if="currentContent.secondaryCta"
              :to="currentContent.secondaryCta.url"
              class="btn btn-outline-light btn-lg px-4 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2 fw-semibold cta-button"
            >
              <Icon
                v-if="currentContent.secondaryCta.icon"
                :name="currentContent.secondaryCta.icon"
                class="fs-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="cta-label">
                {{ currentContent.secondaryCta.label }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="hero-image-container">
            <div
              class="image-wrapper rounded-4 overflow-hidden shadow-lg border border-white border-opacity-25"
            >
              <NuxtImg
                :src="currentContent.imageUrl"
                :alt="currentContent.imageAlt || currentContent.title"
                width="1200"
                height="800"
                class="hero-image w-100 h-100 object-fit-cover"
                sizes="100vw lg:50vw"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CtaLink } from '~/types'

interface HeroContent {
  badge?: string
  badgeIcon?: string
  title: string
  description: string
  imageUrl: string
  imageAlt?: string
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
}

withDefaults(
  defineProps<{
    headingLevel?: 'h1' | 'h2'
  }>(),
  {
    headingLevel: 'h1',
  },
)

const route = useRoute()

const heroContentByPath: Record<string, HeroContent> = {
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

  '/chi-siamo/il-comitato': {
    badge: 'Chi Siamo',
    badgeIcon: 'i-bi:building-fill',
    title: 'Il Comitato di Rubiera',
    description:
      'Scopri chi siamo, i nostri valori fondamentali e come operiamo sul territorio per offrire supporto quotidiano a chi ne ha più bisogno.',
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
      url: '/chi-siamo/il-comitato',
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
      url: '/chi-siamo/sede-e-contatti',
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
      url: '/chi-siamo/sede-e-contatti',
      icon: 'i-bi:envelope-fill',
    },
  },

  '/chi-siamo/sede-e-contatti': {
    badge: 'Siamo Qui per Te',
    badgeIcon: 'i-bi:geo-alt-fill',
    title: 'Sede e Contatti',
    description:
      'Vieni a trovarci o mettiti in contatto con i nostri uffici centrali per informazioni, servizi e richieste amministrative.',
    imageUrl: 'https://picsum.photos/id/1011/1200/800',
    imageAlt: 'Contatti e centralino Rubiera',
    primaryCta: {
      label: 'Prenotazioni',
      url: '/servizi/prenotazioni-e-informazioni',
      icon: 'i-bi:calendar-check-fill',
    },
    secondaryCta: {
      label: 'Richiedi Trasporto',
      url: '/servizi/richiedi-trasporto',
      icon: 'i-bi:truck-front-fill',
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
      url: '/faq/servizi-e-trasporti',
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
      url: '/faq/corsi-formazione',
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
      url: '/chi-siamo/sede-e-contatti',
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
      url: '/chi-siamo/sede-e-contatti',
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
      url: '/faq/servizi-e-trasporti',
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
      label: 'Il Corso di Accesso',
      url: '/volontariato/corso-di-accesso',
      icon: 'i-bi:info-circle-fill',
    },
    secondaryCta: {
      label: 'Percorso Formativo',
      url: '/volontariato/percorso-formativo',
      icon: 'i-bi:mortarboard-fill',
    },
  },

  '/volontariato/corso-di-accesso': {
    badge: 'Iscrizioni Aperte',
    badgeIcon: 'i-bi:info-circle-fill',
    title: 'Come funziona il Corso di Accesso',
    description:
      'Scopri la durata, le materie trattate e le modalità d’iscrizione al corso base per diventare un Volontario della Croce Rossa Italiana.',
    imageUrl: 'https://picsum.photos/id/1060/1200/800',
    imageAlt: 'Aula corsi Croce Rossa',
    primaryCta: {
      label: 'Diventa Volontario',
      url: '/volontariato/diventa-volontario',
      icon: 'i-bi:person-plus-fill',
    },
    secondaryCta: {
      label: 'FAQ Volontariato',
      url: '/faq/volontariato',
      icon: 'i-bi:question-circle-fill',
    },
  },

  '/volontariato/percorso-formativo': {
    badge: 'Crescita e Specializzazioni',
    badgeIcon: 'i-bi:mortarboard-fill',
    title: 'Percorso Formativo e Qualifiche',
    description:
      'Dopo il corso base potrai specializzarti in soccorso in ambulanza, Protezione Civile, sociale, Diritto Umanitario e molto altro.',
    imageUrl: 'https://picsum.photos/id/1062/1200/800',
    imageAlt: 'Formazione continua volontari',
    primaryCta: {
      label: 'Gruppi di Lavoro',
      url: '/volontariato/attivita-e-gruppi',
      icon: 'i-bi:people-fill',
    },
  },

  '/volontariato/attivita-e-gruppi': {
    badge: 'Aree Operative',
    badgeIcon: 'i-bi:people-fill',
    title: 'Attività e Gruppi di Lavoro',
    description:
      'Dalle unità di soccorso ai gruppi giovani, fino al supporto sociale: scopri in quali aree operative puoi mettere in gioco il tuo talento.',
    imageUrl: 'https://picsum.photos/id/1059/1200/800',
    imageAlt: 'Gruppi operativi al lavoro',
    primaryCta: {
      label: 'Cosa Facciamo',
      url: '/cosa-facciamo/salute',
      icon: 'i-bi:heart-pulse-fill',
    },
  },

  '/news/notizie': {
    badge: 'Comunicazione & Aggiornamenti',
    badgeIcon: 'i-bi:newspaper',
    title: 'Notizie ed Attività',
    description:
      'Rimani aggiornato su progetti, traguardi raggiunti, comunicati ufficiali e vita associativa del Comitato di Rubiera.',
    imageUrl: 'https://picsum.photos/id/1058/1200/800',
    imageAlt: 'Notizie dal Comitato',
    primaryCta: {
      label: 'Eventi',
      url: '/news/eventi',
      icon: 'i-bi:calendar-event-fill',
    },
  },

  '/news/eventi': {
    badge: 'Appuntamenti sul Territorio',
    badgeIcon: 'i-bi:calendar-event-fill',
    title: 'Eventi e Iniziative',
    description:
      'Partecipa alle nostre giornate di prevenzione, eventi benefici, esercitazioni ed incontri aperti alla cittadinanza.',
    imageUrl: 'https://picsum.photos/id/1048/1200/800',
    imageAlt: 'Evento pubblico Croce Rossa',
    primaryCta: {
      label: 'Campagne',
      url: '/news/campagne',
      icon: 'i-bi:megaphone-fill',
    },
  },

  '/news/campagne': {
    badge: 'Sensibilizzazione',
    badgeIcon: 'i-bi:megaphone-fill',
    title: 'Campagne di Sensibilizzazione',
    description:
      'Scopri le nostre campagne nazionali e locali per promuovere la donazione del sangue, la sicurezza stradale e l’inclusione.',
    imageUrl: 'https://picsum.photos/id/1021/1200/800',
    imageAlt: 'Campagne di sensibilizzazione',
    primaryCta: {
      label: 'Dona Ora',
      url: '/dona',
      icon: 'i-bi:heart-fill',
    },
  },

  '/faq/servizi-e-trasporti': {
    badge: 'Domande Frequenti',
    badgeIcon: 'i-bi:truck-front-fill',
    title: 'FAQ Trasporti e Servizi',
    description:
      'Trova risposte rapide alle domande più comuni su prenotazione trasporti, costi, convenzioni e copertura dei servizi.',
    imageUrl: 'https://picsum.photos/id/1039/1200/800',
    imageAlt: 'Risposte FAQ Servizi',
    primaryCta: {
      label: 'Richiedi Trasporto',
      url: '/servizi/richiedi-trasporto',
      icon: 'i-bi:truck-front-fill',
    },
  },

  '/faq/corsi-formazione': {
    badge: 'Domande Frequenti',
    badgeIcon: 'i-bi:mortarboard-fill',
    title: 'FAQ Corsi di Formazione',
    description:
      'Risposte dettagliate su attestati rilasciati, modalità di svolgimento e iscrizioni per i corsi alla popolazione e aziendali.',
    imageUrl: 'https://picsum.photos/id/1062/1200/800',
    imageAlt: 'Risposte FAQ Corsi',
    primaryCta: {
      label: 'Corsi Popolazione',
      url: '/servizi/corsi-popolazione',
      icon: 'i-bi:mortarboard-fill',
    },
  },

  '/faq/volontariato': {
    badge: 'Domande Frequenti',
    badgeIcon: 'i-bi:person-heart',
    title: 'FAQ Diventare Volontario',
    description:
      'Requisiti di età, impegno orario richiesto, e risposte ai dubbi più comuni prima di iscriversi al corso di accesso.',
    imageUrl: 'https://picsum.photos/id/1013/1200/800',
    imageAlt: 'Risposte FAQ Volontariato',
    primaryCta: {
      label: 'Diventa Volontario',
      url: '/volontariato/diventa-volontario',
      icon: 'i-bi:person-plus-fill',
    },
  },

  '/faq/donazioni': {
    badge: 'Domande Frequenti',
    badgeIcon: 'i-bi:piggy-bank-fill',
    title: 'FAQ Donazioni e 5x1000',
    description:
      'Come destinare il 5x1000, agevolazioni fiscali per privati e imprese, e come vengono impiegati i fondi raccolti.',
    imageUrl: 'https://picsum.photos/id/1055/1200/800',
    imageAlt: 'Risposte FAQ Donazioni',
    primaryCta: {
      label: 'Dona Ora',
      url: '/dona',
      icon: 'i-bi:heart-fill',
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
      url: '/faq/donazioni',
      icon: 'i-bi:question-circle-fill',
    },
  },
}

const defaultHeroContent: HeroContent = {
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

const currentContent = computed<HeroContent>(() => {
  return heroContentByPath[route.path] || defaultHeroContent
})
</script>

<style scoped>
.hero-wrapper {
  overflow: hidden;
}

.image-wrapper {
  aspect-ratio: 3 / 2;
}

.hero-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-button {
  white-space: nowrap;
}

.cta-label {
  display: inline-block;
}

@media (max-width: 575.98px) {
  .cta-button {
    width: 100%;
    white-space: normal;
  }

  .cta-label {
    text-align: center;
  }
}
</style>