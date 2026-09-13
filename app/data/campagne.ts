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
  author?: string
  featured?: boolean
}

export const newsCategories: NewsCategory[] = [
  {
    id: 'sicurezza-stradale',
    name: 'Sicurezza Stradale',
  },
  {
    id: 'salute-stili-vita',
    name: 'Salute & Stili di Vita',
  },
  {
    id: 'inclusione-sociale',
    name: 'Inclusione Sociale',
  },
  {
    id: 'ambiente-clima',
    name: 'Ambiente & Clima',
  },
  {
    id: 'bullismo-cyberbullismo',
    name: 'Giovani & Digital',
  },
  {
    id: 'donazione-sangue',
    name: 'Donazione & Solidarietà',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'guida-sicura-non-rischiare-la-vita',
    title: 'Campagna "Metti la Testa al Volante": Zero Alcol alla Guida',
    description:
      'Iniziativa di sensibilizzazione sui rischi della guida sotto l’effetto di alcol e sostanze tra i giovani del territorio.',
    categoryId: 'sicurezza-stradale',
    publishedAt: '2026-09-01',
    featured: true,
    imageUrl:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        La sicurezza stradale è una responsabilità collettiva. Il Comitato CRI di Rubiera promuove la campagna 
        <strong>"Metti la Testa al Volante"</strong>, rivolta in particolare ai neo-patentati e ai giovani automobilisti.
      </p>

      <h2>Gli Obiettivi della Campagna</h2>
      <p>
        Attraverso incontri nelle scuole e dimostrazioni in piazza con visori di simulazione dello stato di ebrezza, 
        vogliamo mostrare concretamente come i tempi di reazione e la percezione del pericolo cambino radicalmente alcol alla mano.
      </p>

      <h2>I Dati sul Territorio</h2>
      <p>
        La distrazione e la velocita restano tra le primissime cause di incidente. Ricorda: prima di metterti al volante, 
        designa sempre il <em>Guidatore Designato (Bob)</em> della serata.
      </p>

      <div class="alert alert-danger border-0 rounded-4 mt-4">
        <strong>Se guidi non bere, se bevi non guidare.</strong> Salva la tua vita e quella degli altri.
      </div>
    `,
  },
  {
    id: '2',
    slug: 'donazione-sangue-plasma-rubiera-2026',
    title: 'Campagna "Donare è un Gesto Naturale": Diventa Donatore',
    description:
      'Sensibilizzazione sull’importanza della donazione periodica di sangue e plasma per far fronte alle esigenze sanitarie.',
    categoryId: 'donazione-sangue',
    publishedAt: '2026-06-14',
    imageUrl:
      'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Il sangue non si può fabbricare in laboratorio: l'unico modo per ottenerlo è la donazione volontaria, 
        anonima e gratuita.
      </p>

      <h2>Perché Donare?</h2>
      <p>
        Ogni giorno centinaia di pazienti necessitano di trasfusioni per interventi chirurgici, terapie oncologiche o emergenze 
        di primo soccorso. Donare richiede poco tempo ma garantisce un aiuto inestimabile.
      </p>

      <h2>Come Aderire</h2>
      <p>
        Tutti i cittadini in salute tra i 18 e i 65 anni possono richiedere la visita di idoneità presso i centri di raccolta del territorio.
      </p>
    `,
  },
  {
    id: '3',
    slug: 'stop-bullismo-cyberbullismo-scuole-2026',
    title: 'Campagna "Oltre lo Schermo": Prevenzione al Cyberbullismo',
    description:
      'Laboratori e incontri informativi nelle scuole secondarie per promuovere un uso consapevole dei social network.',
    categoryId: 'bullismo-cyberbullismo',
    publishedAt: '2026-02-10',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>
        Le parole usate in rete hanno un peso reale. Il Gruppo Giovani della Croce Rossa di Rubiera lancia la campagna 
        di sensibilizzazione <strong>"Oltre lo Schermo"</strong> per combattere l'odio online e l'isolamento sociale.
      </p>

      <h2>Le Attività Previste</h2>
      <p>
        Gli incontri prevedono role-playing, analisi di casi reali e discussioni aperte sul cyberbullismo, offrendo ai ragazzi 
        strumenti utili per riconoscere le richieste d'aiuto dei propri coetanei.
      </p>
    `,
  },
]