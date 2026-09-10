<template>
  <div class="container py-4 py-md-5 my-2">
    <div class="position-relative d-flex align-items-center justify-content-center">
      
      <!-- Linea orizzontale di sfondo (Responsive: si adatta all'ampiezza del container) -->
      <div class="w-100 border-top border-2 border-danger-subtle opacity-75"></div>

      <!-- Badge centrale con l'Emblema Ufficiale Croce Rossa -->
      <div class="position-absolute bg-white px-3 px-sm-4">
        <div class="bg-white rounded-circle shadow-sm border border-danger-subtle d-flex align-items-center justify-content-center p-2">
          
          <!-- SVG Croce Rossa Perfetta (ad angoli retti identici) -->
          <svg 
            viewBox="0 0 24 24" 
            class="fill-current" 
            style="width: 1.5rem; height: 1.5rem;"
            aria-hidden="true"
          >
            <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" />
          </svg>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.fill-current {
  fill: var(--bs-danger);;
}
</style>