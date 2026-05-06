'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ReservationModal } from '@/components/ui/ReservationModal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/amodad-hero/1920/1080"
            alt="Amodad Village - Heritage dining experience"
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority
          />
          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/20 to-warm-brown/20 mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-container-mobile lg:px-container max-w-4xl mx-auto fade-in">
          {/* Logo/Wordmark */}
          <p className="font-cormorant text-lg md:text-xl text-soft-gold tracking-[0.3em] uppercase mb-8 font-medium">
            Amodad Village
          </p>

          {/* Headline */}
          <h1 className="font-cormorant text-hero-mobile lg:text-hero font-medium text-warm-white mb-8 text-balance leading-tight">
            Where Heritage Meets the Table
          </h1>

          {/* Elegant divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-soft-gold/60" />
            <div className="w-2 h-2 rounded-full bg-soft-gold/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-soft-gold/60" />
          </div>

          {/* Subheading */}
          <p className="font-inter text-base md:text-lg text-cream/90 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
            Experience authentic village dining in the heart of Jabalpur. Private huts, garden seating, and lantern-lit evenings await.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="primary" 
              size="lg" 
              className="btn-shine"
            >
              Reserve Your Table
            </Button>
            <Button href="#menu" variant="outline" size="lg">
              Explore Menu
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-soft">
          <a href="#experience" aria-label="Scroll to experience section" className="flex flex-col items-center gap-2 text-cream/70 hover:text-soft-gold transition-colors">
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
