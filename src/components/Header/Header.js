import React, { Component } from "react";
import "./Header.css";
import source from "../../project-files/images/mf-logo-white.svg";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";

export default class Header extends Component {
  render() {
    const { productLinks, legalLinks } = this.props.projectData;
    return (
      <header className="App-header">
        <Logo source={source} color="white" />
        <nav>
          <Nav items={legalLinks} domType="topNav" /> |
          <Nav items={productLinks} domType="topNav" /> |
        </nav>
        <i className="fas fa-shopping-cart" />
      </header>
    );
  }
}
