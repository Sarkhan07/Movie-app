let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films did you watch?', '');

    while (
        numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt('How many films did you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of your watched films for the last time?', ''),
            b = prompt('how do you appraise this?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            // if in prompt tu push reject then you will get null

            personalMovieDB.movies[a] = b; // if upper conditions are performed then we record it to object exactly in object
            console.log('done');
        } else {
            console.log('error');
            i--; //если что то пошло не так и не было выполнены те условия то мы цикл просто откатываем назад чтобы заново начался;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('you looked lewer movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('You are classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are cineman');
    } else {
        console.log('There is happened mistake');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(
            `Your favorite genres under the number ${i}?`
        );
    }
}

writeYourGenres();

// let i = 0;
// while (i < 2) {
//     i++;
//     const a = prompt('One of your watched films for the last time?', ''),
//         b = prompt('how do you appraise this?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {

//         personalMovieDB.movies[a] = b; // if upper conditions are performed then we record it to object exactly in object
//         console.log('done');
//     } else {
//         console.log('error');
//         i--; //если что то пошло не так и не было выполнены те условия то мы цикл просто откатываем назад чтобы заново начался;
//     }
// }

// let i = 0;
// do {
//     const a = prompt('One of your watched films for the last time?', ''),
//         b = prompt('how do you appraise this?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// *if in prompt tu push reject then you will get null*

//         personalMovieDB.movies[a] = b; // if upper conditions are performed then we record it to object exactly in object
//         console.log('done');
//    } else {
//         console.log('error');
//         i--; //*если что то пошло не так и не было выполнены те условия то мы цикл просто откатываем назад чтобы заново начался;*
//     }
//     i++;
// } while (i < 2);

// const a = prompt('One of your watched films for the last time?', ''),
//     b = prompt('how do you appraise this?', ''),
//     c = prompt('One of your watched films for the last time?', ''),
//     d = prompt('how do you appraise this?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
