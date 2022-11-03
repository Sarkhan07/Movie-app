'use strict';
// method trim - remove space from start and end str.trim();
// const a = prompt('your favorite film?', '').trim();

// callback

// function first() {
// do something

//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('Javascript', function () {
//анонимная функция
//     console.log('Я прошел этот урок'); // колбек выполняется один за другим
// });

// learnJS('React', done);

//Objects
// const obj = new Object(); // first option

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function () {
//         console.log('Test'); // our own methods
//     },
// };

// options.makeTest();

// for removing something
// delete options.name;
// console.log(options.name); // name is undefined

// чтобы пребирать объекты будем копаться внутри options, будет работать столько раз сколько ключей внутри функции

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);
// объект не может быть переведен в строку [object Object]
// }

// for getting object object we can write so: console.log(options["colors"]["border"])
// let counter = 0;
// for (let key in options) {
//     if (typeof options[key] === 'object') {
//         for (let i in options[key]) {
// чтобы добраться до значения объекта
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
// counting++
//     }
// }
//object doesn't has свойство length.

//counter for objects

// console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ] massive with keys
// console.log(Object.keys(options).length); // for counting keys

//деструктизация

// const { border, bg } = options.colors;
// console.log(border); // black
// console.log(bg); // red

// massive

// const arr = [5, 2, 3, 6, 8];

// arr.pop();

// console.log(arr); //[ 1, 2, 3, 6 ] remove last
// arr.push(10);

// console.log(arr);[ 1, 2, 3, 6, 8, 10 ] add to the end

// shift and unshift timeconsuming because when remove and add to start also it takes time to change index

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// length number of last indicitor + 1

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside ${arr} `);
// }); // break and continue don't work in this circle
// const str = prompt('', ''); // prompt => [ "hi", "privet", "selam", "salam aleykum" ]

// const products = str.split(', '); // make array from string

// console.log(products);

// 0: "hi"
// ​
// 1: "privet"
// ​
// 2: "selam"
// ​
// 3: "salam aleykum"

// products.sort(); //a; b; c; d with numbers it sorts accordingly to with numbers and after that to second number

// console.log(products.join('; ')); //make string from array // hi; selam; salam aleykum; privet

// arr.sort(compareNum); // algoritm fast sorting
// function compareNum(a, b) {
//     return a - b;
// }

// console.log(arr);

// pseudomassiv [ 1, 2, 3, 6, 8, 10 ]  difference in that they don't have any method
//https://www.udemy.com/course/javascript_full/learn/lecture/31666374#content
//  algoritms

//spread operator

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b); //10
// console.log(a); // 5

// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy); //{ a: 10, b: 1 }

// console.log(obj); //{ a: 10, b: 1 }
// то есть мы изменяя даже копию все равно изначальные объект тоже меняется здесь передается ссылка не сам объект

//for doing copy

// function copy(mainObj) {
// для поверхностного не для глубокого поэтому вложенные не копируются
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     },
// };

// const newNumbers = copy(number);

// newNumbers.a = 10;
// newNumbers.c.x = 10; // { a: 10, b: 5, c: { x: 10, y: 4 } }
// { a: 2, b: 5, c: { x: 10, y: 4 } }
//если поменять у вложенного объекта что то то это меняется и в оригинале и в копированой версии

// console.log(newNumbers); //{ a: 10, b: 5, c: { x: 7, y: 4 } }

// console.log(number); // { a: 2, b: 5, c: { x: 7, y: 4 } }

// второй метод соединения объекта
// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     },
// };
// const add = {
//     d: 17,
//     e: 20,
// };

// console.log(Object.assign(number, add)); // первый аргумент куда помещаем, и второй аргумент который помещаем
//{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }
// независимая структура это не копировка

// const clone = Object.assign({}, add); // чтобы поместить на новый объект
// clone.d = 20;

// console.log(add);
// console.log(clone);

//copy of massive

// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray; // ссылка также как и объекте

// const newArray = oldArray.slice(); // для поверхностной копировки массива

// newArray[1] = 'adasdada';

// console.log(newArray);
// console.log(oldArray);
//[ 'a', 'adasdada', 'c' ]
// [ 'a', 'b', 'c' ]

// es6 and es8 operator spread оператор разворота для массивов и объектов
// разворачивает структуру и превращает в набор данных

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // таким образом оператор вытащит все элемента

// console.log(internet);

// function log(a, b, c) {
// чтоб аргументы функции принимали массив передаем аргумент через spread оператор
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// console.log(newAarray); //[ 'a', 'b' ]
// spread now for objects

// const q = {
//     one: 1,
//     two: 2,
// };

// const newObj = { ...q };
// console.log(newObj);

//exercises

// const personalPlanPeter = {
//     name: 'Peter',
//     age: '29',
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//         },
//         exp: '1 month',
//     },
// showAgeAndLangs: function (plan) {
//     const { languages } = plan.skills;
//     const { age } = plan;
//     let rus = languages[0].toUpperCase();
//     let eng = languages[1].toUpperCase();
//     return `Мне ${age} и я владею языками: ${rus} ${eng}`;
// },
//     showAgeAndLangs: function (plan) {
//         const { age } = plan;
//         const { languages } = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function (lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     },
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {s
//     const { exp } = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     const { programmingLangs } = plan.skills;
//     let str = '';
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`; //programmingLangs[key] -> значение
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);

// task 3
//my solve
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     if (arr.length === 0) {
//         return str += `Семья пуста`;
//     } else {
//         return str += `Семья состоит из: ${arr.join(' ')}`;
//     }
// }
// showFamily(family);
// Instructor solve

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? (str = 'Семья пуста') : (str = 'Семья состоит из: ');

//     arr.forEach((member) => {
//         str += `${member} `;
//     });

//     return console.log(str);
// }

// showFamily(family);
// rule
// The split() method splits a String object into an array of strings by separating the string into substrings.

// The splice() method changes the content of an array by removing existing elements and/or adding new elements.

// The join() method joins all elements of an array into a string

// task 4

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach((member) => {
//         console.log(member.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);

//task 5
// const someString = 'This is some strange string';
//first solution
// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка!';
//     }
//     return str.split('').reverse().join('');

// }
// reverse(someString);

// second solution
// function reverse(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr

// }
// reverse(someString);

// 5 task
// first attemp also works
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// let overalCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//     let str = `Доступные валюты:\n`;
//     overalCurrencies.forEach((cur) => {
//         if (arr.includes(cur)) {
//             str += `${cur}\n`;
//         } else if (!overalCurrencies.includes(missingCurr)) {
//             str += '';
//         } else if (arr.length === 0) {
//             str = `Нет доступных валют`;
//         }
//     });
//     console.log(str);
// }

// // availableCurr([]);
// availableCurr(['UAH', 'RUB', 'RUB', 'CNY'], 'fNY');

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';

    arr.length === 0
        ? (str = 'Нет доступных валют')
        : (str = 'Доступные валюты:\n');

    arr.forEach((cur) => {
        if (cur != missingCurr) {
            str += `${cur}\n`;
        }
    });
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

// Ivan solution

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0
//         ? (str = 'Нет доступных валют')
//         : (str = 'Доступные валюты:\n');

//     arr.forEach(function (curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
