/* @flow */
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Home from "../components/Home";

import { loadMovies } from "../actions/movieActions";
import { loadActors } from "../actions/actorActions";

export class HomeApp extends Component {
  static gsBeforeRoute ({ dispatch }/*, renderProps, query, serverProps */) {
    return Promise.all([ dispatch(loadMovies()), dispatch(loadActors()) ]);
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
  (state) => ({
    actors: Object.values(state.actors.actors),
    movies: Object.values(state.movies.movies)
  }),
  (dispatch) => bindActionCreators({ /** _INSERT_ACTION_CREATORS_ **/ }, dispatch)
)(HomeApp);
