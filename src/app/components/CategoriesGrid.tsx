import { Link } from 'react-router';

// Кастомные SVG иконки для категорий
const CategoryIcons = {
  ManholeCover: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="32" r="3" fill="currentColor"/>
      <line x1="32" y1="10" x2="32" y2="18" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="46" x2="32" y2="54" stroke="currentColor" strokeWidth="2"/>
      <line x1="10" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="46" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Pipe: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="8" y="24" width="48" height="16" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
      <rect x="12" y="28" width="40" height="8" fill="currentColor" opacity="0.3"/>
      <line x1="20" y1="24" x2="20" y2="40" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="24" x2="32" y2="40" stroke="currentColor" strokeWidth="2"/>
      <line x1="44" y1="24" x2="44" y2="40" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Fitting: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="20" y="8" width="10" height="20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="8" y="24" width="20" height="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="36" y="24" width="20" height="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="20" y="36" width="10" height="20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="25" cy="29" r="6" fill="currentColor"/>
    </svg>
  ),
  Clamp: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <path d="M 16 20 Q 16 12 24 12 L 40 12 Q 48 12 48 20 L 48 44 Q 48 52 40 52 L 24 52 Q 16 52 16 44 Z" 
            stroke="currentColor" strokeWidth="3" fill="none"/>
      <rect x="12" y="26" width="8" height="12" fill="currentColor"/>
      <rect x="44" y="26" width="8" height="12" fill="currentColor"/>
      <line x1="24" y1="22" x2="40" y2="22" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="32" x2="40" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="42" x2="40" y2="42" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Valve: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="8" y="28" width="20" height="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="36" y="28" width="20" height="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="32" cy="32" r="6" fill="currentColor"/>
      <rect x="28" y="12" width="8" height="14" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    </svg>
  ),
  Filter: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <path d="M 12 16 L 52 16 L 40 32 L 40 52 L 24 52 L 24 32 Z" 
            stroke="currentColor" strokeWidth="3" fill="none"/>
      <line x1="20" y1="22" x2="44" y2="22" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="2"/>
      <rect x="26" y="36" width="12" height="12" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  PVCPipe: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="12" y="20" width="40" height="24" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
      <rect x="16" y="24" width="32" height="16" fill="currentColor" opacity="0.2"/>
      <line x1="24" y1="20" x2="24" y2="44" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      <line x1="40" y1="20" x2="40" y2="44" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      <path d="M 4 26 L 12 26 M 4 38 L 12 38" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M 52 26 L 60 26 M 52 38 L 60 38" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  PolyethylenePipe: () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <path d="M 8 32 Q 16 20 24 32 Q 32 44 40 32 Q 48 20 56 32" 
            stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M 8 32 Q 16 20 24 32 Q 32 44 40 32 Q 48 20 56 32" 
            stroke="currentColor" strokeWidth="8" opacity="0.2"/>
      <circle cx="16" cy="26" r="2" fill="currentColor"/>
      <circle cx="32" cy="38" r="2" fill="currentColor"/>
      <circle cx="48" cy="26" r="2" fill="currentColor"/>
    </svg>
  ),
};

const categories = [
  {
    name: 'Люки чугунные',
    icon: CategoryIcons.ManholeCover,
    description: 'Чугунные люки разных типов и размеров',
    count: 6,
  },
  {
    name: 'Труба ППР',
    icon: CategoryIcons.Pipe,
    description: 'Полипропиленовые трубы для водопровода',
    count: 6,
  },
  {
    name: 'Фитинги ППР',
    icon: CategoryIcons.Fitting,
    description: 'Соединительные элементы для труб ППР',
    count: 6,
  },
  {
    name: 'Зажимы, хомуты',
    icon: CategoryIcons.Clamp,
    description: 'Крепежные элементы для труб',
    count: 2,
  },
  {
    name: 'Кран ППР',
    icon: CategoryIcons.Valve,
    description: 'Шаровые краны и запорная арматура',
    count: 6,
  },
  {
    name: 'Фильтры ППР',
    icon: CategoryIcons.Filter,
    description: 'Фильтры грубой и тонкой очистки',
    count: 6,
  },
  {
    name: 'Трубы ПВХ',
    icon: CategoryIcons.PVCPipe,
    description: 'ПВХ трубы для канализации',
    count: 6,
  },
  {
    name: 'Трубы полиэтиленовые',
    icon: CategoryIcons.PolyethylenePipe,
    description: 'ПНД трубы для водоснабжения',
    count: 6,
  },
];

export function CategoriesGrid() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Каталог товаров
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Широкий ассортимент строительных материалов для водоснабжения и канализации
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/category/${encodeURIComponent(category.name)}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-[#1e3a8a]"
              >
                <div className="p-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 text-white">
                      <Icon />
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xs md:text-sm text-gray-500 font-medium">
                      {category.count} товаров
                    </span>
                    <span className="text-[#1e3a8a] font-bold text-lg group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}