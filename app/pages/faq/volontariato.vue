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
      id: 'requisiti',
      question: 'Chi può diventare volontario della Croce Rossa?',
      answer: 'Può diventare volontario chiunque abbia compiuto almeno 14 anni di età, senza limiti massimi. È necessario risiedere o essere domiciliati in Italia e non avere condanne penali passate in giudicato per reati incompatibili con i principi della CRI.'
    },
    {
      id: 'iscrizione',
      question: 'Come ci si iscrive al corso d\'accesso a Rubiera?',
      answer: 'L\'iscrizione si effettua online tramite il portale ufficiale della Croce Rossa Italiana (GAIA - gaia.cri.it). Basta registrarsi, selezionare il Comitato di Rubiera e manifestare l\'interesse per il primo Corso di Formazione per Volontari in partenza.'
    },
    {
      id: 'corso',
      question: 'In cosa consiste e quanto dura il corso di base?',
      answer: 'Il corso base di accesso dura circa 15-20 ore suddivise in lezioni serali o nei fine settimana. Tratta la storia della Croce Rossa, i Principi Fondamentali, il Diritto Internazionale Umanitario, la sicurezza e le manovre di primo soccorso (BLS).'
    },
    {
      id: 'esame',
      question: 'Come si conclude il corso d\'accesso?',
      answer: 'Il corso si conclude con una prova teorico-pratica incentrata sui temi trattati a lezione, in particolare sulle manovre salvavita e sui principi dell\'Associazione. Superato l\'esame, si diventa Volontari CRI a tutti gli effetti.'
    },
    {
      id: 'costi',
      question: 'Il corso d\'accesso ha un costo?',
      answer: 'Sì, è richiesta una quota d\'iscrizione contenuta che copre la quota associativa per l\'anno in corso, la copertura assicurativa e il materiale didattico fornito durante le lezioni.'
    },
    {
      id: 'impegno',
      question: 'Quanto tempo minimo bisogna dedicare alle attività?',
      answer: 'Non esiste un monte ore fisso o obbligatorio per tutti: ogni volontario offre la propria disponibilità in base ai propri impegni personali, di studio o lavorativi, concordando i turni con i responsabili del Comitato.'
    },
    {
      id: 'ambulanza',
      question: 'Per andare in ambulanza serve un corso supplementare?',
      answer: 'Sì. Il corso base abilita ai servizi associativi generali e ai trasporti ordinari. Per operare nell\'emergenza sanitaria 118/112 è necessario frequentare un successivo corso di specializzazione specifico (modulo TSSA) con tirocinio pratico.'
    },
    {
      id: 'attivita',
      question: 'Se non voglio andare in ambulanza, quali altre attività posso fare?',
      answer: 'La Croce Rossa offre tantissime attività oltre al soccorso: assistenza alle famiglie vulnerabili, iniziative dell\'Area Giovani, centralino e logistica, Protezione Civile, formazione nelle scuole e organizzazione di eventi.'
    },
    {
      id: 'divisa',
      question: 'La divisa viene fornita dal Comitato?',
      answer: 'Sì, la divisa ufficiale operativa della Croce Rossa viene assegnata al volontario dal Comitato in base alle attività per cui si è abilitati e al tipo di servizio svolto.'
    },
    {
      id: 'incontri-informativi',
      question: 'Come faccio a sapere quando parte il prossimo corso?',
      answer: 'I corsi vengono pubblicati sul portale GAIA, sul nostro sito web e sui canali social ufficiali del Comitato di Rubiera. Organizziamo regolarmente serate informative aperte alla cittadinanza prima dell\'avvio di ogni nuovo corso.'
    }
  ]
}
</script>
