import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Heart, ShoppingCart, Minus, Plus, Check, Truck, Shield, PackageCheck, Star } from 'lucide-react';

// Временные данные товаров (в реальном приложении - из API/базы данных)
const products = [
  {
    id: 1,
    name: 'Труба ППР PN20 D25',
    category: 'Труба ППР',
    price: 1250,
    oldPrice: 1450,
    inStock: true,
    unit: 'м',
    article: 'PPR-PN20-25',
    manufacturer: 'VALTEC',
    images: [
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
      'https://images.unsplash.com/photo-1766651897083-62a5379b3d7d?w=800',
    ],
    description: 'Полипропиленовая труба PN20 предназначена для монтажа систем холодного и горячего водоснабжения, отопления в жилых и производственных помещениях. Рабочая температура до +95°C.',
    specifications: {
      'Диаметр': '25 мм',
      'Толщина стенки': '4.2 мм',
      'Давление': 'PN20 (20 атм)',
      'Материал': 'Полипропилен тип 3',
      'Температура': 'до +95°C',
      'Длина отрезка': '4 метра',
      'Страна производства': 'Россия',
      'Гарантия': '10 лет',
    },
    features: [
      'Устойчивость к коррозии и химическим веществам',
      'Низкая теплопроводность',
      'Малый вес и простота монтажа',
      'Долгий срок службы более 50 лет',
      'Экологическая безопасность',
    ],
    reviews: [
      { author: 'Алексей М.', rating: 5, date: '15.02.2026', text: 'Отличная труба! Использовал для монтажа отопления в доме. Качество на высоте, легко паяется.' },
      { author: 'Сергей К.', rating: 5, date: '28.01.2026', text: 'Брал для водоснабжения на даче. Всё работает идеально, цена адекватная.' },
      { author: 'Дмитрий В.', rating: 4, date: '10.01.2026', text: 'Хорошая труба, но доставка немного задержалась. В остальном претензий нет.' },
    ],
  },
  {
    id: 2,
    name: 'Фитинги ППР угол 90° D20',
    category: 'Фитинги ППР',
    price: 350,
    inStock: true,
    unit: 'шт',
    article: 'FIT-90-20',
    manufacturer: 'PRO AQUA',
    images: [
      'https://images.unsplash.com/photo-1764712749001-3a5694e6db40?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
    ],
    description: 'Полипропиленовый угол 90° используется для изменения направления трубопровода под прямым углом. Подходит для систем водоснабжения и отопления.',
    specifications: {
      'Диаметр': '20 мм',
      'Угол поворота': '90 градусов',
      'Материал': 'Полипропилен тип 3',
      'Температура': 'до +95°C',
      'Давление': 'PN20 (20 атм)',
      'Страна производства': 'Россия',
      'Гарантия': '10 лет',
    },
    features: [
      'Простота монтажа методом пайки',
      'Высокая прочность соединения',
      'Устойчивость к перепадам температур',
      'Не подвержен коррозии',
    ],
    reviews: [
      { author: 'Иван П.', rating: 5, date: '20.02.2026', text: 'Качественные фитинги, хорошо паяются.' },
      { author: 'Михаил С.', rating: 5, date: '05.02.2026', text: 'Использую постоянно, проблем не было.' },
    ],
  },
  {
    id: 3,
    name: 'Кран шаровый ППР D20',
    category: 'Кран ППР',
    price: 580,
    inStock: true,
    unit: 'шт',
    article: 'BALL-PPR-20',
    manufacturer: 'VALTEC',
    images: [
      'https://images.unsplash.com/photo-1634756901182-c133d2871b66?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
    ],
    description: 'Шаровый кран из полипропилена для перекрытия потока воды. Надежная запорная арматура для систем водоснабжения и отопления.',
    specifications: {
      'Диаметр': '20 мм',
      'Тип': 'Шаровый полнопроходной',
      'Материал корпуса': 'Полипропилен',
      'Материал шара': 'Латунь хромированная',
      'Температура': 'до +90°C',
      'Давление': 'PN20 (20 атм)',
      'Страна производства': 'Россия',
      'Гарантия': '7 лет',
    },
    features: [
      'Поворот рукоятки на 90 градусов',
      'Минимальное гидравлическое сопротивление',
      'Надежное перекрытие потока',
      'Удобная рукоятка-бабочка',
    ],
    reviews: [
      { author: 'Николай Б.', rating: 5, date: '18.02.2026', text: 'Отличный кран, легко монтируется.' },
    ],
  },
  {
    id: 4,
    name: 'Люк чугунный тип Л ГОСТ 3634-99',
    category: 'Люки чугунные',
    price: 3200,
    oldPrice: 3800,
    inStock: true,
    unit: 'шт',
    article: 'MANHOLE-L-GOST',
    manufacturer: 'ЛМЗ',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
    ],
    description: 'Чугунный канализационный люк типа Л по ГОСТ 3634-99. Предназначен для установки в местах с легкой нагрузкой: тротуары, пешеходные зоны, газоны.',
    specifications: {
      'Тип': 'Л (легкий)',
      'Диаметр': '600 мм',
      'Материал': 'Чугун СЧ20',
      'Нагрузка': 'до 1.5 тонн',
      'Вес': '45 кг',
      'ГОСТ': '3634-99',
      'Страна производства': 'Россия',
      'Гарантия': '3 года',
    },
    features: [
      'Высокая прочность и долговечность',
      'Устойчивость к коррозии',
      'Соответствие ГОСТ стандартам',
      'Надежная фиксация крышки',
    ],
    reviews: [
      { author: 'Андрей К.', rating: 5, date: '10.02.2026', text: 'Качественный люк, установили во дворе.' },
      { author: 'Владимир Н.', rating: 5, date: '25.01.2026', text: 'Соответствует ГОСТу, рекомендую.' },
    ],
  },
  {
    id: 5,
    name: 'Фильтр грубой очистки ППР D25',
    category: 'Фильтры ППР',
    price: 890,
    inStock: true,
    unit: 'шт',
    article: 'FILTER-PPR-25',
    manufacturer: 'PRO AQUA',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      'https://images.unsplash.com/photo-1766330977065-4458b54c6d1a?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
    ],
    description: 'Фильтр грубой очистки для защиты системы водоснабжения от механических примесей. Устанавливается на входе системы.',
    specifications: {
      'Диаметр': '25 мм',
      'Тип фильтра': 'Сетчатый',
      'Размер ячейки': '500 мкм',
      'Материал корпуса': 'Полипропилен',
      'Материал сетки': 'Нержавеющая сталь',
      'Температура': 'до +90°C',
      'Давление': 'PN20 (20 атм)',
      'Страна производства': 'Россия',
      'Гарантия': '5 лет',
    },
    features: [
      'Защита от песка, ржавчины и окалины',
      'Съемная сетка для очистки',
      'Минимальная потеря давления',
      'Простота обслуживания',
    ],
    reviews: [
      { author: 'Дмитрий Л.', rating: 5, date: '12.02.2026', text: 'Хороший фильтр, легко чистится.' },
    ],
  },
  {
    id: 6,
    name: 'Хомут металлический оцинкованный 32-35мм',
    category: 'Зажимы/хомуты',
    price: 45,
    inStock: true,
    unit: 'шт',
    article: 'CLAMP-32-35',
    manufacturer: 'СТАНДАРТ',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
      'https://images.unsplash.com/photo-1612115482041-d78c0ca829c2?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
    ],
    description: 'Оцинкованный металлический хомут для надежного крепления труб к стене. Универсальное решение для монтажа.',
    specifications: {
      'Диаметр': '32-35 мм',
      'Материал': 'Сталь оцинкованная',
      'Покрытие': 'Цинк',
      'Тип крепления': 'Винтовой',
      'Ширина ленты': '12 мм',
      'Страна производства': 'Россия',
      'Гарантия': '2 года',
    },
    features: [
      'Надежная фиксация труб',
      'Защита от коррозии',
      'Простота монтажа',
      'Доступная цена',
    ],
    reviews: [
      { author: 'Сергей Т.', rating: 5, date: '08.02.2026', text: 'Качественные хомуты, держат хорошо.' },
    ],
  },
  {
    id: 7,
    name: 'Труба ПВХ D110 для канализации',
    category: 'Трубы ПВХ',
    price: 780,
    oldPrice: 920,
    inStock: true,
    unit: 'м',
    article: 'PVC-110-CAN',
    manufacturer: 'OSTENDORF',
    images: [
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
      'https://images.unsplash.com/photo-1766651897083-62a5379b3d7d?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
    ],
    description: 'ПВХ труба диаметром 110 мм для внутренней канализации. Надежное решение для отвода стоков.',
    specifications: {
      'Диаметр': '110 мм',
      'Толщина стенки': '3.2 мм',
      'Материал': 'Поливинилхлорид (ПВХ)',
      'Длина': '3 метра',
      'Цвет': 'Серый',
      'Температура': 'до +60°C',
      'Страна производства': 'Германия',
      'Гарантия': '10 лет',
    },
    features: [
      'Высокая химическая стойкость',
      'Гладкая внутренняя поверхность',
      'Малый вес',
      'Долговечность более 50 лет',
    ],
    reviews: [
      { author: 'Игорь В.', rating: 5, date: '22.02.2026', text: 'Отличные трубы, немецкое качество.' },
      { author: 'Олег Д.', rating: 5, date: '14.02.2026', text: 'Использовал для канализации, всё супер.' },
    ],
  },
  {
    id: 8,
    name: 'Труба полиэтиленовая ПНД D32',
    category: 'Трубы полиэтиленовые',
    price: 1100,
    inStock: true,
    unit: 'м',
    article: 'HDPE-32',
    manufacturer: 'ПОЛИПЛАСТИК',
    images: [
      'https://images.unsplash.com/photo-1766651897083-62a5379b3d7d?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
    ],
    description: 'Полиэтиленовая труба ПНД для холодного водоснабжения. Гибкая, прочная и долговечная.',
    specifications: {
      'Диаметр': '32 мм',
      'Материал': 'ПНД (полиэтилен низкого давления)',
      'Давление': 'PN10 (10 атм)',
      'Температура': 'до +40°C',
      'Цвет': 'Черный с синей полосой',
      'Длина': '100 метров в бухте',
      'Страна производства': 'Россия',
      'Гарантия': '10 лет',
    },
    features: [
      'Устойчивость к УФ-излучению',
      'Гибкость и эластичность',
      'Не подвержена коррозии',
      'Простота укладки',
    ],
    reviews: [
      { author: 'Павел Р.', rating: 5, date: '16.02.2026', text: 'Хорошая труба для водопровода на даче.' },
    ],
  },
  {
    id: 9,
    name: 'Фитинги ППР тройник D25',
    category: 'Фитинги ППР',
    price: 420,
    inStock: true,
    unit: 'шт',
    article: 'FIT-TEE-25',
    manufacturer: 'PRO AQUA',
    images: [
      'https://images.unsplash.com/photo-1764712749001-3a5694e6db40?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
    ],
    description: 'Полипропиленовый тройник для создания ответвлений в системах водоснабжения и отопления.',
    specifications: {
      'Диаметр': '25 мм',
      'Тип': 'Тройник равнопроходной',
      'Материал': 'Полипропилен тип 3',
      'Температура': 'до +95°C',
      'Давление': 'PN20 (20 атм)',
      'Страна производства': 'Россия',
      'Гарантия': '10 лет',
    },
    features: [
      'Надежное соединение',
      'Простота монтажа',
      'Высокая прочность',
      'Устойчивость к химическим веществам',
    ],
    reviews: [
      { author: 'Константин Ф.', rating: 5, date: '19.02.2026', text: 'Качественный фитинг, как и вся линейка.' },
    ],
  },
  {
    id: 10,
    name: 'Кран ППР с американкой D25',
    category: 'Кран ППР',
    price: 780,
    oldPrice: 890,
    inStock: true,
    unit: 'шт',
    article: 'BALL-AM-PPR-25',
    manufacturer: 'VALTEC',
    images: [
      'https://images.unsplash.com/photo-1634756901182-c133d2871b66?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
      'https://images.unsplash.com/photo-1729169927271-7826d8aae360?w=800',
    ],
    description: 'Ша��овый кран с американкой позволяет легко демонтировать участок трубопровода без вращения труб.',
    specifications: {
      'Диаметр': '25 мм',
      'Тип': 'С разъемным соединением',
      'Материал корпуса': 'Полипропилен',
      'Материал американки': 'Латунь никелированная',
      'Температура': 'до +90°C',
      'Давление': 'PN20 (20 атм)',
      'Страна производства': 'Россия',
      'Гарантия': '7 лет',
    },
    features: [
      'Разъемное соединение',
      'Удобство монтажа и демонтажа',
      'Надежное перекрытие',
      'Качественная арматура',
    ],
    reviews: [
      { author: 'Виктор Ш.', rating: 5, date: '21.02.2026', text: 'Очень удобно при обслуживании системы.' },
    ],
  },
  {
    id: 11,
    name: 'Зажим для труб двухсторонний 20-22мм',
    category: 'Зажимы/хомуты',
    price: 65,
    inStock: true,
    unit: 'шт',
    article: 'CLAMP-DOUBLE-20-22',
    manufacturer: 'СТАНДАРТ',
    images: [
      'https://images.unsplash.com/photo-1612115482041-d78c0ca829c2?w=800',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
    ],
    description: 'Двухсторонний зажим для параллельной прокладки двух труб. Экономия места и удобство монтажа.',
    specifications: {
      'Диаметр': '20-22 мм',
      'Материал': 'Пластик армированный',
      'Количество труб': '2',
      'Тип крепления': 'Дюбель + шуруп',
      'Цвет': 'Белый',
      'Страна производства': 'Россия',
      'Гарантия': '2 года',
    },
    features: [
      'Крепление двух труб одновременно',
      'Экономия пространства',
      'Надежная фиксация',
      'Легкий монтаж',
    ],
    reviews: [
      { author: 'Евгений М.', rating: 5, date: '09.02.2026', text: 'Удобная штука для монтажа.' },
    ],
  },
  {
    id: 12,
    name: 'Фильтр тонкой очистки ППР D20',
    category: 'Фильтры ППР',
    price: 1250,
    inStock: true,
    unit: 'шт',
    article: 'FILTER-FINE-PPR-20',
    manufacturer: 'PRO AQUA',
    images: [
      'https://images.unsplash.com/photo-1766330977065-4458b54c6d1a?w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=800',
    ],
    description: 'Фильтр тонкой очистки воды для систем водоснабжения. Обеспечивает высокое качество воды.',
    specifications: {
      'Диаметр': '20 мм',
      'Тип фильтра': 'Картриджный',
      'Степень очистки': '5 мкм',
      'Материал корпуса': 'Полипропилен',
      'Материал картриджа': 'Полипропиленовое волокно',
      'Температура': 'до +40°C',
      'Давление': 'PN10 (10 атм)',
      'Ресурс картриджа': '6 месяцев',
      'Страна производства': 'Россия',
      'Гарантия': '3 года',
    },
    features: [
      'Высокая степень очистки',
      'Удаление мелких частиц',
      'Улучшение качества воды',
      'Сменный картридж',
    ],
    reviews: [
      { author: 'Артем К.', rating: 5, date: '24.02.2026', text: 'Отличный фильтр, вода стала чище.' },
      { author: 'Роман Г.', rating: 5, date: '11.02.2026', text: 'Рекомендую для питьевой воды.' },
    ],
  },
];

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h2>
          <Link to="/" className="text-[#1e3a8a] hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const totalPrice = product.price * quantity;
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Хлебные крошки */}
        <div className="mb-4 md:mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e40af] font-semibold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Вернуться в каталог
          </Link>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1e3a8a] transition">Главная</Link>
            <span>/</span>
            <span className="hover:text-[#1e3a8a] transition cursor-pointer">{product.category}</span>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Галерея изображений */}
          <div className="bg-white rounded-lg p-4 md:p-6">
            <div className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  -{discount}%
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index ? 'border-[#1e3a8a]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - фото ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="bg-white rounded-lg p-4 md:p-6 mb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Артикул: {product.article}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews.length} отзыва)</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full transition ${
                    isFavorite ? 'bg-[#1e3a8a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-white' : ''}`} />
                </button>
              </div>

              <div className="mb-6">
                {product.oldPrice && (
                  <p className="text-lg text-gray-400 line-through mb-1">
                    {product.oldPrice.toLocaleString('ru-RU')} ₽
                  </p>
                )}
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-[#1e3a8a]">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-lg text-gray-600">/ {product.unit}</p>
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 ${
                product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                <Check className="w-5 h-5" />
                <span className="font-semibold">
                  {product.inStock ? 'В наличии на складе' : 'Нет в наличии'}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Количество ({product.unit})</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg transition"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-16 text-center font-bold text-xl">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg transition"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Итого:</p>
                    <p className="text-2xl font-bold text-[#1e3a8a]">
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || addedToCart}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition ${
                  addedToCart
                    ? 'bg-green-500 text-white cursor-default'
                    : product.inStock
                    ? 'bg-[#1e3a8a] hover:bg-[#1e40af] text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {addedToCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Производитель: <span className="font-semibold text-gray-700">{product.manufacturer}</span>
              </p>
            </div>

            {/* Преимущества */}
            <div className="bg-white rounded-lg p-4 md:p-6">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Truck className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Доставка</p>
                    <p className="text-xs text-gray-600">По Калининграду</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Shield className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Гарантия</p>
                    <p className="text-xs text-gray-600">10 лет</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <PackageCheck className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Качество</p>
                    <p className="text-xs text-gray-600">Сертифицировано</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Описание и характеристики */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Характеристики</h2>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600 font-medium">{key}</span>
                    <span className="text-gray-900 font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Особенности</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Отзывы ({product.reviews.length})
              </h2>
              <div className="space-y-4">
                {product.reviews.map((review, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                    <p className="text-gray-700 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg font-semibold hover:bg-[#1e3a8a] hover:text-white transition">
                Оставить отзыв
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}