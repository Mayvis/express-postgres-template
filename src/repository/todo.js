const { Todo } = require("../database/models");

const create = async (payload) => {
  return await Todo.create(payload);
};

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
