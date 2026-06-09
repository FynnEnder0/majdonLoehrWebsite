/**
 * Zentrale Stammdaten der Website.
 * Werte mit TODO bitte ersetzen, sobald final.
 */
export const site = {
  name: 'Majdon Loehr',
  url: 'https://majdonloehr.de',
  // TODO: echte Kontakt-E-Mail eintragen
  email: 'kontakt@majdonloehr.de',
  // Drittanbieter-Formular (Formspree/Web3Forms) — via .env überschreibbar
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  // Nur für Web3Forms nötig (Formspree braucht keinen Key)
  formAccessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY ?? '',
  // TODO: Social-Handles ergänzen, falls vorhanden
  social: {
    instagram: '',
  },
  jobTitle: { de: 'Schauspielerin', en: 'Actress' },
  // Casting-Stammdaten aus projektplan.md
  base: 'Braunschweig & Hamburg',
  training: {
    school: 'Freie Schauspielschule Hamburg',
    city: 'Hamburg',
    graduation: '2025',
  },
} as const;
