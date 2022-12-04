// set особый вид коллекции где каждое значение может повторяться только по один раз (типо массив)\
// или это массив где каждое значение встречается только один раз
// const arr = [1, 2, 3, 4, 5, 6, 6, 5, 7];

// const set = new Set(arr);

// console.log(set); // Set(7) { 1, 2, 3, 4, 5, 6, 7 } где было несколько повторений убрались

// const arr = ['Alex', 'Anna', 'Oleq', 'Alex'];
// const set = new Set(arr);

// set.add('Ivan');
// set.add('Oleq'); //it will not pushed

// set.add('Ivan')
//     .add('Oleq'); //можно написать и так

//Array.find() for serching some value inside array

// set.delete(value);

// set.has(value);
// set.clear();
// set.size;

// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgeing, set) => {
//     console.log(value, valueAgeing);
// });

// console.log(set.values);
// console.log(set.keys()); // return values

// console.log(set.entries());

// console.log(set);

const arr = ['Alex', 'Anna', 'Oleq', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr)); // мы создаем массив из чего то.. здесь мы избавляемся от дублирования и потом возвращаем массив
}

console.log(unique(arr)); //[ 'Alex', 'Anna', 'Oleq' ]
