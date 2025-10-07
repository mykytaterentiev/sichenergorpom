'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const services = [
    {
      title: "Електромонтажні роботи",
      description: "Основний вид діяльності компанії. Професійний монтаж електричних систем різної складності для промислових та цивільних об'єктів.",
      expandedInfo: "Повний комплекс електромонтажних робіт від проектування до введення в експлуатацію. Досвід роботи з високовольтними системами, промисловими мережами та автоматизованими комплексами.",
      features: ["Промислові мережі", "Високовольтні системи", "Автоматизація", "Сервісне обслуговування"],
      icon: (
        <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Виробництво електророзподільної апаратури",
      description: "Розробка та виготовлення електророзподільної і контрольної апаратури для промислових підприємств та енергетичних об'єктів.",
      expandedInfo: "Повний цикл виробництва від проектування до випробувань. Виготовлення розподільних щитів, пультів управління та систем автоматизації за індивідуальними технічними вимогами.",
      features: ["Розподільні щити", "Пульти управління", "Системи захисту", "Випробування та сертифікація"],
      icon: (
        <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Інжиніринг та консультування",
      description: "Діяльність у сфері архітектури, інжинірингу, геології та геодезії. Надання послуг технічного консультування в інженерно-будівельній сфері.",
      expandedInfo: "Комплексні інженерні рішення для промислових об'єктів. Розробка технічної документації, проектування систем автоматизації та консультування з питань енергоефективності.",
      features: ["Проектна документація", "Технічний аудит", "Системи АСУ ТП", "Енергоефективність"],
      icon: (
        <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Спорудження об'єктів електропостачання та телекомунікацій",
      description: "Будівництво та монтаж електричних мереж, підстанцій та телекомунікаційних систем для забезпечення надійного енергопостачання.",
      expandedInfo: "Комплексне будівництво енергетичної інфраструктури від ліній електропередач до розподільних підстанцій. Монтаж телекомунікаційного обладнання та систем зв'язку.",
      features: ["Лінії електропередач", "Розподільні підстанції", "Телекомунікаційні мережі", "Системи зв'язку"],
      icon: (
        <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.20]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(58, 170, 166, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58, 170, 166, 0.5) 1px, transparent 1px),
            linear-gradient(rgba(58, 170, 166, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58, 170, 166, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }} />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-verdigris/30 text-8xl font-bold transform rotate-45 select-none pointer-events-none whitespace-nowrap">
            SICHENERGOPROM • ЕНЕРГЕТИКА • АВТОМАТИЗАЦІЯ • ІНЖИНІРИНГ • 
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dim_gray-200 mb-4">Наші послуги</h2>
          <p className="text-lg text-dim_gray-500 max-w-3xl mx-auto">
            Наш основний напрямок діяльності — електромонтажні роботи, які доповнюються повним спектром інженерно-технічних послуг.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedCard === index;
            return (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
                className={`group relative bg-seasalt rounded-xl p-8 cursor-pointer transition-all duration-700 transform perspective-1000 ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${
                  isExpanded 
                    ? 'scale-105 shadow-2xl shadow-verdigris/20 ring-2 ring-verdigris/50 z-10' 
                    : 'hover:shadow-xl hover:-translate-y-3 hover:rotate-1 hover:shadow-verdigris/10'
                }`}
                style={{
                  background: isExpanded 
                    ? 'linear-gradient(135deg, #F8F7F8 0%, #ffffff 50%, #F8F7F8 100%)'
                    : undefined,
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                onMouseMove={(e) => {
                  if (isExpanded) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  const rotateX = (y / rect.height) * -10;
                  const rotateY = (x / rect.width) * 10;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  if (isExpanded) return;
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
                }}
              >
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  isExpanded 
                    ? 'bg-gradient-to-r from-verdigris via-verdigris/50 to-verdigris animate-pulse'
                    : 'bg-gradient-to-r from-transparent via-verdigris/0 to-transparent group-hover:via-verdigris/30'
                } opacity-75 blur-sm`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 ${
                    isExpanded 
                      ? 'bg-gradient-to-br from-verdigris to-verdigris/80 shadow-lg shadow-verdigris/30'
                      : 'bg-verdigris group-hover:bg-gradient-to-br group-hover:from-verdigris group-hover:to-verdigris/80 group-hover:shadow-lg group-hover:shadow-verdigris/20'
                  }`}>
                    {service.icon}
                  </div>

                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    isExpanded ? 'text-verdigris' : 'text-dim_gray-200 group-hover:text-verdigris'
                  }`}>
                    {service.title}
                  </h3>

                  <p className="text-dim_gray-500 mb-4">{service.description}</p>

                  <div className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-verdigris/20">
                      <p className="text-dim_gray-600 mb-4 text-sm leading-relaxed">
                        {service.expandedInfo}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-dim_gray-700 mb-2 text-sm">Ключові Особливості:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-dim_gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-verdigris rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-verdigris hover:bg-verdigris/90 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        Отримати консультацію
                      </button>
                    </div>
                  </div>

                  <div className={`absolute top-4 right-4 transition-all duration-300 ${
                    isExpanded ? 'rotate-180' : 'group-hover:scale-110'
                  }`}>
                    <svg className="w-5 h-5 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}