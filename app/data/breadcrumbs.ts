export interface BreadcrumbLabel {
  label: string
  icon: string
}

export const breadcrumbLabels: Record<string, BreadcrumbLabel> = {
  'chi-siamo': {
    label: 'Chi siamo',
    icon: 'i-bi:people-fill',
  },
  'il-comitato': {
    label: 'Il Comitato',
    icon: 'i-bi:building-fill',
  },
  storia: {
    label: 'La nostra storia',
    icon: 'i-bi:clock-history',
  },
  organizzazione: {
    label: 'Organizzazione e governance',
    icon: 'i-bi:diagram-3-fill',
  },
  'principi-e-valori': {
    label: 'Principi e valori',
    icon: 'i-bi:heart-fill',
  },
  trasparenza: {
    label: 'Trasparenza e documenti',
    icon: 'i-bi:file-earmark-text-fill',
  },
  'sede-e-contatti': {
    label: 'Sede e contatti',
    icon: 'i-bi:geo-alt-fill',
  },
  'cosa-facciamo': {
    label: 'Cosa facciamo',
    icon: 'i-bi:activity',
  },
  salute: {
    label: 'Salute e Prevenzione',
    icon: 'i-bi:heart-pulse-fill',
  },
  sociale: {
    label: 'Sociale e Inclusione',
    icon: 'i-bi:people-fill',
  },
  'protezione-civile': {
    label: 'Emergenza e Protezione Civile',
    icon: 'i-bi:shield-fill-check',
  },
  'diritto-umanitario': {
    label: 'Principi e Diritto Umanitario',
    icon: 'i-bi:book-fill',
  },
  giovani: {
    label: 'Giovani',
    icon: 'i-bi:person-hearts',
  },
  sviluppo: {
    label: 'Sviluppo e Comunicazione',
    icon: 'i-bi:graph-up-arrow',
  },
  servizi: {
    label: 'Servizi',
    icon: 'i-bi:grid-fill',
  },
  'emergenza-118': {
    label: 'Emergenza e Soccorso 118 / 112',
    icon: 'i-bi:exclamation-triangle-fill',
  },
  'richiedi-trasporto': {
    label: 'Richiedi un trasporto sanitario',
    icon: 'i-bi:truck-front-fill',
  },
  'assistenza-eventi': {
    label: 'Assistenza sanitaria a manifestazioni',
    icon: 'i-bi:hospital-fill',
  },
  'corsi-popolazione': {
    label: 'Corsi per la popolazione',
    icon: 'i-bi:mortarboard-fill',
  },
  'corsi-aziende': {
    label: 'Corsi aziendali (D.Lgs 81/08)',
    icon: 'i-bi:briefcase-fill',
  },
  'supporto-sociale': {
    label: 'Supporto sociale e assistenza',
    icon: 'i-bi:house-heart-fill',
  },
  'prenotazioni-e-informazioni': {
    label: 'Prenotazioni e informazioni',
    icon: 'i-bi:calendar-check-fill',
  },
  volontariato: {
    label: 'Volontariato',
    icon: 'i-bi:person-plus-fill',
  },
  'diventa-volontario': {
    label: 'Diventa volontario',
    icon: 'i-bi:person-plus-fill',
  },
  'corso-di-accesso': {
    label: 'Come funziona il corso di accesso',
    icon: 'i-bi:info-circle-fill',
  },
  'percorso-formativo': {
    label: 'Percorso formativo e qualifiche',
    icon: 'i-bi:mortarboard-fill',
  },
  'attivita-e-gruppi': {
    label: 'Attività e gruppi di lavoro',
    icon: 'i-bi:people-fill',
  },
  news: {
    label: 'News',
    icon: 'i-bi:newspaper',
  },
  eventi: {
    label: 'Eventi',
    icon: 'i-bi:calendar-event-fill',
  },
  campagne: {
    label: 'Campagne di sensibilizzazione',
    icon: 'i-bi:megaphone-fill',
  },
  faq: {
    label: 'FAQ',
    icon: 'i-bi:question-circle-fill',
  },
  'servizi-e-trasporti': {
    label: 'Trasporti e Servizi Sanitari',
    icon: 'i-bi:truck-front-fill',
  },
  'corsi-formazione': {
    label: 'Corsi di Formazione',
    icon: 'i-bi:mortarboard-fill',
  },
  donazioni: {
    label: 'Donazioni e 5x1000',
    icon: 'i-bi:piggy-bank-fill',
  },
  dona: {
    label: 'Dona ora',
    icon: 'i-bi:heart-fill',
  },
  contatti: {
    label: 'Contatti',
    icon: 'i-bi:envelope-fill',
  },
}

export const nonClickableSegments: string[] = [
  'chi-siamo',
  'cosa-facciamo',
  'servizi',
  'volontariato',
  'faq',
]