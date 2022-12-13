// 'use strict';

// const now = new Date();

// console.log(now); //2022-12-05T18:41:55.617Z   t разделитель

// const now = new Date('2022-12-05'); //2022-12-05T00:00:00.000Z

// const now = new Date(2022, 12, 5, 20); //2023-01-05T16:00:00.000Z дата считается с нуля ноль это январь//
//то что в конце 20 это зависимо от часового пояса

// const now = new Date(0); // mms is counted from 1970 //1970-01-01T00:00:00.000Z

const now = new Date();
// console.log(now);

// const now = new Date(1670266747988);//2022-12-05T18:59:07.988Z
// console.log(now);

// console.log(now.getFullYear()); // 2022 // год всегда надо давать 4 значным числом

// console.log(now.getMonth()); //11

// console.log(now.getDate()); //5 day

// now.getHours, now.getMinutes, now.getSeconds, now.getMilliseconds

// console.log(now.getDay()); // monday

// изменить часовой пояс

// console.log(now.getUTCHours(), now.getHours()); //18,  22

// console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC ( 4 * 60) в минутах

// console.log(now.getTime()); //1670266747988 это кол. ммсек. которое прошло с 1970

// установить
// now.setHours(18, 40); // в vscode часы возвращается как UTC (-4) но в браузере 18 часов, второй аргумент минуты
// также происходит самоисправление даты
// и все другие методы тоже также работают

// const now = new Date('2022-12-5'); // метод parse точно также работает как new Date.parse('2022-12-5');

// console.log(now);

//вычитание

let start = new Date();
console.log(start);

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(end);
console.log(`Цикл отработал за ${end - start} mms`);
