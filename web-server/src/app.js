const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.port || 3000;

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
  const address = req.query.address;

  if (!address) {
    return res.send({
      error: "You must provide address of location",
    });
  }

  geocode(address, (error, { latitude, longitude, region } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastdata,
        region,
        address,
      });
    });
  });
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

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});
