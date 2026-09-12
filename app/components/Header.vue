<template>
  <header>
    <nav
      class="navbar navbar-expand-lg bg-danger navbar-dark shadow-sm border-bottom border-dark border-opacity-75"
      aria-label="Navigazione principale"
    >
      <div class="container py-2">
        <NuxtLink
          to="/"
          class="navbar-brand me-lg-4"
          :aria-label="header.brand.imageAlt"
        >
          <NuxtImg
            :src="header.brand.imageUrl"
            :alt="header.brand.imageAlt"
            width="445"
            height="449"
            loading="eager"
            fetchpriority="high"
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
          aria-label="Menu di navigazione"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div id="mainNavbar" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li
              v-for="item in header.navItems"
              :key="item.label"
              class="nav-item"
              :class="{
                dropdown: hasChildren(item),
                'voce-attiva': isActiveItem(item),
              }"
            >
              <!-- MENU CON FIGLI -->
              <template v-if="hasChildren(item)">
                <button
                  type="button"
                  class="nav-link  dropdown-toggle text-white px-3 py-2 d-flex align-items-center gap-2 border-0 bg-transparent rounded"
                  :class="{
                    'link-attivo': isActiveItem(item),
                  }"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>{{ item.label }}</span>

                  <Icon
                    name="i-bi:chevron-down"
                    class="ms-auto freccia-menu small"
                    aria-hidden="true"
                  />
                </button>

                <ul class="dropdown-menu shadow border-0 rounded-3 p-2">
                  <li
                    v-for="child in item.children"
                    :key="child.label"
                  >
                    <!-- LINK ESTERNO -->
                    <a
                      v-if="child.external"
                      :href="child.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="dropdown-item d-flex align-items-center gap-3 rounded-2 py-2"
                    >
                      <Icon
                        v-if="child.icon"
                        :name="child.icon"
                        class="text-danger"
                        aria-hidden="true"
                      />

                      <span>{{ child.label }}</span>

                      <Icon
                        name="i-bi:box-arrow-up-right"
                        class="ms-auto text-secondary small freccia-dropdown"
                        aria-hidden="true"
                      />
                    </a>

                    <!-- LINK INTERNO -->
                    <NuxtLink
                      v-else
                      :to="child.url"
                      class="dropdown-item d-flex align-items-center gap-3 rounded-2 py-2"
                      :class="{
                        'dropdown-item-attivo': isActiveLink(child.url),
                      }"
                    >
                      <Icon
                        v-if="child.icon"
                        :name="child.icon"
                        class="text-danger"
                        aria-hidden="true"
                      />

                      <span>{{ child.label }}</span>

                      <Icon
                        name="i-bi:chevron-right"
                        class="ms-auto text-secondary small freccia-dropdown"
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
                  v-if="item.external"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link nav-link-arrow text-white px-3 py-2 d-flex align-items-center gap-2"
                >
                  <span>{{ item.label }}</span>

                  <Icon
                    name="i-bi:box-arrow-up-right"
                    class="ms-auto freccia-menu small"
                    aria-hidden="true"
                  />
                </a>

                <!-- LINK INTERNO -->
                <NuxtLink
                  v-else
                  :to="item.url"
                  class="nav-link nav-link-arrow text-white px-3 py-2 d-flex align-items-center gap-2"
                  :class="{
                    'link-attivo': isActiveLink(item.url),
                  }"
                >
                  <span>{{ item.label }}</span>

                  <Icon
                    name="i-bi:chevron-right"
                    class="ms-auto freccia-menu small"
                    aria-hidden="true"
                  />
                </NuxtLink>
              </template>
            </li>

            <!-- PULSANTE AZIONE -->
            <li class="nav-item mt-3 mt-lg-0 ms-lg-3">
              <NuxtLink
                :to="header.action.url"
                class="btn btn-light text-danger fw-semibold rounded-pill px-4 py-2 w-100 d-flex align-items-center justify-content-center gap-2 pulsante-azione"
              >
                <Icon
                  :name="header.action.icon"
                  aria-hidden="true"
                />

                <span>{{ header.action.label }}</span>

                <Icon
                  name="i-bi:chevron-right"
                  class="icona-pulsante small"
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
import type { CtaLink, NavLink } from '~/types';

export type HeaderData = {
  brand: {
    imageUrl: string;
    imageAlt: string;
  };

  navItems: NavLink[];

  action: CtaLink & { icon: string };
};

const props = defineProps<{
  header: HeaderData;
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
const isActiveLink = (url?: string) => {
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
const hasActiveChild = (item: NavLink) => {
  return (
    item.children?.some((child) => isActiveLink(child.url)) ??
    false
  );
};

/**
 * Verifica se la voce principale è attiva
 * oppure se contiene una sottovoce attiva.
 */
const isActiveItem = (item: NavLink) => {
  return (
    isActiveLink(item.url) ||
    hasActiveChild(item)
  );
};

const hasChildren = (item: NavLink) => {
  return Boolean(item.children?.length);
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

/*
 * Su hover/focus il fondo diventa rosso: icona e freccia devono passare al
 * bianco, altrimenti restano `text-danger`/`text-secondary` e spariscono.
 * Il selettore agisce sugli elementi figli perché <Icon> non rende un <i>.
 */
.dropdown-item:hover > *,
.dropdown-item:focus > * {
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

.dropdown-item-attivo > * {
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

/*
 * Lo stato aperto è quello che Bootstrap applica al toggle (.show):
 * così la freccia resta allineata anche quando il menu viene chiuso
 * da tastiera (Esc) o con un click esterno.
 */
.dropdown-toggle.show .freccia-menu {
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

  /*
   * Bootstrap imposta `white-space: nowrap` sulle voci: con le etichette
   * lunghe del menu il dropdown a tutta larghezza sfondava lateralmente.
   */
  .dropdown-item {
    white-space: normal;
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
