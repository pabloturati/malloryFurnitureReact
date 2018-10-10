import React, { Component } from "react";
import "./FilterReport.css";

export default class FilterReport extends Component {
  constructor(props) {
    super(props);
    this.changeSaleFilter = this.changeSaleFilter.bind(this);
  }

  changeSaleFilter(value) {
    this.props.onFilterChange(value);
  }

  render() {
    return (
      <div className="report">
        <div>
          <input
            type="button"
            value="All Items"
            onClick={() => this.changeSaleFilter(false)}
          />
          <input
            type="button"
            value="On sale"
            onClick={() => this.changeSaleFilter(true)}
          />
        </div>
        <div>
          <span>{this.props.productAmount}</span>
          <span>Items Showing</span>
        </div>
      </div>
    );
  }
}
