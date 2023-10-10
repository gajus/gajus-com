import { findTag } from './findTag';

export const getTag = (slug: string) => {
  const tag = findTag(slug);

  if (!tag) {
    throw new Error(`Tag with slug "${slug}" not found.`);
  }

  return tag;
};
