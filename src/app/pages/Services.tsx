import { Truck, Package, Wrench, HeadphonesIcon, Clock, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Доставка по Калининграду',
      description: 'Быстрая доставка строительных материалов по всему Калининграду и области. Доставим ваш заказ в удобное для вас время.',
      features: ['Доставка в день заказа', 'Подъём на этаж', 'Курьер свяжется заранее'],
    },
    {
      icon: Package,
      title: 'Самовывоз со склада',
      description: 'Забирайте заказы со склада самостоятельно. Мы подготовим товар к вашему приезду и поможем с погрузкой.',
      features: ['Быстрая комплектация', 'Помощь с погрузкой', 'Работаем без выходных'],
    },
    {
      icon: Wrench,
      title: 'Монтаж и установка',
      description: 'Профессиональная установка труб, фитингов и другого оборудования. Команда опытных мастеров выполнит работы качественно.',
      features: ['Опытные специалисты', 'Гарантия на работы', 'Выезд на объект'],
    },
    {
      icon: HeadphonesIcon,
      title: 'Консультация специалиста',
      description: 'Наши эксперты помогут выбрать оптимальные материалы для вашего проекта и рассчитают необходимое количество.',
      features: ['Бесплатные консультации', 'Расчёт материалов', 'Подбор аналогов'],
    },
    {
      icon: Clock,
      title: 'Срочные заказы',
      description: 'Нужны материалы срочно? Мы подготовим и доставим заказ в кратчайшие сроки, даже в выходные дни.',
      features: ['Экспресс-доставка', 'Приоритетная комплектация', 'Работа 24/7'],
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Все товары сертифицированы. Предоставляем гарантию на всю продукцию и услуги монтажа.',
      features: ['Сертификаты качества', 'Официальная гарантия', 'Возврат и обмен'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            СМАРТСТРОЙ предлагает полный спектр услуг для строительства и ремонта в Калининграде
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
              >
                <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#1e3a8a] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Призыв к действию */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Нужна консультация?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами, и наши специалисты помогут выбрать необходимые материалы и услуги для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg hover:bg-[#1e40af] transition">
              Заказать звонок
            </button>
            <a
              href="tel:+73912345678"
              className="bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              +7 (391) 234-56-78
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
