// свойство характеризует а метод что умеет наш объект

// второе свойство (тип) позволяет так присваивать и получать значение

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    },
};

console.log(persone.userAge); // без скобки // 25

console.log((persone.userAge = 30)); // без скобки // 30

console.log(persone.userAge); //30
