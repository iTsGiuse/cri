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
      tag: '5x1000-costo',
      domanda: 'Quanto costa devolvere il 5x1000 alla Croce Rossa?',
      risposta: 'Donare il 5x1000 non costa nulla e non è una tassa aggiuntiva. È una quota dell’IRPEF che lo Stato devolve a enti del Terzo Settore: se non si esprime alcuna preferenza, quella parte di imposte rimane allo Stato.'
    },
    {
      tag: '5x1000-come-fare',
      domanda: 'Come posso destinare il mio 5x1000 al Comitato di Rubiera?',
      risposta: 'Nel modulo della dichiarazione dei redditi (730, Modello Redditi o CU), cerca il riquadro "Sostegno degli Enti del Terzo Settore", metti la tua firma e inserisci il Codice Fiscale del nostro Comitato: 00000000000.'
    },
    {
      tag: '5x1000-non-dichiaro',
      domanda: 'Posso donare il 5x1000 anche se non ho l’obbligo di dichiarazione dei redditi?',
      risposta: 'Sì. Chi riceve la sola Certificazione Unica (CU) può destinare il 5x1000 compilando l’apposita scheda allegata al modello e consegnandola in busta chiusa presso un ufficio postale, un CAF o un intermediario abilitato.'
    },
    {
      tag: 'detraibilita',
      domanda: 'Le donazioni alla Croce Rossa sono deducibili o detraibili dalle tasse?',
      risposta: 'Sì, essendo la Croce Rossa un’Organizzazione di Volontariato (ODV), le donazioni effettuate con metodi di pagamento tracciabili (bonifico, carta di credito o assegno) sono detraibili dall’IRPEF o deducibili dal reddito sia per le persone fisiche che per le imprese.'
    },
    {
      tag: 'modalita-donazione',
      domanda: 'Quali metodi posso usare per fare una donazione singola o mensile?',
      risposta: 'Puoi donare comodamente online tramite carta di credito/Satispay sul nostro sito web, oppure effettuare un bonifico bancario sul conto corrente intestato al Comitato. È anche possibile impostare una donazione ricorsiva mensile.'
    },
    {
      tag: 'uso-fondi',
      domanda: 'Come vengono utilizzati i fondi raccolti con le donazioni e il 5x1000?',
      risposta: 'I fondi vengono impiegati direttamente sul territorio per l’acquisto e la manutenzione delle ambulanze e dei mezzi di soccorso, l’acquisto di presidi sanitari, il supporto alle famiglie in difficoltà e il potenziamento dei servizi alla comunità.'
    },
    {
      tag: 'ricevuta-fiscale',
      domanda: 'Come posso ottenere la ricevuta valida ai fini fiscali?',
      risposta: 'Per le donazioni effettuate tramite bonifico o pagamento online tracciabile, l’estratto conto bancario costituisce già prova fiscale. In ogni caso, il Comitato rilascia una ricevuta di erogazione liberale inviando i propri dati alla segreteria.'
    },
    {
      tag: 'donazioni-in-memoria',
      domanda: 'È possibile effettuare una donazione in memoria o per un’occasione speciale?',
      risposta: 'Sì, è possibile dedicare una donazione alla memoria di un caro estinto o festeggiare ricorrenze speciali. Su richiesta, il Comitato può inviare una lettera di ringraziamento e testimonianza alla famiglia del festeggiato o del defunto.'
    },
    {
      tag: 'donazioni-beni',
      domanda: 'Il Comitato accetta donazioni di beni materiali o attrezzature mediche?',
      risposta: 'Accettiamo donazioni di beni materiali (come elettromedicali, attrezzature di soccorso o generi alimentari a lunga conservazione) previa verifica della conformità sanitaria e delle necessità operative del momento. Contattaci prima di consegnare i beni.'
    },
    {
      tag: 'trasparenza',
      domanda: 'Dove posso verificare la trasparenza e i bilanci del Comitato?',
      risposta: 'I resoconti sulle erogazioni pubbliche, il bilancio d’esercizio e i rendiconti sull’impiego dei fondi del 5x1000 sono pubblicati annualmente nella sezione "Trasparenza" del nostro sito web, in ottemperanza alle normative del RUNTS.'
    }
  ]
}
</script>