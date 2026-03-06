import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate, Link } from 'react-router';

export function Footer() {
  const navigate = useNavigate();

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
  };
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">СМАРТСТРОЙ</h3>
            <p className="text-gray-200 text-sm">
              Надёжный поставщик строительных материалов с 2010 года. 
              Качество, проверенное временем.
            </p>
          </div>

          {/* Информация */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-200 text-sm md:text-base">
              <li>
                <Link to="/payment" className="hover:text-white transition">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-white transition">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition">
                  Возврат товара
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Каталог товаров</h4>
            <ul className="space-y-2 text-gray-200 text-sm md:text-base">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="hover:text-white transition text-left"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Контакты</h4>
            <ul className="space-y-3 text-gray-200 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                <span>г. Калининград, ул. Промышленная, д. 15</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <a href="tel:+73912345678" className="hover:text-white transition">
                  +7 (391) 234-56-78
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <a href="tel:+78005005050" className="hover:text-white transition">
                  8 (800) 500-50-50
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <a href="mailto:info@smartstroy39.ru" className="hover:text-white transition">
                  info@smartstroy39.ru
                </a>
              </li>
            </ul>
            <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-300">
              <p>Пн-Пт: 8:00 - 18:00</p>
              <p>Сб: 9:00 - 15:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-gray-300 text-xs md:text-sm">
          <p>© 2026 СМАРТСТРОЙ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}