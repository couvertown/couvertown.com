import React, { Component } from "react";
import { addToLocalCart } from "../LocalCart";
import "./css/product.css";

export default class ProductTile extends Component {
  render() {
    return (
      <div className="productTile" key={this.props.shortname}>
        <a className="productName" href={this.props.shortname}>{this.props.name}</a>
        <p>{this.props.description}</p>
        <span className="productPrice">CAD ${this.props.price}</span>
        <button className="cartButton" onClick={this.props.onClick}>add to cart</button>
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

function ProductList(props) {
  return (
      <div className="productList">
      </div>
  );
}
