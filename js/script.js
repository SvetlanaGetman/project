"use strict";

let numberOfFilms;

function start() {
    // numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    //
    // while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    //     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    // }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMeFilms() {
    // for (let i = 0; i < 2; i++) {
    //     let a = prompt('Один из последних просмотренных фильмов', ''),
    //         b = prompt('На сколько оцените его?', '');
    //
    //     if (a !== '' && b !== '' && a != null && b != null && a.length < 50) {
    //         personalMovieDB.movies [a] = b;
    //     } else i--;
    // }
}
rememberMeFilms ();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классическиий зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }

}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
    }
}

writeYourGenres();
