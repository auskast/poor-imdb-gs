/* @flow */
import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import { Grid } from "react-bootstrap";
import config from "../config/application";

export default class MasterLayout extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    return (
      <Grid>
        <Helmet {...config.head} />
        {this.props.children}
      </Grid>
    );
  }
}

