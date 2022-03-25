'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// вариант без циклла
// let film1 = prompt('Один из последних просмотренных фильмов?', '');
// let rating1 = prompt('На сколько оцените его?', '');
// let film2 = prompt('Один из последних просмотренных фильмов?', '');
// let rating2 = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[film1] = rating1;
// personalMovieDB.movies[film2] = rating2;

// вариант цикла FOR
function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {
        let film = prompt('Один из последних просмотренных фильмов?', ''),
            rating = prompt('На сколько оцените его?', '');
        if (film != '' && rating != '' && film != null && rating != null && film.length < 3) {
            personalMovieDB.movies[film] = rating;
        } else {
            alert('Не правильно, введите заново!!!');
            i--;
        }
    }
}

rememberMyFilms();

// вариант цикла WHILE
// let i = 0;
// while (i < 3) {
//     let film = prompt('Один из последних просмотренных фильмов?', ''),
//         rating = prompt('На сколько оцените его?', '');
//     i++;
//     if (film != '' && rating != '' && film != null && rating != null && film.length < 3) {
//         personalMovieDB.movies[film] = rating;
//     } else {
//         alert('Не правильно, введите заново!!!');
//         i--;
//     }
// }
// вариант цикла DO WHILE
// let i = 0;
// do {
//     let film = prompt('Один из последних просмотренных фильмов?', ''),
//         rating = prompt('На сколько оцените его?', '');
//     i++;
//     if (film != '' && rating != '' && film != null && rating != null && film.length < 3) {
//         personalMovieDB.movies[film] = rating;
//     } else {
//         alert('Не правильно, введите заново!!!');
//         i--;
//     }
// } while ( i < 3);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert(`Просмотрено фильмов: ${personalMovieDB.count}. Это довольно мало.`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert(`Просмотрено фильмов: ${personalMovieDB.count}. Вы классический зритель.`);
    } else if (personalMovieDB.count > 30) {
        alert(`Просмотрено фильмов: ${personalMovieDB.count}. Вы киноман!!!`);
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre;
        do {
            genre = prompt(`Ваш юбимый жанр под номером ${i + 1}:`, '');
        } while (genre == '' || genre == null || !isNaN(genre));
        personalMovieDB.genres[i] = genre;
    }
}
writeYourGenres();
