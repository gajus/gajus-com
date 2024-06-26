import { tags } from '#app/repositories/tags';

export const findTag = (slug: string) => {
  const tag = tags[slug];

  if (!tag) {
    return null;
  }

  return tag;
};
