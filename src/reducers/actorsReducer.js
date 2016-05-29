/* @flow */
import Immutable from "seamless-immutable";

import {
  ACTOR_LOAD_ACTOR,
  ACTOR_LOAD_ACTORS,
} from "../actions/actorActions";

import { arrayToMap } from "../lib/utils";

const INITIAL_STATE = {};

export default (state:Object = INITIAL_STATE, action:Object):Object => {
  switch (action.type) {
    case ACTOR_LOAD_ACTOR:
      return Immutable({ actors: arrayToMap([ action.value ], "id") });
    case ACTOR_LOAD_ACTORS:
      return Immutable({ actors: arrayToMap(action.value, "id") });
    case `${ACTOR_LOAD_ACTOR}_FAILURE`:
    case `${ACTOR_LOAD_ACTORS}_FAILURE`:
      return Immutable({
        actors: {},
        error: action.error
      });
    default:
      return Immutable.isImmutable(state) ? state : Immutable(state);
  }
};

