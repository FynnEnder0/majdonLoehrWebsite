/**
 * Pressestimmen.
 * PLATZHALTER — echte Zitate, Quelle und ggf. Artikel-Links bitte ergänzen.
 */
export type PressQuote = {
  quote: { de: string; en: string };
  source: string;
  /** optional: Link zum Artikel */
  url?: string;
};

export const press: PressQuote[] = [
  {
    quote: {
      de: '„Platzhalter — hier steht ein prägnantes Pressezitat über Majdon Löhrs Bühnenpräsenz.“',
      en: '“Placeholder — a striking press quote about Majdon Löhr’s stage presence goes here.”',
    },
    source: 'Quelle (TODO)',
  },
  {
    quote: {
      de: '„Platzhalter — ein zweites Zitat, das ihre komödiantische Stärke hervorhebt.“',
      en: '“Placeholder — a second quote highlighting her comedic strength.”',
    },
    source: 'Quelle (TODO)',
  },
];
