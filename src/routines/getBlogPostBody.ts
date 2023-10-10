import { bundleMDX } from './bundleMDX';
import { type BlogPostHead } from '@/zodSchemas/BlogPostHeadZodSchema';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cache } from 'react';

type BlogPostBody = {
  code: string;
};

export const getBlogPostBody = cache(
  async (blogPostHead: BlogPostHead): Promise<BlogPostBody> => {
    const blogPostPath = resolve(
      process.cwd() + '/src/blogPosts',
      `../blogPosts/`,
      blogPostHead.source,
    );

    const blogPostRaw = await readFile(blogPostPath, 'utf8');

    const { code } = await bundleMDX(blogPostRaw);

    return {
      code,
    };
  },
);
