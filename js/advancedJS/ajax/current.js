'use strict';

let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    // input когда чтото вводится а change когда куда то в другое место нажимается
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); // собирает настройки чтобы в будущем делать запрос, первый аргумент метод (get, post), way to out server, асинхронное не блокирует что-то другое и все происходит не по порядку, а если нам не надо то ствим это в false,
    // и пока сервер не ответит другой код не будет выполняться

    request.open('GET', 'current.json');
    // даем сейчас конкретику что именно отправляем в сервер// это HTTP заголовки
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); // this method
    // now property of out object

    // status 404 not found, te status of response, with 200 success, 400 client side false, 500 server false
    // statusText  = ok, not found
    //response - ответ от сервера
    // readyState - текущее состояние нашего запроса 0 - unsent (просто объект был создан), 1 - opened, 2 - header received, 3 - loading, 4 - done

    // event  loadStart, progress, abort, timeout, loadEnd. readystatechange

    request.addEventListener('readystatechange', () => {
        // instead of we can write 'load' but in if we should remove readystate ===4
        // событие отслеживает готовность нашего запроса, like follow the readyState, напримар с 0 изменилось на один сработала
        //это событие будет вызываться несколько раз обычно будем использовать load
        if (request.readyState === 4 && request.status === 200) {
            // 4 = done, 200 = success
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value * data.current.usd).toFixed(2); // 2 знака после точки
        } else {
            inputUsd.value = 'Что-то пошло не так ';
        }
    });
});
