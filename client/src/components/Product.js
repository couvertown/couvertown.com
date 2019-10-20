import React, { Component } from "react";
import { addToLocalCart } from "../LocalCart";

export default class ProductTile extends Component {
  render() {
    return (
      <div className="productTile" key={this.props.shortname}>
        <h2>
          <a href={this.props.shortname}>{this.props.name}</a>
        </h2>
        <p>{this.props.description}</p>
        <p>
          <small>CAD ${this.props.price}</small>
        </p>
        <button onClick={this.props.onClick}>add to cart</button>
      </div>
    );
  }
}

export class ProductDetail extends Component {
  render() {
    let description =
      this.props.longDescription == null
        ? this.props.description
        : this.props.longDescription;
    return (
      <div className="productDetail" key={this.props.shortname}>
        <h1>{this.props.name}</h1>
        <p>{description}</p>
        <span>CAD ${this.props.price}</span>
      </div>
    );
  }
}
