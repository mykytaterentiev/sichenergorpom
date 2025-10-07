'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ experience: 0, projects: 0, team: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 17, displayNumber: "17+", label: "Років досвіду", key: "experience" as const },
    { number: 200, displayNumber: "200+", label: "Виконаних проектів", key: "projects" as const },
    { number: 25, displayNumber: "25+", label: "Команда експертів", key: "team" as const }
  ];

  const capabilities = [
    {
      title: "Повний цикл робіт",
      description: "Від розробки технічної документації до введення об'єкта в експлуатацію",
      icon: (
        <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Сертифіковані матеріали",
      description: "Дотримання сучасних стандартів безпеки та якості у всіх проектах",
      icon: (
        <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.5-3.7A1.992 1.992 0 0018 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.55-.22-1.05-.58-1.42L15 8h6v12H3V8h6l-4.42-4.58z" />
        </svg>
      )
    },
    {
      title: "Інноваційні технології",
      description: "Цифрові інструменти для моніторингу та автоматизації енергетичних систем",
      icon: (
        <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "АСУ ТП системи",
      description: "Інтеграція систем автоматизованого управління для підвищення енергоефективності",
      icon: (
        <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visibleStats) {
          setVisibleStats(true);
          
          stats.forEach((stat) => {
            const target = stat.number;
            const duration = 2000; 
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              setAnimatedNumbers(prev => ({
                ...prev,
                [stat.key]: Math.floor(current)
              }));
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [visibleStats, stats]);

  return (
    <section id="about" className="py-20 bg-seasalt relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.20]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233AAAA6' fill-opacity='0.7'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-verdigris/15 via-transparent to-verdigris/20" />
        
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-verdigris/35 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-verdigris/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dim_gray-200 mb-4">Про нас</h2>
          <p className="text-lg text-dim_gray-500 max-w-3xl mx-auto">
            ТОВ «СІЧЕНЕРГОПРОМ» — це інженерно-технічне підприємство, що здійснює діяльність 
            у галузі енергетики, автоматизації та будівництва інфраструктурних об&rsquo;єктів.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="prose prose-lg text-dim_gray-500 space-y-6">
              <p>
                Компанія ТОВ «СІЧЕНЕРГОПРОМ» об&rsquo;єднує висококваліфікованих інженерів, електромонтажників, 
                проектувальників і технічних спеціалістів, які мають значний досвід реалізації проєктів 
                у сфері енергетики, промислового будівництва та автоматизації технологічних процесів.
              </p>
              <p>
                Завдяки поєднанню інженерних компетенцій і сучасних технологій підприємство здатне 
                забезпечити повний цикл робіт — від розробки технічної документації до введення 
                об&rsquo;єкта в експлуатацію.
              </p>
              <p>
                Важливим напрямом діяльності компанії є інтеграція систем автоматизованого управління (АСУ ТП), 
                що дозволяє підвищити ефективність енергоспоживання та знизити експлуатаційні витрати підприємств.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-dim_gray-200 mb-6">Наші переваги</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-dim_gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dim_gray-200 text-sm mb-1">
                        {capability.title}
                      </h4>
                      <p className="text-xs text-dim_gray-500 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div ref={statsRef} className="bg-white rounded-2xl p-8 shadow-lg border border-dim_gray-100 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dim_gray-200 mb-2">Наші досягнення</h3>
                <p className="text-dim_gray-500">Цифри, що відображають наш досвід та професіоналізм</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-4xl lg:text-5xl font-bold mb-2 transition-all duration-1000 ${
                      visibleStats ? 'text-verdigris scale-110' : 'text-dim_gray-300'
                    }`}>
                      {visibleStats ? (
                        stat.key === 'experience' ? `${animatedNumbers.experience}+` :
                        stat.key === 'projects' ? `${animatedNumbers.projects}+` :
                        `${animatedNumbers.team}+`
                      ) : '0'}
                    </div>
                    <div className="text-sm font-medium text-dim_gray-500 uppercase tracking-wider">{stat.label}</div>
                    
                    <div className="mt-3 bg-dim_gray-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-verdigris to-verdigris/80 transition-all duration-2000 ease-out"
                        style={{
                          width: visibleStats ? '100%' : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-verdigris/5 to-verdigris/10 rounded-2xl p-8 border border-verdigris/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-dim_gray-200 mb-3">Наша місія</h3>
                <p className="text-dim_gray-600 text-sm leading-relaxed">
                  Індивідуальний підхід до кожного клієнта, інженерна точність і технологічна гнучкість 
                  дозволяють ТОВ «СІЧЕНЕРГОПРОМ» залишатися надійним партнером у реалізації комплексних 
                  енергетичних і промислових рішень в Україні.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}