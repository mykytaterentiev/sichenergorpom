'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const isFieldValid = (fieldName: string, value: string) => {
    if (!touchedFields[fieldName]) return true;
    if (fieldName === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return value.trim().length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage('Дякуємо за ваш запит на консультацію! Ми зв\'яжемося з вами протягом 24 годин.');
      setFormData({ fullName: '', companyName: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      title: "Адреса",
      content: "69037, Україна, м. Запоріжжя,\nвул. Бойрачна, буд. 7",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Телефон",
      content: "+380 66 920 10 01\n+380 98 920 10 01",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "office@sep.zp.ua",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Веб-сайт",
      content: "www.sep.zp.ua",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.20]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(58, 170, 166, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(58, 170, 166, 0.4) 2px, transparent 2px),
            linear-gradient(0deg, transparent 24%, rgba(58, 170, 166, 0.25) 25%, rgba(58, 170, 166, 0.25) 26%, transparent 27%, transparent 74%, rgba(58, 170, 166, 0.25) 75%, rgba(58, 170, 166, 0.25) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(58, 170, 166, 0.25) 25%, rgba(58, 170, 166, 0.25) 26%, transparent 27%, transparent 74%, rgba(58, 170, 166, 0.25) 75%, rgba(58, 170, 166, 0.25) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '75px 75px'
        }} />
        
        <div className="absolute inset-0 flex items-center justify-center transform rotate-12">
          <div className="text-verdigris/30 text-6xl font-light tracking-wider select-none pointer-events-none whitespace-nowrap">
            КОНТАКТИ • СПІВПРАЦЯ • КОНСУЛЬТАЦІЯ • ПРОЕКТИ • 
          </div>
        </div>
        
        <div className="absolute top-10 right-20 w-16 h-16 border-2 border-verdigris/30 transform rotate-45" />
        <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-verdigris/30 transform rotate-12" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dim_gray-200 mb-4">Контакти</h2>
          <p className="text-lg text-dim_gray-500 max-w-3xl mx-auto">
            Готові обговорити ваш проект? Контактуйте з нами для консультації та ознайомтеся, 
            як ми можемо допомогти оптимізувати ваші енергетичні та автоматизовані системи.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-dim_gray-200 mb-8">Контакти для зв’язку</h3>
            <p className="text-dim_gray-500 mb-8 leading-relaxed">
              Готові обговорити ваш проект? Наша команда експертів готова допомогти вам 
              створити ефективні, надійні енергетичні рішення, адаптовані під ваші потреби.
            </p>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl p-6 shadow-sm border border-dim_gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-verdigris to-verdigris/80 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dim_gray-200 mb-2 group-hover:text-verdigris transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-dim_gray-500 whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-verdigris/5 rounded-xl p-6 border border-verdigris/20">
              <h4 className="font-semibold text-dim_gray-200 mb-3 flex items-center">
                <svg className="w-5 h-5 text-verdigris mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Робочий час
              </h4>
              <div className="text-dim_gray-500 text-sm space-y-1">
                <p>Понеділок - П’ятниця: 9:00 - 18:00</p>
                <p>Субота: 10:00 - 14:00</p>
                <p>Неділя: тільки екстрені виклики</p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-dim_gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dim_gray-200 mb-3">Замовити консультацію</h3>
                <p className="text-dim_gray-500">Розкажіть нам про ваш проект, і ми зв’яжемося з вами протягом 24 годин</p>
              </div>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-gradient-to-r from-verdigris/10 to-verdigris/5 border border-verdigris/20 text-verdigris rounded-lg animate-fade-in-up">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-verdigris mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {submitMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label 
                    htmlFor="fullName" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                      focusedField === 'fullName' || formData.fullName 
                        ? 'text-verdigris' 
                        : 'text-dim_gray-400'
                    }`}
                  >
                    Повне ім’я *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      !isFieldValid('fullName', formData.fullName)
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : focusedField === 'fullName'
                        ? 'border-verdigris focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                        : 'border-dim_gray-200 focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                    }`}
                    placeholder="Введіть ваше повне ім’я"
                  />
                  {!isFieldValid('fullName', formData.fullName) && (
                    <p className="mt-1 text-sm text-red-500">Ім’я є обов’язковим</p>
                  )}
                </div>

                <div className="relative">
                  <label 
                    htmlFor="companyName" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                      focusedField === 'companyName' || formData.companyName
                        ? 'text-verdigris' 
                        : 'text-dim_gray-400'
                    }`}
                  >
                    Назва компанії
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('companyName')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      focusedField === 'companyName'
                        ? 'border-verdigris focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                        : 'border-dim_gray-200 focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                    }`}
                    placeholder="Введіть назву компанії (необов’язково)"
                  />
                </div>

                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                      focusedField === 'email' || formData.email
                        ? 'text-verdigris' 
                        : 'text-dim_gray-400'
                    }`}
                  >
                    Електронна пошта *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      !isFieldValid('email', formData.email)
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : focusedField === 'email'
                        ? 'border-verdigris focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                        : 'border-dim_gray-200 focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                    }`}
                    placeholder="your@company.com"
                  />
                  {!isFieldValid('email', formData.email) && (
                    <p className="mt-1 text-sm text-red-500">Будь ласка, введіть коректну адресу електронної пошти</p>
                  )}
                </div>

                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                      focusedField === 'message' || formData.message
                        ? 'text-verdigris' 
                        : 'text-dim_gray-400'
                    }`}
                  >
                    Опис проекту *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none ${
                      !isFieldValid('message', formData.message)
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : focusedField === 'message'
                        ? 'border-verdigris focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                        : 'border-dim_gray-200 focus:border-verdigris focus:ring-2 focus:ring-verdigris/20'
                    }`}
                    placeholder="Розкажіть нам про ваш проект: масштаб, терміни, специфічні вимоги..."
                  />
                  {!isFieldValid('message', formData.message) && (
                    <p className="mt-1 text-sm text-red-500">Будь ласка, опишіть ваш проект</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-verdigris to-verdigris/90 text-white px-6 py-4 rounded-lg hover:from-verdigris/90 hover:to-verdigris transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Надсилаємо запит...
                      </>
                    ) : (
                      <>
                        Надіслати запит
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
                
                <p className="text-xs text-dim_gray-400 text-center">
                  Ми поважаємо вашу конфіденційність. Ваша інформація буде використовуватися тільки для зв’язку щодо вашого проекту.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}