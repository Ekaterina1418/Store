import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  unit: string;
  inStock: boolean;
  category: string;
}

const initialFavorites: FavoriteItem[] = [
  {
    id: 1,
    name: 'Труба ППР PN20 D25',
    price: 1250,
    oldPrice: 1450,
    image: 'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=400',
    unit: 'м',
    inStock: true,
    category: 'Труба ППР',
  },
  {
    id: 2,
    name: 'Фитинги ППР угол 90° D20',
    price: 350,
    image: 'https://images.unsplash.com/photo-1764712749001-3a5694e6db40?w=400',
    unit: 'шт',
    inStock: true,
    category: 'Фитинги ППР',
  },
  {
    id: 3,
    name: 'Кран шаровый ППР D20',
    price: 580,
    image: 'https://images.unsplash.com/photo-1634756901182-c133d2871b66?w=400',
    unit: 'шт',
    inStock: true,
    category: 'Кран ППР',
  },
  {
    id: 4,
    name: 'Люк чугунный тип Л ГОСТ 3634-99',
    price: 3200,
    oldPrice: 3800,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
    unit: 'шт',
    inStock: true,
    category: 'Люки чугунные',
  },
  {
    id: 5,
    name: 'Фильтр грубой очистки ППР D25',
    price: 890,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
    unit: 'шт',
    inStock: false,
    category: 'Фильтры ППР',
  },
  {
    id: 6,
    name: 'Хомут металлический оцинкованный 32-35мм',
    price: 45,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400',
    unit: 'шт',
    inStock: true,
    category: 'Зажимы, хомуты',
  },
];

export function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(initialFavorites);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const removeFromFavorites = (id: number) => {
    setFavorites(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    setAddedToCart(prev => [...prev, id]);
    setTimeout(() => {
      setAddedToCart(prev => prev.filter(itemId => itemId !== id));
    }, 2000);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-12 bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <Heart className="w-20 h-20 md:w-24 md:h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Список избранного пуст
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8">
            Добавляйте товары в избранное, чтобы не потерять их и купить позже
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-6 md:mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e40af] font-semibold transition mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            На главную
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Избранное
              </h1>
              <p className="text-gray-600 mt-2">
                {favorites.length} {favorites.length === 1 ? 'товар' : favorites.length < 5 ? 'товара' : 'товаров'}
              </p>
            </div>
            {favorites.length > 0 && (
              <button
                onClick={() => setFavorites([])}
                className="hidden sm:flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition"
              >
                <Trash2 className="w-5 h-5" />
                Очистить всё
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group relative"
            >
              {/* Кнопка удаления */}
              <button
                onClick={() => removeFromFavorites(item.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-600 hover:bg-red-50 transition shadow-sm"
                aria-label="Удалить из избранного"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              {/* Изображение */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                {item.oldPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                  </div>
                )}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded font-semibold text-sm">
                      Нет в наличии
                    </span>
                  </div>
                )}
              </div>

              {/* Информация */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem]">
                  {item.name}
                </h3>

                <div className="mb-4">
                  {item.oldPrice && (
                    <p className="text-sm text-gray-400 line-through mb-1">
                      {item.oldPrice.toLocaleString('ru-RU')} ₽
                    </p>
                  )}
                  <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-bold text-[#1e3a8a]">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-sm text-gray-500">/ {item.unit}</p>
                  </div>
                </div>

                {item.inStock ? (
                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={addedToCart.includes(item.id)}
                    className={`w-full py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                      addedToCart.includes(item.id)
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-[#1e3a8a] hover:bg-[#1e40af] text-white'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {addedToCart.includes(item.id) ? 'Добавлено' : 'В корзину'}
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-500 py-2.5 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Нет в наличии
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка очистить всё (мобильная версия) */}
        {favorites.length > 0 && (
          <div className="sm:hidden mt-6">
            <button
              onClick={() => setFavorites([])}
              className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-700 py-3 border-2 border-red-600 rounded-lg font-semibold transition"
            >
              <Trash2 className="w-5 h-5" />
              Очистить всё избранное
            </button>
          </div>
        )}

        {/* Информационный блок */}
        <div className="mt-8 md:mt-12 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Heart className="w-6 h-6 text-[#1e3a8a]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Почему стоит использовать избранное?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a8a] font-bold mt-1">•</span>
                  <span>Не потеряете понравившиеся товары</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a8a] font-bold mt-1">•</span>
                  <span>Сможете сравнить характеристики и цены</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a8a] font-bold mt-1">•</span>
                  <span>Получите уведомление, когда товар появится в наличии</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a8a] font-bold mt-1">•</span>
                  <span>Узнаете первыми о скидках на избранные товары</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
