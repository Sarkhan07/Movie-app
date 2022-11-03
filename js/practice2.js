'use strict';
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 22;
//     // console.log(num);
// }

// showFirstMessage('Hello world');

// console.log(num);

// function calc(a, b) {
//     return a + b; // after return we don't add anything
// }

// calc(2, 5);

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNUm = ret(); // result 50
// console.log(anotherNUm);

//expression

// const logger = function () {
//     console.log('Hello');
// };

// logger();

//  (a, b) => a + b;

// const loggers = () => {
//     console.log('Hello');
// };

// logger();

// const calcs = (a, b) => a + b;

// CONVERT

// const usdCurr = 28;
// const euroCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(22, usdCurr);
// convert(22, euroCurr);

//return

// const usdCurr = 28;

// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const RES = convert(500, usdCurr);
// promotion(RES);

//function in function

// function promotion(result) {
//     console.log(result * discount);
//     return function(){}
// }

//return continued

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);

//         if (i === 3) return; // return is used for stopping the iteration and all function and return undefined/ all function return something (undefined)
//     }
// }

// test();

// function doNothing() {}

// console.log(doNothing() === undefined); // true and also console.log it's function and as all function return undefined and after return don't put enter(перенос строки)

// function sayHello(hi) {
//     return `Привет, ${hi}`;
// }

// sayHello('Антон');

// console.log(sayHello('Антон'))

// Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
// function getMathResult(num, times) {
//     if (times <= 0 || typeof times !== 'number') {
//         return num;
//     }
//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(1, 5));
