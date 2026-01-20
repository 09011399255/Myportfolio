import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/queryProvider';
import NuqsProvider from '@/providers/nuqsProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suarau Uthman - Portfolio',
  description: 'Portfolio of Suarau Uthman',
  openGraph: {
    title: 'Suarau Uthman - Portfolio',
    description: 'Portfolio of Suarau Uthman',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suarau Uthman - Portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <NuqsProvider>
            {children}
          </NuqsProvider>
        </QueryProvider>
      </body>
    </html>
  );
}