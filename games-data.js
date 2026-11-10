const gamesCatalog = [
    {
        id: "school",
        icon: "🎒",
        category: { ru: "Школа", uk: "Школа", en: "School" },
        tagBg: "bg-emerald-100 text-emerald-800",
        title: { ru: "Школьные принадлежности", uk: "Шкільне приладдя", en: "School Supplies" },
        desc: {
            ru: "Изучаем предметы: ручка, карандаш, доска, парта, маркер, тетрадь, книга, линейка, резинка.",
            uk: "Вивчаємо предмети: ручка, олівець, дошка, парта, маркер, зошит, книга, лінійка, гумка.",
            en: "Learn classroom objects: pen, pencil, board, desk, marker, notebook, book, ruler, eraser."
        },
        url: "english_school.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "clothes_shop",
        icon: "🛍️",
        category: { ru: "Шопинг", uk: "Шопінг", en: "Shopping" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Магазин одежды", uk: "Магазин одягу", en: "Clothes Shop Game" },
        desc: {
            ru: "Слушаем список покупок и находим нужные вещи на большой витрине магазина.",
            uk: "Слухаємо список покупок та знаходимо потрібні речі на великій вітрині магазину.",
            en: "Listen to clothing items and find the correct items on the shop display."
        },
        url: "ru_clothes_shop.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "clothes_words",
        icon: "🧥",
        category: { ru: "Одежда", uk: "Одяг", en: "Clothes" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Учим названия одежды", uk: "Вивчаємо назви одягу", en: "Clothes Vocabulary" },
        desc: {
            ru: "2 раунда: платье, шарф, штаны, ботинки, дождевик, сапоги. Слушаем озвучку и сопоставляем с картинками.",
            uk: "2 раунди: сукня, шарф, штани, черевики, дощовик, гумові чоботи. Слухаємо озвучку та зіставляємо з малюнками.",
            en: "Vocabulary practice: dress, scarf, pants, boots, raincoat, rubber boots."
        },
        url: "ru_clothes_words.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "colors",
        icon: "🎨",
        category: { ru: "Цвета", uk: "Кольори", en: "Colors" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Изучаем цвета", uk: "Вивчаємо кольори", en: "Learning Colors" },
        desc: {
            ru: "Яркая игра для изучения и закрепления названий цветов на слух и визуально.",
            uk: "Яскрава гра для вивчення та закріплення назв кольорів на слух і візуально.",
            en: "Bright and engaging game for learning and practicing color names."
        },
        url: "ru_colors.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "seasons",
        icon: "🍂",
        category: { ru: "Природа", uk: "Природа", en: "Seasons" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Времена года", uk: "Пори року", en: "Seasons of the Year" },
        desc: {
            ru: "Изучение сезонов, месяцев и характерных изменений в природе.",
            uk: "Вивчення сезонів, місяців та характерних змін у природі.",
            en: "Interactive game for learning the names of seasons and months."
        },
        url: "ru_seasons.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "time_days",
        icon: "⏳",
        category: { ru: "Время", uk: "Час", en: "Time" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Время суток и дни", uk: "Час доби та дні", en: "Time & Days" },
        desc: {
            ru: "Ориентация во времени: утро, день, вечер, ночь, а также «сегодня, вчера, завтра».",
            uk: "Орієнтація в часі: ранок, день, вечір, ніч, а також «сьогодні, вчора, завтра».",
            en: "Time orientation: morning, day, evening, night, and relative days."
        },
        url: "ru_time_days.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "weather",
        icon: "🌤️",
        category: { ru: "Погода", uk: "Погода", en: "Weather" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Погода и ощущения", uk: "Погода та відчуття", en: "Weather & Feelings" },
        desc: {
            ru: "Изучаем погодные явления и физические ощущения (тепло, холодно, мокро).",
            uk: "Вивчаємо погодні явища та фізичні відчуття (тепло, холодно, мокро).",
            en: "Learn weather phenomena and physical sensations (warm, cold, wet)."
        },
        url: "ru_weather.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "food",
        icon: "🍎",
        category: { ru: "Еда", uk: "Їжа", en: "Food" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Изучаем продукты", uk: "Вивчаємо продукти", en: "Food & Groceries" },
        desc: {
            ru: "Понимание речи на слух и закрепление названий продуктов питания и блюд.",
            uk: "Розуміння мови на слух та закріплення назв продуктів харчування та страв.",
            en: "Listening comprehension and practicing food and meal vocabulary."
        },
        url: "russian_food.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    },
    {
        id: "fog",
        icon: "🌫️",
        category: { ru: "Логика", uk: "Логіка", en: "Logic" },
        tagBg: "bg-amber-100 text-amber-800",
        title: { ru: "Туман и видимость", uk: "Туман і видимість", en: "Fog & Visibility" },
        desc: {
            ru: "Причинно-следственные связи: почему ничего не видно на улице, когда густой туман.",
            uk: "Причинно-наслідкові зв'язки: чому нічого не видно на вулиці, коли густий туман.",
            en: "Cause and effect: understanding visibility issues during heavy fog."
        },
        url: "ru_cause_fog.html",
        btnColor: "bg-amber-500 hover:bg-amber-600"
    }
];