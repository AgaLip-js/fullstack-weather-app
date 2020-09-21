const Pool = require("pg").Pool;
require("dotenv").config();

const proConfig = process.env.DATABASE_URL;
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

class Database {
  constructor() {
    this._pool = new Pool({
      connectionString:
        process.env.NODE_ENV === "production" ? proConfig : devConfig,
    });

    this._pool.on("error", (err, client) => {
      console.error("Unexpected error on idle PostgreSQL client.", err);
      process.exit(-1);
    });
  }

  query(query, ...args) {
    this._pool.connect((err, client, done) => {
      if (err) throw err;
      const params = args.length === 2 ? args[0] : [];
      const callback = args.length === 1 ? args[0] : args[1];

      client.query(query, params, (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
          return callback({ error: "Database error." }, null);
        }
        callback({}, res.rows);
      });
    });
  }

  end() {
    this._pool.end();
  }
}

module.exports = new Database();
