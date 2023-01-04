'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age; // let userAge = age; doesn't work _age means it closed from outside
    }

    #surname = 'Petrychenko'; // private

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

    // say() {
    //     console.log(
    //         `Имя пользователя: ${this.name} ${this.surname}, возраст ${this._age}`
    //     );
    // }

    say = () => {
        console.log(
            `Имя пользователя: ${this.name} ${this.#surname}, возраст ${
                this._age
            }`
        );
    };

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);

console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();
ivan.surname = 'Mamedov';

console.log(ivan.surname); //undefined from outside and with # we cannot

// 27
// 99
// Имя пользователя: Ivan, возраст 99

///
// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     };

//     // second part of incapsulation for getting and setting local variable inside class we write so
//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log(' НЕДОПУСТИЖИМОЕ ЗНАЧЕНИЕ');
//         }
//     };
// }

// const Ivan = new User('Ivan', 27);

// console.log(Ivan.name);
// console.log(Ivan.age);

/// Ivan
/// 27
/// ivan.age = 30;
// Ivan.userAge = 30;
// Ivan.name = 'Alex'; // возраст не поменялся и остался 27
// Ivan.say(); // Имя пользователя Alex, возраст 30
// Имя пользователя Alex, возраст 30
// когда как userAge объявлена переменная мы не можем не получить не поменять

// console.log(Ivan.getAge()); // 27
// Ivan.setAge(30);
// console.log(Ivan.getAge()); // 30
