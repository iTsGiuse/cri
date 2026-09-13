import type { MaybeRefOrGetter } from 'vue'
import { siteConfig } from '~/data/config'
import { seoPerPercorso } from '~/data/pagine'
import type { SeoPagina } from '~/types/contenuti'

const sezioniPerSegmento: Record<string, string> = {
  'chi-siamo': 'Chi siamo',
  'cosa-facciamo': 'Cosa facciamo',
  'servizi': 'Servizi',
  'volontariato': 'Volontariato',
  'news': 'Notizie',
  'eventi': 'Eventi',
  'campagne': 'Campagne di sensibilizzazione',
  'faq': 'Domande frequenti',
  'dona': 'Sostienici',
}

export function useSeoPagina(personalizzazione?: MaybeRefOrGetter<Partial<SeoPagina>>) {
  const route = useRoute()

  const seo = computed<SeoPagina>(() => {
    const base = seoPerPercorso[route.path]
    const extra = toValue(personalizzazione) ?? {}

    return {
      titolo: extra.titolo ?? base?.titolo ?? siteConfig.name,
      descrizione: extra.descrizione ?? base?.descrizione ?? siteConfig.description,
      keywords: extra.keywords ?? base?.keywords,
      immagine: extra.immagine ?? base?.immagine,
      tipo: extra.tipo ?? base?.tipo ?? 'website',
      noindex: extra.noindex ?? base?.noindex,
    }
  })

  const urlCanonico = computed(
    () => `${siteConfig.url}${route.path === '/' ? '' : route.path}`,
  )

  const sezione = computed(() => {
    const primoSegmento = route.path.split('/').filter(Boolean)[0] ?? ''
    return sezioniPerSegmento[primoSegmento] ?? ''
  })

  useSeoMeta({
    title: () => seo.value.titolo,
    description: () => seo.value.descrizione,
    ogTitle: () => seo.value.titolo,
    ogDescription: () => seo.value.descrizione,
    ogType: () => seo.value.tipo,
    ogUrl: () => urlCanonico.value,
    ogLocale: siteConfig.locale,
    twitterTitle: () => seo.value.titolo,
    twitterDescription: () => seo.value.descrizione,
    twitterCard: 'summary_large_image',
    keywords: () => seo.value.keywords?.join(', '),
    robots: () => (seo.value.noindex ? 'noindex, follow' : undefined),
  })

  if (seo.value.immagine) {
    useSeoMeta({
      ogImage: () => seo.value.immagine,
      ogImageAlt: () => seo.value.titolo,
      twitterImage: () => seo.value.immagine,
      twitterImageAlt: () => seo.value.titolo,
    })
  } else {
    defineOgImage('SocialCri', {
      titolo: seo.value.titolo,
      descrizione: seo.value.descrizione,
      sezione: sezione.value,
      marchio: siteConfig.name,
      sito: siteConfig.url.replace(/^https?:\/\//, ''),
    }, { width: 1200, height: 630 })
  }

  useHead({
    link: [{ rel: 'canonical', href: () => urlCanonico.value }],
  })

  return seo
}
