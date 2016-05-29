import Immutable from "seamless-immutable";

import reducer from "reducers/moviesReducer";

import {
  MOVIE_LOAD_MOVIE,
  MOVIE_LOAD_MOVIES,
  MOVIE_RATE
} from "actions/movieActions";

describe("reducers/moviesReducer", () => {
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

  describe(MOVIE_LOAD_MOVIE, () => {
    it("creates map of movies by id", () => {
      const initial = void 0;
      const action = {
        type: MOVIE_LOAD_MOVIE,
        value: { id: 1, title: "Test Movie 1" }
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        movies: {
          1: { id: 1, title: "Test Movie 1" }
        }
      });
    });
  });

  describe(MOVIE_LOAD_MOVIES, () => {
    it("creates map of movies by id", () => {
      const initial = void 0;
      const action = {
        type: MOVIE_LOAD_MOVIES,
        value: [
          { id: 1, title: "Test Movie 1" },
          { id: 2, title: "Test Movie 2" },
        ]
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        movies: {
          1: { id: 1, title: "Test Movie 1" },
          2: { id: 2, title: "Test Movie 2" },
        }
      });
    });
  });

  describe(`${MOVIE_LOAD_MOVIE}_FAILURE`, () => {
    it("sets error state", () => {
      const initial = void 0;
      const action = {
        type: `${MOVIE_LOAD_MOVIE}_FAILURE`,
        error: "error!"
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        movies: {},
        error: "error!"
      });
    });
  });

  describe(`${MOVIE_LOAD_MOVIES}_FAILURE`, () => {
    it("sets error state", () => {
      const initial = void 0;
      const action = {
        type: `${MOVIE_LOAD_MOVIES}_FAILURE`,
        error: "error!"
      };
      const next = reducer(initial, action);

      expect(next).to.deep.equal({
        movies: {},
        error: "error!"
      });
    });
  });

  describe(MOVIE_RATE, () => {
    context("when no ratings yet", () => {
      it("adds new rating", () => {
        const initial = Immutable({
          movies: {
            1: { id: 1, title: "Test Movie 1" },
            2: { id: 2, title: "Test Movie 2" },
          }
        });
        const action = {
          type: MOVIE_RATE,
          id: 1,
          rating: 5
        };
        const next = reducer(initial, action);

        expect(next).to.deep.equal({
          movies: {
            1: { id: 1, title: "Test Movie 1", userRatings: [ 5 ] },
            2: { id: 2, title: "Test Movie 2" },
          }
        });
      });
    });

    context("when ratings exist", () => {
      it("appends new rating", () => {
        const initial = Immutable({
          movies: {
            1: { id: 1, title: "Test Movie 1", userRatings: [ 8 ] },
            2: { id: 2, title: "Test Movie 2" },
          }
        });
        const action = {
          type: MOVIE_RATE,
          id: 1,
          rating: 5
        };
        const next = reducer(initial, action);

        expect(next).to.deep.equal({
          movies: {
            1: { id: 1, title: "Test Movie 1", userRatings: [ 8, 5 ] },
            2: { id: 2, title: "Test Movie 2" },
          }
        });
      });
    });
  });
});
