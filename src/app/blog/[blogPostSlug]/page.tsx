import { BlogPostingJsonLd } from '#app/components/BlogPostingJsonLd';
import { Link } from '#app/components/Link';
import { Prose } from '#app/components/Prose';
import { SiteLayout } from '#app/components/SiteLayout';
import { findBlogPostHead } from '#app/routines/findBlogPostHead';
import { getBlogPostBody } from '#app/routines/getBlogPostBody';
import { css } from '#app/styles';
import { omit } from '#app/utilities/omit';
import { type MDXComponents } from 'mdx/types';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

type Props = {
  readonly params: { blogPostSlug: string };
};

const anchorLink = css({
  marginLeft: '-8px',
  padding: '8px',
});

const footerLink = css({
  _hover: {
    boxShadow: '0 2px 0 #0200FF',
    transition: 'box-shadow 200ms ease 0s',
  },
  color: 'action-100',
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
};

const BlogPostBody = ({ slug }: { readonly slug: string }) => {
  const code = getBlogPostBody(slug);

  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
};

export const generateMetadata = async ({
  params: { blogPostSlug },
}: Props): Promise<Metadata> => {
  const blogPostHead = await findBlogPostHead(blogPostSlug);

  if (!blogPostHead) {
    return notFound();
  }

  return {
    alternates: {
      canonical: `/blog/${blogPostHead.slug}`,
    },
    description: blogPostHead.description,
    keywords: blogPostHead.tags.map((tag) => tag.name),
    openGraph: {
      description: blogPostHead.description,
      images: [
        {
          url: `https://gajus.com/blog/${blogPostHead.slug}/image`,
        },
      ],
      publishedTime: blogPostHead.publishedAt.toISOString(),
      title: blogPostHead.title,
      type: 'article',
      url: `https://gajus.com/blog/${blogPostHead.slug}`,
    },
    title: blogPostHead.title,
  };
};

export default async ({ params: { blogPostSlug } }: Props) => {
  const blogPostHead = await findBlogPostHead(blogPostSlug);

  if (!blogPostHead) {
    return notFound();
  }

  return (
    <SiteLayout>
      <div
        className={css({
          padding: '16px',
        })}
      >
        <time
          className={css({
            base: {
              color: 'action-100',
              fontWeight: '500',
            },
          })}
          dateTime={blogPostHead.publishedAt.toISOString()}
        >
          {blogPostHead.publishedAt.toDateString()}
        </time>
        <h1
          className={css({
            fontSize: 'x6',
            fontWeight: '700',
            lineHeight: '1.3em',
            marginBlockEnd: '0.5em',
            smDown: {
              fontSize: 'x5',
            },
          })}
        >
          {blogPostHead.title}
        </h1>

        <div
          className={css({
            my: '32px',
          })}
        >
          <h3
            className={css({
              color: '#666',
              fontSize: 'x2',
            })}
          >
            On this page
          </h3>
          <ul
            className={css({
              fontSize: 'x2',
              lineHeight: '1.5em',
            })}
          >
            {blogPostHead.headings.map((heading) => {
              return (
                <li key={`#${heading.slug}`}>
                  <a
                    className={css({
                      '& > code': {
                        color: '#333',
                        fontFamily: 'monospace',
                      },
                      '&:hover': {
                        boxShadow: '0 1px 0 #0200FF',
                        transition: 'box-shadow 200ms ease 0s',
                      },
                      '&[data-level="3"]': {
                        marginLeft: '16px',
                      },
                      '&[data-level="4"]': {
                        marginLeft: '32px',
                      },
                      boxShadow: '0 1px 0 rgb(2, 0, 255, 0.2)',
                      color: 'action-100',
                    })}
                    data-level={heading.level}
                    href={'#' + heading.slug}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={css({
            my: '32px',
          })}
        >
          <div id="blog-post-body">
            <Prose>
              <BlogPostBody slug={blogPostHead.slug} />
            </Prose>
          </div>
        </div>
      </div>

      <BlogPostingJsonLd blogPostHead={blogPostHead} />

      <div
        className={css({
          textAlign: 'center',
        })}
      >
        Spotted a mistake?{' '}
        <Link
          className={footerLink}
          href={`https://github.com/gajus/gajus-com/blob/main/src/blogPosts/${blogPostHead.publishedAt.toISOString().slice(0, 10)}-${blogPostHead.slug}/blogPost.mdx`}
          target="_blank"
        >
          Edit article
        </Link>
      </div>

      <ul
        className={css({
          display: 'flex',
          gap: '16px',
          marginY: '32px',
          padding: '16px',
        })}
      >
        <li>
          <Link
            className={footerLink}
            href="https://gajus.com/"
          >
            ⬅︎ Back to Blog
          </Link>
        </li>
        <li>
          <Link
            className={footerLink}
            href="https://gajus.substack.com/subscribe"
          >
            My Newsletter
          </Link>
        </li>
        <li>
          <Link
            className={footerLink}
            href="https://twitter.com/kuizinas"
          >
            My Twitter
          </Link>
        </li>
      </ul>
    </SiteLayout>
  );
};
