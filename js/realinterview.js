//1)
// let x = 5;

// console.log(x++); // 5 потому что когда после то со второго раза увеличивает

// console.log(x + 5); // 11 так как уже второй раз и поэтому x = 6

// 2)
// console.log([] + false - null + true); // NaN [] === ''

// 3)
// let y = 1;
// let x = (y = 2);
// console.log(x); //2

// 4
// console.log([] + 1 + 2); //12 ''+1+2 []===''

//5
// console.log('1'[0]); то есть первый элемент строки это 1 // 1

//6
// console.log(2 && 1 && null && 0 && undefined); // && находит первую ложь и выводит

// 7
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)? // '!! превращает в булиновое значение  поэтому булиновое не равно с обычным значением

// 8

// console.log(null || (2 && 3) || 4); //3 && > ||

// 9

// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a == b);  a и b два разные ящики которые содержат два разные яблоки поэтоиу ящики не равны также и (a и b)

// 10
// console.log(+'Infinity'); // infinity число

// 11

// console.log('Ёжик' > 'яблоко'); // false

// 12

// console.log(0 || '' || 2 || undefined || true || falsе); //2 first true

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$',
        },
        {
            name: 'Pizza Diavola',
            price: '9$',
        },
        {
            name: 'Beefsteak',
            price: '17$',
        },
        {
            name: 'Napoleon',
            price: '7$',
        },
    ],
    waitors: [
        { name: 'Alice', age: 22 },
        { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: false,
};

// function isOpen(prop) {
//     prop ? (answer = 'Открыто') : (answer = 'Закрыто');
//     return answer;
// }

// console.log(isOpen(restorantData.openNow));
// debugger;

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < (+average.slice(0, -1))) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(
//     isAverageLunchPriceTrue(
//         restorantData.menu[0],
//         restorantData.menu[1],
//         restorantData.averageLunchPrice
//     )
// );

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{ name: 'Mike', age: 32 }];

    //  Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение
    // будет меняться только у копии
    return copy;
}

console.log(transferWaitors(restorantData));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0].name = 'Mike';
//     copy.waitors[0].age = 32;
//     return copy;
// }

// console.log(transferWaitors(restorantData));
// debugger;
