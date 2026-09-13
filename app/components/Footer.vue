<template>
  <footer class="bg-danger text-white">
    <div class="container py-5">
      <div class="row gy-4 gy-xl-5 justify-content-center">

        <div class="col-12 col-md-6 col-xl-3 pe-xl-3 text-center text-xl-start">
          <NuxtLink
            :to="footer.brand.url"
            :aria-label="footer.brand.ariaLabel"
            class="d-inline-block mb-3 p-2 bg-white rounded-3 shadow-sm"
          >
            <NuxtImg
              :src="footer.brand.imageUrl"
              :alt="footer.brand.imageAlt"
              width="445"
              height="449"
              loading="lazy"
              class="img-fluid d-block brand-logo"
            />
          </NuxtLink>

          <p class="text-white small lh-lg mb-4">
            {{ footer.brand.description }}
          </p>

          <div class="d-flex gap-2 justify-content-center justify-content-xl-start">
            <a
              v-for="social in footer.socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
              style="width: 38px; height: 38px"
            >
              <Icon :name="social.icon" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          v-for="(column, index) in footer.columns"
          :key="column.titolo"
          class="col-12 col-md-3 col-xl-3 text-center text-xl-start"
          :class="{ 'offset-xl-3': index > 0 && index % 3 === 0 }"
        >
          <h6
            :id="`footer-gruppo-${index}`"
            class="fw-semibold text-uppercase fs-6 tracking-wider border-bottom border-white border-opacity-25 pb-2 mb-3"
          >
            {{ column.titolo }}
          </h6>

          <nav :aria-labelledby="`footer-gruppo-${index}`">
            <ul class="list-unstyled mb-0">
              <li
                v-for="link in column.link"
                :key="link.label"
                class="mb-2"
              >
                <a
                  v-if="link.external"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-light text-decoration-none small d-inline-block"
                >
                  {{ link.label }}
                </a>

                <NuxtLink
                  v-else
                  :to="link.url"
                  class="link-light text-decoration-none small d-inline-block"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <template v-if="index === 0">
            <h6
              class="fw-semibold text-uppercase fs-6 tracking-wider border-bottom border-white border-opacity-25 pb-2 mb-3 mt-4"
            >
              {{ footer.contacts.title }}
            </h6>

            <ul class="list-unstyled mb-0 small">
              <li class="mb-3">
                <address class="mb-0 fst-normal">
                  <a
                    :href="footer.contacts.address.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-light text-decoration-none d-flex gap-2 align-items-start justify-content-center justify-content-xl-start"
                  >
                    <Icon
                      :name="footer.contacts.address.icon"
                      class="mt-1 flex-shrink-0 opacity-75"
                      aria-hidden="true"
                    />

                    <span>{{ footer.contacts.address.label }}</span>
                  </a>
                </address>
              </li>

              <li class="mb-3">
                <a
                  :href="`tel:${footer.contacts.phone.value}`"
                  class="link-light text-decoration-none d-flex gap-2 align-items-center justify-content-center justify-content-xl-start"
                >
                  <Icon
                    :name="footer.contacts.phone.icon"
                    class="flex-shrink-0 opacity-75"
                    aria-hidden="true"
                  />

                  <span>{{ footer.contacts.phone.label }}</span>
                </a>
              </li>

              <li>
                <a
                  :href="`mailto:${footer.contacts.email.value}`"
                  class="link-light text-decoration-none d-flex gap-2 align-items-center justify-content-center justify-content-xl-start"
                >
                  <Icon
                    :name="footer.contacts.email.icon"
                    class="flex-shrink-0 opacity-75"
                    aria-hidden="true"
                  />

                  <span class="text-break">
                    {{ footer.contacts.email.label }}
                  </span>
                </a>
              </li>
            </ul>
          </template>
        </div>
      </div>

      <div class="row mt-5 justify-content-center">
        <div class="col-12">
          <div
            class="bg-white text-dark rounded-4 p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-center align-items-lg-center justify-content-between text-center text-lg-start gap-4 shadow-lg border-start border-danger border-5"
          >
            <div>
              <h3 class="text-danger fw-bold mb-1 fs-4 fs-lg-3">
                {{ footer.cta.title }}
              </h3>

              <p class="text-muted small mb-0">
                {{ footer.cta.description }}
              </p>
            </div>

            <NuxtLink
              :to="footer.cta.url"
              class="btn btn-danger rounded-pill fw-semibold px-4 py-2 text-nowrap shadow-sm pulsante-azione"
            >
              <Icon
                :name="footer.cta.icon"
                class="me-2"
                aria-hidden="true"
              />

              {{ footer.cta.label }}

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

    <div
      class="bg-danger bg-opacity-20 border-top border-white border-2 border-opacity-75"
    >
      <div class="container py-3">
        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 text-center text-lg-start"
        >
          <p class="text-white mb-0">
            {{ footer.legalInfo }}
          </p>

          <nav
            aria-label="Link legali"
            class="d-flex flex-wrap justify-content-center gap-3 gap-lg-4"
          >
            <template
              v-for="link in footer.legalLinks"
              :key="link.label"
            >
              <a
                v-if="link.external"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-light small text-decoration-none"
              >
                {{ link.label }}
              </a>

              <NuxtLink
                v-else
                :to="link.url"
                class="link-light small text-decoration-none"
              >
                {{ link.label }}
              </NuxtLink>
            </template>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { CtaLink, GruppoNavigazione, LinkNavigazione, SocialLink } from '~/types';

type ContactEntry = {
  label: string;
  value: string;
  icon: string;
};

type ContactLink = {
  label: string;
  url: string;
  icon: string;
};

export type FooterData = {
  brand: {
    url: string;
    imageUrl: string;
    imageAlt: string;
    ariaLabel: string;
    description: string;
  };

  socialLinks: SocialLink[];

  columns: GruppoNavigazione[];

  contacts: {
    title: string;
    address: ContactLink;
    phone: ContactEntry;
    email: ContactEntry;
  };

  cta: CtaLink & {
    title: string;
    description: string;
    icon: string;
  };

  legalLinks: LinkNavigazione[];

  legalInfo: string;
};

defineProps<{
  footer: FooterData;
}>();
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
