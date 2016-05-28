import ConnectedComponent, { HomeApp } from "containers/HomeApp";
import { shallow } from "enzyme";
import { createStore } from "redux";

import actors from "../fixtures/actors";
import movies from "../fixtures/movies";

describe("containers/HomeApp", () => {
  it("renders without an issue", () => {
    const subject = <HomeApp movies={movies} actors={actors} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  describe("mapStateToProps", () => {
    const store = createStore(() => {
      return {};
    });

    it("loads actors and movies", () => {
      const subject = <ConnectedComponent store={store} />;
      const wrapper = shallow(subject);
      expect(wrapper.prop("actors")).to.equal(actors);
      expect(wrapper.prop("movies")).to.equal(movies);
    });
  });

  describe("mapDispatchToProps", () => {
    // @TODO does nothing right now
  });
});

