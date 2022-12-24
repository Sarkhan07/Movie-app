'use strict';

//filter // filter element inside array

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// task is getting name that consist of 5 symbols

// all of this for iteration return new array
// const shortNames = names.filter(function (name) {
/// name каждый отдельный элемент
//     return name.length < 5;
// });

// console.log(shortNames); //[ 'Ivan', 'Ann' ]

//map можно изменить каждый элемент внутри его

// const answers = ['ivAn', 'AnnA', 'Hello'];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);
// let answers = ['ivAn', 'AnnA', 'Hello']; this is not recomended

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);

// every/some return boolean / some if one suit to condition then it perform

// const some = [4, 'QWQ', 'sdsss'];

// console.log(some.some((item) => typeof item === 'number')); // true

// console.log(some.every((item) => typeof item === 'number')); // false if every number then true

//reduce // собирать массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];

//firstly sum is 0 and current each element is adding to sum if we write sum + current

// const result = arr.reduce((sum, current) => sum + current);

// console.log(result); //21

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`, 3); //третий аргумент и вместо sum будет ставится 3 как начальное значение
// console.log(res); //3, apple, pear, plum

// const obj = {
//     Ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal',
// };

// const newArr = Object.entries(obj)
//     .filter((item) => item[1] === 'persone')
//     .map((item) => item[0]); // работать объектом как с массивом

// console.log(newArr); // [ [ 'Ivan', 'persone' ], [ 'ann', 'persone' ] ] => after map[ 'Ivan', 'ann' ]

// test number 1

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9,
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5,
//     },
//     {
//         name: 'Matrix',
//         rating: 8,
//     },
//     {
//         name: 'Some bad film',
//         rating: 4,
//     },
// ];

// function showGoodFilms(arr) {
//     return arr.filter((item) => item.rating >= 8);
// }

// showGoodFilms(films); // [ 'Titanic', 'Matrix' ]

// function showListOfFilms(arr) {
//     return arr
//         .map((item) => item.name)
//         .reduce((sum, current) => `${sum}, ${current}`);
// }

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// setFilmsIds(films);
// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every((film) => film.id || film.id === 0);
// }

// checkFilms(films);
// console.log(some.some((item) => typeof item === 'number')); // true

// console.log(some.every((item) => typeof item === 'number')); // false if every number then true

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
    return data
        .filter((item) => item.amount >= 0)
        .reduce((sum, current) => sum + current.amount, 0);
};
getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    return data.some((item) => item.amount < 0)
        ? data.reduce((sum, current) => sum + current.amount, 0)
        : getPositiveIncomeAmount(data);
};
getTotalIncomeAmount(funds);
// (some.every((item) => typeof item === 'number'));
