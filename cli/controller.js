#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const { V1_CONTROLLER_PATH } = require("./config");
const { controllerTemplateString } = require("./template");
const chalk = require("chalk");

const log = console.log;

inquirer
  .prompt([
    {
      type: "input",
      message: "Input the controller name(ex: todo):",
      name: "controller",
    },
  ])
  .then((answers) => {
    // check user input controller value
    if (answers.controller && answers.controller.length) {
      let controller = answers.controller;

      // append controller
      if (!controller.endsWith("-controller")) {
        controller = controller + "-controller";
      }

      let file = `${V1_CONTROLLER_PATH}/${controller}.js`;

      // check file exists or not
      if (!fs.existsSync(file)) {
        fs.writeFile(
          file,
          controllerTemplateString(answers.controller),
          function (err) {
            if (err) throw err;
            log(chalk.green("Controller file is created successfully."));
          }
        );
      } else {
        log(
          chalk.red(
            "Controller create unsuccessfully, because file already exists."
          )
        );
        log(chalk.red(`You should check and delete ${file} file first.`));
      }
    } else {
      log(chalk.red("Please input controller name"));
    }
  });
