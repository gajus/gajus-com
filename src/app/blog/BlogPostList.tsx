import { Link } from '@/components/Link';
import { css } from '@/styles';
import { type BlogPostHead } from '@/zodSchemas/BlogPostHeadZodSchema';

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
            <Link
              className={css({
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
              })}
              href={`/blog/${blogPost.slug}`}
            >
              <div>
                <time
                  className={css({
                    color: 'action-100',
                  })}
                  dateTime={blogPost.publishedAt.toISOString()}
                >
                  {blogPost.publishedAt.toDateString()}
                </time>
              </div>
              <div
                className={css({
                  fontWeight: '700',
                })}
              >
                {blogPost.title}
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
