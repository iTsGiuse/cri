<template>
  <main class="bg-light py-5">
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <article class="card border-0 rounded-4 shadow-sm">
            <div class="card-body p-4 p-lg-5">
              <span class="text-danger fw-semibold small text-uppercase">
                Accessibilità
              </span>

              <h1 class="h2 fw-bold text-dark mt-1 mb-4">
                Dichiarazione di accessibilità
              </h1>

              <section class="mb-4" aria-labelledby="impegno">
                <h2 id="impegno" class="h5 fw-bold text-dark mb-3">
                  Il nostro impegno
                </h2>

                <p class="text-secondary mb-0">
                  Il Comitato di Rubiera si impegna a rendere il proprio sito
                  accessibile al maggior numero possibile di persone,
                  indipendentemente da disabilità, dispositivo o tecnologia
                  assistiva utilizzata.
                </p>
              </section>

              <section class="mb-4" aria-labelledby="accorgimenti">
                <h2 id="accorgimenti" class="h5 fw-bold text-dark mb-3">
                  Accorgimenti adottati
                </h2>

                <ul class="text-secondary mb-0">
                  <li>Struttura delle pagine basata su HTML semantico e landmark.</li>
                  <li>Gerarchia dei titoli coerente, con un solo titolo principale per pagina.</li>
                  <li>Collegamento rapido per saltare direttamente al contenuto principale.</li>
                  <li>Navigazione completa da tastiera con indicatore di focus sempre visibile.</li>
                  <li>Testo alternativo sulle immagini informative.</li>
                  <li>Layout responsive utilizzabile anche con forte ingrandimento.</li>
                </ul>
              </section>

              <section class="mb-4" aria-labelledby="limiti">
                <h2 id="limiti" class="h5 fw-bold text-dark mb-3">
                  Limitazioni note
                </h2>

                <p class="text-secondary mb-0">
                  Alcuni contenuti pubblicati in formato PDF potrebbero non
                  essere completamente accessibili. Se ti serve un documento in
                  un formato alternativo puoi richiederlo ai recapiti indicati
                  di seguito: te lo forniremo nel più breve tempo possibile.
                </p>
              </section>

              <section aria-labelledby="segnalazioni">
                <h2 id="segnalazioni" class="h5 fw-bold text-dark mb-3">
                  Segnalazioni e richieste
                </h2>

                <p class="text-secondary mb-3">
                  Se incontri una barriera nell’utilizzo di questo sito, segnalacela:
                  ogni indicazione ci aiuta a migliorarlo.
                </p>

                <p class="text-secondary mb-0">
                  Scrivi a
                  <a :href="`mailto:${contactConfig.email}`" class="link-danger">
                    {{ contactConfig.email }}
                  </a>
                  oppure telefona al
                  <a :href="`tel:${contactConfig.phone.value}`" class="link-danger">
                    {{ contactConfig.phone.label }}
                  </a>.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { contactConfig } from '~/data/config'

useSeoPagina()
</script>
