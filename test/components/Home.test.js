import Home from "components/Home";
import { shallow } from "enzyme";

import movies from "../fixtures/movies";
import actors from "../fixtures/actors";

describe("components/Home", () => {
  it("renders without an issue", () => {
    const subject = <Home movies={movies} actors={actors} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

