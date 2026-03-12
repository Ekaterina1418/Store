import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    setIsFavorite(!isFavorite);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group block"
    >
      {/* Изображение товара */}
      <div className="relative overflow-hidden h-40 md:h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
            {product.discount}
          </div>
        )}
        <button 
          onClick={handleToggleFavorite}
          className={`absolute top-2 right-2 md:top-3 md:right-3 p-1.5 md:p-2 rounded-full transition ${
            isFavorite 
              ? 'bg-[#1e3a8a] opacity-100' 
              : 'bg-white opacity-0 group-hover:opacity-100 hover:bg-gray-100'
          }`}
          aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        >
          <Heart 
            className={`w-4 h-4 md:w-5 md:h-5 ${
              isFavorite ? 'text-white fill-white' : 'text-gray-700'
            }`} 
          />
        </button>
      </div>

      {/* Информация о товаре */}
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 min-h-[2.5rem] md:min-h-[3rem] line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-end gap-1.5 md:gap-2 mb-3 md:mb-4">
          <span className="text-lg md:text-2xl font-bold text-[#1e3a8a]">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.oldPrice && (
            <span className="text-xs md:text-sm text-gray-400 line-through mb-0.5 md:mb-1">
              {product.oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>

        <button 
          onClick={handleAddToCart}
          disabled={addedToCart}
          className={`w-full py-2 md:py-3 px-2 rounded-lg flex items-center justify-center gap-1.5 md:gap-2 transition transform text-xs md:text-base font-semibold ${
            addedToCart
              ? 'bg-green-500 text-white cursor-default'
              : 'bg-[#1e3a8a] hover:bg-[#1e40af] text-white hover:scale-105'
          }`}
        >
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">{addedToCart ? 'Добавлено в корзину' : 'Добавить в корзину'}</span>
          <span className="sm:hidden">{addedToCart ? 'Добавлено' : 'В корзину'}</span>
        </button>
      </div>
    </Link>
  );
}