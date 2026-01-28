export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/classical-art-museum-painting.jpg"
                alt="Классическое искусство в музее"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Что включено в билет?
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg font-medium text-foreground">
                  Полное погружение в мир Майнкрафта и Трансформеров!
                </p>

                <ul className="space-y-3 list-disc list-inside">
                  <li>Близкое знакомство с огромными роботизированными мобами — героями Майнкрафт</li>
                  <li>Гигантские 4-метровые роботы из популярных фильмов и игры Майнкрафт</li>
                  <li>Селфи с Бамблби и Оптимусом Праймом</li>
                  <li>Фото и видео всех персонажей</li>
                  <li>Предсказание от Деревяки и бой настоящих боевых Бронеботов — чемпионов 2021 г.</li>
                  <li>Новая популярная игра 2025 — Майнкрафт на PlayStation 5, Oculus 3</li>
                  <li>Возможность поуправлять роботизированными мобами</li>
                  <li>Пострелять из квантовых пушек</li>
                  <li>Кинотеатр 8K</li>
                </ul>

                <p className="text-sm pt-4 border-t">
                  ⚠️ Дети до 14 лет проходят только с родителями
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">Важная информация</h3>
              <p className="mb-4">
                Состав экспозиции может меняться в зависимости от конфигурации помещений.
                Все роботы интерактивны и безопасны для посетителей.
              </p>
              <p className="text-foreground font-medium">
                Ждём вас на самой захватывающей выставке роботов!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}