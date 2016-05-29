/* @flow */
import React, { Component, PropTypes } from "react";
import { Button, Form, FormControl, FormGroup, Glyphicon } from "react-bootstrap";
import numeral from "numeral";

export default class UserRating extends Component {
  static propTypes = {
    userRatings: PropTypes.arrayOf(PropTypes.number),

    onRate: PropTypes.func
  };

  state:Object;

  constructor (props:Object) {
    super(props);

    this.state = {
      rating: 5
    };

    (this:any).handleRateChange = this.handleRateChange.bind(this);
    (this:any).handleRateSubmit = this.handleRateSubmit.bind(this);
  }

  render () {
    const { rating } = this.state;

    const userRating = this.renderUserRating();

    return (
      <Form inline>
        <Glyphicon glyph="star" style={styles.star} />
        {' '}
        <span data-qa="UserRating-userRating">
          {userRating}
        </span>
        {' '}
        <FormGroup>
          <FormControl
            type="number"
            min={1}
            max={10}
            value={rating}
            inline
            onChange={this.handleRateChange}
          />
        </FormGroup>
        {' '}
        <Button
          bsStyle="success"
          onClick={this.handleRateSubmit}
        >
          Rate
        </Button>
      </Form>
    );
  }

  renderUserRating () {
    const { userRatings } = this.props;

    if (!userRatings || !userRatings.length) {
      return "N/A";
    }

    let average = userRatings.reduce((sum, rating) => {
      return sum + rating;
    }, 0);
    average /= userRatings.length;

    return (
      <span style={styles.rating}>
        <span style={styles.average}>{numeral(average).format("0.0")}</span>
        <span style={styles.downplay}>/10</span>
        <br />
        <span style={styles.downplay}>{numeral(userRatings.length).format("0,0")}</span>
      </span>
    );
  }

  handleRateChange (event:Object) {
    this.setState({
      rating: Number(event.target.value)
    });
  }

  handleRateSubmit () {
    const { onRate } = this.props;

    onRate && onRate(this.state.rating);
  }
}

const styles = {
  star: {
    color: "gold",
    fontSize: 36,
    verticalAlign: "middle"
  },
  rating: {
    display: "inline-block",
    verticalAlign: "middle"
  },
  average: {
    fontSize: 18
  },
  downplay: {
    fontSize: 10,
    color: "#aaa"
  },
};
