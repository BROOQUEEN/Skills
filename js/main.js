// Навигация по страницам
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация главной страницы
    initHomePage();
    
    // Обработка кнопки "Назад"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('back-button') || e.target.closest('.back-button')) {
            e.preventDefault();
            showHomePage();
        }
    });
    
    // Обработка кнопки сброса прогресса
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
                ProgressManager.reset();
                if (typeof DatabaseManager !== 'undefined') {
                    DatabaseManager.resetProgress();
                }
                initHomePage();
            }
        });
    }
});

// Инициализация главной страницы
let topicsGridClickHandler = null;

function initHomePage() {
    // Генерируем карточки тем
    generateTopicCards();
    
    // Инициализируем поиск и фильтры
    initSearchAndFilter();
    
    // Обновляем прогресс
    if (typeof ProgressManager !== 'undefined' && ProgressManager.updateProgressUI) {
        ProgressManager.updateProgressUI();
    }
    
    // Используем делегирование событий для динамически созданных карточек
    // Добавляем обработчик только один раз
    const topicsGrid = document.getElementById('topics-grid');
    if (topicsGrid && !topicsGridClickHandler) {
        topicsGridClickHandler = function(e) {
            const card = e.target.closest('.topic-card');
            if (card) {
                const pageName = card.getAttribute('data-page');
                if (pageName) {
                    loadPage(pageName);
                }
            }
        };
        topicsGrid.addEventListener('click', topicsGridClickHandler);
    }
}

// Генерация карточек тем из конфигурации
function generateTopicCards() {
    const topicsGrid = document.getElementById('topics-grid');
    if (!topicsGrid || typeof TOPICS_CONFIG === 'undefined') {
        console.error('Не найдена конфигурация тем или контейнер для карточек');
        return;
    }
    
    // Получаем список изученных тем
    const visitedTopics = typeof ProgressManager !== 'undefined' && ProgressManager.getVisitedTopics 
        ? ProgressManager.getVisitedTopics() 
        : [];
    
    // Генерируем HTML для всех карточек
    let cardsHTML = '';
    TOPICS_CONFIG.forEach(topic => {
        const isVisited = visitedTopics.includes(topic.id);
        cardsHTML += createTopicCard(topic, isVisited);
    });
    
    topicsGrid.innerHTML = cardsHTML;
}

async function loadPage(pageName) {
    // Скрываем главную страницу
    const mainContent = document.querySelector('.main .container');
    if (mainContent) {
        mainContent.style.display = 'none';
    }
    
    try {
        // Загружаем контент страницы
        const response = await fetch(`pages/${pageName}.html`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const html = await response.text();
        
        // Создаем контейнер для страницы, если его еще нет
        let pageContainer = document.getElementById('page-container');
        if (!pageContainer) {
            pageContainer = document.createElement('div');
            pageContainer.id = 'page-container';
            const main = document.querySelector('.main');
            if (main) {
                main.appendChild(pageContainer);
            }
        }
        
        pageContainer.innerHTML = html;
        pageContainer.style.display = 'block';
        
        // Добавляем кнопку с ссылкой на тест
        addQuizButton(pageName);
        
        // Отмечаем тему как посещенную
        if (typeof ProgressManager !== 'undefined' && ProgressManager.markAsVisited) {
            ProgressManager.markAsVisited(pageName);
            // Синхронизируем с базой данных
            if (typeof DatabaseManager !== 'undefined' && DatabaseManager.saveProgress) {
                DatabaseManager.saveProgress(pageName);
            }
        }
        
        // Обновляем заголовок страницы
        const topic = typeof TOPICS_CONFIG !== 'undefined' 
            ? TOPICS_CONFIG.find(t => t.id === pageName)
            : null;
        if (topic) {
            document.title = `${topic.title} - Скиллы`;
        }
        
        // Прокручиваем наверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Ошибка загрузки страницы:', error);
        alert('Страница пока не доступна');
        // Показываем главную страницу обратно при ошибке
        showHomePage();
    }
}

function showHomePage() {
    // Показываем главную страницу
    const mainContent = document.querySelector('.main .container');
    if (mainContent) {
        mainContent.style.display = 'block';
    }
    
    // Скрываем страницу
    const pageContainer = document.getElementById('page-container');
    if (pageContainer) {
        pageContainer.style.display = 'none';
    }
    
    // Обновляем заголовок страницы
    document.title = 'Скиллы - Обучение JavaScript';
    
    // Обновляем карточки и прогресс
    initHomePage();
    
    // Прокручиваем наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Добавление кнопки с ссылкой на тест в статью
function addQuizButton(topicId) {
    const pageHeader = document.querySelector('#page-container .page-header');
    if (!pageHeader) {
        return;
    }
    
    // Проверяем, есть ли уже кнопка
    if (pageHeader.querySelector('.quiz-link-button')) {
        return;
    }
    
    // Проверяем, есть ли тесты для этой темы (если доступна функция проверки)
    if (typeof getQuizQuestions === 'function') {
        const questions = getQuizQuestions(topicId);
        if (!questions || questions.length === 0) {
            return; // Нет тестов для этой темы
        }
    }
    // Если функция проверки недоступна, показываем кнопку для всех тем
    // (quiz.php сам проверит наличие тестов)
    
    // Создаем кнопку
    const quizButton = document.createElement('a');
    quizButton.href = `quiz.php?topic=${topicId}`;
    quizButton.className = 'quiz-link-button';
    quizButton.textContent = '🧪 Пройти тест по этой теме';
    quizButton.setAttribute('aria-label', 'Перейти к тестированию по теме');
    
    // Добавляем кнопку в page-header
    pageHeader.appendChild(quizButton);
}

// Инициализация поиска и фильтров
let searchFilterInitialized = false;

function initSearchAndFilter() {
    const searchInput = document.getElementById('topic-search');
    const categoryFilter = document.getElementById('category-filter');
    
    if (!searchInput || !categoryFilter) {
        return;
    }
    
    // Если уже инициализировано, просто обновляем фильтрацию
    if (searchFilterInitialized) {
        filterTopics();
        return;
    }
    
    // Функция фильтрации
    function filterTopics() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const cards = document.querySelectorAll('.topic-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const category = card.getAttribute('data-category') || '';
            
            const matchesSearch = !searchTerm || 
                title.includes(searchTerm) || 
                description.includes(searchTerm);
            
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Обработчики событий (добавляем только один раз)
    searchInput.addEventListener('input', filterTopics);
    categoryFilter.addEventListener('change', filterTopics);
    
    // Очистка поиска при Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            filterTopics();
        }
    });
    
    searchFilterInitialized = true;
}

