'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ReservationModal } from '@/components/ui/ReservationModal';
import { useParallax } from '@/hooks/useScrollAnimations';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useParallax<HTMLDivElement>(0.3);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with parallax */}
        <div ref={parallaxRef} className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/amodad-hero/1920/1080"
            alt="Amodad Village - Heritage dining experience"
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority
          />
          {/* Premium dual-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65 transition-opacity duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/25 to-warm-brown/25 mix-blend-overlay transition-opacity duration-1000" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-soft-gold/10 rounded-full blur-3xl float" />
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-forest-green/10 rounded-full blur-3xl float float-delay-1" />
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-soft-gold/5 rounded-full blur-2xl float float-delay-2" />
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-container-mobile lg:px-container max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Wordmark */}
          <p className="font-cormorant text-lg md:text-xl text-soft-gold tracking-[0.3em] uppercase mb-8 font-medium">
            Amodad Village
          </p>

          {/* Headline */}
          <h1 className="font-cormorant text-hero-mobile lg:text-hero font-medium text-warm-white mb-8 text-balance leading-tight">
            Where Heritage Meets the Table
          </h1>

          {/* Elegant divider with shimmer */}
          <div className="flex items-center justify-center gap-4 mb-8 shimmer">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-soft-gold/60" />
            <div className="w-2 h-2 rounded-full bg-soft-gold/60 pulse-soft" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-soft-gold/60" />
          </div>

          {/* Subheading */}
          <p className="font-inter text-base md:text-lg text-cream/90 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
            Experience authentic village dining in the heart of Jabalpur. Private huts, garden seating, and lantern-lit evenings await.
          </p>

          {/* CTAs with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="primary" 
              size="lg" 
              className="btn-shine glow"
            >
              Reserve Your Table
            </Button>
            <Button href="#menu" variant="outline" size="lg" className="animated-underline">
              Explore Menu
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-soft">
          <a href="#experience" aria-label="Scroll to experience section" className="flex flex-col items-center gap-2 text-cream/70 hover:text-soft-gold transition-colors duration-300">
            <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
