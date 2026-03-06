import { useState } from 'react';
import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Труба ППР PN20 D25',
    price: 1250,
    quantity: 5,
    image: 'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=400',
    unit: 'м',
  },
  {
    id: 2,
    name: 'Фитинги ППР угол 90°',
    price: 350,
    quantity: 10,
    image: 'https://images.unsplash.com/photo-1764712749001-3a5694e6db40?w=400',
    unit: 'шт',
  },
  {
    id: 3,
    name: 'Кран шаровый ППР D20',
    price: 580,
    quantity: 3,
    image: 'https://images.unsplash.com/photo-1634756901182-c133d2871b66?w=400',
    unit: 'шт',
  },
];

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-12">
        <div className="text-center">
          <ShoppingCart className="w-20 h-20 md:w-24 md:h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Корзина пуста
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8">
            Добавьте товары из каталога, чтобы оформить заказ
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
            Продолжить покупки
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Корзина
          </h1>
          <p className="text-gray-600 mt-2">
            {totalItems} {totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Список товаров */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 md:p-6 ${
                    index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex gap-4">
                    {/* Изображение товара */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Информация о товаре */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[#1e3a8a] font-bold text-lg md:text-xl mb-3">
                        {item.price.toLocaleString('ru-RU')} ₽
                        <span className="text-sm text-gray-500 font-normal ml-1">
                          / {item.unit}
                        </span>
                      </p>

                      <div className="flex items-center justify-between gap-4">
                        {/* Количество */}
                        <div className="flex items-center gap-2 md:gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                            aria-label="Уменьшить количество"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-semibold text-base md:text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                            aria-label="Увеличить количество"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Сумма и удаление */}
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="text-right">
                            <p className="font-bold text-lg md:text-xl text-gray-900">
                              {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            aria-label="Удалить товар"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Итоговая информация */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Итого
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Товары ({totalItems})</span>
                  <span className="font-semibold">
                    {subtotal.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Доставка</span>
                  <span className={`font-semibold ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                    {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
                  </span>
                </div>
                {subtotal < 10000 && (
                  <p className="text-sm text-gray-500">
                    До бесплатной доставки осталось{' '}
                    <span className="font-semibold text-[#1e3a8a]">
                      {(10000 - subtotal).toLocaleString('ru-RU')} ₽
                    </span>
                  </p>
                )}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Всего:</span>
                    <span className="text-2xl font-bold text-[#1e3a8a]">
                      {total.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white py-3.5 md:py-4 rounded-lg font-bold text-base md:text-lg transition mb-3 text-center"
              >
                Оформить заказ
              </Link>

              <div className="text-center text-sm text-gray-500">
                <p>Доставка по Калининграду и области</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Способы оплаты:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Наличными при получении</li>
                  <li>• Картой курьеру</li>
                  <li>• Безналичный расчёт</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
