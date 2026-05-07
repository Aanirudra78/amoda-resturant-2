'use client';

import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ankit & Riya',
    location: 'Pune',
    rating: 5,
    text: 'The hut dining was an experience we\'ll never forget. Felt like royalty for the evening!',
  },
  {
    id: '2',
    name: 'Sharma Family',
    location: 'Nagpur',
    rating: 5,
    text: 'Perfect place for celebrations. The ambience, food, and service were all exceptional.',
  },
  {
    id: '3',
    name: 'Rajesh & Priya',
    location: 'Mumbai',
    rating: 5,
    text: 'The hut dining experience was magical. Truly felt like we stepped back in time to a royal feast.',
  },
  {
    id: '4',
    name: 'Meera Joshi',
    location: 'Jabalpur',
    rating: 5,
    text: 'A hidden gem in the city. The lantern-lit evenings create such a romantic atmosphere.',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    location: 'Delhi',
    rating: 5,
    text: 'Outstanding food quality and presentation. The Dal Makhani is the best I\'ve ever had.',
  },
  {
    id: '6',
    name: 'Sneha & Arjun',
    location: 'Bhopal',
    rating: 5,
    text: 'We celebrated our anniversary here and it was perfect. The private hut made it so special.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-green/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-content mx-auto container-padding relative">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-14 scroll-reveal ${headerVisible ? 'revealed' : ''}`}>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Guest Stories</p>
          <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
          <p className="font-inter text-base text-stone-gray max-w-2xl mx-auto leading-relaxed">
            Stories from those who experienced the heritage dining journey.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-warm-white rounded-card p-8 shadow-card border border-stone-gray/10 card-hover"
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-soft-gold/25 mb-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-soft-gold' : 'text-stone-gray/20'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="font-inter text-sm text-charcoal leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-soft-gold/30 mb-4" />

              {/* Author */}
              <div>
                <p className="font-cormorant text-lg font-medium text-charcoal tracking-wide">{testimonial.name}</p>
                <p className="font-inter text-xs text-stone-gray tracking-wide">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-soft-gold w-8' : 'bg-stone-gray/20 w-2 hover:bg-stone-gray/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
