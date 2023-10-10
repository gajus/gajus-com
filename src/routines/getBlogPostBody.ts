import { bundleMDX } from './bundleMDX';
import { type BlogPostHead } from '@/zodSchemas/BlogPostHeadZodSchema';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

type BlogPostBody = {
  code: string;
};

export const getBlogPostBody = async (
  blogPostHead: BlogPostHead,
): Promise<BlogPostBody> => {
  const blogPostPath = resolve(
    dirname(fileURLToPath(import.meta.url)),
    `../blogPosts/`,
    blogPostHead.source,
  );

  const blogPostRaw = await readFile(blogPostPath, 'utf8');

  const { code } = await bundleMDX(blogPostRaw);

  return {
    code,
  };
};
