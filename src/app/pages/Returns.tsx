import { Package, ArrowLeft, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Returns() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1e3a8a] transition">
              Главная
            </Link>
            <span>/</span>
            <span className="text-gray-900">Возврат товара</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Заголовок */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e40af] transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Возврат товара
          </h1>
          <p className="text-gray-600">
            Мы заботимся о наших клиентах и готовы принять возврат товара в соответствии с законодательством РФ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-2 space-y-8">
            {/* Условия возврата */}
            <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Условия возврата</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  В соответствии с Законом РФ «О защите прав потребителей» вы имеете право вернуть или обменять 
                  качественный товар в течение <strong>14 дней</strong> с момента покупки (не считая дня покупки).
                </p>

                <div className="bg-blue-50 border-l-4 border-[#1e3a8a] p-4 rounded">
                  <p className="font-semibold text-[#1e3a8a] mb-2">Важные условия:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Товар не был в употреблении и сохранен его товарный вид</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Сохранены потребительские свойства, пломбы и фабричные ярлыки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Наличие товарного или кассового чека либо иного документа, подтверждающего оплату</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Сохранена оригинальная упаковка товара</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Товары, не подлежащие возврату */}
            <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                Товары, не подлежащие возврату
              </h3>
              
              <p className="text-gray-700 mb-4">
                В соответствии с Постановлением Правительства РФ № 2463, возврату не подлежат:
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Товары, отрезанные по метражу (трубы, кабели и т.д.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Товары, изготовленные под заказ по индивидуальным параметрам</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Товары надлежащего качества, имеющие индивидуально-определенные свойства</span>
                </li>
              </ul>
            </section>

            {/* Возврат некачественного товара */}
            <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Возврат некачественного товара
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Если товар оказался с браком или не соответствует заявленным характеристикам, 
                  вы можете вернуть его в течение гарантийного срока.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="font-semibold text-yellow-800 mb-2">При возврате товара ненадлежащего качества вы можете:</p>
                  <ul className="space-y-2 text-sm text-yellow-900">
                    <li>• Потребовать замены на товар этой же марки</li>
                    <li>• Потребовать замены на такой же товар другой марки с перерасчетом стоимости</li>
                    <li>• Потребовать соразмерного уменьшения покупной цены</li>
                    <li>• Потребовать незамедлительного безвозмездного устранения недостатков</li>
                    <li>• Отказаться от исполнения договора купли-продажи и потребовать возврата денег</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Порядок возврата */}
            <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Порядок возврата товара</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Свяжитесь с нами</h4>
                    <p className="text-gray-700 text-sm">
                      Позвоните по телефону <a href="tel:+73912345678" className="text-[#1e3a8a] hover:underline">+7 (391) 234-56-78</a> или 
                      напишите на почту <a href="mailto:info@smartstroy39.ru" className="text-[#1e3a8a] hover:underline">info@smartstroy39.ru</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Заполните заявление</h4>
                    <p className="text-gray-700 text-sm">
                      Наш менеджер поможет вам заполнить заявление на возврат товара
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Привезите товар</h4>
                    <p className="text-gray-700 text-sm">
                      Доставьте товар в наш офис по адресу: г. Калининград, ул. Промышленная, д. 15
                      (или мы можем организовать бесплатный забор при возврате некачественного товара)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Получите деньги</h4>
                    <p className="text-gray-700 text-sm">
                      Возврат денежных средств производится в течение 10 дней с момента получения товара
                      на банковскую карту или наличными
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#1e3a8a]" />
                <h3 className="text-lg font-bold text-gray-900">Нужна помощь?</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Телефон горячей линии:</p>
                  <a 
                    href="tel:+73912345678" 
                    className="text-lg font-semibold text-[#1e3a8a] hover:text-[#1e40af] transition"
                  >
                    +7 (391) 234-56-78
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Пн-Пт: 8:00 - 18:00, Сб: 9:00 - 15:00</p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Email для обращений:</p>
                  <a 
                    href="mailto:info@smartstroy39.ru" 
                    className="text-sm font-semibold text-[#1e3a8a] hover:text-[#1e40af] transition break-all"
                  >
                    info@smartstroy39.ru
                  </a>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Адрес офиса:</p>
                  <p className="text-sm font-semibold text-gray-900">
                    г. Калининград,<br />
                    ул. Промышленная, д. 15
                  </p>
                </div>

                <Link
                  to="/delivery"
                  className="block w-full bg-[#1e3a8a] text-white text-center py-3 rounded-lg hover:bg-[#1e40af] transition font-semibold mt-6"
                >
                  Условия доставки
                </Link>

                <Link
                  to="/payment"
                  className="block w-full border-2 border-[#1e3a8a] text-[#1e3a8a] text-center py-3 rounded-lg hover:bg-[#1e3a8a] hover:text-white transition font-semibold"
                >
                  Способы оплаты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
