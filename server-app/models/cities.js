const db = require("../database");

class Cities {
  static retrieveAll(callback) {
    db.query("SELECT city_name, id from cities", function (err, res) {
      if (err.error) return callback(err);
      callback(res);
    });
  }
  static insert(city, callback) {
    db.query("INSERT INTO cities (city_name) VALUES ($1)", [city], function (
      err,
      res
    ) {
      if (err.error) return callback(err);
      callback(res);
    });
  }
  static remove(id, callback) {
    db.query("DELETE FROM cities WHERE id=$1", [id], function (err, res) {
      if (err.error) return callback(err);
      callback(res);
    });
  }
}
module.exports = Cities;
