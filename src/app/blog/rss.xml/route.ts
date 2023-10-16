import { getAllBlogPostHeads } from '@/routines/getAllBlogPostHeads';
import Rss from 'rss';

const SITE_URL = 'https://gajus.com';

export const dynamic = 'force-dynamic';

export const GET = async () => {
  const blogPostHeads = await getAllBlogPostHeads();

  const feed = new Rss({
    description: 'Gajus blog posts.',
    feed_url: `${SITE_URL}/blog/rss.xml`,
    language: 'en',
    site_url: SITE_URL,
    title: 'Gajus Blog',
  });

  for (const blogPostHead of blogPostHeads) {
    if (!blogPostHead.publishedAt) {
      continue;
    }

    feed.item({
      author: blogPostHead.author.name,
      date: blogPostHead.publishedAt,
      description: blogPostHead.description,
      guid: `${SITE_URL}/blog/${blogPostHead.guid}`,
      title: blogPostHead.title,
      url: `${SITE_URL}/blog/${blogPostHead.slug}`,
    });
  }

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  });
};
