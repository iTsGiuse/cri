<template>
  <div class="bg-danger text-white py-3">
    <div class="container">

      <div class="d-flex d-md-none justify-content-center align-items-center gap-4 pb-3 pt-1">

        <NuxtLink
          :to="`mailto:${info.email}`"
          :aria-label="`Email: ${info.email}`"
          class="text-white d-flex align-items-center justify-content-center"
        >
          <Icon
            name="lucide:mail"
            size="22"
            aria-hidden="true"
          />
        </NuxtLink>

        <NuxtLink
          v-for="social in info.socialLinks"
          :key="social.name"
          :to="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.name"
          class="text-white d-flex align-items-center justify-content-center"
        >
          <Icon
            :name="social.icon"
            size="22"
            aria-hidden="true"
          />
        </NuxtLink>

        <NuxtLink
          :to="info.address.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="info.address.label"
          class="text-white d-flex align-items-center justify-content-center"
        >
          <Icon
            name="lucide:map-pin"
            size="22"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <div class="row align-items-center d-none d-md-flex">

        <div class="col-md-4 text-center text-md-start">
          <NuxtLink
            :to="`mailto:${info.email}`"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-2"
          >
            <Icon
              name="lucide:mail"
              size="18"
              aria-hidden="true"
            />

            <span>{{ info.email }}</span>
          </NuxtLink>
        </div>

        <div class="col-md-4 text-center my-2 my-md-0">
          <NuxtLink
            v-for="social in info.socialLinks"
            :key="social.name"
            :to="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="text-white mx-2"
          >
            <Icon
              :name="social.icon"
              size="22"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>

        <div class="col-md-4 text-center text-md-end">
          <NuxtLink
            :to="info.address.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-2"
          >
            <Icon
              name="lucide:map-pin"
              size="18"
              aria-hidden="true"
            />

            <span>{{ info.address.label }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SocialLink } from '~/types'

interface AddressLink {
  label: string
  url: string
}

export interface TopBarInfo {
  email: string
  socialLinks: SocialLink[]
  address: AddressLink
}

defineProps<{
  info: TopBarInfo
}>()
</script>
