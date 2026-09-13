<template>
  <div>
    <Hero />
    <Comunicazione
      :articles="newsArticles"
      :categories="newsCategories"
      base-route="/news"
      entity-type="news"
      :config="newsConfig"
    />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { newsArticles, newsCategories } from '~/data/news'

useSeoMeta({
  title: 'Notizie',
  description: `Tutte le news e le comunicazioni della ${siteConfig.name}.`,
})

const newsConfig = {
  searchLabel: 'Cerca nelle news',
  searchPlaceholder: 'Cerca una notizia o una parola chiave...',
  resultsLabel: 'News trovate',
  readMoreLabel: 'Leggi la news',
  emptyTitle: 'Nessuna news trovata',
  emptyDescription: 'Non ci sono notizie corrispondenti ai filtri selezionati.',
  emptyIcon: 'i-bi:newspaper',
}
</script>