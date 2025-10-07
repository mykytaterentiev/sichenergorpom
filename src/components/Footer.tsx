import Image from 'next/image';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Електромонтажні роботи",
    "Виробництво електроапаратури", 
    "Інжиніринг та консультування",
    "Спорудження об'єктів електропостачання"
  ];

  return (
    <footer className="bg-gradient-to-br from-dim_gray-100 via-dim_gray-200 to-dim_gray-300 text-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/logo_sichenergoprom.png"
                  alt="SICHENERGOPROM Logo"
                  width={160}
                  height={32}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-dim_gray-600 mb-6 leading-relaxed max-w-md">
                Провідна компанія в сфері енергетики та автоматизації промисловості в Україні. 
                Інженерна досконалість, інноваційні рішення та надійне партнерство 
                з 2008 року.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="bg-verdigris/10 rounded-lg p-3 border border-verdigris/20">
                  <svg className="w-5 h-5 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-white">ІСО сертифіковано</div>
                  <div className="text-dim_gray-600">Управління якістю</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Наші послуги</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block text-dim_gray-600 hover:text-verdigris transition-all duration-200 text-sm leading-relaxed group-hover:translate-x-1"
                    >
                      {service}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Get in Touch</h4>
              <div className="space-y-4">
                <div className="text-sm">
                  <div className="text-dim_gray-600 mb-1">Call us directly</div>
                  <a 
                    href="tel:+380669201001" 
                    className="text-white hover:text-verdigris transition-colors duration-200 font-medium"
                  >
                    +380 66 920 10 01
                  </a>
                </div>
                
                <div className="text-sm">
                  <div className="text-dim_gray-600 mb-1">Email us</div>
                  <a 
                    href="mailto:office@sep.zp.ua" 
                    className="text-white hover:text-verdigris transition-colors duration-200 font-medium"
                  >
                    office@sep.zp.ua
                  </a>
                </div>

                <div className="pt-4 border-t border-dim_gray-100">
                  <div className="space-y-2">
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="block text-dim_gray-600 hover:text-verdigris transition-colors duration-200 text-sm"
                    >
                      About Us
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="block text-dim_gray-600 hover:text-verdigris transition-colors duration-200 text-sm"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dim_gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-dim_gray-600">
              © {currentYear} ТОВ «СІЧЕНЕРГОПРОМ». Усі права захищені.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-dim_gray-600">
                69037, Україна, м. Запоріжжя, вул. Бойрачна, буд. 7
              </div>
              <div className="text-dim_gray-600">
                <a 
                  href="http://www.sep.zp.ua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-verdigris transition-colors duration-200"
                >
                  www.sep.zp.ua
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}