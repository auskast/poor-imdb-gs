/* @flow */
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Movie from "../components/Movie";

import { getMovie } from "../../test/fixtures/movies";

export class MovieApp extends Component {
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
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  };

  render () {
    const { movie } = this.props;

    if (!movie) {
      return (
        <article>
          Sorry, that movie doesn't exist!
        </article>
      );
    }

    return (
      <article>
        <Helmet title={movie.title} />

        <Movie {...movie} />
      </article>
    );
  }
}

export default connect(
  (state, props) => ({ movie: getMovie(Number(props.params.id)) }),
  (dispatch) => bindActionCreators({ /** _INSERT_ACTION_CREATORS_ **/ }, dispatch)
)(MovieApp);
