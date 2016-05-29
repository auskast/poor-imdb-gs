/* @flow */
import React, { Component } from "react";
import Helmet from "react-helmet";

export default class NoMatchApp extends Component {
  render () {
    return (
      <article>
        <Helmet title="Not Found" />

        <h2>404 - Not Found</h2>
      </article>
    );
  }
}
