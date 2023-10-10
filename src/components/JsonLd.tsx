'use server';

import { type Thing, type WithContext } from 'schema-dts';

export const JsonLd = <T extends Thing>({
  jsonLd,
}: {
  readonly jsonLd: WithContext<T>;
}) => {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
};
