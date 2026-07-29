import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    book: z.string(),
    chapter: z.number(),
    date: z.string(),
  }),
})

export const collections = { notes }
