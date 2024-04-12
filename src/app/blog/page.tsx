import { BlogPostList } from './BlogPostList';
import { Link } from '@/components/Link';
import { SiteLayout } from '@/components/SiteLayout';
import { getAllBlogPostHeads } from '@/routines/getAllBlogPostHeads';
import { css } from '@/styles';
import { type Metadata } from 'next';

const footerLink = css({
  _hover: {
    boxShadow: '0 2px 0 #0200FF',
    transition: 'box-shadow 200ms ease 0s',
  },
  color: 'action-100',
});

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
        <ul
          className={css({
            '& li': {
              _after: {
                content: '","',
                marginInlineEnd: '8px',
                marginInlineStart: '4px',
              },
              _last: {
                _after: {
                  content: '" "',
                },
              },
            },
            display: 'flex',
          })}
        >
          <li>
            <Link
              className={footerLink}
              href="mailto:gajus@gajus.com"
            >
              Email
            </Link>
          </li>
          <li>
            <Link
              className={footerLink}
              href="https://contra.com/gajus"
            >
              Contra
            </Link>
          </li>
          <li>
            <Link
              className={footerLink}
              href="https://github.com/gajus"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              className={footerLink}
              href="https://twitter.com/kuizinas"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              className={footerLink}
              href="https://www.linkedin.com/in/gajus"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className={footerLink}
              href="https://gajus.com/blog/rss.xml"
            >
              RSS
            </Link>
          </li>
        </ul>
      </div>

      <BlogPostList blogPostHeads={blogPostHeads} />
    </SiteLayout>
  );
};
