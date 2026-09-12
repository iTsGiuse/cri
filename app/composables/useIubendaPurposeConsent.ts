
export const useIubendaPurposeConsent = (purpose: number) => {
  const trigger = useScriptTriggerConsent()

  if (import.meta.client) {
    const grant = () => trigger.accept()
    const revoke = () => trigger.revoke()

    window.addEventListener(`iubenda_consent_given_purpose_${purpose}`, grant)
    window.addEventListener(`iubenda_consent_rejected_purpose_${purpose}`, revoke)

    onScopeDispose(() => {
      window.removeEventListener(`iubenda_consent_given_purpose_${purpose}`, grant)
      window.removeEventListener(`iubenda_consent_rejected_purpose_${purpose}`, revoke)
    })
  }

  return trigger
}
