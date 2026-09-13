<template>
  <div class="alternating-sections container-fluid p-0">
    <section
      v-for="(section, index) in sections"
      :key="section.id || index"
      :class="[
        'py-5 px-3 px-md-5',
        index % 2 === 0 ? 'bg-white' : 'bg-light',
      ]"
    >
      <div class="container">
        <div
          class="row align-items-center"
          :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }"
        >
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper rounded overflow-hidden shadow-sm">
              <NuxtImg
                :src="section.imageUrl"
                :alt="section.title"
                width="800"
                height="600"
                sizes="sm:100vw md:100vw lg:50vw"
                class="img-fluid w-100 object-fit-cover"
                style="height: 350px"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div class="col-12 col-lg-6 text-center text-lg-start">
            <div
              :class="[
                index % 2 !== 0 ? 'pe-lg-5' : 'ps-lg-5',
              ]"
            >
              <h2 class="fw-bold mb-3 text-dark">
                {{ section.title }}
              </h2>

              <p class="text-muted mb-4 lead fs-6">
                {{ section.description }}
              </p>

              <template v-if="section.cta?.label && section.cta?.url">
                <a
                  v-if="isExternal(section.cta.url)"
                  :href="section.cta.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-danger fw-semibold btn-lg px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
                >
                  <span>{{ section.cta.label }}</span>
                  <Icon
                    v-if="section.cta.icon"
                    :name="section.cta.icon"
                    aria-hidden="true"
                  />
                  <Icon
                    v-else
                    name="i-bi:box-arrow-up-right"
                    aria-hidden="true"
                    class="fs-6"
                  />
                </a>

                <NuxtLink
                  v-else
                  :to="section.cta.url"
                  class="btn btn-danger fw-semibold btn-lg px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
                >
                  <span>{{ section.cta.label }}</span>
                  <Icon
                    v-if="section.cta.icon"
                    :name="section.cta.icon"
                    aria-hidden="true"
                  />
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { CtaLink } from '~/types'

export interface AlternatingSection {
  id?: number | string
  title: string
  description: string
  imageUrl: string
  cta?: CtaLink
}

defineProps<{
  sections: AlternatingSection[]
}>()

function isExternal(url: string): boolean {
  if (!url) return false
  return (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('//') ||
    url.startsWith('mailto:') ||
    url.startsWith('tel:') ||
    /\.(pdf|doc|docx|xls|xlsx|zip)$/i.test(url)
  )
}
</script>

<style scoped>
.alternating-sections {
  overflow-x: hidden;
}
</style>