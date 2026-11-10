const gamesCatalog = [
    // --- ИГРЫ ДЛЯ ИЗУЧЕНИЯ АНГЛИЙСКОГО ЯЗЫКА ---
    {
        id: "school",
        track: "en",
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
        track: "en",
        icon: "👕",
        category: { ru: "Одежда", uk: "Одяг", en: "Clothes" },
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
        track: "en",
        icon: "🛍️",
        category: { ru: "Шопинг", uk: "Шопінг", en: "Shopping" },
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
        track: "en",
        icon: "🍂",
        category: { ru: "Природа", uk: "Природа", en: "Seasons" },
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
        track: "en",
        icon: "🎨",
        category: { ru: "Цвета", uk: "Кольори", en: "Colors" },
        title: { ru: "Цвета на английском", uk: "Кольори англійською", en: "Learning Colors" },
        desc: {
            ru: "Яркая игра для закрепления названий цветов на английском языке.",
            uk: "Яскрава гра для закріплення назв кольорів англійською мовою.",
            en: "Bright game for practicing color names in English."
        },
        url: "english_colors.html"
    },

    // --- ИГРЫ ДЛЯ ИЗУЧЕНИЯ РУССКОГО ЯЗЫКА ---
    {
        id: "ru_clothes_shop",
        track: "ru",
        icon: "🛍️",
        category: { ru: "Шопинг", uk: "Шопінг", en: "Shopping" },
        title: { ru: "Магазин одежды", uk: "Магазин одягу", en: "Clothes Shop Game" },
        desc: {
            ru: "Слушаем список покупок на русском языке и находим нужные вещи на большой витрине.",
            uk: "Слухаємо список покупок та знаходимо потрібні речі на великій вітрині магазину.",
            en: "Listen to shopping lists and find items on the display."
        },
        url: "ru_clothes_shop.html"
    },
    {
        id: "ru_clothes_words",
        track: "ru",
        icon: "🧥",
        category: { ru: "Одежда", uk: "Одяг", en: "Clothes" },
        title: { ru: "Учим названия одежды", uk: "Вивчаємо назви одягу", en: "Clothes Vocabulary" },
        desc: {
            ru: "2 раунда: платье, шарф, штаны, ботинки, дождевик, сапоги. Слушаем озвучку.",
            uk: "2 раунди: сукня, шарф, штани, черевики, дощовик, чоботи. Слухаємо озвучку.",
            en: "Practice clothing words in Russian."
        },
        url: "ru_clothes_words.html"
    },
    {
        id: "ru_colors",
        track: "ru",
        icon: "🎨",
        category: { ru: "Цвета", uk: "Кольори", en: "Colors" },
        title: { ru: "Изучаем цвета", uk: "Вивчаємо кольори", en: "Learning Colors" },
        desc: {
            ru: "Яркая игра для изучения и закрепления названий цветов на слух и визуально.",
            uk: "Яскрава гра для вивчення та закріплення назв кольорів.",
            en: "Game for practicing colors in Russian."
        },
        url: "ru_colors.html"
    },
    {
        id: "ru_seasons",
        track: "ru",
        icon: "🍂",
        category: { ru: "Природа", uk: "Природа", en: "Seasons" },
        title: { ru: "Времена года", uk: "Пори року", en: "Seasons" },
        desc: {
            ru: "Изучение сезонов, месяцев и характерных изменений в природе на русском языке.",
            uk: "Вивчення сезонів, місяців та змін у природі.",
            en: "Seasons and months in Russian."
        },
        url: "ru_seasons.html"
    },
    {
        id: "ru_time_days",
        track: "ru",
        icon: "⏳",
        category: { ru: "Время", uk: "Час", en: "Time" },
        title: { ru: "Время суток и дни", uk: "Час доби та дні", en: "Time & Days" },
        desc: {
            ru: "Ориентация во времени: утро, день, вечер, ночь, а также «сегодня, вчера, завтра».",
            uk: "Орієнтація в часі: ранок, день, вечір, ніч.",
            en: "Time orientation and days of the week."
        },
        url: "ru_time_days.html"
    },
    {
        id: "ru_weather",
        track: "ru",
        icon: "🌤️",
        category: { ru: "Погода", uk: "Погода", en: "Weather" },
        title: { ru: "Погода и ощущения", uk: "Погода та відчуття", en: "Weather & Feelings" },
        desc: {
            ru: "Изучаем погодные явления и физические ощущения (тепло, холодно, мокро).",
            uk: "Вивчаємо погодні явища та фізичні відчуття.",
            en: "Weather phenomena and physical sensations."
        },
        url: "ru_weather.html"
    },
    {
        id: "food",
        track: "ru",
        icon: "🍎",
        category: { ru: "Еда", uk: "Їжа", en: "Food" },
        title: { ru: "Изучаем продукты", uk: "Вивчаємо продукти", en: "Food & Groceries" },
        desc: {
            ru: "Понимание речи на слух и закрепление названий продуктов питания и блюд.",
            uk: "Розуміння мови на слух та закріплення назв продуктів.",
            en: "Food and grocery vocabulary."
        },
        url: "russian_food.html"
    },
    {
        id: "fog",
        track: "ru",
        icon: "🌫️",
        category: { ru: "Логика", uk: "Логіка", en: "Logic" },
        title: { ru: "Туман и видимость", uk: "Туман і видимість", en: "Fog & Visibility" },
        desc: {
            ru: "Причинно-следственные связи: почему ничего не видно на улице, когда густой туман.",
            uk: "Причинно-наслідкові зв'язки: туман і видимість.",
            en: "Cause and effect regarding fog and visibility."
        },
        url: "ru_cause_fog.html"
    }
];
