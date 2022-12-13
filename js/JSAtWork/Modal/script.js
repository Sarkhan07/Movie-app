'use strict';

// document - содержит всю html структуру
// window - наше окно в котором показывается документ
// screen - это весь видимый монитор

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height); // 405 , 355

// widht = 400 (width) + 20 (padding) but scroll here 15 and in clientwidth we do not consider this therefore it's 405

// когда установлена box-sizing: border-box в ширину включены padding и поэтому получается 385 ( 405 - 20)

// с поммощью этих свойст можно получить размеры нашего можального окна и что-то делать с ними

// const width = box.offsetWidth;
// const height = box.offsetHeight;// 400 , 350  // получаем те же что было в css (это включает еще border, margin  )

const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height); // 400 1298 => здесь еще 15 уходит на полосу прокрутки но и длину показывает

// нажимаем на кнопку и скролл открывается

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // делаем длину box в длину скрола и так как там нету px
    console.log(box.scrollTop); // сколько уже сверху пройдена
});

// кординаты и в js они считаются в лево в вуерхнюю углу экрана
console.log(box.getBoundingClientRect()); // получать все кординаты
console.log(box.getBoundingClientRect().top); // так как это объект можно получить и ключи

// right в css от правой границы до элемента, но в js от левой части экрана до правой границы элемента
// bottom в css снизу до элемента, в js от верхней границы до нижней границы элемента

// получить стили которые были применены к элементу в css // getcomputedstyle// эти стили которые были уже применены к элементы
// можно это посмотреть в консоле разработчика, но поменять их мы не можем
const style = window.getComputedStyle(box);

console.log(style); // it's object

console.log(style.display); // можно получить и стили псевдомассивов, чтобы получить псевдоэлемент box вторым аргументом можем написать
//и так мы получили бы стили псевдоэлемента которые относится к box

// .style более приоритетнее чем стили в computed,

//document.scrollTop не существует .. document.documentElemen is more right for getting scroll

// document.documentElement.scrollTop = 0;
// window.scrollBy(0, 400) // x y 0 до 400 вниз от текущей позиции

//scrollto(0, 400) 400 свурху

