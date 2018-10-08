import React, { Component } from "react";
import "./CategoryHeader.css";

export default class CategoryHeader extends Component {
  render() {
    const { titles } = this.props;
    return (
      <div className="categoryHeader">
        <h3>{titles[0]}</h3>
        <h4>{titles[1]}</h4>
      </div>
    );
  }
}
