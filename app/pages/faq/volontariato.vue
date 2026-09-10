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
      tag: 'requisiti',
      domanda: 'Chi può diventare volontario della Croce Rossa?',
      risposta: 'Può diventare volontario chiunque abbia compiuto almeno 14 anni di età, senza limiti massimi. È necessario risiedere o essere domiciliati in Italia e non avere condanne penali passate in giudicato per reati incompatibili con i principi della CRI.'
    },
    {
      tag: 'iscrizione',
      domanda: 'Come ci si iscrive al corso d\'accesso a Rubiera?',
      risposta: 'L\'iscrizione si effettua online tramite il portale ufficiale della Croce Rossa Italiana (GAIA - gaia.cri.it). Basta registrarsi, selezionare il Comitato di Rubiera e manifestare l\'interesse per il primo Corso di Formazione per Volontari in partenza.'
    },
    {
      tag: 'corso',
      domanda: 'In cosa consiste e quanto dura il corso di base?',
      risposta: 'Il corso base di accesso dura circa 15-20 ore suddivise in lezioni serali o nei fine settimana. Tratta la storia della Croce Rossa, i Principi Fondamentali, il Diritto Internazionale Umanitario, la sicurezza e le manovre di primo soccorso (BLS).'
    },
    {
      tag: 'esame',
      domanda: 'Come si conclude il corso d\'accesso?',
      risposta: 'Il corso si conclude con una prova teorico-pratica incentrata sui temi trattati a lezione, in particolare sulle manovre salvavita e sui principi dell\'Associazione. Superato l\'esame, si diventa Volontari CRI a tutti gli effetti.'
    },
    {
      tag: 'costi',
      domanda: 'Il corso d\'accesso ha un costo?',
      risposta: 'Sì, è richiesta una quota d\'iscrizione contenuta che copre la quota associativa per l\'anno in corso, la copertura assicurativa e il materiale didattico fornito durante le lezioni.'
    },
    {
      tag: 'impegno',
      domanda: 'Quanto tempo minimo bisogna dedicare alle attività?',
      risposta: 'Non esiste un monte ore fisso o obbligatorio per tutti: ogni volontario offre la propria disponibilità in base ai propri impegni personali, di studio o lavorativi, concordando i turni con i responsabili del Comitato.'
    },
    {
      tag: 'ambulanza',
      domanda: 'Per andare in ambulanza serve un corso supplementare?',
      risposta: 'Sì. Il corso base abilita ai servizi associativi generali e ai trasporti ordinari. Per operare nell\'emergenza sanitaria 118/112 è necessario frequentare un successivo corso di specializzazione specifico (modulo TSSA) con tirocinio pratico.'
    },
    {
      tag: 'attivita',
      domanda: 'Se non voglio andare in ambulanza, quali altre attività posso fare?',
      risposta: 'La Croce Rossa offre tantissime attività oltre al soccorso: assistenza alle famiglie vulnerabili, iniziative dell\'Area Giovani, centralino e logistica, Protezione Civile, formazione nelle scuole e organizzazione di eventi.'
    },
    {
      tag: 'divisa',
      domanda: 'La divisa viene fornita dal Comitato?',
      risposta: 'Sì, la divisa ufficiale operativa della Croce Rossa viene assegnata al volontario dal Comitato in base alle attività per cui si è abilitati e al tipo di servizio svolto.'
    },
    {
      tag: 'incontri-informativi',
      domanda: 'Come faccio a sapere quando parte il prossimo corso?',
      risposta: 'I corsi vengono pubblicati sul portale GAIA, sul nostro sito web e sui canali social ufficiali del Comitato di Rubiera. Organizziamo regolarmente serate informative aperte alla cittadinanza prima dell\'avvio di ogni nuovo corso.'
    }
  ]
}
</script>