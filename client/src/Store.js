import axios from "axios";
import React, { Component } from "react";
import Product from "./Product";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  loadProductsFromDatabase() {
    axios.get("http://localhost:3001/api/products").then(
      res => {
        this.setState({ products: res.data });
      },
      err => {
        console.error("error in loading products: " + err.message);
      }
    );
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

  componentDidMount() {
    this.loadProductsFromDatabase();
  }

  render() {
    if (this.state.products.length > 0) {
      const products = this.state.products.map((product, index) => {
        return <li key={index}>{this.renderProduct(product)}</li>;
      });
      return (
        <div>
          <h1>the couvertown store</h1>
          <ul class="product-listing">{products}</ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>the couvertown store</h1>
          <p>no products</p>
        </div>
      );
    }
  }
}

export default Store;
