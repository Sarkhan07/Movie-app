// прием когда функция вызывается самого себя называется рекурсией

// функция возведение в степень
// function pow(x, n) {
//     let result = 1; // чтобы при умножение 0 не получить

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// console.log(pow(2, 1)); //2
// pow(2, 2); //4

// pow(2, 3); //8
// pow(3, 4); // 16

// recursion when function is called inside itself // same loop and loop is more comfortable
// function pow(x, n) {
//     debugger;
//     if (n === 1) {
//         debugger;
//         return x;
//     } else {
//         return x * pow(x, n - 1); // сперва надо уменьшить а потом заново вызвать функцию => и это все записывается в очередь
//         debugger;
// n => 4 n => 3 => 2 => 1
// stack => 2 * 2 * 2 * 2
//     }
// }

// pow(2, 4);
// debugger;

//factorial
// function fact(n) {
//     debugger;
//     let s = 1;
//     for (let i = 1; i <= n; i++) {
//         s = s * i; // i => 1 2 3 4 5

// s => 1 => 2 => 6 => 24 => 120
//     }
//     console.log(s);
// }

// fact(5);
// debugger; // factorial  1 *2 * 3 * 4 * 5

// let s = 1;
// function fact2(n) {
//     if (n === 0) return;
//     s = s * n; // 5 20 60 120 120
//     fact2(n - 1); // 4 3 2 1 0
// }

// fact(5);

// когла рекурсия уменьшается и вызывается это называется шаг рекурсии
// Рети термин это шаг вызывов внутри рекурсии => глубина рекурсии => максимальная глубина примерно 10000

// лучше перебирать потому что при рекурсии надо все время сохранить в стеке все
// Рекурсия делает функцию по проще хоть и имеет ограничение по глубине

// но большинство программистов работают с рекурсией пример почему

let students = {
    js: [
        {
            name: 'John',
            progress: 100,
        },
        {
            name: 'Ivan',
            progress: 60,
        },
    ],
    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20,
            },
            {
                name: 'Ann',
                progress: 18,
            },
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10,
            },
        ],
        // here the object will be added after and when it happens we should harder our function and therefore that we not be in need to harder our function the best way do with recursion, when use recursion this method will work
        some: {
            students: [
                {
                    name: 'Test',
                    progress: 100,
                },
            ],
        },
    },
};
// we should count the numbers from progress
// first we should count the students, second overall number in percentage, and then we take overall number and divide to the number of students
function getTotalProgressByIteration(data) {
    let total = 0; // the overall progress when we sum all numbers
    let students = 0; // the overall number of students

    for (let course of Object.values(data)) {
        // for of when we iterate the array
        // course here { name: 'John', progress: 100 } and so on
        // here we should define that we will work with array or with object

        if (Array.isArray(course)) {
            // if array then ...
            students += course.length; // course here only array, and array length it means for example 2 students data it means 2 students
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress; // course it's array and [i] means each array and with doth we can go to progress
            }
        } else {
            // when we don't encounter the array but encounter the object
            for (let subCourse of Object.values(course)) {
                // course here like object students but here the html and we get the value basic and pro
                // console.log(subCourse);
                //[ { name: 'Peter', progress: 20 }, { name: 'Ann', progress: 18 } ]
                // [ { name: 'Sam', progress: 10 } ]

                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress; // subCourse it's array and [i] means each array and with doth we can go to progress
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));

//object.values() if put the object as arguments then we will get all values as array

// console.log(Object.values(students));
// [
//     [ { name: 'John', progress: 100 }, { name: 'Ivan', progress: 60 } ],
//     { basic: [ [Object], [Object] ], pro: [ [Object] ] }
//   ]

///

// for (let course of Object.values(students)) {
//     console.log(course);
// }
//[ { name: 'John', progress: 100 }, { name: 'Ivan', progress: 60 } ]
// {
//     basic: [ { name: 'Peter', progress: 20 }, { name: 'Ann', progress: 18 } ],
//     pro: [ { name: 'Sam', progress: 10 } ]
//   }

// recursion version of doing this task
function getTotalProgressByRecursion(data) {
    // first we should write the base where our recursion should finish and base in that case will be if it's array
    if (Array.isArray(data)) {
        // we should firstly to check may be our overall data is array
        // the second thing that in recursion there is not any interim variable like let students = 0;

        let total = 0; // but overal number of students we can get like data.length

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        // in recursion exactly  in base we should return something
        return [total, data.length]; // здесь возвращаем процент и число студентов как в итерации // это как бы база что в конце будет вернуться
    } else {
        // здесь получим объект
        // здесь объявляем промежуточные результаты
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData); // это работает так что если мы еще раз во втором натыкаемся на массив то функция заново пустится и работает верхняя часть программы
            total[0] += subDataArr[0]; // общее значение всего массива
            total[1] += subDataArr[1]; // 1 элемент в первый а второй в первый
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]); // то есть общий прогресс делим на общее число студентов
