/* @flow */
import _actors, { getActor } from "../../test/fixtures/actors";

export const ACTOR_LOAD_ACTOR = "ACTOR_LOAD_ACTOR";
export const ACTOR_LOAD_ACTORS = "ACTOR_LOAD_ACTORS";

export function loadActors ():Object {
  return {
    type: ACTOR_LOAD_ACTORS,
    promise: new Promise((resolve) => {
      // @TODO simulate server response
      // istanbul ignore next
      setTimeout(() => {
        resolve(_actors);
      }, 100);
    })
  };
}

export function loadActor (id:number):Object {
  return {
    type: ACTOR_LOAD_ACTOR,
    promise: new Promise((resolve, reject) => {
      // @TODO simulate server response
      // istanbul ignore next
      setTimeout(() => {
        const actor = getActor(id);
        actor ? resolve(getActor(id)) : reject(`Actor with id ${id} not found`);
      }, 100);
    })
  };
}
