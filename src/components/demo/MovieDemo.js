/* @flow */
import React, { Component } from "react";
import Helmet from "react-helmet";
import { Panel, Row } from "react-bootstrap";

import Movie from "../Movie";

import movie from "../../../test/fixtures/movie";

export default class MovieDemo extends Component {
  render () {
    return (
      <Row>
        <Helmet title="Movie Demo" />

        <h2>Movie</h2>

        <p>
          Component for a movie
        </p>

        <Panel header="Movie" bsStyle="primary">
          <Movie {...movie} />
        </Panel>
      </Row>
    );
  }
}

