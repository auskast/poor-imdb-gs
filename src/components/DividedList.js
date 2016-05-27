/* @flow */
import React, { Component, PropTypes } from "react";

export default class DividedList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    separator: PropTypes.node,
  };

  static defaultProps = {
    separator: " | "
  };

  render () {
    const { items, separator, ...rest } = this.props;

    const outputItems = items.map((item, index) => {
      const itemSpan = <span key={index}>{item}</span>;

      if (index === 0) {
        return itemSpan;
      }

      return [
        <span key={`${index}-separator`}>{separator}</span>,
        itemSpan
      ];
    });

    return (
      <div {...rest}>
        {outputItems}
      </div>
    );
  }
}

