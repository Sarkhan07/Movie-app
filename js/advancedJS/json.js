// "JSON" JS object notation

'use strict';

// "JSON" текстовый форматом обмена данных

// это используется и для хранение и передачи данных

// "JSON" ключ значение но обе части в кавычках в качаестве значение может быть что угодно

// const persone = {
//     name: 'Alex',
//     tel: '+77777',
// }; // чтобы отправить в бекенд надо сформировать в json

// console.log(JSON.stringify(persone)); //{"name":"Alex","tel":"+77777"} now it's acceptable for json format

//а когда с сервера приходит в формате json надо сформировать в объект
// console.log(JSON.parse(JSON.stringify(persone))); //{ name: 'Alex', tel: '+77777' }

// глубокая копия

const persone = {
    name: 'Alex',
    tel: '+77777',
    parents: {
        mom: 'Olga',
        dad: 'Mike',
    },
};

const clone = JSON.parse(JSON.stringify(persone)); // и таким образом появляется независимая копия объектов
