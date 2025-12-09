<?php
/**
 * API для работы с прогрессом изучения
 */

require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json; charset=utf-8');

// Получаем session_id из cookie или создаем новый
function getSessionId() {
    if (!isset($_COOKIE['skills_session'])) {
        $sessionId = bin2hex(random_bytes(16));
        setcookie('skills_session', $sessionId, time() + (86400 * 365), '/'); // 1 год
        return $sessionId;
    }
    return $_COOKIE['skills_session'];
}

// Обработка CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, DELETE');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(200);
    exit;
}

header('Access-Control-Allow-Origin: *');

$method = $_SERVER['REQUEST_METHOD'];
$pdo = getDBConnection();

if (!$pdo) {
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка подключения к базе данных']);
    exit;
}

$sessionId = getSessionId();

try {
    switch ($method) {
        case 'GET':
            // Получить прогресс пользователя
            $stmt = $pdo->prepare("
                SELECT topic_id, visited_at, time_spent, completed 
                FROM user_progress 
                WHERE session_id = ?
                ORDER BY visited_at DESC
            ");
            $stmt->execute([$sessionId]);
            $progress = $stmt->fetchAll();
            
            // Получить статистику
            $stmt = $pdo->prepare("
                SELECT 
                    COUNT(DISTINCT topic_id) as topics_studied,
                    SUM(time_spent) as total_time,
                    MAX(visited_at) as last_studied
                FROM user_progress 
                WHERE session_id = ?
            ");
            $stmt->execute([$sessionId]);
            $stats = $stmt->fetch();
            
            // Получить общее количество тем
            $stmt = $pdo->query("SELECT COUNT(*) as total FROM topics");
            $total = $stmt->fetch()['total'];
            
            echo json_encode([
                'success' => true,
                'progress' => $progress,
                'stats' => [
                    'studied' => (int)$stats['topics_studied'],
                    'total' => (int)$total,
                    'percentage' => $total > 0 ? round(($stats['topics_studied'] / $total) * 100) : 0,
                    'total_time' => (int)$stats['total_time'],
                    'last_studied' => $stats['last_studied']
                ]
            ]);
            break;
            
        case 'POST':
            // Отметить тему как изученную
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($data['topic_id'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Не указан topic_id']);
                exit;
            }
            
            // Валидация и санитизация входных данных
            $topicId = trim($data['topic_id']);
            if (!preg_match('/^[a-z0-9_-]+$/', $topicId) || strlen($topicId) > 50) {
                http_response_code(400);
                echo json_encode(['error' => 'Некорректный topic_id']);
                exit;
            }
            
            $timeSpent = isset($data['time_spent']) ? max(0, min(999999, (int)$data['time_spent'])) : 0;
            $completed = isset($data['completed']) ? (int)($data['completed'] == 1 || $data['completed'] === true) : 0;
            
            // Проверяем существование темы
            $stmt = $pdo->prepare("SELECT id FROM topics WHERE id = ?");
            $stmt->execute([$topicId]);
            if (!$stmt->fetch()) {
                http_response_code(404);
                echo json_encode(['error' => 'Тема не найдена']);
                exit;
            }
            
            // Вставляем или обновляем прогресс
            $stmt = $pdo->prepare("
                INSERT INTO user_progress (session_id, topic_id, time_spent, completed)
                VALUES (?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE 
                    visited_at = CURRENT_TIMESTAMP,
                    time_spent = time_spent + ?,
                    completed = GREATEST(completed, ?)
            ");
            $stmt->execute([$sessionId, $topicId, $timeSpent, $completed, $timeSpent, $completed]);
            
            // Обновляем статистику за день
            $stmt = $pdo->prepare("
                INSERT INTO study_stats (session_id, date, topics_studied, time_spent)
                VALUES (?, CURDATE(), 1, ?)
                ON DUPLICATE KEY UPDATE 
                    topics_studied = topics_studied + 1,
                    time_spent = time_spent + ?
            ");
            $stmt->execute([$sessionId, $timeSpent, $timeSpent]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Прогресс сохранен'
            ]);
            break;
            
        case 'DELETE':
            // Сбросить прогресс
            $stmt = $pdo->prepare("DELETE FROM user_progress WHERE session_id = ?");
            $stmt->execute([$sessionId]);
            
            $stmt = $pdo->prepare("DELETE FROM study_stats WHERE session_id = ?");
            $stmt->execute([$sessionId]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Прогресс сброшен'
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

