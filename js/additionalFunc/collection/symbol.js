// const obj = {
//     name: 'Test',
// };

// let id = Symbol('id');
// obj[id] = 1;

// console.log(obj[id]); // Symbol(id): 1 => symbol с описанием id с значением 1 // new нельзя и они уникальные если даже они одинаковые но не равны
let id = Symbol['id'];
const obj = {
    name: 'Test',
    [id]: 1,
    getId: function () {
        return this[id];
    },
};

// console.log(obj[id]); // символы показывают скрытые при обычном доступе свойства и не показываются перебором или таким образом
// for (let value in obj) {
//     console.log(value); // name
// }

// console.log(obj.getId());  first method

// second method for getting symbol with inbuild method of js

console.log(Object.getOwnPropertySymbols(obj)); // и получаем ссылку на этот символ

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // можно так получить

// это надо чтобы код не перезаписывался

const myAwesomeDB = {
    movies: [],
    actors: [],
    // id: 123,
    [Symbol('id')]: 123,
    // [Symbol.for('id')]: 123, // console.log(myAwesomeDB[Symbol.for('id')]); глобальная и можно обратиться когда пишем for
};

// сторонний код библиотеки

myAwesomeDB.id = '334232'; // как то по ошибке случилось перезаписывание

// и в этом случае нам надо Symbol чтобы как то этот ид не менялся

console.log(myAwesomeDB);
