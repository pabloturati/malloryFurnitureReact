import React, { Component } from "react";
import "./Header.css";
import logo from "../../project-files/images/mf-logo-white.svg";
import Nav from "../Nav/Nav";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <Nav projectData={this.props.projectData} />
        <i className="fas fa-shopping-cart" />
      </header>
    );
  }
}

const Logo = () => <img src={logo} className="white_logo" alt="White Logo" />;
