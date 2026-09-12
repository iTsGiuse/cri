/**
 * Tipi condivisi da più componenti.
 *
 * Qui stanno solo le forme dati realmente riutilizzate: i tipi specifici di
 * un singolo componente restano nel componente stesso.
 */

/** Profilo social dell'organizzazione. */
export interface SocialLink {
  /** Nome della rete (Facebook, Instagram, ...), usato anche come etichetta accessibile. */
  name: string
  url: string
  icon: string
}

/** Pulsante/collegamento di invito all'azione. */
export interface CtaLink {
  label: string
  url: string
  icon?: string
}

/** Voce di navigazione, eventualmente con sottovoci. */
export interface NavLink {
  label: string
  url?: string
  icon?: string
  /** true quando il collegamento punta fuori dal sito. */
  external?: boolean
  children?: NavLink[]
}
