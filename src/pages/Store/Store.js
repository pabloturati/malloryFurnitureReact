import React, { Component } from "react";

//Components
import Hero from "../../components/Hero";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import ProductList from "../../components/ProductList/ProductList";
import BrowseSection from "../../components/BrowseSection/BrowseSection";
import FilterReport from "../../components/FilterReport/FilterReport";
import Loader from "../../components/Loader/Loader";

// ProjectConfig
import { defaultLandingSelector } from "../../project-files/projectData/projectData";
import { baseURL } from "../../project-files/projectData/projectData";
import { projectData } from "../../project-files/projectData/projectData";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = {
      //BrowserSection
      productCount: 0,
      onSaleFilter: false,

      //Product page config
      loading: true,
      produts: [],

      sectionSelector: null
    };
  }
  componentWillMount() {
    const sectionSelector = this.setSectionSelector(); //From params
    const section = this.setSection(sectionSelector); //From data

    this.setState({
      sectionSelector,
      section
    });
    const queryURL = this.createBasicQuery(sectionSelector);
    this.fetchProducts(queryURL);
  }

  createBasicQuery(selector) {
    if (selector === "featured" || selector === "all") {
      return baseURL + `/products`;
    }
    return baseURL + `/products?category=${selector}`;
  }

  //Change handlers
  handleFilterChange(value) {
    this.setState({ onSaleFilter: value });
    const queryURL = this.createBasicQuery(this.state.sectionSelector);
    this.fetchProducts(queryURL);
  }

  featuredFilter(products) {
    return products.filter(product => product.featured);
  }
  onSaleFilter(products) {
    return products.filter(product => product.onSale);
  }
  productCount(products) {
    let productCount = 0;
    products.forEach(product => productCount++);
    return productCount;
  }

  fetchProducts(queryURL) {
    fetch(queryURL)
      .then(response => response.json())
      .then(products => {
        if (this.sectionSelector === "featured")
          products = this.featuredFilter(products);
        if (this.state.onSaleFilter) products = this.onSaleFilter(products);

        const productCount = this.productCount(products);
        this.setState({
          productCount,
          products,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  setSectionSelector() {
    const { categoryType } = this.props.match.params;
    return categoryType ? categoryType : defaultLandingSelector;
  }

  setSection(sectionSelector) {
    return projectData.productLinks.filter(
      section => section.selector === sectionSelector
    )[0];
  }

  render() {
    // Component properties
    const { heroImage, design, titles } = this.state.section;
    const { loading, productCount, products } = this.state;

    // Design control booleans
    const { hero, browseSection, filterReport } = design;

    return (
      <div>
        {hero && <Hero heroImage={heroImage} titles={titles} />}
        <CategoryHeader titles={titles} />

        {!loading &&
          filterReport && (
            <FilterReport
              productCount={productCount}
              onFilterChange={this.handleFilterChange}
            />
          )}

        {loading && <Loader />}
        {!loading && products && <ProductList products={products} />}
        {browseSection && <BrowseSection items={projectData.productLinks} />}
      </div>
    );
  }
}
