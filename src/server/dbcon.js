import pgPromise from "pg-promise";
// const pgp = require("pg-promise")(/* options */);
const pgp = pgPromise({});
// const db = pgp("postgres://username:password@host:port/database");
//tododb
const db = pgp("postgres://pguser@localhost:5432/tododb");

// Test connection
db.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("ERROR:", error.message);
  });

// db.one("SELECT $1 AS value", 123)
//   .then((data) => {
//     console.log("DATA:", data.value);
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });

export default db;
