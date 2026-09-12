<template>
  <section class="py-5 bg-body-tertiary">
    <div class="container py-4">

      <template
        v-for="group in groups"
        :key="group.id"
      >
        <div class="row align-items-center mb-4">
          <div class="col-auto">
            <div class="d-flex align-items-center gap-3">
              <div class="p-2 bg-danger text-white rounded-3 d-flex align-items-center justify-content-center">
                <Icon name="i-bi:people-fill" size="20" />
              </div>
              <h2 class="h3 fw-bold text-dark m-0">
                {{ group.title }}
              </h2>
            </div>
          </div>
          <div class="col">
            <hr class="m-0 border-danger opacity-25" />
          </div>
        </div>

        <div class="row g-4 mb-5">
          <div
            v-for="member in group.members"
            :key="member.id"
            class="col-12 col-md-6 col-xl-4"
          >
            <!-- Card verticale -->
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white d-flex flex-column">
              
              <!-- Sezione Immagine / Iniziali in alto -->
              <div class="ratio ratio-4x3 bg-light border-bottom position-relative">
                <NuxtImg
                  v-if="member.imageUrl"
                  :src="member.imageUrl"
                  :alt="`Foto di ${member.firstName} ${member.lastName}`"
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
                    {{ member.firstName.charAt(0) }}{{ member.lastName.charAt(0) }}
                  </span>
                </div>
              </div>

              <!-- Corpo della card in basso -->
              <div class="card-body p-4 d-flex flex-column justify-content-between flex-grow-1 min-w-0">
                <div class="min-w-0">
                  <div v-if="member.role" class="mb-2">
                    <span class="badge text-bg-danger text-uppercase fw-bold rounded-1 px-2 py-1 fs-6 text-wrap text-break text-start">
                      {{ member.role }}
                    </span>
                  </div>

                  <h3 class="h5 card-title text-dark m-0 lh-sm text-break">
                    <span class="fw-normal text-secondary fs-6 d-block">{{ member.firstName }}</span>
                    <strong class="fw-bold text-uppercase fs-4 text-dark d-block mt-1">{{ member.lastName }}</strong>
                  </h3>
                </div>

                <div v-if="member.email || member.phone" class="pt-3 mt-3 border-top border-light-subtle d-flex flex-column gap-2 min-w-0">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="text-decoration-none link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center gap-2 small min-w-0"
                    :title="member.email"
                  >
                    <Icon name="i-bi:envelope-fill" size="14" class="text-danger flex-shrink-0" />
                    <span class="text-truncate d-inline-block">{{ member.email }}</span>
                  </a>

                  <a
                    v-if="member.phone"
                    :href="`tel:${member.phone.replace(/\s+/g, '')}`"
                    class="text-decoration-none link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center gap-2 small fw-medium min-w-0"
                  >
                    <Icon name="i-bi:telephone-fill" size="14" class="text-danger flex-shrink-0" />
                    <span class="text-truncate d-inline-block">{{ member.phone }}</span>
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
export interface GovernanceMember {
  id: string | number
  firstName: string
  lastName: string
  /** Carica ricoperta all'interno del Comitato. */
  role?: string
  imageUrl?: string
  email?: string
  phone?: string
}

export interface GovernanceGroup {
  id: string | number
  title: string
  members: GovernanceMember[]
}

defineProps<{
  groups: GovernanceGroup[]
}>()
</script>
