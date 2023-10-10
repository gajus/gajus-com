import { BlogPostBody } from '@/components/BlogPostBody';
import { BlogPostingJsonLd } from '@/components/BlogPostingJsonLd';
import { BlogPostReactions } from '@/components/BlogPostReactions';
import { Comments } from '@/components/Comments';
import { PageTitle } from '@/components/PageTitle';
import { SiteLayout } from '@/components/SiteLayout';
import { connectToPostgres, sql } from '@/routines/connectToPostgres';
import { findBlogPostHead } from '@/routines/findBlogPostHead';
import { getBlogPostBody } from '@/routines/getBlogPostBody';
import { getClientIpAddress } from '@/routines/getClientIpAddress';
import { css } from '@/styles';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
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

type Props = {
  params: { blogPostSlug: string };
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
    title: blogPostHead.title,
  };
};

export default async ({ params: { blogPostSlug } }: Props) => {
  const blogPostHead = await findBlogPostHead(blogPostSlug);

  if (!blogPostHead) {
    return notFound();
  }

  const blogPostBody = await getBlogPostBody(blogPostHead);

  const hasBlogPostBeenLiked = await hasLikedBlogPost(
    blogPostHead.slug,
    getClientIpAddress(),
  );

  return (
    <SiteLayout>
      <PageTitle>{blogPostHead.title}</PageTitle>

      <div
        className={css({
          marginY: '16px',
        })}
      >
        <BlogPostBody code={blogPostBody.code} />
      </div>

      <BlogPostReactions
        liked={hasBlogPostBeenLiked}
        slug={blogPostHead.slug}
      />

      <Comments />

      <BlogPostingJsonLd blogPostHead={blogPostHead} />
    </SiteLayout>
  );
};
