<template>
  <div>
    <Hero />
    <LazyQualifiche hydrate-on-visible :categories="qualificationCategories" />
  </div>
</template>

<script setup lang="ts">
import type { QualificationCategory } from '~/components/Qualifiche.vue'

const qualificationCategories: QualificationCategory[] = [
  {
    id: 'salute',
    title: 'Salute',
    icon: 'i-bi:heart-pulse-fill',
    order: 1,

    qualifications: [
      {
        id: 'bls',
        code: 'BLS',
        title: 'Rianimazione cardiopolmonare di base',
        description:
          'Formazione sulle manovre di rianimazione cardiopolmonare di base in età adulta e/o pediatrica.',
        icon: 'i-bi:heart-pulse',
        order: 1,
      },
      {
        id: 'blsd',
        code: 'BLSD',
        title: 'Basic Life Support and Defibrillation',
        description:
          'Percorso di formazione alle manovre di rianimazione cardiopolmonare e all’utilizzo del defibrillatore semiautomatico esterno.',
        icon: 'i-bi:heart-pulse-fill',
        order: 2,
      },
      {
        id: 'pblsd',
        code: 'PBLSD',
        title: 'Pediatric Basic Life Support and Defibrillation',
        description:
          'Formazione alle manovre salvavita e alla defibrillazione in età pediatrica.',
        icon: 'i-bi:person-heart',
        order: 3,
      },
      {
        id: 'tmsap',
        code: 'TMSAP',
        title: 'Trainer Manovre Salvavita Adulto e Pediatrico',
        description:
          'Percorso per la formazione dei trainer nell’ambito delle manovre salvavita adulto e pediatrico.',
        icon: 'i-bi:person-video3',
        order: 4,
      },
      {
        id: 'fsal',
        code: 'FSAL',
        title: 'Formatore Salute',
        description:
          'Percorso di formazione per i formatori dell’ambito Salute della Croce Rossa Italiana.',
        icon: 'i-bi:mortarboard-fill',
        order: 5,
      },
    ],
  },

  {
    id: 'trasporto-soccorso',
    title: 'Trasporto sanitario e soccorso',
    icon: 'i-bi:ambulance',
    order: 2,

    qualifications: [
      {
        id: 'ts',
        code: 'TS',
        title: 'Trasporto Sanitario',
        description:
          'Percorso formativo per le attività di trasporto sanitario non in emergenza.',
        icon: 'i-bi:truck-front-fill',
        order: 1,
      },
      {
        id: 'tssa',
        code: 'TSSA',
        title: 'Trasporto Sanitario e Soccorso in Ambulanza',
        description:
          'Percorso formativo dedicato ai volontari e dipendenti CRI che operano nel trasporto sanitario e nel soccorso in ambulanza.',
        icon: 'i-bi:ambulance',
        order: 2,
      },
      {
        id: 'ttssa',
        code: 'TTSSA',
        title: 'Trainer Trasporto Sanitario e Soccorso in Ambulanza',
        description:
          'Percorso per la formazione dei trainer TSSA.',
        icon: 'i-bi:person-video3',
        order: 3,
      },
    ],
  },

  {
    id: 'emergenza',
    title: 'Emergenza',
    icon: 'i-bi:fire',
    order: 3,

    qualifications: [
      {
        id: 'opem',
        code: 'OPEM',
        title: 'Operatore CRI di attività di Emergenza',
        description:
          'Qualifica per operare nelle attività di emergenza della Croce Rossa Italiana.',
        icon: 'i-bi:shield-fill-check',
        order: 1,
      },
      {
        id: 'opsa',
        code: 'OPSA',
        title: 'Operatore Polivalente Salvataggio in Acqua',
        description:
          'Percorso specialistico per le attività di salvaguardia e salvataggio in acqua.',
        icon: 'i-bi:water',
        order: 2,
      },
      {
        id: 'tlc1',
        code: 'TLC1',
        title: 'Operatore Telecomunicazioni',
        description:
          'Formazione per operare nell’ambito delle telecomunicazioni a supporto delle attività CRI.',
        icon: 'i-bi:radio',
        order: 3,
      },
      {
        id: 'uc-oc',
        code: 'UC-OC',
        title: 'Operatore Cinofilo',
        description:
          'Percorso per operatori cinofili della Croce Rossa Italiana.',
        icon: 'i-bi:dog',
        order: 4,
      },
      {
        id: 'smts',
        code: 'SMTS',
        title: 'Soccorso con Mezzi e Tecniche Speciali',
        description:
          'Percorso specialistico dedicato alle attività di ricerca e soccorso con mezzi e tecniche speciali.',
        icon: 'i-bi:tools',
        order: 5,
      },
    ],
  },

  {
    id: 'inclusione-sociale',
    title: 'Inclusione sociale',
    icon: 'i-bi:people-fill',
    order: 4,

    qualifications: [
      {
        id: 'os',
        code: 'OS',
        title: 'Operatore Sociale CRI',
        description:
          'Percorso per operatori impegnati nelle attività di inclusione e supporto sociale.',
        icon: 'i-bi:people',
        order: 1,
      },
      {
        id: 'osg',
        code: 'OSG',
        title: 'Operatore Sociale Generico',
        description:
          'Qualifica per attività di prevenzione, mitigazione e risposta alle situazioni di vulnerabilità sociale.',
        icon: 'i-bi:person-heart',
        order: 2,
      },
      {
        id: 'opsd',
        code: 'OPSD',
        title: 'Operatore CRI specializzato in persone Senza Dimora',
        description:
          'Specializzazione per le attività rivolte alle persone senza dimora.',
        icon: 'i-bi:house',
        order: 3,
      },
      {
        id: 'opsp',
        code: 'OPSP',
        title: 'Operatore CRI specializzato in attività di Sportello sociale',
        description:
          'Specializzazione per le attività di sportello sociale.',
        icon: 'i-bi:shop-window',
        order: 4,
      },
      {
        id: 'osd',
        code: 'OSD',
        title: 'Operatore Sociale CRI specializzato nelle Dipendenze',
        description:
          'Specializzazione per le attività sociali rivolte alle persone con problematiche legate alle dipendenze.',
        icon: 'i-bi:person-exclamation',
        order: 5,
      },
      {
        id: 'ops',
        code: 'OPS',
        title: 'Operatore CRI Psicosociale',
        description:
          'Percorso specialistico nell’ambito delle attività psicosociali.',
        icon: 'i-bi:chat-heart',
        order: 6,
      },
      {
        id: 'ods',
        code: 'ODS',
        title: 'Operatore del Sorriso',
        description:
          'Percorso per operatori impegnati nelle attività di supporto e animazione rivolte alle persone vulnerabili.',
        icon: 'i-bi:emoji-smile',
        order: 7,
      },
      {
        id: 'tas',
        code: 'TAS',
        title: 'Trainer di Attività Sociali',
        description:
          'Percorso per trainer nell’ambito delle attività sociali.',
        icon: 'i-bi:person-video3',
        order: 8,
      },
    ],
  },

  {
    id: 'migrazioni',
    title: 'Migrazioni',
    icon: 'i-bi:globe-europe-africa',
    order: 5,

    qualifications: [
      {
        id: 'migr',
        code: 'MIGR',
        title: 'Operatore CRI di attività rivolte a persone Migranti',
        description:
          'Percorso per operatori impegnati nelle attività rivolte alle persone migranti.',
        icon: 'i-bi:globe',
        order: 1,
      },
      {
        id: 'tapm',
        code: 'TAPM',
        title: 'Trainer Attività rivolte a Persone Migranti',
        description:
          'Percorso per trainer delle attività rivolte alle persone migranti.',
        icon: 'i-bi:person-video3',
        order: 2,
      },
    ],
  },

  {
    id: 'giovani',
    title: 'Giovani',
    icon: 'i-bi:people',
    order: 6,

    qualifications: [
      {
        id: 'psg',
        code: 'PSG',
        title: 'Promozione e Sviluppo della Gioventù',
        description:
          'Percorso per operatori impegnati nelle attività di promozione e sviluppo della gioventù.',
        icon: 'i-bi:people-fill',
        order: 1,
      },
      {
        id: 'tpsg',
        code: 'TPSG',
        title: 'Trainer per la Promozione e lo Sviluppo della Gioventù',
        description:
          'Percorso per trainer nell’ambito della Promozione e Sviluppo della Gioventù.',
        icon: 'i-bi:person-video3',
        order: 2,
      },
    ],
  },

  {
    id: 'principi-valori',
    title: 'Principi e Valori',
    icon: 'i-bi:heart-fill',
    order: 7,

    qualifications: [
      {
        id: 'eap',
        code: 'EAP',
        title: 'EducAzione alla Pace',
        description:
          'Percorso CRI dedicato alle attività di EducAzione alla Pace.',
        icon: 'i-bi:peace',
        order: 1,
      },
      {
        id: 'feap',
        code: 'FEAP',
        title: 'Facilitatore EducAzione alla Pace',
        description:
          'Percorso per facilitatori delle attività di EducAzione alla Pace.',
        icon: 'i-bi:person-video3',
        order: 2,
      },
      {
        id: 'dsto',
        code: 'DSTO',
        title: 'Divulgatore Storia della Croce Rossa',
        description:
          'Percorso per la divulgazione della storia della Croce Rossa, della medicina e del Movimento Internazionale.',
        icon: 'i-bi:book',
        order: 3,
      },
      {
        id: 'idiu',
        code: 'IDIU',
        title: 'Istruttore di Diritto Internazionale Umanitario',
        description:
          'Percorso per istruttori di Diritto Internazionale Umanitario.',
        icon: 'i-bi:journal-text',
        order: 4,
      },
    ],
  },

  {
    id: 'cooperazione-internazionale',
    title: 'Cooperazione internazionale',
    icon: 'i-bi:globe2',
    order: 8,

    qualifications: [
      {
        id: 'oaci',
        code: 'OACI',
        title: 'Operatore di Attività di Cooperazione Internazionale',
        description:
          'Percorso per operatori impegnati nelle attività di cooperazione internazionale.',
        icon: 'i-bi:globe2',
        order: 1,
      },
      {
        id: 'taci',
        code: 'TACI',
        title: 'Trainer Attività di Cooperazione Internazionale',
        description:
          'Percorso per trainer delle attività di cooperazione internazionale.',
        icon: 'i-bi:person-video3',
        order: 2,
      },
    ],
  },

  {
    id: 'simulazione',
    title: 'Truccatori e Simulatori',
    icon: 'i-bi:palette-fill',
    order: 9,

    qualifications: [
      {
        id: 'truccatore',
        code: 'TRUCCATORE',
        title: 'Truccatore CRI',
        description:
          'Volontario formato all’utilizzo di tecniche di trucco per la simulazione realistica di eventi traumatici.',
        icon: 'i-bi:palette',
        order: 1,
      },
      {
        id: 'simulatore',
        code: 'SIMULATORE',
        title: 'Simulatore CRI',
        description:
          'Volontario formato alla simulazione e alla recitazione di scenari realistici per attività formative ed esercitazioni.',
        icon: 'i-bi:person-bounding-box',
        order: 2,
      },
      {
        id: 'face-painting',
        code: 'FP',
        title: 'Face Painting',
        description:
          'Formazione specifica sulle tecniche di face painting.',
        icon: 'i-bi:brush',
        order: 3,
      },
    ],
  },

  {
    id: 'sicurezza',
    title: 'Salute e sicurezza',
    icon: 'i-bi:shield-check',
    order: 10,

    qualifications: [
      {
        id: 'sic1',
        code: 'SIC1',
        title: 'Sicurezza di base',
        description:
          'Formazione in materia di salute e sicurezza per i volontari CRI.',
        icon: 'i-bi:shield-check',
        order: 1,
      },
      {
        id: 'sic2',
        code: 'SIC2',
        title: 'Sicurezza avanzata',
        description:
          'Formazione avanzata in materia di salute e sicurezza.',
        icon: 'i-bi:shield-fill-check',
        order: 2,
      },
      {
        id: 'sicdir',
        code: 'SICDIR',
        title: 'Formazione per Dirigenti in materia di salute e sicurezza',
        description:
          'Percorso formativo rivolto ai dirigenti in materia di salute e sicurezza.',
        icon: 'i-bi:person-badge',
        order: 3,
      },
    ],
  },

  {
    id: 'sviluppo-organizzativo',
    title: 'Sviluppo organizzativo',
    icon: 'i-bi:diagram-3-fill',
    order: 11,

    qualifications: [
      {
        id: 'tcri',
        code: 'TCRI',
        title: 'Trainer CRI',
        description:
          'Percorso trasversale per la formazione dei trainer della Croce Rossa Italiana.',
        icon: 'i-bi:person-video3',
        order: 1,
      },
      {
        id: 'fcri',
        code: 'FCRI',
        title: 'Formatore CRI',
        description:
          'Percorso dedicato alla formazione dei formatori CRI.',
        icon: 'i-bi:mortarboard-fill',
        order: 2,
      },
      {
        id: 'cgova',
        code: 'CGOVA',
        title: 'Governance Associativa',
        description:
          'Percorso formativo dedicato alla governance associativa.',
        icon: 'i-bi:diagram-3',
        order: 3,
      },
      {
        id: 'gcts',
        code: 'GCTS',
        title: 'Gestione Comitati CRI e Terzo Settore',
        description:
          'Formazione dedicata alla gestione dei Comitati CRI e agli aspetti del Terzo Settore.',
        icon: 'i-bi:building',
        order: 4,
      },
    ],
  },

  {
    id: 'specializzazioni-emergenza',
    title: 'Specializzazioni di emergenza',
    icon: 'i-bi:lightning-fill',
    order: 12,

    qualifications: [
      {
        id: 'wash-1',
        code: 'CASP-I',
        title: 'Specialista WASH 1',
        description:
          'Alta specializzazione in pulizia, igiene e disinfezione in emergenza.',
        icon: 'i-bi:droplet-fill',
        order: 1,
      },
      {
        id: 'wash-2',
        code: 'CASP-M',
        title: 'Specialista WASH 2',
        description:
          'Alta specializzazione nell’ambito dell’acqua potabile in emergenza.',
        icon: 'i-bi:droplet',
        order: 2,
      },
      {
        id: 'csp-j',
        code: 'CSP-J',
        title: 'Operatore specializzato in Team Building',
        description:
          'Specializzazione nell’ambito del team building per le attività di emergenza.',
        icon: 'i-bi:people-fill',
        order: 3,
      },
      {
        id: 'asoti',
        code: 'ASOTI',
        title: 'Operatore specializzato in soccorso su terreno innevato',
        description:
          'Specializzazione nelle attività di soccorso su terreno innevato.',
        icon: 'i-bi:snow',
        order: 4,
      },
      {
        id: 'assps',
        code: 'ASSPS',
        title: 'Operatore specializzato in soccorso su piste da sci e terreno innevato',
        description:
          'Specializzazione nelle attività di soccorso su piste da sci e terreno innevato.',
        icon: 'i-bi:snow2',
        order: 5,
      },
      {
        id: 'ascms',
        code: 'ASCMS',
        title: 'Abilitazione alla conduzione di moto slitta',
        description:
          'Alta specializzazione abilitante alla conduzione di moto slitta.',
        icon: 'i-bi:speedometer2',
        order: 6,
      },
      {
        id: 'cbrn',
        code: 'ASCBRN',
        title: 'Operatore CBRN CRI',
        description:
          'Alta specializzazione per operatori CRI nell’ambito del rischio chimico, biologico, radiologico e nucleare.',
        icon: 'i-bi:shield-fill-exclamation',
        order: 7,
      },
      {
        id: 'cbrn-logista',
        code: 'ASCBRNL',
        title: 'Operatore CBRN Logista',
        description:
          'Alta specializzazione per operatori CBRN con competenze logistiche.',
        icon: 'i-bi:boxes',
        order: 8,
      },
      {
        id: 'tlc2',
        code: 'TLC2',
        title: 'Specialista Telecomunicazioni',
        description:
          'Specializzazione avanzata nell’ambito delle telecomunicazioni.',
        icon: 'i-bi:radio',
        order: 9,
      },
      {
        id: 'uc-as',
        code: 'UC-AS',
        title: 'Unità Cinofila Specializzata in Attività Sociali',
        description:
          'Specializzazione cinofila dedicata alle attività sociali.',
        icon: 'i-bi:dog',
        order: 10,
      },
      {
        id: 'rsp',
        code: 'RSP',
        title: 'Operatore di Biocontenimento del Reparto di Sanità Pubblica',
        description:
          'Alta specializzazione nell’ambito del biocontenimento del Reparto di Sanità Pubblica.',
        icon: 'i-bi:virus',
        order: 11,
      },
    ],
  },

  {
    id: 'motorizzazione',
    title: 'Motorizzazione',
    icon: 'i-bi:car-front-fill',
    order: 13,

    qualifications: [
      {
        id: 'tssg',
        code: 'TSSG',
        title: 'Trainer Specializzato di Scuola Guida',
        description:
          'Percorso specialistico della Motorizzazione CRI per la formazione nell’ambito della scuola guida.',
        icon: 'i-bi:car-front',
        order: 1,
      },
      {
        id: 'tig',
        code: 'TIG',
        title: 'Trainer Istruttore di Guida',
        description:
          'Percorso per trainer istruttori di guida CRI.',
        icon: 'i-bi:steering-wheel',
        order: 2,
      },
      {
        id: 'tsgeu',
        code: 'TSGEU',
        title: 'Trainer Specializzato Guida in Emergenza-Urgenza CRI',
        description:
          'Percorso specialistico per la guida CRI in emergenza-urgenza.',
        icon: 'i-bi:ambulance',
        order: 3,
      },
      {
        id: 'mtag',
        code: 'MTAG',
        title: 'Abilitazione alla Guida per Patenti Superiori',
        description:
          'Modulo trasversale della Motorizzazione per l’abilitazione alla guida con patenti superiori.',
        icon: 'i-bi:truck-front',
        order: 4,
      },
    ],
  },
]
</script>