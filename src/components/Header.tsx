'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-sm z-50 border-b border-white/20 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/images/logo_sichenergoprom.png"
                alt="SICHENERGOPROM Logo"
                width={280}
                height={56}
                priority
                className="h-12 w-auto brightness-0 invert"
              />
            </div>

=            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-verdigris transition-colors duration-200 font-medium"
                >
                  Послуги
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-verdigris transition-colors duration-200 font-medium"
                >
                  Про нас
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-verdigris transition-colors duration-200 font-medium"
                >
                  Контакти
                </button>
              </nav>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-verdigris text-white px-6 py-2 rounded-lg hover:bg-verdigris-600 transition-colors duration-200 font-semibold border border-verdigris-600 whitespace-nowrap"
              >
                Консультація
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}