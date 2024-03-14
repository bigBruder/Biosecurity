import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Providers } from '@/redux/provider';

import './styles/base.scss';

export const metadata: Metadata = {
  title: 'Next App with RTK',
};

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={figtree.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
