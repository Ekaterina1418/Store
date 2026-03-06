import { Link } from 'react-router';
import { ArrowLeft, Truck, Package, MapPin, Clock, Building2 } from 'lucide-react';

export function DeliveryPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Доставка товаров
          </h1>
          <p className="text-gray-600">
            Информация о способах и условиях доставки строительных материалов
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {/* Способы доставки */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Способы получения товара
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Самовывоз */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Самовывоз
                </h3>
                <p className="text-green-600 font-bold mb-3">Бесплатно</p>
                <p className="text-gray-600 text-sm mb-3">
                  Забрать заказ можно со склада по адресу:
                </p>
                <p className="font-semibold text-gray-900 mb-2">
                  г. Калининград, ул. Промышленная, д. 15
                </p>
                <p className="text-sm text-gray-600">
                  Пн-Пт: 8:00 - 18:00<br />
                  Сб: 9:00 - 15:00<br />
                  Вс: выходной
                </p>
              </div>

              {/* Доставка по городу */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Доставка по городу
                </h3>
                <p className="text-gray-900 font-bold mb-3">350 ₽</p>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="text-green-600 font-semibold">Бесплатно</span> при заказе от 5 000 ₽
                </p>
                <p className="text-sm text-gray-600">
                  Доставка осуществляется в день заказа или на следующий рабочий день.
                </p>
              </div>

              {/* Доставка по области */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Доставка по области
                </h3>
                <p className="text-gray-900 font-bold mb-3">По договоренности</p>
                <p className="text-sm text-gray-600 mb-3">
                  Стоимость рассчитывается индивидуально в зависимости от расстояния и объёма заказа.
                </p>
                <p className="text-sm text-gray-600">
                  Срок доставки: 1-3 рабочих дня
                </p>
              </div>
            </div>
          </div>

          {/* Условия доставки */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Условия доставки
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    График доставки
                  </h3>
                  <p className="text-gray-600">
                    Понедельник - Пятница: 9:00 - 18:00<br />
                    Суббота: 10:00 - 15:00<br />
                    Воскресенье: выходной
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Разгрузка товара
                  </h3>
                  <p className="text-gray-600">
                    Разгрузка товара осуществляется силами покупателя. 
                    Наш водитель поможет разгрузить товар у подъезда или ворот.
                    Подъём на этаж и занос в помещение обсуждается отдельно и оплачивается дополнительно.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Для юридических лиц
                  </h3>
                  <p className="text-gray-600">
                    Для организаций стоимость доставки обсуждается индивидуально 
                    и может быть включена в счёт отдельной строкой. 
                    При больших объёмах возможны специальные условия.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Важная информация */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Важная информация
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Доставка осуществляется только по Калининграду и Калининградской области</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>При получении обязательно проверьте комплектность и целостность товара</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Точное время доставки согласовывается с менеджером при подтверждении заказа</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Крупногабаритные грузы доставляются на специальном транспорте, стоимость уточняйте у менеджера</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Мы оставляем за собой право отказать в доставке при отсутствии подъездных путей</span>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Остались вопросы?
            </h2>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами любым удобным способом, и мы подробно расскажем об условиях доставки
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="tel:+73912345678"
                className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#1e3a8a] transition"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#1e3a8a] font-bold">☎</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Позвоните нам</p>
                  <p className="font-bold text-gray-900">+7 (391) 234-56-78</p>
                </div>
              </a>
              <a 
                href="mailto:info@smartstroy39.ru"
                className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#1e3a8a] transition"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#1e3a8a] font-bold">✉</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Напишите нам</p>
                  <p className="font-bold text-gray-900">info@smartstroy39.ru</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
