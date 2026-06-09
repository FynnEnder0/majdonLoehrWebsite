import { ui, defaultLang, languages, type Lang } from './ui';

/** Liest die aktive Sprache aus dem URL-Pfad (/de/… oder /en/…). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Liefert das vollständige String-Dictionary der gegebenen Sprache. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Die jeweils andere Sprache (für den Sprachumschalter). */
export function getAltLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}

/** Pfad der aktuellen Seite in der anderen Sprache (One-Page → nur Locale-Prefix tauschen). */
export function getAltLangPath(url: URL, lang: Lang): string {
  const alt = getAltLang(lang);
  const rest = url.pathname.replace(/^\/(de|en)/, '');
  return `/${alt}${rest}${url.hash || ''}`;
}

export { languages, type Lang };
