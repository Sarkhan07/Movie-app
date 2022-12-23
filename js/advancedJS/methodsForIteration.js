'use strict';

//filter // filter element inside array

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// task is getting name that consist of 5 symbols

// all of this for iteration return new array
const shortNames = names.filter(function (name) {
    // name каждый отдельный элемент
    return name.length < 5;
});

console.log(shortNames); //[ 'Ivan', 'Ann' ]

//map можно изменить каждый элемент внутри его

// const answers = ['ivAn', 'AnnA', 'Hello'];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);
// let answers = ['ivAn', 'AnnA', 'Hello']; this is not recomended

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);

// every/some return boolean / some if one suit to condition then it perform

const some = [4, 'QWQ', 'sdsss'];

console.log(some.some((item) => typeof item === 'number')); // true

console.log(some.every((item) => typeof item === 'number')); // false if every number then true

//reduce // собирать массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];

// //firstly sum is 0 and current each element is adding to sum if we write sum + current

// const result = arr.reduce((sum, current) => sum + current);

// console.log(result); //21

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`, 3); //третий аргумент и вместо sum будет ставится 3 как начальное значение
// console.log(res); //3, apple, pear, plum

const obj = {
    Ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj)
    .filter((item) => item[1] === 'persone')
    .map((item) => item[0]); // работать объектом как с массивом

console.log(newArr); // [ [ 'Ivan', 'persone' ], [ 'ann', 'persone' ] ] => after map[ 'Ivan', 'ann' ]
