'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert(`Просмотрено фильмов: ${personalMovieDB.count}. Это довольно мало.`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert(`Просмотрено фильмов: ${personalMovieDB.count}. Вы классический зритель.`);
        } else if (personalMovieDB.count > 30) {
            alert(`Просмотрено фильмов: ${personalMovieDB.count}. Вы киноман!!!`);
        } else {
            alert('Произошла ошибка!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        // Вариант 1
        // for (let i = 0; i < 3; i++) {
        //     let genre;
        //     do {
        //         genre = prompt(`Ваш любимый жанр под номером ${i + 1}:`, '');
        //     } while (genre == '' || genre == null || !isNaN(genre));
        //     personalMovieDB.genres[i] = genre;
        // }

        // Вариант 2
        let genres = prompt('Введите любимые жанры через запятую', '');
        for (let i = 0; i < 1; i++) {
            if (genres == '' || genres == null) {
                genres = prompt('Введите любимые жанры через запятую', '');
                i--;
            }
        }
        personalMovieDB.genres = genres.toLowerCase().split(', ').sort();
        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр #${i+1}: ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
