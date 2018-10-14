import React, { Component } from "react";
import "./Cart.css";
import CartMiniature from "../CartMiniature/CartMiniature";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.hideCart = this.hideCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  hideCart() {
    this.props.hideCart();
  }

  removeFromCart = id => {
    this.props.removeFromCart(id);
  };

  render() {
    const { cartStatus, itemsInCart } = this.props;

    return (
      <div className={`cart_container ${cartStatus}`}>
        <div className="cart_header">
          <i className="fas fa-times close_modal" onClick={this.hideCart} />
          <span>Your Cart</span>
        </div>
        <div className="cart_content">
          {itemsInCart.map(item => (
            <CartMiniature
              key={item._id}
              item={item}
              removeFromCart={id => this.removeFromCart(id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
