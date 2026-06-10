import type { ImageMetadata } from 'astro';

/**
 * Galerie-Bilder — Kategorie ergibt sich aus dem Unterordner:
 *   src/assets/gallery/portrait/  → Porträt
 *   src/assets/gallery/stage/     → Bühne
 * Neues Bild hinzufügen = einfach in den passenden Unterordner legen.
 */
const portraitImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/portrait/*.{jpg,jpeg,png}',
  { eager: true },
);
const stageImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/stage/*.{jpg,jpeg,png}',
  { eager: true },
);

export type GalleryCategory = 'stage' | 'portrait';

export type GalleryImage = {
  src: ImageMetadata;
  category: GalleryCategory;
  alt: { de: string; en: string };
};

const alts: Record<GalleryCategory, { de: string; en: string }> = {
  stage: {
    de: 'Majdon Löhr in einer Bühnenproduktion',
    en: 'Majdon Löhr in a stage production',
  },
  portrait: {
    de: 'Porträtaufnahme von Majdon Löhr',
    en: 'Portrait photograph of Majdon Löhr',
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

// Porträts zuerst, dann Bühne
export const gallery: GalleryImage[] = [
  ...build(portraitImages, 'portrait'),
  ...build(stageImages, 'stage'),
];
