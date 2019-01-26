const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: { type: String, required: true },
  shortname: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  hidden: { type: Boolean, required: true, default: false }
});

module.exports = Product;
