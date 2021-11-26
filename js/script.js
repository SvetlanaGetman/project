"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB.count);

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a !== '' && b !== '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies [a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классическиий зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB.movies);
