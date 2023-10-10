import { z } from 'zod';

export const TagZodSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export type Tag = z.infer<typeof TagZodSchema>;
