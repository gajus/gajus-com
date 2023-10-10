// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link';

export const Link = (props: Parameters<typeof NextLink>[0]) => {
  return (
    <NextLink
      {...props}
      prefetch={props.prefetch ?? false}
    />
  );
};
