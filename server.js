const path = require("path");
const express = require("express");
const { response } = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

// Define paths for express configs
const publicDirectoryPath = path.join(__dirname, "/public");
const viewPaths = path.join(__dirname, "/templates");

// Setting up html
app.set("view engine", "hbs");
app.set("views", viewPaths);

//setup static directory to server
app.use(express.static(publicDirectoryPath));

// index page
app.get("/", (req, res) => {
  res.render("index");
});

// Quiz App
app.get("/quiz", (req, res) => {
  res.render("quiz");
});

// wordly App
app.get("/wordle", (req, res) => {
  res.render("wordle");
});

app.listen(PORT, () => {
  console.log("server is up on port 8000");
});
