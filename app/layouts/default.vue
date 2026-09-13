<template>
  <div>
    <a class="visually-hidden-focusable skip-link" href="#contenuto-principale">
      Vai al contenuto principale
    </a>

    <TopBar :info="topBarInfo" />

    <Header :header="headerData" />

    <Breadcrumbs v-if="route.path !== '/'" />

    <main id="contenuto-principale" tabindex="-1">
      <slot />
    </main>

    <LazyDivisore v-if="showCta" />
    <LazyCta v-if="showCta" :cta="ctaData" />

    <LazyFooter :footer="footerData" />
  </div>
</template>

<script setup lang="ts">
import type { TopBarInfo } from '~/components/TopBar.vue'
import type { HeaderData } from '~/components/Header.vue'
import type { FooterData } from '~/components/Footer.vue'
import type { CtaSectionData } from '~/components/Cta.vue'

import {
  activeSocialLinks,
  contactConfig,
  legaleConfig,
  legalInfo,
  organizationConfig,
  siteConfig,
} from '~/data/config'
import { footerGruppiNavigazione } from '~/data/footer'

const route = useRoute()

const pathsWithoutCta = [
  '/dona',
  '/chi-siamo/trasparenza',
  '/chi-siamo/storia',
  '/chi-siamo/principi-e-valori',
]

const showCta = computed(
  () => !pathsWithoutCta.includes(route.path),
)

const topBarInfo: TopBarInfo = {
  email: contactConfig.email,
  socialLinks: activeSocialLinks,
  address: {
    label: contactConfig.address.label,
    url: contactConfig.address.mapsUrl,
  },
}

const headerData: HeaderData = {
  brand: {
    imageUrl: organizationConfig.logo.imageUrl,
    imageAlt: organizationConfig.logo.imageAlt,
  },

  navItems: [
    {
      label: 'Chi siamo',
      children: [
        {
          label: 'Comitato e Contatti',
          url: '/chi-siamo/comitato-e-contatti',
          icon: 'i-bi:building-fill',
        },
        {
          label: 'La nostra storia',
          url: '/chi-siamo/storia',
          icon: 'i-bi:clock-history',
        },
        {
          label: 'Organizzazione e Governance',
          url: '/chi-siamo/organizzazione',
          icon: 'i-bi:diagram-3-fill',
        },
        {
          label: 'Principi e Valori',
          url: '/chi-siamo/principi-e-valori',
          icon: 'i-bi:heart-fill',
        },
        {
          label: 'Trasparenza e Documenti',
          url: '/chi-siamo/trasparenza',
          icon: 'i-bi:file-earmark-text-fill',
        },
      ],
    },

    {
      label: 'Cosa facciamo',
      children: [
        {
          label: 'Salute e Prevenzione',
          url: '/cosa-facciamo/salute',
          icon: 'i-bi:heart-pulse-fill',
        },
        {
          label: 'Sociale e Inclusione',
          url: '/cosa-facciamo/sociale',
          icon: 'i-bi:people-fill',
        },
        {
          label: 'Emergenza e Protezione Civile',
          url: '/cosa-facciamo/protezione-civile',
          icon: 'i-bi:shield-fill-check',
        },
        {
          label: 'Principi e Diritto Umanitario',
          url: '/cosa-facciamo/diritto-umanitario',
          icon: 'i-bi:book-fill',
        },
        {
          label: 'Giovani',
          url: '/cosa-facciamo/giovani',
          icon: 'i-bi:person-hearts',
        },
        {
          label: 'Sviluppo e Comunicazione',
          url: '/cosa-facciamo/sviluppo',
          icon: 'i-bi:graph-up-arrow',
        },
      ],
    },

    {
      label: 'Servizi',
      children: [
        {
          label: 'Emergenza e Soccorso 118 / 112',
          url: '/servizi/emergenza-118',
          icon: 'i-bi:exclamation-triangle-fill',
        },
        {
          label: 'Richiedi un trasporto sanitario',
          url: '/servizi/richiedi-trasporto',
          icon: 'i-bi:truck-front-fill',
        },
        {
          label: 'Assistenza sanitaria a manifestazioni',
          url: '/servizi/assistenza-eventi',
          icon: 'i-bi:hospital-fill',
        },
        {
          label: 'Corsi per la popolazione',
          url: '/servizi/corsi-popolazione',
          icon: 'i-bi:mortarboard-fill',
        },
        {
          label: 'Corsi aziendali (D.Lgs 81/08)',
          url: '/servizi/corsi-aziende',
          icon: 'i-bi:briefcase-fill',
        },
        {
          label: 'Supporto sociale e assistenza',
          url: '/servizi/supporto-sociale',
          icon: 'i-bi:house-heart-fill',
        },
        {
          label: 'Prenotazioni e informazioni',
          url: '/servizi/prenotazioni-e-informazioni',
          icon: 'i-bi:calendar-check-fill',
        },
      ],
    },

    {
      label: 'Volontariato',
      children: [
        {
          label: 'Diventa volontario',
          url: '/volontariato/diventa-volontario',
          icon: 'i-bi:person-plus-fill',
        },
        {
          label: 'Percorso formativo e qualifiche',
          url: '/volontariato/percorso-formativo',
          icon: 'i-bi:mortarboard-fill',
        },
      ],
    },

    {
      label: 'Comunicazioni',
      children: [
        {
          label: 'Notizie',
          url: '/news',
          icon: 'i-bi:newspaper',
        },
        {
          label: 'Eventi',
          url: '/eventi',
          icon: 'i-bi:calendar-event-fill',
        },
        {
          label: 'Campagne di sensibilizzazione',
          url: '/campagne',
          icon: 'i-bi:megaphone-fill',
        },
      ],
    },

    {
      label: 'FAQ',
      url: '/faq',
      icon: 'i-bi:question-circle-fill',
    },
  ],

  action: {
    label: 'Dona ora',
    url: '/dona',
    icon: 'i-bi:heart-fill',
  },
};

const ctaData: CtaSectionData = {
  title: 'Dona il tuo 5×1000',
  subtitle: 'Sostieni la Croce Rossa di Rubiera',
  description:
    'Con il tuo 5×1000 puoi contribuire concretamente alle attività e ai progetti della Croce Rossa di Rubiera.',
  buttonLabel: 'Scopri come donare',
  url: '/dona',
  imageUrl: 'https://picsum.photos/id/1018/1920/800',
  imageAlt: 'Dona il 5×1000 alla Croce Rossa di Rubiera',
};

const collegamentiLegali = [
  { label: 'Trasparenza e Documenti', url: '/chi-siamo/trasparenza' },
  ...(legaleConfig.iubendaPrivacyPolicyId
    ? [{
        label: 'Privacy Policy',
        url: `https://www.iubenda.com/privacy-policy/${legaleConfig.iubendaPrivacyPolicyId}`,
        external: true,
      }]
    : []),
  ...(legaleConfig.iubendaCookiePolicyId
    ? [{
        label: 'Cookie Policy',
        url: `https://www.iubenda.com/privacy-policy/${legaleConfig.iubendaCookiePolicyId}/cookie-policy`,
        external: true,
      }]
    : []),
  { label: 'Accessibilità', url: '/accessibilita' },
  { label: 'Note legali', url: '/note-legali' },
]

const footerData: FooterData = {
  brand: {
    url: '/',
    imageUrl: organizationConfig.logo.imageUrl,
    imageAlt: organizationConfig.logo.imageAlt,
    ariaLabel: `Vai alla home - ${organizationConfig.name}`,
    description:
      `${siteConfig.name}. Al servizio della comunità ogni giorno attraverso soccorso, assistenza sociale e volontariato.`,
  },

  socialLinks: activeSocialLinks,

  columns: footerGruppiNavigazione,

  contacts: {
    title: 'Sede e Recapiti',

    address: {
      label: contactConfig.address.label,
      url: contactConfig.address.mapsUrl,
      icon: 'i-bi:geo-alt-fill',
    },

    phone: {
      label: contactConfig.phone.label,
      value: contactConfig.phone.value,
      icon: 'i-bi:telephone-fill',
    },

    email: {
      label: contactConfig.email,
      value: contactConfig.email,
      icon: 'i-bi:envelope-fill',
    },
  },

  cta: {
    title: 'Fai la differenza.',
    description:
      `Sostieni la ${organizationConfig.name} o diventa volontario: il tuo contributo può fare la differenza nella nostra comunità.`,
    label: 'Diventa volontario',
    url: '/volontariato/diventa-volontario',
    icon: 'i-bi:person-plus-fill',
  },

  legalLinks: collegamentiLegali,

  legalInfo,
};
</script>

<style scoped>

.skip-link:focus,
.skip-link:focus-visible {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1080;
  padding: 0.75rem 1rem;
  background-color: #fff;
  color: var(--bs-danger);
  font-weight: 600;
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
}

main:focus {
  outline: none;
}
</style>
