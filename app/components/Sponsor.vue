<template>
  <section class="py-5 bg-light overflow-hidden">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-12 col-lg-8">
          <span class="text-danger text-uppercase fw-semibold">
            {{ sponsor.eyebrow }}
          </span>

          <h2 class="display-6 fw-bold mt-2 mb-3">
            {{ sponsor.titolo }}
          </h2>

          <p class="lead text-secondary mb-0">
            {{ sponsor.descrizione }}
          </p>
        </div>
      </div>

      <div
        v-if="sponsor.sponsors?.length"
        class="sponsor-marquee"
        :style="{
          '--marquee-duration': `${sponsor.velocita || 25}s`,
        }"
      >
        <div class="sponsor-track">
          <!-- Prima lista -->
          <div class="sponsor-list">
            <a
              v-for="item in sponsor.sponsors"
              :key="`first-${item.id}`"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="sponsor-link"
              :aria-label="`Visita il sito di ${item.azienda}`"
            >
              <NuxtImg
                :src="item.logo"
                :alt="item.alt"
                width="220"
                height="100"
                sizes="220px"
                format="webp"
                loading="lazy"
                class="sponsor-logo"
              />
            </a>
          </div>

          <!-- Seconda lista -->
          <div class="sponsor-list" aria-hidden="true">
            <a
              v-for="item in sponsor.sponsors"
              :key="`second-${item.id}`"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="-1"
              class="sponsor-link"
            >
              <NuxtImg
                :src="item.logo"
                :alt="item.alt"
                width="220"
                height="100"
                sizes="220px"
                format="webp"
                loading="lazy"
                class="sponsor-logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        v-if="sponsor.cta"
        class="row justify-content-center text-center mt-5"
      >
        <div class="col-12 col-lg-8">
          <h3 class="h4 fw-bold mb-3">
            {{ sponsor.cta.titolo }}
          </h3>

          <p class="text-secondary mb-4">
            {{ sponsor.cta.descrizione }}
          </p>

          <NuxtLink :to="sponsor.cta.url" class="btn btn-danger btn-lg px-4">
            {{ sponsor.cta.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SponsorItem {
  id: number;
  azienda: string;
  logo: string;
  alt: string;
  url: string;
  categoria?: string;
  posizione?: string;
}

interface SponsorData {
  eyebrow: string;
  titolo: string;
  descrizione: string;
  velocita?: number;
  sponsors: SponsorItem[];
  cta?: {
    titolo: string;
    descrizione: string;
    label: string;
    url: string;
  };
}

defineProps<{
  sponsor: SponsorData;
}>();
</script>

<style scoped>
.sponsor-marquee {
  width: 100%;
  overflow: hidden;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );

  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
}

.sponsor-track {
  display: flex;
  width: max-content;
  animation: sponsorMarquee var(--marquee-duration) linear infinite;
  will-change: transform;
}

.sponsor-list {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-right: 3rem;
  flex-shrink: 0;
}

.sponsor-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-decoration: none;
}

.sponsor-logo {
  display: block;
  width: 180px;
  height: 90px;
  object-fit: contain;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.sponsor-link:hover .sponsor-logo {
  transform: scale(1.05);
  opacity: 0.85;
}

@keyframes sponsorMarquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 767.98px) {
  .sponsor-list {
    gap: 2rem;
    padding-right: 2rem;
  }

  .sponsor-logo {
    width: 140px;
    height: 70px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-track {
    animation-play-state: paused;
  }
}
</style>
