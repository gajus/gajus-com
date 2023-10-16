import { type Tag } from '@/zodSchemas/TagZodSchema';

export const tags: Record<string, Tag> = {
  batching: {
    name: 'Batching',
    slug: 'batching',
  },
  bdd: {
    name: 'BDD',
    slug: 'bdd',
  },
  caching: {
    name: 'Caching',
    slug: 'caching',
  },
  fastify: {
    name: 'Fastify',
    slug: 'fastify',
  },
  graphql: {
    name: 'GraphQL',
    slug: 'graphql',
  },
  javascript: {
    name: 'JavaScript',
    slug: 'javascript',
  },
  miscellaneous: {
    name: 'Miscellaneous',
    slug: 'miscellaneous',
  },
  nodejs: {
    name: 'Node.js',
    slug: 'nodejs',
  },
  postgresql: {
    name: 'PostgreSQL',
    slug: 'postgresql',
  },
  slonik: {
    name: 'Slonik',
    slug: 'slonik',
  },
  sql: {
    name: 'SQL',
    slug: 'sql',
  },
  typescript: {
    name: 'TypeScript',
    slug: 'typescript',
  },
};
