import React, { Component } from "react";
import ProductTile, { ProductDetail } from "./Product";
import {
  getLocalCart,
  addToLocalCart,
  removeFromLocalCart
} from "../LocalCart";
import ProductList from "../store/ProductList";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      products: {}
    };
  }

  componentDidMount() {
    let productList = new ProductList("/products");
    productList.get(1000, 0, data => {
      this.setState({ loaded: true });
      this.setState({ products: data });
    });

    getLocalCart();
  }

  render() {
    let products = Object.values(this.state.products);
    if (!this.state.loaded) {
      return <span>loading the store...</span>;
    }
    if (!products.length > 0) {
      return <span>no products</span>;
    }
    let productComponents = products.map(product => {
      return (
        <ProductTile
          shortname={product.shortname}
          name={product.name}
          description={product.description}
          longDescription={product.longDescription}
          price={product.price}
        />
      );
    });

    return (
      <div>
        <h1>Product listing</h1>
        <ul>{productComponents}</ul>
      </div>
    );
  }
}

export default Store;
