const axios = require("axios");
require("dotenv").config();

const weathercal = async (req, res) => {
  try {
    const city = req.params.city;
    console.log("API Key:", process.env.API);

    // 1. Get lat/lon from geo API
    const apigeo = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.API}`
    );

    if (!apigeo.data || apigeo.data.length === 0) {
      return res.status(404).json({ error: "City not found" });
    }

    const { lat, lon } = apigeo.data[0];

    // 2. Get weather using lat/lon
    const apivalue = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API}&units=metric`
    );

    const weatherdata = {
      city: apivalue.data.name,
      temp: apivalue.data.main.temp,
      humidity: apivalue.data.main.humidity,
      conditions: apivalue.data.weather[0].description,
    };

    res.json(weatherdata);
  } catch (err) {
    console.error("Weather API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
};

module.exports = { weathercal };
