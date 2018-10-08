import React, { Component } from "react";
import Hero from "../../components/Hero";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import ProductList from "../../components/ProductList/ProductList";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: {}
    };
  }

  componentWillMount() {
    const section = this.getSection();
    this.setState({ section });
  }

  getSection() {
    return this.findSection(
      this.props.name ? this.props.name : "this.props.match..."
    );
  }

  findSection = name => {
    const section = this.props.sectionData.filter(
      section => section.name === name
    );
    return section[0];
  };

  render() {
    //Component properties
    const { heroImage, design, titles } = this.state.section;

    //Design control booleans
    const { hero, browseSection, filterReport } = design;

    return (
      <div>
        {hero && <Hero heroImage={heroImage} titles={titles} />}
        <CategoryHeader titles={titles} />
        {filterReport}
        <ProductList />
        {browseSection}
      </div>
    );
  }
}
