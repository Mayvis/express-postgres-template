"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../../config/database")[env];
const Sequelize = require("sequelize");

const db = {};
db.models = [];

let sequelize;

if (env === "test") {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: `${process.cwd()}/database.sqlite`,
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => {
    db.connection = "connection";
  })
  .catch((err) => {
    db.connection = err.toString();
  });

if (env === "development" || env === "test") {
  sequelize.sync({ alter: true }).catch((error) => {
    console.error(`error ${error.toString()}`);
  });
}

module.exports = db;
