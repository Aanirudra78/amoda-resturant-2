'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ReservationModal } from '@/components/ui/ReservationModal';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

export function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [imageRef, imageVisible] = useScrollReveal<HTMLDivElement>();
  const [contentRef, contentVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <section id="booking" className="section-padding bg-warm-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-content mx-auto container-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div ref={imageRef} className={`relative h-[450px] lg:h-[550px] rounded-card overflow-hidden group scroll-reveal-left ${imageVisible ? 'revealed' : ''}`}>
              <Image
                src="/images/booking-hut.webp"
                alt="Inside a heritage hut at Amodad Village"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Image overlay accent */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-cormorant text-xl text-warm-white/90 italic">Experience the warmth of tradition</p>
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className={`text-center lg:text-left scroll-reveal-right ${contentVisible ? 'revealed' : ''}`}>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Reservations</p>
              <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
                Reserve Your Table
              </h2>
              <div className="flex items-center gap-4 mb-6 lg:justify-start justify-center">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
              </div>
              <p className="font-inter text-base text-stone-gray leading-relaxed mb-10">
                Experience village dining at its finest. Book your private hut or garden table for an unforgettable evening with family and friends.
              </p>

              {/* Contact Options */}
              <div className="space-y-5">
                {/* Call */}
                <div className="p-6 bg-cream rounded-card border border-stone-gray/10 card-hover">
                  <p className="font-inter text-xs uppercase tracking-[0.2em] text-stone-gray mb-2">Call to Book</p>
                  <a
                    href="tel:+917828088755"
                    className="font-cormorant text-3xl font-medium text-forest-green hover:text-soft-gold transition-colors duration-300"
                  >
                    +91 78280 88755
                  </a>
                </div>

                {/* Reserve Button */}
                <div className="p-6 bg-cream rounded-card border border-stone-gray/10 card-hover">
                  <p className="font-inter text-xs uppercase tracking-[0.2em] text-stone-gray mb-3">Instant Booking</p>
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto btn-shine"
                  >
                    Reserve Your Table
                  </Button>
                </div>
              </div>

              {/* Note */}
              <p className="font-inter text-xs text-stone-gray mt-8 italic tracking-wide">
                For large groups (10+ guests), please call directly for special arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
