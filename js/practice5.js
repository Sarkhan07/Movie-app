'use strict';

//opp

// let str = 'some';
// let strObj = new String(str); // так не делать

// console.log(typeof str); //string

// console.log(typeof strObj); //object  в работе стринк оборачивается в объект и используется метод и потом обратно в примитив

// bmw это прототип легковой машины

// console.dir([1, 2, 3]); //proto Array а в конце proto ссылается на объект, а последний прототип всех типов данных null

// const soldier = {
//     // это большой прототип для всех
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello');
//     },
// };
//but usually we use
// const jonh = Object.create(soldier);

// const jonh = {
//     health: 100,
// };

// jonh.__proto__ = soldier; // установили для jonh prototype soldier // old version

// Object.setPrototypeOf(jonh, soldier); // new and right option

// jonh.sayHello();

//practice refactoring // переписание под новые задачи и условия нашего кода
