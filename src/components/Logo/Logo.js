import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  render() {
    const { source, color } = this.props;
    return (
      <Link to="/">
        <img src={source} className={`${color}_logo`} alt={`${color} Logo`} />
      </Link>
    );
  }
}
