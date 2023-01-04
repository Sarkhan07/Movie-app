'use strict';

// pattern and flags

// new RegExp('pattern', 'flags');  // it met very regular
//
// /pattern/f // popular

// const ans = prompt(' enter your names'); // if here Ann

// const reg = /n/;
// const reg = /n/gi; // if use match then we will get array with ["N", "N", "N"]
// flags => i - not depends on register, g - global for finding several, m - many strings

// console.log(ans.search(reg)); // here we right this reg which we will search inside prompt
// result 1 because the letter n locates in 1 place but if we didn't find then -1
// Console.log(ans.match(reg)); //result in array ['n', index: 1, input: "Ann", groups: undefined]

const pass = '123.';

// console.log(pass.replace(/./g, '*')); // /./ it means  we take all elements and we replace with *

// console.log(pass.replace(/\./g, '*')); // it means that only doth /\./  replace
// console.log('12-34-56'.replace(/-/g, ':'));

// const name = 'Ann';
// const reg = /n/ig;

// console.log(reg.test(name)); // the result true all false

//class

// \d - we search numbers

// \w - search words
// \s - we search spaces also we can search so / /ig

// const reg = /\d/ig; only numbers

// name.match(reg);//

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i)); //[ 'R2D2', index: 11, input: 'My name is R2D2', groups: undefined ] so we can find what we search

// \D не нумера
// \W не буквы
