const mongoose = require("mongoose");

const Product = require("../server/models/product");

const databaseUrl = "mongodb://localhost/testdb";

const testProductSet = [
  {
    name: "Couvertown Classics Logo T-Shirt",
    shortname: "classic-logo-tee",
    description: "A supima t-shirt in an array of beautiful colours.",
    imageUrl: "http://example.com/",
    price: 90000
  },

  {
    name: "Couvertown Toque",
    shortname: "toque",
    description: 'What would otherwise be called a "beanie" in the States.',
    imageUrl: "http://example.com/",
    price: 1337
  },
  {
    name: "Commemorative Maple Syrup Koozie",
    shortname: "koozie",
    description:
      "What better to store your happy maple syrup in than in an all-Canadian koozie?",
    imageUrl: "http://example.com/",
    price: 2001
  },
  {
    name: "Lacquered Hockey Stick",
    shortname: "hockey-stick",
    description: "For a pickup game aboot the frozen lakes.",
    imageUrl: "http://example.com/",
    price: 12
  }
];

function populateTestDb() {
  for (let i = 0; i < testProductSet.length; ++i) {
    let newProduct = new Product(testProductSet[i]);
    newProduct.save().then(
      () => {
        console.log("product saved");
      },
      err => {
        console.log("couldn't save product: " + err.message);
      }
    );
  }
}

mongoose.connect(databaseUrl).then(
  () => {
    console.log("connected to db");
    populateTestDb();
  },
  err => {
    console.log("couldn't connect to db: " + err.message);
  }
);
