<template>
  <div>
    <Hero />
    <LazyFaq :faq="faqData" :categories="faqCategories" />
  </div>
</template>

<script setup lang="ts">
import type { FaqData, FaqCategory } from '~/components/Faq.vue'

const faqCategories = ref<FaqCategory[]>([
  { id: 'servizi', name: 'Servizi Sanitari' },
  { id: 'volontariato', name: 'Volontariato e Corsi' },
  { id: 'donazioni', name: 'Donazioni e Contributi' },
  { id: 'amministrazione', name: 'Amministrazione e Info' }
])

const faqData = ref<FaqData>({
  items: [
    {
      id: '1',
      categoryId: 'servizi',
      question: 'Come posso prenotare un trasporto sanitario o un\'ambulanza?',
      answer: 'È possibile prenotare un trasporto sanitario contattando la nostra centralina al numero dedicato oppure recandosi di persona presso la sede del Comitato negli orari di apertura.'
    },
    {
      id: '2',
      categoryId: 'volontariato',
      question: 'Quali sono i requisiti per diventare volontario della Croce Rossa?',
      answer: 'Per diventare volontario occorre aver compiuto 14 anni, frequentare il Corso di Formazione Base e superare il relativo esame finale.'
    },
    {
      id: '3',
      categoryId: 'donazioni',
      question: 'Come posso donare il 5x1000 al Comitato di Rubiera?',
      answer: 'In sede di dichiarazione dei redditi (730 o Modello Unico) basta inserire il codice fiscale del Comitato nello spazio dedicato al sostegno del Terzo Settore.'
    },
    {
      id: '4',
      categoryId: 'servizi',
      question: 'Il servizio di assistenza a manifestazioni ed eventi è a pagamento?',
      answer: 'I servizi di assistenza per eventi privati o pubblici prevedono un contributo spese a copertura del personale e dei mezzi impiegati. Contattaci per un preventivo.'
    },
    {
      id: '5',
      categoryId: 'amministrazione',
      question: 'Dove posso trovare la rendicontazione dei contributi pubblici?',
      answer: 'Tutti i rendiconti ufficiali e i bilanci sociali sono consultabili direttamente nella sezione Trasparenza del nostro sito web.'
    }
  ]
})
</script>