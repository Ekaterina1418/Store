import { useParams, Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, Home } from 'lucide-react';

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

const products = [
  // Люки чугунные
  {
    id: 1,
    name: 'Люк чугунный тип Л ГОСТ 3634-99',
    price: 3200,
    oldPrice: 3800,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-16%',
    category: 'Люки чугунные',
  },
  {
    id: 2,
    name: 'Люк чугунный тип Т ГОСТ 3634-99',
    price: 4200,
    oldPrice: 4800,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-13%',
    category: 'Люки чугунные',
  },
  {
    id: 3,
    name: 'Люк чугунный тип С ГОСТ 3634-99',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Люки чугунные',
  },
  {
    id: 4,
    name: 'Люк чугунный тяжелый ТМ ГОСТ 3634-99',
    price: 5400,
    oldPrice: 6200,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-13%',
    category: 'Люки чугунные',
  },
  {
    id: 5,
    name: 'Люк чугунный квадратный 600x600',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Люки чугунные',
  },
  {
    id: 6,
    name: 'Люк чугунный легкий типа Л D600',
    price: 2400,
    oldPrice: 2800,
    image: 'https://images.unsplash.com/photo-1750234469234-d1c328ee35db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ob2xlJTIwY292ZXIlMjBjYXN0JTIwaXJvbnxlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-14%',
    category: 'Люки чугунные',
  },

  // Труба ППР
  {
    id: 7,
    name: 'Труба ППР PN20 D25',
    price: 1250,
    oldPrice: 1450,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-14%',
    category: 'Труба ППР',
  },
  {
    id: 8,
    name: 'Труба ППР PN25 D32 армированная',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Труба ППР',
  },
  {
    id: 9,
    name: 'Труба ППР PN20 D20',
    price: 980,
    oldPrice: 1100,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-11%',
    category: 'Труба ППР',
  },
  {
    id: 10,
    name: 'Труба ППР PN25 D40 армированная стекловолокном',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Труба ППР',
  },
  {
    id: 11,
    name: 'Труба ППР PN16 D16',
    price: 650,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Труба ППР',
  },
  {
    id: 12,
    name: 'Труба ППР PN20 D50',
    price: 3200,
    oldPrice: 3600,
    image: 'https://images.unsplash.com/photo-1605313294941-ea43850d9de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-11%',
    category: 'Труба ППР',
  },

  // Фитинги ППР
  {
    id: 13,
    name: 'Фитинги ППР угол 90° D20',
    price: 350,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фитинги ППР',
  },
  {
    id: 14,
    name: 'Фитинги ППР тройник D25',
    price: 420,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фитинги ППР',
  },
  {
    id: 15,
    name: 'Фитинги ППР муфта переходная D32-D25',
    price: 280,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фитинги ППР',
  },
  {
    id: 16,
    name: 'Фитинги ППР угол 45° D25',
    price: 310,
    oldPrice: 380,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-18%',
    category: 'Фитинги ППР',
  },
  {
    id: 17,
    name: 'Фитинги ППР муфта комбинированная с ВР D25x3/4',
    price: 390,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фитинги ППР',
  },
  {
    id: 18,
    name: 'Фитинги ППР крестовина D20',
    price: 480,
    oldPrice: 550,
    image: 'https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlJTIwZml0dGluZ3MlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNzIwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-13%',
    category: 'Фитинги ППР',
  },

  // Зажимы, хомуты
  {
    id: 19,
    name: 'Хомут металлический оцинкованный 32-35мм',
    price: 45,
    image: 'https://images.unsplash.com/photo-1676039708998-dd17ae27c90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNsYW1wJTIwaG9zZXxlbnwxfHx8fDE3NzI3MjA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Зажимы, хомуты',
  },
  {
    id: 20,
    name: 'Зажим для труб двухсторонний 20-22мм',
    price: 65,
    image: 'https://images.unsplash.com/photo-1676039708998-dd17ae27c90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNsYW1wJTIwaG9zZXxlbnwxfHx8fDE3NzI3MjA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Зажимы, хомуты',
  },

  // Кран ППР
  {
    id: 25,
    name: 'Кран шаровый ППР D20',
    price: 580,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Кран ППР',
  },
  {
    id: 26,
    name: 'Кран ППР с американкой D25',
    price: 780,
    oldPrice: 890,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-12%',
    category: 'Кран ППР',
  },
  {
    id: 27,
    name: 'Кран шаровый ППР угловой D20',
    price: 620,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Кран ППР',
  },
  {
    id: 28,
    name: 'Кран ППР D32 усиленный',
    price: 980,
    oldPrice: 1150,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-15%',
    category: 'Кран ППР',
  },
  {
    id: 29,
    name: 'Кран ППР с металлической ручкой D25',
    price: 850,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Кран ППР',
  },
  {
    id: 30,
    name: 'Кран шаровый ППР мини D16',
    price: 420,
    image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsJTIwdmFsdmUlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NzI3MjA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Кран ППР',
  },

  // Фильтры ППР
  {
    id: 31,
    name: 'Фильтр грубой очистки ППР D25',
    price: 890,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фильтры ППР',
  },
  {
    id: 32,
    name: 'Фильтр тонкой очистки ППР D20',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фильтры ППР',
  },
  {
    id: 33,
    name: 'Фильтр грубой очистки косой ППР D20',
    price: 760,
    oldPrice: 920,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-17%',
    category: 'Фильтры ППР',
  },
  {
    id: 34,
    name: 'Фильтр-грязевик ППР D32',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фильтры ППР',
  },
  {
    id: 35,
    name: 'Фильтр магнитный ППР D25',
    price: 1680,
    oldPrice: 1920,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-13%',
    category: 'Фильтры ППР',
  },
  {
    id: 36,
    name: 'Фильтр промывной самоочищающийся ППР D20',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2OTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Фильтры ППР',
  },

  // Трубы ПВХ
  {
    id: 37,
    name: 'Труба ПВХ D110 для канализации',
    price: 780,
    oldPrice: 920,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-15%',
    category: 'Трубы ПВХ',
  },
  {
    id: 38,
    name: 'Труба ПВХ D50 для канализации',
    price: 320,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы ПВХ',
  },
  {
    id: 39,
    name: 'Труба ПВХ D160 для наружной канализации',
    price: 1200,
    oldPrice: 1400,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-14%',
    category: 'Трубы ПВХ',
  },
  {
    id: 40,
    name: 'Труба ПВХ D32 напорная',
    price: 280,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы ПВХ',
  },
  {
    id: 41,
    name: 'Труба ПВХ D75 для внутренней канализации',
    price: 520,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы ПВХ',
  },
  {
    id: 42,
    name: 'Труба ПВХ D200 усиленная',
    price: 1850,
    oldPrice: 2100,
    image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI3MjA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-12%',
    category: 'Трубы ПВХ',
  },

  // Трубы полиэтиленовые
  {
    id: 43,
    name: 'Труба полиэтиленовая ПНД D32',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы полиэтиленовые',
  },
  {
    id: 44,
    name: 'Труба полиэтиленовая ПНД D25',
    price: 850,
    oldPrice: 950,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-11%',
    category: 'Трубы полиэтиленовые',
  },
  {
    id: 45,
    name: 'Труба ПНД D40 питьевая',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы полиэтиленовые',
  },
  {
    id: 46,
    name: 'Труба ПНД D50 техническая',
    price: 1680,
    oldPrice: 1900,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '-12%',
    category: 'Трубы полиэтиленовые',
  },
  {
    id: 47,
    name: 'Труба ПНД D20 гибкая',
    price: 580,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы полиэтиленовые',
  },
  {
    id: 48,
    name: 'Труба ПНД D63 для водоснабжения',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1759577452309-6c17014434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwdHViaW5nJTIwcGlwZXxlbnwxfHx8fDE3NzI3MjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Трубы полиэтиленовые',
  },
];

export function Category() {
  const { name } = useParams();
  const decodedCategory = name ? decodeURIComponent(name) : '';

  // Фильтруем товары по категории
  const categoryProducts = products.filter(p => p.category === decodedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1e3a8a] transition flex items-center gap-1">
              <Home className="w-4 h-4" />
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{decodedCategory}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Боковое меню категорий */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Категории</h2>
              <nav className="space-y-1">
                {categories.map((category) => {
                  const isActive = category === decodedCategory;
                  return (
                    <Link
                      key={category}
                      to={`/category/${encodeURIComponent(category)}`}
                      className={`block px-3 py-2 rounded-lg transition text-sm ${ 
                        isActive
                          ? 'bg-[#1e3a8a] text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#1e3a8a]'
                      }`}
                    >
                      {category}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Основной контент с товарами */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {decodedCategory}
              </h1>
              <p className="text-gray-600">
                Найдено товаров: <span className="font-semibold">{categoryProducts.length}</span>
              </p>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Товары скоро появятся
                  </h3>
                  <p className="text-gray-600 mb-6">
                    В данной категории пока нет доступных товаров. Мы работаем над расширением ассортимента.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition font-semibold"
                  >
                    <Home className="w-5 h-5" />
                    На главную
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}