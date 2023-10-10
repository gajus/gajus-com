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

export const SiteLayout = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <Main>
      <div>
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
      </div>
      <div>{children}</div>
    </Main>
  );
};
