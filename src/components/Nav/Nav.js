import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.linkList = this.linkList.bind(this);
    this.createRoute = this.linkList.bind(this);
    this.state = {
      linkItems: []
    };
  }
  componentWillMount() {
    this.adjustList();
  }
  adjustList() {
    const { items, domType } = this.props;
    const cutFrom = domType === "browse" ? 2 : 1;

    //Removes items from the navigation
    const linkItems =
      items[0].type === "product" ? items.slice(cutFrom, items.length) : items;
    this.setState({ linkItems });
  }

  linkList(navItems) {
    const { domType } = this.props;
    return navItems.map((navItem, i) => {
      const { name, type, route } = navItem;
      const activeClassName = `${domType}_${type}_selected`;
      return (
        <NavLink
          activeClassName={activeClassName}
          className={`${domType}_${type}`}
          key={i}
          to={route}
        >
          {name}
        </NavLink>
      );
    });
  }
  render() {
    const { linkItems } = this.state;

    return (
      <React.Fragment>
        {linkItems && <div>{this.linkList(this.state.linkItems)}</div>}
      </React.Fragment>
    );
  }
}
