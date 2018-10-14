import React, { Component } from "react";
import "./Header.css";
import source from "../../project-files/images/mf-logo-white.svg";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleShoppingCart = this.toggleShoppingCart.bind(this);
    this.hideCartHandler = this.hideCartHandler.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.state = {
      cartStatus: "",
      showCart: false
    };
  }
  hideCartHandler() {
    this.setState({ cartStatus: "hideCart", showCart: false });
  }

  toggleShoppingCart() {
    const showCart = !this.state.showCart;
    const cartStatus = showCart ? "showCart" : "hideCart";
    this.setState({ cartStatus, showCart });
  }
  removeFromCart = id => {
    this.props.removeFromCart(id);
  };

  render() {
    const { productLinks, legalLinks } = this.props.projectData;
    return (
      <header className="App-header">
        <Logo source={source} color="white" />
        <nav>
          <Nav items={legalLinks} domType="topNav" /> |
          <Nav items={productLinks} domType="topNav" /> |
        </nav>
        <div className="cartIcon" onClick={this.toggleShoppingCart}>
          <i className="fas fa-shopping-cart" />
        </div>
        <Cart
          cartStatus={this.state.cartStatus}
          hideCart={this.hideCartHandler}
          itemsInCart={this.props.itemsInCart}
          removeFromCart={id => this.removeFromCart(id)}
        />
      </header>
    );
  }
}
