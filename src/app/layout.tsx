import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amodad Village | Heritage Dining Experience',
  description: 'Experience authentic village dining in a luxury setting. Book your private hut or garden table for an unforgettable evening in Jabalpur.',
  keywords: 'village dining, heritage restaurant, hut dining, luxury outdoor dining, Jabalpur restaurant',
  openGraph: {
    title: 'Amodad Village | Heritage Dining Experience',
    description: 'Experience authentic village dining in a luxury setting. Book your private hut or garden table for an unforgettable evening.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream relative" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Heritage Background Pattern - Fixed behind everything */}
        <div 
          className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
          style={{ backgroundColor: '#F5F1E8' }}
        >
          {/* SVG Pattern with Heritage Elements */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Hut Pattern */}
              <pattern id="hutPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Small hut silhouette */}
                <path 
                  d="M30 180 L30 150 L50 130 L70 150 L70 180 Z" 
                  fill="rgba(44, 74, 62, 0.04)"
                />
                {/* Hut roof */}
                <path 
                  d="M25 150 L50 125 L75 150 Z" 
                  fill="rgba(107, 83, 71, 0.05)"
                />
                {/* Door */}
                <rect x="45" y="160" width="10" height="20" fill="rgba(44, 74, 62, 0.03)" />
              </pattern>

              {/* Diya (Earthen Lamp) Pattern */}
              <pattern id="diyaPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Diya base */}
                <ellipse cx="60" cy="95" rx="12" ry="6" fill="rgba(184, 136, 125, 0.06)" />
                {/* Diya bowl */}
                <path 
                  d="M48 95 Q48 85 60 85 Q72 85 72 95" 
                  fill="rgba(184, 136, 125, 0.05)"
                />
                {/* Flame */}
                <ellipse cx="60" cy="78" rx="3" ry="6" fill="rgba(201, 168, 113, 0.08)" />
                {/* Flame glow */}
                <circle cx="60" cy="78" r="8" fill="rgba(201, 168, 113, 0.03)" />
              </pattern>

              {/* Hanging Lantern Pattern */}
              <pattern id="lanternPattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
                {/* Lantern hook */}
                <path d="M90 20 Q95 10 90 5" stroke="rgba(107, 83, 71, 0.06)" strokeWidth="1" fill="none" />
                {/* Lantern body */}
                <rect x="75" y="25" width="30" height="40" rx="3" fill="rgba(201, 168, 113, 0.04)" />
                {/* Lantern top */}
                <path d="M75 25 L90 15 L105 25 Z" fill="rgba(107, 83, 71, 0.05)" />
                {/* Lantern bottom */}
                <path d="M75 65 L90 75 L105 65 Z" fill="rgba(107, 83, 71, 0.05)" />
                {/* Light glow */}
                <circle cx="90" cy="45" r="20" fill="rgba(201, 168, 113, 0.03)" />
              </pattern>

              {/* Decorative Border Pattern */}
              <pattern id="borderPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                {/* Decorative swirl */}
                <circle cx="30" cy="30" r="2" fill="rgba(44, 74, 62, 0.05)" />
                <circle cx="15" cy="15" r="1" fill="rgba(201, 168, 113, 0.06)" />
                <circle cx="45" cy="45" r="1" fill="rgba(201, 168, 113, 0.06)" />
                {/* Connecting lines */}
                <path d="M15 15 Q30 30 45 45" stroke="rgba(44, 74, 62, 0.03)" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>

            {/* Apply patterns */}
            <rect width="100%" height="100%" fill="url(#hutPattern)" />
            <rect width="100%" height="100%" fill="url(#diyaPattern)" />
            <rect width="100%" height="100%" fill="url(#lanternPattern)" />
            <rect width="100%" height="100%" fill="url(#borderPattern)" />
          </svg>

          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(245, 241, 232, 0.3) 100%)',
            }}
          />
        </div>
        
        {/* Content wrapper with positive z-index */}
        <div className="relative z-10">
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
