import { getAllBlogPostHeads } from './getAllBlogPostHeads';

export const findBlogPostHead = async (slugOrGuid: string) => {
  const blogPostHeads = await getAllBlogPostHeads();

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
