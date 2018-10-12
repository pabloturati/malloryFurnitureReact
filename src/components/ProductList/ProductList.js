import React, { Component } from "react";
import { Link } from "react-router-dom";
import { productURL } from "../../project-files/projectData/projectData";
import "./ProductList.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.populateProductList = this.populateProductList.bind(this);

    this.filterResults = this.filterResults.bind(this);
    this.url = "";
    this.state = {
      loading: true,
      allProducts: null,
      filteredProducts: null
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("will mount");
    this.url = productURL;
    this.fetchProducts();
  }
  componentDidMount() {
    console.log("did mount");
  }
  componentWillReceiveProps() {
    console.log("new props");
  }
  fetchProducts() {
    fetch(this.url)
      .then(response => response.json())
      .then(allProducts => {
        const filteredProducts = this.filterResults(allProducts);
        this.setState({ allProducts, filteredProducts, loading: false });
      })
      .catch(err => console.log(err));
  }

  filterResults(products) {
    const { selector, defaultSelector, onSaleFilter } = this.props;
    let filtered = [];

    if (selector === "all" && onSaleFilter)
      filtered = products.filter(
        product => product.category === selector && product.onSale
      );
    else if (selector === "all") filtered = products;
    else if (selector === defaultSelector)
      filtered = products.filter(product => product.featured);
    else filtered = products.filter(product => product.category === selector);

    this.reportProductCount(filtered.length);
    return filtered;
  }
  reportProductCount(count) {
    this.props.amountOfProducts(count);
  }

  populateProductList() {
    return this.state.filteredProducts.map((product, key) =>
      this.createMiniature(product, key)
    );
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
    const { loading, filteredProducts } = this.state;
    console.log(this.props.onSaleFilter);
    return (
      <div className="product_list">
        {loading && <div>loading</div>}
        {filteredProducts && !loading && this.populateProductList()}
      </div>
    );
  }
}
