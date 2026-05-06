'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { id: '1', src: '/images/gallery/gallery-1.jpg', alt: 'Amodad Village gallery image 1' },
  { id: '2', src: '/images/gallery/gallery-2.jpg', alt: 'Amodad Village gallery image 2' },
  { id: '3', src: '/images/gallery/gallery-3.jpg', alt: 'Amodad Village gallery image 3' },
  { id: '4', src: '/images/gallery/gallery-4.jpg', alt: 'Amodad Village gallery image 4' },
  { id: '5', src: '/images/gallery/gallery-5.jpg', alt: 'Amodad Village gallery image 5' },
  { id: '6', src: '/images/gallery/gallery-6.jpg', alt: 'Amodad Village gallery image 6' },
  { id: '7', src: '/images/gallery/gallery-7.jpg', alt: 'Amodad Village gallery image 7' },
  { id: '8', src: '/images/gallery/gallery-8.jpg', alt: 'Amodad Village gallery image 8' },
  { id: '9', src: '/images/gallery/gallery-9.jpg', alt: 'Amodad Village gallery image 9' },
  { id: '10', src: '/images/gallery/gallery-10.jpg', alt: 'Amodad Village gallery image 10' },
  { id: '11', src: '/images/gallery/gallery-11.jpg', alt: 'Amodad Village gallery image 11' },
  { id: '12', src: '/images/gallery/gallery-12.jpg', alt: 'Amodad Village gallery image 12' },
  { id: '13', src: '/images/gallery/gallery-13.jpg', alt: 'Amodad Village gallery image 13' },
  { id: '14', src: '/images/gallery/gallery-14.jpg', alt: 'Amodad Village gallery image 14' },
  { id: '15', src: '/images/gallery/gallery-15.jpg', alt: 'Amodad Village gallery image 15' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-soft-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-content mx-auto container-padding relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Visual Journey</p>
          <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
            Gallery
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
          <p className="font-inter text-base text-stone-gray max-w-2xl mx-auto leading-relaxed">
            Glimpses of the Amodad Village experience — heritage huts, garden evenings, and culinary artistry.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative overflow-hidden rounded-card cursor-pointer group
                ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
              style={{ aspectRatio: index % 5 === 0 ? '1/1' : '4/3' }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={index % 5 === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-warm-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-warm-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white/70 hover:text-soft-gold transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage.replace('w=600', 'w=1200')}
              alt="Gallery image"
              fill
              sizes="80vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
