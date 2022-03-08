const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { routeV1 } = require("./routes");
const { MORGAN_FORMAT } = require("./config");
const morgan = require("morgan");

const app = express();

/**
 * ----------------------------------------------
 * Register middleware
 * ----------------------------------------------
 */
app.use(cors());
app.options("*", cors());

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: false }));

app.use(helmet()); // secure app by setting various HTTP headers

app.use(morgan(MORGAN_FORMAT, { stream: process.stderr })); // format log

/**
 * ----------------------------------------------
 * Register routes to App
 * ----------------------------------------------
 */
app.use(routeV1);

module.exports = app;
