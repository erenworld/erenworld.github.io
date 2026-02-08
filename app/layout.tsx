import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Eren Türkoglu',
    template: '%s | Eren Türkoglu',
  },
  description: 'My digital home',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <Navbar />

            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
function Navbar() {
  return (
    <nav>
      <div className=" gap-x-2 items-center">
        <span>
          ~ / <a href="/">home</a> /{' '}
          <a
            href="https://github.com/erenworld"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{' '}
          / <a href="mailto:erenkad@proton.me">email</a>
        </span>
      </div>
    </nav>
  );
}

function Footer() {
  const links = [
    { name: '@erentrkg', url: 'https://x.com/erentrkg' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/erenturkoglu' },
    { name: 'github', url: 'https://github.com/erenworld' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
