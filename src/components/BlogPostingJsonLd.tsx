import { JsonLd } from './JsonLd';
import { type BlogPostHead } from '#app/zodSchemas/BlogPostHeadZodSchema';
import { type BlogPosting, type WithContext } from 'schema-dts';

export const BlogPostingJsonLd = ({
  blogPostHead,
}: {
  readonly blogPostHead: BlogPostHead;
}) => {
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blogPostHead.title,
    isFamilyFriendly: true,
    isPartOf: {
      '@id': 'https://gajus.com/blog',
      '@type': 'Blog',
      name: 'Gajus Blog',
    },
    keywords: blogPostHead.tags.map((tag) => tag.name),
    publisher: {
      '@type': 'Organization',
      name: 'Gajus',
      url: 'https://gajus.com',
    },
    text: blogPostHead.description,
    url: `https://gajus.com/blog/${blogPostHead.slug}`,
  };

  return <JsonLd jsonLd={jsonLd} />;
};
