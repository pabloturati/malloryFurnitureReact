import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    const { titles, heroImage } = this.props;
    return (
      <div className="hero">
        <img className="img-fluid" src={heroImage} alt={titles[0]} />
        <div className="hero_titles">
          {titles[2] && <h1>{titles[2]}</h1>}
          {titles[3] && <h2>{titles[3]}</h2>}
          {titles[4] && <h2>{titles[4]}</h2>}
        </div>
      </div>
    );
  }
}
