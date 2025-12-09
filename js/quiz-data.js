/**
 * База данных вопросов для тестирования знаний
 */

const QUIZ_QUESTIONS = {
    basics: [
        {
            id: 1,
            question: 'Что такое переменная в JavaScript?',
            type: 'multiple',
            options: [
                'Контейнер для хранения данных',
                'Функция',
                'Объект',
                'Оператор'
            ],
            correct: 0,
            explanation: 'Переменная - это контейнер для хранения данных, который может изменяться во время выполнения программы.'
        },
        {
            id: 2,
            question: 'Какой тип данных используется для хранения текста?',
            type: 'multiple',
            options: [
                'number',
                'string',
                'boolean',
                'object'
            ],
            correct: 1,
            explanation: 'Тип string используется для хранения текстовых данных.'
        },
        {
            id: 3,
            question: 'В чем разница между let и const?',
            type: 'multiple',
            options: [
                'Нет разницы',
                'let можно изменять, const нельзя',
                'const можно изменять, let нельзя',
                'Оба устарели'
            ],
            correct: 1,
            explanation: 'let позволяет изменять значение переменной, а const создает константу, которую нельзя переназначить.'
        },
        {
            id: 4,
            question: 'Что выведет код: console.log(typeof null)?',
            type: 'multiple',
            options: [
                'null',
                'undefined',
                'object',
                'string'
            ],
            correct: 2,
            explanation: 'Это известная особенность JavaScript - typeof null возвращает "object" (это баг, но сохранен для обратной совместимости).'
        },
        {
            id: 5,
            question: 'Какой оператор используется для строгого сравнения?',
            type: 'multiple',
            options: [
                '==',
                '===',
                '=',
                '===' === '==='
            ],
            correct: 1,
            explanation: '=== это оператор строгого сравнения, который проверяет и значение, и тип.'
        }
    ],
    
    functions: [
        {
            id: 1,
            question: 'Что такое функция-стрелка (arrow function)?',
            type: 'multiple',
            options: [
                'Новый способ объявления функции с =>',
                'Функция только для массивов',
                'Асинхронная функция',
                'Рекурсивная функция'
            ],
            correct: 0,
            explanation: 'Arrow function - это синтаксический сахар для объявления функций с помощью стрелки (=>).'
        },
        {
            id: 2,
            question: 'Что такое замыкание (closure)?',
            type: 'multiple',
            options: [
                'Функция, которая закрывает программу',
                'Функция с доступом к внешней области видимости',
                'Встроенная функция',
                'Глобальная функция'
            ],
            correct: 1,
            explanation: 'Замыкание - это функция, которая имеет доступ к переменным из внешней области видимости.'
        },
        {
            id: 3,
            question: 'Что выведет: const fn = (a, b) => a + b; console.log(fn(2, 3));',
            type: 'multiple',
            options: [
                'undefined',
                '5',
                '23',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'Arrow function с одним выражением возвращает результат автоматически, поэтому 2 + 3 = 5.'
        },
        {
            id: 4,
            question: 'Что такое каррирование (currying)?',
            type: 'multiple',
            options: [
                'Преобразование функции с множественными аргументами в последовательность функций',
                'Способ вызова функции',
                'Тип данных',
                'Оператор'
            ],
            correct: 0,
            explanation: 'Каррирование - это преобразование функции с несколькими аргументами в последовательность функций с одним аргументом.'
        },
        {
            id: 5,
            question: 'Какой способ объявления функции поддерживает hoisting?',
            type: 'multiple',
            options: [
                'Arrow function',
                'Function expression',
                'Function declaration',
                'Никакой'
            ],
            correct: 2,
            explanation: 'Function declaration поднимается (hoisting), поэтому можно вызывать функцию до её объявления.'
        }
    ],
    
    arrays: [
        {
            id: 1,
            question: 'Что делает метод map()?',
            type: 'multiple',
            options: [
                'Фильтрует элементы',
                'Преобразует каждый элемент в новый массив',
                'Находит элемент',
                'Сортирует массив'
            ],
            correct: 1,
            explanation: 'map() создает новый массив с результатами вызова функции для каждого элемента.'
        },
        {
            id: 2,
            question: 'В чем разница между map() и forEach()?',
            type: 'multiple',
            options: [
                'Нет разницы',
                'map возвращает новый массив, forEach - undefined',
                'forEach быстрее',
                'map работает только с числами'
            ],
            correct: 1,
            explanation: 'map() возвращает новый массив, а forEach() возвращает undefined и используется только для побочных эффектов.'
        },
        {
            id: 3,
            question: 'Что делает reduce()?',
            type: 'multiple',
            options: [
                'Уменьшает размер массива',
                'Преобразует массив в одно значение',
                'Удаляет дубликаты',
                'Разворачивает массив'
            ],
            correct: 1,
            explanation: 'reduce() применяет функцию к аккумулятору и каждому элементу, сводя массив к одному значению.'
        },
        {
            id: 4,
            question: 'Какой метод изменяет исходный массив?',
            type: 'multiple',
            options: [
                'map()',
                'filter()',
                'push()',
                'slice()'
            ],
            correct: 2,
            explanation: 'push() изменяет исходный массив, добавляя элементы. map() и filter() создают новые массивы.'
        },
        {
            id: 5,
            question: 'Что выведет: [1, 2, 3].filter(x => x > 1)',
            type: 'multiple',
            options: [
                '[1, 2, 3]',
                '[2, 3]',
                '[1]',
                'true'
            ],
            correct: 1,
            explanation: 'filter() возвращает новый массив с элементами, для которых функция возвращает true.'
        }
    ],
    
    async: [
        {
            id: 1,
            question: 'Что такое Promise?',
            type: 'multiple',
            options: [
                'Объект, представляющий асинхронную операцию',
                'Синхронная функция',
                'Тип данных',
                'Цикл'
            ],
            correct: 0,
            explanation: 'Promise - это объект, представляющий результат асинхронной операции (pending, fulfilled, rejected).'
        },
        {
            id: 2,
            question: 'Какой метод используется для обработки успешного Promise?',
            type: 'multiple',
            options: [
                'catch()',
                'then()',
                'finally()',
                'await()'
            ],
            correct: 1,
            explanation: 'then() обрабатывает успешное выполнение Promise.'
        },
        {
            id: 3,
            question: 'Что делает ключевое слово async?',
            type: 'multiple',
            options: [
                'Делает функцию асинхронной',
                'Останавливает выполнение',
                'Создает Promise',
                'Все вышеперечисленное'
            ],
            correct: 3,
            explanation: 'async делает функцию асинхронной, она автоматически возвращает Promise.'
        },
        {
            id: 4,
            question: 'Что делает await?',
            type: 'multiple',
            options: [
                'Останавливает выполнение функции до завершения Promise',
                'Создает ошибку',
                'Преобразует Promise в значение',
                'И первое, и третье'
            ],
            correct: 3,
            explanation: 'await приостанавливает выполнение функции и ожидает разрешения Promise, возвращая его значение.'
        },
        {
            id: 5,
            question: 'Как обработать ошибку в async/await?',
            type: 'multiple',
            options: [
                'Только try/catch',
                'Только .catch()',
                'try/catch или .catch()',
                'Невозможно обработать'
            ],
            correct: 2,
            explanation: 'В async/await можно использовать try/catch или .catch() на Promise.'
        }
    ],
    
    dom: [
        {
            id: 1,
            question: 'Что такое DOM?',
            type: 'multiple',
            options: [
                'Document Object Model - представление HTML в виде объектов',
                'База данных',
                'Фреймворк',
                'Язык программирования'
            ],
            correct: 0,
            explanation: 'DOM (Document Object Model) - это представление HTML документа в виде дерева объектов.'
        },
        {
            id: 2,
            question: 'Какой метод выбирает элемент по ID?',
            type: 'multiple',
            options: [
                'querySelector()',
                'getElementById()',
                'querySelectorAll()',
                'Все вышеперечисленные'
            ],
            correct: 3,
            explanation: 'Все эти методы могут выбрать элемент по ID, но getElementById() наиболее прямой.'
        },
        {
            id: 3,
            question: 'Что делает appendChild()?',
            type: 'multiple',
            options: [
                'Удаляет элемент',
                'Добавляет элемент как последний дочерний',
                'Клонирует элемент',
                'Изменяет атрибуты'
            ],
            correct: 1,
            explanation: 'appendChild() добавляет указанный элемент как последний дочерний элемент.'
        },
        {
            id: 4,
            question: 'В чем разница между innerHTML и textContent?',
            type: 'multiple',
            options: [
                'Нет разницы',
                'innerHTML парсит HTML, textContent только текст',
                'textContent быстрее',
                'innerHTML работает только в браузере'
            ],
            correct: 1,
            explanation: 'innerHTML интерпретирует HTML разметку, а textContent работает только с текстом.'
        },
        {
            id: 5,
            question: 'Что такое event delegation?',
            type: 'multiple',
            options: [
                'Назначение обработчика родителю вместо каждого дочернего элемента',
                'Удаление событий',
                'Отмена события',
                'Создание нового события'
            ],
            correct: 0,
            explanation: 'Event delegation - это назначение обработчика события родительскому элементу для обработки событий дочерних элементов.'
        }
    ],
    
    objects: [
        {
            id: 1,
            question: 'Что такое прототип в JavaScript?',
            type: 'multiple',
            options: [
                'Объект, от которого наследуются свойства',
                'Метод объекта',
                'Тип данных',
                'Функция-конструктор'
            ],
            correct: 0,
            explanation: 'Прототип - это объект, от которого другие объекты наследуют свойства и методы.'
        },
        {
            id: 2,
            question: 'Как создать объект в JavaScript?',
            type: 'multiple',
            options: [
                'Только через {}',
                'Через {}, new Object(), Object.create()',
                'Только через new',
                'Нельзя создать объект'
            ],
            correct: 1,
            explanation: 'Объекты можно создавать через литерал {}, конструктор new Object(), или метод Object.create().'
        },
        {
            id: 3,
            question: 'Что такое деструктуризация объекта?',
            type: 'multiple',
            options: [
                'Удаление свойств',
                'Извлечение свойств в переменные',
                'Клонирование объекта',
                'Объединение объектов'
            ],
            correct: 1,
            explanation: 'Деструктуризация позволяет извлекать свойства объекта в отдельные переменные.'
        }
    ],
    
    es6: [
        {
            id: 1,
            question: 'Что такое деструктуризация?',
            type: 'multiple',
            options: [
                'Синтаксис для извлечения данных из массивов/объектов',
                'Удаление данных',
                'Сортировка данных',
                'Фильтрация данных'
            ],
            correct: 0,
            explanation: 'Деструктуризация - это синтаксис для извлечения значений из массивов или объектов в переменные.'
        },
        {
            id: 2,
            question: 'Что делает оператор spread (...) ?',
            type: 'multiple',
            options: [
                'Распаковывает элементы массива или объекта',
                'Объединяет массивы',
                'Клонирует данные',
                'Все вышеперечисленное'
            ],
            correct: 3,
            explanation: 'Spread оператор может распаковывать, объединять и клонировать массивы и объекты.'
        },
        {
            id: 3,
            question: 'Что такое шаблонные строки (template literals)?',
            type: 'multiple',
            options: [
                'Строки с обратными кавычками, поддерживающие вставку выражений',
                'Обычные строки',
                'Регулярные выражения',
                'Функции'
            ],
            correct: 0,
            explanation: 'Template literals (обратные кавычки) позволяют вставлять выражения через ${}.'
        }
    ],
    
    oop: [
        {
            id: 1,
            question: 'Что такое класс в JavaScript?',
            type: 'multiple',
            options: [
                'Синтаксический сахар для функций-конструкторов',
                'Отдельный тип данных',
                'Модуль',
                'Переменная'
            ],
            correct: 0,
            explanation: 'Классы в JavaScript - это синтаксический сахар для функций-конструкторов и прототипов.'
        },
        {
            id: 2,
            question: 'Что такое наследование в ООП?',
            type: 'multiple',
            options: [
                'Создание нового класса на основе существующего',
                'Копирование методов',
                'Удаление свойств',
                'Объединение классов'
            ],
            correct: 0,
            explanation: 'Наследование позволяет создавать новый класс, основанный на существующем классе.'
        }
    ],
    
    scope: [
        {
            id: 1,
            question: 'Что такое hoisting?',
            type: 'multiple',
            options: [
                'Поднятие объявлений переменных и функций в начало области видимости',
                'Удаление переменных',
                'Сортировка кода',
                'Оптимизация'
            ],
            correct: 0,
            explanation: 'Hoisting - это механизм, при котором объявления переменных и функций "поднимаются" в начало области видимости.'
        },
        {
            id: 2,
            question: 'Что такое this в JavaScript?',
            type: 'multiple',
            options: [
                'Ссылка на текущий объект контекста',
                'Глобальная переменная',
                'Функция',
                'Метод'
            ],
            correct: 0,
            explanation: 'this - это ссылка на объект, в контексте которого выполняется функция.'
        }
    ],
    
    events: [
        {
            id: 1,
            question: 'Что такое event bubbling?',
            type: 'multiple',
            options: [
                'Распространение события от дочернего к родительскому элементу',
                'Остановка события',
                'Предотвращение события',
                'Создание события'
            ],
            correct: 0,
            explanation: 'Event bubbling - это механизм, при котором событие распространяется от дочернего элемента к родительскому.'
        },
        {
            id: 2,
            question: 'Как остановить распространение события?',
            type: 'multiple',
            options: [
                'event.stopPropagation()',
                'event.preventDefault()',
                'return false',
                'Все вышеперечисленное'
            ],
            correct: 0,
            explanation: 'stopPropagation() останавливает распространение события, preventDefault() отменяет действие по умолчанию.'
        }
    ],
    
    api: [
        {
            id: 1,
            question: 'Что такое Fetch API?',
            type: 'multiple',
            options: [
                'Современный способ выполнения HTTP-запросов',
                'Старый способ запросов',
                'База данных',
                'Фреймворк'
            ],
            correct: 0,
            explanation: 'Fetch API - это современный интерфейс для выполнения HTTP-запросов, альтернатива XMLHttpRequest.'
        },
        {
            id: 2,
            question: 'Что возвращает fetch()?',
            type: 'multiple',
            options: [
                'Promise',
                'Ответ сразу',
                'XMLHttpRequest',
                'Объект'
            ],
            correct: 0,
            explanation: 'fetch() возвращает Promise, который разрешается объектом Response.'
        }
    ],
    
    errors: [
        {
            id: 1,
            question: 'Что такое try/catch?',
            type: 'multiple',
            options: [
                'Конструкция для обработки ошибок',
                'Цикл',
                'Условие',
                'Функция'
            ],
            correct: 0,
            explanation: 'try/catch позволяет обрабатывать ошибки: код в try выполняется, при ошибке выполняется catch.'
        },
        {
            id: 2,
            question: 'Что делает finally в try/catch/finally?',
            type: 'multiple',
            options: [
                'Выполняется всегда, независимо от результата',
                'Выполняется только при ошибке',
                'Выполняется только при успехе',
                'Не выполняется'
            ],
            correct: 0,
            explanation: 'Блок finally выполняется всегда, независимо от того, произошла ошибка или нет.'
        }
    ]
};

// Получить вопросы по теме
function getQuizQuestions(topicId) {
    return QUIZ_QUESTIONS[topicId] || [];
}

// Получить все доступные темы с тестами
function getAvailableQuizTopics() {
    return Object.keys(QUIZ_QUESTIONS);
}

