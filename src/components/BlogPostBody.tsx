import { Prose } from './Prose';
import { Link } from '@/components/Link';
import { css } from '@/styles';
import { omit } from '@/utilities/omit';
import { Code } from 'bright';
import { type MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

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

export const BlogPostBody = ({ code }: { readonly code: string }) => {
  const MDXContent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div id="blog-post-body">
      <Prose>
        <MDXContent components={mdxComponents} />
      </Prose>
    </div>
  );
};
