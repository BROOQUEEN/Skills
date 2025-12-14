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
    shuffledQuestions: [], // Вопросы с перемешанными вариантами ответов
    
    /**
     * Начать тест по теме
     * @param {string} topicId - ID темы
     * @param {number} questionCount - Количество вопросов для теста (по умолчанию случайные из доступных)
     */
    start(topicId, questionCount = null) {
        this.currentTopic = topicId;
        const allQuestions = getQuizQuestions(topicId);
        
        if (allQuestions.length === 0) {
            return { error: 'Тесты для этой темы пока не доступны' };
        }
        
        // Если вопросов больше 20, выбираем случайные вопросы
        if (questionCount === null) {
            questionCount = Math.min(20, allQuestions.length);
        }
        
        // Перемешиваем и выбираем нужное количество
        this.currentQuestions = this.shuffleArray([...allQuestions]).slice(0, questionCount);
        // Перемешиваем варианты ответов для каждого вопроса
        this.shuffledQuestions = this.currentQuestions.map(q => this.shuffleQuestionOptions(q));
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = Date.now();
        
        return { success: true, total: this.currentQuestions.length };
    },
    
    /**
     * Перемешивает массив (алгоритм Фишера-Йетса)
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    /**
     * Перемешивает варианты ответов в вопросе и обновляет индекс правильного ответа
     */
    shuffleQuestionOptions(question) {
        // Создаем копию вопроса
        const shuffledQuestion = {
            ...question,
            options: [...question.options],
            originalCorrect: question.correct // Сохраняем оригинальный индекс
        };
        
        // Создаем массив индексов для перемешивания
        const indices = shuffledQuestion.options.map((_, index) => index);
        const shuffledIndices = this.shuffleArray(indices);
        
        // Перемешиваем варианты ответов
        const shuffledOptions = shuffledIndices.map(index => shuffledQuestion.options[index]);
        shuffledQuestion.options = shuffledOptions;
        
        // Находим новый индекс правильного ответа
        const newCorrectIndex = shuffledIndices.indexOf(question.correct);
        shuffledQuestion.correct = newCorrectIndex;
        
        return shuffledQuestion;
    },
    
    /**
     * Получить текущий вопрос (с перемешанными вариантами ответов)
     */
    getCurrentQuestion() {
        if (this.currentQuestionIndex >= this.shuffledQuestions.length) {
            return null;
        }
        return this.shuffledQuestions[this.currentQuestionIndex];
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

