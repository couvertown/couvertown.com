import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div class="productDescription">
        <h2>
          {this.props.name}&nbsp;
          <small>${this.props.price} CAD</small>
        </h2>
        <p>{this.props.description}</p>
        <a href="#">add to cart</a>
      </div>
    );
  }
}

export default Product;
