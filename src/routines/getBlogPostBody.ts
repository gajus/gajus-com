import { extractSlugFromBlogPostId } from '@/utilities/extractSlugFromBlogPostId';
import { allPosts } from 'contentlayer/generated';

export const getBlogPostBody = (slug: string) => {
  const blogPost = allPosts.find((someBlogPost) => {
    return extractSlugFromBlogPostId(someBlogPost._id) === slug;
  });

  if (!blogPost) {
    throw new Error(`Could not find blog post with slug "${slug}"`);
  }

  return blogPost.body.code;
};
