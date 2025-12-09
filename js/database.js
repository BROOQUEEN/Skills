/**
 * Модуль для работы с API базы данных
 */
const DatabaseAPI = {
    baseUrl: 'api/progress.php',
    
    /**
     * Получает прогресс пользователя
     */
    async getProgress() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Ошибка получения прогресса:', error);
            return null;
        }
    },
    
    /**
     * Сохраняет прогресс изучения темы
     * @param {string} topicId - ID темы
     * @param {number} timeSpent - Время изучения в секундах
     * @param {boolean} completed - Тема полностью изучена
     */
    async saveProgress(topicId, timeSpent = 0, completed = false) {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    topic_id: topicId,
                    time_spent: timeSpent,
                    completed: completed ? 1 : 0
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Ошибка сохранения прогресса:', error);
            return null;
        }
    },
    
    /**
     * Сбрасывает прогресс пользователя
     */
    async resetProgress() {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Ошибка сброса прогресса:', error);
            return null;
        }
    },
    
    /**
     * Синхронизирует локальный прогресс с сервером
     */
    async syncProgress() {
        try {
            // Получаем локальный прогресс
            const localProgress = ProgressManager.getVisitedTopics();
            
            // Отправляем каждую тему на сервер
            for (const topicId of localProgress) {
                await this.saveProgress(topicId, 0, false);
            }
            
            // Получаем обновленный прогресс с сервера
            const serverProgress = await this.getProgress();
            
            if (serverProgress && serverProgress.success) {
                // Обновляем локальный прогресс
                serverProgress.progress.forEach(item => {
                    if (!ProgressManager.isVisited(item.topic_id)) {
                        ProgressManager.markAsVisited(item.topic_id);
                    }
                });
                
                return serverProgress;
            }
            
            return null;
        } catch (error) {
            console.error('Ошибка синхронизации:', error);
            return null;
        }
    }
};

