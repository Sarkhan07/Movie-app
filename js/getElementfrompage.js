'Use strict';

const box = document.getElementById('box'); // method that you can get only one element

console.log(box); // it doesn't work inside VS code

//pseudomassive it is the same massive but without any methods like push or pop

// const btns = document.getElementsByTagName('button');
const btns = document.getElementsByTagName('button')[1]; // for getting second element button

// console.log(btns); // button 2
console.log(btns[1]); // button 2 // if other buttons were deleted then it doesn't matter we should write thus btns[0] because it is array
// html collection [button, button, ....]

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // it is exclusion from other pseudomassive because here there is method foreach

hearts.forEach((item) => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');

console.log(oneHeart); // first element
