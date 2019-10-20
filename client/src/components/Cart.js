import React, { Component } from "react";

class Cart extends Component {
  itemCount(shortname, count) {
    return (
      <span>
        {shortname} - {count}
      </span>
    );
  }

  renderItemCounts(items) {
    let counts = [];
    Object.keys(items).forEach(key => {
      if (items.hasOwnProperty(key)) {
        counts.push(this.itemCount(key, items[key]));
      }
    });
    return counts;
  }

  render() {
    return (
      <div className="cart">
        <span>cart ({this.props.numItems})</span>
        {this.renderItemCounts(this.props.cart.items)}
        <button onClick={this.props.onClick}>clear</button>
      </div>
    );
  }
}

export default Cart;
