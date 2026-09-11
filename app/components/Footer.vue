<template>
  <footer class="bg-danger text-white">
    <div class="container py-5">
      <div class="row gy-4 gy-xl-5">
        <!-- 1. MARCHIO E SOCIAL (Prima colonna della Prima Riga) -->
        <div class="col-12 col-md-6 col-xl-3 pe-xl-3">
          <NuxtLink
            :to="footer.marchio.url"
            :aria-label="footer.marchio.etichettaAria"
            class="d-inline-block mb-3 p-2 bg-white rounded-3 shadow-sm"
          >
            <NuxtImg
              :src="footer.marchio.immagine"
              :alt="footer.marchio.alt"
              loading="lazy"
              class="img-fluid d-block brand-logo"
            />
          </NuxtLink>

          <p class="text-white small lh-lg mb-4">
            {{ footer.marchio.descrizione }}
          </p>

          <div class="d-flex gap-2">
            <a
              v-for="social in footer.social"
              :key="social.etichetta"
              :href="social.url"
              :aria-label="social.etichetta"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
              style="width: 38px; height: 38px"
            >
              <Icon :name="social.icona" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- COLONNE LINK DINAMICHE -->
        <div
          v-for="(colonna, index) in footer.colonne"
          :key="colonna.titolo"
          class="col-6 col-md-3 col-xl-3"
          :class="{ 'offset-xl-3': index > 0 && index % 3 === 0 }"
        >
          <h6 class="fw-bold text-uppercase fs-6 tracking-wider border-bottom border-white border-opacity-25 pb-2 mb-3">
            {{ colonna.titolo }}
          </h6>

          <ul class="list-unstyled mb-0">
            <li
              v-for="collegamento in colonna.collegamenti"
              :key="collegamento.etichetta"
              class="mb-2"
            >
              <a
                v-if="collegamento.esterno"
                :href="collegamento.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-light link-opacity-75 link-opacity-100-hover text-decoration-none small d-inline-block"
              >
                {{ collegamento.etichetta }}
              </a>

              <NuxtLink
                v-else
                :to="collegamento.url"
                class="link-light link-opacity-75 link-opacity-100-hover text-decoration-none small d-inline-block"
              >
                {{ collegamento.etichetta }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CONTATTI -->
        <div
          class="col-12 col-md-6 col-xl-3"
          :class="{
            'offset-xl-3':
              footer.colonne.length > 0 && footer.colonne.length % 3 === 0,
          }"
        >
          <h6 class="fw-bold text-uppercase fs-6 tracking-wider border-bottom border-white border-opacity-25 pb-2 mb-3">
            {{ footer.contatti.titolo }}
          </h6>

          <ul class="list-unstyled mb-0 small">
            <li class="mb-3">
              <a
                :href="footer.contatti.indirizzo.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-light link-opacity-75 link-opacity-100-hover text-decoration-none d-flex gap-2 align-items-start"
              >
                <Icon
                  :name="footer.contatti.indirizzo.icona"
                  class="mt-1 flex-shrink-0 opacity-75"
                  aria-hidden="true"
                />
                <span>{{ footer.contatti.indirizzo.etichetta }}</span>
              </a>
            </li>

            <li class="mb-3">
              <a
                :href="`tel:${footer.contatti.telefono.valore}`"
                class="link-light link-opacity-75 link-opacity-100-hover text-decoration-none d-flex gap-2 align-items-center"
              >
                <Icon
                  :name="footer.contatti.telefono.icona"
                  class="flex-shrink-0 opacity-75"
                  aria-hidden="true"
                />
                <span>{{ footer.contatti.telefono.etichetta }}</span>
              </a>
            </li>

            <li>
              <a
                :href="`mailto:${footer.contatti.email.valore}`"
                class="link-light link-opacity-75 link-opacity-100-hover text-decoration-none d-flex gap-2 align-items-center"
              >
                <Icon
                  :name="footer.contatti.email.icona"
                  class="flex-shrink-0 opacity-75"
                  aria-hidden="true"
                />
                <span class="text-break">
                  {{ footer.contatti.email.etichetta }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA CARD -->
      <div class="row mt-5">
        <div class="col-12">
          <div
            class="bg-white shadow-lgtext-dark rounded-4 p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-4 shadow-lg border-start border-danger border-5"
          >
            <div>
              <h3 class="text-danger fw-bold mb-1 fs-4 fs-lg-3">
                {{ footer.chiamataAzione.titolo }}
              </h3>

              <p class="text-muted small mb-0">
                {{ footer.chiamataAzione.descrizione }}
              </p>
            </div>

            <NuxtLink
              :to="footer.chiamataAzione.url"
              class="btn btn-danger rounded-pill fw-semibold px-4 py-2 text-nowrap shadow-sm pulsante-azione"
            >
              <Icon
                :name="footer.chiamataAzione.icona"
                class="me-2"
                aria-hidden="true"
              />

              {{ footer.chiamataAzione.etichetta }}

              <Icon
                name="i-bi:chevron-right"
                class="freccia-azione small"
                aria-hidden="true"
              />
            </NuxtLink>


          </div>
        </div>
      </div>
    </div>

    <!-- PARTE INFERIORE -->
    <div class="bg-danger bg-opacity-20 border-top border-white border-2 border-opacity-75">
      <div class="container py-3">
        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3"
        >
          <p class="text-whitesmall mb-0 text-center text-lg-start">
            {{ footer.fiscali }}
          </p>

          <nav
            aria-label="Link legali"
            class="d-flex flex-wrap justify-content-center gap-3 gap-lg-4"
          >
            <template
              v-for="collegamento in footer.collegamentiLegali"
              :key="collegamento.etichetta"
            >
              <a
                v-if="collegamento.esterno"
                :href="collegamento.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-light small text-decoration-none"
              >
                {{ collegamento.etichetta }}
              </a>

              <NuxtLink
                v-else
                :to="collegamento.url"
                class="link-light small text-decoration-none"
              >
                {{ collegamento.etichetta }}
              </NuxtLink>
            </template>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
type CollegamentoFooter = {
  etichetta: string;
  url: string;
  esterno?: boolean;
};

type ColonnaFooter = {
  titolo: string;
  collegamenti: CollegamentoFooter[];
};

type SocialFooter = {
  etichetta: string;
  url: string;
  icona: string;
};

type ContattoFooter = {
  etichetta: string;
  url: string;
  icona: string;
};

type FooterData = {
  marchio: {
    url: string;
    immagine: string;
    alt: string;
    etichettaAria: string;
    larghezza?: number;
    altezza?: number;
    descrizione: string;
  };

  social: SocialFooter[];

  colonne: ColonnaFooter[];

  contatti: {
    titolo: string;
    indirizzo: ContattoFooter;
    telefono: {
      etichetta: string;
      valore: string;
      icona: string;
    };
    email: {
      etichetta: string;
      valore: string;
      icona: string;
    };
  };

  chiamataAzione: {
    titolo: string;
    descrizione: string;
    etichetta: string;
    url: string;
    icona: string;
  };

  collegamentiLegali: CollegamentoFooter[];

  fiscali: string;
};

defineProps<{
  footer: FooterData;
}>();

const annoCorrente = new Date().getFullYear();
</script>

<style scoped>
.brand-logo {
  max-height: 120px;
  width: auto;
  object-fit: contain;
}


.pulsante-azione .freccia-azione {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(
    0.175,
    0.885,
    0.32,
    1.275
  );
}

.pulsante-azione:hover .freccia-azione,
.pulsante-azione:focus-visible .freccia-azione {
  transform: translateX(8px);
}

</style>
