import ConnectedComponent, { MovieApp } from "containers/MovieApp";
import { shallow } from "enzyme";
import { createStore } from "redux";

import Movie from "components/Movie";

import movies, { getMovie } from "../fixtures/movies";

describe("containers/MovieApp", () => {
  function getSubject (props) {
    return <MovieApp {...Object.assign({}, {
      movie: movies[0]
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
    expect(wrapper.text()).to.equal("Sorry, that movie doesn't exist!");
  });

  describe("mapStateToProps", () => {
    const store = createStore(() => {
      return {};
    });

    it("loads movie", () => {
      const subject = <ConnectedComponent store={store} params={{id: 1}} />;
      const wrapper = shallow(subject);
      expect(wrapper.prop("movie")).to.equal(getMovie(1));
    });
  });

  describe("mapDispatchToProps", () => {
    // @TODO does nothing right now
  });
});

