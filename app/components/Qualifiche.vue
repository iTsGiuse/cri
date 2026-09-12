<template>
  <section class="py-5 bg-body-tertiary">
    <div class="container py-4">

      <template
        v-for="category in sortedCategories"
        :key="category.id"
      >

        <div class="row align-items-center mb-4">
          <div class="col-auto">
            <div class="d-flex align-items-center gap-3">
              <div
                class="p-2 bg-danger text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
              >
                <Icon
                  :name="category.icon || 'i-bi:award-fill'"
                  size="20"
                  aria-hidden="true"
                />
              </div>

              <h2 class="h3 fw-bold text-dark m-0">
                {{ category.title }}
              </h2>
            </div>
          </div>

          <div class="col">
            <hr class="m-0 border-danger opacity-25" />
          </div>
        </div>

        <div class="row g-4 mb-5">
          <div
            v-for="qualification in sortedQualifications(category)"
            :key="qualification.id"
            class="col-12 col-md-6 col-xl-4"
          >
            <div
              class="card h-100 border-0 shadow-sm rounded-5 qualifica-card"
            >
              <div class="card-body text-center p-4 d-flex flex-column">

                <div
                  class="text-danger mb-3 d-flex justify-content-center"
                >
                  <div
                    class="rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center p-3"
                  >
                    <Icon
                      :name="qualification.icon || 'i-bi:award'"
                      size="32"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div
                  v-if="qualification.code"
                  class="mb-2"
                >
                  <span
                    class="badge text-bg-danger rounded-pill px-3 py-2 fw-bold"
                  >
                    {{ qualification.code }}
                  </span>
                </div>

                <h3 class="h5 fw-bold text-dark mb-2">
                  {{ qualification.title }}
                </h3>

                <p
                  v-if="qualification.description"
                  class="text-secondary mb-0 lh-lg"
                >
                  {{ qualification.description }}
                </p>

              </div>
            </div>
          </div>
        </div>
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
export interface Qualification {
  id: string | number

  code?: string
  title: string
  description?: string
  icon?: string

  order: number
}

export interface QualificationCategory {
  id: string | number
  title: string
  icon?: string
  order: number
  qualifications: Qualification[]
}

const props = defineProps<{
  categories: QualificationCategory[]
}>()

const sortedCategories = computed(() =>
  [...props.categories].sort((a, b) => a.order - b.order)
)

const sortedQualifications = (
  category: QualificationCategory
) => {
  return [...category.qualifications].sort(
    (a, b) => a.order - b.order
  )
}
</script>

<style scoped>
.qualifica-card {
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.qualifica-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.12) !important;
}
</style>
