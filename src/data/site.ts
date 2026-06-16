/**
 * Zentrale Stammdaten der Website.
 * Werte mit TODO bitte ersetzen, sobald final.
 */
export const site = {
  name: 'Majdon Löhr',
  url: 'https://www.majdonloehr.de',
  // TODO: echte Kontakt-E-Mail eintragen
  email: 'maj.loehr17@gmail.com',
  // Drittanbieter-Formular (Formspree/Web3Forms) — via .env überschreibbar
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  // Nur für Web3Forms nötig (Formspree braucht keinen Key)
  formAccessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY ?? '',
  // TODO: Social-Handles ergänzen, falls vorhanden
  social: {
    instagram: '',
  },
  // Vimeo-Embed-URL für den Demo-Reel — leer lassen solange kein Video vorhanden
  reelUrl: '',
  jobTitle: { de: 'Schauspielerin', en: 'Actress' },
  // Casting-Stammdaten aus projektplan.md
  base: 'Braunschweig & Hamburg',
  training: {
    school: 'Freie Schauspielschule Hamburg',
    city: 'Hamburg',
    graduation: '2025',
  },
} as const;
