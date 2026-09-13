// app/data/campagne.ts
import type { Campagna, CategoriaComunicazione } from '~/types/comunicazioni'

export type NewsCategory = CategoriaComunicazione
export type NewsArticle = Campagna

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
    contenuti: [
      {
        titolo: 'Una responsabilità collettiva',
        paragrafi: [
          'La sicurezza stradale è una responsabilità collettiva. Il Comitato CRI di Rubiera promuove la campagna "Metti la Testa al Volante", rivolta in particolare ai neo-patentati e ai giovani automobilisti.',
        ],
      },
      {
        titolo: 'Gli Obiettivi della Campagna',
        paragrafi: [
          'Attraverso incontri nelle scuole e dimostrazioni in piazza con visori di simulazione dello stato di ebrezza, vogliamo mostrare concretamente come i tempi di reazione e la percezione del pericolo cambino radicalmente alcol alla mano.',
        ],
      },
      {
        titolo: 'I Dati sul Territorio',
        paragrafi: [
          'La distrazione e la velocita restano tra le primissime cause di incidente. Ricorda: prima di metterti al volante, designa sempre il Guidatore Designato (Bob) della serata.',
        ],
      },
    ],
    chiamataAzione: {
      titolo: 'Se guidi non bere, se bevi non guidare.',
      testo: 'Salva la tua vita e quella degli altri.',
    },
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
    contenuti: [
      {
        titolo: 'Il valore della donazione',
        paragrafi: [
          "Il sangue non si può fabbricare in laboratorio: l'unico modo per ottenerlo è la donazione volontaria, anonima e gratuita.",
        ],
      },
      {
        titolo: 'Perché Donare?',
        paragrafi: [
          'Ogni giorno centinaia di pazienti necessitano di trasfusioni per interventi chirurgici, terapie oncologiche o emergenze di primo soccorso. Donare richiede poco tempo ma garantisce un aiuto inestimabile.',
        ],
      },
      {
        titolo: 'Come Aderire',
        paragrafi: [
          'Tutti i cittadini in salute tra i 18 e i 65 anni possono richiedere la visita di idoneità presso i centri di raccolta del territorio.',
        ],
      },
    ],
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
    contenuti: [
      {
        titolo: 'Le parole hanno un peso reale',
        paragrafi: [
          'Le parole usate in rete hanno un peso reale. Il Gruppo Giovani della Croce Rossa di Rubiera lancia la campagna di sensibilizzazione "Oltre lo Schermo" per combattere l\'odio online e l\'isolamento sociale.',
        ],
      },
      {
        titolo: 'Le Attività Previste',
        paragrafi: [
          "Gli incontri prevedono role-playing, analisi di casi reali e discussioni aperte sul cyberbullismo, offrendo ai ragazzi strumenti utili per riconoscere le richieste d'aiuto dei propri coetanei.",
        ],
      },
    ],
  },
]
