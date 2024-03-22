import { Link } from '@/components/Link';
import { css } from '@/styles';

const footerLink = css({
  _hover: {
    boxShadow: '0 2px 0 #0200FF',
    transition: 'box-shadow 200ms ease 0s',
  },
  color: 'action-100',
});

export const SiteLayout = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '860px',
        padding: '16px',
        sm: {
          marginX: 'auto',
          marginY: '32px',
        },
      })}
      id="app"
    >
      {children}
      <div
        className={css({
          marginY: '32px',
          padding: '16px',
        })}
      >
        <ul>
          <li>
            <Link
              className={footerLink}
              href="https://gajus.com/"
            >
              Blog
            </Link>
          </li>
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
              href="https://gajus.substack.com/subscribe"
            >
              Newsletter
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
    </div>
  );
};
