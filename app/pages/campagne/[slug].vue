<template>
  <ComunicazioneDettaglio
    :article="article"
    :related-articles="relatedArticles"
    :categories="campagneCategories"
    :page-config="pageConfig"
  />
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { newsArticles as campagneArticles, newsCategories as campagneCategories } from '~/data/campagne'

const route = useRoute()

const pageConfig = {
  basePath: '/campagne',
  back: {
    label: 'Torna alle campagne',
    icon: 'i-bi:arrow-left',
    url: '/campagne',
  },
  meta: {
    categoryIcon: 'i-bi:tag-fill',
    dateIcon: 'i-bi:calendar-event',
    publishedLabel: 'Lanciata il',
    dateLabel: 'Data di lancio',
  },
  author: {
    label: 'Promotore',
    icon: 'i-bi:person-fill',
    defaultAuthor: 'Croce Rossa Italiana – Comitato di Rubiera',
  },
  related: {
    eyebrow: 'Iniziative Correlate',
    title: 'Altre campagne',
    allLabel: 'Tutte le campagne',
    allIcon: 'i-bi:arrow-right',
    openLabel: 'Apri campagna',
    dateIcon: 'i-bi:calendar-event',
    readLabel: 'Leggi la campagna',
    readIcon: 'i-bi:arrow-right',
  },
}

const slug = computed(() => String(route.params.slug))

const article = computed(() => {
  const found = campagneArticles.find((item) => item.slug === slug.value)
  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Campagna non trovata',
    })
  }
  return found
})

const relatedArticles = computed(() => {
  return campagneArticles
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