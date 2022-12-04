'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block); // ошибка высвечивает из-за того что не найден на странице

// console.log(block.textContent); // после даже этой написать правдивый код все равно дальше код блокируется

// чтобы избежать этого пишем условие

// if (block) {
//     console.log(block.textContent); // но это не удобно и поэтому пользуется оператор опцияальной цепочки
// }

// принцип в том что проверяет слева если находит underfined и Null остановливает операцию и возвращет underfined и без ошибки
console.log(1 + 2);

console.log(block?.textContent); // '? it's operational chain, but it's only for read not adding something for example
//console.log(block?.textContent = 123); it will cause fault

const userData = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello');
    },
};

console.log(userData.skills.js); //например вам приходят сотни данных и вы предлагаете что у всех есть например js и буг у чего-то нету

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

// с этой проверкой мы избежим это

console.log(userData.skills?.js); // оператор здесь будет проверять часть слева от себя, и если код существует пойдет дальше если нет то остановит

// и вернется underfined
console.log(userData?.skills?.js); //несколько проверок//

userData.say();

// если вызвать не сущетсвующий метод то получим ошибку userData.hey();

userData.hey?.(); // будет проверять если есть то будет вызывать
