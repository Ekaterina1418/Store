import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    id: 1,
    title: 'Скидка 22% на трубы ППР',
    description: 'Успейте купить популярные трубы и фитинги ППР по сниженным ценам до конца месяца',
    image: 'https://images.unsplash.com/photo-1762010231754-74e647a4631d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwbWF0ZXJpYWxzJTIwZGlzY291bnR8ZW58MXx8fHwxNzcyNzIxMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    buttonText: 'Купить со скидкой',
    badge: '-22%',
    showSaleFilter: true,
  },
  {
    id: 2,
    title: 'Люки чугунные от 2 890 ₽',
    description: 'Надежные чугунные люки с гарантией качества. Старая цена 3 700 ₽',
    image: 'https://images.unsplash.com/photo-1761805618757-9d2b9552ee32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hdGVyaWFscyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzI3MDE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    buttonText: 'Смотреть акцию',
    badge: '-22%',
    showSaleFilter: true,
  },
  {
    id: 3,
    title: 'Выгодные цены на зажимы и хомуты',
    description: 'Крепежные элементы с максимальной скидкой до 25%. Качество проверено временем',
    image: 'https://images.unsplash.com/photo-1767871021756-30b2c5e07836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzcyNzIxMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    buttonText: 'Купить сейчас',
    badge: '-25%',
    showSaleFilter: true,
  },
];

export function HeroSlider() {
  const sliderRef = useRef<any>(null);

  const handleSlideClick = (slide: typeof slides[0]) => {
    if (slide.showSaleFilter) {
      // Обновляем URL
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('filter', 'sale');
      window.history.replaceState({}, '', '?' + urlParams.toString());
      
      // Прокручиваем к каталогу и через событие обновляем фильтр
      setTimeout(() => {
        const catalogSection = document.getElementById('catalog-section');
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Триггерим событие для обновления фильтра
        window.dispatchEvent(new CustomEvent('filterChange', { detail: { filter: 'sale' } }));
      }, 100);
    } else {
      const catalogSection = document.getElementById('catalog-section');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div className="relative slider-container">
      <style>{`
        .slider-container .slick-slider {
          position: relative;
          display: block;
          box-sizing: border-box;
          user-select: none;
          touch-action: pan-y;
        }
        .slider-container .slick-list {
          position: relative;
          display: block;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .slider-container .slick-track {
          position: relative;
          top: 0;
          left: 0;
          display: flex;
          margin-left: auto;
          margin-right: auto;
        }
        .slider-container .slick-slide {
          float: left;
          height: 100%;
          min-height: 1px;
        }
        .slider-container .slick-slide > div {
          height: 100%;
        }
        .slider-container .custom-dots {
          position: absolute;
          bottom: 25px;
          display: flex !important;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          justify-content: center;
          gap: 10px;
          z-index: 20;
        }
        .slider-container .custom-dots li {
          position: relative;
          display: inline-block;
          width: 12px;
          height: 12px;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
        .slider-container .custom-dots li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 12px;
          height: 12px;
          padding: 0;
          cursor: pointer;
          color: transparent;
          border: 0;
          outline: none;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }
        .slider-container .custom-dots li.slick-active button {
          background: white;
        }
      `}</style>
      
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div className="relative h-[400px] md:h-[600px]">
              {/* Изображение */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Мягкий тёмный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-black/70"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  {slide.badge && (
                    <div className="inline-block bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xl md:text-3xl mb-4">
                      {slide.badge}
                    </div>
                  )}
                  <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <button 
                    onClick={() => handleSlideClick(slide)}
                    className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition transform hover:scale-105"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Кнопки навигации */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full z-10 transition"
      >
        <ChevronLeft className="w-6 h-6 text-[#1e3a8a]" />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full z-10 transition"
      >
        <ChevronRight className="w-6 h-6 text-[#1e3a8a]" />
      </button>
    </div>
  );
}