import React, { Component } from "react";
import ProductTile, { ProductDetail } from "./Product";
import Cart from "./Cart";

import {
  getLocalCart,
  addToLocalCart,
  removeFromLocalCart,
  getLocalCartCount
} from "../LocalCart";
import ProductList from "../store/ProductList";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      products: {},
      cart: {}
    };
  }

  handleAddToCart(product) {
    let cart = addToLocalCart(product.shortname, 1);
    this.setState({ cart: cart });
  }

  renderProduct(product) {
    return (
      <li key={product.shortname}>
        <ProductTile
          shortname={product.shortname}
          name={product.name}
          description={product.description}
          longDescription={product.longDescription}
          price={product.price}
          onClick={this.handleAddToCart.bind(this, product)}
        />
      </li>
    );
  }

  componentDidMount() {
    let productList = new ProductList("/products");
    productList.get(1000, 0, data => {
      this.setState({ loaded: true });
      this.setState({ products: data });
    });

    this.setState({ cart: getLocalCart() });
  }

  render() {
    let products = Object.values(this.state.products);
    if (!this.state.loaded) {
      return <span>loading the store...</span>;
    }
    if (!products.length > 0) {
      return <span>no products</span>;
    }

    let productComponents = products.map(this.renderProduct.bind(this));

    return (
      <div>
        <h1>Product listing</h1>
        <ul>{productComponents}</ul>
        <Cart
          cart={this.state.cart}
          numItems={getLocalCartCount(this.state.cart)}
        />
      </div>
    );
  }
}

export default Store;
