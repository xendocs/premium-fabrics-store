import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Premium Fabrics Store | Luxury Textiles & Materials',
  description:
    'Discover our curated collection of premium fabrics. Luxury textiles, natural fibers, and designer materials for your next project.',
  keywords: 'premium fabrics, luxury textiles, designer materials, natural fibers',
  authors: [{ name: 'Premium Fabrics Store' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fabrics.store',
    siteName: 'Premium Fabrics Store',
    title: 'Premium Fabrics Store | Luxury Textiles & Materials',
    description:
      'Discover our curated collection of premium fabrics. Luxury textiles, natural fibers, and designer materials.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Fabrics Store',
    description: 'Luxury textiles and premium fabrics for your projects',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://fabrics.store" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress MetaMask and browser extension errors
              (function() {
                const originalError = console.error;
                console.error = function(...args) {
                  const errorString = args.join(' ');
                  // Suppress MetaMask and browser extension errors
                  if (
                    errorString.includes('MetaMask') ||
                    errorString.includes('chrome-extension://') ||
                    errorString.includes('Failed to connect')
                  ) {
                    return;
                  }
                  originalError.apply(console, args);
                };

                // Suppress unhandled promise rejections from extensions
                window.addEventListener('unhandledrejection', function(event) {
                  if (
                    event.reason?.message?.includes('MetaMask') ||
                    event.reason?.stack?.includes('chrome-extension')
                  ) {
                    event.preventDefault();
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden" style={{ minHeight: '100vh' }}>
        <div className="relative z-10 flex flex-col min-h-screen w-full bg-neutral-50">
          <Header />
          <main className="flex-grow bg-transparent relative z-10">{children}</main>
          <Footer className="relative z-10" />
          <CartSidebar />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}

