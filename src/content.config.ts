import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const POSTS_PATH = "src/data/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${POSTS_PATH}` }),
  schema: z.object({
    title: z.string(),
    titleAr: z.string().optional(),
    description: z.string(),
    descriptionAr: z.string().optional(),
    author: z.string().default("sa/acc"),
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { posts };
