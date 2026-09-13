<template>
  <nav
    v-if="breadcrumbTrail.length > 0"
    aria-label="breadcrumb"
    class="bg-danger py-3"
  >
    <div
      class="container d-flex justify-content-start my-3 breadcrumb-wrapper"
    >
      <div
        class="breadcrumb-container d-inline-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 border border-white border-opacity-25 shadow-sm"
      >
        <ul
          class="list-unstyled mb-0 small d-flex align-items-center flex-nowrap overflow-x-auto scrollbar-nascosta"
        >
          <li class="d-inline-flex align-items-center">
            <NuxtLink
              to="/"
              class="text-white text-decoration-none d-inline-flex align-items-center text-nowrap"
            >
              <Icon
                name="i-bi:house-door-fill"
                class="me-1"
                aria-hidden="true"
              />
              <span>Home</span>
            </NuxtLink>
          </li>

          <li
            v-for="(item, index) in breadcrumbTrail"
            :key="item.url"
            class="d-inline-flex align-items-center"
          >
            <span
              class="text-white opacity-75 mx-2 user-select-none"
              aria-hidden="true"
            >
              /
            </span>

            <span
              v-if="
                index === breadcrumbTrail.length - 1 ||
                !item.clickable
              "
              class="fw-semibold text-white text-nowrap d-inline-flex align-items-center"
              :class="{
                'opacity-75':
                  !item.clickable &&
                  index !== breadcrumbTrail.length - 1,
              }"
              :aria-current="
                index === breadcrumbTrail.length - 1
                  ? 'page'
                  : undefined
              "
            >
              <Icon
                :name="item.icon"
                class="me-1"
                aria-hidden="true"
              />
              <span>{{ item.label }}</span>
            </span>

            <NuxtLink
              v-else
              :to="item.url"
              class="text-white text-decoration-none text-nowrap d-inline-flex align-items-center"
            >
              <Icon
                :name="item.icon"
                class="me-1"
                aria-hidden="true"
              />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { breadcrumbLabels, nonClickableSegments } from '~/data/breadcrumbs'

const route = useRoute()
const requestUrl = useRequestURL()

const breadcrumbTrail = computed(() => {
  if (route.path === '/') {
    return []
  }

  const segments = route.path
    .split('/')
    .filter(Boolean)

  let currentPath = ''

  return segments.map((segment) => {
    currentPath += `/${segment}`

    const known = breadcrumbLabels[segment]

    const fallbackLabel = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return {
      label: known ? known.label : fallbackLabel,
      icon: known ? known.icon : 'i-bi:folder-fill',
      url: currentPath,
      clickable: !nonClickableSegments.includes(segment),
    }
  })
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (breadcrumbTrail.value.length === 0) {
          return ''
        }

        const baseUrl = requestUrl.origin

        const itemListElement = [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`,
          },
          ...breadcrumbTrail.value.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.label,
            item: `${baseUrl}${item.url}`,
          })),
        ]

        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement,
        })
      }),
    },
  ],
})
</script>

<style scoped>
.scrollbar-nascosta {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-nascosta::-webkit-scrollbar {
  display: none;
}

.breadcrumb-wrapper {
  width: 100%;
  min-width: 0;
}

.breadcrumb-container {
  max-width: 100%;
  min-width: 0;
}

.breadcrumb-container ul {
  min-width: 0;
  max-width: 100%;
}

.breadcrumb-container a {
  transition: opacity 0.15s ease;
}

.breadcrumb-container a:hover {
  opacity: 0.8;
}

@media (max-width: 767.98px) {
  .breadcrumb-wrapper {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .breadcrumb-container {
    width: 100%;
    justify-content: flex-start;
  }

  .breadcrumb-container ul {
    width: 100%;
  }
}

@media (max-width: 575.98px) {
  .breadcrumb-wrapper {
    margin-top: 0.5rem !important;
  }

  .breadcrumb-container {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }
}
</style>