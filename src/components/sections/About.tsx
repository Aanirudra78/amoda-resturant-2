'use client';

import { useScrollReveal } from '@/hooks/useScrollAnimations';
import Image from 'next/image';

export function About() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [contentRef, contentVisible] = useScrollReveal<HTMLDivElement>();
  const [imageRef, imageVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-soft-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-green/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-content mx-auto container-padding relative">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Our Story</p>
          <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
            About Amodad Village
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
          <p className="font-inter text-base text-stone-gray max-w-2xl mx-auto leading-relaxed">
            A journey through time, preserving the rich culinary heritage of Madhya Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className={`relative h-[500px] rounded-card overflow-hidden shadow-card border border-stone-gray/10 scroll-reveal-left ${imageVisible ? 'revealed' : ''}`}>
            <Image
              src="/images/about.jpg"
              alt="Heritage dining at Amodad Village"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </div>

          {/* Content */}
          <div ref={contentRef} className={`scroll-reveal-right ${contentVisible ? 'revealed' : ''}`}>
            <h3 className="font-cormorant text-3xl font-medium text-charcoal mb-6 tracking-wide">
              Preserving Tradition, One Dish at a Time
            </h3>
            
            <p className="font-inter text-base text-stone-gray leading-relaxed mb-6">
              Nestled in the heart of Jabalpur, Amodad Village is more than just a restaurant — it's a living museum of culinary artistry. Our journey began with a simple vision: to bring the authentic flavors of our grandmother's kitchen to the modern world.
            </p>
            
            <p className="font-inter text-base text-stone-gray leading-relaxed mb-6">
              Every recipe we serve has been passed down through generations, carefully preserved and perfected over decades. From the slow-cooked Dal Makhani that simmers overnight to the hand-rolled breads baked in our traditional clay oven, each dish tells a story of our heritage.
            </p>
            
            <p className="font-inter text-base text-stone-gray leading-relaxed mb-8">
              We believe in the power of food to bring people together. Our private huts, garden seating, and lantern-lit evenings are designed to create memories that last a lifetime. When you dine with us, you're not just having a meal — you're experiencing a piece of history.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-cormorant text-lg font-medium text-charcoal mb-1">Authentic Recipes</h4>
                  <p className="font-inter text-sm text-stone-gray">Passed down generations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-cormorant text-lg font-medium text-charcoal mb-1">Made with Love</h4>
                  <p className="font-inter text-sm text-stone-gray">Fresh ingredients daily</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-cormorant text-lg font-medium text-charcoal mb-1">Heritage Setting</h4>
                  <p className="font-inter text-sm text-stone-gray">Traditional village ambiance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-cormorant text-lg font-medium text-charcoal mb-1">Family First</h4>
                  <p className="font-inter text-sm text-stone-gray">Warm hospitality always</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
