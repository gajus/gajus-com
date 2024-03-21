import { BlogPostingJsonLd } from '@/components/BlogPostingJsonLd';
import { BlogPostReactions } from '@/components/BlogPostReactions';
import { Comments } from '@/components/Comments';
import { Link } from '@/components/Link';
import { PageTitle } from '@/components/PageTitle';
import { Prose } from '@/components/Prose';
import { SiteLayout } from '@/components/SiteLayout';
import { connectToPostgres, sql } from '@/routines/connectToPostgres';
import { findBlogPostHead } from '@/routines/findBlogPostHead';
import { getBlogPostBody } from '@/routines/getBlogPostBody';
import { getClientIpAddress } from '@/routines/getClientIpAddress';
import { css, styled, Wrap } from '@/styles';
import { omit } from '@/utilities/omit';
import { type Tag } from '@/zodSchemas/TagZodSchema';
import { type MDXComponents } from 'mdx/types';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { cache } from 'react';

const hasLikedBlogPost = cache(
  async (slug: string, clientIpAddress: string) => {
    const pool = await connectToPostgres();

    return await pool.exists(sql.unsafe`
    SELECT *
    FROM blog_post_like
    WHERE
      blog_post_slug = ${slug} AND
      ip_address = ${clientIpAddress}
  `);
  },
);

const PublicationDate = styled('time', {
  base: {
    color: 'action-100',
    fontWeight: '700',
  },
});

type Props = {
  readonly params: { blogPostSlug: string };
};

const BlogPostingTag = ({ tag }: { readonly tag: Tag }) => {
  return (
    <div
      className={css({
        // background: '#eee',
        border: '1px solid #ccc',
        borderRadius: '32px',
        fontSize: '12px',
        padding: '0 16px',
      })}
    >
      {tag.name}
    </div>
  );
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

  const hasBlogPostBeenLiked = await hasLikedBlogPost(
    blogPostHead.slug,
    getClientIpAddress(),
  );

  return (
    <SiteLayout>
      <div
        className={css({
          padding: '16px',
        })}
      >
        <PublicationDate dateTime={blogPostHead.publishedAt.toISOString()}>
          {blogPostHead.publishedAt.toDateString()}
        </PublicationDate>
        <PageTitle>{blogPostHead.title}</PageTitle>
        <Wrap
          className={css({
            marginBottom: '32px',
            marginTop: '16px',
          })}
        >
          {blogPostHead.tags.map((tag) => (
            <BlogPostingTag
              key={tag.name}
              tag={tag}
            />
          ))}
        </Wrap>

        <div
          className={css({
            marginY: '16px',
          })}
        >
          <div id="blog-post-body">
            <Prose>
              <BlogPostBody slug={blogPostHead.slug} />
            </Prose>
          </div>
        </div>

        <BlogPostReactions
          liked={hasBlogPostBeenLiked}
          slug={blogPostHead.slug}
        />

        <Comments />
      </div>

      <BlogPostingJsonLd blogPostHead={blogPostHead} />
    </SiteLayout>
  );
};
