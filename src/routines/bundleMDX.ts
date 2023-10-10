import { bundleMDX as bundle } from 'mdx-bundler';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const bundleMDX = (source: string) => {
  return bundle({
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug];

      return options;
    },
    source,
  });
};
