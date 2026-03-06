import { Search, Heart, ShoppingCart, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);

  const categories = [
    'Люки чугунные',
    'Труба ППР',
    'Фитинги ППР',
    'Зажимы, хомуты',
    'Кран ППР',
    'Фильтры ППР',
    'Трубы ПВХ',
    'Трубы полиэтиленовые',
  ];

  const handleCategoryClick = (category: string) => {
    // Если не на главной, сначала переходим на главную
    if (window.location.pathname !== '/') {
      navigate('/?category=' + encodeURIComponent(category));
      setTimeout(() => {
        const element = document.getElementById('catalog-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Уже на главной - просто прокручиваем и фильтруем
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('category', category);
      window.history.replaceState({}, '', '?' + urlParams.toString());
      
      // Отправляем событие для фильтрации
      window.dispatchEvent(new CustomEvent('filterChange', { detail: { category } }));
      
      // Прокручиваем к каталогу
      const element = document.getElementById('catalog-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // Закрываем меню
    setIsCatalogOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileCatalogOpen(false);
  };

  const menuItems = [
    { name: 'Оплата', href: '/payment' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'Возврат товара', href: '/returns' },
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'О нас', href: '/about' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Верхняя панель */}
      <div className="bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-6 text-xs md:text-sm">
            <a href="tel:+73912345678" className="flex items-center gap-1 md:gap-2 hover:text-gray-200 transition">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+7 (391) 234-56-78</span>
              <span className="sm:hidden">Звонок</span>
            </a>
            <span className="hidden md:inline">Пн-Пт: 8:00 - 18:00, Сб: 9:00 - 15:00</span>
          </div>
          <button className="bg-white text-[#1e3a8a] px-2 md:px-4 py-1 rounded text-xs md:text-sm hover:bg-gray-100 transition">
            Заказать звонок
          </button>
        </div>
      </div>

      {/* Основная шапка */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-8">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-[#1e3a8a]">СМАРТСТРОЙ</h1>
              <p className="text-[10px] md:text-xs text-gray-500 hidden sm:block">Строительные материалы</p>
            </div>
          </Link>

          {/* Бургер меню (мобильная версия) */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#1e3a8a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Поиск (десктоп) */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#1e3a8a] text-white rounded-md hover:bg-[#1e40af] transition">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Иконки (десктоп) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/favorites" className="flex flex-col items-center gap-1 text-gray-700 hover:text-[#1e3a8a] transition relative">
              <Heart className="w-6 h-6" />
              <span className="text-xs">Избранное</span>
              <span className="absolute -top-1 -right-1 bg-[#1e3a8a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                6
              </span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center gap-1 text-gray-700 hover:text-[#1e3a8a] transition relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">Корзина</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Иконки корзины и избранного (мобильная версия) */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/favorites" className="text-gray-700 hover:text-[#1e3a8a] transition relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#1e3a8a] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                6
              </span>
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-[#1e3a8a] transition relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Поиск (мобильная версия) */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full px-3 py-2 pr-10 border-2 border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:outline-none text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#1e3a8a] text-white rounded-md hover:bg-[#1e40af] transition">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Меню (десктоп) */}
      <nav className="hidden md:block bg-gray-100 border-t border-gray-200 relative z-[60]">
        <div className="container mx-auto px-4">
          <ul className="flex items-center py-3">
            {/* Единое выпадающее меню */}
            <li className="relative">
              <button
                onMouseEnter={() => setIsCatalogOpen(true)}
                onMouseLeave={() => setIsCatalogOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-[#1e3a8a] whitespace-nowrap transition font-semibold text-lg"
              >
                Меню
                <ChevronDown className={`w-5 h-5 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Выпадающее меню со всеми пунктами */}
              {isCatalogOpen && (
                <div
                  onMouseEnter={() => setIsCatalogOpen(true)}
                  onMouseLeave={() => setIsCatalogOpen(false)}
                  className="absolute top-full left-0 mt-0 bg-white shadow-2xl rounded-b-lg border border-gray-200 py-3 min-w-[280px] z-[70]"
                >
                  {/* Категории товаров */}
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Каталог товаров</p>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a8a] rounded transition text-sm"
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Остальные пункты меню */}
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Информация</p>
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a8a] rounded transition text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <>
          {/* Затемнение фона */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Выдвижное меню слева */}
          <div className="fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-[70] md:hidden overflow-y-auto">
            {/* Заголовок меню */}
            <div className="bg-[#1e3a8a] text-white p-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">СМАРТСТРОЙ</h2>
                <p className="text-xs text-gray-200">Меню</p>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4">
              <nav className="space-y-2">
                {/* Каталог товаров с выпадающим списком */}
                <div>
                  <button
                    onClick={() => setIsMobileCatalogOpen(!isMobileCatalogOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a8a] rounded-lg transition font-semibold"
                  >
                    <span>Каталог товаров</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileCatalogOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Подкатегории */}
                  {isMobileCatalogOpen && (
                    <div className="ml-2 mt-1 space-y-1">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className="block w-full text-left py-2.5 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#1e3a8a] rounded-lg transition text-sm border-l-2 border-transparent hover:border-[#1e3a8a]"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Разделитель */}
                <div className="border-t border-gray-200 my-3"></div>

                {/* Остальные пункты меню */}
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a8a] rounded-lg transition font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Дополнительные кнопки */}
              <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                <a 
                  href="tel:+73912345678"
                  className="w-full flex items-center gap-3 py-3 px-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition"
                >
                  <Phone className="w-5 h-5" />
                  <span>+7 (391) 234-56-78</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}