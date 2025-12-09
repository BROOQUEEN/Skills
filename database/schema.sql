-- База данных для проекта Skills
-- Создание структуры таблиц

-- Таблица пользователей (для будущего расширения)
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица прогресса изучения тем
CREATE TABLE IF NOT EXISTS `user_progress` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) UNSIGNED DEFAULT NULL,
    `session_id` VARCHAR(255) DEFAULT NULL COMMENT 'Для анонимных пользователей',
    `topic_id` VARCHAR(50) NOT NULL,
    `visited_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `time_spent` INT(11) DEFAULT 0 COMMENT 'Время изучения в секундах',
    `completed` TINYINT(1) DEFAULT 0 COMMENT 'Тема полностью изучена',
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    KEY `session_id` (`session_id`),
    KEY `topic_id` (`topic_id`),
    KEY `visited_at` (`visited_at`),
    UNIQUE KEY `user_topic` (`user_id`, `topic_id`),
    UNIQUE KEY `session_topic` (`session_id`, `topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица статистики изучения
CREATE TABLE IF NOT EXISTS `study_stats` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) UNSIGNED DEFAULT NULL,
    `session_id` VARCHAR(255) DEFAULT NULL,
    `date` DATE NOT NULL,
    `topics_studied` INT(11) DEFAULT 0,
    `time_spent` INT(11) DEFAULT 0 COMMENT 'В секундах',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    KEY `session_id` (`session_id`),
    KEY `date` (`date`),
    UNIQUE KEY `user_date` (`user_id`, `date`),
    UNIQUE KEY `session_date` (`session_id`, `date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица тем (справочник)
CREATE TABLE IF NOT EXISTS `topics` (
    `id` VARCHAR(50) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `icon` VARCHAR(10) DEFAULT NULL,
    `category` ENUM('basic', 'important', 'critical', 'advanced') NOT NULL,
    `badge` VARCHAR(50) DEFAULT NULL,
    `order` INT(11) DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `category` (`category`),
    KEY `order` (`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Таблица заметок пользователей (для будущего расширения)
CREATE TABLE IF NOT EXISTS `user_notes` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) UNSIGNED DEFAULT NULL,
    `session_id` VARCHAR(255) DEFAULT NULL,
    `topic_id` VARCHAR(50) NOT NULL,
    `note` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    KEY `session_id` (`session_id`),
    KEY `topic_id` (`topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Вставка начальных данных тем
INSERT INTO `topics` (`id`, `title`, `description`, `icon`, `category`, `badge`, `order`) VALUES
('basics', 'Основы JavaScript', 'Переменные, типы данных, операторы, условия, циклы', '📚', 'basic', 'Базовый уровень', 1),
('functions', 'Функции', 'Объявление функций, стрелочные функции, замыкания, каррирование', '⚙️', 'important', 'Важно', 2),
('arrays', 'Массивы', 'Методы массивов: map, filter, reduce, forEach и другие', '📦', 'important', 'Важно', 3),
('objects', 'Объекты и Прототипы', 'Работа с объектами, прототипное наследование, классы ES6', '🎁', 'important', 'Важно', 4),
('es6', 'ES6+ Синтаксис', 'Деструктуризация, spread/rest, шаблонные строки, модули', '✨', 'important', 'Важно', 5),
('async', 'Асинхронность', 'Promises, async/await, обработка ошибок, параллельные запросы', '⏳', 'critical', 'Критично', 6),
('oop', 'ООП в JavaScript', 'Классы, наследование, инкапсуляция, полиморфизм', '🏛️', 'important', 'Важно', 7),
('scope', 'Область видимости и this', 'Lexical scope, hoisting, контекст выполнения, bind/call/apply', '🔍', 'important', 'Важно', 8),
('dom', 'Работа с DOM', 'Выбор элементов, манипуляции, создание элементов, оптимизация', '🌳', 'critical', 'Критично', 9),
('events', 'События', 'Обработчики событий, делегирование, кастомные события', '🎪', 'critical', 'Критично', 10),
('api', 'Работа с API', 'Fetch API, XMLHttpRequest, обработка ответов, ошибок', '🌐', 'critical', 'Критично', 11),
('advanced', 'Продвинутые темы', 'Генераторы, итераторы, Proxy, Reflect, WeakMap, WeakSet', '🚀', 'advanced', 'Продвинутый', 12),
('patterns', 'Паттерны проектирования', 'Модуль, Singleton, Factory, Observer, Promise и другие', '🎨', 'advanced', 'Продвинутый', 13),
('regexp', 'Регулярные выражения', 'Синтаксис, методы, флаги, практические примеры', '🔤', 'important', 'Важно', 14),
('errors', 'Обработка ошибок', 'Try/catch, типы ошибок, кастомные ошибки, best practices', '⚠️', 'important', 'Важно', 15)
ON DUPLICATE KEY UPDATE 
    `title` = VALUES(`title`),
    `description` = VALUES(`description`),
    `icon` = VALUES(`icon`),
    `category` = VALUES(`category`),
    `badge` = VALUES(`badge`),
    `order` = VALUES(`order`);

