import ConnectedComponent, { ActorApp } from "containers/ActorApp";
import { shallow } from "enzyme";
import { createStore } from "redux";

import Actor from "components/Actor";
import {
  ACTOR_LOAD_ACTOR
} from "actions/actorActions";

import actors from "../fixtures/actors";

describe("containers/ActorApp", () => {
  function getSubject (props) {
    return <ActorApp {...Object.assign({}, {
      actor: actors[ 0 ]
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
    expect(wrapper.find(".error").text()).to.equal("Sorry, that actor doesn't exist!");
  });

  it("dispatches call to the loadActor action before routing", () => {
    const store = {
      dispatch: (action) => {
        return action;
      }
    };
    const params = {
      id: 1
    };

    const action = ActorApp.gsBeforeRoute(store, params);
    expect(action.type).to.equal(ACTOR_LOAD_ACTOR);
  });

  describe("mapStateToProps", () => {
    const store = createStore(() => {
      return {
        actors: {
          actors: {
            1: { id: 1, name: "Test Actor" }
          }
        }
      };
    });

    it("derives prop values", () => {
      const subject = <ConnectedComponent store={store} params={{id: 1}} />;
      const wrapper = shallow(subject);
      expect(wrapper.prop("actor")).to.deep.equal({ id: 1, name: "Test Actor" });
    });
  });

  describe("mapDispatchToProps", () => {
    // @TODO does nothing right now
  });
});

