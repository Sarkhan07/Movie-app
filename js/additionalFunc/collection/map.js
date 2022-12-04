// const user = {
//     4: 'Alex', // 4 => string
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicDate: function () {
//         console.log(`${this.name} ${this.surname}`);
//     },
// };
// console.log(typeof Object.keys(user)[0]); // string

// нам надо сделать список ключей которые являются объектами

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
// map это специфическая структура данных которые очень похожи на объект, у которых вместро ключей можно использовать все
// Map has its own methods
// const map = new Map();
const map = new Map([[{ paper: 400 }, 8000]]); //everithing inside like array and so we can add to object another key and value

const budget = [5000, 15000, 25000]; // сейчам мы имеем 2 структуры, и нам надо их соединить

shops.forEach((shop, i) => {
    // more preferable method
    map.set(shop, budget[i]);
});

// first method of writing // map.set(shops[0], 5000); // budjet of first shop
// map.set(shops[1], 15000);
// map.set(shops[2], 52000);

// second method of writing
// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 52000); // первая обнаруживается и адбой

// console.log(map); //=> Map(1) { { rice: 500 } => 5000 } то есть объект имееи ключ объект со значением 5000
// get from map

// console.log(map.get(shops[0])); // the value of first object is 5000
// console.log(map.has(shops[0])); // if there is object show true

// map.delete(key);
// map.clear();
// map.size();

// перебрать карту
// map.keys() показывает итериюмый объект по ключам но используется тольео внутри переворов обычно ничего не дает

// когда итериюмый объект можно использовать for of

// for (let shop of map.keys()) {
//     console.log(shop); // и так можно получить каждый отдельный магазин
// }
// { paper: 400 }
// { rice: 500 }
// { oil: 200 }
// { bread: 50 }
// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]); // Object.keys(shop)[0] => { paper: 400 } => paper и paper пушаем в массив
// }
// console.log(goods);

// итерируемый объект по значениям
// for (let price of map.values()) {
//     console.log(price); // 8000, 5000, ...
// }

//const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// for (let price of map.entries()) {
//     console.log(price);
// }
// [ { paper: 400 }, 8000 ]
// [ { rice: 500 }, 5000 ]
// [ { oil: 200 }, 15000 ]
// [ { bread: 50 }, 25000 ]

// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
// }
// { paper: 400 } 8000 можно сразу в отдельные переменные то что на верху можно здесь сразу объединить
// { rice: 500 } 5000
// { oil: 200 } 15000
// { bread: 50 } 25000

// last method of iteration

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });

//{ paper: 400 } 8000
// { rice: 500 } 5000
// { oil: 200 } 15000
// { bread: 50 } 25000

// map is very close to object
// map from object object.entries

const user = {
    name: 'Alex', // 4 => string
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicDate: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};

//const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
const userMap = new Map(Object.entries(user));
console.log(userMap);
//from map simple object
const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);

// object has keys only string
// порядок свойст в картах какие мы добавляли четкий порядок
// empty map does not include anything

// map is very iterable

// size map we get with map.size

// for getting size of object firstly object.keys and then length
