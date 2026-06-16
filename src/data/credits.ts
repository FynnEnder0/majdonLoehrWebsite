/** Tätigkeitsfeld — bestimmt das Doodle-Icon vor der Produktion. */
export type CreditCategory = 'theater' | 'film' | 'voice';

export type Credit = {
  year: string;
  role: { de: string; en: string };
  production: { de: string; en: string };
  venue: { de: string; en: string };
  /** Tätigkeitsfeld: Bühne, Film/Kamera oder Synchron */
  category: CreditCategory;
  /** hebt eine Produktion visuell hervor */
  featured?: boolean;
  /** noch nicht gespielt — wird dezent gekennzeichnet */
  upcoming?: boolean;
};

export const credits: Credit[] = [
  {
    year: '2026',
    role: { de: 'Ensemble', en: 'Ensemble' },
    production: { de: '2:22 – Eine Geistergeschichte', en: '2:22 – A Ghost Story' },
    venue: {
      de: 'Neues Theater Hannover · Komödie Braunschweig',
      en: 'Neues Theater Hannover · Komödie Braunschweig',
    },
    category: 'theater',
    upcoming: true,
  },
  {
    year: '2026',
    role: { de: 'Ensemble', en: 'Ensemble' },
    production: { de: 'Bernarda Albas Haus', en: 'The House of Bernarda Alba' },
    venue: { de: 'Hamburger Kammerspiele', en: 'Hamburger Kammerspiele' },
    category: 'theater',
    upcoming: true,
  },
  {
    year: '2025',
    role: { de: 'Feline Neumann', en: 'Feline Neumann' },
    production: { de: 'Diagnose Fehlinformation', en: 'Diagnosis Misinformation' },
    venue: { de: 'Kurzfilm · NDR · BS19', en: 'Short film · NDR · BS19' },
    category: 'film',
  },
];
