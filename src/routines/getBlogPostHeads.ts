import { getTag } from './getTag';
import {
  type BlogPostHead,
  BlogPostHeadZodSchema,
} from '@/zodSchemas/BlogPostHeadZodSchema';
import parseFrontMatter from 'front-matter';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const getBlogPostHeads = async (): Promise<readonly BlogPostHead[]> => {
  const blogPostPaths = await readdir(
    resolve(dirname(fileURLToPath(import.meta.url)), '../blogPosts'),
  );

  const blogPosts = [];

  for (const blogPostSlug of blogPostPaths) {
    const file = await readFile(
      resolve(
        dirname(fileURLToPath(import.meta.url)),
        `../blogPosts`,
        blogPostSlug,
        'blogPost.mdx',
      ),
    );

    const { attributes } = parseFrontMatter(file.toString()) as {
      attributes: {
        author: string;
        description: string;
        guid: string;
        publishedAt: Date;
        tags: readonly string[];
        title: string;
      };
    };

    blogPosts.push(
      BlogPostHeadZodSchema.parse({
        ...attributes,
        author: {
          name: 'Gajus Kuizinas',
        },
        publishedAt: attributes.publishedAt
          ? new Date(attributes.publishedAt)
          : undefined,
        slug: blogPostSlug,
        source: join(blogPostSlug, 'blogPost.mdx'),
        tags: attributes.tags.map((tag) => getTag(tag)),
      }),
    );
  }

  // eslint-disable-next-line require-atomic-updates
  return blogPosts.sort(
    (a, b) =>
      (b.publishedAt?.getTime() ?? Number.POSITIVE_INFINITY) -
      (a.publishedAt?.getTime() ?? Number.POSITIVE_INFINITY),
  );
};
