const request = require("request-promise");

const API_KEY = "51f69601b7d08c963e0acbeda039878b";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
      json: true,
    })
      .then(function (res) {
        callback(res);
      })
      .catch(function (err) {
        callback({ error: "Could not reach OpenWeatherMap API." });
      });
  }
}

module.exports = Weather;
