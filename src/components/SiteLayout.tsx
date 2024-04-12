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
    </div>
  );
};
