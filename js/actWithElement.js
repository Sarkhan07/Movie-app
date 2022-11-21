'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
// oneHeart = wrapper.querySelector('.heart'); только внутри wrapper

// console.dir(box); // каждый элемент большой объект..  объект внутри объекта style --- inline свойство
box.style.backgroundColor = 'blue'; // свойство --- значение
box.style.width = '500px'; // inline styles are more prioritet

box.style.cssText = 'background-color: blue; width: 500px'; //чтобы нескольким написать сразу и еще в формате css
// box.style.cssText = `background-color: blue; width: ${num}px`; // и можно еще так

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red'; // обязательно надо указать какой элемент с цифрой

// for (let i = 0; i < hearts.length; i++) { other options
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item) => {
    item.style.backgroundColor = 'blue'; // the main option
});

const div = document.createElement('div');
// const text = document.createTextNode('Here was I');
div.classList.add('black'); //чтобы добавить класс

// document.body.append(div); // внутрь body под самый конец вставляем
// document.querySelector('.wrapper').append(div); // чтобы не получить и сразу вложить в конец элемента

wrapper.append(div); // if you change the code it calls refactoring

// wrapper.appendChild(div); // old one method

// wrapper.prepend(div); // ставить в начало

// hearts[0].before(div); // чтобы вставить перед или после определенного элемента
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]); // old method, first argument which element we insert, and second before which element we insert

// circles[0].remove(); // for deleting element

// wrapper.removeChild(hearts[1]); // old one method, fistly we should get parent and then remove

// hearts[0].replaceWith(circles[0]); // чтобы заменить один элемент другим элементом
// wrapper.replaceChild(circles[0], hearts[0]); // получить родителя, первый какой будет вставляться вместо другого old one

// div.innerHTML = 'Hello World'; // чтобы написать что-то внутри созданного элемента
div.innerHTML = '<h1>Hello World</h1>'; // можем написать как html

// div.textContent = 'Hello world'; // it works only with text

div.insertAdjacentHTML('', '<h2>Hello</h2>'); //а первый элемент (beforebegin ставить перед элементом,
// afterbegin ставить наш код в начало нашего эдемента like prepend, beforeend в конец нашего элемента, afterend после элемента)
//второй тот HTML который мы хотим вставить
