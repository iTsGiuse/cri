<template>
  <main class="bg-white">
    <section class="bg-white">
      <div class="container">
        <div class="pt-4 pt-lg-5">
          <NuxtLink
            :to="pageConfig.back.url"
            class="text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 border rounded-5 py-3 px-3 bg-danger text-white"
          >
            <Icon :name="pageConfig.back.icon" aria-hidden="true" />
            <span>{{ pageConfig.back.label }}</span>
          </NuxtLink>
        </div>

        <header class="py-5 py-lg-6">
          <div class="mb-3">
            <span class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 fw-semibold">
              <Icon :name="pageConfig.meta.categoryIcon" class="me-1" aria-hidden="true" />
              {{ categoryName }}
            </span>
          </div>

          <h1 class="display-3 fw-bold text-dark lh-sm mb-4">
            {{ article.title }}
          </h1>

          <p class="lead text-secondary mb-4">
            {{ article.description }}
          </p>

          <time :datetime="article.publishedAt" class="text-secondary d-inline-flex align-items-center gap-2">
            <Icon :name="pageConfig.meta.dateIcon" class="text-danger" aria-hidden="true" />
            <span>
              {{ pageConfig.meta.publishedLabel }}
              <strong class="text-dark">{{ formatDate(article.publishedAt) }}</strong>
            </span>
          </time>
        </header>
      </div>
    </section>

    <section class="bg-white">
      <div class="container pb-4 pb-lg-5">
        <figure class="mb-0">
          <div class="ratio ratio-21x9 rounded-4 overflow-hidden bg-light shadow-sm">
            <NuxtImg
              :src="article.imageUrl"
              :alt="article.title"
              width="1400"
              height="600"
              format="webp"
              preload
              decoding="async"
              class="w-100 h-100 object-fit-cover"
            />
          </div>
        </figure>
      </div>
    </section>

    <section class="py-5 py-lg-6">
      <div class="container">
        <article class="contenuto-articolo">
          <section v-for="sezione in article.contenuti" :key="sezione.titolo" class="mb-5">
            <h2>{{ sezione.titolo }}</h2>

            <p v-for="paragrafo in sezione.paragrafi" :key="paragrafo">
              {{ paragrafo }}
            </p>

            <ul v-if="sezione.elenco?.length">
              <li v-for="voce in sezione.elenco" :key="voce">{{ voce }}</li>
            </ul>
          </section>

          <div v-if="article.chiamataAzione" class="alert alert-danger border-0 rounded-4 mt-4">
            <strong class="d-block mb-1">{{ article.chiamataAzione.titolo }}</strong>
            <span>{{ article.chiamataAzione.testo }}</span>
          </div>
        </article>

        <div class="border-top mt-5 pt-4">
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 gap-sm-5">
            <div class="d-flex align-items-center gap-3">
              <div
                class="rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center flex-shrink-0"
                style="width: 2.75rem; height: 2.75rem;"
                aria-hidden="true"
              >
                <Icon :name="pageConfig.author.icon" />
              </div>
              <div>
                <small class="text-secondary d-block">{{ pageConfig.author.label }}</small>
                <span class="fw-semibold text-dark">
                  {{ article.author ?? pageConfig.author.defaultAuthor }}
                </span>
              </div>
            </div>

            <div class="d-flex align-items-center gap-3">
              <div
                class="rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center flex-shrink-0"
                style="width: 2.75rem; height: 2.75rem;"
                aria-hidden="true"
              >
                <Icon :name="pageConfig.meta.dateIcon" />
              </div>
              <div>
                <small class="text-secondary d-block">{{ pageConfig.meta.dateLabel }}</small>
                <time :datetime="article.publishedAt" class="fw-semibold text-dark">
                  {{ formatDate(article.publishedAt) }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="relatedArticles.length" class="bg-light border-top py-4 py-lg-5">
      <div class="container">
        <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end gap-3 mb-4">
          <div>
            <span class="text-danger text-uppercase fw-semibold small">{{ pageConfig.related.eyebrow }}</span>
            <h2 class="h3 fw-bold text-dark mb-0 mt-1">{{ pageConfig.related.title }}</h2>
          </div>

          <NuxtLink
            :to="pageConfig.back.url"
            class="btn btn-outline-danger fw-semibold rounded-3 d-inline-flex align-items-center gap-2"
          >
            {{ pageConfig.related.allLabel }}
            <Icon :name="pageConfig.related.allIcon" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="row g-3 g-lg-4">
          <div v-for="related in relatedArticles" :key="related.id" class="col-12 col-md-6 col-lg-4">
            <article class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <NuxtLink
                :to="`${pageConfig.basePath}/${related.slug}`"
                class="d-block text-decoration-none"
                :aria-label="`${pageConfig.related.openLabel}: ${related.title}`"
              >
                <div class="ratio ratio-16x9 bg-light overflow-hidden">
                  <NuxtImg
                    :src="related.imageUrl"
                    :alt="related.title"
                    width="800"
                    height="450"
                    format="webp"
                    loading="lazy"
                    decoding="async"
                    sizes="100vw sm:50vw lg:33vw"
                    class="w-100 h-100 object-fit-cover"
                  />
                </div>
              </NuxtLink>

              <div class="card-body p-3 p-md-4 d-flex flex-column">
                <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                  <span class="badge bg-danger-subtle text-danger rounded-pill px-3 py-2 fw-medium">
                    {{ getCategoryName(related.categoryId) }}
                  </span>
                  <time :datetime="related.publishedAt" class="small text-secondary d-inline-flex align-items-center">
                    <Icon :name="pageConfig.related.dateIcon" class="me-1" aria-hidden="true" />
                    {{ formatDate(related.publishedAt) }}
                  </time>
                </div>

                <h3 class="h5 fw-bold text-dark mb-2">
                  <NuxtLink :to="`${pageConfig.basePath}/${related.slug}`" class="text-dark text-decoration-none">
                    {{ related.title }}
                  </NuxtLink>
                </h3>

                <p class="text-secondary mb-4">{{ related.description }}</p>

                <div class="mt-auto">
                  <NuxtLink
                    :to="`${pageConfig.basePath}/${related.slug}`"
                    class="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center gap-2"
                  >
                    {{ pageConfig.related.readLabel }}
                    <Icon :name="pageConfig.related.readIcon" aria-hidden="true" />
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { CategoriaComunicazione, ComunicazioneBase } from '~/types/comunicazioni'

interface PageConfig {
  basePath: string
  back: { label: string; icon: string; url: string }
  meta: { categoryIcon: string; dateIcon: string; publishedLabel: string; dateLabel: string }
  author: { label: string; icon: string; defaultAuthor: string }
  related: {
    eyebrow: string
    title: string
    allLabel: string
    allIcon: string
    openLabel: string
    dateIcon: string
    readLabel: string
    readIcon: string
  }
}

const props = defineProps<{
  article: ComunicazioneBase
  relatedArticles: ComunicazioneBase[]
  categories: CategoriaComunicazione[]
  pageConfig: PageConfig
}>()

const categoryName = computed(() => getCategoryName(props.article.categoryId))

function getCategoryName(categoryId: string): string {
  const category = props.categories.find((item) => item.id === categoryId)
  return category?.name ?? 'Generale'
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
</script>

<style scoped>
.contenuto-articolo {
  color: var(--bs-body-color);
  font-size: 1.075rem;
  line-height: 1.85;
}

.contenuto-articolo p { margin-bottom: 1.5rem; }
.contenuto-articolo > section:first-child h2 { margin-top: 0; }
.contenuto-articolo h2 {
  color: var(--bs-dark);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.contenuto-articolo ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}
.contenuto-articolo li { margin-bottom: 0.5rem; }

@media (max-width: 767.98px) {
  .contenuto-articolo {
    font-size: 1rem;
    line-height: 1.75;
  }
  .contenuto-articolo h2 {
    font-size: 1.45rem;
    margin-top: 2.25rem;
  }
}
</style>