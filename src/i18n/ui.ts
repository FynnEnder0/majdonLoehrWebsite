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
      eyebrow: 'Schauspielerin · Sprecherin',
      nameFirst: 'Majdon',
      nameMiddle: 'Charlotte',
      nameLast: 'Löhr',
      tagline: '„Auch Schlafen ist eine Form der Kritik, vor allem im Theater."',
      taglineSource: '— George Bernard Shaw',
      bio: 'Ausgebildete Nachwuchsschauspielerin aus Hamburg mit großer Spielfreude und einer besonderen Leidenschaft für die Komödie.',
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
        'Vielseitigkeit und Neugier begleiten mich auf der Bühne und im Leben.',
      cta: 'Mehr über mich',
      body: [
        'Ich bin Majdon Charlotte Löhr, Schauspielerin und durch und durch ein Bühnenmensch. Im August 2026 schließe ich meine Ausbildung an der Freien Schauspielschule Hamburg ab, wo ich bereits auf der Bühne des Jungen Theaters Hamburg wertvolle Bühnenerfahrung sammeln konnte. Nebenbei durfte ich in studentischen Kurzfilmprojekten des NDR als Haupt- und Nebendarstellerin vor der Kamera stehen. Mein erstes Engagement mit rund fünfzig bis sechzig Vorstellungen führt mich anschließend an das Neue Theater Hannover und die Komödie am Altstadtmarkt in Braunschweig. Zuvor werde ich beim Schauspielschultreffen 2026 in den Hamburger Kammerspielen zu sehen sein.',
        'Meine Leidenschaft für Musik und Kunst entwickelte sich schon früh. Als Kind spielte ich verschiedene Instrumente und fand schließlich an der Waldorfschule zum Theater. Dort wurde mir bewusst, dass mein Platz auf der Bühne ist und dass ich Menschen mit meinen Figuren zum Lachen bringen, unterhalten und berühren möchte. Mit diesem Wunsch entschied ich mich, in Hamburg das schauspielerische Handwerk zu erlernen.',
        'Aufgewachsen bin ich auf einem kleinen Bauernhof in Sachsen-Anhalt zwischen Schafen, Hühnern und Hunden. Diese Nähe zur Natur prägt mich bis heute. Wenn ich nicht auf der Bühne stehe, beobachte ich Vögel, bestimme Pflanzen am Wegesrand und entdecke gerne die kleinen Dinge des Lebens. Gleichzeitig bin ich ein sehr bewegungsfreudiger Mensch und halte mich seit drei Jahren durch regelmäßiges Boxtraining fit.',
        'Besonders viel Freude bereitet mir die Komödie. Das präzise Timing, der Mut zur Übertreibung und die Verbindung zum Publikum begeistern mich hier besonders. Darüber hinaus ist der Gesang ein wichtiger Teil meiner kreativen Arbeit und außerdem möchte ich in Zukunft gerne an Projekten im Bereich Synchronsprechen mitwirken. Ich bin offen, neugierig und freue mich darauf, neue Rollen zu entdecken, mit unterschiedlichen Ensembles zu arbeiten und verschiedene künstlerische Handschriften kennenzulernen.',
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
      upcoming: 'demnächst',
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
      exportPdf: 'Casting-Sheet herunterladen',
      castingBio: [
        'Ich bin Majdon Charlotte Löhr, Nachwuchsschauspielerin aus Hamburg. Im August 2026 schließe ich meine Ausbildung an der Freien Schauspielschule Hamburg ab. Während meiner Ausbildung konnte ich bereits Bühnenerfahrung am Jungen Theater Hamburg sammeln und war in studentischen Kurzfilmprojekten des NDR als Haupt- und Nebendarstellerin vor der Kamera tätig.',
        '2026 bin ich beim Schauspielschultreffen in den Hamburger Kammerspielen in Federico García Lorcas „Bernarda Albas Haus" zu sehen. Anschließend führt mich mein erstes Engagement mit rund fünfzig bis sechzig Vorstellungen an das Neue Theater Hannover sowie die Komödie am Altstadtmarkt in Braunschweig.',
      ],
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
      tagline: 'Schauspielerin · Sprecherin',
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
      eyebrow: 'Actress · Voice Artist',
      nameFirst: 'Majdon',
      nameMiddle: 'Charlotte',
      nameLast: 'Löhr',
      tagline: '“Sleeping is also a form of criticism, especially in the theatre.”',
      taglineSource: '— George Bernard Shaw',
      bio: 'A trained young actress from Hamburg with a great love of performing and a special passion for comedy.',
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
        'Versatility and curiosity accompany me on stage and in life.',
      cta: 'More about me',
      body: [
        'I’m Majdon Charlotte Löhr, an actress and through and through a creature of the stage. In August 2026 I complete my training at the Freie Schauspielschule Hamburg, where I have already gathered valuable stage experience on the boards of the Junges Theater Hamburg. Alongside this, I had the chance to stand in front of the camera as a lead and supporting actress in student short-film projects for the NDR. My first engagement then takes me — with some fifty to sixty performances — to the Neues Theater Hannover and the Komödie am Altstadtmarkt in Braunschweig. Before that, I can be seen at the Schauspielschultreffen 2026 at the Hamburger Kammerspiele.',
        'My passion for music and art developed early. As a child I played various instruments and eventually found my way to theatre at the Waldorf school. It was there that I realised my place is on the stage — that I want to make people laugh, entertain them and move them with my characters. With that wish, I decided to learn the craft of acting in Hamburg.',
        'I grew up on a small farm in Saxony-Anhalt, among sheep, chickens and dogs. That closeness to nature still shapes me today. When I’m not on stage, I watch birds, identify plants along the wayside and love discovering the small things in life. At the same time, I’m a very active person and have kept fit for three years now with regular boxing training.',
        'Comedy brings me particular joy. The precise timing, the courage to exaggerate and the connection with the audience are what thrill me most here. Beyond that, singing is an important part of my creative work, and in future I’d love to contribute to projects in voice acting too. I’m open, curious and looking forward to discovering new roles, working with different ensembles and getting to know a range of artistic approaches.',
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
      upcoming: 'upcoming',
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
      exportPdf: 'Download Casting Sheet',
      castingBio: [
        'I’m Majdon Charlotte Löhr, an emerging actress from Hamburg. In August 2026 I complete my training at the Freie Schauspielschule Hamburg. During my training I have already gathered stage experience at the Junges Theater Hamburg and appeared in front of the camera as a lead and supporting actress in student short-film projects for the NDR.',
        'In 2026 I can be seen at the Schauspielschultreffen at the Hamburger Kammerspiele in Federico García Lorca’s “The House of Bernarda Alba”. My first engagement then takes me — with some fifty to sixty performances — to the Neues Theater Hannover and the Komödie am Altstadtmarkt in Braunschweig.',
      ],
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
      tagline: 'Actress · Voice Artist',
      basedIn: 'Braunschweig & Hamburg',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
} as const;

export type UiStrings = (typeof ui)[typeof defaultLang];
