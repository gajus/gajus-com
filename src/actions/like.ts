'use server';

import { createAction } from '@/factories/createAction';
import { connectToPostgres, sql } from '@/routines/connectToPostgres';
import { getClientIpAddress } from '@/routines/getClientIpAddress';
import { z } from 'zod';

export const like = createAction(
  z.object({
    slug: z.string(),
  }),
  async ({ slug }) => {
    const pool = await connectToPostgres();

    await pool.query(sql.typeAlias('void')`
      INSERT INTO blog_post_like (blog_post_slug, ip_address)
      VALUES (${slug}, ${getClientIpAddress()})
      ON CONFLICT (blog_post_slug, ip_address) DO NOTHING;
    `);

    return pool.oneFirst(sql.type(
      z.object({
        likeCount: z.number(),
      }),
    )`
      SELECT count(*)::numeric "likeCount" FROM blog_post_like
      WHERE blog_post_slug = ${slug}
    `);
  },
);
