// eslint-disable-next-line import/no-unassigned-import
import './globals.css';
import { GoogleAnalytics } from '#app/components/GoogleAnalytics';
import { type Metadata, type Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

const interFont = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  description: 'Gajus personal website',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    },
  ],
  metadataBase: new URL('https://gajus.com'),
  title: 'Gajus',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
};

export default async ({ children }: { readonly children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={interFont.className}>
        {children}

        <Suspense>
          <GoogleAnalytics measurementId="G-2E1DK386NC" />
        </Suspense>
      </body>
    </html>
  );
};
