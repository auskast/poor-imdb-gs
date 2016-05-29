import Immutable from "seamless-immutable";

import reducer from "reducers/actorsReducer";

import {
  ACTOR_LOAD_ACTOR,
  ACTOR_LOAD_ACTORS,
} from "actions/actorActions";

describe("reducers/actorsReducer", () => {
  it("creates initial state", () => {
    const initial = void 0;
    const action = {};
    const next = reducer(initial, action);

    expect(next).to.deep.equal({});
    expect(Immutable.isImmutable(next)).to.be.true;
  });

  describe("unhandled action", () => {
    context("when state is immutable", () => {
      it("returns original state", () => {
        const initial = Immutable({ "test": 123 });
        const action = {
          type: "RANDOM_ACTION_123"
        };
        const next = reducer(initial, action);

        expect(next).to.equal(initial);
      });
    });

    context("when state is not yet immutable", () => {
      it("returns immutable copy of state", () => {
        const initial = { "test": 123 };
        const action = {
          type: "RANDOM_ACTION_123"
        };
        const next = reducer(initial, action);

        expect(next).not.to.equal(initial);
        expect(next).to.deep.equal(initial);
        expect(Immutable.isImmutable(next)).to.be.true;
      });
    });
  });

  describe(ACTOR_LOAD_ACTOR, () => {
    it("creates map of actors by id", () => {
      const initial = void 0;
      const action = {
        type: ACTOR_LOAD_ACTOR,
        value: { id: 1, name: "Test Actor 1" }
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        actors: {
          1: { id: 1, name: "Test Actor 1" }
        }
      });
    });
  });

  describe(ACTOR_LOAD_ACTORS, () => {
    it("creates map of actors by id", () => {
      const initial = void 0;
      const action = {
        type: ACTOR_LOAD_ACTORS,
        value: [
          { id: 1, name: "Test Actor 1" },
          { id: 2, name: "Test Actor 2" },
        ]
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        actors: {
          1: { id: 1, name: "Test Actor 1" },
          2: { id: 2, name: "Test Actor 2" },
        }
      });
    });
  });

  describe(`${ACTOR_LOAD_ACTOR}_FAILURE`, () => {
    it("sets error state", () => {
      const initial = void 0;
      const action = {
        type: `${ACTOR_LOAD_ACTOR}_FAILURE`,
        error: "error!"
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        actors: {},
        error: "error!"
      });
    });
  });

  describe(`${ACTOR_LOAD_ACTORS}_FAILURE`, () => {
    it("sets error state", () => {
      const initial = void 0;
      const action = {
        type: `${ACTOR_LOAD_ACTORS}_FAILURE`,
        error: "error!"
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        actors: {},
        error: "error!"
      });
    });
  });
});
