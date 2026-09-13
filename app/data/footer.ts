// app/data/footer.ts
//
// Gruppi di navigazione del footer. Solo pagine realmente esistenti nel
// sito: se una voce non corrisponde a una rotta reale non va inserita qui.
import type { GruppoNavigazione } from '~/types'

export const footerGruppiNavigazione: GruppoNavigazione[] = [
  {
    titolo: 'Il Comitato',
    link: [
      { label: 'Comitato e Contatti', url: '/chi-siamo/comitato-e-contatti' },
      { label: 'La nostra storia', url: '/chi-siamo/storia' },
      { label: 'Organizzazione e Governance', url: '/chi-siamo/organizzazione' },
      { label: 'Principi e Valori', url: '/chi-siamo/principi-e-valori' },
      { label: 'Trasparenza e Documenti', url: '/chi-siamo/trasparenza' },
    ],
  },
  {
    titolo: 'Partecipa',
    link: [
      { label: 'Diventa volontario', url: '/volontariato/diventa-volontario' },
      { label: 'Percorso formativo e qualifiche', url: '/volontariato/percorso-formativo' },
      { label: 'Consulta gli eventi', url: '/eventi' },
      { label: 'Scopri le campagne di sensibilizzazione', url: '/campagne' },
      { label: 'Sostieni il Comitato', url: '/dona' },
    ],
  },
  {
    titolo: 'Servizi e Attività',
    link: [
      { label: 'Emergenza e Soccorso 118 / 112', url: '/servizi/emergenza-118' },
      { label: 'Richiedi un trasporto sanitario', url: '/servizi/richiedi-trasporto' },
      { label: 'Assistenza sanitaria a manifestazioni', url: '/servizi/assistenza-eventi' },
      { label: 'Corsi per la popolazione', url: '/servizi/corsi-popolazione' },
      { label: 'Corsi aziendali (D.Lgs 81/08)', url: '/servizi/corsi-aziende' },
      { label: 'Supporto sociale e assistenza', url: '/servizi/supporto-sociale' },
    ],
  },
]
