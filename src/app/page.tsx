'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesTicker from '@/components/ServicesTicker';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      
      <main>
        <Hero />
        <ServicesTicker />
        <Services />
        <About />
        <Contact />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
