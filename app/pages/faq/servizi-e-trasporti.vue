<template>
  <div>
    <Hero />
    <LazyFaq hydrate-on-visible :faq="faqData" />
  </div>
</template>

<script setup lang="ts">
import type { FaqData } from '~/components/Faq.vue'

const faqData: FaqData = {
  items: [
    {
      id: 'emergenza',
      question: 'Come devo fare in caso di un’emergenza sanitaria improvvisa?',
      answer: 'In caso di emergenza o grave malore occorre chiamare immediatamente il Numero Unico Europeo 112 (o 118). Sarà la Centrale Operativa a coordinare il soccorso e a inviare l’ambulanza della Croce Rossa più vicina.'
    },
    {
      id: 'prenotazione-trasporto',
      question: 'Come posso richiedere un trasporto sanitario programmato?',
      answer: 'Puoi prenotare un trasporto contattando la segreteria del Comitato con qualche giorno di anticipo tramite telefono, e-mail o compilando il modulo di richiesta sul nostro sito web.'
    },
    {
      id: 'tipologia-trasporti',
      question: 'Quali tipi di trasporti sanitari effettua la Croce Rossa?',
      answer: 'Effettuiamo trasporti per visite specialistiche, ricoveri e dimissioni ospedaliere, trasferimenti tra strutture sanitarie, terapie ricorrenti (es. dialisi o radioterapia) e servizi di accompagnamento con auto o pulmini attrezzati.'
    },
    {
      id: 'disabilita-carrozzina',
      question: 'È possibile trasportare persone in carrozzina o allettate?',
      answer: 'Sì, disponiamo sia di ambulanze dotate di barella per pazienti allettati, sia di mezzi attrezzati con sollevatore idraulico per persone in carrozzina o con ridotta mobilità.'
    },
    {
      id: 'costi-trasporto',
      question: 'I servizi di trasporto sanitario sono a pagamento?',
      answer: 'I trasporti privati ed ordinari richiedono un contributo a rimborso spese basato sui chilometri percorsi e sul tipo di mezzo utilizzato. Per i trasporti convenzionati con il Servizio Sanitario Regionale (es. dialisi), la spesa è a carico dell’Azienda USL.'
    },
    {
      id: 'accompagnatori',
      question: 'Un familiare o caregiver può salire sul mezzo insieme al paziente?',
      answer: 'Sì, di norma è consentita la presenza di un accompagnatore, previo accordo in fase di prenotazione e nel rispetto delle normative di sicurezza di bordo.'
    },
    {
      id: 'preavviso',
      question: 'Quanto tempo prima occorre prenotare un trasporto?',
      answer: 'È consigliabile prenotare con almeno 48-72 ore di anticipo rispetto all’orario dell’appuntamento. Per esigenze urgenti o con scarso preavviso, faremo il possibile in base alla disponibilità dei mezzi e del personale.'
    },
    {
      id: 'assistenza-eventi',
      question: 'Come richiedere l’assistenza sanitaria per un evento o manifestazione sportiva?',
      answer: 'Organizzatori di eventi, gare sportive e manifestazioni pubbliche o private possono richiedere un preventivo inviando una richiesta via e-mail con i dettagli dell’evento (data, luogo, affluenza prevista e tipologia di attività).'
    },
    {
      id: 'supporto-sociale',
      question: 'Quali servizi di assistenza sociale offrite alla popolazione?',
      answer: 'Offriamo supporto alle famiglie vulnerabili attraverso la consegna di viveri e beni di prima necessità, il ritiro e la consegna di farmaci a domicilio, il telesoccorso e attività di ascolto e vicinanza alle persone sole.'
    },
    {
      id: 'orari-segreteria',
      question: 'Quali sono gli orari per contattare il servizio trasporti del Comitato?',
      answer: 'La nostra centralina/segreteria per la prenotazione dei servizi ordinari è attiva dal lunedì al venerdì negli orari di apertura indicati nella pagina Contatti. Il servizio di soccorso d’emergenza è invece operativo 24 ore su 24 tramite il 112.'
    }
  ]
}
</script>