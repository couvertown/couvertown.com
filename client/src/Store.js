import React, { Component } from "react";
import Product from "./Product";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  renderProduct(product) {
    return (
      <Product
        name={product.name}
        price={product.price}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    );
  }

  render() {
    if (this.state.products.length > 0) {
      const products = this.state.products.map(product => {
        return <li>{this.renderProduct(product)}</li>;
      });
      return (
        <div>
          <ol>{products}</ol>
        </div>
      );
    } else {
      return <div>No products</div>;
    }
  }
}

export default Store;
