import React, { Component } from "react";
import Hero from "../../components/Hero";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import ProductList from "../../components/ProductList/ProductList";
import { defaultLandingSelector } from "../../project-files/projectData/projectData";
import { projectData } from "../../project-files/projectData/projectData";
import BrowseSection from "../../components/BrowseSection/BrowseSection";
import FilterReport from "../../components/FilterReport/FilterReport";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.defaultSelector = defaultLandingSelector;
    this.setSectionSelector = this.setSectionSelector.bind(this);
    this.setSection = this.setSection.bind(this);
    this.counterHandler = this.counterHandler.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = {
      sectionSelector: "",
      section: {},
      productAmount: 0,
      onSaleFilter: null
    };
  }
  componentWillMount() {
    const sectionSelector = this.setSectionSelector();
    console.log(sectionSelector);
    const section = this.setSection(sectionSelector);
    this.setState({
      sectionSelector,
      section,
      onSaleFilter: false
    });
  }
  setSectionSelector() {
    const { categoryType } = this.props.match.params;
    return categoryType ? categoryType : this.defaultSelector;
  }
  handleFilterChange(value) {
    this.setState({ onSaleFilter: value });
  }

  setSection(sectionSelector) {
    return this.props.sectionData.filter(
      section => section.selector === sectionSelector
    )[0];
  }
  counterHandler(productAmount) {
    this.setState({ productAmount });
  }
  render() {
    // Component properties
    const { heroImage, design, titles, selector } = this.state.section;
    console.log(selector);
    const { productAmount, onSaleFilter } = this.state;

    // Design control booleans
    const { hero, browseSection, filterReport } = design;
    // console.log(onSaleFilter);

    return (
      <div>
        {hero && <Hero heroImage={heroImage} titles={titles} />}
        <CategoryHeader titles={titles} />

        {filterReport && (
          <FilterReport
            productAmount={productAmount}
            onFilterChange={this.handleFilterChange}
          />
        )}

        {selector && (
          <ProductList
            selector={selector}
            defaultSelector={this.defaultSelector}
            amountOfProducts={this.counterHandler}
            onSaleFilter={onSaleFilter}
          />
        )}
        {browseSection && <BrowseSection items={projectData.productLinks} />}
      </div>
    );
  }
}
