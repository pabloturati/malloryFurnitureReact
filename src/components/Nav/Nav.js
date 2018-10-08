import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.linkList = this.linkList.bind(this);
    this.createRoute = this.linkList.bind(this);
    this.state = {
      linkItems: this.props.projectData
    };
  }

  linkList(navItems) {
    return navItems.map((navItem, i) => {
      const { name, type, route } = navItem;
      const activeClassName = `${type}_selected`;
      return (
        <NavLink
          activeClassName={activeClassName}
          className={type}
          key={i}
          to={route}
        >
          {name}
        </NavLink>
      );
    });
  }

  render() {
    const { legalLinks, productLinks } = this.state.linkItems;
    const navProductLinks = productLinks.slice(1, productLinks.length - 1); //Removes "Featured Products from Nav"
    return (
      <nav>
        <div>{this.linkList(legalLinks)}</div> |
        <div>{this.linkList(navProductLinks)}</div> |
      </nav>
    );
  }
}
