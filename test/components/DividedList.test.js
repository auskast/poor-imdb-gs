import DividedList from "components/DividedList";
import { shallow } from "enzyme";

describe("components/DividedList", () => {
  function getSubject (props) {
    return <DividedList {...Object.assign({}, { items: [] }, props)} />;
  }

  it("renders without an issue", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders items with default separator", () => {
    const subject = getSubject({ items: [ "abc", "123" ] });
    const wrapper = shallow(subject);
    expect(wrapper.text()).to.equal("abc | 123");
  });

  it("renders items with given text separator", () => {
    const subject = getSubject({ items: [ "abc", "123" ], separator: " / " });
    const wrapper = shallow(subject);
    expect(wrapper.text()).to.equal("abc / 123");
  });

  it("renders items with given element separator", () => {
    const subject = getSubject({ items: [ "abc", "123" ], separator: <span> SPAN </span> });
    const wrapper = shallow(subject);
    expect(wrapper.text()).to.equal("abc SPAN 123");
  });
});

