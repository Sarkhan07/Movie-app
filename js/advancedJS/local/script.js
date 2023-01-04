'use strict';

// window.localStorage;
// application => localstorage in browser> key and value because localstorage is object

// localStorage.setItem('number', 5); // key and value like setatribute
// localStorage.getItem('number');

// localStorage.removeItem('number'); //for deleting
// console.log(localStorage.getItem('number'));

// localStorage.clear(); // for clearing full

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

// if user check then everithing will be saved despite user leave

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true; // if someone click change then in local storage appear this key and property
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red'; // beforehand we check that if this has so item changed then paint to red
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25,
};

const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex'))); // straightly we cannot write object to local
