/**
 * Тесты для config.js
 */
describe('TOPICS_CONFIG', () => {
  // Загружаем конфиг перед каждым тестом
  let TOPICS_CONFIG, sanitizeHTML, createTopicCard;
  
  beforeAll(() => {
    // Мокаем document для sanitizeHTML
    global.document = {
      createElement: (tag) => ({
        textContent: '',
        innerHTML: ''
      })
    };
    
    // Загружаем модуль
    delete require.cache[require.resolve('../js/config.js')];
    const configModule = require('../js/config.js');
    TOPICS_CONFIG = configModule.TOPICS_CONFIG || global.TOPICS_CONFIG;
    sanitizeHTML = configModule.sanitizeHTML || global.sanitizeHTML;
    createTopicCard = configModule.createTopicCard || global.createTopicCard;
  });
  
  test('TOPICS_CONFIG должен быть массивом', () => {
    expect(Array.isArray(TOPICS_CONFIG)).toBe(true);
  });
  
  test('TOPICS_CONFIG должен содержать темы', () => {
    expect(TOPICS_CONFIG.length).toBeGreaterThan(0);
  });
  
  test('Каждая тема должна иметь все обязательные поля', () => {
    TOPICS_CONFIG.forEach(topic => {
      expect(topic).toHaveProperty('id');
      expect(topic).toHaveProperty('icon');
      expect(topic).toHaveProperty('title');
      expect(topic).toHaveProperty('description');
      expect(topic).toHaveProperty('badge');
      expect(topic).toHaveProperty('category');
    });
  });
  
  test('ID тем должны быть уникальными', () => {
    const ids = TOPICS_CONFIG.map(t => t.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids.length).toBe(uniqueIds.length);
  });
  
  test('Категории должны быть валидными', () => {
    const validCategories = ['basic', 'important', 'critical', 'advanced'];
    TOPICS_CONFIG.forEach(topic => {
      expect(validCategories).toContain(topic.category);
    });
  });
  
  test('sanitizeHTML должна экранировать HTML', () => {
    const unsafe = '<script>alert("xss")</script>';
    const safe = sanitizeHTML(unsafe);
    expect(safe).not.toContain('<script>');
  });
  
  test('createTopicCard должна создавать валидный HTML', () => {
    const topic = {
      id: 'test',
      icon: '📚',
      title: 'Test Topic',
      description: 'Test Description',
      badge: 'Test Badge',
      category: 'basic'
    };
    
    const cardHTML = createTopicCard(topic, false);
    expect(cardHTML).toContain('topic-card');
    expect(cardHTML).toContain('data-page="test"');
    expect(cardHTML).toContain('Test Topic');
  });
  
  test('createTopicCard должна добавлять класс visited для изученных тем', () => {
    const topic = {
      id: 'test',
      icon: '📚',
      title: 'Test Topic',
      description: 'Test Description',
      badge: 'Test Badge',
      category: 'basic'
    };
    
    const cardHTML = createTopicCard(topic, true);
    expect(cardHTML).toContain('visited');
    expect(cardHTML).toContain('visited-indicator');
  });
});

