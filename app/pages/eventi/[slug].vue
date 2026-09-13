<template>
  <ComunicazioneDettaglio
    :article="article"
    :related-articles="relatedArticles"
    :categories="eventCategories"
    :page-config="pageConfig"
  />
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { newsArticles as eventArticles, newsCategories as eventCategories } from '~/data/eventi'

const route = useRoute()

const pageConfig = {
  basePath: '/eventi',
  back: {
    label: 'Torna agli eventi',
    icon: 'i-bi:arrow-left',
    url: '/eventi',
  },
  meta: {
    categoryIcon: 'i-bi:tag-fill',
    dateIcon: 'i-bi:calendar-event',
    publishedLabel: 'Data evento',
    dateLabel: 'Data svolgimento',
  },
  author: {
    label: 'Organizzatore',
    icon: 'i-bi:person-fill',
    defaultAuthor: 'Croce Rossa Italiana – Comitato di Rubiera',
  },
  related: {
    eyebrow: 'Prossimi appuntamenti',
    title: 'Altri eventi correlati',
    allLabel: 'Tutti gli eventi',
    allIcon: 'i-bi:arrow-right',
    openLabel: 'Apri evento',
    dateIcon: 'i-bi:calendar-event',
    readLabel: 'Dettagli evento',
    readIcon: 'i-bi:arrow-right',
  },
}

const slug = computed(() => String(route.params.slug))

const article = computed(() => {
  const found = eventArticles.find((item) => item.slug === slug.value)
  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Evento non trovato',
    })
  }
  return found
})

const relatedArticles = computed(() => {
  return eventArticles
    .filter((item) => item.id !== article.value.id && item.categoryId === article.value.categoryId)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
})

useSeoMeta({
  title: () => `${article.value.title} | ${siteConfig.shortName}`,
  description: () => article.value.description,
  ogTitle: () => article.value.title,
  ogDescription: () => article.value.description,
  ogImage: () => article.value.imageUrl,
  twitterCard: 'summary_large_image',
})
</script>