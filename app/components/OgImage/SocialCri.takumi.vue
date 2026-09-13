<script setup lang="ts">
withDefaults(
  defineProps<{
    titolo?: string
    descrizione?: string
    sezione?: string
    marchio?: string
    sito?: string
    logo?: string
  }>(),
  {
    titolo: 'Croce Rossa Italiana',
    descrizione: '',
    sezione: '',
    marchio: 'Croce Rossa Italiana – Comitato di Rubiera',
    sito: 'rubiera.cri.it',
    logo: '/images/logo.jpg',
  },
)
</script>

<template>
  <div
    style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 64px 72px; background-color: #B3221C; color: #ffffff; font-family: Montserrat;"
  >
    <div style="display: flex; align-items: center; gap: 24px;">
      <img
        :src="logo"
        alt=""
        width="96"
        height="96"
        style="width: 96px; height: 96px; border-radius: 20px; background-color: #ffffff; padding: 6px; object-fit: contain;"
      >

      <div style="display: flex; flex-direction: column;">
        <span style="font-size: 28px; font-weight: 700; line-height: 1.2;">
          {{ marchio }}
        </span>
        <span
          v-if="sezione"
          style="font-size: 24px; font-weight: 500; opacity: 0.85; margin-top: 4px;"
        >
          {{ sezione }}
        </span>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px;">
      <span style="font-size: 68px; font-weight: 700; line-height: 1.1;">
        {{ titolo }}
      </span>
      <span
        v-if="descrizione"
        style="font-size: 30px; font-weight: 500; line-height: 1.35; opacity: 0.9;"
      >
        {{ descrizione }}
      </span>
    </div>

    <div
      style="display: flex; align-items: center; justify-content: space-between; border-top: 2px solid rgba(255,255,255,0.35); padding-top: 24px;"
    >
      <span style="font-size: 24px; font-weight: 600;">{{ sito }}</span>
      <span style="font-size: 22px; font-weight: 500; opacity: 0.85;">Uniti per l’Umanità</span>
    </div>
  </div>
</template>
