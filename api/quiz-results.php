<?php
/**
 * API для сохранения результатов тестов
 */

require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json; charset=utf-8');

// Получаем session_id
function getSessionId() {
    if (!isset($_COOKIE['skills_session'])) {
        $sessionId = bin2hex(random_bytes(16));
        setcookie('skills_session', $sessionId, time() + (86400 * 365), '/');
        return $sessionId;
    }
    return $_COOKIE['skills_session'];
}

header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, GET');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(200);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$pdo = getDBConnection();

if (!$pdo) {
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка подключения к базе данных']);
    exit;
}

$sessionId = getSessionId();

try {
    // Создаем таблицу, если не существует
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `quiz_results` (
            `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
            `session_id` VARCHAR(255) DEFAULT NULL,
            `topic` VARCHAR(50) NOT NULL,
            `total` INT(11) NOT NULL,
            `correct` INT(11) NOT NULL,
            `percentage` INT(11) NOT NULL,
            `time_spent` INT(11) NOT NULL,
            `grade` VARCHAR(50) NOT NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `session_id` (`session_id`),
            KEY `topic` (`topic`),
            KEY `created_at` (`created_at`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    
    switch ($method) {
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($data['topic']) || !isset($data['percentage'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Недостаточно данных']);
                exit;
            }
            
            // Валидация и санитизация данных
            $topic = trim($data['topic']);
            if (!preg_match('/^[a-z0-9_-]+$/', $topic) || strlen($topic) > 50) {
                http_response_code(400);
                echo json_encode(['error' => 'Некорректное название темы']);
                exit;
            }
            
            $percentage = max(0, min(100, (int)$data['percentage']));
            $total = max(0, min(100, (int)($data['total'] ?? 0)));
            $correct = max(0, min($total, (int)($data['correct'] ?? 0)));
            $timeSpent = max(0, min(999999, (int)($data['timeSpent'] ?? 0)));
            $grade = substr(trim($data['grade']['text'] ?? 'Неизвестно'), 0, 50);
            
            $stmt = $pdo->prepare("
                INSERT INTO quiz_results (session_id, topic, total, correct, percentage, time_spent, grade)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ");
            
            $stmt->execute([
                $sessionId,
                $topic,
                $total,
                $correct,
                $percentage,
                $timeSpent,
                $grade
            ]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Результаты сохранены'
            ]);
            break;
            
        case 'GET':
            $topic = $_GET['topic'] ?? null;
            
            $sql = "SELECT * FROM quiz_results WHERE session_id = ?";
            $params = [$sessionId];
            
            if ($topic) {
                $sql .= " AND topic = ?";
                $params[] = $topic;
            }
            
            $sql .= " ORDER BY created_at DESC";
            
            $stmt = $pdo->prepare($sql);
            $stmt->execute($params);
            $results = $stmt->fetchAll();
            
            echo json_encode([
                'success' => true,
                'results' => $results
            ]);
            break;
            
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Метод не поддерживается']);
    }
} catch (PDOException $e) {
    error_log("Ошибка БД: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка сервера']);
}

