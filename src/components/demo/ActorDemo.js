/* @flow */
import React, { Component } from "react";
import Helmet from "react-helmet";
import { Panel, Row } from "react-bootstrap";

import Actor from "../Actor";

import actors from "../../../test/fixtures/actors";

export default class ActorDemo extends Component {
  render () {
    return (
      <Row>
        <Helmet title="Actor Demo" />

        <h2>Actor</h2>

        <p>
          Component for an actor
        </p>

        <Panel header="Actor" bsStyle="primary">
          <Actor {...actors[ 0 ]} />
        </Panel>
      </Row>
    );
  }
}

