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
