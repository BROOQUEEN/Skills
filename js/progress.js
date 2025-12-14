// Управление прогрессом изучения
const ProgressManager = {
    STORAGE_KEY: 'skills-progress',
    
    /**
     * Получает список изученных тем
     */
    getVisitedTopics() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Ошибка чтения прогресса:', e);
            return [];
        }
    },
    
    /**
     * Отмечает тему как изученную
     */
    markAsVisited(topicId) {
        const visited = this.getVisitedTopics();
        if (!visited.includes(topicId)) {
            visited.push(topicId);
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(visited));
                this.updateProgressUI();
                return true;
            } catch (e) {
                console.error('Ошибка сохранения прогресса:', e);
                return false;
            }
        }
        return false;
    },
    
    /**
     * Проверяет, изучена ли тема
     */
    isVisited(topicId) {
        return this.getVisitedTopics().includes(topicId);
    },
    
    /**
     * Получает статистику прогресса
     */
    getStats() {
        const visited = this.getVisitedTopics();
        // Получаем количество тем из DOM или конфига
        const total = typeof TOPICS_CONFIG !== 'undefined' 
            ? TOPICS_CONFIG.length 
            : document.querySelectorAll('.topic-card').length || 15;
        return {
            visited: visited.length,
            total: total,
            percentage: total > 0 ? Math.round((visited.length / total) * 100) : 0
        };
    },
    
    /**
     * Обновляет UI прогресса
     */
    updateProgressUI() {
        const stats = this.getStats();
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${stats.percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `Изучено: ${stats.visited} из ${stats.total} тем (${stats.percentage}%)`;
        }
        
        // Обновляем индикаторы на карточках
        // Если карточки генерируются динамически через generateTopicCards, 
        // они уже содержат правильные индикаторы при генерации
        document.querySelectorAll('.topic-card').forEach(card => {
            const topicId = card.getAttribute('data-page');
            if (topicId && this.isVisited(topicId)) {
                card.classList.add('visited');
                if (!card.querySelector('.visited-indicator')) {
                    const indicator = document.createElement('span');
                    indicator.className = 'visited-indicator';
                    indicator.setAttribute('aria-label', 'Изучено');
                    indicator.textContent = '✓';
                    card.appendChild(indicator);
                }
            } else if (topicId && !this.isVisited(topicId)) {
                card.classList.remove('visited');
                const indicator = card.querySelector('.visited-indicator');
                if (indicator) {
                    indicator.remove();
                }
            }
        });
    },
    
    /**
     * Сбрасывает прогресс
     */
    reset() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            this.updateProgressUI();
            return true;
        } catch (e) {
            console.error('Ошибка сброса прогресса:', e);
            return false;
        }
    }
};

