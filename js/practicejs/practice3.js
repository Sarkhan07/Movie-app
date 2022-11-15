'use strict';
// методы строк и чисел это вспомогательные функции, свойство вспомогательные значения

// const str = 'test';
// const arr = [1, 2, 3];

// console.log(arr.length); // length это свойство не вызывается а методы вызываются (); console.dir(Number) чтобы посмотреть все функции

// console.log(str[2]);

// console.log(str.toUpperCase()); //TEST возвращает новое значение
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleLowerCase());

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit')); // 5 "" index of fruits start from 5 but if cannot find return -1;

// const logg = 'Hello world';

// console.log(logg.slice(6, 11)); // первый аргумент откуда начинать а второй до куда the result world// в аргументе end мы не указываем что включается. а ести не указать end то будет сам до конца вырезать
// logg.slice(-5, -1); //-5 начинается с 5 го справа а заказнчиваю -1 тоже справа
// console.log(logg.substring(6, 11)); // схожий что можно первый аргумент задавать больше чем второй и не поддерживает отрицательные значения

// console.log(logg.substr(6, 11)); // показывает сколько символов надо вырезать то есть второй аргумент указывает только длину
// Math

// const num = 12.2;

// console.log(Math.round(num)); // чтобы округлять

// const test = '12.2px';

// console.log(parseInt(test)); // for removing px and .2
// console.log(parseFloat(test)); for removing only px

// task advanced

// Место для первой задачи \\\Формула нахождения объёма куба: V = a^3, где а - ребро куба.
//  Формула нахождения площади поверхности куба: S = 6a^2, где а - ребро куба.

// function calculateVolumeAndArea(a) {
//     let volume;
//     let area;

//     if (Number.isInteger(a)) {
//         volume = Math.pow(a, 3);

//         area = 6 * Math.pow(a, 2);

//         console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//     } else {
//         console.log('При вычислении произошла ошибка');
//     }
// }
// calculateVolumeAndArea(10);

// function calculateVolumeAndArea(length) {
//     if (typeof length !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return 'При вычислении произошла ошибка';
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// function getCoupeNumber(place) {
//     if (place <= 4 && place > 0 && Number.isInteger(place)) {
//         console.log(1);
//     } else if (place <= 8 && place > 0 && Number.isInteger(place)) {
//         console.log(2);
//     } else if (place <= 12 && place > 0 && Number.isInteger(place)) {
//         console.log(3);
//     } else if (place <= 16 && place > 0 && Number.isInteger(place)) {
//         console.log(4);
//     } else if (place <= 20 && place > 0 && Number.isInteger(place)) {
//         console.log(5);
//     } else if (place <= 24 && place > 0 && Number.isInteger(place)) {
//         console.log(6);
//     } else if (place <= 28 && place > 0 && Number.isInteger(place)) {
//         console.log(7);
//     } else if (place <= 32 && place > 0 && Number.isInteger(place)) {
//         console.log(8);
//     } else if (place <= 36 && place > 0 && Number.isInteger(place)) {
//         console.log(9);
//     } else if (place <= 0 && place < 36) {
//         console.log('Таких мест в вагоне не существует');
//     } else {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
// }

// getCoupeNumber(36);

// function getCoupeNumber(seatNumber) {
//     if (
//         typeof seatNumber !== 'number' ||
//         seatNumber < 0 ||
// (!)Number.isInteger(seatNumber)
//     ) {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         console.log('Таких мест в вагоне не существует');
//     }

//     console.log(Math.ceil(seatNumber / 4));
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(2);

function getTimeFromMinutes(minutesTotal) {
    if (
        typeof minutesTotal !== 'number' ||
        minutesTotal < 0 ||
        !Number.isInteger(minutesTotal)
    ) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);

// Место для первой задачи
// function getTimeFromMinutes(minutes) {
//     let hour = Math.trunc(minutes / 60);
//     let minute = Math.trunc(minutes % 60);
//     let a = 'а';
//     let ov = 'ов';
//     let hours = 'час';
//     if (
//         typeof minutes !== 'number' ||
//         (!)Number.isInteger(minutes) ||
//         minutes < 0
//     ) {
//         return console.log(`Ошибка, проверьте данные`);
//     } else {
//         if ((hour == 2 || 3 || 4) && hour !== 1 && hour < 5) {
//             return console.log(`Это ${hour} ${hours}${a} и ${minute} минут`);
//         } else if (hour > 5) {
//             return console.log(`Это ${hour} ${hours}${ov} и ${minute} минут`);
//         } else if (hour == 1) {
//             return console.log(`Это ${hour} ${hours} и ${minute} минут`);
//         }
//     }
// }

// getTimeFromMinutes(200);

// function findMaxNumber(A, B, C, D) {
//     if (
//         typeof A !== 'number' &&
//         typeof B !== 'number' &&
//         typeof C !== 'number' &&
//         typeof D !== 'number'
//     ) {
//         return 0;
//     } else {
//         return Math.max(A, B, C, D);
//     }
// }

// console.log(findMaxNumber(1, 2, 3, 4));

// function findMaxNumber(a, b, c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (
//         typeof a !== 'number' ||
//         typeof b !== 'number' ||
//         typeof c !== 'number' ||
//         typeof d !== 'number'
//     ) {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);

// function fib(fibNum) {
//     if (typeof fibNum !== 'number') {
//         return '';
//     } else {
//         let prev = 0;
//         let next = 1;
//         for (let i = 0; i < fibNum; i++) {
//             let temp = next;
//             next = prev + next;
//             prev = temp;
//         }
//         return console.log(prev, next);
//     }
// }

// fib(6);

function fib(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second; //
        first = second; // 1
        //       stage     0, 1, 2
        second = third; //
        // stage           0,       2
        console.log(first); // second: 1, 2, 3, 5, 8 \\\\ third: 1, 2, 3, 5, 8, first: 1, 1, 2, 3, 5
    }

    return console.log(result); // 0
}

fib(5); // 0 1 1 2 3
