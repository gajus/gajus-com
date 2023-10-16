import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    description: {
      description: 'The description of the post',
      required: true,
      type: 'string',
    },
    guid: {
      description: 'The guid of the post',
      required: true,
      type: 'string',
    },
    publishedAt: { required: true, type: 'date' },
    tags: {
      description: 'The tags of the post',
      of: {
        type: 'string',
      },
      required: true,
      type: 'list',
    },
    title: { required: true, type: 'string' },
  },
  filePathPattern: `**/blogPost.mdx`,
  name: 'Post',
}));

export default makeSource({
  contentDirPath: 'src/blogPosts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: 'github-light',
        },
      ],
    ],
    remarkPlugins: [[remarkFootnotes, { inlineNotes: true }], remarkGfm],
  },
});
