export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Мост между художниками и коллекционерами
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Галерист создан с убеждением, что выдающееся искусство заслуживает быть открытым,
                оцененным и сохраненным. Мы работаем напрямую с художниками, чтобы донести их
                видение до аудитории, которая ценит новаторство и мастерство.
              </p>
              <p>
                Наша платформа предоставляет художникам поддержку и возможности для развития,
                а коллекционерам открывает доступ к произведениям, которые определят культурный
                ландшафт завтрашнего дня.
              </p>
              <p className="text-muted-foreground">
                Каждое произведение в нашей коллекции тщательно отобрано за художественные
                достоинства, оригинальность и способность вызывать глубокие размышления.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/art-gallery-interior-contemporary.jpg"
              alt="Интерьер галереи"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
