<template>
  <main class="bg-light py-5">
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <article class="card border-0 rounded-4 shadow-sm">
            <div class="card-body p-4 p-lg-5">
              <span class="text-danger fw-semibold small text-uppercase">
                Informazioni legali
              </span>

              <h1 class="h2 fw-bold text-dark mt-1 mb-4">
                Note legali
              </h1>

              <section class="mb-4" aria-labelledby="titolare">
                <h2 id="titolare" class="h5 fw-bold text-dark mb-3">
                  Titolare del sito
                </h2>

                <address class="text-secondary mb-0 fst-normal">
                  <strong class="text-dark">{{ organizationConfig.legalName }}</strong><br>
                  {{ contactConfig.address.street }}<br>
                  {{ contactConfig.address.postalCode }}
                  {{ contactConfig.address.city }}
                  ({{ contactConfig.address.province }})<br>
                  Codice fiscale: {{ organizationConfig.taxCode }}<br>
                  Email:
                  <a :href="`mailto:${contactConfig.email}`" class="link-danger">
                    {{ contactConfig.email }}
                  </a><br>
                  PEC:
                  <a :href="`mailto:${contactConfig.pec}`" class="link-danger">
                    {{ contactConfig.pec }}
                  </a>
                </address>
              </section>

              <section class="mb-4" aria-labelledby="contenuti">
                <h2 id="contenuti" class="h5 fw-bold text-dark mb-3">
                  Contenuti del sito
                </h2>

                <p class="text-secondary mb-0">
                  I contenuti pubblicati hanno finalità informativa sulle attività
                  del Comitato. Le informazioni relative a servizi, corsi e
                  iniziative possono essere soggette a variazioni: per dati
                  aggiornati e vincolanti è necessario contattare direttamente
                  la segreteria del Comitato.
                </p>
              </section>

              <section class="mb-4" aria-labelledby="emblema">
                <h2 id="emblema" class="h5 fw-bold text-dark mb-3">
                  Uso dell’emblema
                </h2>

                <p class="text-secondary mb-0">
                  L’emblema della Croce Rossa è protetto dalle Convenzioni di
                  Ginevra e dalla normativa nazionale. Il suo utilizzo è
                  riservato ai soggetti autorizzati e ogni uso improprio è
                  vietato dalla legge.
                </p>
              </section>

              <section class="mb-4" aria-labelledby="proprieta">
                <h2 id="proprieta" class="h5 fw-bold text-dark mb-3">
                  Proprietà intellettuale
                </h2>

                <p class="text-secondary mb-0">
                  Testi, immagini e materiali presenti nel sito appartengono ai
                  rispettivi titolari. La riproduzione è consentita solo previa
                  autorizzazione, salvo diversa indicazione.
                </p>
              </section>

              <section aria-labelledby="link-esterni">
                <h2 id="link-esterni" class="h5 fw-bold text-dark mb-3">
                  Collegamenti esterni
                </h2>

                <p class="text-secondary mb-0">
                  Il sito può contenere collegamenti verso siti di terze parti.
                  Il Comitato non esercita alcun controllo su tali siti e non
                  risponde dei loro contenuti.
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
import { contactConfig, organizationConfig } from '~/data/config'

useSeoPagina()
</script>
