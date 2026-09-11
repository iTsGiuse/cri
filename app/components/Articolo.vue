<template>
  <main class="bg-light">

    <!-- ========================================== -->
    <!-- HEADER ARTICOLO -->
    <!-- ========================================== -->

    <section class="bg-white border-bottom">
      <div class="container py-4 py-lg-5">

        <!-- Breadcrumb -->
        <nav
          aria-label="breadcrumb"
          class="mb-4"
        >
          <ol class="breadcrumb mb-0 small">

            <li class="breadcrumb-item">
              <NuxtLink
                to="/"
                class="text-secondary text-decoration-none"
              >
                Home
              </NuxtLink>
            </li>

            <li class="breadcrumb-item">
              <NuxtLink
                to="/news"
                class="text-secondary text-decoration-none"
              >
                News
              </NuxtLink>
            </li>

            <li
              class="breadcrumb-item active text-truncate"
              aria-current="page"
            >
              {{ articolo.titolo }}
            </li>

          </ol>
        </nav>

        <div class="row">
          <div class="col-12 col-xl-9">

            <!-- Categoria -->
            <div class="mb-3">
              <span
                class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 fw-semibold"
              >
                <Icon
                  name="i-bi:tag-fill"
                  class="me-1"
                />

                {{ getNomeCategoria(articolo.categoriaId) }}
              </span>
            </div>

            <!-- Titolo -->
            <h1 class="display-4 fw-bold text-dark mb-4 articolo-titolo">
              {{ articolo.titolo }}
            </h1>

            <!-- Descrizione -->
            <p class="lead text-secondary mb-4 articolo-introduzione">
              {{ articolo.descrizione }}
            </p>

            <!-- Data -->
            <div class="d-flex align-items-center gap-2 text-secondary">

              <Icon
                name="i-bi:calendar3"
                class="text-danger"
              />

              <span>
                Pubblicato il
                <strong class="text-dark">
                  {{ formattaData(articolo.dataPubblicazione) }}
                </strong>
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- IMMAGINE -->
    <!-- ========================================== -->

    <section class="bg-white pb-4 pb-lg-5">
      <div class="container">

        <div class="articolo-immagine rounded-4 overflow-hidden shadow-lg">

          <NuxtImg
            :src="articolo.immagine"
            :alt="articolo.titolo"
            width="1400"
            height="788"
            format="webp"
            preload
            class="w-100 h-100 object-fit-cover"
          />

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- CONTENUTO -->
    <!-- ========================================== -->

    <section class="py-4 py-lg-5">
      <div class="container">

        <div class="row justify-content-center">

          <!-- Contenuto -->
          <div class="col-12 col-lg-8 col-xl-8">

            <article class="card border-0 shadow-sm rounded-4">

              <div class="card-body p-4 p-md-5">

                <div
                  class="contenuto-articolo"
                  v-html="articolo.contenuto"
                />

              </div>

            </article>

          </div>

          <!-- Sidebar -->
          <div class="col-12 col-lg-4 col-xl-3 mt-4 mt-lg-0">

            <aside class="sticky-lg-top sidebar-articolo">

              <!-- Informazioni -->
              <div class="card border-0 shadow-sm rounded-4 mb-4">

                <div class="card-body p-4">

                  <h2 class="h6 text-uppercase fw-bold text-secondary mb-4">
                    Informazioni
                  </h2>

                  <!-- Categoria -->
                  <div class="d-flex align-items-center gap-3 mb-4">

                    <div
                      class="info-icon rounded-3 bg-danger-subtle text-danger d-flex align-items-center justify-content-center"
                    >
                      <Icon name="i-bi:tag" />
                    </div>

                    <div>
                      <small class="text-secondary d-block">
                        Categoria
                      </small>

                      <span class="fw-semibold text-dark">
                        {{ getNomeCategoria(articolo.categoriaId) }}
                      </span>
                    </div>

                  </div>

                  <!-- Data -->
                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="info-icon rounded-3 bg-danger-subtle text-danger d-flex align-items-center justify-content-center"
                    >
                      <Icon name="i-bi:calendar-event" />
                    </div>

                    <div>
                      <small class="text-secondary d-block">
                        Pubblicazione
                      </small>

                      <span class="fw-semibold text-dark">
                        {{ formattaData(articolo.dataPubblicazione) }}
                      </span>
                    </div>

                  </div>

                </div>
              </div>

              <!-- Torna alle news -->
              <NuxtLink
                to="/news"
                class="btn btn-danger w-100 rounded-3 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
              >
                <Icon name="i-bi:arrow-left" />

                Torna alle news
              </NuxtLink>

            </aside>

          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- ARTICOLI CORRELATI -->
    <!-- ========================================== -->

    <section
      v-if="articoliCorrelati.length"
      class="bg-white py-5"
    >
      <div class="container">

        <!-- Header -->
        <div class="row align-items-end mb-4">

          <div class="col">

            <span class="text-danger text-uppercase fw-bold small">
              Continua a leggere
            </span>

            <h2 class="fw-bold text-dark mb-0 mt-1">
              Altre news
            </h2>

          </div>

          <div class="col-auto">

            <NuxtLink
              to="/news"
              class="btn btn-outline-danger rounded-3 d-none d-sm-inline-flex align-items-center gap-2"
            >
              Tutte le news

              <Icon name="i-bi:arrow-right" />
            </NuxtLink>

          </div>

        </div>

        <!-- Cards -->
        <div class="row g-4">

          <div
            v-for="articoloCorrelato in articoliCorrelati"
            :key="articoloCorrelato.id"
            class="col-12 col-md-6 col-lg-4"
          >
            <article
              class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden news-card"
            >

              <!-- Immagine -->
              <NuxtLink
                :to="`/news/${articoloCorrelato.slug}`"
                class="text-decoration-none"
              >
                <div class="ratio ratio-16x9 bg-light overflow-hidden">

                  <NuxtImg
                    :src="articoloCorrelato.immagine"
                    :alt="articoloCorrelato.titolo"
                    width="800"
                    height="450"
                    format="webp"
                    loading="lazy"
                    class="w-100 h-100 object-fit-cover"
                  />

                </div>
              </NuxtLink>

              <!-- Contenuto -->
              <div class="card-body p-4 d-flex flex-column">

                <div class="d-flex flex-wrap align-items-center gap-2 mb-3">

                  <span
                    class="badge bg-danger-subtle text-danger rounded-pill px-3 py-2"
                  >
                    {{ getNomeCategoria(articoloCorrelato.categoriaId) }}
                  </span>

                  <small class="text-secondary">

                    <Icon
                      name="i-bi:calendar-event"
                      class="me-1"
                    />

                    {{ formattaData(articoloCorrelato.dataPubblicazione) }}

                  </small>

                </div>

                <h3 class="h5 fw-bold text-dark mb-3">

                  <NuxtLink
                    :to="`/news/${articoloCorrelato.slug}`"
                    class="text-dark text-decoration-none"
                  >
                    {{ articoloCorrelato.titolo }}
                  </NuxtLink>

                </h3>

                <p class="text-secondary small mb-4">
                  {{ articoloCorrelato.descrizione }}
                </p>

                <div class="mt-auto">

                  <NuxtLink
                    :to="`/news/${articoloCorrelato.slug}`"
                    class="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center gap-2"
                  >
                    Leggi la news

                    <Icon name="i-bi:arrow-right" />
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

import {
  articoli,
  categorie,
} from '~/data/news'

/* ========================================== */
/* ROUTE */
/* ========================================== */

const route = useRoute()

const slug = computed(() => {
  return String(route.params.slug)
})

/* ========================================== */
/* ARTICOLO */
/* ========================================== */

const articolo = computed(() => {

  const articoloTrovato = articoli.find(
    (articolo) =>
      articolo.slug === slug.value,
  )

  if (!articoloTrovato) {
    throw createError({
      statusCode: 404,
      statusMessage: 'News non trovata',
    })
  }

  return articoloTrovato
})

/* ========================================== */
/* ARTICOLI CORRELATI */
/* ========================================== */

const articoliCorrelati = computed(() => {

  return articoli
    .filter((articoloCorrelato) => {

      return (
        articoloCorrelato.id !== articolo.value.id &&
        articoloCorrelato.categoriaId === articolo.value.categoriaId
      )
    })
    .sort(
      (primo, secondo) =>
        new Date(
          secondo.dataPubblicazione,
        ).getTime() -
        new Date(
          primo.dataPubblicazione,
        ).getTime(),
    )
    .slice(0, 3)
})

/* ========================================== */
/* CATEGORIA */
/* ========================================== */

const getNomeCategoria = (
  categoriaId: string,
): string => {

  const categoria = categorie.find(
    (categoria) =>
      categoria.id === categoriaId,
  )

  return categoria?.nome ?? 'Generale'
}

/* ========================================== */
/* DATA */
/* ========================================== */

const formattaData = (
  data: string,
): string => {

  return new Intl.DateTimeFormat(
    'it-IT',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  ).format(new Date(data))
}

/* ========================================== */
/* SEO */
/* ========================================== */

useSeoMeta({
  title: () =>
    `${articolo.value.titolo} | Croce Rossa Rubiera`,

  description: () =>
    articolo.value.descrizione,

  ogTitle: () =>
    articolo.value.titolo,

  ogDescription: () =>
    articolo.value.descrizione,

  ogImage: () =>
    articolo.value.immagine,

  twitterCard: 'summary_large_image',
})

</script>

<style scoped>

.articolo-introduzione {
  max-width: 850px;
  line-height: 1.7;
}

.articolo-immagine {
  height: min(60vh, 650px);
  min-height: 300px;
}

.sidebar-articolo {
  top: 1.5rem;
}

.info-icon {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
}

.contenuto-articolo {
  color: #495057;
  font-size: 1.05rem;
  line-height: 1.85;
}

.contenuto-articolo :deep(p) {
  margin-bottom: 1.5rem;
}

.contenuto-articolo :deep(h2) {
  color: #212529;
  font-size: 1.65rem;
  font-weight: 700;
  margin-top: 2.75rem;
  margin-bottom: 1rem;
}

.contenuto-articolo :deep(h3) {
  color: #212529;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.contenuto-articolo :deep(ul),
.contenuto-articolo :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.contenuto-articolo :deep(li) {
  margin-bottom: 0.5rem;
}

.news-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1) !important;
}

.news-card img {
  transition: transform 0.4s ease;
}

.news-card:hover img {
  transform: scale(1.04);
}

@media (max-width: 991.98px) {

  .sidebar-articolo {
    position: static !important;
  }

}

@media (max-width: 767.98px) {

  .articolo-titolo {
    font-size: 2.2rem;
  }

  .articolo-immagine {
    height: 300px;
    min-height: 0;
  }

  .contenuto-articolo {
    font-size: 1rem;
    line-height: 1.75;
  }

  .contenuto-articolo :deep(h2) {
    font-size: 1.4rem;
  }

}

@media (max-width: 575.98px) {

  .articolo-immagine {
    height: 240px;
    border-radius: 1rem !important;
  }

}

</style>