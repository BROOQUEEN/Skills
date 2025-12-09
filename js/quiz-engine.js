/**
 * Движок для прохождения тестов
 */

const QuizEngine = {
    currentTopic: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    startTime: null,
    endTime: null,
    
    /**
     * Начать тест по теме
     */
    start(topicId) {
        this.currentTopic = topicId;
        this.currentQuestions = getQuizQuestions(topicId);
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = Date.now();
        
        if (this.currentQuestions.length === 0) {
            return { error: 'Тесты для этой темы пока не доступны' };
        }
        
        return { success: true, total: this.currentQuestions.length };
    },
    
    /**
     * Получить текущий вопрос
     */
    getCurrentQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            return null;
        }
        return this.currentQuestions[this.currentQuestionIndex];
    },
    
    /**
     * Ответить на вопрос
     */
    answer(selectedOption) {
        const question = this.getCurrentQuestion();
        if (!question) return null;
        
        const answer = {
            questionId: question.id,
            selected: selectedOption,
            correct: question.correct,
            isCorrect: selectedOption === question.correct
        };
        
        this.userAnswers.push(answer);
        this.currentQuestionIndex++;
        
        return answer;
    },
    
    /**
     * Завершить тест и получить результаты
     */
    finish() {
        this.endTime = Date.now();
        
        const totalQuestions = this.userAnswers.length;
        const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const timeSpent = Math.round((this.endTime - this.startTime) / 1000); // в секундах
        
        const results = {
            topic: this.currentTopic,
            total: totalQuestions,
            correct: correctAnswers,
            incorrect: totalQuestions - correctAnswers,
            percentage: percentage,
            timeSpent: timeSpent,
            answers: this.userAnswers,
            questions: this.currentQuestions,
            grade: this.getGrade(percentage),
            timestamp: new Date().toISOString()
        };
        
        // Сохранить результаты
        this.saveResults(results);
        
        return results;
    },
    
    /**
     * Получить оценку по проценту
     */
    getGrade(percentage) {
        if (percentage >= 90) return { text: 'Отлично!', emoji: '🌟', color: '#10b981' };
        if (percentage >= 75) return { text: 'Хорошо', emoji: '👍', color: '#3b82f6' };
        if (percentage >= 60) return { text: 'Удовлетворительно', emoji: '✅', color: '#f59e0b' };
        return { text: 'Нужно подучить', emoji: '📚', color: '#ef4444' };
    },
    
    /**
     * Сохранить результаты в localStorage и БД
     */
    saveResults(results) {
        // Сохранить в localStorage
        const savedResults = JSON.parse(localStorage.getItem('quiz-results') || '[]');
        savedResults.push(results);
        localStorage.setItem('quiz-results', JSON.stringify(savedResults));
        
        // Сохранить в БД через API
        if (typeof DatabaseAPI !== 'undefined') {
            fetch('api/quiz-results.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(results)
            }).catch(err => console.warn('Не удалось сохранить результаты в БД:', err));
        }
    },
    
    /**
     * Получить историю результатов
     */
    getHistory() {
        return JSON.parse(localStorage.getItem('quiz-results') || '[]');
    },
    
    /**
     * Получить статистику по теме
     */
    getTopicStats(topicId) {
        const history = this.getHistory();
        const topicResults = history.filter(r => r.topic === topicId);
        
        if (topicResults.length === 0) {
            return null;
        }
        
        const avgPercentage = Math.round(
            topicResults.reduce((sum, r) => sum + r.percentage, 0) / topicResults.length
        );
        
        const bestResult = topicResults.reduce((best, current) => 
            current.percentage > best.percentage ? current : best
        );
        
        return {
            attempts: topicResults.length,
            average: avgPercentage,
            best: bestResult.percentage,
            lastAttempt: topicResults[topicResults.length - 1]
        };
    },
    
    /**
     * Проверка, пройден ли тест
     */
    isPassed(topicId, minPercentage = 60) {
        const stats = this.getTopicStats(topicId);
        return stats && stats.best >= minPercentage;
    }
};

