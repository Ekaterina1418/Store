export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Политика конфиденциальности</h1>
          <p className="text-lg text-gray-200">
            Актуально на {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Общие положения</h2>
              <p className="text-gray-600 mb-4">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                пользователей интернет-магазина СМАРТСТРОЙ (далее — «Компания»).
              </p>
              <p className="text-gray-600 mb-4">
                Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и
                указанными в ней условиями обработки персональной информации.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Персональные данные пользователей</h2>
              <p className="text-gray-600 mb-4">
                Под персональными данными понимается информация, которая может быть использована для идентификации
                конкретного лица:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес доставки товаров</li>
                <li>Данные о заказах и покупках</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Цели сбора персональных данных</h2>
              <p className="text-gray-600 mb-4">
                Компания собирает и использует персональные данные пользователей в следующих целях:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Обработка заказов и организация доставки товаров</li>
                <li>Предоставление информации о статусе заказа</li>
                <li>Связь с клиентом для уточнения деталей заказа</li>
                <li>Информирование об акциях, специальных предложениях и новинках</li>
                <li>Улучшение качества обслуживания и работы сайта</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Защита персональных данных</h2>
              <p className="text-gray-600 mb-4">
                Компания принимает все необходимые меры для защиты персональных данных пользователей от
                несанкционированного доступа, изменения, раскрытия или уничтожения:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Использование защищённых каналов передачи данных</li>
                <li>Ограничение доступа к персональным данным</li>
                <li>Регулярное обновление систем безопасности</li>
                <li>Обучение сотрудников правилам обработки персональных данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-gray-600 mb-4">
                Компания не передаёт персональные данные пользователей третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Когда это необходимо для выполнения заказа (например, передача адреса службе доставки)</li>
                <li>Когда передача требуется по закону или по запросу государственных органов</li>
                <li>Когда пользователь дал своё согласие на передачу данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Права пользователей</h2>
              <p className="text-gray-600 mb-4">Пользователи имеют право:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Получать информацию о хранящихся персональных данных</li>
                <li>Требовать уточнения, обновления или удаления своих данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия Компании в надзорных органах</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Использование файлов cookie</h2>
              <p className="text-gray-600 mb-4">
                Сайт использует файлы cookie для улучшения работы и удобства пользователей. Cookie не содержат
                персональных данных и используются для аналитики посещаемости и персонализации контента.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Изменение Политики конфиденциальности</h2>
              <p className="text-gray-600 mb-4">
                Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности.
                Актуальная вер��ия всегда доступна на данной странице.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Контактная информация</h2>
              <p className="text-gray-600 mb-4">
                По вопросам, связанным с обработкой персональных данных, вы можете обратиться:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Телефон:</strong> +7 (391) 234-56-78</li>
                <li><strong>Email:</strong> info@smartstroy39.ru</li>
                <li><strong>Адрес:</strong> г. Калининград, ул. Строительная, д. 1</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
