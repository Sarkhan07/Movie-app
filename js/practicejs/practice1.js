// "use strict";

// let number = 5;

// const leftBorderWidth = 1;

// number = 10;

// console.log(number);

// const object = {
//     a: 50,
// };
// object.a = 10;

// console.log(a);

///

// alert('hello world')

// const result = confirm('Are you here?');

// console.log(result);

// const answer = +prompt('are you 18?', '18'); //+ for number

// console.log(typeof answer);
////////

// const answers = [];

// answers[0] = prompt('how is your name', '');
// answers[1] = prompt('how is your old', '');
// answers[2] = prompt('how is your surname', '');
// console.log(typeof answers);

// interpolation

// const category = 'toys';

// console.log('https://someurl.com/' + category + '/');

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Привет ${user}`);

// operator

// console.log('"arr" + " - object"');

// console.log(4 + +'9');

// increment dicrement

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// // ++incr;
// // --decr;
// console.log(incr++);
// console.log(decr--);

// console.log(5 % 2);

// const isCheked = true,
// isClose = false;

// console.log(isCheked && isClose);
// console.log(isCheked && !isClose); //negative !

//  no uqual !=

// condition

// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// if (4) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('more');
// } else {
//     console.log('OK!');
// }

// num === 50 ? console.log('OK!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log("don't right");
//         break;
//     case 100:
//         console.log("don't right");
//         break;
//     default:
//         console.log('not just');
// }
// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log("i'm full");
// }

// console.log(hamburger && fries);

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log("i'm full");
// }

// console.log(hamburger && fries);

// always false: 0, undefined, NaN, null, ""

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('All are full');
// } else {
//     console.log('we are leaving');
// }

// const hamburger = 0;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('All are enjoying');
// } else {
//     console.log('we are leaving');
// }

// let johnReport,
//     alexReport,
//     samReport,
//     mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//     console.log('All are enjoying');
// } else {
//     console.log('we are leaving');
// }

// console.log(!0);

// console.log((5 === 5 && 3 > 1) || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//     console.log('done');
// } else {
//     console.log('go');
// }

// loops

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// *
// **
// ***
// ****
// *****

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;

//             console.log(`third level: ${k}`);
//         }
//     }
// }

// function firstTask() { my solution
//     // Пишем решение вот тут
//     let num = 5;
//     while (((num) => 4) && num <= 10) {
//         console.log(num);
//         num++;
//     }
// }

// firstTask();

// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }

// firstTask();

// function secondTask() { //my solution
//     // Пишем решение вот тут
//     for (let i = 20; i <= 20; i--) {
//         if (i === 13) {
//             break;
//         }
//         console.log(i);
//     }
// }
// secondTask();

// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i)
//     }
// }

// secondTask()

// function thirdTask() {
//     // my solution
//     // Пишем решение вот тут
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();

// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// thirdTask()

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     let num = 2;

//     while (num <= 16) {
//         if (num % 2 === 0) {
//             num++;
//             continue;
//         } else {
//             console.log(num);
//         }
//         num++;
//     }
// }
// fourthTask();

// function fifthTask() {
//     // my solution
//     let arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers += i;
//     }

//     // Не трогаем
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }
// fifthTask();

// function fifthTask() {
//     let arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();

// function firstTask() {
// my solution
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

// Пишем решение вот тут
//     for (let i = 1; i < arr.length + 1; i++) {
//         result[i - 1] = arr[i - 1];
//     }
// Не трогаем
//     console.log(result);
//     return result;
// }

// firstTask();

// Место для второй задачи
// function secondTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

// Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof data[i] === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
// Не трогаем
//     return data;
// }

// secondTask();

// Значения масси

// Место для третьей задачи
// function thirdTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const revers = data.reverse();
//     const result = [];

// Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         result[i] = revers[i];
//     }
// Не трогаем
//     console.log(result);
//     return result;
// }
// thirdTask();

// instructor solution
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result)

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
