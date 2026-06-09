import type { ImageMetadata } from 'astro';

/**
 * Galerie-Bilder. Quelle: src/assets/gallery/ (per Glob eingelesen).
 * Kategorie & Alt-Text pro Datei unten konfigurierbar.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*.{jpg,jpeg,png}',
  { eager: true },
);

export type GalleryCategory = 'stage' | 'portrait';

export type GalleryImage = {
  src: ImageMetadata;
  category: GalleryCategory;
  alt: { de: string; en: string };
};

// Bühnen-/Probenfotos (Rest = Porträt). Bei Bedarf umsortieren.
const stageFiles = new Set([
  '1000079271.jpg',
  '1000079272.jpg',
  '3a3fa7a3-6a5e-4ef3-b09e-19ace78de60c.jpg',
  '8febdfe5-553c-429d-a2bf-a3803162f7b0.jpg',
]);

// Nicht in der Galerie zeigen (privat o. ä.)
const exclude = new Set(['img_4530.jpg']);

const fileName = (path: string) => path.split('/').pop() ?? path;

export const gallery: GalleryImage[] = Object.entries(images)
  .filter(([path]) => !exclude.has(fileName(path)))
  .map(([path, mod]) => {
    const category: GalleryCategory = stageFiles.has(fileName(path))
      ? 'stage'
      : 'portrait';
    const alt =
      category === 'stage'
        ? { de: 'Majdon Löhr in einer Bühnenproduktion', en: 'Majdon Löhr in a stage production' }
        : { de: 'Porträtaufnahme von Majdon Löhr', en: 'Portrait photograph of Majdon Löhr' };
    return { src: mod.default, category, alt };
  })
  // Porträts zuerst, dann Bühne
  .sort((a, b) =>
    a.category === b.category ? 0 : a.category === 'portrait' ? -1 : 1,
  );
