'use strict';
// closing or zamikanie => function firstly try to find inside but if cannot then start to find outside
// let number = 5;
// debugger;

// function logNumber() {
// this function declaration and can be called before it will be created
// let number = 4; //but if declare inside firstly it will find this because it's local
//     debugger;
//     console.log(number); // ссылку на переменную видит а когда вызывается ставит последнее значение переменной
// }
// logNumber(); // 5. если вызвать после изменения переменной number будет 6
// number = 6;

// debugger; // 6
//leksik surrounding => internal and external => it calls also object but technical object и все внутри и
//  вне является свойство и значение
// logNumber(); //6 каждый вызов имеет свое лексическое окружение

// function creatCounter() {
//     let counter = 0; // сперва создается counter ==> лексическое окружение ==> потом присваивается значение

//     const myFunction = function () {
// когда функция создалась внутри то она получила доступ к лексическому окружению creatCounter
//expression
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = creatCounter(); // когда мы вызываем эту функцию, нам должна вернуться myFunction, то есть мы в инкремент уже кладем другую функцию myFunction

// сейчас мы можем increment использовать чтобы что-то создавать
// const c1 = increment(); //1
// const c2 = increment(); // 2 из-за того что уже counter 1, то добавлем + 1. то значение получается 2
// const c3 = increment(); // а здесь уже 2 + 1

// console.log(c1, c2, c3);

//

// {
//     let msg = 'Hello';
// }

// console.log(msg); // we cannot find this beacaus of leksik surrounding

// for (let i = o; i < 8; i++) {
//     for (let j = 0; j < 9; j++) {
//         let num = 3;
//     }
//     console.log(num); // the question why we cannot appeal to num
// }

// const user = {
//     name: 'Alex',
//     age: 25,
// };
// const { name, age } = user;

// console.log(age);

// function foo(a, b) {
//     debugger;
//     const [first] = a;
//     const { eng } = b;

//     return `${first} ${eng}`;
//     debugger;
// }

// const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
// debugger;

// console.log(result);
// debugger; // hello world
