// cspell:ignore urlset

import { stringifyXml } from './stringifyXml';
import { expect, test } from 'vitest';

test('stringifyXml', () => {
  expect(stringifyXml({ urlset: [{ url: 'https://gajus.com' }] }))
    .toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"yes\\"?>
      <urlset>
        <url>https://gajus.com</url>
      </urlset>"
    `);
});
