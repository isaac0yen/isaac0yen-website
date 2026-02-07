// app/layout.tsx
import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oyeniyi Isaac - Software Engineer',
  description: 'Oyeniyi Isaac - Software Engineer specializing in scalable systems, Node.js, and architectural design. Currently building technology at Fuse Varsity.',
  keywords: 'Oyeniyi Isaac, Software Engineer, CTO, Fuse Varsity, Technical Leadership, System Architecture, Node.js, React, MySQL, MongoDB, PostgreSQL, REST APIs, GraphQL, TypeScript, Web Development',
  authors: [{ name: 'Oyeniyi Isaac' }],
  openGraph: {
    title: 'Oyeniyi Isaac - Software Engineer',
    description: 'Oyeniyi Isaac - Software Engineer specializing in scalable systems, Node.js, and architectural design. Currently building technology at Fuse Varsity.',
    images: 'https://isaac0yen.com/assets/me.jpeg',
    url: 'https://isaac0yen.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oyeniyi Isaac - Software Engineer',
    description: 'Oyeniyi Isaac - Software Engineer specializing in scalable systems, Node.js, and architectural design. Currently building technology at Fuse Varsity.',
    images: 'https://isaac0yen.com/assets/me.jpeg'
  },
  icons: {
    icon: [
      { url: 'https://isaac0yen.com/assets/me.jpeg', sizes: '16x16' },
      { url: 'https://isaac0yen.com/assets/me.jpeg', sizes: '32x32' }
    ],
    apple: { url: 'https://isaac0yen.com/assets/me.jpeg', sizes: '180x180' },
    shortcut: { url: 'https://isaac0yen.com/assets/favicon-16x16.png' }
  },
  manifest: 'https://isaac0yen.com/assets/site.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}