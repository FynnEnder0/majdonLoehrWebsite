/**
 * Steckbrief (Casting-Daten) & besondere Fähigkeiten — Quelle: projektplan.md.
 * Diese Angaben sind real; offene Punkte (Stimmfach, Tanzstile) sind als TODO markiert.
 */

export type Fact = { label: { de: string; en: string }; value: { de: string; en: string } };

export const castingFacts: Fact[] = [
  { label: { de: 'Geburtsort', en: 'Born in' }, value: { de: 'Braunschweig', en: 'Braunschweig' } },
  { label: { de: 'Nationalität', en: 'Nationality' }, value: { de: 'Deutsch', en: 'German' } },
  { label: { de: 'Base', en: 'Based in' }, value: { de: 'Braunschweig & Hamburg', en: 'Braunschweig & Hamburg' } },
  { label: { de: 'Spielalter', en: 'Playing age' }, value: { de: '15–30', en: '15–30' } },
  { label: { de: 'Größe', en: 'Height' }, value: { de: '156 cm', en: '156 cm' } },
  { label: { de: 'Statur', en: 'Build' }, value: { de: 'Fit, athletisch', en: 'Fit, athletic' } },
  { label: { de: 'Haarfarbe', en: 'Hair colour' }, value: { de: 'Blond', en: 'Blonde' } },
  { label: { de: 'Haarlänge', en: 'Hair length' }, value: { de: 'Zwischen Achsel und Ellbogen', en: 'Between armpit and elbow' } },
  { label: { de: 'Augenfarbe', en: 'Eyes' }, value: { de: 'Blau', en: 'Blue' } },
  { label: { de: 'Konfektion', en: 'Clothing size' }, value: { de: 'XS / S', en: 'XS / S' } },
  { label: { de: 'Schuhgröße', en: 'Shoe size' }, value: { de: '37', en: '37 (EU)' } },
  { label: { de: 'Stimmlage', en: 'Voice type' }, value: { de: 'Sopran', en: 'Soprano' } },
  { label: { de: 'Sprachen', en: 'Languages' }, value: { de: 'Deutsch (Muttersprache), Englisch (sehr gut), Französisch (Grundkenntnisse)', en: 'German (native), English (very good), French (basics)' } },
  { label: { de: 'Führerschein', en: 'Driving licence' }, value: { de: 'Klasse B + Motorrad (A2) + Trecker', en: 'Class B + motorcycle (A2) + tractor' } },
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
      { de: 'Gitarre (Grundkenntnisse)', en: 'Guitar (basics)' },
      { de: 'Mundharmonika (Grundkenntnisse)', en: 'Harmonica (basics)' },
      { de: 'Flöte (Grundkenntnisse)', en: 'Flute (basics)' },
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
      { de: 'Synchronsprechen', en: 'Voice / dubbing' },
      { de: 'Dialekt: Sächsisch', en: 'Dialect: Saxon' },
    ],
  },
];
