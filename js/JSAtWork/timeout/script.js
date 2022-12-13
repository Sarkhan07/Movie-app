const btn = document.querySelector('.btn');
let timerId, // объявит глобально и использовать
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            // clearInterval(id);
        } else {
            pos++;

            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// const timerId = setTimeout(
//     function (text) {
//         console.log(text);
//     },
//     2000,
//     'Hello' // third argument
// );
// const timerId = setTimeout(logger, 2000); // it also without variable, but we put in variable for stopping in future
// clearInterval(timerId); // for stopping timer

// btn.addEventListener('click', () => {
// const timerId = setTimeout(logger, 2000);
// timerId = setInterval(logger, 2000); // каждые 2 секунды появится
//но когда функция большая то для выполнения требуется больше времени и за это время задержка тоже проходит
// и для решения этой проблемы используется рекурсивный метод
// });

// clearInterval(timerId); // чтобы функционал работал надо его отслеживать

// function logger() {
//     if (i == 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
// it's like set interval but if also function is big it will work without fail
//     // recursiya
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

// сперва задержка 5 сек и потом запускается функционал и выполняется действие например то что в консоле. потом подождет пол секунды
// и запустится log
