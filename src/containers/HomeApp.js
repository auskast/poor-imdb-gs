/* @flow */
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Home from "../components/Home";

import _movies from "../../test/fixtures/movies";
import _actors from "../../test/fixtures/actors";

export class HomeApp extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {
  }

  static propTypes = {
    actors: PropTypes.array.isRequired,
    movies: PropTypes.array.isRequired,
  };

  render () {
    const { actors, movies } = this.props;

    return (
      <article>
        <Helmet title="Home" />

        <Home movies={movies} actors={actors} />
      </article>
    );
  }
}

export default connect(
  (/* state */) => ({
    actors: _actors,
    movies: _movies
  }),
  (dispatch) => bindActionCreators({ /** _INSERT_ACTION_CREATORS_ **/ }, dispatch)
)(HomeApp);

