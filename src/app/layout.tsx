// eslint-disable-next-line import/no-unassigned-import
import './globals.css';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

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
  viewport: {
    initialScale: 1,
    maximumScale: 1,
    width: 'device-width',
  },
};

export default async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
};
