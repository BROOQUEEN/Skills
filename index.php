<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Полный курс JavaScript для Middle Frontend разработчика. Изучайте основы, функции, массивы, объекты, асинхронность, DOM, события и многое другое.">
    <meta name="keywords" content="JavaScript, обучение, курс, программирование, frontend, разработка">
    <meta name="author" content="Скиллы">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Скиллы - Обучение JavaScript">
    <meta property="og:description" content="Полный курс JavaScript для Middle Frontend разработчика">
    <meta property="og:url" content="">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Скиллы - Обучение JavaScript">
    <meta property="twitter:description" content="Полный курс JavaScript для Middle Frontend разработчика">
    
    <title>Скиллы - Обучение JavaScript</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎯</text></svg>">
    <link rel="stylesheet" href="css/style.css">
    <meta name="theme-color" content="#6366f1">
</head>
<body>
    <?php include 'includes/header.php'; ?>

    <main class="main">
        <div class="container">
            <div class="main-header">
                <div class="main-header-title">
                    <h2 class="section-title">Темы для изучения</h2>
                    <a href="quiz.php" class="quiz-link-btn">🧪 Пройти тесты</a>
                </div>
                
                <!-- Прогресс изучения -->
                <div class="progress-container" id="progress-container">
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar" id="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
                        <p class="progress-text" id="progress-text">Изучено: 0 из 15 тем (0%)</p>
                        <button id="reset-progress-btn" class="reset-progress-btn" title="Сбросить прогресс" aria-label="Сбросить прогресс">↺ Сбросить</button>
                    </div>
                </div>
            </div>
            
            <!-- Поиск и фильтры -->
            <div class="search-filters">
                <div class="search-wrapper">
                    <input 
                        type="search" 
                        id="topic-search" 
                        class="search-input" 
                        placeholder="Поиск тем..." 
                        aria-label="Поиск тем для изучения"
                        autocomplete="off"
                    >
                    <span class="search-icon" aria-hidden="true">🔍</span>
                </div>
                
                <select id="category-filter" class="category-filter" aria-label="Фильтр по категориям">
                    <option value="all">Все категории</option>
                    <option value="basic">Базовый уровень</option>
                    <option value="important">Важно</option>
                    <option value="critical">Критично</option>
                    <option value="advanced">Продвинутый</option>
                </select>
            </div>
            
            <section class="topics-grid" role="list" aria-label="Темы для изучения" id="topics-grid">
                <!-- Карточки будут сгенерированы из config.js -->
                <noscript>
                    <p>Для отображения тем включите JavaScript в вашем браузере.</p>
                </noscript>
            </section>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Скиллы - Обучение JavaScript. Все права защищены.</p>
        </div>
    </footer>

    <script src="js/config.js"></script>
    <script src="js/progress.js"></script>
    <script src="js/database.js"></script>
    <script src="js/main.js"></script>
</body>
</html>

