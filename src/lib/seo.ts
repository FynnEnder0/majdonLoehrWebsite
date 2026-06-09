import { site } from '../data/site';
import type { Lang } from '../i18n/ui';

/** Schema.org Person (Schauspielerin) als JSON-LD. */
export function personJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Majdon Loehr',
    url: site.url,
    jobTitle: site.jobTitle[lang],
    image: `${site.url}/og.jpg`,
    gender: 'Female',
    nationality: { '@type': 'Country', name: 'Deutschland' },
    knowsLanguage: ['de', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Braunschweig',
      addressCountry: 'DE',
    },
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
  };
}
