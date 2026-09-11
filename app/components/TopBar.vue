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
            v-for="social in info.social"
            :key="social.nome"
            :to="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.nome"
            class="text-white mx-2"
          >
            <Icon :name="social.icona" size="22" />
          </NuxtLink>
        </div>

        <!-- Indirizzo -->
        <div class="col-md-4 text-center text-md-end">
          <NuxtLink
            :to="info.indirizzo.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-2"
          >
            <Icon name="lucide:map-pin" size="18" />
            <span>{{ info.indirizzo.testo }}</span>
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Social {
  nome: string
  url: string
  icona: string
}

interface Indirizzo {
  testo: string
  url: string
}

interface Info {
  email: string
  social: Social[]
  indirizzo: Indirizzo
}

defineProps<{
  info: Info
}>()
</script>

