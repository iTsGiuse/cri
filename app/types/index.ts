
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
