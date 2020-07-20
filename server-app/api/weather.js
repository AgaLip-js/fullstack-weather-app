const express = require("express");
const Weather = require("../models/weather");

const router = express.Router();

router.get("/:city", function (req, res) {
  let city = req.params.city;
  Weather.retrieveByCity(city, function (err, weather) {
    if (err) {
      res.status(404).send({
        status: 404,
        error: "Not found",
      });
    }

    return res.json(weather);
  });
});

module.exports = router;
