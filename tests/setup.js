// Настройка тестовой среды
global.localStorage = {
  store: {},
  getItem: function(key) {
    return this.store[key] || null;
  },
  setItem: function(key, value) {
    this.store[key] = value.toString();
  },
  removeItem: function(key) {
    delete this.store[key];
  },
  clear: function() {
    this.store = {};
  }
};

// Моки для DOM
global.document = {
  createElement: jest.fn(() => ({
    setAttribute: jest.fn(),
    appendChild: jest.fn(),
    querySelector: jest.fn(),
    textContent: '',
    innerHTML: '',
    style: {},
    classList: {
      add: jest.fn(),
      remove: jest.fn(),
      contains: jest.fn()
    }
  })),
  getElementById: jest.fn(),
  querySelector: jest.fn(),
  querySelectorAll: jest.fn(() => []),
  head: {
    appendChild: jest.fn()
  }
};

global.window = {
  location: {
    pathname: '/',
    search: ''
  },
  history: {
    pushState: jest.fn(),
    state: null
  },
  scrollTo: jest.fn()
};

global.fetch = jest.fn();

