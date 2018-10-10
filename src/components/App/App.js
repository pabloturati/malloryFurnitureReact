import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { projectData } from "../../project-files/projectData/projectData";

//Application components
import Layout from "../Layout";

//Page Components
import Store from "../../pages/Store";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
// import Category from "../../pages/Category";

class App extends Component {
  constructor(props) {
    super(props);
    this.sectionData = projectData.productLinks;
    this.sectionName = "Featured";
  }

  render() {
    return (
      <div className="App">
        <Layout projectData={projectData}>
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <Store
                  sectionData={this.sectionData}
                  name={this.sectionName}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/category/:categoryType"
              component={props => (
                <Store
                  sectionData={this.sectionData}
                  name={this.sectionName}
                  {...props}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/terms" component={Terms} />
            {/* <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/category/:categoryType" component={Category} /> */}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
