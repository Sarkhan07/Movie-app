// const log = function (a, b, ...rest) {
//     // rest это когда приходит несколько аргументов которые не известно (нечеткие)/// и можно назвать как угодно rest делает массив
//     console.log(a, b, rest);
// };

// log('basic', 'rest', 'operator', 'usage'); //basic rest [ 'operator', 'usage' ]
//по умолчание
function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; before es6
    console.log(number * basis);
}

calcOrDouble(3);
