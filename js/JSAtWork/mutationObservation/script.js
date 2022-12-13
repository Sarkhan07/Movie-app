'use strict';

const box = document.querySelector('.box');

// если что то происходит с элементом (изменение) только тогда мы выполняем какое то действие// mutationObservation

//contenteditable - редактирование страницу пользователя //     <div contenteditable class="box"></div> внутри можно писать текст

// сейчас надо следить за этим объектом

let observer = new MutationObserver((MutationRecord) => {
    // redord - это список изменения
    console.log(MutationRecord);
});

// следи если произойдет изменение делай что-то
observer.observe(box, {
    childList: true, // что добавляются и удаляются текстовые узлы
}); // первый элемент над которым мы ведем наблюдение, а второй конфигурацие за которыми следим

//вводится в консоль массив с объектами об изменениях
// Text.nodevalue - можно получить текст что ввел пользователь
// observer сработает после изменения ЭТО АСИНХРОННОЕ ТО ЕСТЬ ОТСЛЕЖИВАНИЕ ПРОИСХОДИТ ЧУТЬ РАНЬШЕ ИЛИ ПОЗЖЕ
// observer.disconnect(); // перестань следить

//resizeobserver same as mutationobserver but difference the variotion only size of elements
