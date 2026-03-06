import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, User, Building2, CreditCard, QrCode, FileText, CheckCircle, Package, Truck, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';

type CustomerType = 'individual' | 'legal';
type PaymentMethod = 'card' | 'qr' | 'invoice';
type DeliveryMethod = 'pickup' | 'delivery-city' | 'delivery-region';

interface CheckoutFormData {
  // Физ. лицо
  fullName?: string;
  phone?: string;
  email?: string;
  address?: string;
  comment?: string;
  
  // Юр. лицо
  companyName?: string;
  inn?: string;
  kpp?: string;
  legalAddress?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
}

export function Checkout() {
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState<CustomerType>('individual');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  // Данные корзины (в реальном приложении из контекста или state management)
  const cartItems = [
    { name: 'Труба ППР PN20 D25', quantity: 5, price: 1250, unit: 'м' },
    { name: 'Фитинги ППР угол 90°', quantity: 10, price: 350, unit: 'шт' },
    { name: 'Кран шаровый ППР D20', quantity: 3, price: 580, unit: 'шт' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Расчет доставки
  const getDeliveryFee = () => {
    if (deliveryMethod === 'pickup') return 0;
    if (deliveryMethod === 'delivery-city') {
      return subtotal >= 5000 ? 0 : 350;
    }
    if (deliveryMethod === 'delivery-region') {
      return 'По договоренности';
    }
    return 0;
  };
  
  const deliveryFee = getDeliveryFee();
  const total = typeof deliveryFee === 'number' ? subtotal + deliveryFee : subtotal;

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Order data:', { customerType, paymentMethod, deliveryMethod, ...data });
    setOrderPlaced(true);
    
    // Через 3 секунды перенаправим на главную
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Заказ оформлен!
          </h2>
          <p className="text-gray-600 mb-2">
            {customerType === 'individual' 
              ? 'Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время для подтверждения.' 
              : 'Счёт будет выставлен на указанные реквизиты в течение 1 рабочего дня.'}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Информация о заказе отправлена на указанный email.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Вернуться на главную
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
            to="/cart"
            className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e40af] font-semibold transition mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Вернуться в корзину
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Оформление заказа
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Форма заказа */}
            <div className="lg:col-span-2 space-y-6">
              {/* Выбор типа покупателя */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Тип покупателя
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setCustomerType('individual');
                      setPaymentMethod('card');
                    }}
                    className={`p-4 border-2 rounded-lg transition flex items-center gap-3 ${
                      customerType === 'individual'
                        ? 'border-[#1e3a8a] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <User className={`w-6 h-6 ${customerType === 'individual' ? 'text-[#1e3a8a]' : 'text-gray-400'}`} />
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Физическое лицо</p>
                      <p className="text-sm text-gray-500">Оплата картой или QR</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCustomerType('legal');
                      setPaymentMethod('invoice');
                    }}
                    className={`p-4 border-2 rounded-lg transition flex items-center gap-3 ${
                      customerType === 'legal'
                        ? 'border-[#1e3a8a] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Building2 className={`w-6 h-6 ${customerType === 'legal' ? 'text-[#1e3a8a]' : 'text-gray-400'}`} />
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Юридическое лицо</p>
                      <p className="text-sm text-gray-500">Выставление счёта</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Форма для физического лица */}
              {customerType === 'individual' && (
                <>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Способ получения
                    </h2>
                    <div className="space-y-3">
                      <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                        deliveryMethod === 'pickup' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name="delivery"
                          value="pickup"
                          checked={deliveryMethod === 'pickup'}
                          onChange={() => setDeliveryMethod('pickup')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Package className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Самовывоз</span>
                            <span className="ml-auto text-green-600 font-semibold">Бесплатно</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            г. Калининград, ул. Промышленная, д. 15
                          </p>
                          <p className="text-xs text-gray-500">
                            Пн-Пт: 8:00-18:00, Сб: 9:00-15:00
                          </p>
                        </div>
                      </label>
                      
                      <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                        deliveryMethod === 'delivery-city' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name="delivery"
                          value="delivery-city"
                          checked={deliveryMethod === 'delivery-city'}
                          onChange={() => setDeliveryMethod('delivery-city')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Truck className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Доставка по Калининграду</span>
                            <span className={`ml-auto font-semibold ${subtotal >= 5000 ? 'text-green-600' : 'text-gray-900'}`}>
                              {subtotal >= 5000 ? 'Бесплатно' : '350 ₽'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {subtotal >= 5000 
                              ? 'Бесплатная доставка при заказе от 5 000 ₽' 
                              : 'Бесплатно от 5 000 ₽ • В день заказа или на следующий день'}
                          </p>
                        </div>
                      </label>
                      
                      <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                        deliveryMethod === 'delivery-region' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name="delivery"
                          value="delivery-region"
                          checked={deliveryMethod === 'delivery-region'}
                          onChange={() => setDeliveryMethod('delivery-region')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Доставка по области</span>
                            <span className="ml-auto text-gray-600 font-semibold text-sm">По договоренности</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Рассчитывается индивидуально • 1-3 дня
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Контактные данные
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          ФИО *
                        </label>
                        <input
                          type="text"
                          {...register('fullName', { required: 'Обязательное поле' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                          placeholder="Иванов Иван Иванович"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Телефон *
                          </label>
                          <input
                            type="tel"
                            {...register('phone', { required: 'Обязательное поле' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="+7 (900) 123-45-67"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            {...register('email', { required: 'Обязательное поле' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="example@mail.ru"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {deliveryMethod !== 'pickup' && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Адрес доставки
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {deliveryMethod === 'delivery-city' ? 'Адрес в Калининграде *' : 'Адрес в Калининградской области *'}
                          </label>
                          <input
                            type="text"
                            {...register('address', { required: deliveryMethod !== 'pickup' ? 'Обязательное поле' : false })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder={deliveryMethod === 'delivery-city' ? 'ул. Ленина, д. 10, кв. 5' : 'г. Светлогорск, ул. Ленина, д. 10'}
                          />
                          {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Комментарий к заказу
                          </label>
                          <textarea
                            {...register('comment')}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none resize-none"
                            placeholder="Код домофона, желаемое время доставки и т.д."
                          />
                        </div>
                        {deliveryMethod === 'delivery-region' && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-gray-700">
                              <span className="font-semibold">Обратите внимание:</span> Стоимость доставки по области рассчитывается индивидуально. 
                              Наш менеджер свяжется с вами для уточнения деталей.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {deliveryMethod === 'pickup' && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Комментарий к заказу
                      </h2>
                      <textarea
                        {...register('comment')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none resize-none"
                        placeholder="Желаемое время получения и другие пожелания"
                      />
                    </div>
                  )}

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Способ оплаты
                    </h2>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CreditCard className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Банковская карта</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Оплата картой курьеру при получении
                          </p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                        <input
                          type="radio"
                          name="payment"
                          value="qr"
                          checked={paymentMethod === 'qr'}
                          onChange={() => setPaymentMethod('qr')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <QrCode className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Оплата по QR-коду</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            СБП, Тинькофф, Сбербанк и другие банки
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Форма для юридического лица */}
              {customerType === 'legal' && (
                <>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Способ получения
                    </h2>
                    <div className="space-y-3">
                      <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                        deliveryMethod === 'pickup' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name="delivery"
                          value="pickup"
                          checked={deliveryMethod === 'pickup'}
                          onChange={() => setDeliveryMethod('pickup')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Package className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Самовывоз</span>
                            <span className="ml-auto text-green-600 font-semibold">Бесплатно</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            г. Калининград, ул. Промышленная, д. 15
                          </p>
                          <p className="text-xs text-gray-500">
                            Пн-Пт: 8:00-18:00, Сб: 9:00-15:00
                          </p>
                        </div>
                      </label>
                      
                      <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                        deliveryMethod === 'delivery-city' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name="delivery"
                          value="delivery-city"
                          checked={deliveryMethod === 'delivery-city'}
                          onChange={() => setDeliveryMethod('delivery-city')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Truck className="w-5 h-5 text-[#1e3a8a]" />
                            <span className="font-semibold text-gray-900">Доставка</span>
                            <span className="ml-auto text-gray-600 font-semibold text-sm">По договоренности</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Стоимость уточняется менеджером • Доставка по городу и области
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Реквизиты организации
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Название организации *
                        </label>
                        <input
                          type="text"
                          {...register('companyName', { required: 'Обязательное поле' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                          placeholder='ООО "Стройкомплект"'
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            ИНН *
                          </label>
                          <input
                            type="text"
                            {...register('inn', { required: 'Обязательное поле' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="1234567890"
                          />
                          {errors.inn && (
                            <p className="text-red-500 text-sm mt-1">{errors.inn.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            КПП *
                          </label>
                          <input
                            type="text"
                            {...register('kpp', { required: 'Обязательное поле' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="123456789"
                          />
                          {errors.kpp && (
                            <p className="text-red-500 text-sm mt-1">{errors.kpp.message}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Юридический адрес *
                        </label>
                        <input
                          type="text"
                          {...register('legalAddress', { required: 'Обязательное поле' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                          placeholder="г. Калининград, ул. Ленина, д. 10, оф. 5"
                        />
                        {errors.legalAddress && (
                          <p className="text-red-500 text-sm mt-1">{errors.legalAddress.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Контактное лицо
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          ФИО контактного лица *
                        </label>
                        <input
                          type="text"
                          {...register('contactPerson', { required: 'Обязательное поле' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                          placeholder="Иванов Иван Иванович"
                        />
                        {errors.contactPerson && (
                          <p className="text-red-500 text-sm mt-1">{errors.contactPerson.message}</p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Телефон *
                          </label>
                          <input
                            type="tel"
                            {...register('contactPhone', { required: 'Обязательное поле' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="+7 (900) 123-45-67"
                          />
                          {errors.contactPhone && (
                            <p className="text-red-500 text-sm mt-1">{errors.contactPhone.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            {...register('contactEmail', { required: 'Обязательное поле' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="example@company.ru"
                          />
                          {errors.contactEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {deliveryMethod !== 'pickup' && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Адрес доставки
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Адрес доставки *
                          </label>
                          <input
                            type="text"
                            {...register('address', { required: deliveryMethod !== 'pickup' ? 'Обязательное поле' : false })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none"
                            placeholder="г. Калининград, ул. Промышленная, д. 20"
                          />
                          {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Комментарий к заказу
                          </label>
                          <textarea
                            {...register('comment')}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 focus:outline-none resize-none"
                            placeholder="Особые условия разгрузки, желаемое время и т.д."
                          />
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Обратите внимание:</span> Стоимость доставки для юридических лиц 
                            обсуждается индивидуально и может быть включена в счёт отдельной строкой.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start gap-3">
                      <FileText className="w-6 h-6 text-[#1e3a8a] mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Выставление счёта
                        </h3>
                        <p className="text-gray-600 text-sm">
                          После оформления заказа счёт будет выставлен на указанные реквизиты 
                          в течение 1 рабочего дня. Документы отправим на указанный email.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Итоги заказа */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Ваш заказ
                </h2>

                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} <span className="text-gray-400">× {item.quantity}</span>
                      </span>
                      <span className="font-semibold text-gray-900">
                        {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Товары</span>
                    <span className="font-semibold">
                      {subtotal.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Доставка</span>
                    <span className={`font-semibold ${
                      deliveryFee === 0 || deliveryFee === 'По договоренности' 
                        ? 'text-green-600' 
                        : ''
                    }`}>
                      {typeof deliveryFee === 'string' 
                        ? deliveryFee 
                        : deliveryFee === 0 
                          ? 'Бесплатно' 
                          : `${deliveryFee} ₽`}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Итого:</span>
                      <span className="text-2xl font-bold text-[#1e3a8a]">
                        {typeof deliveryFee === 'string' 
                          ? `${subtotal.toLocaleString('ru-RU')} ₽ + доставка` 
                          : total.toLocaleString('ru-RU') + ' ₽'}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white py-4 rounded-lg font-bold text-lg transition mb-4"
                >
                  {customerType === 'individual' ? 'Оформить заказ' : 'Запросить счёт'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
