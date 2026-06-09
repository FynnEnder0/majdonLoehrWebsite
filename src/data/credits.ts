/**
 * Produktionen & Credits.
 * PLATZHALTER — echte Einträge (Rolle, Produktion, Haus, Jahr) bitte ergänzen.
 * Offene Punkte laut projektplan.md: exakte Theater-Namen in Hannover & Braunschweig.
 */
export type Credit = {
  year: string;
  role: { de: string; en: string };
  production: { de: string; en: string };
  venue: { de: string; en: string };
  /** optional: hebt eine Produktion visuell hervor */
  featured?: boolean;
};

export const credits: Credit[] = [
  {
    year: '2025',
    role: { de: 'Platzhalter-Rolle', en: 'Placeholder role' },
    production: { de: 'Produktionstitel', en: 'Production title' },
    venue: { de: 'Theater Hannover (TODO)', en: 'Theatre Hannover (TODO)' },
    featured: true,
  },
  {
    year: '2024',
    role: { de: 'Platzhalter-Rolle', en: 'Placeholder role' },
    production: { de: 'Produktionstitel', en: 'Production title' },
    venue: { de: 'Theater Braunschweig (TODO)', en: 'Theatre Braunschweig (TODO)' },
  },
  {
    year: '2024',
    role: { de: 'Platzhalter-Rolle', en: 'Placeholder role' },
    production: { de: 'Freie Produktion', en: 'Independent production' },
    venue: { de: 'Freie Produktion', en: 'Independent production' },
  },
  {
    year: '2023',
    role: { de: 'Platzhalter-Rolle', en: 'Placeholder role' },
    production: { de: 'Ausbildungsproduktion', en: 'Training production' },
    venue: { de: 'Freie Schauspielschule Hamburg', en: 'Freie Schauspielschule Hamburg' },
  },
];
