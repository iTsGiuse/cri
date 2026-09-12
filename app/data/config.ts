/**
 * Configurazione globale del sito.
 *
 * Punto unico per i dati istituzionali e di contatto ripetuti in header,
 * footer, pagina di errore, metadati SEO e singoli componenti.
 *
 * Contiene solo dati statici: è quindi utilizzabile in sicurezza sia lato
 * server sia lato client, e viene importato anche da `nuxt.config.ts` per
 * popolare `site` e `runtimeConfig.public` senza riscrivere i valori.
 *
 * Qui NON vanno i testi editoriali di una singola pagina o componente.
 */

// Import relativo (e non `~/types`) perché questo file viene letto anche da
// `nuxt.config.ts`, dove gli alias Nuxt non sono ancora disponibili.
import type { SocialLink } from '../types'

/** Identità del sito: usata nei metadati e nei titoli. */
export const siteConfig = {
  name: 'Croce Rossa Italiana – Comitato di Rubiera',
  shortName: 'Croce Rossa Rubiera',
  description:
    'Croce Rossa Italiana – Comitato di Rubiera. Attività, volontariato, iniziative e informazioni sul Comitato.',
  url: 'https://rubiera.cri.it',
  locale: 'it_IT',
  language: 'it',
} as const

/** Dati dell'ente: denominazioni, identificativi fiscali e marchio. */
export const organizationConfig = {
  /** Nome dell'ente nazionale. */
  name: 'Croce Rossa Italiana',
  /** Comitato locale di riferimento. */
  committee: 'Comitato di Rubiera',
  /** Denominazione completa usata nelle diciture legali. */
  legalName: 'Croce Rossa Italiana - Comitato di Rubiera ODV',
  /** Codice fiscale del Comitato (usato anche per il 5×1000). */
  taxCode: '02605960356',
  vatNumber: '00000000000',
  sdiCode: '000000',

  logo: {
    imageUrl: '/images/logo.jpg',
    imageAlt: 'Croce Rossa Italiana - Comitato di Rubiera',
    /** Dimensioni native del file, servono a riservare lo spazio ed evitare CLS. */
    width: 445,
    height: 449,
  },
} as const

/** Recapiti del Comitato. */
export const contactConfig = {
  email: 'rubiera@cri.it',
  pec: 'comitato.rubiera@cert.cri.it',

  phone: {
    /** Numero come va mostrato a schermo. */
    label: '0522 620956',
    /** Numero in formato `tel:`. */
    value: '+390522620956',
  },

  /** Numero unico per le emergenze sanitarie. */
  emergencyNumber: '118',

  address: {
    street: 'Via Alcide De Gasperi 1/B',
    postalCode: '42048',
    city: 'Rubiera',
    province: 'RE',
    country: 'Italia',
    /** Indirizzo su una riga, come va mostrato a schermo. */
    label: 'Via Alcide De Gasperi 1/B - 42048 Rubiera (RE)',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Croce+Rossa+Italiana+Comitato+di+Rubiera',
  },
} as const

/** Profili social ufficiali. Le voci senza `url` vengono nascoste. */
export const socialConfig: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/CRIRubiera',
    icon: 'i-bi:facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/cri_rubiera',
    icon: 'i-bi:instagram',
  },
  {
    name: 'YouTube',
    url: '',
    icon: 'i-bi:youtube',
  },
]

/** Solo i profili effettivamente attivi. */
export const activeSocialLinks = socialConfig.filter(
  (link) => link.url.trim().length > 0,
)

/** Dicitura fiscale mostrata in fondo al footer. */
export const legalInfo = `C.F. e P.IVA ${organizationConfig.vatNumber} | Codice SDI: ${organizationConfig.sdiCode}`
