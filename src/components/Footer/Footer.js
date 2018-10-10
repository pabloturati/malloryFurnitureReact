import React, { Component } from "react";
import "./Footer.css";
import source from "../../project-files/images/mf-logo-black.svg";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default class Footer extends Component {
  render() {
    const { productLinks, legalLinks } = this.props.projectData;
    return (
      <footer>
        <Logo source={source} color="black" />
        <div>
          <div className="bottomNav_container">
            <div className="linkSection">
              <h3>Company</h3>
              <Nav items={legalLinks} domType="bottomNav" />
            </div>
            <div className="linkSection">
              <h3>Categories</h3>
              <Nav items={productLinks} domType="bottomNav" />
            </div>
          </div>
          <div className="social_container">
            <h3>Social</h3>
            <div>
              <i className="fab fa-instagram" />
              <i className="fab fa-twitter" />
              <i className="fab fa-pinterest" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
