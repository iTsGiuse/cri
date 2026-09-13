<template>
  <div>
    <Hero />
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
import { newsArticles as campagneArticles, newsCategories as campagneCategories } from '~/data/campagne'

useSeoPagina()

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