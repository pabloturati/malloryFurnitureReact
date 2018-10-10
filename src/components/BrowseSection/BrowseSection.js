import React, { Component } from "react";
import "./BrowseSection.css";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

export default class BrowseSection extends Component {
  render() {
    const titles = ["Browse by Categories", "Explore by furniture type"];
    const { items } = this.props;
    return (
      <div className="browse_section">
        <Link to="/category/all">All</Link>
        <CategoryHeader titles={titles} />
        <div className="browse_panel">
          <Nav items={items} domType="browse" />
        </div>
      </div>
    );
  }
}
