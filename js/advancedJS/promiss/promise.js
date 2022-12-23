// async happen only during setTimeout operation and during sending some forms to server

'use strict';

// promise если произошло что-то то я сделаю что-то (обещаю)

// console.log('запрос данных'); //1 the option without promisses

// setTimeout(() => {
//     console.log('Подготовка данных...'); //2

//     const product = {
//         name: 'TV',
//         price: 2000,
//     };

//     setTimeout(() => {
//         product.status = 'ordered';
//         console.log(product);
//     }, 2000); //3
// }, 2000);

// console.log('запрос данных');

// const req = new Promise((resolve, reject) => {
//     // это аргументы вместо которых будут ставлены функции
//     // resolve наше обещание выполнилось, а reject не выполнилось

//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000,
//         };

//         resolve(product);
//     }, 2000);
// });

// // чтобы дать знать какую инфор. будем использовать пишем в качестве аргумента в resolve и then

// // req.then((product) => {
// // это обрабатывает положительные результаты
// //     setTimeout(() => {
// //         product.status = 'ordered';
// //         console.log(product);
// //     }, 2000);
// // });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product); // опять успешно получился код до этого и поэтому заново в качаестве аргумента передаем сюда
//             // reject();
//         }, 2000);
//     });
// })
//     .then((data) => {
//         data.modify = true;
//         return data;
//         console.log(data);
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(() => {
//         console.error('Error');
//     })
//     .finally(() => {
//         console.log('finally');
//     });
// если сделали что то можно new promise не делать просто вернуть и также с помощью then смотреть
// и если ошибка обнаруживается пропускаем все then и переходим сразу catch

// finally например обычно очищать форму или что то тому подобное

const test = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// }); // all нужен чтобы убедились все promises выполнялись и потом сделать что-то

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
//race выполняется когда самый первый promiss выполнялся

// API; // application programming interface готовые методы и свойства которые мы можем использовать//DOM API document.selector //google map api

//fetch api

// fetch('https://jsonplaceholder.typicode.com/todos/1') // если ничего не писать то это get запрос feth it's promissess
//     .then((response) => response.json())
//     .then((json) => console.log(json)); // ГОТОВЫЕ   ОБЪЕКТ не используя уже parse

fetch('https://jsonplaceholder.typicode.com/posts', {
    // posts отправляев нащ запрос исправляем это в адресе
    method: 'POST',
    body: JSON.stringify({ name: 'Alex' }), // сразу объект превратиться в JSON формат
    headers: {
        'Content-type': 'application/json',
    }, // 101 это id с моим запросом
}) // post
    .then((response) => response.json())
    .then((json) => console.log(json));
