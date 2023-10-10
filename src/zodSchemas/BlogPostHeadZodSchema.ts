import { AuthorZodSchema } from './AuthorZodSchema';
import { TagZodSchema } from './TagZodSchema';
import { z } from 'zod';

/**
 * @property source - The path to the blog post file relative to the `posts` directory.
 * @property slug - The slug of the blog post. Must be unique. Derived from the parent directory name.
 * @property guid - The guid of the blog post. Must be unique. Used for RSS. UUID v7.
 */
export const BlogPostHeadZodSchema = z.object({
  author: AuthorZodSchema,
  description: z.string(),
  guid: z.string(),
  publishedAt: z.date(),
  slug: z.string(),
  source: z.string(),
  tags: z.array(TagZodSchema),
  title: z.string(),
});

export type BlogPostHead = z.infer<typeof BlogPostHeadZodSchema>;
