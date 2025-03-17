// app/layout.tsx
import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oyeniyi Isaac - Full Stack Software Engineer',
  description: 'Oyeniyi Isaac - Full Stack Software Engineer specializing in Node.js, React, and database management. Expertise in developing scalable and secure web applications.',
  keywords: 'Oyeniyi Isaac, Full Stack Developer, Software Engineer, Node.js, React, MySQL, MongoDB, PostgreSQL, REST APIs, GraphQL, TypeScript, Web Development, PWA',
  authors: [{ name: 'Oyeniyi Isaac' }],
  openGraph: {
    title: 'Oyeniyi Isaac - Full Stack Software Engineer',
    description: 'Oyeniyi Isaac - Full Stack Software Engineer specializing in Node.js, React, and database management. Expertise in developing scalable and secure web applications.',
    images: 'https://isaac0yen.com/assets/me.jpeg',
    url: 'https://isaac0yen.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oyeniyi Isaac - Full Stack Software Engineer',
    description: 'Oyeniyi Isaac - Full Stack Software Engineer specializing in Node.js, React, and database management. Expertise in developing scalable and secure web applications.',
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