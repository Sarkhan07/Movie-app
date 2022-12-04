// event on mobile consist of 6 event
// touchstart мы коснулись и touchstart выполнилось (тыкали или нажимали)
// touchmove - если коснулись и двигали палец
// touchend - как только палец отдалилися
// touchenter - когда палец зашел в пределы какого то элемента
// touchleave - когда ущел за предел элемента
// touchcancell - когда за пределом бразузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');

        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

// существует 3 функции event при работе с сенсорами

// touches список всех пальцев выдается то есть количество пальцев
// targetTouches список пальцев которые взаимодействуют с конкретным элементом
// changedTouches  список пальцев которые участвуют в текущем событие, если это touchend то список пальцев которые были убраны
// console.log(e.targetTouches[0].pageX); например исходя из эти кординатов можно строить логику
// в реальных проектах Hammer.min.js за нас это делается со стороны

// domstructures

// defer  add to html to js script when it's in the start of body // скрипт будет ждать полностью готовности
// дом структуру и потом строится и запускается в фоновом и можно даже в head загрузить
// и если несколько скриптов с defer они будут загружаться последовательно

// а если вместо defer написать Async в отличие от defer они не ждут другого скрипта когда очередь дошла загружается
// async мы используем когда мы уверены что она не зависит от дом структуры и от других скриптов

function loadScript(src) {
    const script = document.createElement('script');

    // script.src = ;
    script.src = src;

    script.async = false; // чтобы скрипт вел себя как обычный скрипт

    document.body.append('script'); // помещает элемент в конец себя
}

// когда асинхронность false они будут выполняться строго друг за другом

loadScript('js/test.js');
