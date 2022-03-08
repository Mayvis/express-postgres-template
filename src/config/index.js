const database = require("./database");
const constant = require("./constant");
const routes = require("./routes");

module.exports = {
  ...database,
  ...constant,
  ...routes,
};
