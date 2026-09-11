export interface Categoria {
    id: string
    nome: string
  }
  
  export interface Articolo {
    id: string
    slug: string
    titolo: string
    descrizione: string
    categoriaId: string
    dataPubblicazione: string
    immagine: string
    contenuto: string
  }
  
  export const categorie: Categoria[] = [
    {
      id: 'associazione',
      nome: 'Associazione',
    },
    {
      id: 'attivita',
      nome: 'Attività',
    },
    {
      id: 'formazione',
      nome: 'Formazione',
    },
    {
      id: 'eventi',
      nome: 'Eventi',
    },
    {
      id: 'salute',
      nome: 'Salute',
    },
    {
      id: 'sociale',
      nome: 'Sociale',
    },
    {
      id: 'emergenza',
      nome: 'Emergenza',
    },
  ]
  
  export const articoli: Articolo[] = [
    {
      id: '1',
      slug: 'corso-formazione-nuovi-volontari-2026',
      titolo: 'Al via il nuovo corso per diventare volontari',
      descrizione:
        'Sono aperte le iscrizioni al nuovo corso di formazione per chi desidera entrare a far parte della Croce Rossa Italiana.',
      categoriaId: 'formazione',
      dataPubblicazione: '2026-09-08',
      immagine: '/images/news/formazione-volontari.jpg',
      contenuto: `
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
      titolo: 'Giornata Mondiale del Primo Soccorso',
      descrizione:
        'Una giornata dedicata alla diffusione della cultura del primo soccorso con dimostrazioni e attività aperte alla cittadinanza.',
      categoriaId: 'salute',
      dataPubblicazione: '2026-09-05',
      immagine: '/images/news/primo-soccorso.jpg',
      contenuto: `
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
      titolo: 'La Croce Rossa presente alla Festa delle Associazioni',
      descrizione:
        'I nostri volontari saranno presenti per incontrare cittadini e famiglie e raccontare le attività del Comitato.',
      categoriaId: 'eventi',
      dataPubblicazione: '2026-08-28',
      immagine: '/images/news/festa-associazioni.jpg',
      contenuto: `
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
      titolo: 'Servizi sanitari e assistenza durante l’estate',
      descrizione:
        'Prosegue anche durante i mesi estivi l’impegno dei volontari nei servizi di assistenza sanitaria sul territorio.',
      categoriaId: 'attivita',
      dataPubblicazione: '2026-08-12',
      immagine: '/images/news/servizi-sanitari.jpg',
      contenuto: `
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
      titolo: 'Raccolta alimentare: insieme per aiutare chi ha bisogno',
      descrizione:
        'I volontari partecipano alla nuova raccolta alimentare destinata alle famiglie del territorio in situazione di difficoltà.',
      categoriaId: 'sociale',
      dataPubblicazione: '2026-07-25',
      immagine: '/images/news/raccolta-alimentare.jpg',
      contenuto: `
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
      titolo: 'Esercitazione di emergenza sul territorio',
      descrizione:
        'Una giornata di esercitazione dedicata alla gestione delle emergenze e al coordinamento delle squadre di volontari.',
      categoriaId: 'emergenza',
      dataPubblicazione: '2026-06-19',
      immagine: '/images/news/esercitazione.jpg',
      contenuto: `
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
      titolo: 'Benvenuti ai nuovi volontari del Comitato',
      descrizione:
        'Un nuovo gruppo di volontari ha completato il percorso formativo ed è pronto a iniziare il proprio servizio.',
      categoriaId: 'associazione',
      dataPubblicazione: '2026-05-30',
      immagine: '/images/news/nuovi-volontari.jpg',
      contenuto: `
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
      titolo: 'Manovre salvavita pediatriche: nuovo incontro formativo',
      descrizione:
        'Un appuntamento dedicato a genitori, educatori e cittadini per imparare come intervenire in caso di emergenza pediatrica.',
      categoriaId: 'formazione',
      dataPubblicazione: '2026-05-16',
      immagine: '/images/news/manovre-pediatriche.jpg',
      contenuto: `
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
      titolo: 'Una giornata dedicata alla prevenzione e alla salute',
      descrizione:
        'Il Comitato organizza una giornata informativa dedicata alla prevenzione e ai corretti stili di vita.',
      categoriaId: 'salute',
      dataPubblicazione: '2026-04-18',
      immagine: '/images/news/prevenzione.jpg',
      contenuto: `
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
      titolo: 'Assemblea dei soci del Comitato di Rubiera',
      descrizione:
        'Si è svolta l’annuale assemblea dei soci della Croce Rossa Italiana – Comitato di Rubiera.',
      categoriaId: 'associazione',
      dataPubblicazione: '2026-03-28',
      immagine: '/images/news/assemblea.jpg',
      contenuto: `
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
      titolo: 'Aperte le iscrizioni al corso volontari autunnale',
      descrizione:
        'Un nuovo percorso formativo per conoscere la Croce Rossa, i suoi principi e le attività svolte sul territorio.',
      categoriaId: 'formazione',
      dataPubblicazione: '2025-10-03',
      immagine: '/images/news/corso-autunno.jpg',
      contenuto: `
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
      titolo: 'Una raccolta fondi per sostenere le nostre attività',
      descrizione:
        'Una nuova iniziativa solidale per sostenere i progetti del Comitato e le attività rivolte alla popolazione.',
      categoriaId: 'sociale',
      dataPubblicazione: '2025-09-20',
      immagine: '/images/news/raccolta-fondi.jpg',
      contenuto: `
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
      titolo: 'Una giornata insieme alla Croce Rossa',
      descrizione:
        'Una giornata di festa, incontri e attività per conoscere da vicino il mondo della Croce Rossa Italiana.',
      categoriaId: 'eventi',
      dataPubblicazione: '2025-07-12',
      immagine: '/images/news/festa-cri.jpg',
      contenuto: `
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
      titolo: 'Assistenza sanitaria agli eventi estivi',
      descrizione:
        'I nostri volontari hanno garantito il servizio di assistenza sanitaria durante numerosi eventi sul territorio.',
      categoriaId: 'attivita',
      dataPubblicazione: '2025-06-28',
      immagine: '/images/news/assistenza-eventi.jpg',
      contenuto: `
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
      titolo: 'Formazione sul primo soccorso per le aziende',
      descrizione:
        'Continua l’attività di formazione rivolta alle aziende e ai lavoratori del territorio.',
      categoriaId: 'formazione',
      dataPubblicazione: '2025-05-14',
      immagine: '/images/news/formazione-aziende.jpg',
      contenuto: `
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
      titolo: 'Volontari impegnati nell’emergenza maltempo',
      descrizione:
        'I volontari del Comitato sono stati impegnati nelle attività di supporto alla popolazione durante l’emergenza.',
      categoriaId: 'emergenza',
      dataPubblicazione: '2025-03-07',
      immagine: '/images/news/maltempo.jpg',
      contenuto: `
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
      titolo: 'Un nuovo anno ricco di attività e progetti',
      descrizione:
        'Il Comitato presenta il programma delle principali attività e iniziative previste per il nuovo anno.',
      categoriaId: 'associazione',
      dataPubblicazione: '2024-12-18',
      immagine: '/images/news/nuovo-anno.jpg',
      contenuto: `
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
      titolo: 'Imparare il primo soccorso può fare la differenza',
      descrizione:
        'Volontari e cittadini insieme per una giornata dedicata alla prevenzione e alle tecniche di primo soccorso.',
      categoriaId: 'salute',
      dataPubblicazione: '2024-10-11',
      immagine: '/images/news/primo-soccorso-2024.jpg',
      contenuto: `
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
      titolo: 'A Natale doniamo un aiuto concreto',
      descrizione:
        'Una raccolta di beni di prima necessità per sostenere le persone e le famiglie più fragili del territorio.',
      categoriaId: 'sociale',
      dataPubblicazione: '2024-12-07',
      immagine: '/images/news/natale-solidale.jpg',
      contenuto: `
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
      titolo: 'La Croce Rossa torna in piazza',
      descrizione:
        'Un’occasione per incontrare la cittadinanza, presentare le nostre attività e parlare dei principi della Croce Rossa.',
      categoriaId: 'eventi',
      dataPubblicazione: '2024-09-21',
      immagine: '/images/news/volontari-piazza.jpg',
      contenuto: `
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