<template>
  <div>
    <Hero />
    <TrasparenzaDocumenti :documenti="datiDocumenti" />
  </div>
</template>

<script setup>
const datiDocumenti = [
  {
    id: 'doc-1',
    titolo: 'Bilancio d’Esercizio e Nota Integrativa 2025',
    descrizione: 'Bilancio consuntivo d’esercizio approvato dall’Assemblea dei Soci con relativo verbale del Collegio dei Revisori.',
    categoriaId: 'bilanci',
    anno: 2025,
    formato: 'pdf',
    dimensione: '2.4 MB',
    dataPubblicazione: '15/04/2026',
    urlDownload: '/docs/logo.jpg'
  },
  {
    id: 'doc-2',
    titolo: 'Bilancio d’Esercizio e Relazione sulla Gestione 2024',
    descrizione: 'Bilancio consuntivo e nota integrativa relativi all’esercizio finanziario 2024.',
    categoriaId: 'bilanci',
    anno: 2024,
    formato: 'pdf',
    dimensione: '2.1 MB',
    dataPubblicazione: '22/04/2025',
    urlDownload: '/docs/bilancio-2024.pdf'
  },
  {
    id: 'doc-3',
    titolo: 'Bilancio di Previsione e Budget 2026',
    descrizione: 'Documento programmatico e previsionale delle entrate e delle uscite per l’anno in corso.',
    categoriaId: 'bilanci',
    anno: 2026,
    formato: 'pdf',
    dimensione: '1.6 MB',
    dataPubblicazione: '15/01/2026',
    urlDownload: '/docs/budget-previsionale-2026.pdf'
  },
  {
    id: 'doc-4',
    titolo: 'Rendiconto Destinazione Quota 5x1000 anno 2024',
    descrizione: 'Relazione illustrativa e modulo ministeriale di rendicontazione dell’impiego dei fondi pervenuti tramite il 5x1000.',
    categoriaId: '5x1000',
    anno: 2024,
    formato: 'pdf',
    dimensione: '1.2 MB',
    dataPubblicazione: '10/10/2025',
    urlDownload: '/docs/rendiconto-5x1000-2024.pdf'
  },
  {
    id: 'doc-5',
    titolo: 'Relazione Illustrativa Progetti Finanziati 5x1000 (Anno 2023)',
    descrizione: 'Dettaglio degli acquisti di attrezzature e mezzi di soccorso sostenuti grazie alle quote del 5x1000.',
    categoriaId: '5x1000',
    anno: 2023,
    formato: 'pdf',
    dimensione: '980 KB',
    dataPubblicazione: '05/11/2024',
    urlDownload: '/docs/relazione-5x1000-2023.pdf'
  },
  {
    id: 'doc-6',
    titolo: 'Rendiconto Contributi Pubblici ricevuti (L. 124/2017) - Anno 2025',
    descrizione: 'Prospetto analitico dei contributi, sovvenzioni e incarichi retribuiti erogati dalle Pubbliche Amministrazioni nell’anno 2025.',
    categoriaId: 'contributi',
    anno: 2025,
    formato: 'pdf',
    dimensione: '850 KB',
    dataPubblicazione: '28/02/2026',
    urlDownload: '/docs/contributi-pubblici-2025.pdf'
  },
  {
    id: 'doc-7',
    titolo: 'Prospetto Contributi Enti Locali e Convenzioni ASL 2024',
    descrizione: 'Prospetto riepilogativo delle convenzioni e dei rimborsi spese erogati dagli Enti Pubblici locali per i servizi di emergenza.',
    categoriaId: 'contributi',
    anno: 2024,
    formato: 'xlsx',
    dimensione: '420 KB',
    dataPubblicazione: '14/03/2025',
    urlDownload: '/docs/convenzioni-pubbliche-2024.xlsx'
  },
  {
    id: 'doc-8',
    titolo: 'Statuto Ufficiale dell’Associazione C.R.I. Comitato di Rubiera ODV',
    descrizione: 'Statuto associativo vigente adeguato alle disposizioni del Codice del Terzo Settore (D.Lgs 117/2017).',
    categoriaId: 'statuto',
    anno: 2024,
    formato: 'pdf',
    dimensione: '3.1 MB',
    dataPubblicazione: '20/01/2024',
    urlDownload: '/docs/statuto-vigente.pdf'
  },
  {
    id: 'doc-9',
    titolo: 'Regolamento Interno di Organizzazione e Volontariato',
    descrizione: 'Disciplina dei turni di servizio, diritti, doveri e norme comportamentali dei volontari all’interno della struttura.',
    categoriaId: 'statuto',
    anno: 2025,
    formato: 'pdf',
    dimensione: '1.1 MB',
    dataPubblicazione: '10/09/2025',
    urlDownload: '/docs/regolamento-interno.pdf'
  },
  {
    id: 'doc-10',
    titolo: 'Atto di nomina e Incarichi Direttivo e Organo di Controllo 2025',
    descrizione: 'Elenco aggiornato dei componenti del Consiglio Direttivo, cariche istituzionali e dell’Organo di Controllo monocratico.',
    categoriaId: 'organi',
    anno: 2025,
    formato: 'pdf',
    dimensione: '540 KB',
    dataPubblicazione: '12/05/2025',
    urlDownload: '/docs/organi-sociali-2025.pdf'
  },
  {
    id: 'doc-11',
    titolo: 'Attestazione di Assenza di Compensi per le Cariche Sociali',
    descrizione: 'Dichiarazione relativa alla gratuità degli incarichi ricoperti dai membri del Consiglio Direttivo (ex art. 34 D.Lgs 117/2017).',
    categoriaId: 'organi',
    anno: 2026,
    formato: 'pdf',
    dimensione: '310 KB',
    dataPubblicazione: '10/01/2026',
    urlDownload: '/docs/gratuita-cariche-2026.pdf'
  }
]
</script>