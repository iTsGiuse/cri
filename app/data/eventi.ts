import type { CategoriaComunicazione, Evento } from '~/types/comunicazioni'

export type NewsCategory = CategoriaComunicazione
export type NewsArticle = Evento

export const newsCategories: NewsCategory[] = [
  {
    id: 'raccolta-fondi',
    name: 'Raccolta Fondi',
  },
  {
    id: 'piazza-comunita',
    name: 'Piazza & Comunità',
  },
  {
    id: 'salute-prevenzione',
    name: 'Salute & Prevenzione',
  },
  {
    id: 'open-day',
    name: 'Open Day & Porte Aperte',
  },
  {
    id: 'sport-solidarieta',
    name: 'Sport & Solidarietà',
  },
  {
    id: 'giovani',
    name: 'Iniziative Giovani',
  },
  {
    id: 'emergenza',
    name: 'Protezione Civile',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'cena-sociale-raccolta-fondi-2026',
    title: 'Cena Sociale di Raccolta Fondi per la nuova Ambulanza',
    description:
      'Una serata conviviale per sostenere l’acquisto di un nuovo mezzo di soccorso per il Comitato di Rubiera.',
    categoryId: 'raccolta-fondi',
    publishedAt: '2026-10-15',
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Una serata per un grande progetto comune',
        paragrafi: [
          "Torna la consueta Cena Sociale del Comitato di Rubiera! Un appuntamento speciale per trascorrere insieme una serata di condivisione e sostenere un grande progetto comune.",
          "L'intero ricavato della serata sarà destinato al fondo per l'acquisto di una nuova ambulanza per il servizio di emergenza-urgenza.",
        ],
      },
      {
        titolo: "Dettagli dell'evento",
        paragrafi: [
          "Durante la serata verrà presentato il menù con i piatti della tradizione emiliana, preparato dai nostri volontari. Sarà presente anche un momento di intrattenimento e una lotteria a premi.",
        ],
      },
      {
        titolo: 'Come partecipare',
        paragrafi: [
          'I posti sono limitati. Per partecipare è richiesta la prenotazione entro il 10 ottobre contattando la segreteria del Comitato.',
        ],
      },
    ],
    chiamataAzione: {
      titolo: 'Prenotazione obbligatoria',
      testo:
        'Contatta il Comitato di Rubiera per riservare il tuo tavolo e sostenere le nostre attività.',
    },
  },
  {
    id: '2',
    slug: 'giornata-salute-prevenzione-piazza-2026',
    title: 'In Piazza per la Salute: Screening e Controlli Gratuiti',
    description:
      'I volontari e i medici CRI in piazza per controlli gratuiti di pressione, glicemia e dimostrazioni salvavita.',
    categoryId: 'salute-prevenzione',
    publishedAt: '2026-09-27',
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'La prevenzione in piazza',
        paragrafi: [
          'La prevenzione è il primo passo per prendersi cura della propria salute. I volontari e le infermiere volontarie della Croce Rossa vi aspettano in Piazza del Popolo a Rubiera.',
        ],
      },
      {
        titolo: 'Controlli e Informazione',
        paragrafi: [
          "Presso lo stand allestito per l'occasione sarà possibile effettuare la misurazione gratuita di pressione arteriosa, saturazione e glicemia.",
          'Nel pomeriggio si terranno brevi dimostrazioni pratiche di manovre di disostruzione pediatrica e utilizzo del defibrillatore (DAE).',
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'camminata-solidale-red-cross-run-2026',
    title: 'Red Cross Run: Camminata Solidale per le vie di Rubiera',
    description:
      'Una camminata non competitiva aperta a tutte le età per promuovere stili di vita sani e sostenere i progetti sociali.',
    categoryId: 'sport-solidarieta',
    publishedAt: '2026-09-20',
    imageUrl:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'In cammino con la Croce Rossa',
        paragrafi: [
          "Mettiti in cammino con la Croce Rossa! Una giornata all'insegna dello sport, della salute e della solidarietà lungo i percorsi del nostro comune.",
        ],
      },
      {
        titolo: 'Percorsi e Iscrizioni',
        paragrafi: [
          "Sono previsti due percorsi: uno breve da 5 km adatto a famiglie e bambini e uno da 10 km per i camminatori più allenati. All'arrivo sarà allestito un punto ristoro per tutti i partecipanti.",
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'open-day-sede-rubiera-2026',
    title: 'Open Day CRI: Porte Aperte alla Cittadinanza',
    description:
      'Una giornata per visitare la sede, scoprire i mezzi di soccorso e conoscere da vicino il mondo dei volontari.',
    categoryId: 'open-day',
    publishedAt: '2026-08-23',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: "Un'esperienza da vicino",
        paragrafi: [
          "Avete mai desiderato salire su un'ambulanza o scoprire come funziona la sala operativa durante un'emergenza?",
        ],
      },
      {
        titolo: "Un'esperienza per grandi e piccini",
        paragrafi: [
          'Durante la giornata sarà possibile visitare la sede, assistere a simulazioni di soccorso e partecipare al laboratorio "Piccoli Volontari" dedicato ai bambini.',
        ],
      },
    ],
  },
  {
    id: '5',
    slug: 'festa-giovani-cri-rubiera-2026',
    title: 'CRI Young Night: Musica e Sicurezza Stradale',
    description:
      'I Giovani della Croce Rossa organizzano una serata di musica e sensibilizzazione sui rischi dell’alcol alla guida.',
    categoryId: 'giovani',
    publishedAt: '2026-07-18',
    imageUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Sicurezza stradale in musica',
        paragrafi: [
          'Una serata organizzata dal Gruppo Giovani del Comitato per parlare di sicurezza stradale e stili di vita consapevoli in modo dinamico e coinvolgente.',
        ],
      },
      {
        titolo: 'Attività della serata',
        paragrafi: [
          "DJ set, simulazione di guida con occhiali alcol-vista e prova gratuita dell'etilometro prima di mettersi al volante.",
        ],
      },
    ],
  },
  {
    id: '6',
    slug: 'raccolta-scolastica-solidale-2026',
    title: 'Tutti a Scuola: Raccolta di Materiale Didattico',
    description:
      'Raccogliamo quaderni, astucci e zaini per sostenere le famiglie in difficoltà all’inizio del nuovo anno scolastico.',
    categoryId: 'piazza-comunita',
    publishedAt: '2026-06-13',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: "L'istruzione è un diritto di tutti",
        paragrafi: [
          "L'istruzione è un diritto di tutti. I volontari saranno presenti all'ingresso dei supermercati locali per raccogliere materiale scolastico nuovo.",
        ],
      },
      {
        titolo: 'Cosa donare',
        paragrafi: [
          "Quaderni, penne, matite, colori, diari e zaini che verranno distribuiti alle famiglie seguite dall'area sociale del Comitato.",
        ],
      },
    ],
  },
  {
    id: '7',
    slug: 'festa-volontario-rubiera-2026',
    title: 'Festa del Volontario e Premiazione Anzianità',
    description:
      'Cerimonia ufficiale per festeggiare la consegna delle benemerenze e i traguardi raggiunti dal Comitato.',
    categoryId: 'piazza-comunita',
    publishedAt: '2026-05-24',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Un grazie a tutti i volontari',
        paragrafi: [
          'Un momento solenne e festoso per dire grazie a tutti i volontari che ogni giorno mettono il proprio tempo a disposizione della comunità.',
          'Durante la cerimonia verranno consegnati gli attestati di benemerenza e le croci per gli anni di servizio prestati in Croce Rossa.',
        ],
      },
    ],
  },
  {
    id: '8',
    slug: 'lezione-manovre-salvavita-2026',
    title: 'Incontro Pubblico: Manovre di Disostruzione Pediatrica',
    description:
      'Lezione informativa gratuita aperta a genitori, nonni e insegnanti su come salvare un bambino in caso di soffocamento.',
    categoryId: 'salute-prevenzione',
    publishedAt: '2026-05-10',
    imageUrl:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Poche manovre, una vita salvata',
        paragrafi: [
          'Poche e semplici manovre che chiunque può imparare e che possono salvare la vita di un bambino.',
        ],
      },
      {
        titolo: 'Argomenti trattati',
        paragrafi: [
          'Istruttori qualificati spiegheranno come prevenire il soffocamento e come intervenire tempestivamente nei lattanti e nei bambini.',
        ],
      },
    ],
  },
  {
    id: '9',
    slug: 'mercatino-vintage-solidale-2026',
    title: 'Mercatino Solidale di Primavera',
    description:
      'Vendita straordinaria di oggetti, abbigliamento e artigianato per finanziare i progetti sociali del territorio.',
    categoryId: 'raccolta-fondi',
    publishedAt: '2026-04-12',
    imageUrl:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Il mercatino torna in Comitato',
        paragrafi: [
          "Torna il mercatino vintage ed etico del Comitato. Un'occasione per fare acquisti sostenibili e fare del bene.",
        ],
      },
      {
        titolo: 'Oggetti in vendita',
        paragrafi: [
          "Troverete libri, abbigliamento, piccoli arredi e creazioni artigianali donate dai cittadini per sostenere le nostre attività d'assistenza.",
        ],
      },
    ],
  },
  {
    id: '10',
    slug: 'concerto-auguri-natale-2025',
    title: 'Concerto di Natale per la Croce Rossa',
    description:
      'Serata musicale di auguri con la partecipazione della Corale locale e raccolta fondi per i pacchi alimentari.',
    categoryId: 'raccolta-fondi',
    publishedAt: '2025-12-19',
    imageUrl:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Musica e auguri di Natale',
        paragrafi: [
          'Un momento di festa e di musica per scambiarsi gli auguri di Natale e riflettere sul valore della solidarietà.',
          'Le offerte libere raccolte durante il concerto saranno utilizzate per l\'acquisto di beni di prima necessità da distribuire alle famiglie bisognose durante le feste.',
        ],
      },
    ],
  },
  {
    id: '11',
    slug: 'castagnata-piazza-2025',
    title: 'La Castagnata Solidale della Croce Rossa',
    description:
      'Profumo di caldarroste, vin brulé e tanto calore umano nel centro storico di Rubiera.',
    categoryId: 'piazza-comunita',
    publishedAt: '2025-11-09',
    imageUrl:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: "Un pomeriggio d'autunno in piazza",
        paragrafi: [
          'I volontari vi aspettano in piazza con caldarroste calde, vin brulé e bevande calde per trascorrere insieme un pomeriggio d\'autunno.',
        ],
      },
      {
        titolo: 'Insieme sul territorio',
        paragrafi: [
          "Un'occasione informale per incontrare la cittadinanza e raccogliere fondi per i progetti di assistenza sociale del Comitato.",
        ],
      },
    ],
  },
  {
    id: '12',
    slug: 'esercitazione-protezione-civile-aperta-2025',
    title: 'Campoincontro: Esercitazione di Protezione Civile',
    description:
      'I volontari dell’area Emergenza allestiscono un campo di soccorso dimostrativo aperto alle visite guidate.',
    categoryId: 'emergenza',
    publishedAt: '2025-10-18',
    imageUrl:
      'https://images.unsplash.com/photo-1587745416684-47953e9f5c9a?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Come nasce un campo di accoglienza',
        paragrafi: [
          "Come si struttura un campo di accoglienza durante una calamità naturale? Venite a scoprirlo durante l'esercitazione annuale dei nostri moduli di Protezione Civile.",
        ],
      },
      {
        titolo: 'Visite e dimostrazioni',
        paragrafi: [
          "Visite guidate alle tende ministeriali, alle cucine da campo e alla centrale di TLC (Telecomunicazioni d'emergenza).",
        ],
      },
    ],
  },
  {
    id: '13',
    slug: 'torneo-biliardino-solidale-2025',
    title: 'Torneo di Calciobalilla a Coppie',
    description:
      'Sfida all’ultimo gol per sostenere le attività del Gruppo Giovani della Croce Rossa.',
    categoryId: 'giovani',
    publishedAt: '2025-09-05',
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Una sfida all’ultimo gol',
        paragrafi: [
          'I Giovani CRI organizzano un torneo di calciobalilla aperto a tutte le età. Ricchi premi per le prime tre coppie classificate!',
        ],
      },
      {
        titolo: 'Iscrizioni',
        paragrafi: [
          'Quota di iscrizione ad offerta con ricavato destinato alle iniziative di prevenzione nelle scuole secondarie del comune.',
        ],
      },
    ],
  },
  {
    id: '14',
    slug: 'festa-della-croce-rossa-2025',
    title: 'Giornata Nazionale della Croce Rossa a Rubiera',
    description:
      'Stand informativi, simulazioni di primo soccorso e attività per bambini per la festa della Croce Rossa.',
    categoryId: 'piazza-comunita',
    publishedAt: '2025-05-08',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Celebrare i Principi Fondamentali',
        paragrafi: [
          'In occasione della Giornata Mondiale della Croce Rossa e Mezzaluna Rossa, il Comitato scende in piazza per celebrare i 7 Principi Fondamentali.',
        ],
      },
      {
        titolo: 'Programma',
        paragrafi: [
          'Mostra fotografica storica, punto informativo sul corso volontari, giochi a tema per bambini e dimostrazioni continue di primo soccorso.',
        ],
      },
    ],
  },
  {
    id: '15',
    slug: 'screening-diabete-cardio-2025',
    title: 'Cuore e Salute: Giornata di Prevenzione Cardiologica',
    description:
      'Esecuzione di elettrocardiogrammi gratuiti e valutazione del rischio cardiovascolare.',
    categoryId: 'salute-prevenzione',
    publishedAt: '2025-04-06',
    imageUrl:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Prevenire con controlli periodici',
        paragrafi: [
          'Prevenire le malattie cardiovascolari è possibile con controlli periodici e corretti stili di vita.',
        ],
      },
      {
        titolo: 'Servizi offerti',
        paragrafi: [
          'Valutazione del rischio, ECG e colloquio con medico cardiologo per tutti i cittadini sopra i 50 anni previa prenotazione.',
        ],
      },
    ],
  },
  {
    id: '16',
    slug: 'raccolta-alimentare-natale-2024',
    title: 'Raccolta Alimentare Solidale di Natale',
    description:
      'Una raccolta di beni di prima necessità per sostenere le persone e le famiglie più fragili del territorio.',
    categoryId: 'piazza-comunita',
    publishedAt: '2024-12-07',
    imageUrl:
      'https://images.unsplash.com/photo-1606913079621-e64f2a0b7c75?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Un aiuto concreto per le famiglie',
        paragrafi: [
          'Una raccolta di beni di prima necessità per sostenere le persone e le famiglie più fragili del territorio durante le festività.',
        ],
      },
      {
        titolo: 'La solidarietà durante le feste',
        paragrafi: [
          'Grazie alla collaborazione tra cittadini e volontari è possibile offrire un aiuto concreto alle famiglie che ne hanno bisogno.',
        ],
      },
    ],
  },
  {
    id: '17',
    slug: 'volontari-in-piazza-2024',
    title: 'La Croce Rossa incontra la Cittadinanza',
    description:
      'Un’occasione per incontrare i cittadini, presentare i servizi di trasporto e parlare dei principi della Croce Rossa.',
    categoryId: 'piazza-comunita',
    publishedAt: '2024-09-21',
    imageUrl:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Di nuovo in piazza',
        paragrafi: [
          'La Croce Rossa torna in piazza per incontrare la cittadinanza e presentare le proprie attività sul territorio.',
        ],
      },
      {
        titolo: 'Incontrare la comunità',
        paragrafi: [
          'Sarà possibile parlare con i volontari, conoscere le attività del Comitato e scoprire come partecipare alla vita associativa.',
        ],
      },
    ],
  },
  {
    id: '18',
    slug: 'giornata-primo-soccorso-2024',
    title: 'Imparare il Primo Soccorso Può Fare la Differenza',
    description:
      'Volontari e cittadini insieme per una giornata dedicata alle manovre di primo soccorso in piazza.',
    categoryId: 'salute-prevenzione',
    publishedAt: '2024-10-11',
    imageUrl:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Una giornata dedicata alla prevenzione',
        paragrafi: [
          'Volontari e cittadini insieme per una giornata dedicata alla prevenzione e alle tecniche di primo soccorso.',
        ],
      },
      {
        titolo: 'Conoscere per intervenire',
        paragrafi: [
          'La diffusione della cultura del primo soccorso rappresenta uno strumento importante per una comunità più consapevole e preparata.',
        ],
      },
    ],
  },
  {
    id: '19',
    slug: 'raccolta-fondi-solidale-2024',
    title: 'Insieme per la Croce Rossa: Campagna Solidale',
    description:
      'Una nuova iniziativa solidale per sostenere i progetti del Comitato e l’acquisto di attrezzature sanitarie.',
    categoryId: 'raccolta-fondi',
    publishedAt: '2024-09-20',
    imageUrl:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Una nuova iniziativa solidale',
        paragrafi: [
          "Una nuova iniziativa solidale nasce con l'obiettivo di sostenere i progetti e le attività del Comitato.",
        ],
      },
      {
        titolo: 'Il valore della solidarietà',
        paragrafi: [
          'Ogni contributo permette di continuare a sviluppare iniziative rivolte alla popolazione e alle persone più fragili.',
        ],
      },
    ],
  },
  {
    id: '20',
    slug: 'festa-croce-rossa-rubiera-2024',
    title: 'Una Giornata Insieme alla Croce Rossa',
    description:
      'Una giornata di festa, incontri e attività dimostrative per conoscere da vicino il Comitato.',
    categoryId: 'open-day',
    publishedAt: '2024-07-12',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    contenuti: [
      {
        titolo: 'Una giornata dedicata alla comunità',
        paragrafi: [
          "Una giornata dedicata all'incontro con la cittadinanza e alla scoperta delle attività della Croce Rossa Italiana.",
        ],
      },
      {
        titolo: 'Incontrarsi e conoscersi',
        paragrafi: [
          'Volontari e cittadini hanno avuto la possibilità di trascorrere insieme una giornata ricca di attività.',
        ],
      },
    ],
  },
]
