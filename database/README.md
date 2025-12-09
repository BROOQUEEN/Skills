# База данных проекта Skills

## Быстрая установка

### Вариант 1: Автоматическая инициализация (PHP)

```bash
php database/init.php
```

Этот скрипт:
- Создаст базу данных `skills` (если не существует)
- Создаст все необходимые таблицы
- Загрузит начальные данные тем

### Вариант 2: Ручная установка (MySQL)

1. Откройте MySQL консоль или phpMyAdmin
2. Выполните SQL скрипт:

```bash
mysql -u root skills < database/schema.sql
```

Или через phpMyAdmin:
- Выберите базу данных `skills`
- Перейдите на вкладку "Импорт"
- Выберите файл `database/schema.sql`
- Нажмите "Выполнить"

## Структура базы данных

### Таблицы

1. **users** - Пользователи (для будущего расширения)
2. **topics** - Справочник тем для изучения
3. **user_progress** - Прогресс изучения тем
4. **study_stats** - Статистика изучения по дням
5. **user_notes** - Заметки пользователей (для будущего расширения)

## API

### GET `/api/progress.php`
Получить прогресс пользователя

**Ответ:**
```json
{
  "success": true,
  "progress": [
    {
      "topic_id": "basics",
      "visited_at": "2025-01-15 10:30:00",
      "time_spent": 300,
      "completed": 1
    }
  ],
  "stats": {
    "studied": 5,
    "total": 15,
    "percentage": 33,
    "total_time": 1500,
    "last_studied": "2025-01-15 10:30:00"
  }
}
```

### POST `/api/progress.php`
Сохранить прогресс изучения темы

**Тело запроса:**
```json
{
  "topic_id": "basics",
  "time_spent": 300,
  "completed": 1
}
```

**Ответ:**
```json
{
  "success": true,
  "message": "Прогресс сохранен"
}
```

### DELETE `/api/progress.php`
Сбросить весь прогресс пользователя

**Ответ:**
```json
{
  "success": true,
  "message": "Прогресс сброшен"
}
```

## Конфигурация

Параметры подключения находятся в `config/database.php`:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'skills');
define('DB_USER', 'root');
define('DB_PASS', '');
```

## Использование в JavaScript

```javascript
// Получить прогресс
const progress = await DatabaseAPI.getProgress();

// Сохранить прогресс
await DatabaseAPI.saveProgress('basics', 300, true);

// Сбросить прогресс
await DatabaseAPI.resetProgress();

// Синхронизировать с сервером
await DatabaseAPI.syncProgress();
```

## Безопасность

- Используется подготовленные запросы (PDO) для защиты от SQL-инъекций
- Session ID используется для анонимных пользователей
- В будущем можно добавить аутентификацию пользователей

## Резервное копирование

```bash
# Создать бэкап
mysqldump -u root skills > backup_skills_$(date +%Y%m%d).sql

# Восстановить из бэкапа
mysql -u root skills < backup_skills_20250115.sql
```

