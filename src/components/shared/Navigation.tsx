'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ReservationModal } from '@/components/ui/ReservationModal';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookTable = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-warm-white/80 backdrop-blur-2xl border-b border-warm-white/40 shadow-soft' 
            : 'bg-warm-white/40 backdrop-blur-xl border-b border-white/20'
        }`}
      >
        {/* Glass glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
        <nav className="max-w-content mx-auto container-padding relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className={`font-cormorant text-2xl font-medium transition-colors duration-300 ${
                isScrolled ? 'text-forest-green' : 'text-warm-white drop-shadow-lg'
              }`}
            >
              Amodad Village
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-inter text-sm transition-colors duration-300 animated-underline ${
                    isScrolled 
                      ? 'text-charcoal hover:text-forest-green' 
                      : 'text-warm-white/90 hover:text-warm-white drop-shadow-sm'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={handleBookTable} variant="primary" size="sm" className="glow">
                Book Table
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-charcoal hover:text-forest-green' 
                  : 'text-warm-white hover:text-warm-white/80'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`lg:hidden py-4 border-t backdrop-blur-xl rounded-b-card ${
              isScrolled ? 'border-stone-gray/20 bg-warm-white/90' : 'border-white/20 bg-warm-white/10'
            }`}>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`font-inter text-sm transition-colors duration-300 py-2 animated-underline ${
                      isScrolled 
                        ? 'text-charcoal hover:text-forest-green' 
                        : 'text-warm-white hover:text-warm-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button onClick={handleBookTable} variant="primary" size="sm" className="mt-2 glow">
                  Book Table
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
