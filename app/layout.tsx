import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';
import Header from '@/components/Header';
import SearchBox from '@/components/SearchBox';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={`${outfit.className} bg-blue-900 antialiased min-h-[1500px] lg:flex`}>
        <Header />
        <main className='pt-6 pb-15 xs:pt-8 xs:pb-14 lg:pt-16 lg:flex-1 lg:overflow-hidden'>
          <SearchBox />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
