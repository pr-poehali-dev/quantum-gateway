export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Живые роботы из вашей любимой игры
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Наша выставка — это уникальное сочетание технологий и любимых персонажей.
                Роботизированные Мобы из Майнкрафта и легендарные Трансформеры оживают прямо на ваших глазах!
              </p>
              <p>
                Каждый экспонат можно не только увидеть, но и пообщаться с ним — роботы двигаются,
                разговаривают и взаимодействуют с гостями. Прекрасное развлечение для детей и взрослых!
              </p>
              <p className="text-muted-foreground">
                От Крипера до Оптимуса Прайма — все герои самых известных блокбастеров и игры
                собраны в одном месте. Сфотографируйтесь с любимыми персонажами!
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