<template>
  <section class="hero-wrapper bg-danger text-white py-5">
    <div class="container py-lg-4">
      <div class="row align-items-center g-5">
        <div class="col-12 col-lg-6 text-center text-lg-start">
          <div v-if="currentContent.badge" class="mb-3">
            <span
              class="badge bg-white bg-opacity-20 text-danger px-3 py-2 rounded-pill fw-semibold border border-white border-opacity-25 fs-6"
            >
              <Icon
                v-if="currentContent.badgeIcon"
                :name="currentContent.badgeIcon"
                class="me-2"
                aria-hidden="true"
              />
              {{ currentContent.badge }}
            </span>
          </div>

          <component
            :is="headingLevel"
            class="display-4 fw-bold text-white lh-sm mb-3"
          >
            {{ currentContent.title }}
          </component>

          <p class="lead text-white text-opacity-85 mb-4 fs-5">
            {{ currentContent.description }}
          </p>

          <div
            class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
          >
            <NuxtLink
              v-if="currentContent.primaryCta"
              :to="currentContent.primaryCta.url"
              class="btn btn-light text-danger btn-lg px-4 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2 fw-bold cta-button"
            >
              <Icon
                v-if="currentContent.primaryCta.icon"
                :name="currentContent.primaryCta.icon"
                class="fs-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="cta-label">
                {{ currentContent.primaryCta.label }}
              </span>
            </NuxtLink>

            <NuxtLink
              v-if="currentContent.secondaryCta"
              :to="currentContent.secondaryCta.url"
              class="btn btn-outline-light btn-lg px-4 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2 fw-semibold cta-button"
            >
              <Icon
                v-if="currentContent.secondaryCta.icon"
                :name="currentContent.secondaryCta.icon"
                class="fs-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="cta-label">
                {{ currentContent.secondaryCta.label }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="hero-image-container">
            <div
              class="image-wrapper rounded-4 overflow-hidden shadow-lg border border-white border-opacity-25"
            >
              <NuxtImg
                :src="currentContent.imageUrl"
                :alt="currentContent.imageAlt || currentContent.title"
                width="1200"
                height="800"
                class="hero-image w-100 h-100 object-fit-cover"
                sizes="100vw lg:50vw"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroContentByPath, defaultHeroContent, type HeroContent } from '~/data/hero'

withDefaults(
  defineProps<{
    headingLevel?: 'h1' | 'h2'
  }>(),
  {
    headingLevel: 'h1',
  },
)

const route = useRoute()

const currentContent = computed<HeroContent>(() => {
  return heroContentByPath[route.path] || defaultHeroContent
})
</script>

<style scoped>
.hero-wrapper {
  overflow: hidden;
}

.image-wrapper {
  aspect-ratio: 3 / 2;
}

.hero-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-button {
  white-space: nowrap;
}

.cta-label {
  display: inline-block;
}

@media (max-width: 575.98px) {
  .cta-button {
    width: 100%;
    white-space: normal;
  }

  .cta-label {
    text-align: center;
  }
}
</style>