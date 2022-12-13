'use strict';
// function is object и поэтому мы можем записать методы и свойства

// const num = new Number(3); // instead of we can write also new Function(3) but is's old one
// console.log(num); //[Number: 3]
// если такая функция содержат методы и свойства то создаст нам новый объект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true; // каждый пользователь будет человеком)...
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log(`Пользователь ${this.name} ушел`); // и он появится у всех потомков которые были созданы после него

//     // (метод) наш пользователь умеет выходит ищ нашей системы и будет принимать аргумент

//     // этот метод появится у всех на странице матодов
// };
// // сейчас можно создать нового пользоввателя
// const Ivan = new User('Ivan', 28); // внутри этой переменной будет находится не функция а объект
// // user конструктор и когда вызывается она создает новый объект
// const Alex = new User('Alex', 20);

// Ivan.hello();
// Alex.hello();

// // Ivan.exit()

// console.log(Ivan);
// console.log(Alex);

// когда код надо мотовифмроваж

// class

class User {
    constructor(name, id) {
        this.name = name:
        this.id = id;
        this.human = this.human;
    }
    hello() {
        console.log(`Hello! ${this.name}`);

    }

    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}
