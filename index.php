<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Скиллы - Обучение JavaScript</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>

    <main class="main">
        <div class="container">
            <h2 class="section-title">Темы для изучения</h2>
            
            <section class="topics-grid">
                <div class="topic-card" data-page="basics">
                    <div class="card-icon">📚</div>
                    <h3>Основы JavaScript</h3>
                    <p>Переменные, типы данных, операторы, условия, циклы</p>
                    <span class="card-badge">Базовый уровень</span>
                </div>

                <div class="topic-card" data-page="functions">
                    <div class="card-icon">⚙️</div>
                    <h3>Функции</h3>
                    <p>Объявление функций, стрелочные функции, замыкания, каррирование</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="arrays">
                    <div class="card-icon">📦</div>
                    <h3>Массивы</h3>
                    <p>Методы массивов: map, filter, reduce, forEach и другие</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="objects">
                    <div class="card-icon">🎁</div>
                    <h3>Объекты и Прототипы</h3>
                    <p>Работа с объектами, прототипное наследование, классы ES6</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="es6">
                    <div class="card-icon">✨</div>
                    <h3>ES6+ Синтаксис</h3>
                    <p>Деструктуризация, spread/rest, шаблонные строки, модули</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="async">
                    <div class="card-icon">⏳</div>
                    <h3>Асинхронность</h3>
                    <p>Promises, async/await, обработка ошибок, параллельные запросы</p>
                    <span class="card-badge">Критично</span>
                </div>

                <div class="topic-card" data-page="oop">
                    <div class="card-icon">🏛️</div>
                    <h3>ООП в JavaScript</h3>
                    <p>Классы, наследование, инкапсуляция, полиморфизм</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="scope">
                    <div class="card-icon">🔍</div>
                    <h3>Область видимости и this</h3>
                    <p>Lexical scope, hoisting, контекст выполнения, bind/call/apply</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="dom">
                    <div class="card-icon">🌳</div>
                    <h3>Работа с DOM</h3>
                    <p>Выбор элементов, манипуляции, создание элементов, оптимизация</p>
                    <span class="card-badge">Критично</span>
                </div>

                <div class="topic-card" data-page="events">
                    <div class="card-icon">🎪</div>
                    <h3>События</h3>
                    <p>Обработчики событий, делегирование, кастомные события</p>
                    <span class="card-badge">Критично</span>
                </div>

                <div class="topic-card" data-page="api">
                    <div class="card-icon">🌐</div>
                    <h3>Работа с API</h3>
                    <p>Fetch API, XMLHttpRequest, обработка ответов, ошибок</p>
                    <span class="card-badge">Критично</span>
                </div>

                <div class="topic-card" data-page="advanced">
                    <div class="card-icon">🚀</div>
                    <h3>Продвинутые темы</h3>
                    <p>Генераторы, итераторы, Proxy, Reflect, WeakMap, WeakSet</p>
                    <span class="card-badge">Продвинутый</span>
                </div>

                <div class="topic-card" data-page="patterns">
                    <div class="card-icon">🎨</div>
                    <h3>Паттерны проектирования</h3>
                    <p>Модуль, Singleton, Factory, Observer, Promise и другие</p>
                    <span class="card-badge">Продвинутый</span>
                </div>

                <div class="topic-card" data-page="regexp">
                    <div class="card-icon">🔤</div>
                    <h3>Регулярные выражения</h3>
                    <p>Синтаксис, методы, флаги, практические примеры</p>
                    <span class="card-badge">Важно</span>
                </div>

                <div class="topic-card" data-page="errors">
                    <div class="card-icon">⚠️</div>
                    <h3>Обработка ошибок</h3>
                    <p>Try/catch, типы ошибок, кастомные ошибки, best practices</p>
                    <span class="card-badge">Важно</span>
                </div>
            </section>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Скиллы - Обучение JavaScript. Все права защищены.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

