import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Uzair Zahoor | Software Engineer | Next.js, GraphQL & SaaS Architectures',
  description:
    'Portfolio of Uzair Zahoor, Software Engineer with 3+ years of experience engineering scalable Next.js applications, multi-tenant transport SaaS platforms (Allotrac), and real-time GraphQL microservices.',
  keywords: [
    'Uzair Zahoor',
    'عزیر ظہور',
    'Software Engineer',
    'Next.js Developer',
    'Full Stack Engineer',
    'GraphQL',
    'Multi-Tenant SaaS',
    'Allotrac',
    'React.js',
    'TypeScript',
    'Node.js',
    'Islamabad Pakistan'
  ],
  authors: [{ name: 'Uzair Zahoor' }],
  openGraph: {
    title: 'Uzair Zahoor | Software Engineer',
    description:
      'Building Scalable Next.js SaaS. Solving Complex Systems with TypeScript, GraphQL, MongoDB & Redis.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Uzair Zahoor Portfolio'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} scroll-smooth dark`}
    >
      <body className="bg-[#060911] text-slate-100 min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
