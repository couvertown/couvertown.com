const bodyparser = require("body-parser");
const express = require("express");
const hbs = require("hbs");
const hbsutils = require("hbs-utils")(hbs);
const mongoose = require("mongoose");
const morgan = require("morgan");
const ProductsController = require("./server/controllers/products_controller");

const port = 3000;
const app = express();

const viewsDirectory = __dirname + "/client/views";

hbs.registerPartials(viewsDirectory + "/partials");
// middleware
app.use(morgan("dev"));
app.use("/public", express.static(__dirname + "/client/public"));
app.set("views", viewsDirectory);
app.use(bodyparser.json());
app.set("view engine", "hbs");
app.set("x-powered-by", false);

app.get("/", (req, res) => {
  res.render("index", {
    description:
      "Couvertown is a community of designers and creators who, through our work, seek to create beautiful things and weave a common thread through the social fabric of Vancouver."
  });
});

app.get("/api/products", ProductsController.list);
app.post("/api/products/create", ProductsController.create);

// TODO: need to decouple production from local database in development mode
mongoose.connect("mongodb://localhost/testdb").then(() => {
  console.log("connected to database");
  app.listen(port, () => {
    console.log(
      "Hey there cool cats, this is\n" +
        "  _____                       __                \n" +
        " / ___/__  __ ___  _____ ____/ /____ _    _____ \n" +
        "/ /__/ _ \\/ // / |/ / -_) __/ __/ _ \\ |/|/ / _ \\\n" +
        "\\___/\\___/\\_,_/|___/\\__/_/  \\__/\\___/__,__/_//_/\n" +
        "\n" +
        "Now serving up some smooth content on port " +
        port +
        "."
    );
  });
});
