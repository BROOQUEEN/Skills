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
        },
        {
            id: 6,
            question: 'Что выведет: console.log(0.1 + 0.2 === 0.3)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'Из-за особенностей представления чисел с плавающей точкой, 0.1 + 0.2 не равно 0.3, а примерно 0.30000000000000004.'
        },
        {
            id: 7,
            question: 'Какое значение имеет переменная после: var x;?',
            type: 'multiple',
            options: [
                'null',
                'undefined',
                '0',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'Неинициализированные переменные имеют значение undefined.'
        },
        {
            id: 8,
            question: 'Что такое NaN?',
            type: 'multiple',
            options: [
                'Not a Number - специальное значение',
                'Ошибка',
                'null',
                'undefined'
            ],
            correct: 0,
            explanation: 'NaN (Not a Number) - это специальное значение, которое возвращается при неверных математических операциях.'
        },
        {
            id: 9,
            question: 'Что выведет: console.log([] == 0)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'При нестрогом сравнении (==) пустой массив преобразуется в 0, поэтому [] == 0 вернет true.'
        },
        {
            id: 10,
            question: 'Какой цикл выполнится хотя бы один раз?',
            type: 'multiple',
            options: [
                'for',
                'while',
                'do...while',
                'Все одинаковые'
            ],
            correct: 2,
            explanation: 'do...while выполнится хотя бы один раз, так как условие проверяется после первой итерации.'
        },
        {
            id: 11,
            question: 'Что выведет: console.log("5" + 3)?',
            type: 'multiple',
            options: [
                '8',
                '"53"',
                '53',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'При сложении строки с числом происходит конкатенация, число преобразуется в строку: "5" + 3 = "53".'
        },
        {
            id: 12,
            question: 'Что выведет: console.log("5" - 3)?',
            type: 'multiple',
            options: [
                '2',
                '"2"',
                '"5-3"',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'При вычитании строка преобразуется в число: "5" - 3 = 5 - 3 = 2.'
        },
        {
            id: 13,
            question: 'Что такое Truthy значение?',
            type: 'multiple',
            options: [
                'Значение, которое при приведении к boolean дает true',
                'Только true',
                'Только непустые строки',
                'Только числа больше 0'
            ],
            correct: 0,
            explanation: 'Truthy значения - это значения, которые при приведении к boolean дают true (например, непустые строки, числа кроме 0, объекты, массивы).'
        },
        {
            id: 14,
            question: 'Какое значение является Falsy?',
            type: 'multiple',
            options: [
                'Пустая строка ""',
                'Число 0',
                'null',
                'Все вышеперечисленные'
            ],
            correct: 3,
            explanation: 'Falsy значения: false, 0, "", null, undefined, NaN - все они приводятся к false.'
        },
        {
            id: 15,
            question: 'Что выведет: console.log(Boolean([]))?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Пустой массив [] является truthy значением, Boolean([]) вернет true.'
        },
        {
            id: 16,
            question: 'Что выведет: console.log(Boolean({}))?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'null'
            ],
            correct: 0,
            explanation: 'Пустой объект {} является truthy значением, Boolean({}) вернет true.'
        },
        {
            id: 17,
            question: 'Что такое неявное приведение типов (type coercion)?',
            type: 'multiple',
            options: [
                'Автоматическое преобразование типов JavaScript',
                'Явное преобразование через функции',
                'Отсутствие типов',
                'Строгая типизация'
            ],
            correct: 0,
            explanation: 'Type coercion - это автоматическое преобразование типов данных JavaScript при операциях (например, "5" + 3 становится "53").'
        },
        {
            id: 18,
            question: 'Что выведет: console.log(!!"text")?',
            type: 'multiple',
            options: [
                'true',
                'false',
                '"text"',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Двойное отрицание !! преобразует значение в boolean. !"text" = false, !!false = true.'
        },
        {
            id: 19,
            question: 'Что выведет: console.log(1 == "1")?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Оператор == выполняет нестрогое сравнение с приведением типов, поэтому 1 == "1" вернет true.'
        },
        {
            id: 20,
            question: 'Что выведет: console.log(1 === "1")?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'Оператор === выполняет строгое сравнение без приведения типов, поэтому 1 === "1" вернет false (число не равно строке).'
        },
        {
            id: 21,
            question: 'Что выведет: console.log(null == undefined)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'null'
            ],
            correct: 0,
            explanation: 'При нестрогом сравнении null == undefined возвращает true (специальное правило JavaScript).'
        },
        {
            id: 22,
            question: 'Что выведет: console.log(null === undefined)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'null'
            ],
            correct: 1,
            explanation: 'При строгом сравнении null === undefined возвращает false, так как это разные типы.'
        },
        {
            id: 23,
            question: 'Что выведет: console.log(NaN === NaN)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'NaN'
            ],
            correct: 1,
            explanation: 'NaN не равно самому себе. Для проверки NaN используйте isNaN() или Number.isNaN().'
        },
        {
            id: 24,
            question: 'Как проверить, является ли значение NaN?',
            type: 'multiple',
            options: [
                'value === NaN',
                'isNaN(value) или Number.isNaN(value)',
                'value == NaN',
                'value !== value'
            ],
            correct: 1,
            explanation: 'Используйте isNaN() или Number.isNaN(). Number.isNaN() более строгая версия, проверяет именно NaN.'
        },
        {
            id: 25,
            question: 'Что выведет: console.log(typeof undefined)?',
            type: 'multiple',
            options: [
                '"undefined"',
                '"null"',
                '"object"',
                'undefined'
            ],
            correct: 0,
            explanation: 'typeof undefined возвращает строку "undefined".'
        },
        {
            id: 26,
            question: 'Что выведет: console.log(typeof null)?',
            type: 'multiple',
            options: [
                '"null"',
                '"undefined"',
                '"object"',
                'null'
            ],
            correct: 2,
            explanation: 'typeof null возвращает "object" - это известный баг JavaScript, сохранен для обратной совместимости.'
        },
        {
            id: 27,
            question: 'Что выведет: console.log(typeof [])?',
            type: 'multiple',
            options: [
                '"array"',
                '"object"',
                '"undefined"',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'typeof [] возвращает "object", так как массивы в JavaScript являются объектами. Для проверки используйте Array.isArray().'
        },
        {
            id: 28,
            question: 'Как проверить, является ли значение массивом?',
            type: 'multiple',
            options: [
                'typeof value === "array"',
                'Array.isArray(value)',
                'value.constructor === Array',
                'И второе, и третье'
            ],
            correct: 3,
            explanation: 'Лучший способ - Array.isArray(value), также можно использовать value instanceof Array или Array.isArray().'
        },
        {
            id: 29,
            question: 'Что такое Infinity?',
            type: 'multiple',
            options: [
                'Специальное значение, представляющее бесконечность',
                'Ошибка',
                'null',
                'undefined'
            ],
            correct: 0,
            explanation: 'Infinity - это специальное числовое значение, представляющее математическую бесконечность.'
        },
        {
            id: 30,
            question: 'Что выведет: console.log(1 / 0)?',
            type: 'multiple',
            options: [
                'Infinity',
                'NaN',
                'Ошибка',
                'undefined'
            ],
            correct: 0,
            explanation: 'Деление на ноль в JavaScript возвращает Infinity, а не ошибку.'
        },
        {
            id: 31,
            question: 'Что выведет: console.log(0 / 0)?',
            type: 'multiple',
            options: [
                '0',
                'Infinity',
                'NaN',
                'Ошибка'
            ],
            correct: 2,
            explanation: '0 / 0 возвращает NaN (Not a Number), так как результат неопределен.'
        },
        {
            id: 32,
            question: 'Что такое оператор остатка от деления?',
            type: 'multiple',
            options: [
                '%',
                '/',
                '*',
                'mod'
            ],
            correct: 0,
            explanation: 'Оператор % возвращает остаток от деления. Например: 10 % 3 = 1 (10 делится на 3 с остатком 1).'
        },
        {
            id: 33,
            question: 'Что выведет: console.log(10 % 3)?',
            type: 'multiple',
            options: [
                '3',
                '1',
                '0',
                'Ошибка'
            ],
            correct: 1,
            explanation: '10 % 3 возвращает остаток от деления: 10 = 3 * 3 + 1, остаток = 1.'
        },
        {
            id: 34,
            question: 'Что делает оператор ++?',
            type: 'multiple',
            options: [
                'Увеличивает значение на 1',
                'Увеличивает значение на 2',
                'Умножает на 2',
                'Делает число положительным'
            ],
            correct: 0,
            explanation: 'Оператор ++ (инкремент) увеличивает значение переменной на 1.'
        },
        {
            id: 35,
            question: 'В чем разница между ++x и x++?',
            type: 'multiple',
            options: [
                '++x увеличивает до возврата значения, x++ после',
                'Нет разницы',
                '++x работает только с числами',
                'x++ устарел'
            ],
            correct: 0,
            explanation: '++x (префикс) увеличивает и возвращает новое значение, x++ (постфикс) возвращает старое, затем увеличивает.'
        },
        {
            id: 36,
            question: 'Что выведет: let x = 5; console.log(x++); console.log(x)?',
            type: 'multiple',
            options: [
                '5, затем 6',
                '6, затем 6',
                '5, затем 5',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'x++ возвращает старое значение (5), затем x становится 6. Второй console.log покажет 6.'
        },
        {
            id: 37,
            question: 'Что выведет: let x = 5; console.log(++x); console.log(x)?',
            type: 'multiple',
            options: [
                '6, затем 6',
                '5, затем 6',
                '5, затем 5',
                'Ошибка'
            ],
            correct: 0,
            explanation: '++x увеличивает и возвращает новое значение (6), второй console.log также покажет 6.'
        },
        {
            id: 38,
            question: 'Что такое оператор присваивания?',
            type: 'multiple',
            options: [
                '=',
                '==',
                '===',
                '->'
            ],
            correct: 0,
            explanation: 'Оператор = присваивает значение переменной. == и === это операторы сравнения.'
        },
        {
            id: 39,
            question: 'Что делает оператор +=?',
            type: 'multiple',
            options: [
                'Сокращение для x = x + значение',
                'Только сложение',
                'Только для строк',
                'Не существует'
            ],
            correct: 0,
            explanation: 'x += y это сокращение для x = x + y. Аналогично работают -=, *=, /=.'
        },
        {
            id: 40,
            question: 'Что выведет: let x = 5; x += 3; console.log(x)?',
            type: 'multiple',
            options: [
                '8',
                '53',
                '5',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'x += 3 эквивалентно x = x + 3, поэтому x становится 8.'
        },
        {
            id: 41,
            question: 'Что такое тернарный оператор?',
            type: 'multiple',
            options: [
                'Условный оператор ? :',
                'Оператор присваивания',
                'Оператор сравнения',
                'Логический оператор'
            ],
            correct: 0,
            explanation: 'Тернарный оператор condition ? valueIfTrue : valueIfFalse - это краткая форма if-else.'
        },
        {
            id: 42,
            question: 'Что выведет: console.log(5 > 3 ? "больше" : "меньше")?',
            type: 'multiple',
            options: [
                '"больше"',
                '"меньше"',
                'true',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Тернарный оператор: если 5 > 3 (true), вернуть "больше", иначе "меньше".'
        },
        {
            id: 43,
            question: 'Что такое логический оператор && (И)?',
            type: 'multiple',
            options: [
                'Возвращает true, если оба операнда true',
                'Возвращает true, если хотя бы один true',
                'Инвертирует значение',
                'Возвращает первый операнд'
            ],
            correct: 0,
            explanation: '&& возвращает true только если оба операнда true. Также возвращает последнее truthy значение или первое falsy.'
        },
        {
            id: 44,
            question: 'Что выведет: console.log(true && false)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'null'
            ],
            correct: 1,
            explanation: '&& возвращает false, так как не оба операнда true. Если первый false, возвращается первый операнд (false).'
        },
        {
            id: 45,
            question: 'Что выведет: console.log(true && "text")?',
            type: 'multiple',
            options: [
                'true',
                'false',
                '"text"',
                'undefined'
            ],
            correct: 2,
            explanation: 'Если первый операнд && truthy, возвращается второй операнд. Поэтому "text".'
        },
        {
            id: 46,
            question: 'Что такое логический оператор || (ИЛИ)?',
            type: 'multiple',
            options: [
                'Возвращает true, если хотя бы один операнд true',
                'Возвращает true только если оба true',
                'Инвертирует значение',
                'Всегда false'
            ],
            correct: 0,
            explanation: '|| возвращает true, если хотя бы один операнд true. Также возвращает первое truthy значение.'
        },
        {
            id: 47,
            question: 'Что выведет: console.log(false || "text")?',
            type: 'multiple',
            options: [
                'false',
                'true',
                '"text"',
                'undefined'
            ],
            correct: 2,
            explanation: 'Если первый операнд || falsy, возвращается второй. Если второй truthy, возвращается "text".'
        },
        {
            id: 48,
            question: 'Что такое логический оператор ! (НЕ)?',
            type: 'multiple',
            options: [
                'Инвертирует boolean значение',
                'Удаляет значение',
                'Возвращает undefined',
                'Увеличивает значение'
            ],
            correct: 0,
            explanation: 'Оператор ! (NOT) инвертирует boolean значение: !true = false, !false = true.'
        },
        {
            id: 49,
            question: 'Что выведет: console.log(!0)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                '0',
                'undefined'
            ],
            correct: 0,
            explanation: '!0 инвертирует falsy значение 0, получается true (потому что 0 это false, !false = true).'
        },
        {
            id: 50,
            question: 'Что такое оператор void?',
            type: 'multiple',
            options: [
                'Оператор, возвращающий undefined',
                'Удаляет переменную',
                'Очищает значение',
                'Не существует'
            ],
            correct: 0,
            explanation: 'void оператор выполняет выражение и всегда возвращает undefined. Редко используется.'
        },
        {
            id: 51,
            question: 'Что выведет: console.log(void 0)?',
            type: 'multiple',
            options: [
                '0',
                'undefined',
                'null',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'void 0 всегда возвращает undefined, независимо от значения выражения.'
        },
        {
            id: 52,
            question: 'Что такое оператор typeof?',
            type: 'multiple',
            options: [
                'Оператор, возвращающий тип значения в виде строки',
                'Функция для преобразования типов',
                'Метод объекта',
                'Переменная'
            ],
            correct: 0,
            explanation: 'typeof возвращает строку, указывающую тип операнда: "number", "string", "boolean", "object", "function", "undefined".'
        },
        {
            id: 53,
            question: 'Что выведет: console.log(typeof function() {})?',
            type: 'multiple',
            options: [
                '"function"',
                '"object"',
                '"undefined"',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'typeof function возвращает "function", хотя функции технически являются объектами.'
        },
        {
            id: 54,
            question: 'Что такое оператор instanceof?',
            type: 'multiple',
            options: [
                'Проверяет, является ли объект экземпляром конструктора',
                'Проверяет тип примитива',
                'Создает экземпляр',
                'Удаляет экземпляр'
            ],
            correct: 0,
            explanation: 'instanceof проверяет, является ли объект экземпляром указанного конструктора или класса.'
        },
        {
            id: 55,
            question: 'Что выведет: console.log([] instanceof Array)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: '[] является экземпляром Array, поэтому [] instanceof Array вернет true.'
        },
        {
            id: 56,
            question: 'Что такое оператор in?',
            type: 'multiple',
            options: [
                'Проверяет наличие свойства в объекте',
                'Проверяет наличие элемента в массиве',
                'Оператор включения',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Оператор in проверяет наличие свойства в объекте: "property" in object.'
        },
        {
            id: 57,
            question: 'Что выведет: console.log("length" in [])?',
            type: 'multiple',
            options: [
                'true',
                'false',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Массивы имеют свойство length, поэтому "length" in [] вернет true.'
        },
        {
            id: 58,
            question: 'Что такое оператор запятой (comma operator)?',
            type: 'multiple',
            options: [
                'Оператор, вычисляющий оба операнда и возвращающий второй',
                'Разделитель аргументов',
                'Оператор сравнения',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Оператор запятой вычисляет оба операнда слева направо и возвращает значение второго: (x, y) вернет y.'
        },
        {
            id: 59,
            question: 'Что выведет: console.log((1, 2, 3))?',
            type: 'multiple',
            options: [
                '1',
                '2',
                '3',
                '[1, 2, 3]'
            ],
            correct: 2,
            explanation: 'Оператор запятой вычисляет все выражения и возвращает последнее, поэтому вернет 3.'
        },
        {
            id: 60,
            question: 'Что такое унарный оператор?',
            type: 'multiple',
            options: [
                'Оператор с одним операндом',
                'Оператор с двумя операндами',
                'Оператор с тремя операндами',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Унарный оператор работает с одним операндом: ++x, --x, !x, typeof x, -x, +x.'
        },
        {
            id: 61,
            question: 'Что такое бинарный оператор?',
            type: 'multiple',
            options: [
                'Оператор с двумя операндами',
                'Оператор с одним операндом',
                'Оператор с тремя операндами',
                'Двоичный оператор'
            ],
            correct: 0,
            explanation: 'Бинарный оператор работает с двумя операндами: +, -, *, /, ==, ===, &&, ||.'
        },
        {
            id: 62,
            question: 'Что такое тернарный оператор?',
            type: 'multiple',
            options: [
                'Оператор с тремя операндами (условие ? значение1 : значение2)',
                'Оператор с двумя операндами',
                'Оператор с одним операндом',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Тернарный оператор - единственный оператор с тремя операндами: условие ? значение1 : значение2.'
        },
        {
            id: 63,
            question: 'Что такое приоритет операторов?',
            type: 'multiple',
            options: [
                'Порядок выполнения операций в выражении',
                'Скорость выполнения',
                'Тип оператора',
                'Количество операндов'
            ],
            correct: 0,
            explanation: 'Приоритет операторов определяет порядок выполнения операций в выражении. Можно изменить скобками ().'
        },
        {
            id: 64,
            question: 'Что выведет: console.log(2 + 3 * 4)?',
            type: 'multiple',
            options: [
                '20',
                '14',
                '24',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'Умножение имеет больший приоритет, поэтому: 2 + (3 * 4) = 2 + 12 = 14.'
        },
        {
            id: 65,
            question: 'Что такое ассоциативность операторов?',
            type: 'multiple',
            options: [
                'Направление вычисления при одинаковом приоритете',
                'Тип операндов',
                'Скорость выполнения',
                'Количество операндов'
            ],
            correct: 0,
            explanation: 'Ассоциативность определяет направление вычисления: слева направо (левая) или справа налево (правая).'
        },
        {
            id: 66,
            question: 'Что такое оператор new?',
            type: 'multiple',
            options: [
                'Создает новый экземпляр объекта',
                'Создает новую переменную',
                'Удаляет объект',
                'Клонирует объект'
            ],
            correct: 0,
            explanation: 'Оператор new создает новый экземпляр объекта, вызывая конструктор функции.'
        },
        {
            id: 67,
            question: 'Что такое оператор delete?',
            type: 'multiple',
            options: [
                'Удаляет свойство объекта',
                'Удаляет переменную',
                'Удаляет функцию',
                'Удаляет весь объект'
            ],
            correct: 0,
            explanation: 'delete удаляет свойство объекта. Не может удалить переменную или функцию, объявленную через var/let/const.'
        },
        {
            id: 68,
            question: 'Что выведет: let obj = {a: 1}; delete obj.a; console.log(obj.a)?',
            type: 'multiple',
            options: [
                '1',
                'undefined',
                'null',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'После delete obj.a свойство удаляется, obj.a вернет undefined.'
        },
        {
            id: 69,
            question: 'Что такое оператор void 0?',
            type: 'multiple',
            options: [
                'Всегда возвращает undefined',
                'Удаляет значение',
                'Очищает переменную',
                'Возвращает 0'
            ],
            correct: 0,
            explanation: 'void 0 всегда возвращает undefined независимо от выражения. Используется редко.'
        },
        {
            id: 70,
            question: 'Что такое оператор ?.? (optional chaining)?',
            type: 'multiple',
            options: [
                'Безопасный доступ к свойствам вложенных объектов',
                'Условный оператор',
                'Оператор сравнения',
                'Не существует'
            ],
            correct: 0,
            explanation: '?. (optional chaining) позволяет безопасно обращаться к свойствам, возвращая undefined если что-то null/undefined.'
        },
        {
            id: 71,
            question: 'Что выведет: console.log(null?.property)?',
            type: 'multiple',
            options: [
                'undefined',
                'null',
                'Ошибка',
                'null.property'
            ],
            correct: 0,
            explanation: 'Optional chaining ?. возвращает undefined если левая часть null/undefined, не вызывая ошибку.'
        },
        {
            id: 72,
            question: 'Что такое оператор ?? (nullish coalescing)?',
            type: 'multiple',
            options: [
                'Возвращает правый операнд, если левый null или undefined',
                'Оператор сравнения',
                'Оператор присваивания',
                'Логический оператор И'
            ],
            correct: 0,
            explanation: '?? возвращает правый операнд только если левый null или undefined (не для других falsy значений).'
        },
        {
            id: 73,
            question: 'Что выведет: console.log(null ?? "default")?',
            type: 'multiple',
            options: [
                '"default"',
                'null',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Так как левый операнд null, ?? вернет правый операнд "default".'
        },
        {
            id: 74,
            question: 'Что выведет: console.log(0 ?? "default")?',
            type: 'multiple',
            options: [
                '0',
                '"default"',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: '?? возвращает правый операнд только для null/undefined. 0 это falsy, но не null/undefined, поэтому вернется 0.'
        },
        {
            id: 75,
            question: 'Что такое оператор ??= (nullish coalescing assignment)?',
            type: 'multiple',
            options: [
                'Присваивает значение только если переменная null/undefined',
                'Всегда присваивает значение',
                'Удаляет значение',
                'Не существует'
            ],
            correct: 0,
            explanation: 'x ??= y эквивалентно x = x ?? y - присваивает y только если x null или undefined.'
        },
        {
            id: 76,
            question: 'Что такое блок кода (block)?',
            type: 'multiple',
            options: [
                'Код в фигурных скобках {}',
                'Комментарий',
                'Строка кода',
                'Функция'
            ],
            correct: 0,
            explanation: 'Блок кода - это группа statements в фигурных скобках {}, создающая новую область видимости для let и const.'
        },
        {
            id: 77,
            question: 'Что такое statement (инструкция)?',
            type: 'multiple',
            options: [
                'Отдельная команда или инструкция в программе',
                'Выражение',
                'Значение',
                'Переменная'
            ],
            correct: 0,
            explanation: 'Statement - это инструкция, выполняющая действие: if, for, while, let, const, return и т.д.'
        },
        {
            id: 78,
            question: 'Что такое expression (выражение)?',
            type: 'multiple',
            options: [
                'Код, который вычисляется в значение',
                'Инструкция',
                'Блок кода',
                'Функция'
            ],
            correct: 0,
            explanation: 'Expression - это код, который вычисляется в значение: 2 + 3, x, function() {}, и т.д.'
        },
        {
            id: 79,
            question: 'В чем разница между statement и expression?',
            type: 'multiple',
            options: [
                'Statement выполняет действие, expression вычисляется в значение',
                'Нет разницы',
                'Statement быстрее',
                'Expression устарел'
            ],
            correct: 0,
            explanation: 'Statement выполняет действие (if, for), expression вычисляется в значение (2+3, x).'
        },
        {
            id: 80,
            question: 'Что такое литерал (literal)?',
            type: 'multiple',
            options: [
                'Значение, записанное напрямую в коде',
                'Переменная',
                'Функция',
                'Оператор'
            ],
            correct: 0,
            explanation: 'Литерал - это значение, записанное напрямую: 5 (числовой), "text" (строковый), true (boolean).'
        },
        {
            id: 81,
            question: 'Что такое идентификатор (identifier)?',
            type: 'multiple',
            options: [
                'Имя переменной, функции или свойства',
                'Значение',
                'Тип данных',
                'Оператор'
            ],
            correct: 0,
            explanation: 'Идентификатор - это имя, используемое для именования переменных, функций, свойств: let name, function test().'
        },
        {
            id: 82,
            question: 'Какие символы можно использовать в идентификаторах?',
            type: 'multiple',
            options: [
                'Буквы, цифры, _, $ (не может начинаться с цифры)',
                'Только буквы',
                'Любые символы',
                'Только латинские буквы'
            ],
            correct: 0,
            explanation: 'Идентификатор может содержать буквы, цифры, _, $, но не может начинаться с цифры.'
        },
        {
            id: 83,
            question: 'Что такое зарезервированные слова (keywords)?',
            type: 'multiple',
            options: [
                'Слова, зарезервированные языком и не могут быть идентификаторами',
                'Обычные слова',
                'Переменные',
                'Функции'
            ],
            correct: 0,
            explanation: 'Keywords - зарезервированные слова: if, else, for, while, let, const, function, return и т.д. Нельзя использовать как идентификаторы.'
        },
        {
            id: 84,
            question: 'Что такое комментарий?',
            type: 'multiple',
            options: [
                'Текст, игнорируемый JavaScript',
                'Переменная',
                'Функция',
                'Оператор'
            ],
            correct: 0,
            explanation: 'Комментарии // или /* */ игнорируются JavaScript, используются для документирования кода.'
        },
        {
            id: 85,
            question: 'Что такое строгий режим (strict mode)?',
            type: 'multiple',
            options: [
                'Режим с более строгими правилами и лучшей обработкой ошибок',
                'Режим без типов',
                'Режим только для функций',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Strict mode включается директивой "use strict", делает код более строгим и помогает находить ошибки.'
        },
        {
            id: 86,
            question: 'Как включить строгий режим?',
            type: 'multiple',
            options: [
                'Добавить "use strict" в начале файла или функции',
                'Использовать strict: true',
                'Использовать let вместо var',
                'Автоматически включен'
            ],
            correct: 0,
            explanation: 'Строгий режим включается директивой "use strict" в начале файла или функции.'
        },
        {
            id: 87,
            question: 'Что такое автоматическая вставка точки с запятой (ASI)?',
            type: 'multiple',
            options: [
                'Автоматическая вставка ; в конце statements',
                'Удаление точек с запятой',
                'Игнорирование точек с запятой',
                'Не существует'
            ],
            correct: 0,
            explanation: 'ASI автоматически вставляет ; в конце statements, но лучше ставить явно для избежания неожиданного поведения.'
        },
        {
            id: 88,
            question: 'Что такое label в JavaScript?',
            type: 'multiple',
            options: [
                'Идентификатор перед циклом или блоком для break/continue',
                'Текст на странице',
                'Комментарий',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Label - это идентификатор перед циклом: label: for(...) позволяет использовать break label или continue label.'
        },
        {
            id: 89,
            question: 'Что такое break?',
            type: 'multiple',
            options: [
                'Прерывает выполнение цикла или switch',
                'Начинает цикл',
                'Продолжает цикл',
                'Останавливает программу'
            ],
            correct: 0,
            explanation: 'break прерывает выполнение текущего цикла или switch и переходит к коду после блока.'
        },
        {
            id: 90,
            question: 'Что такое continue?',
            type: 'multiple',
            options: [
                'Пропускает текущую итерацию цикла и переходит к следующей',
                'Прерывает цикл',
                'Начинает цикл заново',
                'Останавливает программу'
            ],
            correct: 0,
            explanation: 'continue пропускает оставшийся код текущей итерации и переходит к следующей итерации цикла.'
        },
        {
            id: 91,
            question: 'Что такое switch statement?',
            type: 'multiple',
            options: [
                'Множественное ветвление на основе значения',
                'Цикл',
                'Функция',
                'Оператор'
            ],
            correct: 0,
            explanation: 'switch позволяет выполнить разные блоки кода в зависимости от значения выражения.'
        },
        {
            id: 92,
            question: 'Что делает default в switch?',
            type: 'multiple',
            options: [
                'Выполняется, если ни один case не совпал',
                'Первый case',
                'Последний case',
                'Не существует'
            ],
            correct: 0,
            explanation: 'default выполняется, если значение не совпало ни с одним case. Необязательный, но рекомендуется.'
        },
        {
            id: 93,
            question: 'Что такое fall-through в switch?',
            type: 'multiple',
            options: [
                'Выполнение нескольких case подряд без break',
                'Ошибка',
                'Прерывание выполнения',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Fall-through - это выполнение кода нескольких case подряд, если между ними нет break.'
        },
        {
            id: 94,
            question: 'Что такое цикл for?',
            type: 'multiple',
            options: [
                'Цикл с инициализацией, условием и обновлением',
                'Бесконечный цикл',
                'Цикл только для массивов',
                'Условный оператор'
            ],
            correct: 0,
            explanation: 'for(инициализация; условие; обновление) - цикл с предопределенной структурой для повторения кода.'
        },
        {
            id: 95,
            question: 'Что такое цикл for...in?',
            type: 'multiple',
            options: [
                'Итерация по перечисляемым свойствам объекта',
                'Итерация по значениям массива',
                'Бесконечный цикл',
                'Не существует'
            ],
            correct: 0,
            explanation: 'for...in перебирает перечисляемые свойства объекта, возвращая ключи (не рекомендуется для массивов).'
        },
        {
            id: 96,
            question: 'Что такое цикл for...of?',
            type: 'multiple',
            options: [
                'Итерация по итерируемым объектам (массивы, строки)',
                'Итерация по ключам объекта',
                'Бесконечный цикл',
                'Не существует'
            ],
            correct: 0,
            explanation: 'for...of перебирает итерируемые объекты (массивы, строки, Map, Set), возвращая значения элементов.'
        },
        {
            id: 97,
            question: 'В чем разница между for...in и for...of?',
            type: 'multiple',
            options: [
                'for...in по ключам объектов, for...of по значениям итерируемых',
                'Нет разницы',
                'for...in быстрее',
                'for...of устарел'
            ],
            correct: 0,
            explanation: 'for...in возвращает ключи/индексы, for...of возвращает значения элементов. for...of предпочтительнее для массивов.'
        },
        {
            id: 98,
            question: 'Что такое цикл while?',
            type: 'multiple',
            options: [
                'Цикл, выполняющийся пока условие true',
                'Цикл с фиксированным количеством итераций',
                'Бесконечный цикл',
                'Не существует'
            ],
            correct: 0,
            explanation: 'while(условие) выполняет код пока условие истинно. Условие проверяется перед каждой итерацией.'
        },
        {
            id: 99,
            question: 'Что такое цикл do...while?',
            type: 'multiple',
            options: [
                'Цикл, выполняющийся минимум один раз',
                'Бесконечный цикл',
                'Цикл с фиксированным количеством итераций',
                'Не существует'
            ],
            correct: 0,
            explanation: 'do...while выполняет код, затем проверяет условие. Гарантирует минимум одну итерацию.'
        },
        {
            id: 100,
            question: 'Что такое бесконечный цикл?',
            type: 'multiple',
            options: [
                'Цикл, который никогда не завершается',
                'Быстрый цикл',
                'Цикл без условий',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Бесконечный цикл - цикл, условие которого всегда true, например: while(true) или for(;;).'
        },
        {
            id: 101,
            question: 'Что такое вложенные циклы (nested loops)?',
            type: 'multiple',
            options: [
                'Цикл внутри другого цикла',
                'Несколько циклов подряд',
                'Цикл с условием',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Вложенные циклы - это цикл внутри другого цикла, полезно для работы с многомерными массивами.'
        },
        {
            id: 102,
            question: 'Что такое оператор return?',
            type: 'multiple',
            options: [
                'Возвращает значение из функции и завершает её выполнение',
                'Начинает функцию',
                'Вызывает функцию',
                'Останавливает программу'
            ],
            correct: 0,
            explanation: 'return возвращает значение из функции и немедленно завершает её выполнение.'
        },
        {
            id: 103,
            question: 'Что вернет функция без return?',
            type: 'multiple',
            options: [
                'undefined',
                'null',
                '0',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Если функция не имеет return или return без значения, она возвращает undefined.'
        },
        {
            id: 104,
            question: 'Что такое аргументы функции?',
            type: 'multiple',
            options: [
                'Значения, передаваемые в функцию при вызове',
                'Параметры функции',
                'Локальные переменные',
                'Глобальные переменные'
            ],
            correct: 0,
            explanation: 'Аргументы - это значения, передаваемые в функцию при вызове. Параметры - это переменные в определении функции.'
        },
        {
            id: 105,
            question: 'Что такое параметры функции?',
            type: 'multiple',
            options: [
                'Переменные в определении функции',
                'Значения при вызове',
                'Глобальные переменные',
                'Локальные переменные внутри функции'
            ],
            correct: 0,
            explanation: 'Параметры - это переменные, указанные в определении функции. Аргументы - значения, переданные при вызове.'
        },
        {
            id: 106,
            question: 'Что выведет: function test(x) { console.log(x) }; test()?',
            type: 'multiple',
            options: [
                'undefined',
                'null',
                'Ошибка',
                '0'
            ],
            correct: 0,
            explanation: 'Если аргумент не передан, параметр имеет значение undefined.'
        },
        {
            id: 107,
            question: 'Что такое arguments объект?',
            type: 'multiple',
            options: [
                'Объект, содержащий все аргументы функции',
                'Массив аргументов',
                'Первый аргумент',
                'Не существует'
            ],
            correct: 0,
            explanation: 'arguments - это объект, похожий на массив, содержащий все переданные аргументы. Доступен только в обычных функциях.'
        },
        {
            id: 108,
            question: 'Что такое методы строк?',
            type: 'multiple',
            options: [
                'Встроенные функции для работы со строками',
                'Переменные строк',
                'Типы строк',
                'Операторы строк'
            ],
            correct: 0,
            explanation: 'Строки имеют встроенные методы: length, charAt(), indexOf(), substring(), toLowerCase(), toUpperCase() и др.'
        },
        {
            id: 109,
            question: 'Что выведет: "hello".length?',
            type: 'multiple',
            options: [
                '5',
                '4',
                '6',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Свойство length строки возвращает количество символов. "hello" содержит 5 символов.'
        },
        {
            id: 110,
            question: 'Что выведет: "hello".charAt(0)?',
            type: 'multiple',
            options: [
                '"h"',
                '"e"',
                '"o"',
                'undefined'
            ],
            correct: 0,
            explanation: 'charAt(0) возвращает символ по индексу 0 (первый символ) - "h".'
        },
        {
            id: 111,
            question: 'Что выведет: "hello".indexOf("l")?',
            type: 'multiple',
            options: [
                '2',
                '3',
                '1',
                '-1'
            ],
            correct: 0,
            explanation: 'indexOf("l") возвращает индекс первого вхождения "l" в строке "hello" - это позиция 2 (нумерация с 0).'
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
        },
        {
            id: 6,
            question: 'Что такое IIFE (Immediately Invoked Function Expression)?',
            type: 'multiple',
            options: [
                'Функция, которая вызывается сразу после объявления',
                'Асинхронная функция',
                'Рекурсивная функция',
                'Функция-конструктор'
            ],
            correct: 0,
            explanation: 'IIFE - это функция, которая выполняется сразу после её определения, обычно используется для изоляции области видимости.'
        },
        {
            id: 7,
            question: 'Что такое arguments в функции?',
            type: 'multiple',
            options: [
                'Массив всех переданных аргументов',
                'Объект, похожий на массив, содержащий аргументы',
                'Только первый аргумент',
                'Не существует'
            ],
            correct: 1,
            explanation: 'arguments - это объект, похожий на массив, содержащий все переданные функции аргументы. Доступен только в обычных функциях, не в arrow functions.'
        },
        {
            id: 8,
            question: 'Что выведет: (function(x) { return x * 2; })(5)?',
            type: 'multiple',
            options: [
                '10',
                'undefined',
                'Ошибка',
                '25'
            ],
            correct: 0,
            explanation: 'Это IIFE, которая сразу вызывается с аргументом 5, возвращает 5 * 2 = 10.'
        },
        {
            id: 9,
            question: 'Может ли arrow function иметь собственный this?',
            type: 'multiple',
            options: [
                'Да, всегда',
                'Нет, this берется из внешнего контекста',
                'Только в строгом режиме',
                'Только в классах'
            ],
            correct: 1,
            explanation: 'Arrow function не имеет собственного this, он берется из лексического контекста (где функция была определена).'
        },
        {
            id: 10,
            question: 'Что такое функция высшего порядка (higher-order function)?',
            type: 'multiple',
            options: [
                'Функция, которая принимает другие функции как аргументы или возвращает функцию',
                'Функция только высшего уровня',
                'Асинхронная функция',
                'Рекурсивная функция'
            ],
            correct: 0,
            explanation: 'Функция высшего порядка - это функция, которая работает с другими функциями: принимает их как аргументы или возвращает.'
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
        },
        {
            id: 6,
            question: 'Что делает метод find()?',
            type: 'multiple',
            options: [
                'Находит все элементы',
                'Находит первый элемент, соответствующий условию',
                'Удаляет элемент',
                'Сортирует массив'
            ],
            correct: 1,
            explanation: 'find() возвращает первый элемент массива, который удовлетворяет условию функции, или undefined.'
        },
        {
            id: 7,
            question: 'Что выведет: [1, 2, 3].reduce((acc, val) => acc + val, 0)?',
            type: 'multiple',
            options: [
                '6',
                '[1, 2, 3]',
                '0',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'reduce() суммирует все элементы: 0 + 1 + 2 + 3 = 6. Начальное значение аккумулятора - 0.'
        },
        {
            id: 8,
            question: 'В чем разница между slice() и splice()?',
            type: 'multiple',
            options: [
                'slice() изменяет массив, splice() нет',
                'slice() не изменяет массив, splice() изменяет',
                'Нет разницы',
                'Оба удаляют элементы'
            ],
            correct: 1,
            explanation: 'slice() возвращает новый массив (не изменяет исходный), а splice() изменяет исходный массив.'
        },
        {
            id: 9,
            question: 'Что делает метод flat()?',
            type: 'multiple',
            options: [
                'Удаляет дубликаты',
                'Разворачивает вложенные массивы',
                'Сортирует массив',
                'Фильтрует элементы'
            ],
            correct: 1,
            explanation: 'flat() создает новый массив, разворачивая вложенные массивы на указанную глубину.'
        },
        {
            id: 10,
            question: 'Что выведет: [1, 2, 3].some(x => x > 2)?',
            type: 'multiple',
            options: [
                'true',
                'false',
                '[3]',
                'undefined'
            ],
            correct: 0,
            explanation: 'some() возвращает true, если хотя бы один элемент удовлетворяет условию. Элемент 3 > 2, поэтому true.'
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
        },
        {
            id: 6,
            question: 'Что делает Promise.all()?',
            type: 'multiple',
            options: [
                'Ожидает все Promise, возвращает массив результатов',
                'Ожидает первый выполненный Promise',
                'Отменяет все Promise',
                'Создает новый Promise'
            ],
            correct: 0,
            explanation: 'Promise.all() ожидает выполнения всех Promise и возвращает массив результатов в том же порядке.'
        },
        {
            id: 7,
            question: 'Что делает Promise.race()?',
            type: 'multiple',
            options: [
                'Ожидает все Promise',
                'Ожидает первый выполненный или отклоненный Promise',
                'Отменяет Promise',
                'Создает массив Promise'
            ],
            correct: 1,
            explanation: 'Promise.race() возвращает Promise, который выполняется или отклоняется как только один из Promise выполнится или отклонится.'
        },
        {
            id: 8,
            question: 'Что выведет: Promise.resolve(5).then(x => x * 2)?',
            type: 'multiple',
            options: [
                '5',
                '10',
                'Promise с значением 10',
                'Ошибка'
            ],
            correct: 2,
            explanation: 'then() возвращает новый Promise. В данном случае Promise с результатом 10.'
        },
        {
            id: 9,
            question: 'Можно ли использовать await вне async функции?',
            type: 'multiple',
            options: [
                'Да, всегда',
                'Нет, только в async функциях',
                'Только в строгом режиме',
                'Только в модулях'
            ],
            correct: 1,
            explanation: 'await можно использовать только внутри async функции, иначе будет синтаксическая ошибка.'
        },
        {
            id: 10,
            question: 'Что делает Promise.finally()?',
            type: 'multiple',
            options: [
                'Выполняется только при успехе',
                'Выполняется только при ошибке',
                'Выполняется всегда, независимо от результата',
                'Не существует'
            ],
            correct: 2,
            explanation: 'finally() выполняется всегда, независимо от того, был Promise выполнен или отклонен.'
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
        },
        {
            id: 6,
            question: 'Как выбрать все элементы с классом "item"?',
            type: 'multiple',
            options: [
                'document.getElementById("item")',
                'document.querySelectorAll(".item")',
                'document.getElementsByTagName("item")',
                'document.querySelector("item")'
            ],
            correct: 1,
            explanation: 'querySelectorAll(".item") выбирает все элементы с классом "item".'
        },
        {
            id: 7,
            question: 'Что делает createElement()?',
            type: 'multiple',
            options: [
                'Выбирает элемент',
                'Создает новый HTML элемент в памяти',
                'Удаляет элемент',
                'Клонирует элемент'
            ],
            correct: 1,
            explanation: 'createElement() создает новый HTML элемент в памяти, но не добавляет его в DOM до вызова appendChild() или похожих методов.'
        },
        {
            id: 8,
            question: 'Что такое виртуальный DOM?',
            type: 'multiple',
            options: [
                'Встроенная возможность браузера',
                'Абстракция реального DOM, используемая в React и других фреймворках',
                'Не существует',
                'Версия DOM в Node.js'
            ],
            correct: 1,
            explanation: 'Виртуальный DOM - это концепция, используемая в React и других фреймворках для оптимизации обновлений реального DOM.'
        },
        {
            id: 9,
            question: 'Что делает removeChild()?',
            type: 'multiple',
            options: [
                'Скрывает элемент',
                'Удаляет дочерний элемент из DOM',
                'Создает элемент',
                'Клонирует элемент'
            ],
            correct: 1,
            explanation: 'removeChild() удаляет указанный дочерний элемент из DOM дерева.'
        },
        {
            id: 10,
            question: 'В чем разница между getAttribute() и dataset?',
            type: 'multiple',
            options: [
                'Нет разницы',
                'getAttribute() для любых атрибутов, dataset только для data-*',
                'dataset быстрее',
                'getAttribute() устарел'
            ],
            correct: 1,
            explanation: 'getAttribute() работает с любыми атрибутами, а dataset - только с data-* атрибутами, но предоставляет более удобный интерфейс.'
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
        },
        {
            id: 4,
            question: 'Что такое Object.assign()?',
            type: 'multiple',
            options: [
                'Копирует свойства из одного объекта в другой',
                'Удаляет свойства',
                'Сравнивает объекты',
                'Создает новый тип'
            ],
            correct: 0,
            explanation: 'Object.assign() копирует все собственные перечисляемые свойства из исходных объектов в целевой объект.'
        },
        {
            id: 5,
            question: 'Что такое __proto__?',
            type: 'multiple',
            options: [
                'Устаревшее свойство для доступа к прототипу',
                'Новый стандарт',
                'Метод объекта',
                'Тип данных'
            ],
            correct: 0,
            explanation: '__proto__ - это устаревший способ доступа к прототипу объекта. Рекомендуется использовать Object.getPrototypeOf() и Object.setPrototypeOf().'
        },
        {
            id: 6,
            question: 'Как создать глубокую копию объекта?',
            type: 'multiple',
            options: [
                'Object.assign({}, obj)',
                'JSON.parse(JSON.stringify(obj)) или structuredClone()',
                '{...obj}',
                'const copy = obj'
            ],
            correct: 1,
            explanation: 'Для глубокой копии нужно использовать JSON.parse(JSON.stringify(obj)) или современный structuredClone(), так как Object.assign() и spread создают только поверхностную копию.'
        },
        {
            id: 7,
            question: 'Что такое Object.keys()?',
            type: 'multiple',
            options: [
                'Возвращает значения объекта',
                'Возвращает массив ключей объекта',
                'Удаляет ключи',
                'Создает новый объект'
            ],
            correct: 1,
            explanation: 'Object.keys() возвращает массив строковых ключей собственных перечисляемых свойств объекта.'
        },
        {
            id: 8,
            question: 'Что такое hasOwnProperty()?',
            type: 'multiple',
            options: [
                'Проверяет наличие свойства в объекте',
                'Добавляет свойство',
                'Удаляет свойство',
                'Клонирует свойство'
            ],
            correct: 0,
            explanation: 'hasOwnProperty() проверяет, имеет ли объект собственное (не унаследованное) свойство с указанным именем.'
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
        },
        {
            id: 4,
            question: 'Что делает оператор rest (...)?',
            type: 'multiple',
            options: [
                'Распаковывает элементы',
                'Собирает оставшиеся аргументы в массив',
                'Объединяет массивы',
                'Удаляет элементы'
            ],
            correct: 1,
            explanation: 'Оператор rest (...) в параметрах функции собирает все оставшиеся аргументы в массив.'
        },
        {
            id: 5,
            question: 'Что выведет: const [a, ...rest] = [1, 2, 3, 4]; console.log(rest)?',
            type: 'multiple',
            options: [
                '[1, 2, 3]',
                '[2, 3, 4]',
                '[1, 2, 3, 4]',
                'Ошибка'
            ],
            correct: 1,
            explanation: 'rest соберет все элементы после первого: [2, 3, 4].'
        },
        {
            id: 6,
            question: 'Что такое дефолтные параметры функции?',
            type: 'multiple',
            options: [
                'Значения по умолчанию для параметров',
                'Обязательные параметры',
                'Необязательные параметры',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Дефолтные параметры позволяют задать значения по умолчанию для параметров функции: function greet(name = "Гость").'
        },
        {
            id: 7,
            question: 'Что такое деструктуризация массивов?',
            type: 'multiple',
            options: [
                'Удаление элементов',
                'Извлечение элементов массива в переменные',
                'Сортировка массива',
                'Фильтрация массива'
            ],
            correct: 1,
            explanation: 'Деструктуризация массивов позволяет извлекать элементы в переменные: const [first, second] = [1, 2].'
        },
        {
            id: 8,
            question: 'Что такое модули ES6?',
            type: 'multiple',
            options: [
                'Способ организации кода с экспортом/импортом',
                'Библиотека',
                'Фреймворк',
                'Тип данных'
            ],
            correct: 0,
            explanation: 'ES6 модули позволяют организовывать код с помощью export и import, изолируя области видимости.'
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
        },
        {
            id: 3,
            question: 'Что такое инкапсуляция?',
            type: 'multiple',
            options: [
                'Сокрытие внутренней реализации объекта',
                'Объединение классов',
                'Наследование',
                'Полиморфизм'
            ],
            correct: 0,
            explanation: 'Инкапсуляция - это сокрытие внутренней реализации объекта и предоставление только необходимого интерфейса.'
        },
        {
            id: 4,
            question: 'Что такое полиморфизм?',
            type: 'multiple',
            options: [
                'Способность объектов разных типов обрабатываться одинаково',
                'Множественное наследование',
                'Сокрытие данных',
                'Создание классов'
            ],
            correct: 0,
            explanation: 'Полиморфизм - это способность объектов разных типов реагировать на одни и те же методы по-разному.'
        },
        {
            id: 5,
            question: 'Что такое статический метод?',
            type: 'multiple',
            options: [
                'Метод, принадлежащий классу, а не экземпляру',
                'Метод экземпляра',
                'Приватный метод',
                'Глобальный метод'
            ],
            correct: 0,
            explanation: 'Статический метод принадлежит самому классу, а не его экземплярам. Вызывается через имя класса.'
        },
        {
            id: 6,
            question: 'Что такое геттеры и сеттеры?',
            type: 'multiple',
            options: [
                'Методы для доступа к свойствам объекта',
                'Функции-конструкторы',
                'Статические методы',
                'Приватные методы'
            ],
            correct: 0,
            explanation: 'Геттеры (get) и сеттеры (set) - это специальные методы для контроля доступа к свойствам объекта.'
        },
        {
            id: 7,
            question: 'Что такое super в классах?',
            type: 'multiple',
            options: [
                'Ссылка на родительский класс',
                'Ссылка на текущий класс',
                'Глобальный объект',
                'Не существует'
            ],
            correct: 0,
            explanation: 'super используется для вызова конструктора и методов родительского класса.'
        },
        {
            id: 8,
            question: 'Что такое приватные поля в классах?',
            type: 'multiple',
            options: [
                'Поля, доступные только внутри класса (префикс #)',
                'Публичные поля',
                'Статические поля',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Приватные поля (с префиксом #) доступны только внутри класса и недоступны извне.'
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
        },
        {
            id: 3,
            question: 'Что делает bind()?',
            type: 'multiple',
            options: [
                'Привязывает this к указанному объекту',
                'Вызывает функцию',
                'Удаляет функцию',
                'Клонирует функцию'
            ],
            correct: 0,
            explanation: 'bind() создает новую функцию с привязанным значением this к указанному объекту.'
        },
        {
            id: 4,
            question: 'В чем разница между call() и apply()?',
            type: 'multiple',
            options: [
                'call() принимает аргументы списком, apply() массивом',
                'Нет разницы',
                'apply() быстрее',
                'call() устарел'
            ],
            correct: 0,
            explanation: 'call() принимает аргументы списком (fn.call(obj, arg1, arg2)), а apply() массивом (fn.apply(obj, [arg1, arg2])).'
        },
        {
            id: 5,
            question: 'Что такое лексическая область видимости (lexical scope)?',
            type: 'multiple',
            options: [
                'Область видимости определяется местом объявления',
                'Область видимости определяется вызовом',
                'Глобальная область',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Лексическая область видимости - это область видимости, определяемая местом объявления переменной в коде.'
        },
        {
            id: 6,
            question: 'Что такое временная мертвая зона (TDZ)?',
            type: 'multiple',
            options: [
                'Период между началом области видимости и объявлением переменной',
                'Область видимости var',
                'Глобальная область',
                'Не существует'
            ],
            correct: 0,
            explanation: 'TDZ - это период между началом области видимости и объявлением переменной let/const, когда переменная недоступна.'
        },
        {
            id: 7,
            question: 'Что выведет: let x = 1; { let x = 2; } console.log(x)?',
            type: 'multiple',
            options: [
                '1',
                '2',
                'undefined',
                'Ошибка'
            ],
            correct: 0,
            explanation: 'Блочная область видимости let изолирует переменную внутри блока, поэтому внешняя x = 1.'
        },
        {
            id: 8,
            question: 'Как изменить this в arrow function?',
            type: 'multiple',
            options: [
                'Через bind(), call(), apply()',
                'Нельзя изменить, this берется из контекста',
                'Через this = ...',
                'Автоматически'
            ],
            correct: 1,
            explanation: 'Arrow function не имеет собственного this, он лексически привязан к контексту, где функция была определена. Изменить нельзя.'
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
        },
        {
            id: 3,
            question: 'Что такое event capturing?',
            type: 'multiple',
            options: [
                'Распространение события от родителя к потомку',
                'Распространение от потомка к родителю',
                'Отмена события',
                'Создание события'
            ],
            correct: 0,
            explanation: 'Event capturing - это фаза, когда событие движется от корня документа к целевому элементу (противоположно bubbling).'
        },
        {
            id: 4,
            question: 'Что делает addEventListener() с третьим параметром {once: true}?',
            type: 'multiple',
            options: [
                'Добавляет обработчик навсегда',
                'Удаляет обработчик после первого срабатывания',
                'Вызывает обработчик только один раз',
                'Не существует'
            ],
            correct: 2,
            explanation: '{once: true} означает, что обработчик будет автоматически удален после первого срабатывания.'
        },
        {
            id: 5,
            question: 'Что такое синтетические события?',
            type: 'multiple',
            options: [
                'События, созданные программно',
                'Встроенные события браузера',
                'Устаревшие события',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Синтетические события - это события, созданные программно через конструктор Event или CustomEvent.'
        },
        {
            id: 6,
            question: 'Что такое пассивные обработчики событий?',
            type: 'multiple',
            options: [
                'Обработчики, которые не вызывают preventDefault()',
                'Медленные обработчики',
                'Асинхронные обработчики',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Пассивные обработчики (passive: true) говорят браузеру, что preventDefault() не будет вызван, что улучшает производительность.'
        },
        {
            id: 7,
            question: 'Что делает removeEventListener()?',
            type: 'multiple',
            options: [
                'Добавляет обработчик',
                'Удаляет обработчик события',
                'Вызывает событие',
                'Останавливает событие'
            ],
            correct: 1,
            explanation: 'removeEventListener() удаляет обработчик события, добавленный через addEventListener().'
        },
        {
            id: 8,
            question: 'Что такое event loop?',
            type: 'multiple',
            options: [
                'Механизм обработки асинхронных операций в JavaScript',
                'Цикл событий в DOM',
                'Функция обработки событий',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Event loop - это механизм JavaScript, который обрабатывает асинхронные операции и события, управляя очередью выполнения.'
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
        },
        {
            id: 3,
            question: 'Как обработать ошибку в fetch()?',
            type: 'multiple',
            options: [
                'fetch() не отклоняется при HTTP ошибках',
                'Нужно проверять response.ok',
                'И первое, и второе',
                'Автоматически'
            ],
            correct: 2,
            explanation: 'fetch() не отклоняется при HTTP ошибках (404, 500), нужно проверять response.ok или status.'
        },
        {
            id: 4,
            question: 'Что такое CORS?',
            type: 'multiple',
            options: [
                'Cross-Origin Resource Sharing - механизм безопасности браузера',
                'Метод запроса',
                'Тип данных',
                'Протокол'
            ],
            correct: 0,
            explanation: 'CORS - это механизм безопасности браузера, который контролирует запросы между разными доменами.'
        },
        {
            id: 5,
            question: 'Что делает response.json()?',
            type: 'multiple',
            options: [
                'Парсит JSON ответ',
                'Возвращает текст',
                'Возвращает Response объект',
                'Создает JSON'
            ],
            correct: 0,
            explanation: 'response.json() парсит тело ответа как JSON и возвращает Promise с распарсенными данными.'
        },
        {
            id: 6,
            question: 'Как отправить POST запрос с JSON через fetch()?',
            type: 'multiple',
            options: [
                'fetch(url, {method: "POST", body: JSON.stringify(data)})',
                'fetch(url).post(data)',
                'fetch.post(url, data)',
                'Только через XMLHttpRequest'
            ],
            correct: 0,
            explanation: 'POST запрос с JSON: fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)}).'
        },
        {
            id: 7,
            question: 'Что такое AbortController?',
            type: 'multiple',
            options: [
                'Позволяет отменить fetch запрос',
                'Управляет ответами',
                'Создает запросы',
                'Не существует'
            ],
            correct: 0,
            explanation: 'AbortController позволяет отменить fetch запрос через signal: abort().'
        },
        {
            id: 8,
            question: 'В чем разница между fetch() и XMLHttpRequest?',
            type: 'multiple',
            options: [
                'fetch() современнее и работает с Promise',
                'XMLHttpRequest быстрее',
                'Нет разницы',
                'XMLHttpRequest устарел полностью'
            ],
            correct: 0,
            explanation: 'fetch() - современный API с поддержкой Promise, более удобный синтаксис. XMLHttpRequest - старый, но все еще используется.'
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
        },
        {
            id: 3,
            question: 'Что такое Error объект?',
            type: 'multiple',
            options: [
                'Встроенный объект для создания ошибок',
                'Глобальная переменная',
                'Функция',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Error - это встроенный конструктор для создания объектов ошибок. Можно создавать кастомные ошибки: new Error("Сообщение").'
        },
        {
            id: 4,
            question: 'Что такое кастомные ошибки?',
            type: 'multiple',
            options: [
                'Ошибки, созданные пользователем',
                'Встроенные ошибки',
                'Только SyntaxError',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Кастомные ошибки - это классы, наследуемые от Error, для создания специфических типов ошибок приложения.'
        },
        {
            id: 5,
            question: 'Что такое stack trace?',
            type: 'multiple',
            options: [
                'Цепочка вызовов функций, приведшая к ошибке',
                'Тип ошибки',
                'Сообщение об ошибке',
                'Код ошибки'
            ],
            correct: 0,
            explanation: 'Stack trace показывает цепочку вызовов функций, которая привела к ошибке, помогает в отладке.'
        },
        {
            id: 6,
            question: 'Можно ли использовать throw с любым значением?',
            type: 'multiple',
            options: [
                'Да, можно выбросить любое значение',
                'Только Error объекты',
                'Только строки',
                'Только числа'
            ],
            correct: 0,
            explanation: 'В JavaScript можно использовать throw с любым значением, но рекомендуется использовать Error объекты.'
        },
        {
            id: 7,
            question: 'Что такое глобальный обработчик ошибок window.onerror?',
            type: 'multiple',
            options: [
                'Обрабатывает все необработанные ошибки',
                'Локальный обработчик',
                'Не существует',
                'Только для async функций'
            ],
            correct: 0,
            explanation: 'window.onerror - глобальный обработчик, который перехватывает все необработанные ошибки в скрипте.'
        },
        {
            id: 8,
            question: 'Как обработать ошибку в Promise без catch?',
            type: 'multiple',
            options: [
                'Через .catch()',
                'Через window.onunhandledrejection',
                'Ошибка останется необработанной',
                'Все вышеперечисленное'
            ],
            correct: 3,
            explanation: 'Можно использовать .catch(), глобальный обработчик unhandledrejection, но лучше всегда использовать .catch().'
        }
    ],
    
    patterns: [
        {
            id: 1,
            question: 'Что такое паттерн Singleton?',
            type: 'multiple',
            options: [
                'Паттерн, гарантирующий единственный экземпляр класса',
                'Паттерн создания множества объектов',
                'Паттерн наследования',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Singleton гарантирует, что класс имеет только один экземпляр и предоставляет глобальную точку доступа к нему.'
        },
        {
            id: 2,
            question: 'Что такое паттерн Factory?',
            type: 'multiple',
            options: [
                'Паттерн для создания объектов без указания точного класса',
                'Функция-конструктор',
                'Класс',
                'Модуль'
            ],
            correct: 0,
            explanation: 'Factory - паттерн, который предоставляет интерфейс для создания объектов без указания их точных классов.'
        },
        {
            id: 3,
            question: 'Что такое паттерн Observer?',
            type: 'multiple',
            options: [
                'Паттерн подписки на события (один ко многим)',
                'Создание объектов',
                'Наследование',
                'Инкапсуляция'
            ],
            correct: 0,
            explanation: 'Observer определяет зависимость "один ко многим" между объектами, когда изменение одного объекта уведомляет всех подписчиков.'
        },
        {
            id: 4,
            question: 'Что такое паттерн Module?',
            type: 'multiple',
            options: [
                'Паттерн инкапсуляции кода в модули',
                'ES6 модули',
                'Оба варианта',
                'Не существует'
            ],
            correct: 2,
            explanation: 'Module паттерн - это способ организации кода в модули с приватными и публичными частями. В ES6 есть встроенная поддержка.'
        },
        {
            id: 5,
            question: 'Что такое паттерн Decorator?',
            type: 'multiple',
            options: [
                'Паттерн добавления поведения объектам динамически',
                'Удаление функционала',
                'Наследование',
                'Создание классов'
            ],
            correct: 0,
            explanation: 'Decorator позволяет динамически добавлять новое поведение объектам, оборачивая их в объекты-декораторы.'
        }
    ],
    
    regexp: [
        {
            id: 1,
            question: 'Как создать регулярное выражение?',
            type: 'multiple',
            options: [
                '/pattern/ или new RegExp("pattern")',
                'Только через /pattern/',
                'Только через RegExp',
                'Нельзя создать'
            ],
            correct: 0,
            explanation: 'Регулярное выражение можно создать через литерал /pattern/ или конструктор new RegExp("pattern").'
        },
        {
            id: 2,
            question: 'Что делает флаг g в регулярном выражении?',
            type: 'multiple',
            options: [
                'Глобальный поиск (все совпадения)',
                'Игнорирование регистра',
                'Многострочный режим',
                'Строгий режим'
            ],
            correct: 0,
            explanation: 'Флаг g (global) находит все совпадения, а не только первое.'
        },
        {
            id: 3,
            question: 'Что делает флаг i в регулярном выражении?',
            type: 'multiple',
            options: [
                'Игнорирование регистра',
                'Глобальный поиск',
                'Многострочный режим',
                'Нечувствительный поиск'
            ],
            correct: 0,
            explanation: 'Флаг i (ignoreCase) делает поиск нечувствительным к регистру.'
        },
        {
            id: 4,
            question: 'Что такое квантификаторы в регулярных выражениях?',
            type: 'multiple',
            options: [
                'Символы для указания количества повторений (*, +, ?, {n})',
                'Группы',
                'Флаги',
                'Спецсимволы'
            ],
            correct: 0,
            explanation: 'Квантификаторы (*, +, ?, {n}, {n,m}) указывают, сколько раз может повторяться предыдущий элемент.'
        },
        {
            id: 5,
            question: 'Что делает метод test() у регулярного выражения?',
            type: 'multiple',
            options: [
                'Проверяет наличие совпадения, возвращает true/false',
                'Находит все совпадения',
                'Заменяет совпадения',
                'Разбивает строку'
            ],
            correct: 0,
            explanation: 'test() проверяет, есть ли совпадение в строке, возвращает true или false.'
        },
        {
            id: 6,
            question: 'Что делает метод match() у строки?',
            type: 'multiple',
            options: [
                'Находит совпадения с регулярным выражением',
                'Заменяет текст',
                'Проверяет наличие',
                'Удаляет текст'
            ],
            correct: 0,
            explanation: 'match() возвращает массив совпадений или null, если совпадений нет.'
        },
        {
            id: 7,
            question: 'Что такое группы захвата в регулярных выражениях?',
            type: 'multiple',
            options: [
                'Части шаблона в скобках, сохраняющие совпадения',
                'Флаги',
                'Квантификаторы',
                'Спецсимволы'
            ],
            correct: 0,
            explanation: 'Группы захвата (скобки) сохраняют совпадения для дальнейшего использования.'
        },
        {
            id: 8,
            question: 'Что означает . в регулярном выражении?',
            type: 'multiple',
            options: [
                'Любой символ кроме новой строки',
                'Точка',
                'Пробел',
                'Конец строки'
            ],
            correct: 0,
            explanation: 'Точка . соответствует любому символу, кроме символа новой строки \\n (если нет флага s).'
        }
    ],
    
    advanced: [
        {
            id: 1,
            question: 'Что такое генераторы (generators)?',
            type: 'multiple',
            options: [
                'Функции, которые можно приостановить и возобновить',
                'Обычные функции',
                'Асинхронные функции',
                'Конструкторы'
            ],
            correct: 0,
            explanation: 'Генераторы - это функции с ключевым словом function*, которые можно приостановить (yield) и возобновить.'
        },
        {
            id: 2,
            question: 'Что такое итераторы?',
            type: 'multiple',
            options: [
                'Объекты с методом next() для последовательного доступа',
                'Массивы',
                'Циклы',
                'Функции'
            ],
            correct: 0,
            explanation: 'Итератор - это объект с методом next(), который возвращает {value, done} для последовательного доступа к данным.'
        },
        {
            id: 3,
            question: 'Что такое Proxy?',
            type: 'multiple',
            options: [
                'Объект-обертка для перехвата операций с другим объектом',
                'Замена объекта',
                'Клонирование объекта',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Proxy позволяет создавать обертку вокруг объекта для перехвата и переопределения базовых операций (чтение, запись, вызов).'
        },
        {
            id: 4,
            question: 'Что такое Reflect?',
            type: 'multiple',
            options: [
                'Встроенный объект с методами для операций с объектами',
                'Замена Proxy',
                'Устаревший API',
                'Не существует'
            ],
            correct: 0,
            explanation: 'Reflect - это встроенный объект, предоставляющий методы для перехватываемых операций Proxy.'
        },
        {
            id: 5,
            question: 'Что такое WeakMap?',
            type: 'multiple',
            options: [
                'Map с объектами-ключами, которые могут быть удалены сборщиком мусора',
                'Обычный Map',
                'Массив',
                'Объект'
            ],
            correct: 0,
            explanation: 'WeakMap - это Map, где ключи должны быть объектами, и они могут быть автоматически удалены сборщиком мусора.'
        },
        {
            id: 6,
            question: 'В чем разница между Map и Object?',
            type: 'multiple',
            options: [
                'Map имеет метод size, может использовать любые ключи',
                'Нет разницы',
                'Object быстрее',
                'Map устарел'
            ],
            correct: 0,
            explanation: 'Map может использовать любые типы как ключи, имеет свойство size, лучше для частых добавлений/удалений.'
        },
        {
            id: 7,
            question: 'Что такое Symbol?',
            type: 'multiple',
            options: [
                'Примитивный тип для создания уникальных идентификаторов',
                'Функция',
                'Объект',
                'Массив'
            ],
            correct: 0,
            explanation: 'Symbol - это примитивный тип данных для создания уникальных идентификаторов, используется как ключи объектов.'
        },
        {
            id: 8,
            question: 'Что такое декораторы в JavaScript?',
            type: 'multiple',
            options: [
                'Экспериментальная функциональность для модификации классов/методов',
                'Встроенная возможность',
                'Не существует',
                'Только в TypeScript'
            ],
            correct: 0,
            explanation: 'Декораторы - это экспериментальная функция (stage 3) для добавления метаданных к классам и методам. Полностью поддерживается в TypeScript.'
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

