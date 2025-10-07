'use client';

export default function ServicesTicker() {
  const services = [
    "Електромонтажні роботи",
    "Виробництво електророзподільної апаратури", 
    "Неспеціалізована оптова торгівля",
    "Організація будівництва будівель",
    "Будівництво житлових і нежитлових споруд",
    "Спорудження об'єктів електропостачання",
    "Телекомунікаційні мережі",
    "Інжиніринг та технічне консультування"
  ];

  return (
    <div className="bg-verdigris py-4 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {services.map((service, index) => (
          <span key={`first-${index}`} className="text-white font-semibold text-lg mx-8 flex items-center">
            {service}
            <span className="mx-4 text-verdigris-300">•</span>
          </span>
        ))}
        {services.map((service, index) => (
          <span key={`second-${index}`} className="text-white font-semibold text-lg mx-8 flex items-center">
            {service}
            <span className="mx-4 text-verdigris-300">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}