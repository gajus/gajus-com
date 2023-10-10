import { z } from 'zod';

export const AuthorZodSchema = z.object({
  name: z.string(),
});
