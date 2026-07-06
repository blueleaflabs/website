import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Research: full projects AND shorter analyses share one collection.
const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['project', 'analysis']).default('project'),
    status: z.enum(['Active', 'Iterating', 'Complete', 'Planned']).default('Active'),
    summary: z.string(), // one-line, used on cards
    question: z.string().optional(),
    methods: z.string().optional(),
    dataSources: z.string().optional(),
    outputs: z.string().optional(),
    repo: z.string().url().optional(),
    publicationUrl: z.string().url().optional(),
    publications: z.array(z.object({ label: z.string().optional(), url: z.string().url() })).optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string().optional(), caption: z.string().optional() })).optional(),
    awards: z.array(z.object({ title: z.string(), venue: z.string().optional(), year: z.union([z.string(), z.number()]).optional() })).optional(),
    highlights: z.array(z.string()).optional(),
    imagePrefix: z.string().optional(),
    heroAlt: z.string().optional(),
    order: z.number().default(50),
    published: z.boolean().default(true),
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/workshops' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    audience: z.string().optional(),
    level: z.string().optional(),
    format: z.string().optional(),
    duration: z.string().optional(),
    location: z.string().optional(),
    nextSession: z.string().optional(),
    materials: z.string().optional(),
    imagePrefix: z.string().optional(),
    heroAlt: z.string().optional(),
    order: z.number().default(50),
    published: z.boolean().default(true),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    event: z.string().optional(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    audience: z.string().optional(),
    topic: z.string().optional(),
    slidesUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    // paired interview
    interviewOutlet: z.string().optional(),
    interviewFormat: z.string().optional(),
    interviewUrl: z.string().url().optional(),
    imagePrefix: z.string().optional(),
    heroAlt: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tag: z.string().default('Field notes'),
    readingTime: z.string().optional(),
    imagePrefix: z.string().optional(),
    heroAlt: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/updates' }),
  schema: z.object({
    project: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string().optional(),
    kind: z.enum(['note', 'post']).default('note'),
    published: z.boolean().default(true),
  }),
});

export const collections = { research, workshops, talks, posts, updates };
