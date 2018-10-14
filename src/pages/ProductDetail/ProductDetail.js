import React, { Component } from "react";
import { baseURL } from "../../project-files/projectData/projectData";
import Loader from "../../components/Loader";
import "./ProductDetail.css";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.placeInCartHandler = this.placeInCartHandler.bind(this);
    this.state = {
      productDetail: {},
      loading: true
    };
  }

  componentWillMount() {
    this.fetchProduct();
  }

  placeInCart(itemId) {}
  fetchProduct() {
    const productId = this.props.match.params.productId;
    fetch(baseURL + "/products/" + productId)
      .then(response => response.json())
      .then(productDetail => {
        this.setState({ productDetail, loading: false });
      })
      .catch(err => console.log(err));
  }
  placeInCartHandler(item) {
    this.props.placeInCart(item);
  }

  render() {
    const { productDetail, loading } = this.state;
    const {
      condition,
      price,
      width,
      length,
      height,
      item,
      imageLink
    } = productDetail;

    return (
      <React.Fragment>
        {loading && <Loader />}
        {!loading &&
          productDetail && (
            <div className="productDetail_component">
              <img src={imageLink} alt={imageLink} />
              <div className="productDetail">
                <h2>{item}</h2>
                <span>$ {price}</span>
                <div>
                  <div className="specifics">
                    <span className="specific_titles">Condition</span>
                    <span>{condition}</span>
                  </div>
                  <div className="specifics">
                    <span className="specific_titles">Measurements</span>
                    <span>
                      W:
                      {width} L:
                      {length} H:
                      {height}
                    </span>
                  </div>
                  <span
                    className="addToCart"
                    onClick={() => this.placeInCartHandler(productDetail)}
                  >
                    Add to Cart
                  </span>
                </div>
              </div>
            </div>
          )}
      </React.Fragment>
    );
  }
}
