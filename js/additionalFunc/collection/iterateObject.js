const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicDate: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};

// for (const key in user) {
// console.log(user[key]); // значение: Alex, Smith, 20/04/1993, functionL showMyPublicDate
//     console.log(key); // name, surname, birthday,showmtpublicdate
// }

// const arr = ['a', 'b', 'c'];

// for (const key in arr) {
//     console.log(arr[key]); // чтобы получить массив то есть значение, потому что в массиве ключи цифры
// }

// for in будет работать и с массивом и с объектом по порядку которые являются перечисляемым (enemurable: true)

// itereation of string

// const string = 'string';

// for (const key in string) {
//     console.log(string[key]);
// }

// но получение таким методом создает проблему с массивом что порядок может испортиться

// // for of
// const arr = ['a', 'b', 'c'];

// Array.prototype.someMethod = function () {}; // yet it will only contain name of method

// for (const key in arr) {
//     console.log(key); // 0, 1, 2, someMethod
// }
// for (const key of arr) {
//     console.log(key); // a, b, c it will not show the prototype inherited key
// }
// for (const key of arr) {
// в отличие от for in сразу получает значение
// in this case
//     console.log(key);
// }

// // abc

// for (const key of user) {
//     // object not iterable
//     console.log(user[key]);
// }

// console.dir(arr); // prototype symbol is iterable and it's array, string, set, map, DOl collection

// итератор методом  который возращает объект с методом  next

// когда хотим Object делать итераемым приходится создать вручную

const salaries = {
    jonh: 500,
    Ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log('Hello');
    },
};

for (const key of salaries) {
    console.log(key);
}

// чтобы объект был итериюмым чтобы позволить for of работать с ним, надо добавить символ итератор

// salaries[Symbol.iterator] = function () {
//     // мы когда запускаем for of, он вызывает метод символ один раз, и этот метод должен вернуть итератор(то есть объект с методом next)

//     return {
//         current: this.jonh,
//         last: this.ann,

//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return { done: false, value: this.current }; // это означает что for of не закончился и новое значение передается
//             } else {
//                 return { done: true }; // it means that it's over our for of will end the work
//             }

//             // {done: true, value: 123} //
//         },
//     };
// };

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// for (let res of salaries) { first option
//     console.log(res);
// }
