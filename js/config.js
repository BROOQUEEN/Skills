// Конфигурация тем для изучения
const TOPICS_CONFIG = [
    {
        id: 'basics',
        icon: '📚',
        title: 'Основы JavaScript',
        description: 'Переменные, типы данных, операторы, условия, циклы',
        badge: 'Базовый уровень',
        category: 'basic'
    },
    {
        id: 'functions',
        icon: '⚙️',
        title: 'Функции',
        description: 'Объявление функций, стрелочные функции, замыкания, каррирование',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'arrays',
        icon: '📦',
        title: 'Массивы',
        description: 'Методы массивов: map, filter, reduce, forEach и другие',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'objects',
        icon: '🎁',
        title: 'Объекты и Прототипы',
        description: 'Работа с объектами, прототипное наследование, классы ES6',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'es6',
        icon: '✨',
        title: 'ES6+ Синтаксис',
        description: 'Деструктуризация, spread/rest, шаблонные строки, модули',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'async',
        icon: '⏳',
        title: 'Асинхронность',
        description: 'Promises, async/await, обработка ошибок, параллельные запросы',
        badge: 'Критично',
        category: 'critical'
    },
    {
        id: 'oop',
        icon: '🏛️',
        title: 'ООП в JavaScript',
        description: 'Классы, наследование, инкапсуляция, полиморфизм',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'scope',
        icon: '🔍',
        title: 'Область видимости и this',
        description: 'Lexical scope, hoisting, контекст выполнения, bind/call/apply',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'dom',
        icon: '🌳',
        title: 'Работа с DOM',
        description: 'Выбор элементов, манипуляции, создание элементов, оптимизация',
        badge: 'Критично',
        category: 'critical'
    },
    {
        id: 'events',
        icon: '🎪',
        title: 'События',
        description: 'Обработчики событий, делегирование, кастомные события',
        badge: 'Критично',
        category: 'critical'
    },
    {
        id: 'api',
        icon: '🌐',
        title: 'Работа с API',
        description: 'Fetch API, XMLHttpRequest, обработка ответов, ошибок',
        badge: 'Критично',
        category: 'critical'
    },
    {
        id: 'advanced',
        icon: '🚀',
        title: 'Продвинутые темы',
        description: 'Генераторы, итераторы, Proxy, Reflect, WeakMap, WeakSet',
        badge: 'Продвинутый',
        category: 'advanced'
    },
    {
        id: 'patterns',
        icon: '🎨',
        title: 'Паттерны проектирования',
        description: 'Модуль, Singleton, Factory, Observer, Promise и другие',
        badge: 'Продвинутый',
        category: 'advanced'
    },
    {
        id: 'regexp',
        icon: '🔤',
        title: 'Регулярные выражения',
        description: 'Синтаксис, методы, флаги, практические примеры',
        badge: 'Важно',
        category: 'important'
    },
    {
        id: 'errors',
        icon: '⚠️',
        title: 'Обработка ошибок',
        description: 'Try/catch, типы ошибок, кастомные ошибки, best practices',
        badge: 'Важно',
        category: 'important'
    }
];

// Утилита для безопасного вставки HTML
const sanitizeHTML = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
};

// Утилита для создания карточки темы
const createTopicCard = (topic, isVisited = false) => {
    const visitedClass = isVisited ? 'visited' : '';
    return `
        <article class="topic-card ${visitedClass}" data-page="${topic.id}" role="listitem" data-category="${topic.category}">
            <div class="card-icon" aria-hidden="true">${sanitizeHTML(topic.icon)}</div>
            <h3>${sanitizeHTML(topic.title)}</h3>
            <p>${sanitizeHTML(topic.description)}</p>
            <span class="card-badge badge-${topic.category}">${sanitizeHTML(topic.badge)}</span>
            ${isVisited ? '<span class="visited-indicator" aria-label="Изучено">✓</span>' : ''}
        </article>
    `;
};

