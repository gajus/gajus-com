import { Link } from '@/components/Link';
import { css, Stack, styled } from '@/styles';

const Main = styled(Stack, {
  base: {
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '860px',
    padding: '16px',
    sm: {
      marginX: 'auto',
      marginY: '32px',
    },
  },
});

const FooterLink = styled(Link, {
  base: {
    color: 'action-100',
  },
});

export const SiteLayout = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <Main>
      <div
        className={css({
          padding: '16px',
        })}
      >
        <Link
          className={css({
            alignItems: 'center',
            display: 'flex',
            fontWeight: '700',
          })}
          href="/"
          title="Gajus"
        >
          Gajus
        </Link>
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
    </Main>
  );
};
