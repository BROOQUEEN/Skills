<?php
/**
 * Скрипт инициализации базы данных
 * Запустите этот файл один раз для создания структуры БД
 */

require_once __DIR__ . '/../config/database.php';

echo "Инициализация базы данных...\n\n";

try {
    // Подключаемся к MySQL без выбора базы данных
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET,
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    
    // Создаем базу данных, если не существует
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "✓ База данных '" . DB_NAME . "' создана или уже существует\n";
    
    // Подключаемся к базе данных
    $pdo->exec("USE `" . DB_NAME . "`");
    
    // Читаем и выполняем SQL скрипт
    $sqlFile = __DIR__ . '/schema.sql';
    if (!file_exists($sqlFile)) {
        throw new Exception("Файл schema.sql не найден");
    }
    
    $sql = file_get_contents($sqlFile);
    
    // Разбиваем на отдельные запросы
    $statements = array_filter(
        array_map('trim', explode(';', $sql)),
        function($stmt) {
            return !empty($stmt) && !preg_match('/^--/', $stmt);
        }
    );
    
    foreach ($statements as $statement) {
        if (!empty(trim($statement))) {
            $pdo->exec($statement);
        }
    }
    
    echo "✓ Структура таблиц создана\n";
    echo "✓ Начальные данные загружены\n\n";
    echo "База данных успешно инициализирована!\n";
    
} catch (PDOException $e) {
    echo "❌ Ошибка: " . $e->getMessage() . "\n";
    exit(1);
} catch (Exception $e) {
    echo "❌ Ошибка: " . $e->getMessage() . "\n";
    exit(1);
}

