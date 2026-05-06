import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({
    name: z.string(),
    startDate: z.string().datetime({ offset: true }).or(z.string().date()),
    endDate: z.string().datetime({ offset: true }).or(z.string().date()).optional(),
    venue: z.string().optional(),
    city: z.string(),
    region: z.string().optional(),
    country: z.string().default('US'),
    role: z.string().optional(),
    organizer: z.string().optional(),
    url: z.string().url().optional(),
    status: z.enum(['scheduled', 'cancelled', 'postponed']).default('scheduled'),
  }),
});

const repertoire = defineCollection({
  loader: file('./src/content/repertoire.json'),
  schema: z.object({
    title: z.string(),
    composer: z.string(),
    role: z.string().optional(),
    type: z.enum(['opera', 'oratorio', 'art-song', 'concert', 'other']),
    voicePart: z.string().default('Soprano'),
    language: z.string().optional(),
    status: z.enum(['performed', 'role-ready', 'in-study']),
    performances: z
      .array(
        z.object({
          venue: z.string(),
          year: z.number(),
          note: z.string().optional(),
        })
      )
      .optional(),
    notableExcerpts: z.array(z.string()).optional(),
  }),
});

export const collections = { events, repertoire };
