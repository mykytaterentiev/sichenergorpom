'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero-section"
      className="relative h-screen overflow-hidden bg-gradient-to-b from-dim_gray_900 via-dim_gray_800 to-dim_gray_700"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero_background_1.png"
          alt="SICHENERGOPROM Industrial Background"
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block">Інноваційні рішення</span>
            <span className="block text-verdigris">для енергетики та автоматизації</span>
            <span className="block">промисловості</span>
          </h1>
        </div>
      </div>
    </section>
  );
}