import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { h } from 'hastscript';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';
import { visit } from 'unist-util-visit';

const notePlugin = () => {
  /**
   * @see https://github.com/remarkjs/remark-directive?tab=readme-ov-file#example-styled-blocks
   * @see https://github.com/orgs/community/discussions/16925
   */
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'note') return;

        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';

        data.hName = tagName;
        data.hProperties = h(tagName, { class: 'note-block' }).properties;
      }
    });
  };
};

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
    remarkPlugins: [
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      [remarkFootnotes, { inlineNotes: true }],
      remarkGfm,
      notePlugin,
    ],
  },
});
