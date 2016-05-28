/* @flow */
import React, { Component } from "react";
import Helmet from "react-helmet";
import { Panel, Row } from "react-bootstrap";

import Movie from "../Movie";

import movies from "../../../test/fixtures/movies";

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
          <Movie {...movies[ 0 ]} />
        </Panel>
      </Row>
    );
  }
}

