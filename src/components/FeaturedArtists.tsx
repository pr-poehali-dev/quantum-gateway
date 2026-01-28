import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Artist {
  name: string;
  specialty: string;
  years: string;
  nationality: string;
  portrait: string;
  image: string;
  bio: string;
  famousWorks: string;
}

const artists: Artist[] = [
  {
    name: "Леонардо да Винчи",
    specialty: "Мастер Возрождения",
    years: "1452-1519",
    nationality: "Итальянец",
    portrait: "/portrait-of-leonardo-da-vinci-renaissance-artist.jpg",
    image: "/leonardo-da-vinci-renaissance-painting-style.jpg",
    bio: "Итальянский полимат эпохи Возрождения, чей гений охватывал искусство, науку, инженерию и анатомию. Создатель Моны Лизы и Тайной вечери — двух самых знаменитых картин в истории.",
    famousWorks: "Мона Лиза, Тайная вечеря, Витрувианский человек",
  },
  {
    name: "Винсент Ван Гог",
    specialty: "Постимпрессионизм",
    years: "1853-1890",
    nationality: "Голландец",
    portrait: "/portrait-of-vincent-van-gogh-with-red-beard.jpg",
    image: "/vincent-van-gogh-starry-night-style-painting.jpg",
    bio: "Голландский постимпрессионист, чьи смелые цвета и эмоциональная честность повлияли на искусство XX века. Несмотря на то что при жизни он продал лишь одну картину, создал более 2000 работ.",
    famousWorks: "Звёздная ночь, Подсолнухи, Спальня",
  },
  {
    name: "Пабло Пикассо",
    specialty: "Кубизм",
    years: "1881-1973",
    nationality: "Испанец",
    portrait: "/portrait-of-pablo-picasso-spanish-artist.jpg",
    image: "/pablo-picasso-cubist-portrait-style.jpg",
    bio: "Испанский художник, один из основателей кубизма, совершивший революцию в современном искусстве. Один из самых влиятельных художников XX века, создавший более 50 000 работ в различных техниках.",
    famousWorks: "Герника, Авиньонские девицы, Плачущая женщина",
  },
  {
    name: "Фрида Кало",
    specialty: "Сюрреализм",
    years: "1907-1954",
    nationality: "Мексиканка",
    portrait: "/portrait-of-frida-kahlo-with-flowers-in-hair.jpg",
    image: "/frida-kahlo-self-portrait-mexican-folk-art.jpg",
    bio: "Мексиканская художница, известная выразительными автопортретами, исследующими идентичность, постколониализм, гендер, класс и расу. Её творчество сочетает мексиканское народное искусство с сюрреализмом.",
    famousWorks: "Две Фриды, Автопортрет с терновым ожерельем, Сломанная колонна",
  },
  {
    name: "Клод Моне",
    specialty: "Импрессионизм",
    years: "1840-1926",
    nationality: "Француз",
    portrait: "/portrait-of-claude-monet-with-white-beard-impressi.jpg",
    image: "/claude-monet-water-lilies-impressionist-painting.jpg",
    bio: "Французский импрессионист, один из основателей движения, делавший акцент на свете и цвете. Его серия «Кувшинки», написанная в саду в Живерни, остаётся иконой истории искусства.",
    famousWorks: "Кувшинки, Впечатление. Восход солнца, серия Стога сена",
  },
  {
    name: "Микеланджело",
    specialty: "Скульптура Возрождения",
    years: "1475-1564",
    nationality: "Итальянец",
    portrait: "/portrait-of-michelangelo-renaissance-sculptor.jpg",
    image: "/michelangelo-david-sculpture-renaissance.jpg",
    bio: "Итальянский скульптор, живописец и архитектор эпохи Возрождения. Его шедевры включают роспись потолка Сикстинской капеллы, статую Давида и проект купола собора Святого Петра.",
    famousWorks: "Давид, Потолок Сикстинской капеллы, Пьета",
  },
  {
    name: "Рембрандт ван Рейн",
    specialty: "Золотой век Голландии",
    years: "1606-1669",
    nationality: "Голландец",
    portrait: "/portrait-of-rembrandt-van-rijn-dutch-baroque-paint.jpg",
    image: "/rembrandt-portrait-painting-baroque-style.jpg",
    bio: "Мастер голландского барокко, известный новаторским использованием света и тени (кьяроскуро). Его портреты и библейские сцены демонстрируют глубокую психологичность и техническое мастерство.",
    famousWorks: "Ночной дозор, Автопортреты, Возвращение блудного сына",
  },
  {
    name: "Сальвадор Дали",
    specialty: "Сюрреализм",
    years: "1904-1989",
    nationality: "Испанец",
    portrait: "/portrait-of-salvador-dali-with-iconic-mustache.jpg",
    image: "/salvador-dali-surrealist-melting-clocks-painting.jpg",
    bio: "Испанский сюрреалист, известный техническим мастерством, точным рисунком и причудливыми сновидческими образами. Его экстравагантная личность была столь же знаменита, как и его тающие часы.",
    famousWorks: "Постоянство памяти, Слоны, Лебеди, отражающие слонов",
  },
  {
    name: "Джорджия О'Кифф",
    specialty: "Американский модернизм",
    years: "1887-1986",
    nationality: "Американка",
    portrait: "/portrait-of-georgia-o-keeffe-american-modernist-pa.jpg",
    image: "/georgia-o-keeffe-flower-painting-modernist.jpg",
    bio: "Американская модернистка, известная как «Мать американского модернизма». Её крупноформатные цветочные картины и пейзажи Нью-Мексико произвели революцию в американском искусстве.",
    famousWorks: "Чёрный ирис, Дурман, Голова барана с белым падубом",
  },
  {
    name: "Энди Уорхол",
    specialty: "Поп-арт",
    years: "1928-1987",
    nationality: "Американец",
    portrait: "/portrait-of-andy-warhol-with-white-wig-pop-art.jpg",
    image: "/andy-warhol-pop-art-campbell-soup-can-style.jpg",
    bio: "Американский пионер поп-арта, стёрший границы между изящным искусством и массовой культурой. Его шелкографии знаменитостей и товаров стали символами 1960-х годов.",
    famousWorks: "Банки супа Campbell's, Диптих Мэрилин, Восемь Элвисов",
  },
  {
    name: "Ян Вермеер",
    specialty: "Голландское барокко",
    years: "1632-1675",
    nationality: "Голландец",
    portrait: "/portrait-of-johannes-vermeer-dutch-baroque-painter.jpg",
    image: "/johannes-vermeer-girl-with-pearl-earring-baroque.jpg",
    bio: "Голландский мастер барокко, специализировавшийся на бытовых сценах из жизни среднего класса. Его мастерское использование света и цвета, особенно в «Девушке с жемчужной серёжкой», непревзойдённо.",
    famousWorks: "Девушка с жемчужной серёжкой, Молочница, Вид Делфта",
  },
  {
    name: "Эдвард Мунк",
    specialty: "Экспрессионизм",
    years: "1863-1944",
    nationality: "Норвежец",
    portrait: "/portrait-of-edvard-munch-norwegian-expressionist-p.jpg",
    image: "/edvard-munch-the-scream-expressionist-painting.jpg",
    bio: "Норвежский экспрессионист, чьи работы исследовали темы тревоги, любви и смерти. «Крик» — его самая знаменитая работа — стал иконой современного экзистенциального страха.",
    famousWorks: "Крик, Мадонна, Вампир",
  },
  {
    name: "Анри Матисс",
    specialty: "Фовизм",
    years: "1869-1954",
    nationality: "Француз",
    portrait: "/portrait-of-henri-matisse-french-fauvist-painter-w.jpg",
    image: "/henri-matisse-fauvist-colorful-cutouts.jpg",
    bio: "Французский художник, известный смелыми яркими цветами и плавным рисунком. Лидер фовизма, его поздние бумажные аппликации произвели революцию в современном искусстве.",
    famousWorks: "Танец, серия Голубая обнажённая, Улитка",
  },
  {
    name: "Джексон Поллок",
    specialty: "Абстрактный экспрессионизм",
    years: "1912-1956",
    nationality: "Американец",
    portrait: "/portrait-of-jackson-pollock-american-abstract-expr.jpg",
    image: "/jackson-pollock-drip-painting-abstract-expressioni.jpg",
    bio: "Американский абстрактный экспрессионист, создавший технику разбрызгивания краски. Его революционный метод «живописи действия» предполагал капание и разливание краски на холсты, лежащие на полу.",
    famousWorks: "№5, 1948, Осенний ритм, Голубые столбы",
  },
  {
    name: "Караваджо",
    specialty: "Барокко",
    years: "1571-1610",
    nationality: "Итальянец",
    portrait: "/portrait-of-caravaggio-italian-baroque-painter.jpg",
    image: "/caravaggio-dramatic-chiaroscuro-baroque-painting.jpg",
    bio: "Итальянский мастер барокко, совершивший революцию в живописи драматичным использованием света и тени (тенебризм) и реалистичным изображением человеческих эмоций. Его бурная жизнь соответствовала интенсивности его искусства.",
    famousWorks: "Призвание апостола Матфея, Юдифь, обезглавливающая Олоферна, Вакх",
  },
  {
    name: "Василий Кандинский",
    specialty: "Абстрактное искусство",
    years: "1866-1944",
    nationality: "Русский",
    portrait: "/portrait-of-wassily-kandinsky-russian-abstract-artist.jpg",
    image: "/placeholder.svg?height=600&width=480",
    bio: "Русский художник, признанный пионером абстрактного искусства. Он верил, что искусство может выражать духовные истины через цвет и форму, разработав теории, которые повлияли на поколения абстракционистов.",
    famousWorks: "Композиция VIII, Жёлто-красно-синее, Несколько кругов",
  },
  {
    name: "Густав Климт",
    specialty: "Модерн",
    years: "1862-1918",
    nationality: "Австриец",
    portrait: "/portrait-of-gustav-klimt-austrian-art-nouveau-painter.jpg",
    image: "/placeholder.svg?height=600&width=480",
    bio: "Австрийский художник-символист, известный декоративным, чувственным стилем с использованием сусального золота и сложных узоров. Его работы исследовали темы любви, сексуальности и человеческой природы.",
    famousWorks: "Поцелуй, Портрет Адели Блох-Бауэр I, Древо жизни",
  },
  {
    name: "Диего Ривера",
    specialty: "Мексиканский мурализм",
    years: "1886-1957",
    nationality: "Мексиканец",
    portrait: "/portrait-of-diego-rivera-mexican-muralist-painter.jpg",
    image: "/placeholder.svg?height=600&width=480",
    bio: "Мексиканский муралист, чьи масштабные публичные работы изображали мексиканское общество, историю и борьбу рабочего класса. Его творчество помогло становлению Мексиканского мурального движения.",
    famousWorks: "Человек на перепутье, Фрески детройтской промышленности, История Мексики",
  },
  {
    name: "Яёи Кусама",
    specialty: "Современное искусство",
    years: "род. 1929",
    nationality: "Японка",
    portrait: "/portrait-of-yayoi-kusama-japanese-contemporary-artist.jpg",
    image: "/placeholder.svg?height=600&width=480",
    bio: "Японская современная художница, известная иммерсивными зеркальными комнатами бесконечности и навязчивым использованием горошка. Её работы исследуют темы бесконечности, самоуничтожения и психического здоровья.",
    famousWorks: "Зеркальные комнаты бесконечности, Скульптуры тыкв, Комната уничтожения",
  },
  {
    name: "Бэнкси",
    specialty: "Уличное искусство",
    years: "род. 1974",
    nationality: "Британец",
    portrait: "/portrait-of-banksy-anonymous-street-artist-silhouette.jpg",
    image: "/placeholder.svg?height=600&width=480",
    bio: "Анонимный британский уличный художник, чьи сатирические и подрывные трафаретные работы комментируют политику, культуру и этику. Его личность остаётся одной из величайших загадок мира искусства.",
    famousWorks: "Девочка с воздушным шаром, Любовь в мусорке, Метатель цветов",
  },
];

export function FeaturedArtists() {
  return (
    <section id="artists" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Избранные художники</h2>
          <p className="text-muted-foreground text-lg">Познакомьтесь с мастерами из нашей коллекции</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {artists.map((artist) => (
            <Dialog key={artist.name}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={artist.portrait}
                      alt={`Портрет ${artist.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-light mb-1">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {artist.years} &bull; {artist.nationality}
                    </p>
                    <p className="text-sm font-medium text-foreground">{artist.specialty}</p>
                    <p className="text-xs text-muted-foreground mt-3">Нажмите, чтобы узнать больше</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl font-light">{artist.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={artist.portrait}
                      alt={`Портрет ${artist.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {artist.years} &bull; {artist.nationality}
                      </p>
                      <p className="text-base font-medium text-foreground mb-4">{artist.specialty}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Биография</h4>
                      <p className="text-sm leading-relaxed">{artist.bio}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Известные работы</h4>
                      <p className="text-sm leading-relaxed">{artist.famousWorks}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
