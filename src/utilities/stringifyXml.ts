import { type JsonObject } from '#app/types';
import { Builder } from 'xml2js';

export const stringifyXml = (subject: JsonObject | JsonObject[]): string => {
  const builder = new Builder();

  return builder.buildObject(subject);
};
