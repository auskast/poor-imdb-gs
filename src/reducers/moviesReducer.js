/* @flow */
import Immutable from "seamless-immutable";

import {
  MOVIE_LOAD_MOVIE,
  MOVIE_LOAD_MOVIES,
  MOVIE_RATE
} from "../actions/movieActions";

import { arrayToMap } from "../lib/utils";

const INITIAL_STATE = {};

export default (state:Object = INITIAL_STATE, action:Object):Object => {
  switch (action.type) {
    case MOVIE_LOAD_MOVIE:
      return Immutable({ movies: arrayToMap([ action.value ], "id") });
    case MOVIE_LOAD_MOVIES:
      return Immutable({ movies: arrayToMap(action.value, "id") });
    case `${MOVIE_LOAD_MOVIE}_FAILURE`:
    case `${MOVIE_LOAD_MOVIES}_FAILURE`:
      return Immutable({
        movies: {},
        error: action.error
      });
    case MOVIE_RATE:
      return state.updateIn([ "movies", action.id, "userRatings" ], (ratings = []) => {
        return ratings.concat(action.rating);
      });
    default:
      return Immutable.isImmutable(state) ? state : Immutable(state);
  }
};
