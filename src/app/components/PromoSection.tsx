import { ProductCard } from './ProductCard';
import { useState, useEffect } from 'react';
import { Tag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Труба ППР PN20 D25',
    price: 1250,
    oldPrice: 1450,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-14%',
    category: 'Труба ППР',
  },
  {
    id: 2,
    name: 'Фитинги ППР угол 90° D20',
    price: 350,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фитинги ППР',
  },
  {
    id: 3,
    name: 'Кран шаровый ППР D20',
    price: 580,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Кран ППР',
  },
  {
    id: 4,
    name: 'Люк чугунный тип Л ГОСТ 3634-99',
    price: 3200,
    oldPrice: 3800,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-16%',
    category: 'Люки чугунные',
  },
  {
    id: 5,
    name: 'Фильтр грубой очистки ППР D25',
    price: 890,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фильтры ППР',
  },
  {
    id: 6,
    name: 'Хомут металлический оцинкованный 32-35мм',
    price: 45,
    image: 'https://images.unsplash.com/photo-1676039708998-dd17ae27c90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNsYW1wJTIwaG9zZXxlbnwxfHx8fDE3NzI3MjA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Зажимы, хомуты',
  },
  {
    id: 7,
    name: 'Труба ПВХ D110 для канализации',
    price: 780,
    oldPrice: 920,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-15%',
    category: 'Трубы ПВХ',
  },
  {
    id: 8,
    name: 'Труба полиэтиленовая ПНД D32',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы полиэтиленовые',
  },
  {
    id: 9,
    name: 'Фитинги ППР тройник D25',
    price: 420,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фитинги ППР',
  },
  {
    id: 10,
    name: 'Кран ППР с американкой D25',
    price: 780,
    oldPrice: 890,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-12%',
    category: 'Кран ППР',
  },
  {
    id: 11,
    name: 'Зажим для труб двухсторонний 20-22мм',
    price: 65,
    image: 'https://images.unsplash.com/photo-1676039708998-dd17ae27c90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNsYW1wJTIwaG9zZXxlbnwxfHx8fDE3NzI3MjA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Зажимы, хомуты',
  },
  {
    id: 12,
    name: 'Фильтр тонкой очистки ППР D20',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фильтры ППР',
  },
];

export function PromoSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sale'>('all');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Проверяем URL параметр при монтировании
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    const category = urlParams.get('category');
    
    if (filter === 'sale') {
      setActiveFilter('sale');
    }
    
    if (category) {
      setActiveCategory(category);
    }

    // Слушаем событие изменения фильтра
    const handleFilterChange = (event: any) => {
      if (event.detail.filter === 'sale') {
        setActiveFilter('sale');
      }
      if (event.detail.category) {
        setActiveCategory(event.detail.category);
        setActiveFilter('all');
      }
    };

    window.addEventListener('filterChange', handleFilterChange);
    return () => window.removeEventListener('filterChange', handleFilterChange);
  }, []);

  // Фильтрация товаров
  let displayedProducts = products;
  
  // Фильтр по категории
  if (activeCategory) {
    displayedProducts = displayedProducts.filter(p => p.category === activeCategory);
  }
  
  // Фильтр по акциям
  if (activeFilter === 'sale') {
    displayedProducts = displayedProducts.filter(p => p.discount);
  }

  const saleCount = products.filter(p => p.discount).length;

  return (
    <section id="catalog-section" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Каталог товаров
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Качественные строительные материалы с доставкой по Калининграду
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 flex-wrap">
          <button
            onClick={() => {
              setActiveFilter('all');
              setActiveCategory(null);
              const urlParams = new URLSearchParams(window.location.search);
              urlParams.delete('filter');
              urlParams.delete('category');
              window.history.replaceState({}, '', window.location.pathname);
            }}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              activeFilter === 'all' && !activeCategory
                ? 'bg-[#1e3a8a] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span>Все товары</span>
            <span className={`px-2 py-0.5 rounded-full text-sm ${
              activeFilter === 'all' && !activeCategory ? 'bg-white text-[#1e3a8a]' : 'bg-gray-100 text-gray-700'
            }`}>
              {products.length}
            </span>
          </button>
          <button
            onClick={() => {
              setActiveFilter('sale');
              setActiveCategory(null);
              const urlParams = new URLSearchParams(window.location.search);
              urlParams.set('filter', 'sale');
              urlParams.delete('category');
              window.history.replaceState({}, '', '?' + urlParams.toString());
            }}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              activeFilter === 'sale' && !activeCategory
                ? 'bg-[#1e3a8a] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Акции</span>
            <span className={`px-2 py-0.5 rounded-full text-sm ${
              activeFilter === 'sale' && !activeCategory ? 'bg-white text-[#1e3a8a]' : 'bg-red-100 text-red-700'
            }`}>
              {saleCount}
            </span>
          </button>
        </div>
        
        {/* Индикатор активной категории */}
        {activeCategory && (
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 flex items-center gap-3">
              <span className="text-gray-700">Категория: <strong>{activeCategory}</strong></span>
              <button
                onClick={() => {
                  setActiveCategory(null);
                  const urlParams = new URLSearchParams(window.location.search);
                  urlParams.delete('category');
                  window.history.replaceState({}, '', urlParams.toString() ? '?' + urlParams.toString() : window.location.pathname);
                }}
                className="text-gray-500 hover:text-gray-700 font-semibold"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              discount={product.discount}
            />
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Товары не найдены</p>
          </div>
        )}

        <div className="text-center mt-8 md:mt-10">
          <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-base md:text-lg font-semibold transition">
            Показать ещё товары
          </button>
        </div>
      </div>
    </section>
  );
}