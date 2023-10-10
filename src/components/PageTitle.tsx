import { css } from '@/styles';

export const PageTitle = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <h1
      className={css({
        fontSize: 'x6',
        fontWeight: '700',
        lineHeight: '1.5em',
        smDown: {
          fontSize: 'x5',
        },
      })}
    >
      {children}
    </h1>
  );
};
