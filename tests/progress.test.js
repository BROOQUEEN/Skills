/**
 * Тесты для progress.js
 */
describe('ProgressManager', () => {
  let ProgressManager;
  let mockLocalStorage;
  
  beforeEach(() => {
    // Очищаем кеш модулей
    delete require.cache[require.resolve('../js/config.js')];
    delete require.cache[require.resolve('../js/progress.js')];
    
    // Мокаем localStorage
    mockLocalStorage = {
      store: {},
      getItem: jest.fn((key) => mockLocalStorage.store[key] || null),
      setItem: jest.fn((key, value) => {
        mockLocalStorage.store[key] = value;
      }),
      removeItem: jest.fn((key) => {
        delete mockLocalStorage.store[key];
      }),
      clear: jest.fn(() => {
        mockLocalStorage.store = {};
      })
    };
    
    global.localStorage = mockLocalStorage;
    
    // Мокаем TOPICS_CONFIG
    global.TOPICS_CONFIG = [
      { id: 'basics' },
      { id: 'functions' },
      { id: 'arrays' }
    ];
    
    // Мокаем DOM методы
    global.document = {
      getElementById: jest.fn(() => ({
        style: { width: '' },
        textContent: ''
      })),
      querySelectorAll: jest.fn(() => [])
    };
    
    // Загружаем модуль
    ProgressManager = require('../js/progress.js').ProgressManager;
  });
  
  afterEach(() => {
    mockLocalStorage.store = {};
  });
  
  describe('getVisitedTopics', () => {
    test('должен возвращать пустой массив при отсутствии данных', () => {
      const visited = ProgressManager.getVisitedTopics();
      expect(Array.isArray(visited)).toBe(true);
      expect(visited.length).toBe(0);
    });
    
    test('должен возвращать сохраненные темы', () => {
      mockLocalStorage.store['skills-progress'] = JSON.stringify(['basics', 'functions']);
      const visited = ProgressManager.getVisitedTopics();
      expect(visited).toEqual(['basics', 'functions']);
    });
    
    test('должен обрабатывать ошибки парсинга', () => {
      mockLocalStorage.store['skills-progress'] = 'invalid json';
      const consoleError = jest.spyOn(console, 'error').mockImplementation();
      const visited = ProgressManager.getVisitedTopics();
      expect(visited).toEqual([]);
      consoleError.mockRestore();
    });
  });
  
  describe('markAsVisited', () => {
    test('должен добавлять тему в список изученных', () => {
      const result = ProgressManager.markAsVisited('basics');
      expect(result).toBe(true);
      expect(mockLocalStorage.setItem).toHaveBeenCalled();
    });
    
    test('не должен дублировать темы', () => {
      ProgressManager.markAsVisited('basics');
      const result = ProgressManager.markAsVisited('basics');
      expect(result).toBe(false);
    });
    
    test('должен обрабатывать ошибки сохранения', () => {
      mockLocalStorage.setItem.mockImplementationOnce(() => {
        throw new Error('Storage error');
      });
      const consoleError = jest.spyOn(console, 'error').mockImplementation();
      const result = ProgressManager.markAsVisited('basics');
      expect(result).toBe(false);
      consoleError.mockRestore();
    });
  });
  
  describe('isVisited', () => {
    test('должен возвращать true для изученных тем', () => {
      mockLocalStorage.store['skills-progress'] = JSON.stringify(['basics']);
      expect(ProgressManager.isVisited('basics')).toBe(true);
    });
    
    test('должен возвращать false для не изученных тем', () => {
      expect(ProgressManager.isVisited('basics')).toBe(false);
    });
  });
  
  describe('getStats', () => {
    test('должен возвращать корректную статистику', () => {
      mockLocalStorage.store['skills-progress'] = JSON.stringify(['basics', 'functions']);
      const stats = ProgressManager.getStats();
      expect(stats).toHaveProperty('visited');
      expect(stats).toHaveProperty('total');
      expect(stats).toHaveProperty('percentage');
      expect(stats.visited).toBe(2);
      expect(stats.total).toBe(3);
      expect(stats.percentage).toBe(67);
    });
    
    test('должен возвращать 0% при отсутствии изученных тем', () => {
      const stats = ProgressManager.getStats();
      expect(stats.percentage).toBe(0);
    });
  });
  
  describe('reset', () => {
    test('должен очищать прогресс', () => {
      mockLocalStorage.store['skills-progress'] = JSON.stringify(['basics']);
      const result = ProgressManager.reset();
      expect(result).toBe(true);
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('skills-progress');
    });
  });
});

