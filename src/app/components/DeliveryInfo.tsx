import { MapPin, Store, Truck } from 'lucide-react';

const deliveryOptions = [
  {
    id: 1,
    icon: 'store',
    title: 'Самовывоз из магазина',
    description: 'Забирайте товар самостоятельно со склада в Калининграде. Бесплатно и в удобное время.',
    features: ['Бесплатно', 'Готовность через 1-2 часа', 'Помощь в погрузке'],
  },
  {
    id: 2,
    icon: 'truck',
    title: 'Доставка по городу',
    description: 'Доставим товар по Калининграду и области в удобное для вас время.',
    features: ['От 500 рублей', 'Доставка на следующий день', 'Звонок за час до доставки'],
  },
  {
    id: 3,
    icon: 'crane',
    title: 'Доставка крупногабаритных товаров',
    description: 'Специализированная доставка крупногабаритных грузов с разгрузкой и подъёмом на этаж.',
    features: ['Манипулятор', 'Разгрузка', 'Подъём на этаж'],
  },
];

const icons = {
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  crane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <path d="M2 20h20" />
      <path d="M8 20V8" />
      <path d="M4 8h16" />
      <path d="M8 4h8" />
      <path d="M12 4v4" />
      <rect x="10" y="12" width="4" height="4" />
    </svg>
  ),
};

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function DeliveryInfo() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Условия доставки
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Выберите удобный способ получения товара
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {deliveryOptions.map((option) => {
            return (
              <div
                key={option.id}
                className="bg-white rounded-lg p-5 md:p-6 shadow-md hover:shadow-xl transition text-center"
              >
                <div className="inline-flex items-center justify-center mb-3 md:mb-4 text-[#1e3a8a]">
                  {icons[option.icon as keyof typeof icons]}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                  {option.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  {option.description}
                </p>

                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-700">
                      <div className="w-5 h-5 text-[#1e3a8a] flex-shrink-0">
                        {checkIcon}
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}