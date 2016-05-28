/* @flow */
import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

import DividedList from "./DividedList";

function formatRuntime (runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
}

export default class Movie extends Component {
  static propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    description: PropTypes.string.isRequired,
    directors: PropTypes.arrayOf(PropTypes.string).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.oneOf([ "Unrated", "G", "PG", "PG-13", "R", "NC-17", "X" ]).isRequired,
    runtime: PropTypes.number.isRequired, // minutes
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  };

  render () {
    const header = this.renderHeader();
    const description = this.renderDescription();
    const cast = this.renderCast();

    return (
      <div>
        {header}
        {description}
        {cast}
      </div>
    );
  }

  renderHeader () {
    const { genres, rating, runtime, title, year } = this.props;

    return (
      <div data-qa="Movie-header" style={styles.header}>
        <h1>
          {title} <span style={styles.year}>({year})</span>
        </h1>
        <div style={styles.subheader}>
          <DividedList items={[rating, formatRuntime(runtime), genres.join(", ")]} />
        </div>
      </div>
    );
  }

  renderDescription () {
    const { description, directors } = this.props;

    return (
      <div data-qa="Movie-description" style={styles.body}>
        <p>{description}</p>
        <p style={styles.crew}>
          <strong>Directors:</strong> {directors.join(", ")}
        </p>
      </div>
    );
  }

  renderCast () {
    const { cast } = this.props;

    const castMembers = cast.map((castMember, index) => {
      const name = <Link to={`/actors/${castMember.id}`}>{castMember.name}</Link>;
      const roles = <DividedList items={castMember.roles} separator=" / " />;

      return (
        <tr key={index}>
          <td>{name}</td>
          <td>...</td>
          <td>{roles}</td>
        </tr>
      );
    });

    return (
      <div data-qa="Movie-cast" style={styles.cast}>
        <h3>Cast</h3>
        <table className="table-striped" style={styles.castTable}>
          <tbody>
          {castMembers}
          </tbody>
        </table>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 15
  },
  year: {
    color: "#c0c0c0",
    fontSize: 24,
  },
  subheader: {
    color: "#c0c0c0",
    fontSize: 12
  },
  crew: {
    margin: 0
  },
  body: {
    backgroundColor: "#eee",
    borderBottom: "1px solid #ccc",
    padding: 15
  },
  cast: {
    padding: 15
  },
  castTable: {
    width: "100%"
  },
};
