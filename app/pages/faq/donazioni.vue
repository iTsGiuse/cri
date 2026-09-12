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
      id: '5x1000-costo',
      question: 'Quanto costa devolvere il 5x1000 alla Croce Rossa?',
      answer: 'Donare il 5x1000 non costa nulla e non è una tassa aggiuntiva. È una quota dell’IRPEF che lo Stato devolve a enti del Terzo Settore: se non si esprime alcuna preferenza, quella parte di imposte rimane allo Stato.'
    },
    {
      id: '5x1000-come-fare',
      question: 'Come posso destinare il mio 5x1000 al Comitato di Rubiera?',
      answer: 'Nel modulo della dichiarazione dei redditi (730, Modello Redditi o CU), cerca il riquadro "Sostegno degli Enti del Terzo Settore", metti la tua firma e inserisci il Codice Fiscale del nostro Comitato: 00000000000.'
    },
    {
      id: '5x1000-non-dichiaro',
      question: 'Posso donare il 5x1000 anche se non ho l’obbligo di dichiarazione dei redditi?',
      answer: 'Sì. Chi riceve la sola Certificazione Unica (CU) può destinare il 5x1000 compilando l’apposita scheda allegata al modello e consegnandola in busta chiusa presso un ufficio postale, un CAF o un intermediario abilitato.'
    },
    {
      id: 'detraibilita',
      question: 'Le donazioni alla Croce Rossa sono deducibili o detraibili dalle tasse?',
      answer: 'Sì, essendo la Croce Rossa un’Organizzazione di Volontariato (ODV), le donazioni effettuate con metodi di pagamento tracciabili (bonifico, carta di credito o assegno) sono detraibili dall’IRPEF o deducibili dal reddito sia per le persone fisiche che per le imprese.'
    },
    {
      id: 'modalita-donazione',
      question: 'Quali metodi posso usare per fare una donazione singola o mensile?',
      answer: 'Puoi donare comodamente online tramite carta di credito/Satispay sul nostro sito web, oppure effettuare un bonifico bancario sul conto corrente intestato al Comitato. È anche possibile impostare una donazione ricorsiva mensile.'
    },
    {
      id: 'uso-fondi',
      question: 'Come vengono utilizzati i fondi raccolti con le donazioni e il 5x1000?',
      answer: 'I fondi vengono impiegati direttamente sul territorio per l’acquisto e la manutenzione delle ambulanze e dei mezzi di soccorso, l’acquisto di presidi sanitari, il supporto alle famiglie in difficoltà e il potenziamento dei servizi alla comunità.'
    },
    {
      id: 'ricevuta-fiscale',
      question: 'Come posso ottenere la ricevuta valida ai fini fiscali?',
      answer: 'Per le donazioni effettuate tramite bonifico o pagamento online tracciabile, l’estratto conto bancario costituisce già prova fiscale. In ogni caso, il Comitato rilascia una ricevuta di erogazione liberale inviando i propri dati alla segreteria.'
    },
    {
      id: 'donazioni-in-memoria',
      question: 'È possibile effettuare una donazione in memoria o per un’occasione speciale?',
      answer: 'Sì, è possibile dedicare una donazione alla memoria di un caro estinto o festeggiare ricorrenze speciali. Su richiesta, il Comitato può inviare una lettera di ringraziamento e testimonianza alla famiglia del festeggiato o del defunto.'
    },
    {
      id: 'donazioni-beni',
      question: 'Il Comitato accetta donazioni di beni materiali o attrezzature mediche?',
      answer: 'Accettiamo donazioni di beni materiali (come elettromedicali, attrezzature di soccorso o generi alimentari a lunga conservazione) previa verifica della conformità sanitaria e delle necessità operative del momento. Contattaci prima di consegnare i beni.'
    },
    {
      id: 'trasparenza',
      question: 'Dove posso verificare la trasparenza e i bilanci del Comitato?',
      answer: 'I resoconti sulle erogazioni pubbliche, il bilancio d’esercizio e i rendiconti sull’impiego dei fondi del 5x1000 sono pubblicati annualmente nella sezione "Trasparenza" del nostro sito web, in ottemperanza alle normative del RUNTS.'
    }
  ]
}
</script>
