<template>
  <ComunicazioneDettaglio
    :article="article"
    :related-articles="relatedArticles"
    :categories="newsCategories"
    :page-config="pageConfig"
  />
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { newsArticles, newsCategories } from '~/data/news'

const route = useRoute()

const pageConfig = {
  basePath: '/news',
  back: {
    label: 'Torna alle news',
    icon: 'i-bi:arrow-left',
    url: '/news',
  },
  meta: {
    categoryIcon: 'i-bi:tag-fill',
    dateIcon: 'i-bi:calendar-event',
    publishedLabel: 'Pubblicato il',
    dateLabel: 'Pubblicazione',
  },
  author: {
    label: 'Autore',
    icon: 'i-bi:person-fill',
    defaultAuthor: 'Croce Rossa Italiana – Comitato di Rubiera',
  },
  related: {
    eyebrow: 'Potrebbe interessarti',
    title: 'Altre news',
    allLabel: 'Tutte le news',
    allIcon: 'i-bi:arrow-right',
    openLabel: 'Apri la news',
    dateIcon: 'i-bi:calendar-event',
    readLabel: 'Leggi la news',
    readIcon: 'i-bi:arrow-right',
  },
}

const slug = computed(() => String(route.params.slug))

const article = computed(() => {
  const found = newsArticles.find((item) => item.slug === slug.value)
  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: 'News non trovata',
    })
  }
  return found
})

const relatedArticles = computed(() => {
  return newsArticles
    .filter((item) => item.id !== article.value.id && item.categoryId === article.value.categoryId)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
})

useSeoMeta({
  title: () => article.value.title,
  description: () => article.value.description,
  ogTitle: () => article.value.title,
  ogDescription: () => article.value.description,
  ogImage: () => article.value.imageUrl,
  twitterCard: 'summary_large_image',
})
</script>