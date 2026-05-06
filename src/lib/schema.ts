import type { CollectionEntry } from 'astro:content';

export const PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': 'https://www.gabrielastoloffbaez.com/#person',
  name: 'Gabriela Stoloff-Báez',
  jobTitle: 'Soprano',
  url: 'https://www.gabrielastoloffbaez.com/',
  email: 'gabrielastoloffbaez@gmail.com',
  sameAs: ['https://www.instagram.com/gabriela.stoloff.baez/'],
  knowsLanguage: ['en', 'es', 'it', 'de', 'fr'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Oberlin Conservatory of Music' },
    { '@type': 'CollegeOrUniversity', name: 'San Francisco Conservatory of Music' },
  ],
  award: [
    '2024 Elihu Hyndman Memorial Award (Opera Theatre of Saint Louis)',
    '2023 Oregon District Winner & Northwest Region Award Recipient, Metropolitan Opera Laffont Competition',
    '2021 Joan & David Traitel Vocal Scholarship (San Francisco Conservatory)',
    '2021 Dix & Didi Boring Endowed Scholarship for Voice (San Francisco Conservatory)',
    "2020 Margot Bos Stambler '84 Professional Development Award (Oberlin Conservatory)",
  ],
} as const;

const STATUS_MAP = {
  scheduled: 'https://schema.org/EventScheduled',
  cancelled: 'https://schema.org/EventCancelled',
  postponed: 'https://schema.org/EventPostponed',
} as const;

export function eventToSchema(entry: CollectionEntry<'events'>) {
  const { data } = entry;
  return {
    '@type': 'Event',
    name: data.name,
    startDate: data.startDate,
    ...(data.endDate && { endDate: data.endDate }),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: STATUS_MAP[data.status],
    location: {
      '@type': 'Place',
      ...(data.venue && { name: data.venue }),
      address: {
        '@type': 'PostalAddress',
        addressLocality: data.city,
        ...(data.region && { addressRegion: data.region }),
        addressCountry: data.country,
      },
    },
    performer: { '@id': PERSON_SCHEMA['@id'] },
    ...(data.organizer && { organizer: { '@type': 'Organization', name: data.organizer } }),
    ...(data.url && { url: data.url }),
  };
}

export function buildHomepageGraph(events: CollectionEntry<'events'>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [PERSON_SCHEMA, ...events.map(eventToSchema)],
  };
}
