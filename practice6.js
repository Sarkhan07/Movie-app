'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5,
        },
        {
            width: 15,
            length: 7,
        },
        {
            width: 20,
            length: 5,
        },
        {
            width: 8,
            length: 10,
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
};

function isBudgetEnough(data) {
    let squary = 0;
    let volume = 0;
    data.shops.forEach((shop) => {
        squary += shop.width * shop.length;
    });
    volume += squary * data.height;
    if (volume * data.moneyPer1m3 > data.budget) {
        console.log('Бюджета недостаточно');
    } else {
        console.log('Бюджета достаточно');
    }
}

isBudgetEnough(shoppingMallData);

//     for (let key in shoppingMallData) {
//         if (typeof shoppingMallData[key] === 'object') {
//             for (let i in shoppingMallData[key]) {
//                 // console.log(shoppingMallData[key][i]);
//                 for (let j in shoppingMallData[key][i]) {
//                     let k = shoppingMallData[key][i][j];

//                     str.push(k);
//                     str.forEach((s) => {
//                         console.log(str);
//                     });
//                 }
//             }
//         }
//     }
// }
