export interface CategoriaComunicazione {
  id: string
  name: string
}

export interface SezioneComunicazione {
  titolo: string
  paragrafi: string[]
  elenco?: string[]
}

export interface ChiamataAzione {
  titolo: string
  testo: string
}

export interface ComunicazioneBase {
  id: string
  slug: string
  title: string
  description: string
  categoryId: string
  publishedAt: string
  imageUrl: string
  contenuti: SezioneComunicazione[]
  chiamataAzione?: ChiamataAzione
  author?: string
  featured?: boolean
}

export type Notizia = ComunicazioneBase
export type Evento = ComunicazioneBase
export type Campagna = ComunicazioneBase
