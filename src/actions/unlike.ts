'use server';

import { createAction } from '@/factories/createAction';
import { connectToPostgres, sql } from '@/routines/connectToPostgres';
import { getClientIpAddress } from '@/routines/getClientIpAddress';
import { z } from 'zod';

export const unlike = createAction(
  z.object({
    slug: z.string(),
  }),
  async ({ slug }) => {
    const pool = await connectToPostgres();

    await pool.query(sql.typeAlias('void')`
      DELETE FROM blog_post_like
      WHERE
        blog_post_slug = ${slug} AND
        ip_address = ${getClientIpAddress()}
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
