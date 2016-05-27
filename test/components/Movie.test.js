import Movie from "components/Movie";
import { shallow } from "enzyme";

import { Link } from "react-router";
import DividedList from "components/DividedList";

import movie from "../fixtures/movie";

describe("components/Movie", () => {
  function getSubject (props) {
    return <Movie {...Object.assign({}, movie, props)} />;
  }

  it("renders without an issue", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  describe("header", () => {
    it("renders title and year", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const title = wrapper.find("[data-qa='Movie-header']").find("h1");
      expect(title.text()).to.equal("Captain America: Civil War (2016)");
    });

    it("renders sub title with rating, runtime, and genres", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const subtitle = wrapper.find("[data-qa='Movie-header']").find(DividedList);
      expect(subtitle.prop("items")).to.deep.equal([ "PG-13", "2h 27m", "Action, Adventure, Sci-Fi" ]);
    });
  });

  describe("description", () => {
    it("renders directors", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const directors = wrapper.find("[data-qa='Movie-description']").find("p").at(1);
      expect(directors.text()).to.equal("Directors: Anthony Russo, Joe Russo");
    });
  });

  describe("cast", () => {
    it("renders cast members as table", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const rows = wrapper.find("[data-qa='Movie-cast']").find("table").find("tr");
      expect(rows).to.have.length(movie.cast.length);
    });

    it("renders cast member name as link when url given", () => {
      const subject = getSubject({
        cast: [
          { actor: "Test Actor", roles: [ "Test Role" ], url: "test-url" }
        ]
      });
      const wrapper = shallow(subject);
      const cols = wrapper.find("[data-qa='Movie-cast']").find("table").find("tr").find("td");
      expect(cols).to.have.length(3);
      const name = cols.at(0).childAt(0);
      expect(name.is(Link)).to.equal(true);
      expect(name.prop("to")).to.equal("test-url");
      expect(name.prop("children")).to.equal("Test Actor");
    });

    it("renders cast member name as text when no url given", () => {
      const subject = getSubject({
        cast: [
          { actor: "Test Actor", roles: [ "Test Role" ] }
        ]
      });
      const wrapper = shallow(subject);
      const cols = wrapper.find("[data-qa='Movie-cast']").find("table").find("tr").find("td");
      expect(cols).to.have.length(3);
      const name = cols.at(0).childAt(0);
      expect(name.is(Link)).to.equal(false);
      expect(name.text()).to.equal("Test Actor");
    });
  });
});

