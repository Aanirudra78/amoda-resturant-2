/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2C4A3E',
        'warm-brown': '#6B5347',
        cream: '#F5F1E8',
        'soft-gold': '#C9A871',
        charcoal: '#3A3A3A',
        'warm-white': '#FFFDF7',
        'stone-gray': '#9B9589',
        'olive-muted': '#8A9A7B',
        'terracotta-hint': '#B8887D',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section': ['3rem', { lineHeight: '1.2' }],
        'section-mobile': ['2rem', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '120px',
        'section-mobile': '80px',
        'container': '80px',
        'container-mobile': '24px',
      },
      maxWidth: {
        'content': '1280px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(44, 74, 62, 0.08)',
        'soft-lg': '0 8px 32px rgba(44, 74, 62, 0.12)',
        'card': '0 4px 16px rgba(44, 74, 62, 0.06)',
        'card-hover': '0 12px 32px rgba(44, 74, 62, 0.12)',
      },
      borderRadius: {
        'card': '12px',
        'button': '6px',
        'input': '8px',
      },
      transitionDuration: {
        'default': '300ms',
        'hero': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
