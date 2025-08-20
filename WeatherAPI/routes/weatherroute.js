const express = require("express");
const path = require("path");
const router = express.Router();
const weathercal = require("../controllers/weatherController");
router.get("/:city", weathercal.weathercal);
module.exports = {
  wrouter: router,
};
