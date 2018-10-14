import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { projectData } from "../../project-files/projectData/projectData";

//Application components
import Layout from "../Layout";

//Page Components
import Store from "../../pages/Store";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.placeInCartHandler = this.placeInCartHandler.bind(this);
    this.state = {
      itemsInCart: []
    };
  }

  placeInCartHandler(item) {
    let { itemsInCart } = this.state;
    itemsInCart.push(item);
    this.setState({ itemsInCart });
  }
  removeFromCart = id => {
    const itemsInCart = this.state.itemsInCart.filter(item => item._id !== id);
    this.setState({ itemsInCart });
  };

  render() {
    return (
      <div className="App">
        <Layout
          projectData={projectData}
          itemsInCart={this.state.itemsInCart}
          removeFromCart={id => this.removeFromCart(id)}
        >
          <Switch>
            <Route exact path="/" component={Store} />
            <Route
              exact
              path="/category/:categoryType"
              component={props => <Store {...props} />}
            />
            <Route
              exact
              path="/product/:productId"
              component={props => (
                <ProductDetail
                  placeInCart={this.placeInCartHandler}
                  {...props}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/terms" component={Terms} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
