import { BlogPostList } from './BlogPostList';
import { SiteLayout } from '@/components/SiteLayout';
import { getAllBlogPostHeads } from '@/routines/getAllBlogPostHeads';
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
      <BlogPostList blogPostHeads={blogPostHeads} />
    </SiteLayout>
  );
};
