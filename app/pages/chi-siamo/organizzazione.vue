<template>
  <div>
    <!-- Hero sopra la piega (caricamento immediato) -->
    <Hero />

    <LazyStrutturaGovernance 
      hydrate-on-visible 
      :governance="datiStrutturaGovernance" 
    />
  </div>
</template>

<script setup lang="ts">
import type { GruppoGovernance } from '~/components/StrutturaGovernance.vue'

const datiStrutturaGovernance: GruppoGovernance[] = [
  {
    id: 'consiglio-direttivo',
    titolo: 'Consiglio Direttivo',
    persone: [
      {
        id: 101,
        nome: 'Roberto',
        cognome: 'Ferrari',
        ruolo: 'Presidente',
        foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        email: 'roberto.ferrari@cri.it',
        telefono: '+39 0522 123456',
      },
      {
        id: 102,
        nome: 'Elena',
        cognome: 'Guidi',
        ruolo: 'Vicepresidente Vicario',
        foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        email: 'elena.guidi@cri.it',
        telefono: '+39 0522 123457',
      },
      {
        id: 103,
        nome: 'Matteo',
        cognome: 'Barieri',
        ruolo: 'Consigliere Rappresentante Giovani',
        foto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
        email: 'matteo.barieri@cri.it',
      },
      {
        id: 104,
        nome: 'Chiara',
        cognome: 'Mantovani',
        ruolo: 'Consigliere',
        foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
        email: 'chiara.mantovani@cri.it',
      },
      {
        id: 105,
        nome: 'Stefano',
        cognome: 'Rinaldi',
        ruolo: 'Consigliere',
        email: 'stefano.rinaldi@cri.it',
      },
    ],
  },
  {
    id: 'direzione-gestione',
    titolo: 'Direzione e Amministrazione',
    persone: [
      {
        id: 201,
        nome: 'Giuseppe',
        cognome: 'Moretti',
        ruolo: 'Direttore di Comitato',
        foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
        email: 'direzione@cri.it',
        telefono: '+39 0522 123400',
      },
      {
        id: 202,
        nome: 'Francesca',
        cognome: 'Conti',
        ruolo: 'Responsabile Amministrativo',
        email: 'amministrazione@cri.it',
        telefono: '+39 0522 123401',
      },
    ],
  },
  {
    id: 'delegati-area',
    titolo: "Delegati e Responsabili d'Area",
    persone: [
      {
        id: 301,
        nome: 'Dr. Andrea',
        cognome: 'Sarti',
        ruolo: 'Delegato Area 1 - Salute e Soccorso',
        foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        email: 'salute@cri.it',
      },
      {
        id: 302,
        nome: 'Giulia',
        cognome: 'Valli',
        ruolo: 'Delegata Area 2 - Sociale e Inclusione',
        foto: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
        email: 'sociale@cri.it',
      },
      {
        id: 303,
        nome: 'Marco',
        cognome: 'Pellegrini',
        ruolo: 'Delegato Area 3 - Operazioni, Emergenza e Protezione Civile',
        email: 'protezionecivile@cri.it',
        telefono: '+39 335 1234567',
      },
      {
        id: 304,
        nome: 'Silvia',
        cognome: 'Fontana',
        ruolo: 'Delegata Area 4 - Principi e Diritto Internazionale Umanitario',
        email: 'diu@cri.it',
      },
      {
        id: 305,
        nome: 'Alessandro',
        cognome: 'Costa',
        ruolo: 'Delegato Area 6 - Sviluppo, Comunicazione e Promozione',
        email: 'comunicazione@cri.it',
      },
    ],
  },
  {
    id: 'organi-controllo',
    titolo: 'Organo di Controllo',
    persone: [
      {
        id: 401,
        nome: 'Dott. Corrado',
        cognome: 'Benassi',
        ruolo: 'Organo di Controllo Monocratico',
        email: 'organodicontrollo@cri.it',
      },
    ],
  },
]
</script>