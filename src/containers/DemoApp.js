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
        <article>
          <Grid fluid>
            <Row>
              <Link to="/demos">&laquo; Back to Demos</Link>
              <hr />
            </Row>
            {children}
          </Grid>
        </article>
      );
    }

    return (
      <article>
        <Helmet title="Component Demos" />

        <PageHeader>Component Demos</PageHeader>

        <Panel header="Components" bsStyle="primary">
          <LinkContainer to="demos/user-rating"><ListGroupItem>UserRating</ListGroupItem></LinkContainer>
          <LinkContainer to="demos/movie"><ListGroupItem>Movie</ListGroupItem></LinkContainer>
          <LinkContainer to="demos/actor"><ListGroupItem>Actor</ListGroupItem></LinkContainer>
        </Panel>
      </article>
    );
  }
}
