#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const { REPOSITORY_PATH } = require("./config");
const { repositoryTemplateString } = require("./template");
const chalk = require("chalk");

const log = console.log;

inquirer
  .prompt([
    {
      type: "input",
      message: "Input the repository name(ex: todo):",
      name: "repository",
    },
  ])
  .then((answers) => {
    // check user input repository value
    if (answers.repository && answers.repository.length) {
      const file = `${REPOSITORY_PATH}/${answers.repository}.js`;
      // check file exists or not
      if (!fs.existsSync(file)) {
        fs.writeFile(
          file,
          repositoryTemplateString(answers.repository),
          function (err) {
            if (err) throw err;
            log(chalk.green("Repository file is created successfully"));
          }
        );
      } else {
        log(
          chalk.red(
            "Repository create unsuccessfully, because file already exists."
          )
        );
        log(
          chalk.red(
            `You should check and delete ${answers.repository} file first.`
          )
        );
      }
    } else {
      log(chalk(chalk.red("Please input the repository name")));
    }
  });
