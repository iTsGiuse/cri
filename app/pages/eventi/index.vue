<template>
  <div>
    <Hero heading-level="h2" />
    <Comunicazione
      :articles="eventArticles"
      :categories="eventCategories"
      base-route="/eventi"
      entity-type="eventi"
      :config="eventsConfig"
    />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { newsArticles as eventArticles, newsCategories as eventCategories } from '~/data/eventi'

useSeoMeta({
  title: `Eventi | ${siteConfig.shortName}`,
  description: `Tutti gli eventi e le iniziative della ${siteConfig.name}.`,
})

const eventsConfig = {
  searchLabel: 'Cerca negli eventi',
  searchPlaceholder: 'Cerca un evento o una parola chiave...',
  resultsLabel: 'Eventi trovati',
  readMoreLabel: 'Scopri evento',
  emptyTitle: 'Nessun evento trovato',
  emptyDescription: 'Non ci sono eventi corrispondenti ai filtri selezionati.',
  emptyIcon: 'i-bi:calendar-x',
}
</script>