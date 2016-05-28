/* @flow */
import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import moment from "moment";

import DividedList from "./DividedList";

export default class Actor extends Component {
  static propTypes = {
    birthDate: PropTypes.string.isRequired,
    birthPlace: PropTypes.string.isRequired,
    filmography: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    })),
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render () {
    const header = this.renderHeader();
    const filmography = this.renderFilmography();

    return (
      <div>
        {header}
        {filmography}
      </div>
    );
  }

  renderHeader () {
    const { birthDate, birthPlace, fullName, name } = this.props;

    return (
      <div data-qa="Actor-header" style={styles.header}>
        <h1>{name}</h1>
        <hr />
        <p>
          <strong>Born:</strong> {fullName}
          <br />
          {moment(birthDate).format("MMMM D, YYYY")} in {birthPlace}
        </p>
      </div>
    );
  }

  renderFilmography () {
    const { filmography } = this.props;

    const films = filmography.map((film, index) => {
      const title = <Link to={`movies/${film.id}`}><strong>{film.title}</strong></Link>;
      const roles = <DividedList items={film.roles} separator=" / " />;

      return (
        <tr key={index}>
          <td>
            <div style={styles.title}>
              {title}
              <br />
              {roles}
            </div>
            <div style={styles.year}>
              {film.year}
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div data-qa="Actor-filmography" style={styles.filmography}>
        <h3>Filmography</h3>
        <table className="table-striped" style={styles.table}>
          <tbody>
          {films}
          </tbody>
        </table>
      </div>
    );
  }
}

const styles = {
  header: {
    borderBottom: "1px solid #ccc",
    padding: 15
  },
  filmography: {
    padding: 15
  },
  title: {
    float: "left"
  },
  year: {
    float: "right"
  },
  table: {
    width: "100%"
  }
};
