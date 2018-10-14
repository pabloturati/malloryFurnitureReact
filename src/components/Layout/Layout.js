import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default class Layout extends Component {
  removeFromCart = id => {
    this.props.removeFromCart(id);
  };

  render() {
    return (
      <div className="layout">
        <Header
          projectData={this.props.projectData}
          itemsInCart={this.props.itemsInCart}
          removeFromCart={id => this.removeFromCart(id)}
        />
        <main className="container">
          <div className="row">
            <div className="col-12">{this.props.children}</div>
          </div>
        </main>
        <Footer projectData={this.props.projectData} />
      </div>
    );
  }
}
