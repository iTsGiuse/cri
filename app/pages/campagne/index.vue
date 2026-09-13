<template>
  <div>
    <Hero heading-level="h2" />
    <Comunicazione
      :articles="campagneArticles"
      :categories="campagneCategories"
      base-route="/campagne"
      entity-type="campagne"
      :config="campagneConfig"
    />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { newsArticles as campagneArticles, newsCategories as campagneCategories } from '~/data/campagne'

useSeoMeta({
  title: `Campagne di Sensibilizzazione | ${siteConfig.shortName}`,
  description: `Scopri le campagne ed i progetti di sensibilizzazione promossi dalla ${siteConfig.name}.`,
})

const campagneConfig = {
  searchLabel: 'Cerca nelle campagne',
  searchPlaceholder: 'Cerca una campagna o un tema...',
  resultsLabel: 'Campagne trovate',
  readMoreLabel: 'Scopri la campagna',
  emptyTitle: 'Nessuna campagna trovata',
  emptyDescription: 'Non ci sono campagne corrispondenti ai filtri selezionati.',
  emptyIcon: 'i-bi:megaphone',
}
</script>