import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammed Faheem P - Flutter Developer & AI Enthusiast',
  description: 'Portfolio of Mohammed Faheem P, a passionate Flutter developer and Computer Science student specializing in AI & Robotics at VIT Chennai. Explore my projects, skills, and journey in mobile app development.',
  keywords: ['Flutter Developer', 'Mobile App Development', 'AI', 'Robotics', 'Computer Science', 'VIT Chennai', 'Software Engineer'],
  authors: [{ name: 'Mohammed Faheem P' }],
  creator: 'Mohammed Faheem P',
  metadataBase: new URL('https://mohammedfaheem.dev'),
  openGraph: {
    title: 'Mohammed Faheem P - Flutter Developer & AI Enthusiast',
    description: 'Portfolio of Mohammed Faheem P, a passionate Flutter developer and Computer Science student specializing in AI & Robotics.',
    url: 'https://mohammedfaheem.dev',
    siteName: 'Mohammed Faheem P Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Faheem P - Flutter Developer & AI Enthusiast',
    description: 'Portfolio of Mohammed Faheem P, a passionate Flutter developer and Computer Science student specializing in AI & Robotics.',
    creator: '@faheempktl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}