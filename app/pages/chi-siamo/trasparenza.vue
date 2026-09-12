<template>
  <div>
    <Hero />
    <LazyTrasparenzaDocumenti hydrate-on-visible :documents="documents" />
  </div>
</template>

<script setup lang="ts">
import type { TransparencyDocument } from '~/components/TrasparenzaDocumenti.vue'

const documents: TransparencyDocument[] = [
  {
    id: 'doc-1',
    title: 'Bilancio d’Esercizio e Nota Integrativa 2025',
    description: 'Bilancio consuntivo d’esercizio approvato dall’Assemblea dei Soci con relativo verbale del Collegio dei Revisori.',
    categoryId: 'bilanci',
    year: 2025,
    format: 'pdf',
    size: '2.4 MB',
    publishedAt: '15/04/2026',
    downloadUrl: '/docs/logo.jpg'
  },
  {
    id: 'doc-2',
    title: 'Bilancio d’Esercizio e Relazione sulla Gestione 2024',
    description: 'Bilancio consuntivo e nota integrativa relativi all’esercizio finanziario 2024.',
    categoryId: 'bilanci',
    year: 2024,
    format: 'pdf',
    size: '2.1 MB',
    publishedAt: '22/04/2025',
    downloadUrl: '/docs/bilancio-2024.pdf'
  },
  {
    id: 'doc-3',
    title: 'Bilancio di Previsione e Budget 2026',
    description: 'Documento programmatico e previsionale delle entrate e delle uscite per l’anno in corso.',
    categoryId: 'bilanci',
    year: 2026,
    format: 'pdf',
    size: '1.6 MB',
    publishedAt: '15/01/2026',
    downloadUrl: '/docs/budget-previsionale-2026.pdf'
  },
  {
    id: 'doc-4',
    title: 'Rendiconto Destinazione Quota 5x1000 anno 2024',
    description: 'Relazione illustrativa e modulo ministeriale di rendicontazione dell’impiego dei fondi pervenuti tramite il 5x1000.',
    categoryId: '5x1000',
    year: 2024,
    format: 'pdf',
    size: '1.2 MB',
    publishedAt: '10/10/2025',
    downloadUrl: '/docs/rendiconto-5x1000-2024.pdf'
  },
  {
    id: 'doc-5',
    title: 'Relazione Illustrativa Progetti Finanziati 5x1000 (Anno 2023)',
    description: 'Dettaglio degli acquisti di attrezzature e mezzi di soccorso sostenuti grazie alle quote del 5x1000.',
    categoryId: '5x1000',
    year: 2023,
    format: 'pdf',
    size: '980 KB',
    publishedAt: '05/11/2024',
    downloadUrl: '/docs/relazione-5x1000-2023.pdf'
  },
  {
    id: 'doc-6',
    title: 'Rendiconto Contributi Pubblici ricevuti (L. 124/2017) - Anno 2025',
    description: 'Prospetto analitico dei contributi, sovvenzioni e incarichi retribuiti erogati dalle Pubbliche Amministrazioni nell’anno 2025.',
    categoryId: 'contributi',
    year: 2025,
    format: 'pdf',
    size: '850 KB',
    publishedAt: '28/02/2026',
    downloadUrl: '/docs/contributi-pubblici-2025.pdf'
  },
  {
    id: 'doc-7',
    title: 'Prospetto Contributi Enti Locali e Convenzioni ASL 2024',
    description: 'Prospetto riepilogativo delle convenzioni e dei rimborsi spese erogati dagli Enti Pubblici locali per i servizi di emergenza.',
    categoryId: 'contributi',
    year: 2024,
    format: 'xlsx',
    size: '420 KB',
    publishedAt: '14/03/2025',
    downloadUrl: '/docs/convenzioni-pubbliche-2024.xlsx'
  },
  {
    id: 'doc-8',
    title: 'Statuto Ufficiale dell’Associazione C.R.I. Comitato di Rubiera ODV',
    description: 'Statuto associativo vigente adeguato alle disposizioni del Codice del Terzo Settore (D.Lgs 117/2017).',
    categoryId: 'statuto',
    year: 2024,
    format: 'pdf',
    size: '3.1 MB',
    publishedAt: '20/01/2024',
    downloadUrl: '/docs/statuto-vigente.pdf'
  },
  {
    id: 'doc-9',
    title: 'Regolamento Interno di Organizzazione e Volontariato',
    description: 'Disciplina dei turni di servizio, diritti, doveri e norme comportamentali dei volontari all’interno della struttura.',
    categoryId: 'statuto',
    year: 2025,
    format: 'pdf',
    size: '1.1 MB',
    publishedAt: '10/09/2025',
    downloadUrl: '/docs/regolamento-interno.pdf'
  },
  {
    id: 'doc-10',
    title: 'Atto di nomina e Incarichi Direttivo e Organo di Controllo 2025',
    description: 'Elenco aggiornato dei componenti del Consiglio Direttivo, cariche istituzionali e dell’Organo di Controllo monocratico.',
    categoryId: 'organi',
    year: 2025,
    format: 'pdf',
    size: '540 KB',
    publishedAt: '12/05/2025',
    downloadUrl: '/docs/organi-sociali-2025.pdf'
  },
  {
    id: 'doc-11',
    title: 'Attestazione di Assenza di Compensi per le Cariche Sociali',
    description: 'Dichiarazione relativa alla gratuità degli incarichi ricoperti dai membri del Consiglio Direttivo (ex art. 34 D.Lgs 117/2017).',
    categoryId: 'organi',
    year: 2026,
    format: 'pdf',
    size: '310 KB',
    publishedAt: '10/01/2026',
    downloadUrl: '/docs/gratuita-cariche-2026.pdf'
  }
]
</script>
