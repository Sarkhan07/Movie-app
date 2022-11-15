// breakpoint остановливать код в определенном участке.. выбираем конкретный номер справа в браузере в консоле и потом перезегрузить сайт если прям в функции написать debugger то код будет остановиться именно там

//dinamic type when number is converted to string or conversely

'use strict';

// 1)
// console.log(typeof String(null)); or number //null ==> string => 'null'

//2)
// console.log(typeof (5 + '')); // => string сложение с строкой получается строка
// const num = 5;
// console.log('http://vk.com/catalog/' + num); // example of plus with string in reality
// const fontSize = 26 + "px"; "26px"

//to number
// console.log(typeof Number('4')); //=> Number
// 2)
// console.log(typeof +'5'); // number

// 3)
// console.log(typeof (parseInt('4px', 10)));
// console.log(parseInt('4px', 10));
// let answer = +prompt('Hello', ''); //for doing answer number because answer everytime goes like string

// to Boolean
// 0, '', null, undefined, NaN // all of these false
// 1) let switcher = null;
// if (switcher) {
//     console.log('Working'); // switcher false therefore it will not work
// }
// switcher = 1;
// if (switcher) {
//     console.log('Working');
// }
// 2)

// console.log(typeof Boolean('4')); // boolean

// 3)

// console.log(typeof !!'4'); // with two !!
