//making require work w/ es modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cors = require("cors");

//i really need to see if the new esm or the old cjs is more common these days in node.js...

// const controller = require("./controller.js");
import getAllByUser from "./controller.js";

const express = require("express");
const app = express();
//move to env later
const port = 3000;

//MIDDLEWARE//////////////////////////////
app.use(cors());
app.use(express.json());

//ENDPOINTS///////////////////////////////

//GET ALL TASKS FOR USER
app.get("/users/", (req, res) => {
  console.log("get by user");
  getAllByUser(req.query.user, res);
  res.sendStatus(200);
});

//POST NEW TASK FOR USER
app.post("/tasks", (req, res) => {
  //add task by user
  res.sendStatus(200);
});

//DELETE SINGLE TASK FOR USER

//DELETE ALL TASKS FOR USER

//ADD USER

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
