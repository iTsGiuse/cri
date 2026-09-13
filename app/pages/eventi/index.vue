<template>
  <div>
    <Hero />
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
import { newsArticles as eventArticles, newsCategories as eventCategories } from '~/data/eventi'

useSeoPagina()

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