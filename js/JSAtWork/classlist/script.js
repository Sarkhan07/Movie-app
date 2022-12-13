const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // сколько класса имеет данные элемент
// console.log(btns[0].classList.item(0)); // мы можем получить класс под определенным индексом например index(0) первый класс

// console.log(btns[0].classList.add('red')); // for adding class ..... можно добавить сразу несколько классов через запятой
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); // переключение класса

// if (btns[1].classList.contains('red') { // if this has red then do that/// booling
//     console.log('red')
// })

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        // it's more preferable
        // this doesn't have so class
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    // btns[1].classList.toggle('red');
});

// console.log(btns[0].className); // old version

// делегирование событий - это мы назначаем на родителя а внутри проверяем куда пользователь нажимал

// wrapper.addEventListener('click', (e) => {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         / event.target.classlist.contains('blue) что куда будем тыкать имеет класс такой
//          / event.target is recomended by google because of some browsers
//      console.log('Hello');
//     } // for checking where i touch console.dir(event.target) for example tagName: "BUTTON"
// });

wrapper.addEventListener('click', (e) => {
    if (event.target && event.target.matches('button.red')) {
        /// advanced method
        console.log('Hello');
    }
});

// btns.forEach((btn) => {
// his method will not work for the last added button because it was before
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
