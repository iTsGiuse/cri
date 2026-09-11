<template>
  <section class="hero-wrapper bg-danger text-white py-5">
    <div class="container py-lg-4">
      <div class="row align-items-center g-5">
        <!-- COLONNA TESTO -->
        <div class="col-12 col-lg-6">
          <!-- BADGE (Se presente per la pagina corrente) -->
          <div v-if="contenutoCorrente.badge" class="mb-3">
            <span class="badge bg-white bg-opacity-20 text-danger px-3 py-2 rounded-pill fw-semibold border border-white border-opacity-25 fs-6">
              <Icon v-if="contenutoCorrente.badgeIcona" :name="contenutoCorrente.badgeIcona" class="me-2" />
              {{ contenutoCorrente.badge }}
            </span>
          </div>

          <!-- TITOLO E SOTTOTITOLO -->
          <h1 class="display-4 fw-bold text-white lh-sm mb-3">
            {{ contenutoCorrente.titolo }}
          </h1>

          <p class="lead text-white text-opacity-85 mb-4 fs-5">
            {{ contenutoCorrente.descrizione }}
          </p>

          <!-- PULSANTI D'AZIONE -->
          <div class="d-flex flex-column flex-sm-row gap-3">
            <!-- Pulsante Principale -->
            <NuxtLink
              v-if="contenutoCorrente.ctaPrincipale"
              :to="contenutoCorrente.ctaPrincipale.url"
              class="btn btn-light text-danger btn-lg px-4 py-3 shadow-sm d-inline-flex align-items-center justify-content-center fw-bold"
            >
              <Icon v-if="contenutoCorrente.ctaPrincipale.icona" :name="contenutoCorrente.ctaPrincipale.icona" class="me-2 fs-5" />
              {{ contenutoCorrente.ctaPrincipale.label }}
            </NuxtLink>

            <!-- Pulsante Secondario -->
            <NuxtLink
              v-if="contenutoCorrente.ctaSecondaria"
              :to="contenutoCorrente.ctaSecondaria.url"
              class="btn btn-outline-light btn-lg px-4 py-3 shadow-sm d-inline-flex align-items-center justify-content-center fw-semibold"
            >
              <Icon v-if="contenutoCorrente.ctaSecondaria.icona" :name="contenutoCorrente.ctaSecondaria.icona" class="me-2 fs-5" />
              {{ contenutoCorrente.ctaSecondaria.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- COLONNA IMMAGINE -->
        <div class="col-12 col-lg-6">
          <div class="hero-image-container position-relative">
            <div class="image-wrapper rounded-4 overflow-hidden shadow-lg border border-white border-opacity-25">
              <NuxtImg
                :src="contenutoCorrente.immagine"
                :alt="contenutoCorrente.altImmagine || contenutoCorrente.titolo"
                class="img-fluid w-100 object-fit-cover"
                sizes="sm:100vw md:100vw lg:50vw"
                style="min-height: 380px; max-height: 480px"
                loading="lazy"
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
import { computed } from 'vue'

interface CTA {
  label: string
  url: string
  icona?: string
}

interface ContenutoPagina {
  badge?: string
  badgeIcona?: string
  titolo: string
  descrizione: string
  immagine: string
  altImmagine?: string
  ctaPrincipale?: CTA
  ctaSecondaria?: CTA
}

const route = useRoute()

// Mappa completa dei contenuti per ogni percorso del menu di navigazione
const contenutiPagine: Record<string, ContenutoPagina> = {
  // ==========================================
  // HOME PAGE
  // ==========================================
  '/': {
    badge: 'Emergenza & Soccorso 24/7',
    badgeIcona: 'i-bi:heart-pulse-fill',
    titolo: 'Al servizio della comunità, ogni giorno.',
    descrizione: 'La Croce Rossa Italiana - Comitato di Rubiera è al tuo fianco con servizi di trasporto sanitario, assistenza sociale e interventi di emergenza.',
    immagine: 'https://picsum.photos/id/1025/1200/800',
    altImmagine: 'Volontari Croce Rossa Rubiera',
    ctaPrincipale: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario', icona: 'i-bi:person-plus-fill' },
    ctaSecondaria: { label: 'Richiedi un trasporto', url: '/servizi/richiedi-trasporto', icona: 'i-bi:truck-front-fill' }
  },

  // ==========================================
  // CHI SIAMO
  // ==========================================
  '/chi-siamo/il-comitato': {
    badge: 'Chi Siamo',
    badgeIcona: 'i-bi:building-fill',
    titolo: 'Il Comitato di Rubiera',
    descrizione: 'Scopri chi siamo, i nostri valori fondamentali e come operiamo sul territorio per offrire supporto quotidiano a chi ne ha più bisogno.',
    immagine: 'https://picsum.photos/id/1018/1200/800',
    altImmagine: 'Sede Croce Rossa Rubiera',
    ctaPrincipale: { label: 'I Nostri Principi', url: '/chi-siamo/principi-e-valori', icona: 'i-bi:heart-fill' },
    ctaSecondaria: { label: 'Organizzazione', url: '/chi-siamo/organizzazione', icona: 'i-bi:diagram-3-fill' }
  },
  '/chi-siamo/storia': {
    badge: 'Le Nostre Radici',
    badgeIcona: 'i-bi:clock-history',
    titolo: 'La Nostra Storia',
    descrizione: 'Un viaggio nel tempo attraverso i momenti salienti, le sfide e i traguardi che hanno segnato la nascita e la crescita del nostro Comitato.',
    immagine: 'https://picsum.photos/id/1059/1200/800',
    altImmagine: 'Foto storica della Croce Rossa',
    ctaPrincipale: { label: 'Scopri il Comitato', url: '/chi-siamo/il-comitato', icona: 'i-bi:building-fill' }
  },
  '/chi-siamo/organizzazione': {
    badge: 'Trasparenza & Struttura',
    badgeIcona: 'i-bi:diagram-3-fill',
    titolo: 'Organizzazione e Governance',
    descrizione: 'La struttura organizzativa, il Consiglio Direttivo e gli organi di gestione che guidano responsabilmente le attività del Comitato.',
    immagine: 'https://picsum.photos/id/1069/1200/800',
    altImmagine: 'Organizzazione e Governance',
    ctaPrincipale: { label: 'Trasparenza e Atti', url: '/chi-siamo/trasparenza', icona: 'i-bi:file-earmark-text-fill' },
    ctaSecondaria: { label: 'Sede e Contatti', url: '/chi-siamo/sede-e-contatti', icona: 'i-bi:geo-alt-fill' }
  },
  '/chi-siamo/principi-e-valori': {
    badge: 'Movimento Internazionale',
    badgeIcona: 'i-bi:heart-fill',
    titolo: 'I 7 Principi Fondamentali',
    descrizione: 'Umanità, Imparzialità, Neutralità, Indipendenza, Volontariato, Unità ed Universalità: le linee guida di ogni nostra azione.',
    immagine: 'https://picsum.photos/id/1081/1200/800',
    altImmagine: 'I sette principi della Croce Rossa',
    ctaPrincipale: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario', icona: 'i-bi:person-plus-fill' }
  },
  '/chi-siamo/trasparenza': {
    badge: 'Amministrazione Trasparente',
    badgeIcona: 'i-bi:file-earmark-text-fill',
    titolo: 'Trasparenza e Documenti',
    descrizione: 'Consulta i bilanci consuntivi, le rendicontazioni dei contributi pubblici, gli atti ufficiali e i regolamenti associativi del Comitato.',
    immagine: 'https://picsum.photos/id/1068/1200/800',
    altImmagine: 'Documenti e trasparenza',
    ctaPrincipale: { label: 'Richiedi Info', url: '/chi-siamo/sede-e-contatti', icona: 'i-bi:envelope-fill' }
  },
  '/chi-siamo/sede-e-contatti': {
    badge: 'Siamo Qui per Te',
    badgeIcona: 'i-bi:geo-alt-fill',
    titolo: 'Sede e Contatti',
    descrizione: 'Vieni a trovarci o mettiti in contatto con i nostri uffici centrali per informazioni, servizi e richieste amministrative.',
    immagine: 'https://picsum.photos/id/1011/1200/800',
    altImmagine: 'Contatti e centralino Rubiera',
    ctaPrincipale: { label: 'Prenotazioni', url: '/servizi/prenotazioni-e-informazioni', icona: 'i-bi:calendar-check-fill' },
    ctaSecondaria: { label: 'Richiedi Trasporto', url: '/servizi/richiedi-trasporto', icona: 'i-bi:truck-front-fill' }
  },

  // ==========================================
  // COSA FACCIAMO
  // ==========================================
  '/cosa-facciamo/salute': {
    badge: 'Area 1 - Salute',
    badgeIcona: 'i-bi:heart-pulse-fill',
    titolo: 'Salute e Prevenzione',
    descrizione: 'Promuoviamo la tutela della salute, la prevenzione e stili di vita sani attraverso iniziative sul territorio e formazione della popolazione.',
    immagine: 'https://picsum.photos/id/1020/1200/800',
    altImmagine: 'Attività di tutela della salute',
    ctaPrincipale: { label: 'Corsi Popolazione', url: '/servizi/corsi-popolazione', icona: 'i-bi:mortarboard-fill' }
  },
  '/cosa-facciamo/sociale': {
    badge: 'Area 2 - Sociale',
    badgeIcona: 'i-bi:people-fill',
    titolo: 'Sociale e Inclusione',
    descrizione: 'Combattiamo la povertà, la solitudine e le fragilità sociali offrendo supporto concreto alle famiglie e alle persone vulnerabili.',
    immagine: 'https://picsum.photos/id/1005/1200/800',
    altImmagine: 'Assistenza e supporto sociale',
    ctaPrincipale: { label: 'Supporto Sociale', url: '/servizi/supporto-sociale', icona: 'i-bi:house-heart-fill' }
  },
  '/cosa-facciamo/protezione-civile': {
    badge: 'Area 3 - Emergenze',
    badgeIcona: 'i-bi:shield-fill-check',
    titolo: 'Emergenza e Protezione Civile',
    descrizione: 'Prepariamo le comunità alle emergenze e garantiamo una risposta tempestiva e coordinata in caso di calamità naturali o crisi.',
    immagine: 'https://picsum.photos/id/1043/1200/800',
    altImmagine: 'Mezzi e squadra Protezione Civile',
    ctaPrincipale: { label: 'Servizio 118', url: '/servizi/emergenza-118', icona: 'i-bi:exclamation-triangle-fill' }
  },
  '/cosa-facciamo/diritto-umanitario': {
    badge: 'Area 4 - Principi',
    badgeIcona: 'i-bi:book-fill',
    titolo: 'Principi e Diritto Umanitario',
    descrizione: 'Diffondiamo il Diritto Internazionale Umanitario, la cultura della pace, del rispetto e della non discriminazione.',
    immagine: 'https://picsum.photos/id/1024/1200/800',
    altImmagine: 'Diffusione Diritto Umanitario',
    ctaPrincipale: { label: 'Scopri i Principi', url: '/chi-siamo/principi-e-valori', icona: 'i-bi:heart-fill' }
  },
  '/cosa-facciamo/giovani': {
    badge: 'Area 5 - Gioventù',
    badgeIcona: 'i-bi:person-hearts',
    titolo: 'Giovani e Futuro',
    descrizione: 'Promuoviamo lo sviluppo dei giovani e il loro coinvolgimento attivo come agenti di cambiamento positivo nella comunità.',
    immagine: 'https://picsum.photos/id/1012/1200/800',
    altImmagine: 'Gruppo Giovani Croce Rossa',
    ctaPrincipale: { label: 'Unisciti ai Giovani', url: '/volontariato/diventa-volontario', icona: 'i-bi:person-plus-fill' }
  },
  '/cosa-facciamo/sviluppo': {
    badge: 'Area 6 - Sviluppo',
    badgeIcona: 'i-bi:graph-up-arrow',
    titolo: 'Sviluppo e Comunicazione',
    descrizione: 'Lavoriamo per rafforzare la trasparenza, l’efficienza organizzativa, la presenza sul territorio e la raccolta fondi.',
    immagine: 'https://picsum.photos/id/1074/1200/800',
    altImmagine: 'Sviluppo e Comunicazione',
    ctaPrincipale: { label: 'Dona Ora', url: '/dona', icona: 'i-bi:heart-fill' }
  },

  // ==========================================
  // SERVIZI
  // ==========================================
  '/servizi/emergenza-118': {
    badge: 'Soccorso Sanitario',
    badgeIcona: 'i-bi:exclamation-triangle-fill',
    titolo: 'Emergenza e Soccorso 118 / 112',
    descrizione: 'Operiamo H24 in convenzione con il sistema di emergenza-urgenza territoriale 118 per garantire interventi di primo soccorso tempestivi.',
    immagine: 'https://picsum.photos/id/1070/1200/800',
    altImmagine: 'Ambulanza in servizio di emergenza',
    ctaPrincipale: { label: 'Iscriviti ai Corsi', url: '/servizi/corsi-popolazione', icona: 'i-bi:mortarboard-fill' },
    ctaSecondaria: { label: 'Richiedi Trasporto', url: '/servizi/richiedi-trasporto', icona: 'i-bi:truck-front-fill' }
  },
  '/servizi/richiedi-trasporto': {
    badge: 'Trasporto Intramurale & Privato',
    badgeIcona: 'i-bi:truck-front-fill',
    titolo: 'Richiedi un Trasporto Sanitario',
    descrizione: 'Organizziamo trasferimenti in ambulanza o con mezzi attrezzati con pedana per visite mediche, ricoveri, terapie ed esami.',
    immagine: 'https://picsum.photos/id/1071/1200/800',
    altImmagine: 'Mezzo attrezzato per trasporto sanitario',
    ctaPrincipale: { label: 'Prenota o Richiedi Info', url: '/servizi/prenotazioni-e-informazioni', icona: 'i-bi:calendar-check-fill' },
    ctaSecondaria: { label: 'FAQ Trasporti', url: '/faq/servizi-e-trasporti', icona: 'i-bi:question-circle-fill' }
  },
  '/servizi/assistenza-eventi': {
    badge: 'Grandi Eventi e Manifestazioni',
    badgeIcona: 'i-bi:hospital-fill',
    titolo: 'Assistenza Sanitaria Eventi',
    descrizione: 'Offriamo servizio di presidio sanitario e soccorso per eventi sportivi, concerti, fiere e manifestazioni pubbliche o private.',
    immagine: 'https://picsum.photos/id/1050/1200/800',
    altImmagine: 'Assistenza sanitaria a manifestazione',
    ctaPrincipale: { label: 'Contatta gli Uffici', url: '/servizi/prenotazioni-e-informazioni', icona: 'i-bi:envelope-fill' }
  },
  '/servizi/corsi-popolazione': {
    badge: 'Formazione Cittadini',
    badgeIcona: 'i-bi:mortarboard-fill',
    titolo: 'Corsi per la Popolazione',
    descrizione: 'Impara le manovre salvavita, la disostruzione delle vie aeree pediatriche e l’uso del defibrillatore (DAE) con i nostri istruttori qualificati.',
    immagine: 'https://picsum.photos/id/1062/1200/800',
    altImmagine: 'Corso Primo Soccorso popolazione',
    ctaPrincipale: { label: 'FAQ Corsi', url: '/faq/corsi-formazione', icona: 'i-bi:question-circle-fill' }
  },
  '/servizi/corsi-aziende': {
    badge: 'Sicurezza sul Lavoro',
    badgeIcona: 'i-bi:briefcase-fill',
    titolo: 'Corsi Aziendali (D.Lgs 81/08)',
    descrizione: 'Formazione professionale e aggiornamento in materia di primo soccorso aziendale per datori di lavoro e dipendenti (Gruppo A, B, C).',
    immagine: 'https://picsum.photos/id/1076/1200/800',
    altImmagine: 'Corso aziendale sicurezza',
    ctaPrincipale: { label: 'Richiedi Preventivo', url: '/chi-siamo/sede-e-contatti', icona: 'i-bi:envelope-fill' }
  },
  '/servizi/supporto-sociale': {
    badge: 'Inclusione & Aiuto Concreto',
    badgeIcona: 'i-bi:house-heart-fill',
    titolo: 'Supporto Sociale e Assistenza',
    descrizione: 'Consegna farmaci e spesa a domicilio, distribuzione viveri e supporto morale alle persone anziane e con difficoltà motorie.',
    immagine: 'https://picsum.photos/id/1027/1200/800',
    altImmagine: 'Volontario in assistenza sociale',
    ctaPrincipale: { label: 'Contatta il Centralino', url: '/chi-siamo/sede-e-contatti', icona: 'i-bi:telephone-fill' }
  },
  '/servizi/prenotazioni-e-informazioni': {
    badge: 'Ufficio Servizi',
    badgeIcona: 'i-bi:calendar-check-fill',
    titolo: 'Prenotazioni e Informazioni',
    descrizione: 'Modulo unico per prenotare un trasporto ordinario, richiedere un preventivo o ricevere informazioni sui nostri servizi territoriali.',
    immagine: 'https://picsum.photos/id/1015/1200/800',
    altImmagine: 'Modulo prenotazioni e info',
    ctaPrincipale: { label: 'FAQ Servizi', url: '/faq/servizi-e-trasporti', icona: 'i-bi:question-circle-fill' }
  },

  // ==========================================
  // VOLONTARIATO
  // ==========================================
  '/volontariato/diventa-volontario': {
    badge: 'Fai la Differenza',
    badgeIcona: 'i-bi:person-plus-fill',
    titolo: 'Diventa Volontario',
    descrizione: 'Metti il tuo tempo, le tue competenze e il tuo cuore al servizio degli altri. Diventa parte della più grande organizzazione umanitaria al mondo.',
    immagine: 'https://picsum.photos/id/1005/1200/800',
    altImmagine: 'Volontari sorridenti Croce Rossa',
    ctaPrincipale: { label: 'Il Corso di Accesso', url: '/volontariato/corso-di-accesso', icona: 'i-bi:info-circle-fill' },
    ctaSecondaria: { label: 'Percorso Formativo', url: '/volontariato/percorso-formativo', icona: 'i-bi:mortarboard-fill' }
  },
  '/volontariato/corso-di-accesso': {
    badge: 'Iscrizioni Aperte',
    badgeIcona: 'i-bi:info-circle-fill',
    titolo: 'Come funziona il Corso di Accesso',
    descrizione: 'Scopri la durata, le materie trattate e le modalità d’iscrizione al corso base per diventare un Volontario della Croce Rossa Italiana.',
    immagine: 'https://picsum.photos/id/1060/1200/800',
    altImmagine: 'Aula corsi Croce Rossa',
    ctaPrincipale: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario', icona: 'i-bi:person-plus-fill' },
    ctaSecondaria: { label: 'FAQ Volontariato', url: '/faq/volontariato', icona: 'i-bi:question-circle-fill' }
  },
  '/volontariato/percorso-formativo': {
    badge: 'Crescita e Specializzazioni',
    badgeIcona: 'i-bi:mortarboard-fill',
    titolo: 'Percorso Formativo e Qualifiche',
    descrizione: 'Dopo il corso base potrai specializzarti in soccorso in ambulanza, Protezione Civile, sociale, Diritto Umanitario e molto altro.',
    immagine: 'https://picsum.photos/id/1062/1200/800',
    altImmagine: 'Formazione continua volontari',
    ctaPrincipale: { label: 'Gruppi di Lavoro', url: '/volontariato/attivita-e-gruppi', icona: 'i-bi:people-fill' }
  },
  '/volontariato/attivita-e-gruppi': {
    badge: 'Aree Operative',
    badgeIcona: 'i-bi:people-fill',
    titolo: 'Attività e Gruppi di Lavoro',
    descrizione: 'Dalle unità di soccorso ai gruppi giovani, fino al supporto sociale: scopri in quali aree operative puoi mettere in gioco il tuo talento.',
    immagine: 'https://picsum.photos/id/1059/1200/800',
    altImmagine: 'Gruppi operativi al lavoro',
    ctaPrincipale: { label: 'Cosa Facciamo', url: '/cosa-facciamo/salute', icona: 'i-bi:heart-pulse-fill' }
  },

  // ==========================================
  // NEWS & EVENTI
  // ==========================================
  '/news/notizie': {
    badge: 'Comunicazione & Aggiornamenti',
    badgeIcona: 'i-bi:newspaper',
    titolo: 'Notizie ed Attività',
    descrizione: 'Rimani aggiornato su progetti, traguardi raggiunti, comunicati ufficiali e vita associativa del Comitato di Rubiera.',
    immagine: 'https://picsum.photos/id/1058/1200/800',
    altImmagine: 'Notizie dal Comitato',
    ctaPrincipale: { label: 'Eventi', url: '/news/eventi', icona: 'i-bi:calendar-event-fill' }
  },
  '/news/eventi': {
    badge: 'Appuntamenti sul Territorio',
    badgeIcona: 'i-bi:calendar-event-fill',
    titolo: 'Eventi e Iniziative',
    descrizione: 'Partecipa alle nostre giornate di prevenzione, eventi benefici, esercitazioni ed incontri aperti alla cittadinanza.',
    immagine: 'https://picsum.photos/id/1048/1200/800',
    altImmagine: 'Evento pubblico Croce Rossa',
    ctaPrincipale: { label: 'Campagne', url: '/news/campagne', icona: 'i-bi:megaphone-fill' }
  },
  '/news/campagne': {
    badge: 'Sensibilizzazione',
    badgeIcona: 'i-bi:megaphone-fill',
    titolo: 'Campagne di Sensibilizzazione',
    descrizione: 'Scopri le nostre campagne nazionali e locali per promuovere la donazione del sangue, la sicurezza stradale e l’inclusione.',
    immagine: 'https://picsum.photos/id/1021/1200/800',
    altImmagine: 'Campagne di sensibilizzazione',
    ctaPrincipale: { label: 'Dona Ora', url: '/dona', icona: 'i-bi:heart-fill' }
  },

  // ==========================================
  // FAQ
  // ==========================================
  '/faq/servizi-e-trasporti': {
    badge: 'Domande Frequenti',
    badgeIcona: 'i-bi:truck-front-fill',
    titolo: 'FAQ Trasporti e Servizi',
    descrizione: 'Trova risposte rapide alle domande più comuni su prenotazione trasporti, costi, convenzioni e copertura dei servizi.',
    immagine: 'https://picsum.photos/id/1039/1200/800',
    altImmagine: 'Risposte FAQ Servizi',
    ctaPrincipale: { label: 'Richiedi Trasporto', url: '/servizi/richiedi-trasporto', icona: 'i-bi:truck-front-fill' }
  },
  '/faq/corsi-formazione': {
    badge: 'Domande Frequenti',
    badgeIcona: 'i-bi:mortarboard-fill',
    titolo: 'FAQ Corsi di Formazione',
    descrizione: 'Risposte dettagliate su attestati rilasciati, modalità di svolgimento e iscrizioni per i corsi alla popolazione e aziendali.',
    immagine: 'https://picsum.photos/id/1062/1200/800',
    altImmagine: 'Risposte FAQ Corsi',
    ctaPrincipale: { label: 'Corsi Popolazione', url: '/servizi/corsi-popolazione', icona: 'i-bi:mortarboard-fill' }
  },
  '/faq/volontariato': {
    badge: 'Domande Frequenti',
    badgeIcona: 'i-bi:person-heart',
    titolo: 'FAQ Diventare Volontario',
    descrizione: 'Requisiti di età, impegno orario richiesto, e risposte ai dubbi più comuni prima di iscriversi al corso di accesso.',
    immagine: 'https://picsum.photos/id/1013/1200/800',
    altImmagine: 'Risposte FAQ Volontariato',
    ctaPrincipale: { label: 'Diventa Volontario', url: '/volontariato/diventa-volontario', icona: 'i-bi:person-plus-fill' }
  },
  '/faq/donazioni': {
    badge: 'Domande Frequenti',
    badgeIcona: 'i-bi:piggy-bank-fill',
    titolo: 'FAQ Donazioni e 5x1000',
    descrizione: 'Come destinare il 5x1000, agevolazioni fiscali per privati e imprese, e come vengono impiegati i fondi raccolti.',
    immagine: 'https://picsum.photos/id/1055/1200/800',
    altImmagine: 'Risposte FAQ Donazioni',
    ctaPrincipale: { label: 'Dona Ora', url: '/dona', icona: 'i-bi:heart-fill' }
  },

  // ==========================================
  // PAGINA AZIONE PRINCIPALE
  // ==========================================
  '/dona': {
    badge: 'Sostieni la Croce Rossa',
    badgeIcona: 'i-bi:heart-fill',
    titolo: 'Sostieni il Comitato di Rubiera',
    descrizione: 'Il tuo contributo ci permette di acquistare nuovi mezzi di soccorso, attrezzature mediche e aiutare le famiglie in difficoltà.',
    immagine: 'https://picsum.photos/id/1055/1200/800',
    altImmagine: 'Sostieni la Croce Rossa',
    ctaPrincipale: { label: 'FAQ Donazioni', url: '/faq/donazioni', icona: 'i-bi:question-circle-fill' }
  }
}

// Fallback per pagine non mappate o dinamiche
const contenutoDefault: ContenutoPagina = {
  badge: 'Croce Rossa Italiana',
  badgeIcona: 'i-bi:heart-fill',
  titolo: 'Comitato di Rubiera',
  descrizione: 'Al servizio delle persone e della comunità attraverso assistenza, soccorso e prevenzione.',
  immagine: 'https://picsum.photos/id/1040/1200/800',
  altImmagine: 'Croce Rossa Italiana Rubiera',
  ctaPrincipale: { label: 'Torna alla Home', url: '/', icona: 'i-bi:house-fill' }
}

// Calcola dinamicamente i dati Hero per la pagina attiva
const contenutoCorrente = computed<ContenutoPagina>(() => {
  return contenutiPagine[route.path] || contenutoDefault
})
</script>

<style scoped>
.hero-wrapper {
  overflow: hidden;
}

.object-fit-cover {
  object-fit: cover;
}
</style>
