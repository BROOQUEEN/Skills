<?php
/**
 * Конфигурация базы данных
 */

// Параметры подключения
define('DB_HOST', 'localhost');
define('DB_NAME', 'skills');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

/**
 * Создает подключение к базе данных
 * @return PDO|null
 */
function getDBConnection() {
    static $pdo = null;
    
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES  => false,
            ];
            
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            error_log("Ошибка подключения к БД: " . $e->getMessage());
            return null;
        }
    }
    
    return $pdo;
}

/**
 * Проверяет подключение к базе данных
 * @return bool
 */
function checkDBConnection() {
    $pdo = getDBConnection();
    return $pdo !== null;
}

