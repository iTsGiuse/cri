import { siteConfig } from '~/data/config'
import { seoPerPercorso } from '~/data/pagine'
import type { SeoPagina } from '~/types/contenuti'

export function useSeoPagina(override?: Partial<SeoPagina>) {
  const route = useRoute()
  const seoBase = seoPerPercorso[route.path]

  const seo: SeoPagina = {
    titolo: override?.titolo ?? seoBase?.titolo ?? siteConfig.name,
    descrizione:
      override?.descrizione ?? seoBase?.descrizione ?? siteConfig.description,
    keywords: override?.keywords ?? seoBase?.keywords,
    immagine: override?.immagine ?? seoBase?.immagine,
    tipo: override?.tipo ?? seoBase?.tipo ?? 'website',
    noindex: override?.noindex ?? seoBase?.noindex,
  }

  const urlCanonico = `${siteConfig.url}${route.path === '/' ? '' : route.path}`

  useSeoMeta({
    title: seo.titolo,
    description: seo.descrizione,
    ogTitle: seo.titolo,
    ogDescription: seo.descrizione,
    ogType: seo.tipo,
    ogUrl: urlCanonico,
    ogLocale: siteConfig.locale,
    ...(seo.immagine ? { ogImage: seo.immagine, twitterImage: seo.immagine } : {}),
    twitterTitle: seo.titolo,
    twitterDescription: seo.descrizione,
    twitterCard: 'summary_large_image',
    ...(seo.keywords?.length ? { keywords: seo.keywords.join(', ') } : {}),
    ...(seo.noindex ? { robots: 'noindex, follow' } : {}),
  })

  useHead({
    link: [{ rel: 'canonical', href: urlCanonico }],
  })

  return seo
}
