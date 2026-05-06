'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ReservationModal } from '@/components/ui/ReservationModal';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-forest-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-content mx-auto container-padding relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Find Us</p>
          <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
            Visit Us
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
          <p className="font-inter text-base text-stone-gray max-w-2xl mx-auto leading-relaxed">
            Find us in the heart of Jabalpur and experience heritage dining firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="relative h-[450px] rounded-card overflow-hidden shadow-card border border-stone-gray/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234567.89!2d79.9!3d23.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b9a0e0000001%3A0x123456789abcdef!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amodad Village Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="p-6 bg-cream rounded-card border border-stone-gray/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-lg font-medium text-charcoal mb-1 tracking-wide">Address</h3>
                  <p className="font-inter text-sm text-stone-gray leading-relaxed">
                    123 Heritage Lane, Jabalpur<br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 bg-cream rounded-card border border-stone-gray/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-lg font-medium text-charcoal mb-1 tracking-wide">Phone</h3>
                  <a
                    href="tel:+917828088755"
                    className="font-inter text-sm text-forest-green hover:text-soft-gold transition-colors duration-300"
                  >
                    +91 78280 88755
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 bg-cream rounded-card border border-stone-gray/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-lg font-medium text-charcoal mb-1 tracking-wide">Opening Hours</h3>
                  <div className="font-inter text-sm text-stone-gray">
                    <p>Monday - Sunday</p>
                    <p className="font-medium text-charcoal">12:00 PM - 11:00 PM</p>
                    <p className="text-xs mt-1 italic text-stone-gray/70">Last orders at 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="p-6 bg-cream rounded-card border border-stone-gray/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-lg font-medium text-charcoal mb-1 tracking-wide">Follow Us</h3>
                  <a
                    href="https://instagram.com/amodadvillage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-forest-green hover:text-soft-gold transition-colors duration-300"
                  >
                    @amodadvillage
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="primary" 
              size="lg" 
              className="w-full btn-shine"
            >
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Reservation Modal */}
    <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
