// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// const bigint = 1111366665547777777774555555534444333n;

// const sameBigint = BigInt(1111366665547777777774555555534444333);

// console.log(typeof sameBigint);

// нельзя смешивать bigint и обычные цифра в итерациях, и плюс нельзя использовать Math.///

// console.log(5n + 1); // misstake
// console.log(Math.round(5n));

// console.log(1n + 2n); // 3n

// console.log(1n / 2n); // single exeption is dividing because it returns already rounded number

// console.log(1n < 2n); // true it works also with bigInt///  (1n < 2) => also true because it returns true
// console.log(2n == 2n);// true === false

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number)); // 3n  // if BigInt that
console.log(Number(bigInt) + number); // 3 // instead  of Number we cannot add + but if we convert bigint to number that more than max safe
// it will remove right side
