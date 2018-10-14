import React, { Component } from "react";
import "./CartMiniature.css";

export default class CartMiniature extends Component {
  removeFromCart = () => {
    this.props.removeFromCart(this.props.item._id);
  };

  render() {
    const { imageLink, item, price } = this.props.item;
    return (
      <div className="cart_minuature">
        <i
          className="fas fa-times remove_item"
          onClick={() => this.removeFromCart()}
        />
        <img src={imageLink} alt={item} />
        <span className="miniature_description">{item}</span>
        <span className="maniature_price">$ {price}</span>
      </div>
    );
  }
}
