import UserRating from "components/UserRating";
import { shallow } from "enzyme";
import { Button, FormControl } from "react-bootstrap";

describe("components/UserRating", () => {
  function getSubject (props) {
    return <UserRating {...Object.assign({}, {
      userRatings: [ 3, 5, 9 ]
    }, props)} />;
  }

  it("renders without an issue", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  context("with no existing ratings", () => {
    const subject = getSubject({
      userRatings: null
    });

    it("renders user rating as 'N/A'", () => {
      const wrapper = shallow(subject);
      expect(wrapper.find("[data-qa='UserRating-userRating']").text()).to.equal("N/A");
    });
  });

  context("with existing ratings", () => {
    const subject = getSubject();

    it("renders user rating as average rounded to tenths /10, with count", () => {
      const wrapper = shallow(subject);
      expect(wrapper.find("[data-qa='UserRating-userRating']").text()).to.equal("5.7/103");
    });
  });

  describe("user rating", () => {
    it("starts with initial rating of 5", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const input = wrapper.find(FormControl);
      expect(wrapper.state("rating")).to.equal(5);
      expect(input.prop("value")).to.equal(5);
    });

    it("sets state as a number on change", () => {
      const subject = getSubject();
      const wrapper = shallow(subject);
      const input = wrapper.find(FormControl);
      expect(wrapper.state("rating")).to.equal(5);
      input.simulate("change", { target: { value: "8" } });
      expect(wrapper.state("rating")).to.equal(8);
    });

    it("calls onRate handler on rate button click", () => {
      const onRate = sinon.spy();
      const subject = getSubject({
        onRate
      });
      const wrapper = shallow(subject);
      const button = wrapper.find(Button);
      button.simulate("click");
      expect(onRate.called).to.be.true;
      expect(onRate.getCall(0).args[ 0 ]).to.equal(5);
    });
  });
});

