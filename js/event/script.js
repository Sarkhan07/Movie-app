const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click'); // it's also not running in real project
// }; это не используется потому что если на кнопку еще раз выполнить обработчик события то первое исчезнет и выполнится только второе
//то есть заменяет первое

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('click', () => {
//     alert('Second Click'); // click, second click like in queue
// });
// btn.addEventListener('mouseenter', () => {
//     alert('Hover');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e); // объект события как первый аргумент передается // like event type "mouseenter" можно написать и e.target or e.type
//     e.target.remove(); // чтобы убирать элемент
//     alert('Hover');
// });

// сейчас убирать событие с элемента

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement); // только раз работает так как i увеличивается
    // }
};

// btn.addEventListener('click', deleteElement); // это означает что мы ссылаемся на верхнюю после клика и поэтому не вызываем
// btn.removeEventListener('click', deleteElement); // назначаем и сразу удаляем
// overlay.addEventListener('click', deleteElement); // overlay родитель и сперва событие происходит у ребенка а потом всплывает на родителя

//навешать событие нескольким элементам

// btns.forEach((btn) => {
//     btn.addEventListener('click', deleteElement);
// });

//отменять стандартное поведение браузера на странице

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    event.preventDefault(); // стой нам не надо пройти по ссылке
    console.log(event.target);
});

// чтобы пребирать все кнопки и навешать каждому обработчика событий

// options for listener

// once it event will happen only for one time
btns.forEach((btn) => {
    btn.addEventListener('click', deleteElement, { once: true });
});
