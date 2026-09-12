<template>
  <div class="bg-danger text-white py-3">
    <div class="container">
      <div class="row align-items-center">

        <!-- Email -->
        <div class="col-md-4 text-center text-md-start">
          <NuxtLink
            :to="`mailto:${info.email}`"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-2"
          >
            <Icon name="lucide:mail" size="18" />
            <span>{{ info.email }}</span>
          </NuxtLink>
        </div>

        <!-- Social -->
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
            <Icon :name="social.icon" size="22" />
          </NuxtLink>
        </div>

        <!-- Indirizzo -->
        <div class="col-md-4 text-center text-md-end">
          <NuxtLink
            :to="info.address.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-2"
          >
            <Icon name="lucide:map-pin" size="18" />
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
