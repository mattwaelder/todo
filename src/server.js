//making require work w/ es modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cors = require("cors");

const express = require("express");
const app = express();
//move to env later
const port = 3000;

app.use(cors());
app.use(express.json());

// //cors
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// /user/mattwaelder/posts
app.get("/user", (req, res) => {
  console.log("YEP");
  res.send("Hello World!");

  //res.send("GOT IT");
  // res.send("Hello World!");
});

app.post("/tasks", (req, res) => {
  console.log(req.body);
  res.send("post done");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
