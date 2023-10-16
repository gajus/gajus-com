import { Link } from '@/components/Link';
import { css } from '@/styles';
import { omit } from '@/utilities/omit';
import { type BlogPostHead } from '@/zodSchemas/BlogPostHeadZodSchema';
import { Code } from 'bright';
import { type MDXComponents } from 'mdx/types';
import { compileMDX } from 'next-mdx-remote/rsc';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cache, type JSXElementConstructor, type ReactElement } from 'react';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

type BlogPostBody = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

const anchorLink = css({
  marginLeft: '-8px',
  padding: '8px',
});

const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    if ('ref' in props) {
      throw new Error('Unexpected ref');
    }

    return (
      <Link
        {...omit(props, 'ref')}
        href={props.href ?? ''}
      >
        {children}
      </Link>
    );
  },
  h2: ({ children, ...props }) => {
    return (
      <h2 {...props}>
        <a
          aria-hidden
          className={anchorLink}
          href={`#${props.id}`}
        >
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    return (
      <h3 {...props}>
        <a
          aria-hidden
          className={anchorLink}
          href={`#${props.id}`}
        >
          {children}
        </a>
      </h3>
    );
  },
  h4: ({ children, ...props }) => {
    return (
      <h4 {...props}>
        <a
          aria-hidden
          className={anchorLink}
          href={`#${props.id}`}
        >
          {children}
        </a>
      </h4>
    );
  },

  pre: ({ children }) => {
    return (
      <div
        className={css({
          borderColor: 'border-100',
          borderStyle: 'solid',
          borderWidth: '1px',
        })}
      >
        <Code theme="github-light">{children}</Code>
      </div>
    );
  },
};

export const getBlogPostBody = cache(
  async (blogPostHead: BlogPostHead): Promise<BlogPostBody> => {
    const blogPostPath = resolve(
      process.cwd() + '/src/blogPosts',
      `../blogPosts/`,
      blogPostHead.source,
    );

    const blogPostRaw = await readFile(blogPostPath, 'utf8');

    const { content } = await compileMDX({
      components: mdxComponents,
      options: {
        mdxOptions: {
          rehypePlugins: [rehypeSlug],
          remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: true,
      },
      source: blogPostRaw,
    });

    return {
      content,
    };
  },
);
