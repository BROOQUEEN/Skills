<header class="header">
    <div class="container">
        <div>
            <h1 class="logo">🎯 Скиллы</h1>
            <p class="subtitle">Полный курс JavaScript для Middle Frontend разработчика</p>
        </div>
        <nav class="header-nav">
            <a href="index.php" class="<?= basename($_SERVER['PHP_SELF']) === 'index.php' ? 'active' : '' ?>">Главная</a>
            <a href="quiz.php" class="quiz-link <?= basename($_SERVER['PHP_SELF']) === 'quiz.php' ? 'active' : '' ?>">🧪 Тесты</a>
        </nav>
    </div>
</header>
