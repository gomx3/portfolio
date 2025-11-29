import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        techStack: z.array(z.string()),
        team: z.string(),
        period: z.string(),
        links: z
            .object({
                github: z
                    .object({
                        url: z.string().url(),
                        name: z.string(),
                    })
                    .optional(),
                demo: z
                    .object({
                        url: z.string().url(),
                        name: z.string(),
                    })
                    .optional(),
            })
            .optional(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
})

export const collections = { projects }
