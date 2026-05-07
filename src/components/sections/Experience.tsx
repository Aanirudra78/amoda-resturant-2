'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const experiences = [
  {
    title: 'Private Heritage Huts',
    description: 'Dine in intimate, traditional huts adorned with handcrafted decor. Perfect for families and special celebrations.',
    image: '/images/gallery/gallery-1.jpg',
  },
  {
    title: 'Open-Air Garden Tables',
    description: 'Enjoy your meal under the stars in our lush garden setting. Fresh air, warm lighting, and timeless ambience.',
    image: '/images/gallery/gallery-2.jpg',
  },
  {
    title: 'Lantern-Lit Evenings',
    description: 'As dusk settles, lanterns illuminate our space, creating an enchanting atmosphere for an unforgettable dining experience.',
    image: '/images/gallery/gallery-3.jpg',
  },
];

export function Experience() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding bg-cream relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-soft-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-content mx-auto container-padding relative">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Our Offerings</p>
          <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
            The Experience
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
          <p className="font-inter text-base text-stone-gray max-w-2xl mx-auto leading-relaxed">
            Three unique settings, each offering a distinct way to enjoy our heritage dining experience.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const [cardRef, cardVisible] = useScrollReveal<HTMLDivElement>();
  const revealClass = index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right';

  return (
    <Card ref={cardRef} className={`overflow-hidden p-0 group relative rounded-card overflow-hidden shadow-card border border-stone-gray/10 card-hover bg-cream ${revealClass} ${cardVisible ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <div className="p-8 text-center">
        <h3 className="font-cormorant text-2xl font-medium text-charcoal mb-3 tracking-wide">
          {experience.title}
        </h3>
        <div className="w-8 h-px bg-soft-gold/50 mx-auto mb-4" />
        <p className="font-inter text-sm text-stone-gray leading-relaxed">
          {experience.description}
        </p>
      </div>
    </Card>
  );
}
