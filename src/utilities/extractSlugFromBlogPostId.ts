export const extractSlugFromBlogPostId = (blogPostId: string): string => {
  return blogPostId.slice(11, -13);
};
