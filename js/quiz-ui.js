/**
 * UI для прохождения тестов
 */

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('quiz-container');
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    
    if (topic) {
        startQuiz(topic);
    } else {
        showQuizSelector();
    }
});

/**
 * Показать селектор тем для тестирования
 */
function showQuizSelector() {
    const container = document.getElementById('quiz-container');
    
    const topics = getAvailableQuizTopics();
    const topicsConfig = typeof TOPICS_CONFIG !== 'undefined' ? TOPICS_CONFIG : [];
    
    let html = `
        <div class="quiz-selector">
            <h1 class="quiz-title">🧪 Тестирование знаний</h1>
            <p class="quiz-description">Выберите тему для прохождения теста</p>
            
            <div class="quiz-topics-grid">
    `;
    
    topics.forEach(topicId => {
        const topicConfig = topicsConfig.find(t => t.id === topicId) || {
            icon: '📚',
            title: topicId,
            description: ''
        };
        
        const stats = QuizEngine.getTopicStats(topicId);
        const passed = QuizEngine.isPassed(topicId);
        
        html += `
            <div class="quiz-topic-card ${passed ? 'passed' : ''}" onclick="startQuiz('${topicId}')">
                <div class="quiz-topic-icon">${topicConfig.icon}</div>
                <h3>${topicConfig.title}</h3>
                <p>${topicConfig.description || 'Тест по теме'}</p>
                ${stats ? `
                    <div class="quiz-stats">
                        <span>Попыток: ${stats.attempts}</span>
                        <span>Лучший результат: ${stats.best}%</span>
                        ${passed ? '<span class="quiz-passed-badge">✓ Пройдено</span>' : ''}
                    </div>
                ` : ''}
                <button class="quiz-start-btn">Начать тест</button>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

/**
 * Начать тест
 */
function startQuiz(topicId) {
    const result = QuizEngine.start(topicId);
    
    if (result.error) {
        alert(result.error);
        showQuizSelector();
        return;
    }
    
    showQuestion();
}

/**
 * Показать текущий вопрос
 */
function showQuestion() {
    const container = document.getElementById('quiz-container');
    const question = QuizEngine.getCurrentQuestion();
    
    if (!question) {
        finishQuiz();
        return;
    }
    
    const questionNumber = QuizEngine.currentQuestionIndex + 1;
    const totalQuestions = QuizEngine.currentQuestions.length;
    const progress = Math.round((questionNumber / totalQuestions) * 100);
    
    let html = `
        <div class="quiz-question-container">
            <div class="quiz-header">
                <button class="quiz-back-btn" onclick="showQuizSelector()">← Назад</button>
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" style="width: ${progress}%"></div>
                    <span class="quiz-progress-text">Вопрос ${questionNumber} из ${totalQuestions}</span>
                </div>
            </div>
            
            <div class="quiz-question">
                <h2>${question.question}</h2>
                
                <div class="quiz-options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <button class="quiz-option" onclick="selectAnswer(${index})">
                <span class="quiz-option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="quiz-option-text">${option}</span>
            </button>
        `;
    });
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

/**
 * Выбрать ответ
 */
function selectAnswer(selectedIndex) {
    const answer = QuizEngine.answer(selectedIndex);
    
    // Показать правильный/неправильный ответ
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === answer.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !answer.isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Показать объяснение
    const question = QuizEngine.currentQuestions[answer.questionId - 1];
    showExplanation(question.explanation, answer.isCorrect);
    
    // Переход к следующему вопросу через 2 секунды
    setTimeout(() => {
        showQuestion();
    }, 2000);
}

/**
 * Показать объяснение ответа
 */
function showExplanation(text, isCorrect) {
    const container = document.querySelector('.quiz-question');
    const explanation = document.createElement('div');
    explanation.className = `quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`;
    explanation.innerHTML = `
        <div class="quiz-explanation-icon">${isCorrect ? '✅' : '❌'}</div>
        <div class="quiz-explanation-text">${text}</div>
    `;
    container.appendChild(explanation);
}

/**
 * Завершить тест
 */
function finishQuiz() {
    const results = QuizEngine.finish();
    const container = document.getElementById('quiz-container');
    
    const grade = results.grade;
    
    let html = `
        <div class="quiz-results">
            <div class="quiz-results-header">
                <div class="quiz-grade" style="color: ${grade.color}">
                    <span class="quiz-grade-emoji">${grade.emoji}</span>
                    <h1>${grade.text}</h1>
                    <div class="quiz-grade-percentage">${results.percentage}%</div>
                </div>
            </div>
            
            <div class="quiz-results-stats">
                <div class="quiz-stat-card">
                    <div class="quiz-stat-value">${results.correct}</div>
                    <div class="quiz-stat-label">Правильных ответов</div>
                </div>
                <div class="quiz-stat-card">
                    <div class="quiz-stat-value">${results.incorrect}</div>
                    <div class="quiz-stat-label">Неправильных</div>
                </div>
                <div class="quiz-stat-card">
                    <div class="quiz-stat-value">${results.timeSpent}с</div>
                    <div class="quiz-stat-label">Время прохождения</div>
                </div>
            </div>
            
            <div class="quiz-answers-review">
                <h3>Разбор ответов:</h3>
    `;
    
    results.answers.forEach((answer, index) => {
        const question = results.questions[index];
        const isCorrect = answer.isCorrect;
        
        html += `
            <div class="quiz-answer-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="quiz-answer-header">
                    <span class="quiz-answer-number">Вопрос ${index + 1}</span>
                    <span class="quiz-answer-status">${isCorrect ? '✅ Правильно' : '❌ Неправильно'}</span>
                </div>
                <div class="quiz-answer-question">${question.question}</div>
                <div class="quiz-answer-details">
                    <div><strong>Ваш ответ:</strong> ${question.options[answer.selected]}</div>
                    ${!isCorrect ? `<div><strong>Правильный ответ:</strong> ${question.options[answer.correct]}</div>` : ''}
                    <div class="quiz-answer-explanation">${question.explanation}</div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
            
            <div class="quiz-actions">
                <button class="quiz-btn-primary" onclick="startQuiz('${results.topic}')">
                    Пройти еще раз
                </button>
                <button class="quiz-btn-secondary" onclick="showQuizSelector()">
                    Выбрать другую тему
                </button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

