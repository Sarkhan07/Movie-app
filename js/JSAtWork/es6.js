'use strict';

// class like function

class Rectangle {
    // большой буквой начинать
    constructor(height, width) {
        this.height = height; // this это каждый новый объект а height идет с аргументов
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    // наследовать от rectangle со всеми методами
    constructor(height, width, text, bgColor) {
        super(height, width); // этот метод заменяет this.height = height сверху,,, как то вызывает супер конструктор родителя и это всегда должен быть первым
        this.text = text;
        this.bgColor = bgColor;

        // внутри super height, width нам не всегда надо дать какие когда надо использовать
    }

    showMyprops() {
        // покажи мне мои свойста
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyprops();

console.log(div.calcArea());

// const squary = new Rectangle(10, 10);
// const long = new Rectangle(20, 10);

// console.log(squary.calcArea()); // 100
// console.log(long.calcArea()); // 200

// абстракция == когда мы отделяем концепцию от уу экземпляра то есть концепция Rectangle а squary экземпляр

// наследование  == способность нашено объекта или класса базироваться на другом объекте или классе

// title for herritance
