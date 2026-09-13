// app/types/comunicazioni.ts
//
// Modello dati condiviso per il contenuto editoriale di news, eventi e
// campagne. Il contenuto è puro dato strutturato: nessun markup HTML.
// La struttura HTML (h1, h2, p, article, section...) è generata
// esclusivamente dal componente ComunicazioneDettaglio, mai dai dati.

/** Una categoria di comunicazione (badge e filtro nell'elenco). */
export interface CategoriaComunicazione {
  id: string
  name: string
}

/**
 * Una sezione di contenuto. Genera automaticamente un <h2> con `titolo`
 * e un <p> per ogni voce di `paragrafi`. L'autore dei dati non sceglie
 * mai il tag HTML da usare: se ne occupa il componente di presentazione.
 */
export interface SezioneComunicazione {
  titolo: string
  paragrafi: string[]
  /** Elenco puntato opzionale, mostrato al termine della sezione. */
  elenco?: string[]
}

/** Riquadro di call to action opzionale, mostrato al termine dell'articolo. */
export interface ChiamataAzione {
  titolo: string
  testo: string
}

/**
 * Modello base condiviso da news, eventi e campagne. Se in futuro una di
 * queste tipologie avrà bisogno di dati propri (es. data/luogo di un
 * evento), va estesa qui sotto senza duplicare i campi comuni.
 */
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
