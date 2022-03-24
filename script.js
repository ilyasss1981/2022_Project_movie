'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '18');
// console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let film1 = prompt('Один из последних просмотренных фильмов?', '');
let rating1 = prompt('На сколько оцените его?', '');
let film2 = prompt('Один из последних просмотренных фильмов?', '');
let rating2 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[film1] = rating1;
personalMovieDB.movies[film2] = rating2;
console.log(personalMovieDB);