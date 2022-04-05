const path = require("path");
const express = require("express");
const { response } = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

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
  res.render("quiz-app");
});

app.listen(8000, () => {
  console.log("server is up on port 8000");
});
