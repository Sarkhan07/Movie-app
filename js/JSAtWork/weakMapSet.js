'use strict';

// let user = { name: 'ivan' };

// const arr = [user]; // объект передается по ссылочной системе, пока arr существует объект тоже будет существовать в памяти

// user = null;

// console.log(user); // объект удален и не существует

// console.log(arr[0]); // { name: 'ivan' }

// это все связана и еще с картой пока карта существует объект будет лежать в памяти

// let user = { name: 'ivan' };
// let map = new Map();
// map.set(user, 'data'); // ссылка остается внутри карты

// user = null;

// console.log(map.keys()); // [Map Iterator] { { name: 'ivan' } }

//weakMap

//ключи могут только объекты, если ссылки нет и этот объект существует только внутри weakMap то существует внутри карты
// let user = { name: 'ivan' };
// let map = new WeakMap();
// map.set(user, 'data');

// user = null;
// console.log(map.has(user)); // false weakMap doesn't has // items unknown (no properties)

// this method doesn't have keys, values, entries, for of, we have set, get, delete, has

// chat
// let cache = new WeakMap();
// кашировать пользователей то есть запоминать

// function cacheuser(user) {
//если пользователя нет то добавляем его и запоминаем
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }

//     return cache.get(user);
// }

// let lena = { name: 'Elena' };

// let alex = { name: 'Alex' };

// cacheuser(lena);
// cacheuser(alex);

// lena = null; // лена вышла из чата так как это weakMap объекта не существует и поэтому объект будет удален

// console.log(cache.has(lena)); // false
// console.log(cache.has(alex)); // true

//Weakset тоже как set но мы можем добавлять только объекты

//weakset содержит методы add, has, delete/// а size, keys, get (мы не сможем получить а только проверить)
//не существуют и не является передираемой

// chat with weakset

let message = [
    { text: 'Hello', from: 'Jonh' },
    { text: 'World', from: 'Alex' },
    { text: '....', from: 'M' },
];

let readMessage = new WeakSet();

readMessage.add(message[0]); // два этиъ сообщений должны быть почитаны
readMessage.add(message[1]);
readMessage.add(message[0]); // это аналогичнее Set и поэтому такое сообщение будет игнорировано
message.shift();
console.log(readMessage.has(message[0])); // true так как первый удаляется и автомотически второе занимает место первого

// минус в том что мы только проверяем не можем не получить ни другое
