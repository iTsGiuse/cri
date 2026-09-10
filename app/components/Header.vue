<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-danger navbar-dark shadow-sm border-bottom border-dark border-opacity-75">
      <div class="container py-2">
        <NuxtLink
          to="/"
          class="navbar-brand me-lg-4"
          aria-label="Croce Rossa Italiana - Comitato di Rubiera"
        >
          <NuxtImg
            :src="header.marchio.immagine"
            :alt="header.marchio.alt"
            loading="eager"
            class="img-fluid brand-logo rounded-3"
          />
        </NuxtLink>

        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Apri menu"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div id="mainNavbar" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li
              v-for="voce in header.collegamenti"
              :key="voce.etichetta"
              class="nav-item"
              :class="{
                dropdown: haFigli(voce),
                'voce-attiva': isVoceAttiva(voce),
              }"
            >
              <!-- MENU CON FIGLI -->
              <template v-if="haFigli(voce)">
                <button
                  type="button"
                  class="nav-link  dropdown-toggle text-white px-3 py-2 d-flex align-items-center gap-2 border-0 bg-transparent rounded"
                  :class="{
                    'link-attivo': isVoceAttiva(voce),
                  }"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="attivaMenu(voce.etichetta)"
                >
                  <span>{{ voce.etichetta }}</span>

                  <i
                    class="bi bi-chevron-down ms-auto freccia-menu small"
                    :class="{
                      'rotate-180': menuAperti[voce.etichetta],
                    }"
                    aria-hidden="true"
                  />
                </button>

                <ul class="dropdown-menu shadow border-0 rounded-3 p-2">
                  <li
                    v-for="figlio in voce.figli"
                    :key="figlio.etichetta"
                  >
                    <!-- LINK ESTERNO -->
                    <a
                      v-if="figlio.esterno"
                      :href="figlio.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="dropdown-item d-flex align-items-center gap-3 rounded-2 py-2"
                    >
                      <i
                        v-if="figlio.icona"
                        :class="[figlio.icona, 'text-danger']"
                        aria-hidden="true"
                      />

                      <span>{{ figlio.etichetta }}</span>

                      <i
                        class="bi bi-box-arrow-up-right ms-auto text-secondary small freccia-dropdown"
                        aria-hidden="true"
                      />
                    </a>

                    <!-- LINK INTERNO -->
                    <NuxtLink
                      v-else
                      :to="figlio.url"
                      class="dropdown-item d-flex align-items-center gap-3 rounded-2 py-2"
                      :class="{
                        'dropdown-item-attivo': isLinkAttivo(figlio.url),
                      }"
                    >
                      <i
                        v-if="figlio.icona"
                        :class="[figlio.icona, 'text-danger']"
                        aria-hidden="true"
                      />

                      <span>{{ figlio.etichetta }}</span>

                      <i
                        class="bi bi-chevron-right ms-auto text-secondary small freccia-dropdown"
                        aria-hidden="true"
                      />
                    </NuxtLink>
                  </li>
                </ul>
              </template>

              <!-- MENU SENZA FIGLI -->
              <template v-else>
                <!-- LINK ESTERNO -->
                <a
                  v-if="voce.esterno"
                  :href="voce.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link nav-link-arrow text-white px-3 py-2 d-flex align-items-center gap-2"
                >
                  <span>{{ voce.etichetta }}</span>

                  <i
                    class="bi bi-box-arrow-up-right ms-auto freccia-menu small"
                    aria-hidden="true"
                  />
                </a>

                <!-- LINK INTERNO -->
                <NuxtLink
                  v-else
                  :to="voce.url"
                  class="nav-link nav-link-arrow text-white px-3 py-2 d-flex align-items-center gap-2"
                  :class="{
                    'link-attivo': isLinkAttivo(voce.url),
                  }"
                >
                  <span>{{ voce.etichetta }}</span>

                  <i
                    class="bi bi-chevron-right ms-auto freccia-menu small"
                    aria-hidden="true"
                  />
                </NuxtLink>
              </template>
            </li>

            <!-- PULSANTE AZIONE -->
            <li class="nav-item mt-3 mt-lg-0 ms-lg-3">
              <NuxtLink
                :to="header.azione.url"
                class="btn btn-light text-danger fw-semibold rounded-pill px-4 py-2 w-100 d-flex align-items-center justify-content-center gap-2 pulsante-azione"
              >
                <i
                  :class="[header.azione.icona]"
                  aria-hidden="true"
                />

                <span>{{ header.azione.etichetta }}</span>

                <i
                  class="bi bi-chevron-right icona-pulsante small"
                  aria-hidden="true"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
type VoceNavigazione = {
  etichetta: string;
  url?: string;
  icona?: string;
  esterno?: boolean;
  figli?: VoceNavigazione[];
};

type Header = {
  marchio: {
    immagine: string;
    alt: string;
  };

  collegamenti: VoceNavigazione[];

  azione: {
    etichetta: string;
    url: string;
    icona: string;
  };
};

const props = defineProps<{
  header: Header;
}>();

const header = props.header;

const route = useRoute();

/**
 * Verifica se una voce corrisponde alla pagina attuale.
 *
 * Esempio:
 * /chi-siamo
 * /chi-siamo/storia
 *
 * In entrambi i casi /chi-siamo viene considerato attivo.
 */
const isLinkAttivo = (url?: string) => {
  if (!url) {
    return false;
  }

  if (url === "/") {
    return route.path === "/";
  }

  return (
    route.path === url ||
    route.path.startsWith(`${url}/`)
  );
};

/**
 * Verifica se una voce del menu ha una sottovoce attiva.
 */
const haFiglioAttivo = (voce: VoceNavigazione) => {
  return (
    voce.figli?.some((figlio) => isLinkAttivo(figlio.url)) ??
    false
  );
};

/**
 * Verifica se la voce principale è attiva
 * oppure se contiene una sottovoce attiva.
 */
const isVoceAttiva = (voce: VoceNavigazione) => {
  return (
    isLinkAttivo(voce.url) ||
    haFiglioAttivo(voce)
  );
};

const haFigli = (voce: VoceNavigazione) => {
  return Boolean(voce.figli?.length);
};

const menuAperti = reactive<Record<string, boolean>>({});

const attivaMenu = (etichetta: string) => {
  const statoAttuale = !!menuAperti[etichetta];

  Object.keys(menuAperti).forEach((chiave) => {
    menuAperti[chiave] = false;
  });

  menuAperti[etichetta] = !statoAttuale;
};
</script>

<style scoped>
/* =========================================================
   LOGO
   ========================================================= */

.brand-logo {
  max-height: 120px;
  width: auto;
  object-fit: contain;
}


/* =========================================================
   DROPDOWN
   ========================================================= */

.dropdown-item {
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: var(--bs-danger);
  color: #fff;
}

.dropdown-item:hover i,
.dropdown-item:focus i {
  color: #fff !important;
}


/* =========================================================
   DROPDOWN ITEM ATTIVO
   ========================================================= */

.dropdown-item-attivo {
  background-color: var(--bs-danger);
  color: #fff !important;
  font-weight: 600;
}

.dropdown-item-attivo i {
  color: #fff !important;
}

.dropdown-item-attivo:hover,
.dropdown-item-attivo:focus {
  background-color: var(--bs-danger);
  color: #fff !important;
}


/* =========================================================
   FRECCIA DROPDOWN
   ========================================================= */

.freccia-dropdown {
  transition:
    transform 0.3s cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );
}

.dropdown-item:hover .freccia-dropdown,
.dropdown-item:focus .freccia-dropdown {
  transform: translateX(8px);
}


/* =========================================================
   LINK PRINCIPALI
   ========================================================= */

.nav-link-arrow {
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.nav-link-arrow .freccia-menu {
  transition:
    transform 0.3s cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );
}

.nav-link-arrow:hover .freccia-menu,
.nav-link-arrow:focus .freccia-menu {
  transform: translateX(8px);
}


/* =========================================================
   LINK ATTIVO
   ========================================================= */

.link-attivo {
  position: relative;
  font-weight: 600;
}


/*
 * Sottolineatura bianca.
 *
 * Usiamo ::before invece di text-decoration
 * per avere una linea più elegante e controllabile.
 */

.link-attivo::before {
  content: "";

  position: absolute;

  left: 0.75rem;
  right: 0.75rem;
  bottom: 0.25rem;

  height: 2px;

  background-color: #fff;

  border-radius: 999px;
}


/* =========================================================
   MENU DROPDOWN ATTIVO
   ========================================================= */

.voce-attiva > .dropdown-toggle {
  position: relative;
  font-weight: 600;
}

.voce-attiva > .dropdown-toggle::before {
  content: "";

  position: absolute;

  left: 0.75rem;
  right: 0.75rem;
  bottom: -0.4rem;

  height: 3.5px;

  background-color: #fff;

  border-radius: 999px;
}


/* =========================================================
   FRECCIA MENU
   ========================================================= */

.freccia-menu {
  transition:
    transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.dropdown-toggle::after {
  display: none !important;
}


/* =========================================================
   PULSANTE AZIONE
   ========================================================= */

.pulsante-azione {
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.icona-pulsante {
  transition:
    transform 0.3s cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );
}

.pulsante-azione:hover .icona-pulsante,
.pulsante-azione:focus .icona-pulsante {
  transform: translateX(8px);
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 991.98px) {
  .dropdown-menu {
    width: 100%;
    margin-top: 0;
  }

  .nav-link-arrow {
    justify-content: space-between;
  }

  .pulsante-azione {
    justify-content: center;
  }

  /*
   * Su mobile allarghiamo leggermente la sottolineatura
   * per rendere più evidente la pagina attiva.
   */

  .link-attivo::before,
  .voce-attiva > .dropdown-toggle::before {
    left: 0.75rem;
    right: 0.75rem;
  }
}
</style>
