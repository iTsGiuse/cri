<template>
  <div class="container py-4 my-5">
    <div class="row g-4">

      <div
        v-for="(principio, index) in principi"
        :key="principio.titolo"
        :class="[
          'col-12 col-md-6 col-lg-4 mt-5',
          index === 6 ? 'offset-lg-4' : ''
        ]"
      >
        <div class="card h-100 border-0 shadow-sm rounded-5 principio-card">
          <div class="card-body text-center p-4">

            <!-- Icona -->
            <div class="text-danger mb-3 principio-icon">
              <Icon :name="principio.icona" class="fs-1" />
            </div>

            <!-- Titolo -->
            <h3 class="h5 fw-bold mb-3">
              {{ principio.titolo }}
            </h3>

            <!-- Descrizione -->
            <p class="text-secondary mb-0">
              {{ principio.descrizione }}
            </p>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const principi = [
  {
    titolo: 'Umanità',
    descrizione:
      'Prevenire e alleviare le sofferenze umane ovunque si manifestino, proteggendo la vita e la salute e favorendo la comprensione e la pace tra i popoli.',
    icona: 'i-bi:heart-pulse'
  },
  {
    titolo: 'Imparzialità',
    descrizione:
      'Prestare soccorso senza alcuna discriminazione, dando priorità alle persone in base alla gravità e all’urgenza delle loro necessità.',
    icona: 'i-bi:people'
  },
  {
    titolo: 'Neutralità',
    descrizione:
      'Per mantenere la fiducia di tutti, il Movimento non prende parte alle ostilità né alle controversie di carattere politico, religioso o ideologico.',
    icona: 'i-bi:shield-check'
  },
  {
    titolo: 'Indipendenza',
    descrizione:
      'Il Movimento mantiene la propria autonomia e agisce secondo i propri principi, pur collaborando con le autorità pubbliche.',
    icona: 'i-bi:compass'
  },
  {
    titolo: 'Volontariato',
    descrizione:
      'È un movimento di soccorso volontario e disinteressato, fondato sul desiderio di aiutare gli altri senza perseguire alcun vantaggio personale.',
    icona: 'i-bi:hand-thumbs-up'
  },
  {
    titolo: 'Unità',
    descrizione:
      'In ogni Paese può esistere una sola Società Nazionale della Croce Rossa o della Mezzaluna Rossa, aperta a tutti e attiva su tutto il territorio.',
    icona: 'i-bi:house-heart'
  },
  {
    titolo: 'Universalità',
    descrizione:
      'Il Movimento Internazionale è universale. Tutte le Società Nazionali hanno uguali diritti e il dovere di aiutarsi reciprocamente.',
    icona: 'i-bi:globe2'
  }
]
</script>

<style scoped>
.principio-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.principio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.12) !important;
}

.principio-icon {
  transition: transform 0.25s ease;
}

.principio-card:hover .principio-icon {
  transform: scale(1.12);
}
</style>
