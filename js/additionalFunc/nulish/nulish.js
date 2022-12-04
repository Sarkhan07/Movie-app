'use strict';

const box = document.querySelector('.box');

const newHeight = 100; // если сюда придет значение 0, то все равно будет 200 так как 0 это false
const newWidth = 400;

// написать по умолчанию цифру

// nulish has same prioritet with ||''

function changeParams(elem, h, w) {
    // elem.style.height = `${h ?? 200}px`;
    // elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = h ?? 200 * w ?? 200;
}

changeParams(box, newHeight, newWidth);

// firstly 200 * w  and then ?? will work and h it's 100 and will return h, therefore we should use braskets

// let userName; // если NAN, 0, false то будет вернуться

// console.log(userName ?? 'User');

// user будет работат только null и underfined а не с остальными поэтому
// когда нам цифру 0 надо использовать используем это

// оператор && ?? не могут импользоваться вместе внутри одного выражения
