/**
 * Steckbrief (Casting-Daten) & besondere Fähigkeiten — Quelle: projektplan.md.
 * Diese Angaben sind real; offene Punkte (Stimmfach, Tanzstile) sind als TODO markiert.
 */

export type Fact = { label: { de: string; en: string }; value: { de: string; en: string } };

export const castingFacts: Fact[] = [
  { label: { de: 'Geburtsort', en: 'Born in' }, value: { de: 'Braunschweig', en: 'Braunschweig' } },
  { label: { de: 'Nationalität', en: 'Nationality' }, value: { de: 'Deutsch', en: 'German' } },
  { label: { de: 'Base', en: 'Based in' }, value: { de: 'Braunschweig & Hamburg', en: 'Braunschweig & Hamburg' } },
  { label: { de: 'Größe', en: 'Height' }, value: { de: '156 cm', en: '156 cm' } },
  { label: { de: 'Haarfarbe', en: 'Hair' }, value: { de: 'Blond', en: 'Blonde' } },
  { label: { de: 'Augenfarbe', en: 'Eyes' }, value: { de: 'Blau', en: 'Blue' } },
  { label: { de: 'Konfektion', en: 'Clothing size' }, value: { de: 'XS / S', en: 'XS / S' } },
  { label: { de: 'Sprachen', en: 'Languages' }, value: { de: 'Deutsch (Muttersprache), Englisch (Bühne)', en: 'German (native), English (stage)' } },
  { label: { de: 'Führerschein', en: 'Driving licence' }, value: { de: 'Klasse B + Trecker', en: 'Class B + tractor' } },
  { label: { de: 'Fahrzeug', en: 'Vehicle' }, value: { de: 'Eigenes Auto', en: 'Own car' } },
  { label: { de: 'Schwimmen', en: 'Swimming' }, value: { de: 'Ja, gut', en: 'Yes, strong' } },
];

export type SkillGroup = { title: { de: string; en: string }; items: { de: string; en: string }[] };

export const skillGroups: SkillGroup[] = [
  {
    title: { de: 'Musik & Stimme', en: 'Music & Voice' },
    items: [
      { de: 'Gesang', en: 'Singing' },
      { de: 'Klavier', en: 'Piano' },
      { de: 'Akkordeon', en: 'Accordion' },
    ],
  },
  {
    title: { de: 'Körper & Sport', en: 'Body & Sport' },
    items: [
      { de: 'Kraftsport', en: 'Strength training' },
      { de: 'Boxen', en: 'Boxing' },
      { de: 'Showkampf / Fechten', en: 'Stage combat / fencing' },
      { de: 'Sehr gute Fitness', en: 'Very good fitness' },
    ],
  },
  {
    title: { de: 'Sprache & Stimme', en: 'Speech & Voice' },
    items: [
      { de: 'Synchronsprechen (sehr gut)', en: 'Voice / dubbing (very good)' },
      { de: 'Dialekt: Bayerisch', en: 'Dialect: Bavarian' },
      { de: 'Dialekt: Sächsisch', en: 'Dialect: Saxon' },
      { de: 'Dialekt: Berlinerisch', en: 'Dialect: Berlin' },
    ],
  },
];
