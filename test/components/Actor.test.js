import Actor from "components/Actor";
import { shallow } from "enzyme";

import actors from "../fixtures/actors";

describe("components/Actor", () => {
  function getSubject (props) {
    return <Actor {...Object.assign({}, actors[ 0 ], props)} />;
  }

  it("renders without an issue", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

