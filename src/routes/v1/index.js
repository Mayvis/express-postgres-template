const express = require("express");
const app = express();
const { API_V1 } = require("../../config/routes");
const TodoRoutes = require("./todo");

/**
 * ----------------------------------------------
 * Register routes.
 * ----------------------------------------------
 */
app.use(`${API_V1}/todos`, TodoRoutes);

module.exports = app;
