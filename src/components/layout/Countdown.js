import React, { Component } from "react";
import PropTypes from "prop-types";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0,
    };
  }
  componentDidMount() {
    const { seconds } = this.props;
    this.countdown(seconds);
  }

  countdown(seconds) {
    if (seconds === -1) return;

    this.setState({ currentSecond: seconds });

    setTimeout(() => this.countdown(seconds - 1), 1000);
  }

  render() {
    const { currentSecond } = this.state;
    return <h1 id="number">{currentSecond}</h1>;
  }
}
Countdown.protoTypes = {
  seconds: PropTypes.number.isRequired,
};
export default Countdown;
