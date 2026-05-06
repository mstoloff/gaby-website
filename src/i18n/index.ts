// Single source of truth for translation strings. To add a new locale,
// add a key to LOCALES in Header.astro, mirror the 'en' shape here for
// each strings object, then add a route file.

export type Locale = 'en' | 'es' | 'it';

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  it: 'it',
};

export const NAV: Record<Locale, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    media: 'Media',
    repertoire: 'Repertoire',
    voiceLessons: 'Voice Lessons',
    contact: 'Contact',
  },
  es: {
    home: 'Inicio',
    about: 'Bio',
    media: 'Medios',
    repertoire: 'Repertorio',
    voiceLessons: 'Clases de Canto',
    contact: 'Contacto',
  },
  it: {
    home: 'Home',
    about: 'Bio',
    media: 'Media',
    repertoire: 'Repertorio',
    voiceLessons: 'Lezioni di Canto',
    contact: 'Contatti',
  },
};

export const COMMON: Record<Locale, Record<string, string>> = {
  en: {
    fallbackNotice: 'This page is currently available in English only.',
    backToYourLanguage: 'Back to',
  },
  es: {
    fallbackNotice: 'Esta página está disponible únicamente en inglés por ahora.',
    backToYourLanguage: 'Volver a',
  },
  it: {
    fallbackNotice: 'Questa pagina è al momento disponibile solo in inglese.',
    backToYourLanguage: 'Torna a',
  },
};
