// cspell:ignore urlset lastmod

import { getBlogPostHeads } from '@/routines/getBlogPostHeads';
import { stringifyXml } from '@/utilities/stringifyXml';

export const dynamic = 'force-dynamic';

type Entry = {
  lastModified: string;
  url: string;
};

const createResponse = (entries: Entry[]) => {
  return new Response(
    stringifyXml({
      urlset: {
        $: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
        url: entries.map((entry) => {
          return {
            lastmod: entry.lastModified,
            loc: entry.url,
          };
        }),
      },
    }),
    {
      headers: {
        'content-type': 'application/xml',
      },
    },
  );
};

export const GET = async () => {
  const blogPostHeads = await getBlogPostHeads();

  const entries = [
    {
      lastModified: new Date().toISOString().split('T')[0],
      url: 'https://gajus.com/',
    },
    ...blogPostHeads.map((blogPostHead) => ({
      lastModified: blogPostHead.publishedAt.toISOString().split('T')[0],
      url: `https://gajus.com/blog/${blogPostHead.slug}`,
    })),
  ];

  return createResponse(entries);
};
