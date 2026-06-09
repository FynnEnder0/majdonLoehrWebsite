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
      title: 'Majdon Löhr — Schauspielerin · Bühne & Theater',
      description:
        'Majdon Löhr ist Schauspielerin mit Schwerpunkt Bühne und Sprechtheater — komödiantische Stärke, starke Stimme, Bühnenenergie. Engagements in Hannover, Braunschweig und freien Produktionen. Casting- & Buchungsanfragen willkommen.',
      ogAlt: 'Porträt von Majdon Löhr',
    },
    nav: {
      about: 'Über mich',
      work: 'Arbeit',
      press: 'Presse',
      gallery: 'Galerie',
      contact: 'Kontakt',
      menu: 'Menü',
      close: 'Schließen',
      toContent: 'Zum Inhalt springen',
    },
    hero: {
      eyebrow: 'Schauspielerin · Bühne · Theater',
      nameFirst: 'Majdon',
      nameLast: 'Löhr',
      tagline: 'Auf der Bühne zuhause — ab dem ersten Schritt.',
      bio: 'Ausgebildet an der Freien Schauspielschule Hamburg, zuhause im Sprechtheater. Meine Stärke ist die Komödie — getragen von einer kräftigen Stimme und einer Bühnenenergie, die das Publikum mitnimmt.',
      engagementsLabel: 'Engagements',
      engagements: ['Hannover', 'Braunschweig', 'Freie Produktionen'],
      ctaPrimary: 'Zur Galerie',
      ctaSecondary: 'Kontakt aufnehmen',
      scrollHint: 'Weiter erkunden',
    },
    about: {
      eyebrow: 'Über mich',
      heading: 'Der Mensch hinter der Rolle',
      body: [
        'Ich bin Majdon Löhr — Schauspielerin am Beginn meines Wegs, mit der Bühne als künstlerischer Heimat. 2025 habe ich meine Ausbildung an der Freien Schauspielschule Hamburg abgeschlossen und in rund fünfzig bis sechzig Auftritten gelernt, was ein Raum, ein Licht und ein Publikum aus einem Text machen können.',
        'Mein Zuhause ist das Sprechtheater, meine größte Freude die Komödie: das präzise Timing, der Mut zur Übertreibung, der Moment, in dem ein Saal gemeinsam lacht. Dazu kommt eine Stimme, die trägt — ob im Spiel, im Gesang oder vor dem Mikrofon beim Synchronsprechen.',
        'Ich pendle zwischen Braunschweig und Hamburg, bin neugierig auf neue Rollen, Ensembles und Handschriften — und bereit für den nächsten Schritt.',
      ],
    },
    work: {
      eyebrow: 'Arbeit',
      heading: 'Produktionen & Credits',
      intro:
        'Eine Auswahl aus Ausbildungsproduktionen, freien Arbeiten und Gastspielen.',
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
      heading: 'Bühne & Porträt',
      filterAll: 'Alle',
      filterStage: 'Bühne',
      filterPortrait: 'Porträt',
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
        'Casting, Buchung oder einfach ein Kennenlernen — schreiben Sie mir. Ich freue mich auf Ihre Nachricht.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'name@beispiel.de',
      messagePlaceholder: 'Worum geht es?',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet …',
      success: 'Vielen Dank — Ihre Nachricht ist angekommen. Ich melde mich bald.',
      error: 'Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt per E-Mail.',
      required: 'Bitte ausfüllen.',
      invalidEmail: 'Bitte eine gültige E-Mail-Adresse angeben.',
      directEmail: 'Oder direkt:',
    },
    footer: {
      tagline: 'Schauspielerin · Bühne & Theater',
      basedIn: 'Braunschweig & Hamburg',
      rights: 'Alle Rechte vorbehalten.',
      backToTop: 'Nach oben',
    },
  },

  en: {
    meta: {
      title: 'Majdon Löhr — Actress · Stage & Theatre',
      description:
        'Majdon Löhr is an actress focused on stage and spoken theatre — comedic strength, a powerful voice and real stage energy. Engagements in Hannover, Braunschweig and independent productions. Casting & booking enquiries welcome.',
      ogAlt: 'Portrait of Majdon Löhr',
    },
    nav: {
      about: 'About',
      work: 'Work',
      press: 'Press',
      gallery: 'Gallery',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      toContent: 'Skip to content',
    },
    hero: {
      eyebrow: 'Actress · Stage · Theatre',
      nameFirst: 'Majdon',
      nameLast: 'Löhr',
      tagline: 'At home on stage — from the very first step.',
      bio: 'Trained at the Freie Schauspielschule Hamburg and at home in spoken theatre. My strength is comedy — carried by a powerful voice and a stage energy that takes the audience along.',
      engagementsLabel: 'Engagements',
      engagements: ['Hannover', 'Braunschweig', 'Independent Productions'],
      ctaPrimary: 'View the gallery',
      ctaSecondary: 'Get in touch',
      scrollHint: 'Explore further',
    },
    about: {
      eyebrow: 'About',
      heading: 'The person behind the role',
      body: [
        'I’m Majdon Löhr — an actress at the start of her journey, with the stage as her artistic home. In 2025 I completed my training at the Freie Schauspielschule Hamburg, and across some fifty to sixty performances I learned what a room, a light and an audience can make of a text.',
        'Spoken theatre is my home; comedy is my greatest joy: the precise timing, the courage to go big, the moment a whole room laughs together. Add to that a voice that carries — in performance, in song, or at the microphone for voice work.',
        'I move between Braunschweig and Hamburg, curious about new roles, ensembles and signatures — and ready for the next step.',
      ],
    },
    work: {
      eyebrow: 'Work',
      heading: 'Productions & Credits',
      intro:
        'A selection of training productions, independent work and guest performances.',
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
      heading: 'Stage & Portrait',
      filterAll: 'All',
      filterStage: 'Stage',
      filterPortrait: 'Portrait',
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
        'Casting, booking, or simply getting to know each other — drop me a line. I look forward to hearing from you.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'name@example.com',
      messagePlaceholder: 'What’s it about?',
      submit: 'Send message',
      sending: 'Sending …',
      success: 'Thank you — your message has arrived. I’ll be in touch soon.',
      error: 'Something went wrong. Please try again or email me directly.',
      required: 'Please fill this in.',
      invalidEmail: 'Please enter a valid email address.',
      directEmail: 'Or directly:',
    },
    footer: {
      tagline: 'Actress · Stage & Theatre',
      basedIn: 'Braunschweig & Hamburg',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
} as const;

export type UiStrings = (typeof ui)[typeof defaultLang];
