import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.initialTitles = "";
    this.titles = null;
  }
  componentDidMount() {
    this.selectHeroTitles();
  }
  selectHeroTitles() {
    this.initialTitles = this.props.titles;
    this.titles = this.initialTitles.filter((title, index) => {
      return title !== "" && index > 2;
    });
  }
  render() {
    const { heroImage } = this.props;

    const heroImgStyle = {
      backgroundImage: `url(${heroImage})`
    };

    return (
      <div className="hero" style={heroImgStyle}>
        {this.titles &&
          this.titles.map((title, index) => {
            return index === 0 ? (
              <h1 key={index}>{title}</h1>
            ) : (
              <h2 key={index}>{title}</h2>
            );
          })}
      </div>
    );
  }
}
