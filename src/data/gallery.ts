import type { ImageMetadata } from 'astro';

/**
 * Galerie-Bilder — Kategorie ergibt sich aus dem Unterordner:
 *   src/assets/gallery/shootings/ → Shootings (Porträt)
 *   src/assets/gallery/rollen/    → Rollen & Bühne
 *   src/assets/gallery/privat/    → Privat
 * Neues Bild hinzufügen = einfach in den passenden Unterordner legen.
 */
const shootingsImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/shootings/*.{jpg,jpeg,png}',
  { eager: true },
);
const rollenImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/rollen/*.{jpg,jpeg,png}',
  { eager: true },
);
const privatImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/privat/*.{jpg,jpeg,png}',
  { eager: true },
);

export type GalleryCategory = 'shootings' | 'rollen' | 'privat';

export type GalleryImage = {
  src: ImageMetadata;
  category: GalleryCategory;
  alt: { de: string; en: string };
};

const alts: Record<GalleryCategory, { de: string; en: string }> = {
  shootings: {
    de: 'Porträtaufnahme von Majdon Löhr',
    en: 'Portrait photograph of Majdon Löhr',
  },
  rollen: {
    de: 'Majdon Löhr in einer Rolle auf der Bühne',
    en: 'Majdon Löhr in a stage role',
  },
  privat: {
    de: 'Majdon Löhr — privat',
    en: 'Majdon Löhr — personal',
  },
};

function build(
  mods: Record<string, { default: ImageMetadata }>,
  category: GalleryCategory,
): GalleryImage[] {
  return Object.values(mods).map((mod) => ({
    src: mod.default,
    category,
    alt: alts[category],
  }));
}

// Reihenfolge: Shootings → Rollen → Privat
export const gallery: GalleryImage[] = [
  ...build(shootingsImages, 'shootings'),
  ...build(rollenImages, 'rollen'),
  ...build(privatImages, 'privat'),
];
