const express = require("express");
const hbs = require("hbs");
const hbsutils = require("hbs-utils")(hbs);
const morgan = require("morgan");

const app = express();

const viewsDirectory = __dirname + "/client/views";

hbs.registerPartials(viewsDirectory + "/partials");
// middleware
app.use(morgan("dev"));
app.use("/public", express.static(__dirname + "/client/public"));
app.set("views", viewsDirectory);
app.set("view engine", "hbs");
app.set("x-powered-by", false);

app.get("/", (req, res) => {
  res.render("index", {
    description:
      "Couvertown is a community of designers and creators who, through our work, seek to create beautiful things and weave a common thread through the social fabric of Vancouver."
  });
});

app.listen(3000);
