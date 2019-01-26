const mongoose = require("mongoose");
const Product = require("../models/product.js");

const ProductsController = {
  // Create a new product listing
  // List all products that exist
  list(req, res) {
    Product.where({ hidden: false }).then(
      data => {
        res.send(data);
      },
      err => {
        res.status(500);
      }
    );
  }
};

module.exports = ProductsController;
