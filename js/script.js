"use strict";

const numberOfFilms = +prompt('Сколько тебе лет?', '10');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB.count);

const a = prompt('Один из последних просмотренных фильмов', 'Замок');
const c = prompt('На сколько оцените его?', '5');
const b = prompt('Один из последних просмотренных фильмов', 'Замок');
const d = prompt('На сколько оцените его?', '5');

personalMovieDB.movies [a] = c;
personalMovieDB.movies [b] = d;

console.log(personalMovieDB.movies);
