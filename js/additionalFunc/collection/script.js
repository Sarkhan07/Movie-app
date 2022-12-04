'use strict';

const boxesQuery = document.querySelectorAll('.box'); // есть больше несколько методов

const boxGet = document.getElementsByClassName('box');

// boxesQuery.forEach((box) => {
//     if (box.matches('.this')) console.log('This one'); // form matcing one thing to onether .. matches применяется на дом элементов
// });

console.log(boxesQuery[0].closest('.wrapper')); // ближайший селектор родитель, то есть идет вверх и ищет тот у которого есть тот селектор

///matches искал внутри которого применялся и возвращал true or false,, а closest снаружи родителя а если не находит то null

// boxesQuery[0].remove();

// boxGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     let div = document.createElement('div');

//     div.classList.add('box');

// document.body.append('div');

// boxGet[boxGet.length] = div;
// }

// console.log(boxesQuery); // shows not current position // nodeList it's static ... не смотрит и не проверяет что случилось потом
// console.log(boxGet); // shows current condition in dom tree // HTMLCollection it's live

// console.log(document.body.children); // здесь еще выводится script // another method for getting htmlcollection

// with getElement we use when we need for follow what happen now/

// console.log(Array.from(boxGet)); // when we want creat array from certain array// and eventually it's like array

// HTMLCollection не может быть измененн за раз
