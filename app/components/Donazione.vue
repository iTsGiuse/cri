<script setup lang="ts">
import { contactConfig, organizationConfig, siteConfig } from '~/data/config'

const donationData = {
  fivePerMille: {
    number: 1,
    eyebrow: '5×1000',
    title: 'Dai una mano a chi aiuta.',
    description:
      `Destina il tuo 5×1000 alla ${siteConfig.name}.`,

    taxCode: {
      label: 'Codice fiscale',
      value: organizationConfig.taxCode,
      copyLabel: 'Copia',
      copiedLabel: 'Copiato',
    },

    instructions: {
      label: 'Come fare',
      items: [
        'Compila la dichiarazione dei redditi.',
        'Firma nello spazio dedicato al 5×1000.',
        'Inserisci il nostro codice fiscale.',
      ],
    },
  },

  bankTransfer: {
    number: 2,
    eyebrow: 'BONIFICO BANCARIO',
    title: 'Sostieni il Comitato con una donazione.',
    description:
      'Puoi effettuare una donazione direttamente sul conto corrente del Comitato.',

    fields: [
      {
        id: 'beneficiary',
        label: 'Beneficiario',
        value: siteConfig.name,
        copyable: false,
      },
      {
        id: 'iban',
        label: 'IBAN',
        value: 'INSERIRE IBAN',
        copyable: true,
      },
      {
        id: 'reason',
        label: 'Causale',
        value: 'Donazione',
        copyable: true,
      },
    ],

    copyLabel: 'Copia',
    copiedLabel: 'Copiato',

    contact: {
      text: 'Hai bisogno di verificare le coordinate?',
      email: contactConfig.email,
      label: 'Contattaci',
    },
  },

  goods: {
    number: 3,
    eyebrow: 'DONARE BENI',
    title: 'Dona ciò che può essere ancora utile.',
    description:
      'Puoi portarci oggetti in buone condizioni che possono essere utilizzati per le attività del Comitato.',

    itemsTitle: 'Cosa puoi portare',

    items: [
      'Abbigliamento in buone condizioni',
      'Coperte e biancheria',
      'Materiale per la casa',
      'Piccoli elettrodomestici funzionanti',
      'Materiale utile alle attività del Comitato',
      'Oggetti nuovi o usati in buone condizioni',
    ],

    location: {
      label: 'Dove portarli',
      street: contactConfig.address.street,
      city: `${contactConfig.address.postalCode} ${contactConfig.address.city} (${contactConfig.address.province})`,
    },

    note: {
      title: 'Prima di venire',
      text:
        'Contattaci per verificare che gli oggetti possano essere accettati e per concordare la consegna.',
    },

    contacts: [
      {
        icon: 'i-bi:telephone',
        label: contactConfig.phone.label,
        href: `tel:${contactConfig.phone.value}`,
        variant: 'danger',
      },
      {
        icon: 'i-bi:envelope',
        label: 'Scrivi una email',
        href: `mailto:${contactConfig.email}`,
        variant: 'outline-danger',
      },
    ],
  },
}

const copiedKey = ref<string | null>(null)

const copyValue = async (value: string, key: string) => {
  try {
    await navigator.clipboard.writeText(value)

    copiedKey.value = key

    setTimeout(() => {
      copiedKey.value = null
    }, 2000)
  } catch {
    copiedKey.value = null
  }
}
</script>

<template>
  <div>

    <section class="py-5">
      <div class="container">

        <div class="row">
          <div class="col-12">
            <div class="d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
              <span
                class="display-5 fw-bold text-danger lh-1"
                aria-hidden="true"
              >
                {{ donationData.fivePerMille.number }}
              </span>
            </div>

            <hr class="border-danger opacity-25 m-0">
          </div>
        </div>

        <div class="row g-5 pt-5">

          <div class="col-12 col-lg-5 text-center text-lg-start">

            <div class="pe-lg-5">

              <div
                class="text-danger text-uppercase small fw-semibold mb-3"
              >
                {{ donationData.fivePerMille.eyebrow }}
              </div>

              <h2 class="display-5 fw-bold lh-sm mb-4">
                {{ donationData.fivePerMille.title }}
              </h2>

              <p class="fs-5 text-secondary lh-base mb-0">
                {{ donationData.fivePerMille.description }}
              </p>

            </div>

          </div>

          <div class="col-12 col-lg-7">

            <div class="border-top border-bottom">

              <div class="py-4">

                <div
                  class="small text-uppercase text-secondary fw-semibold mb-3"
                >
                  {{ donationData.fivePerMille.taxCode.label }}
                </div>

                <div
                  class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3"
                >

                  <span
                    class="font-monospace fs-2 fs-md-1 fw-bold text-danger text-break"
                  >
                    {{ donationData.fivePerMille.taxCode.value }}
                  </span>

                  <button
                    type="button"
                    class="btn btn-outline-danger fw-semibold flex-shrink-0"
                    @click="
                      copyValue(
                        donationData.fivePerMille.taxCode.value,
                        'taxCode'
                      )
                    "
                  >
                    <Icon
                      :name="
                        copiedKey === 'taxCode'
                          ? 'i-bi:check-lg'
                          : 'i-bi:copy'
                      "
                      class="me-2"
                    ></Icon>

                    {{
                      copiedKey === 'taxCode'
                        ? donationData.fivePerMille.taxCode.copiedLabel
                        : donationData.fivePerMille.taxCode.copyLabel
                    }}
                  </button>

                </div>

              </div>

              <div class="border-top py-4">

                <div
                  class="small text-uppercase text-secondary fw-semibold mb-2"
                >
                  {{ donationData.fivePerMille.instructions.label }}
                </div>

                <div
                  v-for="(item, index) in donationData.fivePerMille.instructions.items"
                  :key="item"
                  class="d-flex align-items-start gap-3 py-3 border-bottom"
                >

                  <span
                    class="text-danger fw-bold font-monospace"
                  >
                    {{ index + 1 }}
                  </span>

                  <span class="lh-base">
                    {{ item }}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">

        <div class="row">
          <div class="col-12">

            <div class="d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
              <span
                class="display-5 fw-bold text-danger lh-1"
                aria-hidden="true"
              >
                {{ donationData.bankTransfer.number }}
              </span>
            </div>

            <hr class="border-danger opacity-25 m-0">

          </div>
        </div>

        <div class="row g-5 pt-5">

          <div class="col-12 col-lg-5 text-center text-lg-start">

            <div class="pe-lg-5">

              <div
                class="text-danger text-uppercase small fw-semibold mb-3"
              >
                {{ donationData.bankTransfer.eyebrow }}
              </div>

              <h2 class="display-5 fw-bold lh-sm mb-4">
                {{ donationData.bankTransfer.title }}
              </h2>

              <p class="fs-5 text-secondary lh-base mb-0">
                {{ donationData.bankTransfer.description }}
              </p>

            </div>

          </div>

          <div class="col-12 col-lg-7">

            <div class="border-top">

              <div
                v-for="(field, index) in donationData.bankTransfer.fields"
                :key="field.id"
                class="py-4 border-bottom"
              >

                <div
                  class="small text-uppercase text-secondary fw-semibold mb-2"
                >
                  {{ field.label }}
                </div>

                <div
                  class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3"
                >

                  <span
                    class="text-break"
                    :class="
                      field.id === 'iban'
                        ? 'font-monospace fs-5 fw-bold text-danger'
                        : 'fs-5 fw-semibold'
                    "
                  >
                    {{ field.value }}
                  </span>

                  <button
                    v-if="field.copyable"
                    type="button"
                    class="btn btn-outline-danger btn-sm fw-semibold flex-shrink-0"
                    @click="copyValue(field.value, field.id)"
                  >
                    <Icon
                      :name="
                        copiedKey === field.id
                          ? 'i-bi:check-lg'
                          : 'i-bi:copy'
                      "
                      class="me-1"
                    ></Icon>

                    {{
                      copiedKey === field.id
                        ? donationData.bankTransfer.copiedLabel
                        : donationData.bankTransfer.copyLabel
                    }}
                  </button>

                </div>

              </div>

            </div>

            <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 pt-4">

              <span class="small text-secondary">
                {{ donationData.bankTransfer.contact.text }}
              </span>

              <a
                :href="`mailto:${donationData.bankTransfer.contact.email}`"
                class="btn btn-danger fw-semibold flex-shrink-0"
              >
                <Icon name="i-bi:envelope" class=" me-2" />

                {{ donationData.bankTransfer.contact.label }}
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>

    <section class="py-5">
      <div class="container">

        <div class="row">
          <div class="col-12">

            <div class="d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
              <span
                class="display-5 fw-bold text-danger lh-1"
                aria-hidden="true"
              >
                {{ donationData.goods.number }}
              </span>
            </div>

            <hr class="border-danger opacity-25 m-0">

          </div>
        </div>

        <div class="row g-5 pt-5">

          <div class="col-12 col-lg-5 text-center text-lg-start">

            <div class="pe-lg-5">

              <div
                class="text-danger text-uppercase small fw-semibold mb-3"
              >
                {{ donationData.goods.eyebrow }}
              </div>

              <h2 class="display-5 fw-bold lh-sm mb-4">
                {{ donationData.goods.title }}
              </h2>

              <p class="fs-5 text-secondary lh-base mb-5">
                {{ donationData.goods.description }}
              </p>

              <div class="border-start border-danger border-3 ps-4">

                <div
                  class="small text-uppercase text-secondary fw-semibold mb-2"
                >
                  {{ donationData.goods.location.label }}
                </div>

                <div class="fs-5 fw-bold">
                  {{ donationData.goods.location.street }}
                </div>

                <div class="text-secondary">
                  {{ donationData.goods.location.city }}
                </div>

              </div>

            </div>

          </div>

          <div class="col-12 col-lg-7">

            <div
              class="small text-uppercase text-secondary fw-semibold mb-2"
            >
              {{ donationData.goods.itemsTitle }}
            </div>

            <div class="row">

              <div
                v-for="item in donationData.goods.items"
                :key="item"
                class="col-12 col-md-6"
              >

                <div class="d-flex align-items-start gap-3 py-3 border-bottom">

                  <Icon name="i-bi:check-lg" class=" text-danger fs-5 flex-shrink-0"
                   />

                  <span class="lh-base">
                    {{ item }}
                  </span>

                </div>

              </div>

            </div>

            <div class="bg-light p-4 mt-4">

              <div class="d-flex align-items-start gap-3">

                <Icon name="i-bi:info-circle" class=" text-danger fs-5 flex-shrink-0"
                 />

                <div>

                  <div class="fw-semibold mb-1">
                    {{ donationData.goods.note.title }}
                  </div>

                  <p class="small text-secondary mb-0">
                    {{ donationData.goods.note.text }}
                  </p>

                </div>

              </div>

            </div>

            <div class="d-flex flex-column flex-sm-row gap-2 mt-4">

              <a
                v-for="contact in donationData.goods.contacts"
                :key="contact.href"
                :href="contact.href"
                class="btn fw-semibold"
                :class="`btn-${contact.variant}`"
              >

                <Icon
                  :name="contact.icon"
                  class="me-2"
                ></Icon>

                {{ contact.label }}

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>

  </div>
</template>
