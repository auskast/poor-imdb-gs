/* @flow */
import React, { Component } from "react";
import Helmet from "react-helmet";
import { Panel, Row } from "react-bootstrap";

import UserRating from "../UserRating";

export default class UserRatingDemo extends Component {
  state:Object;

  constructor (props:Object) {
    super(props);

    this.state = {
      userRatings: [ 3, 6, 8, 9, 8, 6, 8, 10, 7, 1, 8 ]
    };

    (this:any).handleRate = this.handleRate.bind(this);
  }

  render () {
    const { userRatings } = this.state;

    return (
      <Row>
        <Helmet title="UserRating Demo" />

        <h2>User Rating</h2>

        <p>
          Component for displaying average user rating and allowing to user to pick their own rating.
        </p>

        <Panel header="No ratings yet" bsStyle="primary">
          <UserRating userRatings={[]} onRate={(rating) => alert(`user rated ${rating}`)} />
        </Panel>

        <Panel header="With some ratings" bsStyle="primary">
          <UserRating userRatings={userRatings} onRate={this.handleRate} />
        </Panel>
      </Row>
    );
  }

  handleRate (rating:number) {
    const { userRatings } = this.state;

    this.setState({
      userRatings: userRatings.concat(rating)
    });
  }
}

