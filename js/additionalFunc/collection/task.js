// function amountOfPages(summary) {
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//         result += i; // iteration 1, 2 , 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17|, 18, 19, 20, 21, 22, 23, 24, 25

//         if (result.length === summary) {
//             n = i;
//             break;
//         }
//     }

//     return n;
// }

// console.log(amountOfPages(25));

// console.log(result); //1234567891011121314151617

// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений.

function isPangram(string) {
    // my decision
    let arr_en = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    for (let i = 0; i <= string.length; i++) {
        if (arr_en.includes(string[i])) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string) {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i);
            if (s < 65 || (s > 90 && s < 97) || s > 122) continue;
            if (s === 65 + c || s === 97 + c) continue letters;
        }

        return false;
    }

    return true;
}

// При помощи Set
function isPangram(string) {
    return (
        new Set(
            string
                .toLocaleLowerCase()
                .replace(/[^a-z]/gi, '')
                .split('')
        ).size === 26
    );
}

// С использованием регулярных выражений
function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

// deep count

// Вариант с циклом
function deepCount(a) {
    let count = a.length;
    for (let i = 0; i < a.length; i++)
        if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

// Вариант с методом reduce
function deepCount(a) {
    return a.reduce(
        (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
        a.length
    );
}
