/* @flow */
import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import { Grid, Navbar } from "react-bootstrap";
import { Link } from "react-router";

import config from "../config/application";

export default class MasterLayout extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    const header = this.renderHeader();

    return (
      <Grid>
        <Helmet {...config.head} />

        {header}

        {this.props.children}
      </Grid>
    );
  }

  renderHeader () {
    return (
      <header>
        <Navbar fixedTop inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Poor Man&apos;s IMDB</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </header>
    );
  }
}

