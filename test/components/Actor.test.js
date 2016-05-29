import Actor from "components/Actor";
import { shallow } from "enzyme";
import { Link } from "react-router";

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

  describe("filmography", () => {
    it("renders filmography as table", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const rows = wrapper.find("[data-qa='Actor-filmography']").find("table").find("tr");
      expect(rows).to.have.length(actors[ 0 ].filmography.length);
    });

    it("renders film title as link", () => {
      const subject = getSubject({
        filmography: [
          { id: 1, title: "Test Movie", year: 2016, roles: [ "Test Role" ] }
        ]
      });
      const wrapper = shallow(subject);
      const cols = wrapper.find("[data-qa='Actor-filmography']").find("table").find("tr").find("td");
      expect(cols).to.have.length(1);
      const title = cols.at(0).find(Link);
      expect(title.prop("to")).to.equal("/movies/1");
      expect(title.find("strong").text()).to.equal("Test Movie");
    });
  });
});

