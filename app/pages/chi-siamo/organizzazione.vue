<template>
  <div>
    <!-- Hero sopra la piega (caricamento immediato) -->
    <Hero />

    <LazyGovernance
      hydrate-on-visible
      :groups="governanceGroups"
    />
  </div>
</template>

<script setup lang="ts">
import type { GovernanceGroup } from '~/components/Governance.vue'

const governanceGroups: GovernanceGroup[] = [
  {
    id: 'consiglio-direttivo',
    title: 'Consiglio Direttivo',
    members: [
      {
        id: 101,
        firstName: 'Roberto',
        lastName: 'Ferrari',
        role: 'Presidente',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        email: 'roberto.ferrari@cri.it',
        phone: '+39 0522 123456',
      },
      {
        id: 102,
        firstName: 'Elena',
        lastName: 'Guidi',
        role: 'Vicepresidente Vicario',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        email: 'elena.guidi@cri.it',
        phone: '+39 0522 123457',
      },
      {
        id: 103,
        firstName: 'Matteo',
        lastName: 'Barieri',
        role: 'Consigliere Rappresentante Giovani',
        imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
        email: 'matteo.barieri@cri.it',
      },
      {
        id: 104,
        firstName: 'Chiara',
        lastName: 'Mantovani',
        role: 'Consigliere',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
        email: 'chiara.mantovani@cri.it',
      },
      {
        id: 105,
        firstName: 'Stefano',
        lastName: 'Rinaldi',
        role: 'Consigliere',
        email: 'stefano.rinaldi@cri.it',
      },
    ],
  },
  {
    id: 'direzione-gestione',
    title: 'Direzione e Amministrazione',
    members: [
      {
        id: 201,
        firstName: 'Giuseppe',
        lastName: 'Moretti',
        role: 'Direttore di Comitato',
        imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
        email: 'direzione@cri.it',
        phone: '+39 0522 123400',
      },
      {
        id: 202,
        firstName: 'Francesca',
        lastName: 'Conti',
        role: 'Responsabile Amministrativo',
        email: 'amministrazione@cri.it',
        phone: '+39 0522 123401',
      },
    ],
  },
  {
    id: 'delegati-area',
    title: "Delegati e Responsabili d'Area",
    members: [
      {
        id: 301,
        firstName: 'Dr. Andrea',
        lastName: 'Sarti',
        role: 'Delegato Area 1 - Salute e Soccorso',
        imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        email: 'salute@cri.it',
      },
      {
        id: 302,
        firstName: 'Giulia',
        lastName: 'Valli',
        role: 'Delegata Area 2 - Sociale e Inclusione',
        imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
        email: 'sociale@cri.it',
      },
      {
        id: 303,
        firstName: 'Marco',
        lastName: 'Pellegrini',
        role: 'Delegato Area 3 - Operazioni, Emergenza e Protezione Civile',
        email: 'protezionecivile@cri.it',
        phone: '+39 335 1234567',
      },
      {
        id: 304,
        firstName: 'Silvia',
        lastName: 'Fontana',
        role: 'Delegata Area 4 - Principi e Diritto Internazionale Umanitario',
        email: 'diu@cri.it',
      },
      {
        id: 305,
        firstName: 'Alessandro',
        lastName: 'Costa',
        role: 'Delegato Area 6 - Sviluppo, Comunicazione e Promozione',
        email: 'comunicazione@cri.it',
      },
    ],
  },
  {
    id: 'organi-controllo',
    title: 'Organo di Controllo',
    members: [
      {
        id: 401,
        firstName: 'Dott. Corrado',
        lastName: 'Benassi',
        role: 'Organo di Controllo Monocratico',
        email: 'organodicontrollo@cri.it',
      },
    ],
  },
]
</script>