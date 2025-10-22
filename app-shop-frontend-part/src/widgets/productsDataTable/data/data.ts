export type Product = {
  id: string
  title: string
  description: string
  price: number
  color?: string
  category: string
  createdAt: Date
}

export const productsDataTable = [
  {
    id: '1',
    title: 'Смартфон iPhone 15 Pro',
    description: 'Флагманский смартфон с процессором A17 Pro и камерой 48 МП',
    price: 99990,
    color: '#2F2F2F', // Титановый серый
    category: 'Электроника',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Ноутбук MacBook Air M2',
    description: 'Легкий и мощный ноутбук с дисплеем Liquid Retina',
    price: 124990,
    color: '#C0C0C0', // Серебристый
    category: 'Электроника',
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'Беспроводные наушники Sony WH-1000XM5',
    description: 'Наушники с шумоподавлением и автономностью 30 часов',
    price: 29990,
    color: '#000000',
    category: 'Аудио',
    createdAt: new Date('2024-02-05'),
  },
  {
    id: '4',
    title: 'Умные часы Apple Watch Series 9',
    description: 'Умные часы с функцией измерения кислорода в крови',
    price: 45990,
    color: '#2C2C2C', // Midnight
    category: 'Гаджеты',
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '5',
    title: 'Игровая консоль PlayStation 5',
    description: 'Новейшая игровая консоль с поддержкой 4K',
    price: 64990,
    category: 'Игры',
    createdAt: new Date('2024-01-25'),
  },
  {
    id: '6',
    title: 'Кофемашина DeLonghi Magnifica',
    description:
      'Автоматическая кофемашина для приготовления эспрессо и капучино',
    price: 54990,
    color: '#C0C0C0', // Серебристый
    category: 'Бытовая техника',
    createdAt: new Date('2024-03-01'),
  },
  {
    id: '7',
    title: 'Фотокамера Canon EOS R6',
    description: 'Беззеркальная камера с матрицей 20 МП и стабилизацией',
    price: 189990,
    category: 'Фототехника',
    createdAt: new Date('2024-02-15'),
  },
  {
    id: '8',
    title: 'Электрический самокат Xiaomi Pro 2',
    description: 'Самокат с запасом хода 45 км и мощным мотором',
    price: 34990,
    color: '#000000', // Черный
    category: 'Транспорт',
    createdAt: new Date('2024-03-05'),
  },
  {
    id: '9',
    title: 'Кожаный диван Chesterfield',
    description: 'Классический кожаный диван с каретной стяжкой',
    price: 125000,
    color: '#8B4513', // Коричневый
    category: 'Мебель',
    createdAt: new Date('2024-01-30'),
  },
  {
    id: '10',
    title: 'Набор кухонных ножей Zwilling',
    description: 'Профессиональный набор из 6 ножей с керамическим покрытием',
    price: 15990,
    category: 'Кухня',
    createdAt: new Date('2024-02-20'),
  },
  {
    id: '11',
    title: 'Беспроводная колонка JBL Flip 6',
    description: 'Портативная водонепроницаемая колонка с мощным звуком',
    price: 12990,
    color: '#0000FF', // Синий
    category: 'Аудио',
    createdAt: new Date('2024-03-10'),
  },
  {
    id: '12',
    title: 'Электронная книга PocketBook 740',
    description: 'Читалка с дисплеем E Ink 7.8 дюймов и подсветкой',
    price: 23990,
    color: '#000000', // Черный
    category: 'Электроника',
    createdAt: new Date('2024-02-25'),
  },
  {
    id: '13',
    title: 'Умный домофон Ring Video Doorbell',
    description: 'Видеодомофон с датчиком движения и ночным видением',
    price: 17990,
    category: 'Умный дом',
    createdAt: new Date('2024-03-08'),
  },
  {
    id: '14',
    title: 'Спортивные кроссовки Nike Air Max',
    description: 'Беговые кроссовки с технологией Air для амортизации',
    price: 12990,
    color: '#FFFFFF', // Белый
    category: 'Одежда',
    createdAt: new Date('2024-02-28'),
  },
  {
    id: '15',
    title: 'Рюкзак для ноутбука The North Face',
    description: 'Вместительный рюкзак с отделением для ноутбука 15.6',
    price: 8990,
    color: '#000000', // Черный
    category: 'Аксессуары',
    createdAt: new Date('2024-03-12'),
  },
  {
    id: '16',
    title: 'Электрический гриль Tefal GC722',
    description: 'Компактный гриль с антипригарным покрытием',
    price: 7990,
    color: '#FF0000', // Красный
    category: 'Кухня',
    createdAt: new Date('2024-02-18'),
  },
  {
    id: '17',
    title: 'Монитор Samsung Odyssey G7',
    description: 'Игровой монитор 32 дюйма с изогнутым экраном 240 Гц',
    price: 65990,
    category: 'Электроника',
    createdAt: new Date('2024-01-22'),
  },
  {
    id: '18',
    title: 'Набор LEGO Technic Porsche 911',
    description: 'Конструктор из 1580 деталей для сборки модели Porsche',
    price: 14990,
    category: 'Хобби',
    createdAt: new Date('2024-03-03'),
  },
  {
    id: '19',
    title: 'Электрическая зубная щетка Oral-B iO',
    description: 'Умная зубная щетка с технологией магнитного привода',
    price: 12990,
    color: '#E6BC73', // Розовое золото
    category: 'Здоровье',
    createdAt: new Date('2024-02-14'),
  },
  {
    id: '20',
    title: 'Термокружка Stanley Classic',
    description: 'Термос с вакуумной изоляцией сохраняет температуру 24 часа',
    price: 4990,
    color: '#008000', // Зеленый
    category: 'Аксессуары',
    createdAt: new Date('2024-03-15'),
  },
  {
    id: '21',
    title: 'Игровая мышь Razer Viper V2 Pro',
    description: 'Беспроводная игровая мышь с сенсором Focus Pro 30K',
    price: 12990,
    color: '#000000', // Черный
    category: 'Гейминг',
    createdAt: new Date('2024-03-20'),
  },
  {
    id: '22',
    title: 'Механическая клавиатура Keychron K8',
    description: 'Беспроводная механическая клавиатура с подсветкой RGB',
    price: 8990,
    color: '#000000', // Черный
    category: 'Гейминг',
    createdAt: new Date('2024-03-22'),
  },
  {
    id: '23',
    title: 'Внешний SSD Samsung T7 1TB',
    description: 'Портативный SSD накопитель со скоростью до 1050 МБ/с',
    price: 10990,
    category: 'Электроника',
    createdAt: new Date('2024-03-25'),
  },
  {
    id: '24',
    title: 'Электросамокат Ninebot Max G30',
    description: 'Мощный электросамокат с запасом хода 65 км',
    price: 45990,
    color: '#808080', // Серый
    category: 'Транспорт',
    createdAt: new Date('2024-03-28'),
  },
  {
    id: '25',
    title: 'Умная колонка Яндекс Станция Лайт',
    description: 'Умная колонка с голосовым помощником Алисой',
    price: 6990,
    color: '#40E0D0', // Бирюзовый
    category: 'Умный дом',
    createdAt: new Date('2024-04-01'),
  },
  {
    id: '26',
    title: 'Беспроводной пылесос Dyson V11 Absolute',
    description: 'Мощный беспроводной пылесос с технологией циклонной очистки',
    price: 54990,
    color: '#C0C0C0', // Никель
    category: 'Бытовая техника',
    createdAt: new Date('2024-04-05'),
  },
  {
    id: '27',
    title: 'Электроскутер Segway Ninebot E22',
    description: 'Компактный электроскутер с системой самобалансировки',
    price: 32990,
    color: '#000000', // Черный
    category: 'Транспорт',
    createdAt: new Date('2024-04-08'),
  },
  {
    id: '28',
    title: 'Проектор Epson EH-TW740',
    description: 'Домашний кинотеатр с поддержкой 4K и HDR',
    price: 79990,
    category: 'Электроника',
    createdAt: new Date('2024-04-12'),
  },
  {
    id: '29',
    title: 'Кофемолка Baratza Encore',
    description: 'Профессиональная кофемолка с коническими жерновами',
    price: 18990,
    color: '#000000', // Черный
    category: 'Кухня',
    createdAt: new Date('2024-04-15'),
  },
  {
    id: '30',
    title: 'Фитнес-браслет Xiaomi Mi Band 8',
    description: 'Фитнес-трекер с AMOLED-экраном и 150 спортивными режимами',
    price: 3990,
    color: '#000000', // Черный
    category: 'Гаджеты',
    createdAt: new Date('2024-04-18'),
  },
  {
    id: '31',
    title: 'Игровой монитор ASUS TUF Gaming VG249Q',
    description: '23.8-дюймовый игровой монитор с частотой 144 Гц',
    price: 23990,
    category: 'Электроника',
    createdAt: new Date('2024-04-20'),
  },
  {
    id: '32',
    title: 'Беспроводной микрофон Rode Wireless Go II',
    description:
      'Компактная беспроводная микрофонная система для видеоблогинга',
    price: 24990,
    category: 'Аудио',
    createdAt: new Date('2024-04-22'),
  },
  {
    id: '33',
    title: 'Электрическая плитка Scarf Home',
    description: 'Компактная электрическая плитка с керамической поверхностью',
    price: 2990,
    color: '#FFFFFF', // Белый
    category: 'Кухня',
    createdAt: new Date('2024-04-25'),
  },
  {
    id: '34',
    title: 'Геймпад Xbox Wireless Controller',
    description: 'Беспроводной геймпад с тактильной отдачей',
    price: 5990,
    color: '#000000', // Черный
    category: 'Гейминг',
    createdAt: new Date('2024-04-28'),
  },
  {
    id: '35',
    title: 'Умные весы Withings Body+',
    description:
      'Умные весы с анализом состава тела и подключением к приложению',
    price: 8990,
    color: '#FFFFFF', // Белый
    category: 'Здоровье',
    createdAt: new Date('2024-05-01'),
  },
  {
    id: '36',
    title: 'Портативный аккумулятор Anker PowerCore 20000',
    description: 'Мощный пауэрбанк с быстрой зарядкой Power Delivery',
    price: 4990,
    color: '#000000', // Черный
    category: 'Аксессуары',
    createdAt: new Date('2024-05-05'),
  },
  {
    id: '37',
    title: 'Электронная фоторамка Nixplay Smart Frame',
    description: 'Умная фоторамка с Wi-Fi и облачным хранилищем',
    price: 12990,
    color: '#000000', // Черный
    category: 'Электроника',
    createdAt: new Date('2024-05-08'),
  },
  {
    id: '38',
    title: 'Блендер Philips HR3652',
    description: 'Мощный блендер с вакуумной технологией',
    price: 14990,
    color: '#C0C0C0', // Серебристый
    category: 'Кухня',
    createdAt: new Date('2024-05-12'),
  },
  {
    id: '39',
    title: 'Игровое кресло DXRacer Formula Series',
    description: 'Эргономичное игровое кресло с поддержкой поясницы',
    price: 34990,
    color: '#FF0000', // Красный
    category: 'Мебель',
    createdAt: new Date('2024-05-15'),
  },
  {
    id: '40',
    title: 'Умный термос Ember Mug²',
    description: 'Термос с регулировкой температуры через приложение',
    price: 12990,
    color: '#FFFFFF', // Белый
    category: 'Кухня',
    createdAt: new Date('2024-05-18'),
  },
  {
    id: '41',
    title: 'Беспроводные наушники Apple AirPods Pro 2',
    description: 'Наушники с активным шумоподавлением и прозрачным режимом',
    price: 24990,
    color: '#FFFFFF', // Белый
    category: 'Аудио',
    createdAt: new Date('2024-05-20'),
  },
  {
    id: '42',
    title: 'Электрическая мясорубка Moulinex ME686',
    description: 'Мощная электрическая мясорубка с функцией реверса',
    price: 7990,
    color: '#C0C0C0', // Серебристый
    category: 'Кухня',
    createdAt: new Date('2024-05-22'),
  },
  {
    id: '43',
    title: 'Игровая гарнитура SteelSeries Arctis Nova 7',
    description:
      'Беспроводная игровая гарнитура с многоплатформенной поддержкой',
    price: 17990,
    color: '#000000', // Черный
    category: 'Гейминг',
    createdAt: new Date('2024-05-25'),
  },
  {
    id: '44',
    title: 'Умный замок Aqara Smart Lock N100',
    description: 'Умный дверной замок с отпечатком пальца и Bluetooth',
    price: 15990,
    color: '#000000', // Черный
    category: 'Умный дом',
    createdAt: new Date('2024-05-28'),
  },
  {
    id: '45',
    title: 'Портативный монитор ASUS ZenScreen MB16ACE',
    description: '15.6-дюймовый портативный монитор с USB-C',
    price: 21990,
    category: 'Электроника',
    createdAt: new Date('2024-06-01'),
  },
  {
    id: '46',
    title: 'Электрическая вафельница Tefal Snack Collection',
    description: 'Вафельница для приготовления бельгийских вафель',
    price: 4990,
    color: '#FF0000', // Красный
    category: 'Кухня',
    createdAt: new Date('2024-06-05'),
  },
  {
    id: '47',
    title: 'Фитнес-трекер Garmin Vivosmart 5',
    description: 'Фитнес-браслет с пульсоксиметром и отслеживанием сна',
    price: 14990,
    color: '#000000', // Черный
    category: 'Гаджеты',
    createdAt: new Date('2024-06-08'),
  },
  {
    id: '48',
    title: 'Беспроводной зарядник Samsung Wireless Charger Duo',
    description: 'Зарядная станция для двух устройств одновременно',
    price: 5990,
    color: '#FFFFFF', // Белый
    category: 'Аксессуары',
    createdAt: new Date('2024-06-12'),
  },
  {
    id: '49',
    title: 'Игровой монитор LG UltraGear 27GN800-B',
    description: '27-дюймовый игровой монитор с IPS матрицей и 144 Гц',
    price: 32990,
    category: 'Электроника',
    createdAt: new Date('2024-06-15'),
  },
  {
    id: '50',
    title: 'Умный светильник Philips Hue Go',
    description: 'Портативный умный светильник с 16 млн цветов',
    price: 7990,
    color: '#FFFFFF', // Белый
    category: 'Умный дом',
    createdAt: new Date('2024-06-18'),
  },
  {
    id: '51',
    title: 'Электрическая зубная щетка Philips Sonicare ProtectiveClean',
    description:
      'Электрическая щетка с технологией sonicare и 3 режимами чистки',
    price: 8990,
    color: '#FFFFFF', // Белый
    category: 'Здоровье',
    createdAt: new Date('2024-06-20'),
  },
  {
    id: '52',
    title: 'Игровой ноутбук ASUS ROG Strix G15',
    description: 'Игровой ноутбук с процессором AMD Ryzen 7 и RTX 3060',
    price: 129990,
    category: 'Электроника',
    createdAt: new Date('2024-06-22'),
  },
  {
    id: '53',
    title: 'Беспроводной пылесос Tefal Air Force 360',
    description:
      'Мощный беспроводной пылесос с системой двойной циклонной фильтрации',
    price: 29990,
    color: '#0000FF', // Синий
    category: 'Бытовая техника',
    createdAt: new Date('2024-06-25'),
  },
  {
    id: '54',
    title: 'Умные весы Xiaomi Mi Smart Scale 2',
    description: 'Умные весы с измерением 10 показателей тела',
    price: 1990,
    color: '#FFFFFF', // Белый
    category: 'Здоровье',
    createdAt: new Date('2024-06-28'),
  },
  {
    id: '55',
    title: 'Портативная колонка JBL Charge 5',
    description: 'Водонепроницаемая портативная колонка с мощным звуком',
    price: 14990,
    color: '#FF0000', // Красный
    category: 'Аудио',
    createdAt: new Date('2024-07-01'),
  },
  {
    id: '56',
    title: "Электрическая точилка для ножей Chef'sChoice Trizor",
    description: 'Профессиональная точилка для ножей с алмазными абразивами',
    price: 12990,
    color: '#C0C0C0', // Серебристый
    category: 'Кухня',
    createdAt: new Date('2024-07-05'),
  },
  {
    id: '57',
    title: 'Игровая клавиатура Logitech G Pro X',
    description: 'Механическая игровая клавиатура с заменяемыми switches',
    price: 13990,
    color: '#000000', // Черный
    category: 'Гейминг',
    createdAt: new Date('2024-07-08'),
  },
  {
    id: '58',
    title: 'Умный дозатор для мыла Simplehuman',
    description: 'Сенсорный дозатор для мыла с автоматической подачей',
    price: 5990,
    color: '#C0C0C0', // Нержавеющая сталь
    category: 'Бытовая техника',
    createdAt: new Date('2024-07-12'),
  },
  {
    id: '59',
    title: 'Электронный планшет Wacom Intuos Pro',
    description: 'Графический планшет для цифрового рисования',
    price: 45990,
    category: 'Электроника',
    createdAt: new Date('2024-07-15'),
  },
  {
    id: '60',
    title: 'Беспроводной массажер для шеи Therabody TheraFace Pro',
    description: 'Многофункциональный массажер для лица и шеи',
    price: 29990,
    color: '#808080', // Серый
    category: 'Здоровье',
    createdAt: new Date('2024-07-18'),
  },
]
