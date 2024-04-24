import { findBlogPostHead } from '#app/routines/findBlogPostHead';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

export const GET = async (
  request: Request,
  context: { params: { blogPostSlug: string } },
) => {
  const blogPostHead = await findBlogPostHead(context.params.blogPostSlug);

  if (!blogPostHead) {
    return notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'white',
          display: 'flex',
          fontFamily: 'Roboto',
          height: '600px',
          justifyContent: 'center',
          textAlign: 'center',
          width: '1200px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            fontSize: '48px',
            gap: '24px',
            padding: '0 48px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '48px',
              fontWeight: '700',
              justifyContent: 'center',
              padding: '0 48px',
              textAlign: 'center',
            }}
          >
            {blogPostHead.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              justifyContent: 'center',
            }}
          >
            Gajus Blog
          </div>
        </div>
      </div>
    ),
    {
      // TODO figure out how to load the font from the file system; the usual way does not work; need Vercel-specific solution
      fonts: [
        {
          data: await (
            await fetch('https://gajus.com/fonts/Roboto/Roboto-Regular.ttf')
          ).arrayBuffer(),
          name: 'Roboto',
          style: 'normal',
          weight: 400,
        },
        {
          data: await (
            await fetch('https://gajus.com/fonts/Roboto/Roboto-Bold.ttf')
          ).arrayBuffer(),
          name: 'Roboto',
          style: 'normal',
          weight: 700,
        },
      ],
      height: 600,
      width: 1_200,
    },
  );
};
