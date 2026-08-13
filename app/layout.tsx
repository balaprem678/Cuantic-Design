import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.scss';
import Navbar from '@/layouts/header/Navbar';
import Footer from '@/layouts/footer/Footer';
import SmoothScroll from '@/components/site/SmoothScroll';
import CursorGlow from '@/components/site/CursorGlow';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cuantic Designs — Chennai Creative Studio',
  description:
    'Graphic Design, Web Development, and Digital Marketing built for businesses across Chennai and beyond. Cuantic Designs is a full-service creative studio.',
  keywords: [
    'creative agency Chennai',
    'graphic design Chennai',
    'web development Chennai',
    'digital marketing Chennai',
    'Cuantic Designs',
  ],
  openGraph: {
    title: 'Cuantic Designs — Chennai Creative Studio',
    description:
      'Design That Moves Your Brand Forward. Graphic Design · Web Development · Digital Marketing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
