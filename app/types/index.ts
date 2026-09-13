
export interface SocialLink {

  name: string
  url: string
  icon: string
}

export interface CtaLink {
  label: string
  url: string
  icon?: string
}

export interface NavLink {
  label: string
  url?: string
  icon?: string

  external?: boolean
  children?: NavLink[]
}

export interface LinkNavigazione {
  label: string
  url: string
  external?: boolean
}

/** Un gruppo di link di navigazione (es. una colonna del footer). */
export interface GruppoNavigazione {
  titolo: string
  link: LinkNavigazione[]
}
