import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Menu } from '@/components/sections/Menu';
import { Booking } from '@/components/sections/Booking';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Menu />
      <Booking />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
