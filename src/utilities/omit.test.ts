import { omit } from './omit';
import { expect, test } from 'vitest';

test('omit', () => {
  const object = {
    bar: 2,
    baz: 3,
    foo: 1,
  };

  expect(omit(object, 'bar', 'baz')).toEqual({ foo: 1 });
});
