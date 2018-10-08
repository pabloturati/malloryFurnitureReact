import React, { Component } from "react";
import { Link } from "react-router-dom";
import { productListURL } from "../../project-files/projectData/projectData";
import "./ProductList.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.generateProductList = this.generateProductList.bind(this);
    this.generateMiniature = this.generateMiniature.bind(this);
    this.url = "";
    this.state = {
      loading: true,
      products: null
    };
  }

  componentDidMount() {
    this.url = productListURL;
    this.fetchProducts();
  }

  fetchProducts() {
    fetch(this.url)
      .then(response => response.json())
      .then(products => this.setState({ products, loading: false }))
      .catch(err => console.log(err));
  }

  generateProductList() {
    return this.state.products.map((product, key) =>
      this.generateMiniature(product, key)
    );
  }

  generateMiniature(product, key) {
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
    const { loading, products } = this.state;
    return (
      <div className="product_list">
        {loading && <div>loading</div>}
        {products && !loading && this.generateProductList()}
      </div>
    );
  }
}
