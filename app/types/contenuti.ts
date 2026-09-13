export interface SeoPagina {
  titolo: string
  descrizione: string
  keywords?: string[]
  immagine?: string
  tipo?: 'website' | 'article'
  noindex?: boolean
}

export interface ContenutoPagina {
  percorso: string
  seo: SeoPagina
}

export interface OrarioApertura {
  giorni: string
  orario: string
}
