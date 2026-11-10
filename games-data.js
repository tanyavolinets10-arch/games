const gamesCatalog = [
    {
        id: "school",
        icon: "🎒",
        category: { ru: "Школа", uk: "Школа", en: "School" },
        title: { ru: "Школьные принадлежности", uk: "Шкільне приладдя", en: "School Supplies" },
        desc: {
            ru: "Изучаем предметы: ручка, карандаш, доска, парта, маркер, тетрадь, книга, линейка, резинка.",
            uk: "Вивчаємо предмети: ручка, олівець, дошка, парта, маркер, зошит, книга, лінійка, гумка.",
            en: "Learn classroom objects: pen, pencil, board, desk, marker, notebook, book, ruler, eraser."
        },
        url: "english_school.html"
    },
    {
        id: "en_clothes_words",
        icon: "👕",
        category: { ru: "Одежда (EN)", uk: "Одяг (EN)", en: "Clothes (EN)" },
        title: { ru: "Одежда на английском (Слова)", uk: "Одяг англійською (Слова)", en: "Clothes Vocabulary" },
        desc: {
            ru: "Учим названия одежды на английском языке (dress, scarf, pants, boots, raincoat).",
            uk: "Вивчаємо назви одягу англійською мовою (dress, scarf, pants, boots, raincoat).",
            en: "Learn clothing vocabulary in English (dress, scarf, pants, boots, raincoat)."
        },
        url: "en_clothes_words.html"
    },
    {
        id: "en_clothes_shop",
        icon: "🛍️",
        category: { ru: "Шопинг (EN)", uk: "Шопінг (EN)", en: "Shopping (EN)" },
        title: { ru: "Магазин одежды на английском", uk: "Магазин одягу англійською", en: "Clothes Shop Game" },
        desc: {
            ru: "Слушаем названия на английском и находим нужные вещи на витрине магазина.",
            uk: "Слухаємо назви англійською та знаходимо потрібні речі на вітрині магазину.",
            en: "Listen to clothing items in English and find them on the shop display."
        },
        url: "en_clothes_shop.html"
    },
    {
        id: "english_seasons",
        icon: "🍂",
        category: { ru: "Природа (EN)", uk: "Природа (EN)", en: "Seasons (EN)" },
        title: { ru: "Времена года на английском", uk: "Пори року англійською", en: "Seasons of the Year" },
        desc: {
            ru: "Изучение названий времен года и месяцев на английском языке.",
            uk: "Вивчення назв пір року та місяців англійською мовою.",
            en: "Interactive game for learning seasons and months in English."
        },
        url: "english_seasons.html"
    },
    {
        id: "english_colors",
        icon: "🎨",
        category: { ru: "Цвета (EN)", uk: "Кольори (EN)", en: "Colors (EN)" },
        title: { ru: "Цвета на английском", uk: "Кольори англійською", en: "Learning Colors" },
        desc: {
            ru: "Яркая игра для закрепления названий цветов на английском языке.",
            uk: "Яскрава гра для закріплення назв кольорів англійською мовою.",
            en: "Bright game for practicing color names in English."
        },
        url: "english_colors.html"
    },
    {
        id: "ru_clothes_shop",
        icon: "🛍️",
        category: { ru: "Шопинг (RU)", uk: "Шопінг (RU)", en: "Shopping (RU)" },
        title: { ru: "Магазин одежды (на русском)", uk: "Магазин одягу (російською)", en: "Clothes Shop Game (RU)" },
        desc: {
            ru: "Слушаем список покупок на русском языке и находим нужные вещи на витрине.",
            uk: "Слухаємо список покупок російською мовою та знаходимо потрібні речі на вітрині.",
            en: "Listen to shopping lists in Russian and find items on display."
        },
        url: "ru_clothes_shop.html"
    },
    {
        id: "ru_clothes_words",
        icon: "🧥",
        category: { ru: "Одежда (RU)", uk: "Одяг (RU)", en: "Clothes (RU)" },
        title: { ru: "Учим названия одежды (RU)", uk: "Вивчаємо назви одягу (RU)", en: "Clothes Vocabulary (RU)" },
        desc: {
            ru: "2 раунда: платье, шарф, штаны, ботинки, дождевик. Слушаем озвучку.",
            uk: "2 раунди: сукня, шарф, штани, черевики, дощовик. Слухаємо озвучку.",
            en: "Practice clothing words in Russian."
        },
        url: "ru_clothes_words.html"
    },
    {
        id: "ru_colors",
        icon: "🎨",
        category: { ru: "Цвета (RU)", uk: "Кольори (RU)", en: "Colors (RU)" },
        title: { ru: "Изучаем цвета (RU)", uk: "Вивчаємо кольори (RU)", en: "Learning Colors (RU)" },
        desc: {
            ru: "Яркая игра для изучения названий цветов на слух и визуально.",
            uk: "Яскрава гра для вивчення назв кольорів на слух і візуально.",
            en: "Game for practicing colors in Russian."
        },
        url: "ru_colors.html"
    },
    {
        id: "ru_seasons",
        icon: "🍂",
        category: { ru: "Природа (RU)", uk: "Природа (RU)", en: "Seasons (RU)" },
        title: { ru: "Времена года (RU)", uk: "Пори року (RU)", en: "Seasons (RU)" },
        desc: {
            ru: "Изучение сезонов, месяцев и изменений в природе.",
            uk: "Вивчення сезонів, місяців та змін у природі.",
            en: "Seasons and months in Russian."
        },
        url: "ru_seasons.html"
    },
    {
        id: "ru_time_days",
        icon: "⏳",
        category: { ru: "Время (RU)", uk: "Час (RU)", en: "Time (RU)" },
        title: { ru: "Время суток и дни (RU)", uk: "Час доби та дні (RU)", en: "Time & Days (RU)" },
        desc: {
            ru: "Ориентация во времени: утро, день, вечер, ночь, а также «сегодня, вчера, завтра».",
            uk: "Орієнтація в часі: ранок, день, вечір, ніч, а також «сьогодні, вчора, завтра».",
            en: "Time orientation and days of the week in Russian."
        },
        url: "ru_time_days.html"
    },
    {
        id: "ru_weather",
        icon: "🌤️",
        category: { ru: "Погода (RU)", uk: "Погода (RU)", en: "Weather (RU)" },
        title: { ru: "Погода и ощущения (RU)", uk: "Погода та відчуття (RU)", en: "Weather & Feelings (RU)" },
        desc: {
            ru: "Изучаем погодные явления и физические ощущения (тепло, холодно, мокро).",
            uk: "Вивчаємо погодні явища та фізичні відчуття (тепло, холодно, мокро).",
            en: "Weather phenomena and physical sensations in Russian."
        },
        url: "ru_weather.html"
    },
    {
        id: "food",
        icon: "🍎",
        category: { ru: "Еда (RU)", uk: "Їжа (RU)", en: "Food (RU)" },
        title: { ru: "Изучаем продукты (RU)", uk: "Вивчаємо продукти (RU)", en: "Food & Groceries (RU)" },
        desc: {
            ru: "Понимание речи на слух и закрепление названий продуктов питания.",
            uk: "Розуміння мови на слух та закріплення назв продуктів харчування.",
            en: "Food and grocery vocabulary in Russian."
        },
        url: "russian_food.html"
    },
    {
        id: "fog",
        icon: "🌫️",
        category: { ru: "Логика (RU)", uk: "Логіка (RU)", en: "Logic (RU)" },
        title: { ru: "Туман и видимость (RU)", uk: "Туман і видимість (RU)", en: "Fog & Visibility (RU)" },
        desc: {
            ru: "Причинно-следственные связи: почему ничего не видно на улице при тумане.",
            uk: "Причинно-наслідкові зв'язки: туман і видимість.",
            en: "Cause and effect regarding fog in Russian."
        },
        url: "ru_cause_fog.html"
    }
];
