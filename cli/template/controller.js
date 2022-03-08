function controllerTemplateString() {
  return `// const repo = require(/** import repository in there */);

const find = async (req, res) => {
  //
}

const findById = async (req, res) => {
  //
}

const create = async (req, res) => {
  //
}

const update = async (req, res) => {
  //
}

const remove = async (req, res) => {
  //
}

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
}
  `;
}

module.exports = controllerTemplateString;
