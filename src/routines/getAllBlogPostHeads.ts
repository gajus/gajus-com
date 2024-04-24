import { getTag } from './getTag';
import { extractSlugFromBlogPostId } from '#app/utilities/extractSlugFromBlogPostId';
import {
  type BlogPostHead,
  BlogPostHeadZodSchema,
} from '#app/zodSchemas/BlogPostHeadZodSchema';
import { allPosts } from 'contentlayer/generated';
import { cache } from 'react';

export const getAllBlogPostHeads = cache(
  async (): Promise<readonly BlogPostHead[]> => {
    return BlogPostHeadZodSchema.array()
      .parse(
        allPosts.map((blogPost) => {
          return {
            ...blogPost,
            author: {
              name: 'Gajus Kuizinas',
            },
            publishedAt: new Date(blogPost.publishedAt),
            slug: extractSlugFromBlogPostId(blogPost._id),
            tags: blogPost.tags.map((tag) => getTag(tag)),
          };
        }),
      )
      .sort(
        (a, b) =>
          (b.publishedAt?.getTime() ?? Number.POSITIVE_INFINITY) -
          (a.publishedAt?.getTime() ?? Number.POSITIVE_INFINITY),
      );
  },
);
