import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.populateProductList = this.populateProductList.bind(this);
  }

  populateProductList(products) {
    return products.map((product, key) => this.createMiniature(product, key));
  }

  createMiniature(product, key) {
    const { imageLink, price, _id, item } = product;
    return (
      <Link key={key} to={`/product/${_id}`}>
        <div className="miniature_container">
          <div className="img_container centered">
            <img src={imageLink} alt={item} />
          </div>
          <span className="miniature_name">{item}</span>
          <span className="miniature_price">$ {price}</span>
        </div>
      </Link>
    );
  }
  render() {
    const { products } = this.props;
    return (
      <div className="product_list">
        {products && products && this.populateProductList(products)}
      </div>
    );
  }
}
