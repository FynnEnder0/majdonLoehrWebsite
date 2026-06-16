/**
 * i18n — UI-Strings für DE & EN.
 * Eine Quelle für alle Oberflächentexte. Strukturierte Inhalte
 * (Credits, Presse, Galerie, Casting-Daten) liegen in src/data/.
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    meta: {
      title: 'Majdon Löhr · Schauspielerin · Bühne & Theater',
      description:
        'Majdon Löhr ist Schauspielerin mit Schwerpunkt Bühne, Sprechtheater und Synchronsprechen. Komödiantische Stärke, starke Stimme, Bühnenenergie. Engagements in Hannover, Braunschweig und freien Produktionen. Casting- & Buchungsanfragen willkommen.',
      ogAlt: 'Porträt von Majdon Löhr',
    },
    nav: {
      about: 'Über mich',
      vita: 'Vita',
      work: 'Arbeit',
      press: 'Presse',
      gallery: 'Galerie',
      contact: 'Kontakt',
      home: 'Startseite',
      menu: 'Menü',
      close: 'Schließen',
      toContent: 'Zum Inhalt springen',
    },
    hero: {
      eyebrow: 'Schauspielerin · Bühne · Synchron',
      nameFirst: 'Majdon',
      nameLast: 'Löhr',
      tagline: 'Komödie im Blut. Horror im Herzen.',
      bio: 'Ausgebildet an der Freien Schauspielschule Hamburg. Zuhause im Sprechtheater, glücklich, wenn einem Saal vor Lachen oder Spannung die Luft wegbleibt.',
      engagementsLabel: 'Engagements',
      engagements: ['Hannover', 'Braunschweig', 'Freie Produktionen'],
      ctaPrimary: 'Zur Galerie',
      ctaSecondary: 'Kontakt aufnehmen',
      scrollHint: 'Weiter erkunden',
    },
    about: {
      eyebrow: 'Über mich',
      heading: 'Der Mensch hinter der Rolle',
      teaser:
        'Ich liebe Menschen, Tiere und den Moment, in dem ein ganzer Saal lacht. Auf der Bühne bin ich zuhause, in der Komödie erst recht.',
      cta: 'Mehr über mich',
      body: [
        'Ich bin Majdon Löhr, Schauspielerin und durch und durch ein Bühnenmensch. 2025 habe ich meine Ausbildung an der Freien Schauspielschule Hamburg abgeschlossen und in rund fünfzig bis sechzig Auftritten erlebt, was ein Raum, ein Licht und ein Publikum aus einem Text machen können.',
        'Mein Zuhause ist das Sprechtheater, meine größte Freude die Komödie: das präzise Timing, der Mut zur Übertreibung, der Moment, in dem ein Saal gemeinsam lacht. Für einen guten Grusel bin ich ebenso zu haben. Dazu kommt eine Leidenschaft fürs Synchronsprechen — eine Stimme, die trägt, ob auf der Bühne, im Gesang oder hinter dem Mikrofon.',
        'Wenn ich nicht auf der Bühne stehe, bin ich am liebsten draußen in der Natur oder bei Tieren und den Menschen, die mir wichtig sind. Ich bin offen, aufgeschlossen und freue mich auf neue Rollen, Ensembles und Handschriften.',
      ],
    },
    work: {
      eyebrow: 'Arbeit',
      heading: 'Produktionen & Credits',
      intro:
        'Eine Auswahl aus Ausbildungsproduktionen, freien Arbeiten und Gastspielen.',
      cta: 'Alle Engagements',
      placeholderNote: 'Die vollständige Werkliste wird laufend ergänzt.',
      columns: { role: 'Rolle', production: 'Produktion', venue: 'Haus', year: 'Jahr' },
    },
    press: {
      eyebrow: 'Presse',
      heading: 'Stimmen',
      readMore: 'Zum Artikel',
    },
    gallery: {
      eyebrow: 'Galerie',
      heading: 'Eindrücke',
      teaser:
        'Ein Blick auf Shootings, Rollen und Privates. Momente aus Produktionen, Proben und dazwischen.',
      cta: 'Zur Galerie',
      filterAll: 'Alle',
      filterShootings: 'Shootings',
      filterRollen: 'Rollen',
      filterPrivat: 'Privat',
      reelHeading: 'Demo-Reel',
      reelPlaceholder: 'Das Demo-Reel folgt in Kürze.',
      close: 'Schließen',
      prev: 'Vorheriges Bild',
      next: 'Nächstes Bild',
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Lassen Sie uns sprechen',
      intro:
        'Casting, Buchung oder einfach ein Kennenlernen: schreiben Sie mir. Ich freue mich auf Ihre Nachricht.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'name@beispiel.de',
      messagePlaceholder: 'Worum geht es?',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet …',
      success: 'Vielen Dank! Ihre Nachricht ist angekommen. Ich melde mich bald.',
      error: 'Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt per E-Mail.',
      required: 'Bitte ausfüllen.',
      invalidEmail: 'Bitte eine gültige E-Mail-Adresse angeben.',
      directEmail: 'Oder direkt:',
    },
    vita: {
      metaTitle: 'Vita · Majdon Löhr · Schauspielerin',
      metaDescription:
        'Vita von Majdon Löhr: Werdegang, Steckbrief, besondere Fähigkeiten und Engagements im Sprech- und Bühnentheater.',
      eyebrow: 'Vita',
      heading: 'Vita & Werdegang',
      lead: 'Wer ich bin, was ich kann und wo ich gespielt habe. Auf einen Blick.',
      profileHeading: 'Steckbrief',
      skillsHeading: 'Besondere Fähigkeiten',
      creditsHeading: 'Engagements & Produktionen',
    },
    galleryPage: {
      metaTitle: 'Galerie · Majdon Löhr · Schauspielerin',
      metaDescription:
        'Bühnen- und Porträtaufnahmen von Majdon Löhr aus Produktionen und Shootings.',
    },
    common: {
      backHome: 'Zurück zur Startseite',
    },
    footer: {
      tagline: 'Schauspielerin · Bühne · Synchron',
      basedIn: 'Braunschweig & Hamburg',
      rights: 'Alle Rechte vorbehalten.',
      backToTop: 'Nach oben',
    },
  },

  en: {
    meta: {
      title: 'Majdon Löhr · Actress · Stage & Theatre',
      description:
        'Majdon Löhr is an actress focused on stage, spoken theatre and voice acting: comedic strength, a powerful voice and real stage energy. Engagements in Hannover, Braunschweig and independent productions. Casting & booking enquiries welcome.',
      ogAlt: 'Portrait of Majdon Löhr',
    },
    nav: {
      about: 'About',
      vita: 'CV',
      work: 'Work',
      press: 'Press',
      gallery: 'Gallery',
      contact: 'Contact',
      home: 'Home',
      menu: 'Menu',
      close: 'Close',
      toContent: 'Skip to content',
    },
    hero: {
      eyebrow: 'Actress · Stage · Voice Acting',
      nameFirst: 'Majdon',
      nameLast: 'Löhr',
      tagline: 'Comedy in the blood. Horror in the heart.',
      bio: 'Trained at the Freie Schauspielschule Hamburg. At home in spoken theatre, happiest when a room is breathless with laughter or suspense.',
      engagementsLabel: 'Engagements',
      engagements: ['Hannover', 'Braunschweig', 'Independent Productions'],
      ctaPrimary: 'View the gallery',
      ctaSecondary: 'Get in touch',
      scrollHint: 'Explore further',
    },
    about: {
      eyebrow: 'About',
      heading: 'The person behind the role',
      teaser:
        'I love people, animals and the moment an entire room bursts out laughing. The stage is my home, and comedy is where I belong most of all.',
      cta: 'More about me',
      body: [
        'I’m Majdon Löhr, actress and very much a stage person. In 2025 I completed my training at the Freie Schauspielschule Hamburg, and across some fifty to sixty performances I discovered what a room, a light and an audience can make of a text.',
        'Spoken theatre is my home and comedy is my greatest joy: precise timing, the courage to go big, the moment a whole room laughs together. And I love a good scare just as much. Voice acting is a second great passion — I bring a voice that carries, whether on stage, in song or behind the microphone.',
        'When I’m not on stage, you’ll find me outdoors in nature, with animals or with the people who matter most to me. I’m open, warm-hearted and ready for new roles, ensembles and ways of working.',
      ],
    },
    work: {
      eyebrow: 'Work',
      heading: 'Productions & Credits',
      intro:
        'A selection of training productions, independent work and guest performances.',
      cta: 'All engagements',
      placeholderNote: 'The full list of work is continually being added to.',
      columns: { role: 'Role', production: 'Production', venue: 'Venue', year: 'Year' },
    },
    press: {
      eyebrow: 'Press',
      heading: 'Voices',
      readMore: 'Read the article',
    },
    gallery: {
      eyebrow: 'Gallery',
      heading: 'Impressions',
      teaser:
        'A glimpse of shoots, roles and private moments. From productions, rehearsals and in between.',
      cta: 'View the gallery',
      filterAll: 'All',
      filterShootings: 'Portraits',
      filterRollen: 'Roles',
      filterPrivat: 'Private',
      reelHeading: 'Showreel',
      reelPlaceholder: 'The showreel is coming soon.',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Let’s talk',
      intro:
        'Casting, booking, or simply getting to know each other: drop me a line. I look forward to hearing from you.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'name@example.com',
      messagePlaceholder: 'What’s it about?',
      submit: 'Send message',
      sending: 'Sending …',
      success: 'Thank you! Your message has arrived. I’ll be in touch soon.',
      error: 'Something went wrong. Please try again or email me directly.',
      required: 'Please fill this in.',
      invalidEmail: 'Please enter a valid email address.',
      directEmail: 'Or directly:',
    },
    vita: {
      metaTitle: 'CV · Majdon Löhr · Actress',
      metaDescription:
        'CV of Majdon Löhr: background, casting profile, special skills and stage engagements.',
      eyebrow: 'CV',
      heading: 'CV & Background',
      lead: 'Who I am, what I can do and where I have performed. At a glance.',
      profileHeading: 'Profile',
      skillsHeading: 'Special Skills',
      creditsHeading: 'Engagements & Productions',
    },
    galleryPage: {
      metaTitle: 'Gallery · Majdon Löhr · Actress',
      metaDescription:
        'Stage and portrait photographs of Majdon Löhr from productions and shoots.',
    },
    common: {
      backHome: 'Back to home',
    },
    footer: {
      tagline: 'Actress · Stage · Voice Acting',
      basedIn: 'Braunschweig & Hamburg',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
} as const;

export type UiStrings = (typeof ui)[typeof defaultLang];
