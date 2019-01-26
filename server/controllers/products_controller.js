const mongoose = require("mongoose");
const Product = require("../models/product.js");

const ProductsController = {
  // PUBLIC API METHODS
  // List all products that exist
  list(req, res) {
    Product.where({ hidden: false }).then(
      data => {
        res.send(data);
      },
      err => {
        res.sendStatus(500);
      }
    );
  },

  // PRIVATE API METHODS
  // TODO: requires authentication

  // Create a new product listing
  create(req, res) {
    if (!req.body) {
      res.sendStatus(400);
      return;
    }

    let productAttrs = req.body.attrs;
    let product = Product(productAttrs);
    product.save().then(
      () => {
        res.sendStatus(200);
      },
      err => {
        res.status(500).send(err.message);
      }
    );
  },

  // Delete a product
  destroy(req, res) {
    if (!req.body) {
      res.sendStatus(400);
      return;
    }
    Product.findByIdAndDelete(req.body.id).then(
      () => {
        res.sendStatus(200);
      },
      err => {
        res.status(500).send(err.message);
      }
    );
  }
};

module.exports = ProductsController;
