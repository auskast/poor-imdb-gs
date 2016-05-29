import ConnectedComponent, { MovieApp } from "containers/MovieApp";
import { shallow } from "enzyme";
import { createStore } from "redux";

import Movie from "components/Movie";
import {
  MOVIE_LOAD_MOVIE,
  MOVIE_RATE
} from "actions/movieActions";

import movies from "../fixtures/movies";

describe("containers/MovieApp", () => {
  function getSubject (props) {
    return <MovieApp {...Object.assign({}, {
      movie: movies[ 0 ]
    }, props)} />;
  }

  it("renders without an issue", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders movie when given", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    const movie = wrapper.find(Movie);
    expect(movie).to.have.length(1);
  });

  it("renders not found message when no movie given", () => {
    const subject = getSubject({
      movie: null
    });
    const wrapper = shallow(subject);
    const movie = wrapper.find(Movie);
    expect(movie).to.have.length(0);
    expect(wrapper.find(".error").text()).to.equal("Sorry, that movie doesn't exist!");
  });

  it("dispatches rate movie action on onRate handler", () => {
    const rateMovie = sinon.spy();
    const subject = getSubject({
      rateMovie
    });
    const wrapper = shallow(subject);
    const movie = wrapper.find(Movie);
    movie.prop("onRate")(5);
    expect(rateMovie.called).to.be.true;
    expect(rateMovie.getCall(0).args).to.deep.equal([ 1, 5 ]);
  });

  it("dispatches call to the loadMovie action before routing", () => {
    const store = {
      dispatch: (action) => {
        return action;
      }
    };
    const params = {
      id: 1
    };

    const action = MovieApp.gsBeforeRoute(store, params);
    expect(action.type).to.equal(MOVIE_LOAD_MOVIE);
  });

  describe("mapStateToProps", () => {
    const store = createStore(() => {
      return {
        movies: {
          movies: {
            1: { id: 1, title: "Test Movie" }
          }
        }
      };
    });

    it("derives prop values", () => {
      const subject = <ConnectedComponent store={store} params={{id: 1}} />;
      const wrapper = shallow(subject);
      expect(wrapper.prop("movie")).to.deep.equal({ id: 1, title: "Test Movie" });
    });
  });

  describe("mapDispatchToProps", () => {
    const store = createStore(() => {
      return {
        movies: {
          movies: {
            1: { id: 1, title: "Test Movie" }
          }
        }
      };
    });

    it("maps rateMovie", () => {
      const subject = <ConnectedComponent store={store} params={{id: 1}} />;
      const wrapper = shallow(subject);
      const rateMovie = wrapper.prop("rateMovie");
      expect(rateMovie).to.be.a("function");

      const action = rateMovie(1, 5);
      expect(action.type).to.equal(MOVIE_RATE);
      expect(action.id).to.equal(1);
      expect(action.rating).to.equal(5);
    });
  });
});

