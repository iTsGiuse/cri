<template>
  <div>
    <Hero />
    <Faq :faq="datiFaq" />
  </div>
</template>

<script setup lang="ts">
const datiFaq = {
  domande: [
    {
      tag: 'emergenza',
      domanda: 'Come devo fare in caso di un’emergenza sanitaria improvvisa?',
      risposta: 'In caso di emergenza o grave malore occorre chiamare immediatamente il Numero Unico Europeo 112 (o 118). Sarà la Centrale Operativa a coordinare il soccorso e a inviare l’ambulanza della Croce Rossa più vicina.'
    },
    {
      tag: 'prenotazione-trasporto',
      domanda: 'Come posso richiedere un trasporto sanitario programmato?',
      risposta: 'Puoi prenotare un trasporto contattando la segreteria del Comitato con qualche giorno di anticipo tramite telefono, e-mail o compilando il modulo di richiesta sul nostro sito web.'
    },
    {
      tag: 'tipologia-trasporti',
      domanda: 'Quali tipi di trasporti sanitari effettua la Croce Rossa?',
      risposta: 'Effettuiamo trasporti per visite specialistiche, ricoveri e dimissioni ospedaliere, trasferimenti tra strutture sanitarie, terapie ricorrenti (es. dialisi o radioterapia) e servizi di accompagnamento con auto o pulmini attrezzati.'
    },
    {
      tag: 'disabilita-carrozzina',
      domanda: 'È possibile trasportare persone in carrozzina o allettate?',
      risposta: 'Sì, disponiamo sia di ambulanze dotate di barella per pazienti allettati, sia di mezzi attrezzati con sollevatore idraulico per persone in carrozzina o con ridotta mobilità.'
    },
    {
      tag: 'costi-trasporto',
      domanda: 'I servizi di trasporto sanitario sono a pagamento?',
      risposta: 'I trasporti privati ed ordinari richiedono un contributo a rimborso spese basato sui chilometri percorsi e sul tipo di mezzo utilizzato. Per i trasporti convenzionati con il Servizio Sanitario Regionale (es. dialisi), la spesa è a carico dell’Azienda USL.'
    },
    {
      tag: 'accompagnatori',
      domanda: 'Un familiare o caregiver può salire sul mezzo insieme al paziente?',
      risposta: 'Sì, di norma è consentita la presenza di un accompagnatore, previo accordo in fase di prenotazione e nel rispetto delle normative di sicurezza di bordo.'
    },
    {
      tag: 'preavviso',
      domanda: 'Quanto tempo prima occorre prenotare un trasporto?',
      risposta: 'È consigliabile prenotare con almeno 48-72 ore di anticipo rispetto all’orario dell’appuntamento. Per esigenze urgenti o con scarso preavviso, faremo il possibile in base alla disponibilità dei mezzi e del personale.'
    },
    {
      tag: 'assistenza-eventi',
      domanda: 'Come richiedere l’assistenza sanitaria per un evento o manifestazione sportiva?',
      risposta: 'Organizzatori di eventi, gare sportive e manifestazioni pubbliche o private possono richiedere un preventivo inviando una richiesta via e-mail con i dettagli dell’evento (data, luogo, affluenza prevista e tipologia di attività).'
    },
    {
      tag: 'supporto-sociale',
      domanda: 'Quali servizi di assistenza sociale offrite alla popolazione?',
      risposta: 'Offriamo supporto alle famiglie vulnerabili attraverso la consegna di viveri e beni di prima necessità, il ritiro e la consegna di farmaci a domicilio, il telesoccorso e attività di ascolto e vicinanza alle persone sole.'
    },
    {
      tag: 'orari-segreteria',
      domanda: 'Quali sono gli orari per contattare il servizio trasporti del Comitato?',
      risposta: 'La nostra centralina/segreteria per la prenotazione dei servizi ordinari è attiva dal lunedì al venerdì negli orari di apertura indicati nella pagina Contatti. Il servizio di soccorso d’emergenza è invece operativo 24 ore su 24 tramite il 112.'
    }
  ]
}
</script>