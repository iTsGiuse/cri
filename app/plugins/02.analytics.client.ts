/**
 * Richiede il modulo `@nuxt/scripts` attivo in nuxt.config.ts
 * (`useScriptGoogleAnalytics` e `useScriptTriggerConsent` sono suoi
 * auto-import). Il modulo è attualmente disattivato per un difetto a
 * monte: vedi il commento accanto a `'@nuxt/scripts'` in nuxt.config.ts.
 *
 * Finché `analytics.measurementId` resta vuoto il plugin esce subito e
 * non tocca quegli auto-import, quindi non rompe nulla.
 */
export default defineNuxtPlugin(() => {
  const measurementId = useRuntimeConfig().public.analytics.measurementId
  if (!measurementId) return

  // Nuxt Scripts owns the tag; no Google request is made before accept().
  const trigger = useIubendaPurposeConsent(4)
  const analytics = useScriptGoogleAnalytics({
    id: measurementId,
    trigger,
    defaultConsent: {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    },
  })

  const grantMeasurement = () => {
    trigger.accept()
    analytics.consent?.update({ analytics_storage: 'granted' })
  }

  const revokeMeasurement = () => {
    analytics.consent?.update({ analytics_storage: 'denied' })
    trigger.revoke()
  }

  // Iubenda purpose 4 is Measurement.
  watch(trigger.consented, (consented) => {
    if (consented) grantMeasurement()
    else revokeMeasurement()
  })
})
