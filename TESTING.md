# Руководство по тестированию

## Быстрый старт

### Вариант 1: Автоматические тесты (Jest)

1. **Установка зависимостей:**
```bash
npm install
```

2. **Запуск тестов:**
```bash
npm test
```

3. **Запуск с покрытием кода:**
```bash
npm run test:coverage
```

4. **Запуск в режиме наблюдения:**
```bash
npm run test:watch
```

### Вариант 2: Ручное тестирование (Браузер)

1. Откройте файл `tests/manual-test.html` в браузере
2. Нажмите кнопку "▶ Запустить все тесты"
3. Проверьте результаты

## Что тестируется

### ✅ Модуль config.js
- Структура данных тем
- Валидация полей
- Уникальность ID
- Санитизация HTML
- Создание карточек

### ✅ Модуль progress.js
- Сохранение в localStorage
- Получение прогресса
- Статистика
- Сброс данных
- Обработка ошибок

### ✅ Модуль main.js
- Фильтрация тем
- Поиск
- Навигация
- Обработка URL

## Структура тестов

```
tests/
├── setup.js              # Настройка окружения
├── config.test.js        # Тесты конфигурации
├── progress.test.js      # Тесты прогресса
├── main.test.js          # Тесты навигации
├── integration.test.js   # Интеграционные тесты
├── manual-test.html      # Ручное тестирование
└── README.md            # Документация
```

## Примеры тестов

### Тест конфигурации
```javascript
test('TOPICS_CONFIG должен быть массивом', () => {
  expect(Array.isArray(TOPICS_CONFIG)).toBe(true);
});
```

### Тест прогресса
```javascript
test('должен сохранять тему как изученную', () => {
  ProgressManager.markAsVisited('basics');
  expect(ProgressManager.isVisited('basics')).toBe(true);
});
```

## Покрытие кода

После запуска `npm run test:coverage` откройте:
```
coverage/lcov-report/index.html
```

## Добавление новых тестов

1. Создайте файл `tests/your-module.test.js`
2. Импортируйте тестируемый модуль
3. Напишите тесты:
```javascript
describe('YourModule', () => {
  test('should do something', () => {
    expect(true).toBe(true);
  });
});
```

## Известные проблемы

- Некоторые функции `main.js` требуют реального DOM (тестируются вручную)
- Fetch API мокируется для тестирования

## CI/CD

Тесты можно интегрировать в CI/CD:

```yaml
# Пример для GitHub Actions
- name: Run tests
  run: npm test
```

