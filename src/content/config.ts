import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    demo: z.string().optional(),
    demoLabel: z.string().optional(),
    github: z.string().url().optional(),
    video: z.string().url().optional(),
    image: z.string().optional(),
    banner: z.string().optional(),
    carousel: z.array(z.object({
      image: z.string(),
      caption: z.string().optional()
    })).optional(),
    icon: z.string().optional()
  })
})

export const collections = {
  projects: projectsCollection
}
