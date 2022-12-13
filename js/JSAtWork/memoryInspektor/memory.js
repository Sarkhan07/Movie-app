//Js компилятор и интерпретаротор
// утечки памяти
// 'use strict';
// function func() {
//     smth = 'string'; // без use strict это не будет выдавать ошибку но нельзя так создать переменную а то это будет так window.smth = 'str'
// и такак глобальная переменная не удаляется сборщиком мусора, и это происходит с контекстом вызова
// }

// forget timer

// const someRes = getData();

// const node = document.querySelector('.class');

// setInterval(function () {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);
//если даже переменную уберем ссылка на них есть в тимере и они запускаются поэтому память будет забиться.. поэтому не нужные тимеры надо
//убрать

//3 пункт обработчики события на не нужные элементы, тоже утечка памяти, элемент удаляется, а обработчик нет и в нем ссылка на элемент
// но современные браузеры удаляют если самого элемента не существует
// но еще лучше с remove addventllistener убрать этих обработчиков событий

//четвертое это замыкание где большая трата появляется из-за того что инвормация замыкается внутри функции и не может удален

// function outer() {
//     const potentiallyHugeArray = [];

//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log('Hello');
//     };
// }

// const sayHello = outer(); // внутрь sayHello запишется новая функция inner
// сейчас sayHello содержит ссылку на potentiallyHugeArray и особенно если там будут еще какие то другие манипуляция

// 4 если мы объявляем переменные на дом дерево для верстки, и потом удаляем все равно ссылки сохраняются в переменной javascript

// function createElelemt() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     return div;
// }

// const testDiv = createElelemt();

// document.body.append(testDiv);

// // потом у нас задача удалить это блок

// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }

// deleteElement(); // именно удаляет со страницы а в js она сохраняется

// поэтому перезаписать функцию надо так чтобы избежать утечки памяти
function createElelemt() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}

createElelemt();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();
