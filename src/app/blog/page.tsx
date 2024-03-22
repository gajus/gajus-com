import { BlogPostList } from './BlogPostList';
import { SiteLayout } from '@/components/SiteLayout';
import { getAllBlogPostHeads } from '@/routines/getAllBlogPostHeads';
import { css } from '@/styles';
import { type Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    alternates: {
      canonical: '/blog',
      types: {
        'application/rss+xml': [{ title: 'rss', url: '/blog/rss.xml' }],
      },
    },
    description: 'Gajus blog posts.',
    keywords: ['Gajus', 'Kuizinas'],
    title: 'Gajus blog',
  };
};

export default async () => {
  const blogPostHeads = await getAllBlogPostHeads();

  return (
    <SiteLayout>
      <div
        className={css({
          padding: '16px',
        })}
      >
        <p
          className={css({
            fontSize: 'x4',
            fontWeight: '700',
            lineHeight: '1.5em',
          })}
        >
          Gajus
        </p>
        <p>A source of truth for my thoughts about engineering and startups</p>
      </div>

      <BlogPostList blogPostHeads={blogPostHeads} />
    </SiteLayout>
  );
};
