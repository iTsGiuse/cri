<template>
  <div>
    <Hero />
    <LazyQualifiche :qualifiche="datiQualifiche" />
  </div>
</template>

<script setup lang="ts">
const datiQualifiche = [
  {
    id: 'salute',
    titolo: 'Salute',
    icona: 'i-bi:heart-pulse-fill',
    ordine: 1,

    qualifiche: [
      {
        id: 'bls',
        sigla: 'BLS',
        titolo: 'Rianimazione cardiopolmonare di base',
        descrizione:
          'Formazione sulle manovre di rianimazione cardiopolmonare di base in età adulta e/o pediatrica.',
        icona: 'i-bi:heart-pulse',
        ordine: 1,
      },
      {
        id: 'blsd',
        sigla: 'BLSD',
        titolo: 'Basic Life Support and Defibrillation',
        descrizione:
          'Percorso di formazione alle manovre di rianimazione cardiopolmonare e all’utilizzo del defibrillatore semiautomatico esterno.',
        icona: 'i-bi:heart-pulse-fill',
        ordine: 2,
      },
      {
        id: 'pblsd',
        sigla: 'PBLSD',
        titolo: 'Pediatric Basic Life Support and Defibrillation',
        descrizione:
          'Formazione alle manovre salvavita e alla defibrillazione in età pediatrica.',
        icona: 'i-bi:person-heart',
        ordine: 3,
      },
      {
        id: 'tmsap',
        sigla: 'TMSAP',
        titolo: 'Trainer Manovre Salvavita Adulto e Pediatrico',
        descrizione:
          'Percorso per la formazione dei trainer nell’ambito delle manovre salvavita adulto e pediatrico.',
        icona: 'i-bi:person-video3',
        ordine: 4,
      },
      {
        id: 'fsal',
        sigla: 'FSAL',
        titolo: 'Formatore Salute',
        descrizione:
          'Percorso di formazione per i formatori dell’ambito Salute della Croce Rossa Italiana.',
        icona: 'i-bi:mortarboard-fill',
        ordine: 5,
      },
    ],
  },

  {
    id: 'trasporto-soccorso',
    titolo: 'Trasporto sanitario e soccorso',
    icona: 'i-bi:ambulance',
    ordine: 2,

    qualifiche: [
      {
        id: 'ts',
        sigla: 'TS',
        titolo: 'Trasporto Sanitario',
        descrizione:
          'Percorso formativo per le attività di trasporto sanitario non in emergenza.',
        icona: 'i-bi:truck-front-fill',
        ordine: 1,
      },
      {
        id: 'tssa',
        sigla: 'TSSA',
        titolo: 'Trasporto Sanitario e Soccorso in Ambulanza',
        descrizione:
          'Percorso formativo dedicato ai volontari e dipendenti CRI che operano nel trasporto sanitario e nel soccorso in ambulanza.',
        icona: 'i-bi:ambulance',
        ordine: 2,
      },
      {
        id: 'ttssa',
        sigla: 'TTSSA',
        titolo: 'Trainer Trasporto Sanitario e Soccorso in Ambulanza',
        descrizione:
          'Percorso per la formazione dei trainer TSSA.',
        icona: 'i-bi:person-video3',
        ordine: 3,
      },
    ],
  },

  {
    id: 'emergenza',
    titolo: 'Emergenza',
    icona: 'i-bi:fire',
    ordine: 3,

    qualifiche: [
      {
        id: 'opem',
        sigla: 'OPEM',
        titolo: 'Operatore CRI di attività di Emergenza',
        descrizione:
          'Qualifica per operare nelle attività di emergenza della Croce Rossa Italiana.',
        icona: 'i-bi:shield-fill-check',
        ordine: 1,
      },
      {
        id: 'opsa',
        sigla: 'OPSA',
        titolo: 'Operatore Polivalente Salvataggio in Acqua',
        descrizione:
          'Percorso specialistico per le attività di salvaguardia e salvataggio in acqua.',
        icona: 'i-bi:water',
        ordine: 2,
      },
      {
        id: 'tlc1',
        sigla: 'TLC1',
        titolo: 'Operatore Telecomunicazioni',
        descrizione:
          'Formazione per operare nell’ambito delle telecomunicazioni a supporto delle attività CRI.',
        icona: 'i-bi:radio',
        ordine: 3,
      },
      {
        id: 'uc-oc',
        sigla: 'UC-OC',
        titolo: 'Operatore Cinofilo',
        descrizione:
          'Percorso per operatori cinofili della Croce Rossa Italiana.',
        icona: 'i-bi:dog',
        ordine: 4,
      },
      {
        id: 'smts',
        sigla: 'SMTS',
        titolo: 'Soccorso con Mezzi e Tecniche Speciali',
        descrizione:
          'Percorso specialistico dedicato alle attività di ricerca e soccorso con mezzi e tecniche speciali.',
        icona: 'i-bi:tools',
        ordine: 5,
      },
    ],
  },

  {
    id: 'inclusione-sociale',
    titolo: 'Inclusione sociale',
    icona: 'i-bi:people-fill',
    ordine: 4,

    qualifiche: [
      {
        id: 'os',
        sigla: 'OS',
        titolo: 'Operatore Sociale CRI',
        descrizione:
          'Percorso per operatori impegnati nelle attività di inclusione e supporto sociale.',
        icona: 'i-bi:people',
        ordine: 1,
      },
      {
        id: 'osg',
        sigla: 'OSG',
        titolo: 'Operatore Sociale Generico',
        descrizione:
          'Qualifica per attività di prevenzione, mitigazione e risposta alle situazioni di vulnerabilità sociale.',
        icona: 'i-bi:person-heart',
        ordine: 2,
      },
      {
        id: 'opsd',
        sigla: 'OPSD',
        titolo: 'Operatore CRI specializzato in persone Senza Dimora',
        descrizione:
          'Specializzazione per le attività rivolte alle persone senza dimora.',
        icona: 'i-bi:house',
        ordine: 3,
      },
      {
        id: 'opsp',
        sigla: 'OPSP',
        titolo: 'Operatore CRI specializzato in attività di Sportello sociale',
        descrizione:
          'Specializzazione per le attività di sportello sociale.',
        icona: 'i-bi:shop-window',
        ordine: 4,
      },
      {
        id: 'osd',
        sigla: 'OSD',
        titolo: 'Operatore Sociale CRI specializzato nelle Dipendenze',
        descrizione:
          'Specializzazione per le attività sociali rivolte alle persone con problematiche legate alle dipendenze.',
        icona: 'i-bi:person-exclamation',
        ordine: 5,
      },
      {
        id: 'ops',
        sigla: 'OPS',
        titolo: 'Operatore CRI Psicosociale',
        descrizione:
          'Percorso specialistico nell’ambito delle attività psicosociali.',
        icona: 'i-bi:chat-heart',
        ordine: 6,
      },
      {
        id: 'ods',
        sigla: 'ODS',
        titolo: 'Operatore del Sorriso',
        descrizione:
          'Percorso per operatori impegnati nelle attività di supporto e animazione rivolte alle persone vulnerabili.',
        icona: 'i-bi:emoji-smile',
        ordine: 7,
      },
      {
        id: 'tas',
        sigla: 'TAS',
        titolo: 'Trainer di Attività Sociali',
        descrizione:
          'Percorso per trainer nell’ambito delle attività sociali.',
        icona: 'i-bi:person-video3',
        ordine: 8,
      },
    ],
  },

  {
    id: 'migrazioni',
    titolo: 'Migrazioni',
    icona: 'i-bi:globe-europe-africa',
    ordine: 5,

    qualifiche: [
      {
        id: 'migr',
        sigla: 'MIGR',
        titolo: 'Operatore CRI di attività rivolte a persone Migranti',
        descrizione:
          'Percorso per operatori impegnati nelle attività rivolte alle persone migranti.',
        icona: 'i-bi:globe',
        ordine: 1,
      },
      {
        id: 'tapm',
        sigla: 'TAPM',
        titolo: 'Trainer Attività rivolte a Persone Migranti',
        descrizione:
          'Percorso per trainer delle attività rivolte alle persone migranti.',
        icona: 'i-bi:person-video3',
        ordine: 2,
      },
    ],
  },

  {
    id: 'giovani',
    titolo: 'Giovani',
    icona: 'i-bi:people',
    ordine: 6,

    qualifiche: [
      {
        id: 'psg',
        sigla: 'PSG',
        titolo: 'Promozione e Sviluppo della Gioventù',
        descrizione:
          'Percorso per operatori impegnati nelle attività di promozione e sviluppo della gioventù.',
        icona: 'i-bi:people-fill',
        ordine: 1,
      },
      {
        id: 'tpsg',
        sigla: 'TPSG',
        titolo: 'Trainer per la Promozione e lo Sviluppo della Gioventù',
        descrizione:
          'Percorso per trainer nell’ambito della Promozione e Sviluppo della Gioventù.',
        icona: 'i-bi:person-video3',
        ordine: 2,
      },
    ],
  },

  {
    id: 'principi-valori',
    titolo: 'Principi e Valori',
    icona: 'i-bi:heart-fill',
    ordine: 7,

    qualifiche: [
      {
        id: 'eap',
        sigla: 'EAP',
        titolo: 'EducAzione alla Pace',
        descrizione:
          'Percorso CRI dedicato alle attività di EducAzione alla Pace.',
        icona: 'i-bi:peace',
        ordine: 1,
      },
      {
        id: 'feap',
        sigla: 'FEAP',
        titolo: 'Facilitatore EducAzione alla Pace',
        descrizione:
          'Percorso per facilitatori delle attività di EducAzione alla Pace.',
        icona: 'i-bi:person-video3',
        ordine: 2,
      },
      {
        id: 'dsto',
        sigla: 'DSTO',
        titolo: 'Divulgatore Storia della Croce Rossa',
        descrizione:
          'Percorso per la divulgazione della storia della Croce Rossa, della medicina e del Movimento Internazionale.',
        icona: 'i-bi:book',
        ordine: 3,
      },
      {
        id: 'idiu',
        sigla: 'IDIU',
        titolo: 'Istruttore di Diritto Internazionale Umanitario',
        descrizione:
          'Percorso per istruttori di Diritto Internazionale Umanitario.',
        icona: 'i-bi:journal-text',
        ordine: 4,
      },
    ],
  },

  {
    id: 'cooperazione-internazionale',
    titolo: 'Cooperazione internazionale',
    icona: 'i-bi:globe2',
    ordine: 8,

    qualifiche: [
      {
        id: 'oaci',
        sigla: 'OACI',
        titolo: 'Operatore di Attività di Cooperazione Internazionale',
        descrizione:
          'Percorso per operatori impegnati nelle attività di cooperazione internazionale.',
        icona: 'i-bi:globe2',
        ordine: 1,
      },
      {
        id: 'taci',
        sigla: 'TACI',
        titolo: 'Trainer Attività di Cooperazione Internazionale',
        descrizione:
          'Percorso per trainer delle attività di cooperazione internazionale.',
        icona: 'i-bi:person-video3',
        ordine: 2,
      },
    ],
  },

  {
    id: 'simulazione',
    titolo: 'Truccatori e Simulatori',
    icona: 'i-bi:palette-fill',
    ordine: 9,

    qualifiche: [
      {
        id: 'truccatore',
        sigla: 'TRUCCATORE',
        titolo: 'Truccatore CRI',
        descrizione:
          'Volontario formato all’utilizzo di tecniche di trucco per la simulazione realistica di eventi traumatici.',
        icona: 'i-bi:palette',
        ordine: 1,
      },
      {
        id: 'simulatore',
        sigla: 'SIMULATORE',
        titolo: 'Simulatore CRI',
        descrizione:
          'Volontario formato alla simulazione e alla recitazione di scenari realistici per attività formative ed esercitazioni.',
        icona: 'i-bi:person-bounding-box',
        ordine: 2,
      },
      {
        id: 'face-painting',
        sigla: 'FP',
        titolo: 'Face Painting',
        descrizione:
          'Formazione specifica sulle tecniche di face painting.',
        icona: 'i-bi:brush',
        ordine: 3,
      },
    ],
  },

  {
    id: 'sicurezza',
    titolo: 'Salute e sicurezza',
    icona: 'i-bi:shield-check',
    ordine: 10,

    qualifiche: [
      {
        id: 'sic1',
        sigla: 'SIC1',
        titolo: 'Sicurezza di base',
        descrizione:
          'Formazione in materia di salute e sicurezza per i volontari CRI.',
        icona: 'i-bi:shield-check',
        ordine: 1,
      },
      {
        id: 'sic2',
        sigla: 'SIC2',
        titolo: 'Sicurezza avanzata',
        descrizione:
          'Formazione avanzata in materia di salute e sicurezza.',
        icona: 'i-bi:shield-fill-check',
        ordine: 2,
      },
      {
        id: 'sicdir',
        sigla: 'SICDIR',
        titolo: 'Formazione per Dirigenti in materia di salute e sicurezza',
        descrizione:
          'Percorso formativo rivolto ai dirigenti in materia di salute e sicurezza.',
        icona: 'i-bi:person-badge',
        ordine: 3,
      },
    ],
  },

  {
    id: 'sviluppo-organizzativo',
    titolo: 'Sviluppo organizzativo',
    icona: 'i-bi:diagram-3-fill',
    ordine: 11,

    qualifiche: [
      {
        id: 'tcri',
        sigla: 'TCRI',
        titolo: 'Trainer CRI',
        descrizione:
          'Percorso trasversale per la formazione dei trainer della Croce Rossa Italiana.',
        icona: 'i-bi:person-video3',
        ordine: 1,
      },
      {
        id: 'fcri',
        sigla: 'FCRI',
        titolo: 'Formatore CRI',
        descrizione:
          'Percorso dedicato alla formazione dei formatori CRI.',
        icona: 'i-bi:mortarboard-fill',
        ordine: 2,
      },
      {
        id: 'cgova',
        sigla: 'CGOVA',
        titolo: 'Governance Associativa',
        descrizione:
          'Percorso formativo dedicato alla governance associativa.',
        icona: 'i-bi:diagram-3',
        ordine: 3,
      },
      {
        id: 'gcts',
        sigla: 'GCTS',
        titolo: 'Gestione Comitati CRI e Terzo Settore',
        descrizione:
          'Formazione dedicata alla gestione dei Comitati CRI e agli aspetti del Terzo Settore.',
        icona: 'i-bi:building',
        ordine: 4,
      },
    ],
  },

  {
    id: 'specializzazioni-emergenza',
    titolo: 'Specializzazioni di emergenza',
    icona: 'i-bi:lightning-fill',
    ordine: 12,

    qualifiche: [
      {
        id: 'wash-1',
        sigla: 'CASP-I',
        titolo: 'Specialista WASH 1',
        descrizione:
          'Alta specializzazione in pulizia, igiene e disinfezione in emergenza.',
        icona: 'i-bi:droplet-fill',
        ordine: 1,
      },
      {
        id: 'wash-2',
        sigla: 'CASP-M',
        titolo: 'Specialista WASH 2',
        descrizione:
          'Alta specializzazione nell’ambito dell’acqua potabile in emergenza.',
        icona: 'i-bi:droplet',
        ordine: 2,
      },
      {
        id: 'csp-j',
        sigla: 'CSP-J',
        titolo: 'Operatore specializzato in Team Building',
        descrizione:
          'Specializzazione nell’ambito del team building per le attività di emergenza.',
        icona: 'i-bi:people-fill',
        ordine: 3,
      },
      {
        id: 'asoti',
        sigla: 'ASOTI',
        titolo: 'Operatore specializzato in soccorso su terreno innevato',
        descrizione:
          'Specializzazione nelle attività di soccorso su terreno innevato.',
        icona: 'i-bi:snow',
        ordine: 4,
      },
      {
        id: 'assps',
        sigla: 'ASSPS',
        titolo: 'Operatore specializzato in soccorso su piste da sci e terreno innevato',
        descrizione:
          'Specializzazione nelle attività di soccorso su piste da sci e terreno innevato.',
        icona: 'i-bi:snow2',
        ordine: 5,
      },
      {
        id: 'ascms',
        sigla: 'ASCMS',
        titolo: 'Abilitazione alla conduzione di moto slitta',
        descrizione:
          'Alta specializzazione abilitante alla conduzione di moto slitta.',
        icona: 'i-bi:speedometer2',
        ordine: 6,
      },
      {
        id: 'cbrn',
        sigla: 'ASCBRN',
        titolo: 'Operatore CBRN CRI',
        descrizione:
          'Alta specializzazione per operatori CRI nell’ambito del rischio chimico, biologico, radiologico e nucleare.',
        icona: 'i-bi:shield-fill-exclamation',
        ordine: 7,
      },
      {
        id: 'cbrn-logista',
        sigla: 'ASCBRNL',
        titolo: 'Operatore CBRN Logista',
        descrizione:
          'Alta specializzazione per operatori CBRN con competenze logistiche.',
        icona: 'i-bi:boxes',
        ordine: 8,
      },
      {
        id: 'tlc2',
        sigla: 'TLC2',
        titolo: 'Specialista Telecomunicazioni',
        descrizione:
          'Specializzazione avanzata nell’ambito delle telecomunicazioni.',
        icona: 'i-bi:radio',
        ordine: 9,
      },
      {
        id: 'uc-as',
        sigla: 'UC-AS',
        titolo: 'Unità Cinofila Specializzata in Attività Sociali',
        descrizione:
          'Specializzazione cinofila dedicata alle attività sociali.',
        icona: 'i-bi:dog',
        ordine: 10,
      },
      {
        id: 'rsp',
        sigla: 'RSP',
        titolo: 'Operatore di Biocontenimento del Reparto di Sanità Pubblica',
        descrizione:
          'Alta specializzazione nell’ambito del biocontenimento del Reparto di Sanità Pubblica.',
        icona: 'i-bi:virus',
        ordine: 11,
      },
    ],
  },

  {
    id: 'motorizzazione',
    titolo: 'Motorizzazione',
    icona: 'i-bi:car-front-fill',
    ordine: 13,

    qualifiche: [
      {
        id: 'tssg',
        sigla: 'TSSG',
        titolo: 'Trainer Specializzato di Scuola Guida',
        descrizione:
          'Percorso specialistico della Motorizzazione CRI per la formazione nell’ambito della scuola guida.',
        icona: 'i-bi:car-front',
        ordine: 1,
      },
      {
        id: 'tig',
        sigla: 'TIG',
        titolo: 'Trainer Istruttore di Guida',
        descrizione:
          'Percorso per trainer istruttori di guida CRI.',
        icona: 'i-bi:steering-wheel',
        ordine: 2,
      },
      {
        id: 'tsgeu',
        sigla: 'TSGEU',
        titolo: 'Trainer Specializzato Guida in Emergenza-Urgenza CRI',
        descrizione:
          'Percorso specialistico per la guida CRI in emergenza-urgenza.',
        icona: 'i-bi:ambulance',
        ordine: 3,
      },
      {
        id: 'mtag',
        sigla: 'MTAG',
        titolo: 'Abilitazione alla Guida per Patenti Superiori',
        descrizione:
          'Modulo trasversale della Motorizzazione per l’abilitazione alla guida con patenti superiori.',
        icona: 'i-bi:truck-front',
        ordine: 4,
      },
    ],
  },
]
</script>