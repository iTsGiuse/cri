<template>
  <div class="bg-warning text-dark py-3">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <span class="fw-semibold">
            {{ messaggio.testo }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Messaggio {
  testo: string
}

defineProps<{
  messaggio: Messaggio
}>()
</script>

