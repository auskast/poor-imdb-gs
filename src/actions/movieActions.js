/* @flow */
import _movies, { getMovie } from "../../test/fixtures/movies";

export const MOVIE_LOAD_MOVIE = "MOVIE_LOAD_MOVIE";
export const MOVIE_LOAD_MOVIES = "MOVIE_LOAD_MOVIES";
export const MOVIE_RATE = "MOVIE_RATE";

export function loadMovies ():Object {
  return {
    type: MOVIE_LOAD_MOVIES,
    promise: new Promise((resolve) => {
      // @TODO simulate server response
      // istanbul ignore next
      setTimeout(() => {
        resolve(_movies);
      }, 100);
    })
  };
}

export function loadMovie (id:number):Object {
  return {
    type: MOVIE_LOAD_MOVIE,
    promise: new Promise((resolve, reject) => {
      // @TODO simulate server response
      // istanbul ignore next
      setTimeout(() => {
        const movie = getMovie(id);
        movie ? resolve(getMovie(id)) : reject(`Movie with id ${id} not Found`);
      }, 100);
    })
  };
}

export function rateMovie (id:number, rating:number):Object {
  return {
    type: MOVIE_RATE,
    id,
    rating
  };
}
