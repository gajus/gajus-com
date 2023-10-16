import { Link } from '@/components/Link';
import { css, styled } from '@/styles';
import { type BlogPostHead } from '@/zodSchemas/BlogPostHeadZodSchema';

const BlogPostLink = styled(Link, {
  base: {
    _active: {
      background: '#E8EFFE',
    },
    _hover: {
      background: '#F8FAFE',
    },
    borderRadius: '8px',
    display: 'grid',
    listStyle: 'none',
    padding: '16px',
  },
});

const PublicationDate = styled('time', {
  base: {
    color: 'action-100',
  },
});

const BlogPostTitle = styled('div', {
  base: {
    fontWeight: '700',
  },
});

export const BlogPostList = ({
  blogPostHeads,
}: {
  readonly blogPostHeads: readonly BlogPostHead[];
}) => {
  return (
    <ol
      className={css({
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: '1',
      })}
    >
      {blogPostHeads.map((blogPost) => {
        return (
          <li key={blogPost.slug}>
            <BlogPostLink href={`/blog/${blogPost.slug}`}>
              <div>
                <PublicationDate dateTime={blogPost.publishedAt.toISOString()}>
                  {blogPost.publishedAt.toDateString()}
                </PublicationDate>
              </div>
              <BlogPostTitle>{blogPost.title}</BlogPostTitle>
            </BlogPostLink>
          </li>
        );
      })}
    </ol>
  );
};
