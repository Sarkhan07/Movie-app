const students = [
    'Peter',
    'Andrew',
    'Ann',
    'Mark',
    'Josh',
    'Sandra',
    'Cris',
    'Bernard',
    'Takesi',
    // 'Sam',
];

function sortStudentsByGroups(arr) {
    arr.sort();
    let first = [];
    let second = [];
    let third = [];
    let rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            first.push(arr[i]);
        } else if (i < 6) {
            second.push(arr[i]);
        } else if (i < 9) {
            third.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    console.log([
        first,
        second,
        third,
        `оставшиеся студента: ${rest.length === 0 ? '-' : rest.join(',')}`,
    ]);
}

sortStudentsByGroups(students);

//my solution but not properly

// function sortStudentsByGroups(arr) {
//     let newArr = arr.sort();
//     let first = [];
//     let second = [];
//     let third = [];
//     let forth = 'оставшиеся студенты: ';
//     let team = [];

//     newArr.forEach((student, i, arr) => {
//         if (i >= 0 && i <= 2) {
//             first.push(student);
//         } else if (i >= 3 && i <= 5) {
//             second.push(student);
//         } else if (i >= 6 && i <= 8) {
//             third.push(student);
//         } else if (arr.length < 9) {
//             forth += student;
//         }
//     });

//     team.push(first, second, third, forth);
//     return team;
// }

// sortStudentsByGroups(students);
