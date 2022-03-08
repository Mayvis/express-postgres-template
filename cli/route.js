#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const { V1_ROUTE_PATH } = require("./config");
const { routeTampleteString } = require("./template");
const chalk = require("chalk");

const log = console.log;

inquirer
  .prompt([
    {
      type: "input",
      message: "Input the route name(ex: todo):",
      name: "route",
    },
  ])
  .then((answers) => {
    // check user input route value
    if (answers.route && answers.route.length) {
      const file = `${V1_ROUTE_PATH}/${answers.route}.js`;
      // check file exists or not
      if (!fs.existsSync(file)) {
        fs.writeFile(file, routeTampleteString(), function (err) {
          if (err) throw err;
          log(chalk.green("Route file is created successfully"));
        });
      } else {
        log(
          chalk.red("Route create unsuccessfully, because file already exists.")
        );
        log(
          chalk.red(`You should check and delete ${answers.route} file first.`)
        );
      }
    } else {
      log(chalk(chalk.red("Please input the route name")));
    }
  });
