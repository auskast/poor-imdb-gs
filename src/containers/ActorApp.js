/* @flow */
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Alert } from "react-bootstrap";

import Actor from "../components/Actor";

import { loadActor } from "../actions/actorActions";

export class ActorApp extends Component {
  static gsBeforeRoute ({ dispatch }, renderProps/*, query, serverProps */) {
    return dispatch(loadActor(Number(renderProps.id)));
  }

  static propTypes = {
    actor: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    error: PropTypes.string,
  };

  render () {
    const { actor, error } = this.props;

    if (!actor) {
      return (
        <article>
          <Alert bsStyle="danger">
            <strong>Error message:</strong> {error}
          </Alert>
          <span className="error">
            Sorry, that actor doesn't exist!
          </span>
        </article>
      );
    }

    return (
      <article>
        <Helmet title={actor.name} />

        <Actor {...actor} />
      </article>
    );
  }
}

export default connect(
  (state, props) => ({
    actor: state.actors.actors[ props.params.id ],
    error: state.actors.error
  }),
  (dispatch) => bindActionCreators({ /** _INSERT_ACTION_CREATORS_ **/ }, dispatch)
)(ActorApp);
