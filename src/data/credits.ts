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
    role: { de: 'Magdalena', en: 'Magdalena' },
    production: { de: 'Bernarda Albas Haus', en: 'The House of Bernarda Alba' },
    venue: { de: 'Hamburger Kammerspiele', en: 'Hamburger Kammerspiele' },
    category: 'theater',
    upcoming: true,
  },
  {
    year: '2026',
    role: { de: 'Holzapfel', en: 'Dogberry' },
    production: { de: 'Viel Lärm um Nichts', en: 'Much Ado About Nothing' },
    venue: { de: 'Junges Theater Hamburg', en: 'Junges Theater Hamburg' },
    category: 'theater',
  },
  {
    year: '2025',
    role: { de: 'Feline Neumann', en: 'Feline Neumann' },
    production: { de: 'Diagnose Fehlinformation', en: 'Diagnosis Misinformation' },
    venue: { de: 'Kurzfilm · NDR · BS19', en: 'Short film · NDR · BS19' },
    category: 'film',
  },
  {
    year: '2025',
    role: { de: 'Lettes Frau', en: "Lette's Wife" },
    production: { de: 'Der Hässliche', en: 'The Ugly One' },
    venue: { de: 'Junges Theater Hamburg', en: 'Junges Theater Hamburg' },
    category: 'theater',
  },
  {
    year: '2025',
    role: {
      de: 'Gudrun Gundermann · Vivi Venus · Stimme Werbespot',
      en: 'Gudrun Gundermann · Vivi Venus · Commercial voice',
    },
    production: {
      de: 'Gudrun Gundermann und der kosmische Kundenservice',
      en: 'Gudrun Gundermann and the Cosmic Customer Service',
    },
    venue: { de: 'Hörspiel · Eigene Produktion', en: 'Radio play · Own production' },
    category: 'voice',
  },
  {
    year: '2025',
    role: { de: 'Rezitation', en: 'Recitation' },
    production: { de: 'Anna Blume', en: 'Anna Blume' },
    venue: { de: 'Textrezitation · Kurt Schwitters', en: 'Recitation · Kurt Schwitters' },
    category: 'theater',
  },
  {
    year: '2024',
    role: { de: 'Frida', en: 'Frida' },
    production: { de: 'Old Friends', en: 'Old Friends' },
    venue: {
      de: 'Junges Theater Hamburg · Eigene Produktion',
      en: 'Junges Theater Hamburg · Own production',
    },
    category: 'theater',
  },
];
