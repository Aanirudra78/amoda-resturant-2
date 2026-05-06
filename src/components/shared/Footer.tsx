import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-green text-warm-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-soft-gold to-transparent" />
      
      <div className="max-w-content mx-auto container-padding py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-cormorant text-3xl font-medium mb-6 tracking-wide">Amodad Village</h3>
            <div className="w-12 h-px bg-soft-gold/50 mb-6" />
            <p className="font-inter text-sm text-warm-white/80 leading-relaxed tracking-wide">
              Experience authentic village dining in a luxury setting. Heritage huts, garden seating, and lantern-lit evenings await.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6 tracking-wide">Quick Links</h4>
            <div className="w-8 h-px bg-soft-gold/40 mb-6" />
            <nav className="flex flex-col gap-3">
              <Link href="#experience" className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 tracking-wide">
                Experience
              </Link>
              <Link href="#menu" className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 tracking-wide">
                Menu
              </Link>
              <Link href="#gallery" className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 tracking-wide">
                Gallery
              </Link>
              <Link href="#contact" className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 tracking-wide">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6 tracking-wide">Connect</h4>
            <div className="w-8 h-px bg-soft-gold/40 mb-6" />
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/amodadvillage"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 flex items-center gap-3 tracking-wide"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @amodadvillage
              </a>
              <a
                href="tel:+917828088755"
                className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 tracking-wide"
              >
                +91 78280 88755
              </a>
              <a
                href="mailto:hello@amodadvillage.com"
                className="font-inter text-sm text-warm-white/70 hover:text-soft-gold transition-colors duration-300 tracking-wide"
              >
                hello@amodadvillage.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-warm-white/10 text-center">
          <p className="font-inter text-xs text-warm-white/50 tracking-widest uppercase">
            © {currentYear} Amodad Village. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
