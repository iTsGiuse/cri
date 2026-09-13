// app/data/config.ts
import type { SocialLink } from '../types'
import type { OrarioApertura } from '../types/contenuti'

export const siteConfig = {
  name: 'Croce Rossa Italiana – Comitato di Rubiera',
  shortName: 'Croce Rossa Rubiera',
  description:
    'Attività, volontariato, iniziative e informazioni sul Comitato.',
  url: 'https://rubiera.cri.it',
  locale: 'it_IT',
  language: 'it',
} as const

export const organizationConfig = {

  name: 'Croce Rossa Italiana',

  committee: 'Comitato di Rubiera',

  legalName: 'Croce Rossa Italiana - Comitato di Rubiera ODV',

  taxCode: '02605960356',
  vatNumber: '00000000000',
  sdiCode: '000000',

  logo: {
    imageUrl: '/images/logo.jpg',
    imageAlt: 'Croce Rossa Italiana - Comitato di Rubiera',

    width: 445,
    height: 449,
  },
} as const

export const contactConfig = {
  email: 'rubiera@cri.it',
  pec: 'comitato.rubiera@cert.cri.it',

  phone: {

    label: '0522 620956',

    value: '+390522620956',
  },

  emergencyNumber: '118',

  address: {
    street: 'Via Alcide De Gasperi 1/B',
    postalCode: '42048',
    city: 'Rubiera',
    province: 'RE',
    country: 'Italia',

    label: 'Via Alcide De Gasperi 1/B - 42048 Rubiera (RE)',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Croce+Rossa+Italiana+Comitato+di+Rubiera',
  },
} as const

// DA VERIFICARE con il Comitato prima della pubblicazione.
export const orariConfig: OrarioApertura[] = [
  { giorni: 'Lunedì – Venerdì', orario: '09:00 – 12:00' },
  { giorni: 'Sabato e festivi', orario: 'Solo servizi programmati' },
]

// Gli ID Iubenda popolano le pagine privacy e cookie policy.
// Finché sono vuoti le relative voci non vengono mostrate nel footer.
export const legaleConfig = {
  iubendaSiteId: '',
  iubendaCookiePolicyId: '',
  iubendaPrivacyPolicyId: '',
} as const

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
    name: 'Tiktok',
    url: 'https://www.tiktok.com/@cri_rubiera',
    icon: 'i-bi:tiktok',
  },
]

export const activeSocialLinks = socialConfig.filter(
  (link) => link.url.trim().length > 0,
)

export const legalInfo = `C.F. e P.IVA ${organizationConfig.vatNumber} | Codice SDI: ${organizationConfig.sdiCode}`
