/* @flow */
import React, { Component, PropTypes } from "react";
import { ListGroupItem, PageHeader, Panel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Home extends Component {
  static propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    })).isRequired,
  };

  render () {
    const movies = this.renderMovies();
    const actors = this.renderActors();

    return (
      <div>
        <PageHeader>Welcome</PageHeader>
        {movies}
        {actors}
      </div>
    );
  }

  renderMovies () {
    const { movies } = this.props;

    const movieLinks = movies.map((movie, index) => {
      return (
        <LinkContainer key={index} to={`movies/${movie.id}`}>
          <ListGroupItem>
            {movie.title} <span style={styles.year}>({movie.year})</span>
          </ListGroupItem>
        </LinkContainer>
      );
    });

    return (
      <Panel header="Movies" bsStyle="primary">
        {movieLinks}
      </Panel>
    );
  }

  renderActors () {
    const { actors } = this.props;

    const actorLinks = actors.map((actor, index) => {
      return (
        <LinkContainer key={index} to={`actors/${actor.id}`}>
          <ListGroupItem>
            {actor.name}
          </ListGroupItem>
        </LinkContainer>
      );
    });

    return (
      <Panel header="Actors" bsStyle="primary">
        {actorLinks}
      </Panel>
    );
  }
}

const styles = {
  year: {
    color: "#aaa"
  }
};
