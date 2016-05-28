import ConnectedComponent, { ActorApp } from "containers/ActorApp";
import { shallow } from "enzyme";
import { createStore } from "redux";

import Actor from "components/Actor";

import actors, { getActor } from "../fixtures/actors";

describe("containers/ActorApp", () => {
  function getSubject (props) {
    return <ActorApp {...Object.assign({}, {
      actor: actors[0]
    }, props)} />;
  }

  it("renders without an issue", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders actor when given", () => {
    const subject = getSubject();
    const wrapper = shallow(subject);
    const actor = wrapper.find(Actor);
    expect(actor).to.have.length(1);
  });

  it("renders not found message when no actor given", () => {
    const subject = getSubject({
      actor: null
    });
    const wrapper = shallow(subject);
    const actor = wrapper.find(Actor);
    expect(actor).to.have.length(0);
    expect(wrapper.text()).to.equal("Sorry, that actor doesn't exist!");
  });

  describe("mapStateToProps", () => {
    const store = createStore(() => {
      return {};
    });

    it("loads actor", () => {
      const subject = <ConnectedComponent store={store} params={{id: 1}} />;
      const wrapper = shallow(subject);
      expect(wrapper.prop("actor")).to.equal(getActor(1));
    });
  });

  describe("mapDispatchToProps", () => {
    // @TODO does nothing right now
  });
});

