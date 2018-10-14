import React, { Component } from "react";
import "./FilterReport.css";

export default class FilterReport extends Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(value) {
    this.props.onFilterChange(value);
  }

  render() {
    return (
      <div className="report">
        <div>
          <input
            type="button"
            value="All Items"
            onClick={() => this.onFilterChange(false)}
          />
          <input
            type="button"
            value="On sale"
            onClick={() => this.onFilterChange(true)}
          />
        </div>
        <div>
          <span>{this.props.productCount}</span>
          <span>Items Showing</span>
        </div>
      </div>
    );
  }
}
