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
      tag: 'tipologia-corsi',
      domanda: 'Quali tipi di corsi organizza la Croce Rossa per i cittadini?',
      risposta: 'Organizziamo corsi di Primo Soccorso Primo Intervento per la popolazione, corsi sulle Manovre Salvavita Pediatriche (MSP e disostruzione delle vie aeree), corsi per l\'uso del Defibrillatore (BLSD/DAE) e corsi sulla sicurezza domestica e stradale.'
    },
    {
      tag: 'corsi-aziende',
      domanda: 'Organizzate corsi di Primo Soccorso per le aziende (D.Lgs 81/08)?',
      risposta: 'Sì, effettuiamo corsi di formazione e aggiornamento periodico per Addetti al Primo Soccorso Aziendale in conformità al D.Lgs. 81/2008 e D.M. 388/2003, rivolti ad aziende di tutte le categorie di rischio (A, B e C).'
    },
    {
      tag: 'attestati',
      domanda: 'I corsi rilasciano un attestato di partecipazione o un’abilitazione ufficiale?',
      risposta: 'Sì, al termine di ogni corso (previo superamento della prova teorico-pratica o del raggiungimento della presenza minima richiesta) viene rilasciato un attestato di partecipazione o un\'abilitazione ufficiale riconosciuta a livello regionale e nazionale.'
    },
    {
      tag: 'disostruzione-pediatrica',
      domanda: 'In cosa consiste il corso di Manovre Salvavita Pediatriche (MSP)?',
      risposta: 'È un corso teorico-pratico rivolto a genitori, nonni, insegnanti ed educatori. Insegna ad affrontare le emergenze pediatriche più comuni e a eseguire correttamente le manovre di disostruzione da corpo estraneo in lattanti e bambini.'
    },
    {
      tag: 'corso-dae',
      domanda: 'Chiunque può partecipare a un corso per l’uso del defibrillatore (BLSD)?',
      risposta: 'Sì, il corso BLSD (Basic Life Support and Defibrillation) è aperto a tutta la cittadinanza non sanitaria. Insegna a riconoscere l\'arresto cardiaco, eseguire il massaggio cardiaco e utilizzare in sicurezza un Defibrillatore Semi-Automatico Esterno (DAE).'
    },
    {
      tag: 'iscrizioni-corsi',
      domanda: 'Come posso iscrivermi a un corso in partenza?',
      risposta: 'Puoi consultare il calendario dei corsi sul nostro sito o sui canali social e compilare il modulo d\'iscrizione online. Per i corsi aziendali è possibile contattare direttamente il nostro ufficio formazione per un preventivo o un corso su misura.'
    },
    {
      tag: 'costi-corsi',
      domanda: 'I corsi di formazione hanno un costo?',
      risposta: 'Sì, i corsi richiedono una quota di partecipazione a copertura del materiale didattico, dell\'uso dei manichini da addestramento, dell\'attestato e delle spese organizzative. I ricavi vengono reinvestiti nelle attività istituzionali del Comitato.'
    },
    {
      tag: 'sede-corsi',
      domanda: 'Dove si svolgono i corsi di formazione?',
      risposta: 'Di norma le lezioni si tengono presso la nostra sede di Rubiera nelle aule didattiche attrezzate. Per le aziende o enti del territorio è possibile organizzare i corsi direttamente presso le rispettive sedi operative.'
    },
    {
      tag: 'crediti-formativi',
      domanda: 'I corsi rilasciano crediti formativi scolastici o universitari?',
      risposta: 'Alcuni corsi di Primo Soccorso e il relativo attestato CRI consentono di richiedere crediti formativi (CFU) per scuole superiori o università, in base ai regolamenti specifici dei singoli istituti scolastici ed atenei.'
    },
    {
      tag: 'corsi-volontari',
      domanda: 'I corsi per la popolazione sono gli stessi necessari per diventare volontario?',
      risposta: 'No, i corsi per la popolazione sono percorsi formativi divulgativi aperti a tutti. Per diventare volontario operativo della Croce Rossa è necessario seguire il "Corso d\'Accesso per Volontari" iscrivendosi sul portale GAIA.'
    }
  ]
}
</script>