const user = {
    name: 'Alex',
    surname: 'Smith',
    // birthday: '20/04/1993',
    [Symbol('birthday')]: '20/04/2021', // не будут перебираться. только смотреть так, Object.getOwnPropertyDescriptor(user, [Symbol('birthday')]);
    showMyPublicDate: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};

// Object.defineProperty(user, 'birthday', { writable: false }); // not allowing for change birthday

// // for getting birthday from user and creating by defineProperty

// Object.defineProperty(user, 'birthday', {
//     value: prompt('Date?'),
//     enumerable: true,
//     configurable: true,
// });

// console.log(user);

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday')); // for getting descriptor and we will get internal thing ob object like writable
// enumarable or configurable
// for changing these parametres

// Object.defineProperty(user, 'name', { writable: false });

// Object.defineProperty(user, 'gender', { value: 'male' }); // for creating new property gender: male but every descriptors will false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = 'dfd'; // it will not work because writable false and only for reading

//writable if true свойство в объекте можно изменить, или же если false то только для чтения
//enumerable if (true) iteration will be supported
//configurable if true свойство можно удалить а атрибуты изменить
//all these hidden and true

// Object.defineProperty(user, 'showMyPublicDate', { enumerable: false });
// // здесь мы говорим что конкретный метод не булет участвовать

for (let key in user) console.log(key);

// we should now avoid for iterate methods

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperties(user, {
    name: { writable: false },
    surname: { writable: false }, // чтобы изменить несколько сразу
});

//{
//     value: 3.141592653589793, то есть изменит нельзя и удалить
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// вторая часть этого урока
Object.preventExtensions; // никакие свойства можно добавлять к объекту
Object.seal(); // и заблокирует свойство и также все конфигурацию установливает false но writable is exception
Object.freeze(); // объект остается вообще неизменным

Object.isExtensible(); // проверяет добавил ли какой программист например preventExtension

// Один объект никогда равен другому

Object.is(); // можно сравнивать сожержимое объекта
// Object.keys - возвращает массив из перечисляемых свойст, Object.values - массив значений, Object.entries - по парам разбивает объект ключ и значение через запятые
