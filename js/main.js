// Навигация по страницам
document.addEventListener('DOMContentLoaded', function() {
    const topicCards = document.querySelectorAll('.topic-card');
    
    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            const pageName = this.getAttribute('data-page');
            loadPage(pageName);
        });
    });

    // Обработка кнопки "Назад"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('back-button') || e.target.closest('.back-button')) {
            e.preventDefault();
            showHomePage();
        }
    });
});

function loadPage(pageName) {
    // Скрываем главную страницу
    const mainContent = document.querySelector('.main .container');
    mainContent.style.display = 'none';
    
    // Загружаем контент страницы
    fetch(`pages/${pageName}.html`)
        .then(response => response.text())
        .then(html => {
            // Создаем контейнер для страницы, если его еще нет
            let pageContainer = document.getElementById('page-container');
            if (!pageContainer) {
                pageContainer = document.createElement('div');
                pageContainer.id = 'page-container';
                document.querySelector('.main').appendChild(pageContainer);
            }
            
            pageContainer.innerHTML = html;
            pageContainer.style.display = 'block';
            
            // Прокручиваем наверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(error => {
            console.error('Ошибка загрузки страницы:', error);
            alert('Страница пока не доступна');
        });
}

function showHomePage() {
    // Показываем главную страницу
    const mainContent = document.querySelector('.main .container');
    mainContent.style.display = 'block';
    
    // Скрываем страницу
    const pageContainer = document.getElementById('page-container');
    if (pageContainer) {
        pageContainer.style.display = 'none';
    }
    
    // Прокручиваем наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

