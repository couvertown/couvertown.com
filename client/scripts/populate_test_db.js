var firebase = require("firebase");

const testProductSet = [{
  name: "Couvertown Classics Logo T-Shirt",
  shortname: "classic-logo-tee",
  description: "A supima t-shirt in an array of beautiful colours.",
  longDescription: "Our favourite and most popular t-shirt. Showcasing the iconic Couvertown logo on a plain background, it's minimalism meets refinement.",
  imageUrl: "http://example.com/",
  price: 90000,
  quantity: 3
}, {
  name: "Couvertown Toque",
  shortname: "toque",
  description: 'What would otherwise be called a "beanie" in the States.',
  imageUrl: "http://example.com/",
  price: 1337,
  quantity: 3
}, {
  name: "Commemorative Maple Syrup Koozie",
  shortname: "koozie",
  description: "What better to store your happy maple syrup in than in an all-Canadian koozie?",
  imageUrl: "http://example.com/",
  price: 2001,
  quantity: 3
}, {
  name: "Lacquered Hockey Stick",
  shortname: "hockey-stick",
  description: "For a pickup game aboot the frozen lakes.",
  imageUrl: "http://example.com/",
  price: 12,
  quantity: 0
}];

const firebaseConfig = {
  apiKey: "AIzaSyDTD_BATIdzSmujWb7qq89tjnexN2JoaYc",
  authDomain: "couvertown-a124b.firebaseapp.com",
  databaseURL: "https://couvertown-a124b.firebaseio.com",
  projectId: "couvertown-a124b",
  storageBucket: "couvertown-a124b.appspot.com",
  messagingSenderId: "1025064350973",
  appId: "1:1025064350973:web:748bd44123a086353b7a94"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const productsRef = db.ref("/products");

function populateDb(cb) {
  for (var i = 0; i < testProductSet.length; ++i) {
    let product = testProductSet[i];
    let productRef = productsRef.child(product.shortname);
    productRef.once('value', function (snapshot) {
      if (snapshot.exists()) {
        console.log(product.shortname + " already exists; skipping.");
      } else {
        productRef.set(product).then(function () {
          console.log("record for " + product.shortname + " succesfully created");
        }, function (err) {
          console.log("error: " + err.message);
        });
      }
    });
  }
}

populateDb();
