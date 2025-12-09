/**
 * Интеграционные тесты для взаимодействия компонентов
 */
describe('Integration Tests', () => {
  let ProgressManager;
  let mockLocalStorage;
  let mockDOM;
  
  beforeEach(() => {
    // Настройка окружения
    mockLocalStorage = {
      store: {},
      getItem: jest.fn((key) => mockLocalStorage.store[key] || null),
      setItem: jest.fn((key, value) => {
        mockLocalStorage.store[key] = value;
      }),
      removeItem: jest.fn(),
      clear: jest.fn(() => {
        mockLocalStorage.store = {};
      })
    };
    
    global.localStorage = mockLocalStorage;
    global.TOPICS_CONFIG = [
      { id: 'basics', title: 'Основы JavaScript' },
      { id: 'functions', title: 'Функции' },
      { id: 'arrays', title: 'Массивы' }
    ];
    
    mockDOM = {
      progressBar: {
        style: { width: '' }
      },
      progressText: {
        textContent: ''
      },
      cards: []
    };
    
    global.document = {
      getElementById: jest.fn((id) => {
        if (id === 'progress-bar') return mockDOM.progressBar;
        if (id === 'progress-text') return mockDOM.progressText;
        return null;
      }),
      querySelectorAll: jest.fn(() => mockDOM.cards)
    };
    
    delete require.cache[require.resolve('../js/config.js')];
    delete require.cache[require.resolve('../js/progress.js')];
    ProgressManager = require('../js/progress.js').ProgressManager;
  });
  
  test('прогресс должен обновляться при изучении темы', () => {
    // Симулируем изучение темы
    ProgressManager.markAsVisited('basics');
    
    // Проверяем, что тема сохранена
    const visited = ProgressManager.getVisitedTopics();
    expect(visited).toContain('basics');
    
    // Проверяем статистику
    const stats = ProgressManager.getStats();
    expect(stats.visited).toBe(1);
    expect(stats.percentage).toBeGreaterThan(0);
  });
  
  test('прогресс должен корректно вычислять процент', () => {
    ProgressManager.markAsVisited('basics');
    ProgressManager.markAsVisited('functions');
    
    const stats = ProgressManager.getStats();
    expect(stats.visited).toBe(2);
    expect(stats.total).toBe(3);
    expect(stats.percentage).toBe(67); // 2/3 = 66.67% ≈ 67%
  });
  
  test('не должно быть дубликатов в изученных темах', () => {
    ProgressManager.markAsVisited('basics');
    ProgressManager.markAsVisited('basics'); // Дубликат
    
    const visited = ProgressManager.getVisitedTopics();
    const unique = [...new Set(visited)];
    expect(visited.length).toBe(unique.length);
  });
  
  test('сброс прогресса должен очищать все данные', () => {
    ProgressManager.markAsVisited('basics');
    ProgressManager.markAsVisited('functions');
    
    expect(ProgressManager.getVisitedTopics().length).toBe(2);
    
    ProgressManager.reset();
    
    expect(ProgressManager.getVisitedTopics().length).toBe(0);
    expect(ProgressManager.getStats().visited).toBe(0);
  });
});

