import { Building2, Users, Award, Target } from 'lucide-react';

export function About() {
  const stats = [
    { value: '15+', label: 'Лет на рынке' },
    { value: '5000+', label: 'Довольных клиентов' },
    { value: '10000+', label: 'Наименований товаров' },
    { value: '24/7', label: 'Поддержка клиентов' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Наша миссия',
      description: 'Обеспечивать строительный рынок Калининграда качественными материалами по доступным ценам, помогая реализовывать проекты любой сложности.',
    },
    {
      icon: Award,
      title: 'Качество превыше всего',
      description: 'Мы работаем только с проверенными производителями и гарантируем качество каждого товара. Все материалы имеют необходимые сертификаты.',
    },
    {
      icon: Users,
      title: 'Профессиональная команда',
      description: 'Наши специалисты имеют многолетний опыт в строительной сфере и всегда готовы проконсультировать по выбору материалов.',
    },
    {
      icon: Building2,
      title: 'Надёжный партнёр',
      description: 'Мы ценим долгосрочные отношения с клиентами и стремимся стать вашим надёжным партнёром в любых строительных проектах.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">О компании СМАРТСТРОЙ</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Ведущий поставщик строительных материалов в Калининграде и области
          </p>
        </div>
      </div>

      {/* Основная информация */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Кто мы
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-800">СМАРТСТРОЙ</strong> — это надёжный поставщик строительных материалов,
                работающий на рынке Калининграда более 15 лет. Мы специализируемся на продаже качественных труб,
                фитингов, люков и другого оборудования для строительства и ремонта.
              </p>
              <p>
                За годы работы мы заслужили доверие тысяч клиентов благодаря высокому качеству продукции,
                профессиональному сервису и честным ценам. Наш ассортимент постоянно расширяется, чтобы удовлетворить
                все потребности строительной отрасли региона.
              </p>
              <p>
                Мы работаем как с крупными строительными компаниями, так и с частными лицами, обеспечивая каждого
                клиента индивидуальным подходом и профессиональными консультациями.
              </p>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Ценности */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Наши ценности
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="w-14 h-14 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Призыв к действию */}
        <div className="bg-[#1e3a8a] text-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Станьте частью нашей истории успеха
          </h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые доверяют СМАРТСТРОЙ
          </p>
          <button className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}
