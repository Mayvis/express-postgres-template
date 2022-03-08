function repositoryTemplateString() {
  return `const {/** model name */} = require("../database/models");

const create = async (payload) => {};

const find = async (where) => {};

const findById = async (where) => {};

const update = async (payload, where) => {};

const remove = async (where) => {};

module.exports = {
  create,
  find,
  findById,
  update,
  remove,
};
  `;
}

module.exports = repositoryTemplateString;
