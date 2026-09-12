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
          @click="closeMenu"
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

        <div
          id="mainNavbar"
          ref="navbarCollapse"
          class="collapse navbar-collapse fullscreen-menu"
        >
          <button
            type="button"
            class="mobile-menu-close d-lg-none"
            aria-label="Chiudi menu"
            @click="closeMenu"
          >
            <Icon
              name="i-bi:x-lg"
              aria-hidden="true"
            />
          </button>

          <ul class="navbar-nav ms-auto align-items-lg-center px-3 px-lg-0">
            <li
              v-for="item in header.navItems"
              :key="item.label"
              class="nav-item"
              :class="{
                dropdown: hasChildren(item),
                'voce-attiva': isActiveItem(item),
              }"
            >
              <template v-if="hasChildren(item)">
                <button
                  type="button"
                  class="nav-link dropdown-toggle text-white px-3 py-2 d-flex align-items-center gap-2 border-0 bg-transparent rounded w-100"
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
                    <a
                      v-if="child.external"
                      :href="child.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="dropdown-item d-flex align-items-center gap-3 rounded-2 py-2"
                      @click="closeMenu"
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

                    <NuxtLink
                      v-else
                      :to="child.url"
                      class="dropdown-item d-flex align-items-center gap-3 rounded-2 py-2"
                      :class="{
                        'dropdown-item-attivo': isActiveLink(child.url),
                      }"
                      @click="closeMenu"
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

              <template v-else>
                <a
                  v-if="item.external"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link nav-link-arrow text-white px-3 py-2 d-flex align-items-center gap-2"
                  @click="closeMenu"
                >
                  <span>{{ item.label }}</span>

                  <Icon
                    name="i-bi:box-arrow-up-right"
                    class="ms-auto freccia-menu small"
                    aria-hidden="true"
                  />
                </a>

                <NuxtLink
                  v-else
                  :to="item.url"
                  class="nav-link nav-link-arrow text-white px-3 py-2 d-flex align-items-center gap-2"
                  :class="{
                    'link-attivo': isActiveLink(item.url),
                  }"
                  @click="closeMenu"
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

            <li class="nav-item mt-4 mt-lg-0 ms-lg-3">
              <NuxtLink
                :to="header.action.url"
                class="btn btn-light text-danger fw-semibold rounded-pill px-4 py-2 w-100 d-flex align-items-center justify-content-center gap-2 pulsante-azione"
                @click="closeMenu"
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
import { ref } from 'vue'
import type { CtaLink, NavLink } from '~/types'

export type HeaderData = {
  brand: {
    imageUrl: string
    imageAlt: string
  }
  navItems: NavLink[]
  action: CtaLink & {
    icon: string
  }
}

const props = defineProps<{
  header: HeaderData
}>()

const header = props.header
const route = useRoute()

const navbarCollapse = ref<HTMLElement | null>(null)

const closeMenu = () => {
  if (
    navbarCollapse.value &&
    navbarCollapse.value.classList.contains('show')
  ) {
    if (
      typeof window !== 'undefined' &&
      (window as any).bootstrap
    ) {
      const bsCollapse =
        (window as any).bootstrap.Collapse.getInstance(
          navbarCollapse.value,
        ) ||
        new (window as any).bootstrap.Collapse(
          navbarCollapse.value,
          {
            toggle: false,
          },
        )

      bsCollapse.hide()
    } else {
      navbarCollapse.value.classList.remove('show')
    }
  }
}

const isActiveLink = (url?: string) => {
  if (!url) {
    return false
  }

  if (url === '/') {
    return route.path === '/'
  }

  return (
    route.path === url ||
    route.path.startsWith(`${url}/`)
  )
}

const hasActiveChild = (item: NavLink) => {
  return (
    item.children?.some((child) =>
      isActiveLink(child.url),
    ) ?? false
  )
}

const isActiveItem = (item: NavLink) => {
  return (
    isActiveLink(item.url) ||
    hasActiveChild(item)
  )
}

const hasChildren = (item: NavLink) => {
  return Boolean(item.children?.length)
}
</script>

<style scoped>
.brand-logo {
  max-height: 120px;
  width: auto;
  object-fit: contain;
}

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

.dropdown-item:hover > *,
.dropdown-item:focus > * {
  color: #fff !important;
}

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

.link-attivo {
  position: relative;
  font-weight: 600;
}

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

.freccia-menu {
  transition:
    transform 0.3s ease;
}

.dropdown-toggle.show .freccia-menu {
  transform: rotate(180deg);
}

.dropdown-toggle::after {
  display: none !important;
}

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

@media (max-width: 991.98px) {
  .fullscreen-menu.collapse.show,
  .fullscreen-menu.collapsing {
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100dvh;

    background-color: var(--bs-danger);

    z-index: 1050;

    overflow-y: auto;

    display: flex !important;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    padding: 5rem 1.5rem 3rem;

    transition: none !important;
  }

  .fullscreen-menu.collapsing {
    height: 100dvh !important;
  }

  .mobile-menu-close {
    position: absolute;

    top: 1.25rem;
    right: 1.25rem;

    width: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: 0;
    background: transparent;

    color: #fff;

    font-size: 1.75rem;

    z-index: 1060;

    cursor: pointer;
  }

  .mobile-menu-close:hover,
  .mobile-menu-close:focus-visible {
    color: #fff;
    opacity: 0.75;
  }

  .mobile-menu-close:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
    border-radius: 0.25rem;
  }

  .fullscreen-menu > .navbar-nav {
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 0 !important;
    margin: 0;
  }

  .nav-item {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .nav-link,
  .dropdown-toggle {
    width: 100%;
    justify-content: center;
    font-size: 1.25rem;
  }

  .nav-link-arrow {
    justify-content: center;
  }

  .nav-link-arrow,
  .dropdown-toggle {
    position: relative;
  }

  .nav-link-arrow .freccia-menu,
  .dropdown-toggle .freccia-menu {
    position: absolute;
    right: 1rem;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    position: static !important;

    inset: auto !important;

    float: none !important;

    width: 100%;

    margin: 0 !important;

    padding: 0.5rem !important;

    background-color: rgba(255, 255, 255, 0.95);

    border: 0 !important;
    border-radius: 0.75rem !important;

    box-shadow: none !important;

    transform: none !important;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-menu:not(.show) {
    display: none;
  }

  .dropdown-item {
    white-space: normal;
    padding: 0.75rem 1rem;
  }

  .pulsante-azione {
    justify-content: center;
    font-size: 1.1rem;
  }

  .link-attivo::before,
  .voce-attiva > .dropdown-toggle::before {
    left: 0.75rem;
    right: 0.75rem;
  }
}
</style>