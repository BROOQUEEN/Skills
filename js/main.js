// Кеш для загруженных страниц
const pageCache = new Map();

// Инициализация поиска и фильтрации
function initSearchAndFilter() {
    const searchInput = document.getElementById('topic-search');
    const categoryFilter = document.getElementById('category-filter');
    const topicsGrid = document.querySelector('.topics-grid');
    
    if (!topicsGrid) return;
    
    // Поиск
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterTopics(e.target.value, categoryFilter?.value);
            }, 300);
        });
    }
    
    // Фильтр по категориям
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            filterTopics(searchInput?.value || '', e.target.value);
        });
    }
}

// Фильтрация тем
function filterTopics(searchQuery = '', category = 'all') {
    const cards = document.querySelectorAll('.topic-card');
    const query = searchQuery.toLowerCase().trim();
    let visibleCount = 0;
    
    cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        const cardCategory = card.getAttribute('data-category') || '';
        
        const matchesSearch = !query || title.includes(query) || description.includes(query);
        const matchesCategory = category === 'all' || cardCategory === category;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Показываем сообщение, если ничего не найдено
    let noResults = document.getElementById('no-results');
    if (visibleCount === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'no-results';
            noResults.className = 'no-results';
            noResults.textContent = 'Темы не найдены';
            document.querySelector('.topics-grid')?.parentElement?.appendChild(noResults);
        }
        noResults.style.display = 'block';
    } else if (noResults) {
        noResults.style.display = 'none';
    }
}

// Генерация карточек тем из конфигурации
function generateTopicCards() {
    const grid = document.getElementById('topics-grid');
    if (!grid || typeof TOPICS_CONFIG === 'undefined') {
        // Fallback: если config не загружен, используем существующий HTML
        return;
    }
    
    const visitedTopics = typeof ProgressManager !== 'undefined' 
        ? ProgressManager.getVisitedTopics() 
        : [];
    
    grid.innerHTML = TOPICS_CONFIG.map(topic => {
        const isVisited = visitedTopics.includes(topic.id);
        return createTopicCard(topic, isVisited);
    }).join('');
    
    // Устанавливаем атрибуты доступности для новых карточек
    const topicCards = grid.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        const title = card.querySelector('h3')?.textContent || '';
        card.setAttribute('aria-label', `Открыть тему: ${title}`);
    });
}

// Навигация по страницам
document.addEventListener('DOMContentLoaded', function() {
    // Генерация карточек тем
    generateTopicCards();
    
    // Инициализация поиска
    initSearchAndFilter();
    
    // Инициализация прогресса
    if (typeof ProgressManager !== 'undefined') {
        ProgressManager.updateProgressUI();
        
        // Синхронизируем с базой данных при загрузке
        if (typeof DatabaseAPI !== 'undefined') {
            DatabaseAPI.syncProgress().then(data => {
                if (data && data.success) {
                    ProgressManager.updateProgressUI();
                }
            }).catch(err => {
                console.warn('Не удалось синхронизировать прогресс:', err);
            });
        }
        
        // Обработчик кнопки сброса прогресса
        const resetBtn = document.getElementById('reset-progress-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
                    ProgressManager.reset();
                    
                    // Сбросить в БД
                    if (typeof DatabaseAPI !== 'undefined') {
                        DatabaseAPI.resetProgress().then(() => {
                            ProgressManager.updateProgressUI();
                            alert('Прогресс успешно сброшен');
                        }).catch(err => {
                            console.error('Ошибка сброса прогресса в БД:', err);
                        });
                    } else {
                        ProgressManager.updateProgressUI();
                        alert('Прогресс успешно сброшен');
                    }
                }
            });
        }
    }
    
    // Делегирование событий для карточек
    const topicsGrid = document.querySelector('.topics-grid');
    if (topicsGrid) {
        topicsGrid.addEventListener('click', function(e) {
            const card = e.target.closest('.topic-card');
            if (card) {
                const pageName = card.getAttribute('data-page');
                if (pageName) {
                    loadPage(pageName);
                }
            }
        });
        
        topicsGrid.addEventListener('keydown', function(e) {
            const card = e.target.closest('.topic-card');
            if (card && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                const pageName = card.getAttribute('data-page');
                if (pageName) {
                    loadPage(pageName);
                }
            }
        });
    }
    
    // Атрибуты доступности устанавливаются в generateTopicCards()
    
    // Обработка кнопки "Назад"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('back-button') || e.target.closest('.back-button')) {
            e.preventDefault();
            showHomePage();
        }
    });
    
    // Поддержка клавиши ESC для возврата
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const pageContainer = document.getElementById('page-container');
            if (pageContainer && pageContainer.style.display !== 'none') {
                showHomePage();
            }
        }
    });
    
    // Обработка истории браузера (кнопки назад/вперед)
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            loadPage(e.state.page, false); // false = не добавлять в историю
        } else {
            showHomePage(false);
        }
    });
    
    // Обработка начального состояния из URL
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    if (pageParam) {
        loadPage(pageParam, false);
    }
    
    // Prefetch популярных страниц
    prefetchPopularPages();
});

/**
 * Загружает страницу с кешированием и индикатором загрузки
 * @param {string} pageName - Имя страницы для загрузки
 * @param {boolean} addToHistory - Добавлять ли в историю браузера
 */
async function loadPage(pageName, addToHistory = true) {
    if (!pageName) return;
    
    const mainContent = document.querySelector('.main .container');
    const pageContainer = getOrCreatePageContainer();
    
    // Показываем индикатор загрузки
    showLoadingIndicator();
    
    // Скрываем главную страницу
    if (mainContent) {
        mainContent.style.display = 'none';
    }
    
    try {
        let html;
        
        // Проверяем кеш
        if (pageCache.has(pageName)) {
            html = pageCache.get(pageName);
            // Небольшая задержка для плавности анимации
            await new Promise(resolve => setTimeout(resolve, 150));
        } else {
            // Загружаем страницу
            const response = await fetch(`pages/${pageName}.html`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            html = await response.text();
            
            // Сохраняем в кеш
            pageCache.set(pageName, html);
        }
        
        // Вставляем контент
        pageContainer.innerHTML = html;
        pageContainer.style.display = 'block';
        pageContainer.setAttribute('aria-live', 'polite');
        
        // Отмечаем тему как изученную
        if (typeof ProgressManager !== 'undefined') {
            ProgressManager.markAsVisited(pageName);
            
            // Сохраняем в базу данных
            if (typeof DatabaseAPI !== 'undefined') {
                DatabaseAPI.saveProgress(pageName, 0, false).catch(err => {
                    console.warn('Не удалось сохранить прогресс в БД:', err);
                });
            }
        }
        
        // Обновляем URL и историю
        if (addToHistory) {
            const newUrl = `${window.location.pathname}?page=${pageName}`;
            window.history.pushState({ page: pageName }, '', newUrl);
        }
        
        // Обновляем title страницы
        updatePageTitle(pageName);
        
        // Прокручиваем наверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Фокус на контейнер для доступности
        pageContainer.focus();
        
    } catch (error) {
        console.error('Ошибка загрузки страницы:', error);
        showError(`Не удалось загрузить страницу "${pageName}". Проверьте подключение к интернету.`);
        
        // Возвращаемся на главную при ошибке
        showHomePage(false);
    } finally {
        hideLoadingIndicator();
    }
}

/**
 * Показывает главную страницу
 * @param {boolean} addToHistory - Добавлять ли в историю браузера
 */
function showHomePage(addToHistory = true) {
    const mainContent = document.querySelector('.main .container');
    const pageContainer = document.getElementById('page-container');
    
    if (mainContent) {
        mainContent.style.display = 'block';
    }
    
    if (pageContainer) {
        pageContainer.style.display = 'none';
    }
    
    // Обновляем прогресс при возврате на главную
    if (typeof ProgressManager !== 'undefined') {
        ProgressManager.updateProgressUI();
    }
    
    // Обновляем URL
    if (addToHistory) {
        window.history.pushState({}, '', window.location.pathname);
    }
    
    // Восстанавливаем оригинальный title
    document.title = 'Скиллы - Обучение JavaScript';
    
    // Прокручиваем наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Фокус на первую карточку для доступности
    const firstCard = document.querySelector('.topic-card');
    if (firstCard) {
        firstCard.focus();
    }
}

/**
 * Создает или возвращает контейнер для страниц
 */
function getOrCreatePageContainer() {
    let pageContainer = document.getElementById('page-container');
    if (!pageContainer) {
        pageContainer = document.createElement('div');
        pageContainer.id = 'page-container';
        pageContainer.setAttribute('role', 'main');
        pageContainer.setAttribute('aria-live', 'polite');
        document.querySelector('.main').appendChild(pageContainer);
    }
    return pageContainer;
}

/**
 * Показывает индикатор загрузки
 */
function showLoadingIndicator() {
    let loader = document.getElementById('page-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-spinner"></div>
            <p class="loader-text">Загрузка...</p>
        `;
        loader.setAttribute('aria-live', 'polite');
        loader.setAttribute('aria-label', 'Загрузка страницы');
        document.querySelector('.main').appendChild(loader);
    }
    loader.style.display = 'flex';
}

/**
 * Скрывает индикатор загрузки
 */
function hideLoadingIndicator() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

/**
 * Показывает сообщение об ошибке
 */
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.setAttribute('role', 'alert');
    errorDiv.textContent = message;
    
    const main = document.querySelector('.main');
    main.insertBefore(errorDiv, main.firstChild);
    
    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

/**
 * Обновляет title страницы на основе загруженной темы
 */
function updatePageTitle(pageName) {
    const pageContainer = document.getElementById('page-container');
    if (pageContainer) {
        const pageHeader = pageContainer.querySelector('.page-header h1');
        if (pageHeader) {
            const pageTitle = pageHeader.textContent.trim();
            document.title = `${pageTitle} - Скиллы`;
        }
    }
}

/**
 * Prefetch популярных страниц для улучшения производительности
 */
function prefetchPopularPages() {
    const popularPages = ['basics', 'functions', 'arrays', 'async', 'dom'];
    
    popularPages.forEach(pageName => {
        if (!pageCache.has(pageName)) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = `pages/${pageName}.html`;
            document.head.appendChild(link);
        }
    });
}

