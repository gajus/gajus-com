import { Link } from '@/components/Link';
import { css, styled } from '@/styles';

const FooterLink = styled(Link, {
  base: {
    _hover: {
      boxShadow: '0 2px 0 #0200FF',
      transition: 'box-shadow 200ms ease 0s',
    },
    color: 'action-100',
  },
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
    >
      <div
        className={css({
          padding: '16px',
        })}
      >
        <div>
          <Link
            className={css({
              _hover: {
                boxShadow: '0 2px 0 #000',
                transition: 'box-shadow 200ms ease 0s',
              },
              fontWeight: '700',
            })}
            href="/"
            title="Gajus"
          >
            Gajus
          </Link>
        </div>
        <p>A source of truth for my thoughts about engineering and startups</p>
      </div>
      <div>{children}</div>
      <div
        className={css({
          marginY: '32px',
          padding: '16px',
        })}
      >
        <ul>
          <li>
            <FooterLink href="https://gajus.com/">Blog</FooterLink>
          </li>
          <li>
            <FooterLink href="mailto:gajus@gajus.com">Email</FooterLink>
          </li>
          <li>
            <FooterLink href="https://gajus.substack.com/subscribe">
              Newsletter
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://contra.com/gajus">Contra</FooterLink>
          </li>
          <li>
            <FooterLink href="https://github.com/gajus">GitHub</FooterLink>
          </li>
          <li>
            <FooterLink href="https://twitter.com/kuizinas">Twitter</FooterLink>
          </li>
          <li>
            <FooterLink href="https://www.linkedin.com/in/gajus">
              LinkedIn
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://gajus.com/blog/rss.xml">RSS</FooterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
