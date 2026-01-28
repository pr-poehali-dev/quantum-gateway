import { Card, CardContent } from "@/components/ui/card";

interface ArtType {
  name: string;
  description: string;
  image: string;
  examples: string;
}

const artTypes: ArtType[] = [
  {
    name: "Живопись",
    description:
      "Практика нанесения краски, пигмента, цвета или другого материала на твёрдую поверхность. От масла и акрила до акварели и гуаши.",
    image: "/oil-painting-canvas-classical-style.jpg",
    examples: "Масло, Акрил, Акварель, Фреска",
  },
  {
    name: "Скульптура",
    description:
      "Трёхмерное искусство, создаваемое путём формования или комбинирования материалов. От классического мрамора до современных инсталляций.",
    image: "/marble-sculpture-classical-statue.jpg",
    examples: "Камень, Бронза, Дерево, Глина",
  },
  {
    name: "Фотография",
    description:
      "Искусство захвата света для создания изображений. От документальной до художественной, от аналоговой до цифровой.",
    image: "/fine-art-black-white-photography.jpg",
    examples: "Портрет, Пейзаж, Абстракция, Документалистика",
  },
  {
    name: "Цифровое искусство",
    description:
      "Искусство, созданное с помощью цифровых технологий. Включает цифровую живопись, 3D-моделирование, генеративное искусство и NFT.",
    image: "/digital-art-abstract-colorful-design.jpg",
    examples: "3D-арт, Цифровая живопись, Генеративное, NFT",
  },
  {
    name: "Гравюра",
    description:
      "Процесс создания произведений путём печати, обычно на бумаге. Включает офорт, литографию и шелкографию.",
    image: "/printmaking-woodblock-print-art.jpg",
    examples: "Офорт, Литография, Шелкография, Ксилография",
  },
  {
    name: "Графика",
    description:
      "Основа визуального искусства, использующая линии на поверхности. От карандашных набросков до угольных шедевров.",
    image: "/charcoal-drawing-portrait-sketch.jpg",
    examples: "Карандаш, Уголь, Тушь, Пастель",
  },
  {
    name: "Керамика",
    description:
      "Искусство создания объектов из глины и других материалов. От функциональной посуды до скульптурных работ.",
    image: "/ceramic-pottery-handmade-vase.jpg",
    examples: "Гончарство, Фарфор, Шамот, Раку",
  },
  {
    name: "Смешанная техника",
    description:
      "Работы, сочетающие различные материалы и техники. Объединяет традиционные и современные методы.",
    image: "/mixed-media-collage-contemporary-art.jpg",
    examples: "Коллаж, Ассамбляж, Инсталляция, Мультимедиа",
  },
  {
    name: "Текстильное искусство",
    description:
      "Искусство, создаваемое из ткани, волокна и нити. От традиционного ткачества до современных скульптур из волокна.",
    image: "/textile-art-woven-tapestry.jpg",
    examples: "Ткачество, Вышивка, Квилтинг, Файбер-арт",
  },
];

export function ArtTypes() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Изучайте формы искусства</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Откройте для себя разнообразие техник и материалов, которые художники используют для выражения творческого видения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artTypes.map((type) => (
            <Card key={type.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <img
                  src={type.image}
                  alt={`Пример: ${type.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-3">{type.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Популярные формы:</p>
                  <p className="text-sm text-muted-foreground">{type.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
