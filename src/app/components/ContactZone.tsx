import { UserCircle, Phone, MessageCircle } from 'lucide-react';

export function ContactZone() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Нужна помощь в выборе?
          </h2>
          <p className="text-base md:text-xl text-gray-100">
            Наши специалисты готовы проконсультировать вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <button className="bg-white hover:bg-gray-100 p-5 md:p-6 rounded-lg flex flex-col items-center gap-2 md:gap-3 transition transform hover:scale-105">
            <UserCircle className="w-10 h-10 md:w-12 md:h-12 text-[#1e3a8a]" />
            <span className="text-base md:text-lg font-semibold text-gray-900">
              Связаться с менеджером
            </span>
          </button>

          <button className="bg-white hover:bg-gray-100 p-5 md:p-6 rounded-lg flex flex-col items-center gap-2 md:gap-3 transition transform hover:scale-105">
            <Phone className="w-10 h-10 md:w-12 md:h-12 text-[#1e3a8a]" />
            <span className="text-base md:text-lg font-semibold text-gray-900">
              Заказать звонок
            </span>
          </button>

          <button className="bg-white hover:bg-gray-100 p-5 md:p-6 rounded-lg flex flex-col items-center gap-2 md:gap-3 transition transform hover:scale-105">
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-[#1e3a8a]" />
            <span className="text-base md:text-lg font-semibold text-gray-900">
              Написать в чат
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}