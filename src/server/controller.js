// const model = require("./model.js");
import fetchList from "./model.js";

const getAllByUser = (user) => {
  console.log(`C get all for ${user}`);
  return fetchList(user);
};

export default getAllByUser;
