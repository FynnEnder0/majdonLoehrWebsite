import { site } from '../data/site';
import { credits } from '../data/credits';
import { skillGroups } from '../data/profile';
import { ui, type Lang } from '../i18n/ui';

/** Stabile Entity-IDs für den @graph — so referenzieren sich die Knoten gegenseitig. */
const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;

/** Nicht-leere Social-/Profil-URLs für sameAs (verankert die Entität bei Google & KI-Suche). */
function sameAs(): string[] {
  return Object.values(site.social).filter((v): v is string => Boolean(v));
}

/** Fähigkeiten flach + lokalisiert — füttert knowsAbout. */
function knowsAbout(lang: Lang): string[] {
  return skillGroups.flatMap((g) => g.items.map((i) => i[lang]));
}

/** Theater-Engagements als TheaterEvent (gültig für performerIn). */
function theaterEvents(lang: Lang) {
  return credits
    .filter((c) => c.category === 'theater')
    .map((c) => ({
      '@type': 'TheaterEvent',
      name: c.production[lang],
      location: { '@type': 'Place', name: c.venue[lang] },
      ...(c.upcoming ? { eventStatus: 'https://schema.org/EventScheduled' } : {}),
    }));
}

/** Film-/Synchron-Produktionen als eigene Werk-Knoten, die auf die Person zurückverweisen. */
function screenWorks(lang: Lang) {
  return credits
    .filter((c) => c.category === 'film' || c.category === 'voice')
    .map((c) => ({
      '@type': c.category === 'film' ? 'Movie' : 'CreativeWork',
      name: c.production[lang],
      actor: { '@id': PERSON_ID },
    }));
}

/**
 * Schema.org @graph: Person (Schauspielerin) + WebSite, gegenseitig verknüpft.
 * Liefert die Entität eindeutig an Rich Results und KI-Suchsysteme (AI Overviews,
 * ChatGPT, Perplexity) — inkl. Produktionen, Fähigkeiten und Arbeitsorten.
 */
export function personJsonLd(lang: Lang) {
  const profiles = sameAs();

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Majdon Löhr',
    alternateName: 'Majdon Loehr',
    url: site.url,
    mainEntityOfPage: { '@id': WEBSITE_ID },
    jobTitle: site.jobTitle[lang],
    description: ui[lang].meta.description,
    image: `${site.url}/og.jpg`,
    gender: 'Female',
    nationality: { '@type': 'Country', name: 'Deutschland' },
    knowsLanguage: ['de', 'en'],
    knowsAbout: knowsAbout(lang),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Braunschweig',
      addressCountry: 'DE',
    },
    workLocation: [
      { '@type': 'Place', name: 'Braunschweig', address: { '@type': 'PostalAddress', addressLocality: 'Braunschweig', addressCountry: 'DE' } },
      { '@type': 'Place', name: 'Hamburg', address: { '@type': 'PostalAddress', addressLocality: 'Hamburg', addressCountry: 'DE' } },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: site.training.school,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.training.city,
        addressCountry: 'DE',
      },
    },
    email: `mailto:${site.email}`,
    performerIn: theaterEvents(lang),
    ...(profiles.length ? { sameAs: profiles } : {}),
  };

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: lang === 'de' ? 'de-DE' : 'en',
    about: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [website, person, ...screenWorks(lang)],
  };
}
