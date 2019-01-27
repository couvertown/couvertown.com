import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.name}
          <small>CAD${this.props.price}</small>
        </h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Product;
