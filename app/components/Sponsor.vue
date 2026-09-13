<template>
  <section class="py-5 bg-light overflow-hidden">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-12 col-lg-8">
          <span class="text-danger text-uppercase fw-semibold">
            {{ sponsor.eyebrow }}
          </span>

          <h2 class="display-6 fw-bold mt-2 mb-3">
            {{ sponsor.title }}
          </h2>

          <p class="lead text-secondary mb-0">
            {{ sponsor.description }}
          </p>
        </div>
      </div>

      <div
        v-if="sponsor.items?.length"
        class="sponsor-marquee"
        :style="{
          '--marquee-duration': `${sponsor.speed || 25}s`,
        }"
      >
        <div class="sponsor-track">

          <div class="sponsor-list">
            <a
              v-for="item in sponsor.items"
              :key="`first-${item.id}`"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="sponsor-link"
              :aria-label="`Visita il sito di ${item.name}`"
            >
              <NuxtImg
                :src="item.imageUrl"
                :alt="item.imageAlt"
                width="220"
                height="100"
                sizes="220px"
                format="webp"
                loading="lazy"
                class="sponsor-logo"
              />
            </a>
          </div>

          <div class="sponsor-list" aria-hidden="true">
            <a
              v-for="item in sponsor.items"
              :key="`second-${item.id}`"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="-1"
              class="sponsor-link"
            >
              <NuxtImg
                :src="item.imageUrl"
                :alt="item.imageAlt"
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
          <h2 class="h4 fw-bold mb-3">
            {{ sponsor.cta.title }}
          </h2>

          <p class="text-secondary mb-4">
            {{ sponsor.cta.description }}
          </p>

          <NuxtLink :to="sponsor.cta.url" class="btn btn-danger fw-semibold btn-lg px-4">
            {{ sponsor.cta.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CtaLink } from '~/types';

export interface SponsorItem {
  id: number;

  name: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
  category?: string;
  location?: string;
}

export interface SponsorSectionData {
  eyebrow: string;
  title: string;
  description: string;

  speed?: number;
  items: SponsorItem[];
  cta?: CtaLink & {
    title: string;
    description: string;
  };
}

defineProps<{
  sponsor: SponsorSectionData;
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
