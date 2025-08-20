const { default: axios } = require("axios");

const express = require("express");
const ax = require("axios");
const cors = require("cors");
const path = require("path");
const { wrouter } = require("./routes/weatherroute");
require("dotenv").config();

let app = express();
app.use(express.static(path.join(__dirname, "views")));
app.use("/data", express.static(path.join(__dirname, "data")));
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT || 8803);
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.use("/all", wrouter);
console.log("SERVER CONNECTE WITH PORT : " + process.env.PORT);
