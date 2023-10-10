import { getBlogPostHeads } from './getBlogPostHeads';

export const findBlogPostHead = async (slugOrGuid: string) => {
  const blogPostHeads = await getBlogPostHeads();

  const blogPostHead = blogPostHeads.find((someBlogPostHead) => {
    return (
      someBlogPostHead.slug === slugOrGuid ||
      someBlogPostHead.guid === slugOrGuid
    );
  });

  if (!blogPostHead) {
    return null;
  }

  return blogPostHead;
};
