/* @flow */
import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router";
import { Grid, ListGroupItem, PageHeader, Panel, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class DemoApp extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    const { children } = this.props;

    if (children) {
      return (
        <Grid fluid>
          <Row>
            <Link to="/demos">&laquo; Back to Demos</Link>
            <hr />
          </Row>
          {children}
        </Grid>
      );
    }

    return (
      <Grid fluid>
        <Helmet title="Component Demos" />

        <Row>
          <PageHeader>Component Demos</PageHeader>

          <Panel header="Components" bsStyle="primary">
            <LinkContainer to="demos/movie"><ListGroupItem>Movie</ListGroupItem></LinkContainer>
          </Panel>
        </Row>
      </Grid>
    );
  }
}