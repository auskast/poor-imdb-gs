/* @flow */
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Alert } from "react-bootstrap";

import Movie from "../components/Movie";

import { loadMovie, rateMovie } from "../actions/movieActions";

export class MovieApp extends Component {
  static gsBeforeRoute ({ dispatch }, renderProps/*, query, serverProps */) {
    return dispatch(loadMovie(Number(renderProps.id)));
  }

  static propTypes = {
    error: PropTypes.string,
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }),

    rateMovie: PropTypes.func,
  };

  constructor (props:Object) {
    super(props);

    (this:any).handleRate = this.handleRate.bind(this);
  }

  render () {
    const { error, movie } = this.props;

    if (!movie) {
      return (
        <article>
          <Alert bsStyle="danger">
            <strong>Error Message:</strong> {error}
          </Alert>
          <span className="error">
            Sorry, that movie doesn't exist!
          </span>
        </article>
      );
    }

    return (
      <article>
        <Helmet title={movie.title} />

        <Movie {...movie} onRate={this.handleRate} />
      </article>
    );
  }

  handleRate (rating:number) {
    const { movie: { id } } = this.props;
    const { rateMovie } = this.props;

    rateMovie && rateMovie(id, rating);
  }
}

export default connect(
  (state, props) => ({
    movie: state.movies.movies[ props.params.id ],
    error: state.movies.error
  }),
  (dispatch) => bindActionCreators({ rateMovie }, dispatch)
)(MovieApp);
