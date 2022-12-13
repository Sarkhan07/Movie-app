'use strict';

// function showThis() {
//     console.log(this); // undefined
// }

// showThis(); // this will reference to window (without strict) /// but with use strict this is undefined

// 1) обычная функция this  = window but if strict it's undefined
// 2)   функция фнутри функции тоже дает undefined или же window
// 3) this внутри метода будет ссылаться на этот объект

// function showThis(a, b) {
// но все равно контекст вызова undefined или же window
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// function showThis(a, b) {
// но все равно контекст вызова undefined или же window
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; // просто без this => и так пишем код, путем замыкания
//     }
//     console.log(sum());
// }

// showThis(4, 5); // 9

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     },
// };

// obj.sum(); // { a: 20, b: 15, sum: [Function: sum] }

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     },
// };

// obj.sum(); // undefined

// 1) обычная функция this  = window but if strict it's undefined
// 2)   функция фнутри функции тоже дает undefined или же window
// 3) this внутри метода будет ссылаться на этот объект
// 4) this будет ссылаться на new User ново созданный объект// this в конструктурах и классах новый экземпляр объекта
// 5) ручная привзязка контекста

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true; // каждый пользователь будет человеком)...
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let Ivan = new User('Ivan', 29);

// // this будет ссылаться на new User ново созданный объект

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Jonh',
// };

// sayName.call(user, 'Smith'); //разница между ними появлется когда функция принимает какие то объекты, другие аргументы в call
// передаются обычно а в apply в ввиде массива
// sayName.apply(user, ['Smith']);

// 3
// bind - создает новую функцию и под нее связывает контекст вызова на объект
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); // двойка здесь передается в this и это все передается в double
// console.log(double(3));

// sayName.call(user); // связывают оба контекст вызова функции на user
// sayName.apply(user);
// { name: 'Jonh' }
// Jonh
// { name: 'Jonh' }
// Jonh

// const btn = document.querySelector('button'); // здесь this это объект на котором произошло событие

// btn.addEventListener('click', function () {
// it's similar to event.target
//     this.style.backgroundColor = 'red ';
// });

// btn.addEventListener('click', (e) {
// it's similar to event.target
//     e.target.style.backgroundColor = 'red '; if use arrow we can do so for appealing to element
// });

// btn.addEventListener('click', () => {
// // it's similar to event.target
//     this.style.backgroundColor = 'red ';
// });

// arrow function doesn't has this own context, and if there is not use strict it will appeal to window or undefined
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    },
};

obj.sayNumber(); // { num: 5, sayNumber: [Function: sayNumber] }

const double = (a) => a * 2; // another option of written arrow function

console.log(double(4)); //8
