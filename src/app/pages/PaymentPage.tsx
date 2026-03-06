import { Link } from 'react-router';
import { ArrowLeft, CreditCard, QrCode, FileText, Banknote, Shield, CheckCircle, Phone, MessageCircle } from 'lucide-react';

export function PaymentPage() {
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
            Способы оплаты
          </h1>
          <p className="text-gray-600">
            Выберите удобный для вас способ оплаты товаров
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {/* Для физических лиц */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Для физических лиц
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Наличными */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Наличными
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Оплата наличными при получении товара курьеру или в пункте самовывоза.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-800 font-semibold">
                    ✓ Самый популярный способ
                  </p>
                </div>
              </div>

              {/* Банковской картой */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Банковской картой
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Оплата картой при получении через терминал. Принимаем Visa, MasterCard, Мир.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-800 font-semibold">
                    ✓ Быстро и безопасно
                  </p>
                </div>
              </div>

              {/* По QR-коду */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  По QR-коду
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Оплата через СБП, Тинькофф, Сбербанк и другие банковские приложения.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-xs text-purple-800 font-semibold">
                    ✓ Без комиссии
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Для юридических лиц */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Для юридических лиц
              </h2>
            </div>
            
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Безналичный расчёт
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Работаем по безналичному расчёту с НДС. После оформления заказа на сайте 
                    выставляем счёт на указанные реквизиты в течение 1 рабочего дня.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h4 className="font-bold text-gray-900">Порядок работы:</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <p className="text-gray-700">Оформляете заказ на сайте с указанием реквизитов организации</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <p className="text-gray-700">Получаете счёт на email в течение 1 рабочего дня</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <p className="text-gray-700">Оплачиваете счёт удобным способом</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      4
                    </div>
                    <p className="text-gray-700">После поступления оплаты отгружаем товар с полным пакетом документов</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Документы:</span> Выставляем счёт, счёт-фактуру, 
                  товарную накладную, УПД и другие необходимые документы.
                </p>
              </div>
            </div>
          </div>

          {/* Безопасность */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#1e3a8a]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Безопасность платежей
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Защищённые транзакции
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Все платежи проходят через защищённые каналы связи. 
                    Мы не храним данные ваших банковских карт.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Проверка товара
                  </h3>
                  <p className="text-gray-600 text-sm">
                    При получении вы можете проверить товар на комплектность 
                    и целостность до оплаты.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Официальные документы
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Выдаём кассовый чек и товарную накладную. 
                    Работаем полностью официально.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Гарантия возврата
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Если товар не подошёл, мы вернём деньги в соответствии 
                    с законодательством РФ.
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
                <span>Оплата производится только в рублях РФ</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>При оплате наличными просим подготовить сумму без сдачи</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Для юридических лиц отсрочка платежа обсуждается индивидуально</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Цены на сайте актуальны, но могут быть изменены без предварительного уведомления</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <span>Окончательная стоимость подтверждается менеджером при обработке заказа</span>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Нужна консультация?
            </h2>
            <p className="text-gray-600 mb-6">
              Если у вас остались вопросы по оплате, свяжитесь с нами
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="tel:+73912345678"
                className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#1e3a8a] transition"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Позвоните нам</p>
                  <p className="font-bold text-gray-900">+7 (391) 234-56-78</p>
                </div>
              </a>
              <button 
                className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#1e3a8a] transition"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Онлайн-чат</p>
                  <p className="font-bold text-gray-900">Написать в чат</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
