#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const { MODEL_PATH } = require("./config");
const { modelTemplateString } = require("./template");
const capitalizeFirstLetter = require("./utils/capitalize-first-letter");
const chalk = require("chalk");

const log = console.log;

inquirer
  .prompt([
    {
      type: "input",
      message: "Input the model name(ex: todo):",
      name: "model",
    },
  ])
  .then((answers) => {
    // check user input model value
    if (answers.model && answers.model.length) {
      let repositoryName = capitalizeFirstLetter(answers.model);
      const file = `${MODEL_PATH}/${repositoryName}.js`;

      // check file exists or not
      if (!fs.existsSync(file)) {
        fs.writeFile(
          file,
          modelTemplateString(answers.model, repositoryName),
          function (err) {
            if (err) throw err;
            log(chalk.green("Model file is created successfully"));
          }
        );
      } else {
        log(
          chalk.red("Model create unsuccessfully, because file already exists.")
        );
        log(
          chalk.red(`You should check and delete ${answers.model} file first.`)
        );
      }
    } else {
      log(chalk(chalk.red("Please input the model name")));
    }
  });
