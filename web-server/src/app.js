const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Luffy",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Nature",
    name: "Luffy",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helptext: "This is some helpful text",
    title: "Help",
    name: "Luffy",
  });
});

app.get("/weather", (req, res) => {
  res.send([
    {
      forecast: "It is raning",
      location: "India",
    },
  ]);
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Luffy",
    errorMessage: "Help Article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Luffy",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
