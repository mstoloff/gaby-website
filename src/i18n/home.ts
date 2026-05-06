// Home page strings. Opera role names + work titles + composer names stay
// in their original language regardless of page locale.
import type { Locale } from './index';

interface HomeStrings {
  eyebrow: string;
  pullQuote: string;
  galaCaption: string;
  productionsHeading: string;
  upcomingHeading: string;
  noUpcoming: string;
}

export const HOME: Record<Locale, HomeStrings> = {
  en: {
    eyebrow: 'Soprano',
    pullQuote:
      'Repertoire that celebrates diversity, multiplicity, social justice, and humanity.',
    galaCaption:
      'Carceleras · <em>Las hijas del Zebedeo</em> · Center Stage Concert · Opera Theatre of Saint Louis · 2024',
    productionsHeading: 'Selected Productions',
    upcomingHeading: 'Current & Upcoming',
    noUpcoming: 'No engagements scheduled.',
  },
  es: {
    eyebrow: 'Soprano',
    pullQuote:
      'Un repertorio que celebra la diversidad, la multiplicidad, la justicia social y la humanidad.',
    galaCaption:
      'Carceleras · <em>Las hijas del Zebedeo</em> · Center Stage Concert · Opera Theatre of Saint Louis · 2024',
    productionsHeading: 'Producciones Seleccionadas',
    upcomingHeading: 'Actualidad y Próximos Compromisos',
    noUpcoming: 'No hay compromisos programados.',
  },
  it: {
    eyebrow: 'Soprano',
    pullQuote:
      'Un repertorio che celebra la diversità, la molteplicità, la giustizia sociale e l’umanità.',
    galaCaption:
      'Carceleras · <em>Las hijas del Zebedeo</em> · Center Stage Concert · Opera Theatre of Saint Louis · 2024',
    productionsHeading: 'Produzioni Scelte',
    upcomingHeading: 'In Scena · Prossimi Impegni',
    noUpcoming: 'Nessun impegno in calendario.',
  },
};

// Page <title> + meta description per locale.
export const HOME_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title:
      'Gabriela Stoloff-Báez — Puerto Rican Soprano | Des Moines Metro Opera 2026 Apprentice Artist',
    description:
      'Puerto Rican soprano Gabriela Stoloff-Báez (Oberlin Conservatory, San Francisco Conservatory) performs with Opera Parallèle, Opera Theatre of St. Louis, and Seraphic Fire. Upcoming: Des Moines Metro Opera Apprentice Artist, summer 2026.',
  },
  es: {
    title:
      'Gabriela Stoloff-Báez — Soprano puertorriqueña | Des Moines Metro Opera Apprentice Artist 2026',
    description:
      'La soprano puertorriqueña Gabriela Stoloff-Báez (Oberlin Conservatory, San Francisco Conservatory) actúa con Opera Parallèle, Opera Theatre of St. Louis y Seraphic Fire. Próximamente: Apprentice Artist en Des Moines Metro Opera, verano de 2026.',
  },
  it: {
    title:
      'Gabriela Stoloff-Báez — Soprano portoricano | Apprentice Artist 2026, Des Moines Metro Opera',
    description:
      'Il soprano portoricano Gabriela Stoloff-Báez (Oberlin Conservatory, San Francisco Conservatory) si esibisce con Opera Parallèle, Opera Theatre of St. Louis e Seraphic Fire. Prossimamente: Apprentice Artist al Des Moines Metro Opera, estate 2026.',
  },
};
