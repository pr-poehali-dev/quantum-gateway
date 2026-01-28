export function ArtSpaces() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Где живёт искусство</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Исследуйте пространства, где процветает творчество и обретают дом шедевры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/modern-contemporary-art-gallery-white-walls.jpg"
                alt="Современная галерея"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Современные галереи</h3>
              <p className="text-muted-foreground leading-relaxed">
                Минималистичные пространства, созданные для демонстрации современного искусства во всей его красоте
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/classical-museum-grand-architecture-paintings.jpg"
                alt="Классический музей"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Исторические музеи</h3>
              <p className="text-muted-foreground leading-relaxed">
                Величественные институции, хранящие столетия художественного наследия и культурных сокровищ
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/artist-studio-workspace-with-paintings-easel.jpg"
                alt="Мастерская художника"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Мастерские художников</h3>
              <p className="text-muted-foreground leading-relaxed">
                Камерные творческие пространства, где вдохновение превращается в осязаемые произведения искусства
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/outdoor-sculpture-garden-with-modern-art.jpg"
                alt="Парк скульптур"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Парки скульптур</h3>
              <p className="text-muted-foreground leading-relaxed">
                Выставки под открытым небом, где искусство гармонирует с природой и ландшафтом
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/luxury-private-art-collection-room.jpg"
                alt="Частная коллекция"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Частные коллекции</h3>
              <p className="text-muted-foreground leading-relaxed">
                Персональные пространства, демонстрирующие страсть взыскательных коллекционеров к изящному искусству
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/contemporary-exhibition-space-art-show.jpg"
                alt="Выставочное пространство"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Выставочные пространства</h3>
              <p className="text-muted-foreground leading-relaxed">
                Динамичные площадки для сменных экспозиций, объединяющие сообщества вокруг искусства
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
