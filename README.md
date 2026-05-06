# Amodad Village - Heritage Dining Experience

A premium restaurant website for Amodad Village, a luxury village-style dining experience in Jabalpur, Madhya Pradesh.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond + Inter (via next/font)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Home page
├── components/
│   ├── ui/
│   │   ├── Button.tsx   # Reusable button component
│   │   └── Card.tsx     # Base card component
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Menu.tsx
│   │   ├── Booking.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── shared/
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── WhatsAppButton.tsx
└── lib/
    └── whatsapp.ts      # WhatsApp URL utilities
```

## Features

- **Responsive Design**: Mobile-first, tested at all breakpoints
- **WhatsApp Integration**: Booking and ordering via pre-filled messages
- **Menu Cart System**: Add items and send order via WhatsApp
- **Image Optimization**: Using next/image for all images
- **Smooth Animations**: Scroll-triggered fades, hover effects
- **Accessibility**: Proper ARIA labels, semantic HTML

## Configuration

### WhatsApp Number
Update the WhatsApp number in `src/lib/whatsapp.ts`:
```typescript
export const WHATSAPP_NUMBER = '917828088755';
```

### Images
Replace placeholder images with actual photos:
1. Add images to `public/images/`
2. Update image paths in components

### Address
Update the address in `src/components/sections/Contact.tsx`

### Google Maps
Replace the embed URL in `src/components/sections/Contact.tsx` with actual coordinates

## Design System

### Colors
- `forest-green`: #2C4A3E (Primary)
- `warm-brown`: #6B5347 (Secondary)
- `cream`: #F5F1E8 (Background)
- `soft-gold`: #C9A871 (Accents)
- `charcoal`: #3A3A3A (Text)
- `warm-white`: #FFFDF7 (Cards)

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

## Deployment

Build and deploy to any platform supporting Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify

```bash
npm run build
```

## License

© 2024 Amodad Village. All rights reserved.
