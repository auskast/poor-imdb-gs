import ConnectedComponent, { HomeApp } from "containers/HomeApp";
import { shallow } from "enzyme";
import { createStore } from "redux";

import {
  MOVIE_LOAD_MOVIES
} from "actions/movieActions";
import {
  ACTOR_LOAD_ACTORS
} from "actions/actorActions";

import actors from "../fixtures/actors";
import movies from "../fixtures/movies";

describe("containers/HomeApp", () => {
  it("renders without an issue", () => {
    const subject = <HomeApp movies={movies} actors={actors} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("dispatches call to the loadMovies and loadActors actions before routing", () => {
    const store = {
      dispatch: sinon.spy()
    };

    HomeApp.gsBeforeRoute(store);
    expect(store.dispatch.called).to.be.true;
    expect(store.dispatch.callCount).to.equal(2);
    expect(store.dispatch.getCall(0).args[ 0 ].type).to.equal(MOVIE_LOAD_MOVIES);
    expect(store.dispatch.getCall(1).args[ 0 ].type).to.equal(ACTOR_LOAD_ACTORS);
  });

  describe("mapStateToProps", () => {
    const store = createStore(() => {
      return {
        movies: { movies },
        actors: { actors },
      };
    });

    it("loads actors and movies", () => {
      const subject = <ConnectedComponent store={store} />;
      const wrapper = shallow(subject);
      expect(wrapper.prop("actors")).to.deep.equal(actors);
      expect(wrapper.prop("movies")).to.deep.equal(movies);
    });
  });

  describe("mapDispatchToProps", () => {
    // @TODO does nothing right now
  });
});

