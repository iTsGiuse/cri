export interface NewsCategory {
  id: string
  name: string
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  description: string
  categoryId: string
  publishedAt: string
  imageUrl: string
  content: string
}

export const newsCategories: NewsCategory[] = [
  {
    id: 'associazione',
    name: 'Associazione',
  },
  {
    id: 'attivita',
    name: 'Attività',
  },
  {
    id: 'formazione',
    name: 'Formazione',
  },
  {
    id: 'eventi',
    name: 'Eventi',
  },
  {
    id: 'salute',
    name: 'Salute',
  },
  {
    id: 'sociale',
    name: 'Sociale',
  },
  {
    id: 'emergenza',
    name: 'Emergenza',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'corso-formazione-nuovi-volontari-2026',
    title: 'Al via il nuovo corso per diventare volontari',
    description:
      'Sono aperte le iscrizioni al nuovo corso di formazione per chi desidera entrare a far parte della Croce Rossa Italiana.',
    categoryId: 'formazione',
    publishedAt: '2026-09-08',
    imageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Entrare a far parte della Croce Rossa Italiana significa scegliere
        di dedicare tempo ed energie alla propria comunità, mettendo a
        disposizione degli altri competenze, entusiasmo e disponibilità.
      </p>

      <p>
        Il Comitato di Rubiera organizza un nuovo percorso di formazione
        dedicato a tutte le persone che desiderano conoscere più da vicino
        le attività della Croce Rossa e diventare volontari.
      </p>

      <h2>Un percorso per conoscere la Croce Rossa</h2>

      <p>
        Durante il corso verranno presentati i Principi Fondamentali della
        Croce Rossa, l'organizzazione del Movimento e le principali attività
        svolte dai volontari sul territorio.
      </p>

      <p>
        Il percorso rappresenta il primo passo per iniziare una nuova
        esperienza all'interno del Comitato e scoprire le numerose attività
        attraverso cui i volontari supportano la comunità.
      </p>

      <h2>Come partecipare</h2>

      <p>
        Le iscrizioni sono aperte. Per ricevere maggiori informazioni sulle
        modalità di partecipazione è possibile contattare il Comitato di
        Rubiera attraverso i consueti canali di comunicazione.
      </p>

      <div class="alert alert-danger border-0 rounded-4 mt-4">
        <strong>Vuoi diventare volontario?</strong>
        <br>
        Contatta il Comitato di Rubiera per conoscere le prossime date
        disponibili e tutte le informazioni sul percorso formativo.
      </div>
    `,
  },
  {
    id: '2',
    slug: 'giornata-mondiale-primo-soccorso-2026',
    title: 'Giornata Mondiale del Primo Soccorso',
    description:
      'Una giornata dedicata alla diffusione della cultura del primo soccorso con dimostrazioni e attività aperte alla cittadinanza.',
    categoryId: 'salute',
    publishedAt: '2026-09-05',
    imageUrl:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Conoscere alcune semplici manovre di primo soccorso può fare una
        grande differenza in una situazione di emergenza.
      </p>

      <p>
        In occasione della Giornata Mondiale del Primo Soccorso, i volontari
        del Comitato di Rubiera organizzano un momento di incontro aperto
        alla cittadinanza.
      </p>

      <h2>Imparare per essere pronti</h2>

      <p>
        L'obiettivo dell'iniziativa è avvicinare le persone alla cultura
        dell'emergenza e fornire indicazioni pratiche su come comportarsi
        nelle situazioni più comuni.
      </p>
    `,
  },
  {
    id: '3',
    slug: 'festa-associazioni-rubiera-2026',
    title: 'La Croce Rossa presente alla Festa delle Associazioni',
    description:
      'I nostri volontari saranno presenti per incontrare cittadini e famiglie e raccontare le attività del Comitato.',
    categoryId: 'eventi',
    publishedAt: '2026-08-28',
    imageUrl:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Anche quest'anno il Comitato di Rubiera partecipa alla Festa delle
        Associazioni, un appuntamento dedicato alle realtà associative
        presenti sul territorio.
      </p>

      <h2>Un'occasione per incontrarsi</h2>

      <p>
        Sarà possibile conoscere i nostri volontari, scoprire le attività
        del Comitato e ricevere informazioni sui percorsi per diventare
        volontario.
      </p>
    `,
  },
  {
    id: '4',
    slug: 'servizi-sanitari-estate-2026',
    title: 'Servizi sanitari e assistenza durante l’estate',
    description:
      'Prosegue anche durante i mesi estivi l’impegno dei volontari nei servizi di assistenza sanitaria sul territorio.',
    categoryId: 'attivita',
    publishedAt: '2026-08-12',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        L'estate rappresenta per il Comitato un periodo particolarmente
        intenso, con numerosi eventi e iniziative che richiedono la presenza
        dei nostri volontari.
      </p>

      <h2>La presenza sul territorio</h2>

      <p>
        Le squadre continuano a garantire i servizi programmati e il
        supporto alle iniziative organizzate sul territorio.
      </p>
    `,
  },
  {
    id: '5',
    slug: 'raccolta-alimentare-solidale-2026',
    title: 'Raccolta alimentare: insieme per aiutare chi ha bisogno',
    description:
      'I volontari partecipano alla nuova raccolta alimentare destinata alle famiglie del territorio in situazione di difficoltà.',
    categoryId: 'sociale',
    publishedAt: '2026-07-25',
    imageUrl:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        La solidarietà passa anche dai piccoli gesti. Il Comitato di Rubiera
        partecipa a una nuova raccolta di beni alimentari destinata alle
        persone e alle famiglie che si trovano in una situazione di
        difficoltà.
      </p>

      <h2>Un aiuto concreto</h2>

      <p>
        Grazie alla collaborazione tra volontari, cittadini e realtà del
        territorio è possibile trasformare una semplice donazione in un
        aiuto concreto per chi ne ha più bisogno.
      </p>
    `,
  },
  {
    id: '6',
    slug: 'esercitazione-emergenza-territoriale-2026',
    title: 'Esercitazione di emergenza sul territorio',
    description:
      'Una giornata di esercitazione dedicata alla gestione delle emergenze e al coordinamento delle squadre di volontari.',
    categoryId: 'emergenza',
    publishedAt: '2026-06-19',
    imageUrl:
      'https://images.unsplash.com/photo-1587745416684-47953e9f5c9a?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        La preparazione è uno degli elementi fondamentali nella gestione
        delle emergenze. Per questo motivo i volontari partecipano
        periodicamente a esercitazioni e attività formative.
      </p>

      <h2>Prepararsi all'emergenza</h2>

      <p>
        L'esercitazione ha permesso alle squadre di testare procedure,
        comunicazioni e modalità di coordinamento in uno scenario simulato.
      </p>
    `,
  },
  {
    id: '7',
    slug: 'nuovi-volontari-comitato-rubiera-2026',
    title: 'Benvenuti ai nuovi volontari del Comitato',
    description:
      'Un nuovo gruppo di volontari ha completato il percorso formativo ed è pronto a iniziare il proprio servizio.',
    categoryId: 'associazione',
    publishedAt: '2026-05-30',
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Un nuovo gruppo di volontari ha completato il percorso formativo
        organizzato dal Comitato di Rubiera.
      </p>

      <p>
        Per loro inizia ora una nuova esperienza fatta di servizio,
        formazione e impegno a favore della comunità.
      </p>
    `,
  },
  {
    id: '8',
    slug: 'manovre-salvavita-pediatriche-2026',
    title: 'Manovre salvavita pediatriche: nuovo incontro formativo',
    description:
      'Un appuntamento dedicato a genitori, educatori e cittadini per imparare come intervenire in caso di emergenza pediatrica.',
    categoryId: 'formazione',
    publishedAt: '2026-05-16',
    imageUrl:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Un incontro dedicato alla diffusione delle conoscenze sulle
        principali manovre salvavita pediatriche.
      </p>

      <h2>Formazione e prevenzione</h2>

      <p>
        L'iniziativa è rivolta a genitori, educatori e cittadini interessati
        ad acquisire maggiore consapevolezza nella gestione delle emergenze.
      </p>
    `,
  },
  {
    id: '9',
    slug: 'giornata-prevenzione-salute-2026',
    title: 'Una giornata dedicata alla prevenzione e alla salute',
    description:
      'Il Comitato organizza una giornata informativa dedicata alla prevenzione e ai corretti stili di vita.',
    categoryId: 'salute',
    publishedAt: '2026-04-18',
    imageUrl:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Il Comitato organizza una giornata dedicata alla prevenzione,
        all'informazione e alla promozione della salute.
      </p>

      <h2>Informare per prevenire</h2>

      <p>
        Attraverso incontri e momenti di confronto sarà possibile approfondire
        alcuni importanti temi legati alla salute e alla prevenzione.
      </p>
    `,
  },
  {
    id: '10',
    slug: 'assemblea-soci-2026',
    title: 'Assemblea dei soci del Comitato di Rubiera',
    description:
      'Si è svolta l’annuale assemblea dei soci della Croce Rossa Italiana – Comitato di Rubiera.',
    categoryId: 'associazione',
    publishedAt: '2026-03-28',
    imageUrl:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Si è svolta l'annuale assemblea dei soci della Croce Rossa Italiana –
        Comitato di Rubiera.
      </p>

      <p>
        L'assemblea rappresenta un importante momento di confronto sulla
        vita associativa e sulle attività svolte durante l'anno.
      </p>
    `,
  },
  {
    id: '11',
    slug: 'corso-volontari-autunno-2025',
    title: 'Aperte le iscrizioni al corso volontari autunnale',
    description:
      'Un nuovo percorso formativo per conoscere la Croce Rossa, i suoi principi e le attività svolte sul territorio.',
    categoryId: 'formazione',
    publishedAt: '2025-10-03',
    imageUrl:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Sono aperte le iscrizioni al nuovo corso per diventare volontari
        della Croce Rossa Italiana.
      </p>

      <h2>Un nuovo percorso</h2>

      <p>
        Il corso permette di conoscere i Principi Fondamentali della Croce
        Rossa e le attività svolte dai volontari.
      </p>
    `,
  },
  {
    id: '12',
    slug: 'raccolta-fondi-solidale-2025',
    title: 'Una raccolta fondi per sostenere le nostre attività',
    description:
      'Una nuova iniziativa solidale per sostenere i progetti del Comitato e le attività rivolte alla popolazione.',
    categoryId: 'sociale',
    publishedAt: '2025-09-20',
    imageUrl:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Una nuova iniziativa solidale nasce con l'obiettivo di sostenere
        i progetti e le attività del Comitato.
      </p>

      <h2>Il valore della solidarietà</h2>

      <p>
        Ogni contributo permette di continuare a sviluppare iniziative
        rivolte alla popolazione e alle persone più fragili.
      </p>
    `,
  },
  {
    id: '13',
    slug: 'festa-croce-rossa-rubiera-2025',
    title: 'Una giornata insieme alla Croce Rossa',
    description:
      'Una giornata di festa, incontri e attività per conoscere da vicino il mondo della Croce Rossa Italiana.',
    categoryId: 'eventi',
    publishedAt: '2025-07-12',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Una giornata dedicata all'incontro con la cittadinanza e alla
        scoperta delle attività della Croce Rossa Italiana.
      </p>

      <h2>Incontrarsi e conoscersi</h2>

      <p>
        Volontari e cittadini hanno avuto la possibilità di trascorrere
        insieme una giornata ricca di attività.
      </p>
    `,
  },
  {
    id: '14',
    slug: 'assistenza-eventi-estate-2025',
    title: 'Assistenza sanitaria agli eventi estivi',
    description:
      'I nostri volontari hanno garantito il servizio di assistenza sanitaria durante numerosi eventi sul territorio.',
    categoryId: 'attivita',
    publishedAt: '2025-06-28',
    imageUrl:
      'https://images.unsplash.com/photo-1580281658628-1b0d1b2e3b6f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Durante l'estate i volontari del Comitato hanno garantito la
        presenza sanitaria in occasione di numerosi eventi.
      </p>

      <h2>Servizio e presenza sul territorio</h2>

      <p>
        La presenza dei volontari permette di offrire supporto e assistenza
        durante le manifestazioni organizzate sul territorio.
      </p>
    `,
  },
  {
    id: '15',
    slug: 'formazione-primo-soccorso-aziende-2025',
    title: 'Formazione sul primo soccorso per le aziende',
    description:
      'Continua l’attività di formazione rivolta alle aziende e ai lavoratori del territorio.',
    categoryId: 'formazione',
    publishedAt: '2025-05-14',
    imageUrl:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Continua l'attività di formazione sul primo soccorso rivolta alle
        aziende e ai lavoratori del territorio.
      </p>

      <h2>La formazione come strumento di prevenzione</h2>

      <p>
        Conoscere le corrette procedure da adottare in caso di emergenza
        permette di intervenire in maniera tempestiva e consapevole.
      </p>
    `,
  },
  {
    id: '16',
    slug: 'emergenza-maltempo-2025',
    title: 'Volontari impegnati nell’emergenza maltempo',
    description:
      'I volontari del Comitato sono stati impegnati nelle attività di supporto alla popolazione durante l’emergenza.',
    categoryId: 'emergenza',
    publishedAt: '2025-03-07',
    imageUrl:
      'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        I volontari del Comitato sono stati impegnati nelle attività di
        supporto alla popolazione durante l'emergenza maltempo.
      </p>

      <h2>Al fianco della comunità</h2>

      <p>
        Le squadre hanno collaborato nelle attività di assistenza e supporto
        alle persone coinvolte.
      </p>
    `,
  },
  {
    id: '17',
    slug: 'nuovo-anno-nuove-attivita-2024',
    title: 'Un nuovo anno ricco di attività e progetti',
    description:
      'Il Comitato presenta il programma delle principali attività e iniziative previste per il nuovo anno.',
    categoryId: 'associazione',
    publishedAt: '2024-12-18',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Il Comitato presenta il programma delle principali attività e
        iniziative previste per il nuovo anno.
      </p>

      <h2>Nuovi progetti</h2>

      <p>
        Il nuovo anno sarà caratterizzato da numerose iniziative dedicate
        alla comunità e alla formazione dei volontari.
      </p>
    `,
  },
  {
    id: '18',
    slug: 'giornata-primo-soccorso-2024',
    title: 'Imparare il primo soccorso può fare la differenza',
    description:
      'Volontari e cittadini insieme per una giornata dedicata alla prevenzione e alle tecniche di primo soccorso.',
    categoryId: 'salute',
    publishedAt: '2024-10-11',
    imageUrl:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Volontari e cittadini insieme per una giornata dedicata alla
        prevenzione e alle tecniche di primo soccorso.
      </p>

      <h2>Conoscere per intervenire</h2>

      <p>
        La diffusione della cultura del primo soccorso rappresenta uno
        strumento importante per una comunità più consapevole e preparata.
      </p>
    `,
  },
  {
    id: '19',
    slug: 'raccolta-alimentare-natale-2024',
    title: 'A Natale doniamo un aiuto concreto',
    description:
      'Una raccolta di beni di prima necessità per sostenere le persone e le famiglie più fragili del territorio.',
    categoryId: 'sociale',
    publishedAt: '2024-12-07',
    imageUrl:
      'https://images.unsplash.com/photo-1606913079621-e64f2a0b7c75?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Una raccolta di beni di prima necessità per sostenere le persone
        e le famiglie più fragili del territorio.
      </p>

      <h2>La solidarietà durante le feste</h2>

      <p>
        Grazie alla collaborazione tra cittadini e volontari è possibile
        offrire un aiuto concreto alle famiglie che ne hanno bisogno.
      </p>
    `,
  },
  {
    id: '20',
    slug: 'volontari-in-piazza-2024',
    title: 'La Croce Rossa torna in piazza',
    description:
      'Un’occasione per incontrare la cittadinanza, presentare le nostre attività e parlare dei principi della Croce Rossa.',
    categoryId: 'eventi',
    publishedAt: '2024-09-21',
    imageUrl:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        La Croce Rossa torna in piazza per incontrare la cittadinanza e
        presentare le proprie attività.
      </p>

      <h2>Incontrare la comunità</h2>

      <p>
        Sarà possibile parlare con i volontari, conoscere le attività del
        Comitato e scoprire come partecipare alla vita associativa.
      </p>
    `,
  },
]
