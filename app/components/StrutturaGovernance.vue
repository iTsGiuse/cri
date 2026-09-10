<template>
  <section class="py-5 bg-body-tertiary">
    <div class="container py-4">

      <template
        v-for="(gruppo, indiceGruppo) in governance"
        :key="gruppo.id"
      >
        <div class="row align-items-center mb-4">
          <div class="col-auto">
            <div class="d-flex align-items-center gap-3">
              <div class="p-2 bg-danger text-white rounded-3 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
              </div>
              <h2 class="h3 fw-bold text-dark m-0">
                {{ gruppo.titolo }}
              </h2>
            </div>
          </div>
          <div class="col">
            <hr class="m-0 border-danger opacity-25" />
          </div>
        </div>

        <div class="row g-4 mb-5">
          <div
            v-for="persona in gruppo.persone"
            :key="persona.id"
            class="col-12 col-md-6 col-xl-4"
          >
            <!-- Card verticale -->
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white d-flex flex-column">
              
              <!-- Sezione Immagine / Iniziali in alto -->
              <div class="ratio ratio-4x3 bg-light border-bottom position-relative">
                <NuxtImg
                  v-if="persona.foto"
                  :src="persona.foto"
                  :alt="`Foto di ${persona.nome} ${persona.cognome}`"
                  width="400"
                  height="300"
                  format="webp"
                  loading="lazy"
                  class="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                />

                <div
                  v-else
                  class="w-100 h-100 d-flex align-items-center justify-content-center bg-danger-subtle text-danger position-absolute top-0 start-0"
                >
                  <span class="fs-1 fw-bold text-uppercase opacity-75">
                    {{ persona.nome.charAt(0) }}{{ persona.cognome.charAt(0) }}
                  </span>
                </div>
              </div>

              <!-- Corpo della card in basso -->
              <div class="card-body p-4 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <div v-if="persona.ruolo" class="mb-2">
                    <span class="badge text-bg-danger text-uppercase fw-bold rounded-1 px-2 py-1 fs-6">
                      {{ persona.ruolo }}
                    </span>
                  </div>

                  <h3 class="h5 card-title text-dark m-0 lh-sm">
                    <span class="fw-normal text-secondary fs-6 d-block">{{ persona.nome }}</span>
                    <strong class="fw-bold text-uppercase fs-4 text-dark d-block mt-1">{{ persona.cognome }}</strong>
                  </h3>
                </div>

                <div v-if="persona.email || persona.telefono" class="pt-3 mt-3 border-top border-light-subtle d-flex flex-column gap-2">
                  <a
                    v-if="persona.email"
                    :href="`mailto:${persona.email}`"
                    class="text-decoration-none link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center gap-2 text-truncate small"
                    :title="persona.email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-envelope-fill text-danger flex-shrink-0" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-.239-.756Zm8.239-4.133L9.197 8.243 15 11.801V4.697Z"/>
                    </svg>
                    <span class="text-truncate">{{ persona.email }}</span>
                  </a>

                  <a
                    v-if="persona.telefono"
                    :href="`tel:${persona.telefono.replace(/\s+/g, '')}`"
                    class="text-decoration-none link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center gap-2 small fw-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone-fill text-danger flex-shrink-0" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <span>{{ persona.telefono }}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
export interface Persona {
  id: string | number
  nome: string
  cognome: string
  ruolo?: string
  foto?: string
  email?: string
  telefono?: string
}

export interface GruppoGovernance {
  id: string | number
  titolo: string
  persone: Persona[]
}

defineProps<{
  governance: GruppoGovernance[]
}>()
</script>