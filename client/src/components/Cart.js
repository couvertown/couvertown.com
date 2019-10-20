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
    let blah = [];
    Object.keys(items).forEach(key => {
      if (items.hasOwnProperty(key)) {
        blah.push(this.itemCount(key, items[key]));
      }
    });
    return blah;
  }

  render() {
    return (
      <div className="cart">
        <span>cart ({this.props.numItems})</span>
        {this.renderItemCounts(this.props.cart.items)}
      </div>
    );
  }
}

export default Cart;
