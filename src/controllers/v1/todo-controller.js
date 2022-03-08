const todoRepo = require("../../repository/todo");
const { errorResponse, baseResponse } = require("../../utils");

const find = async (req, res) => {
  //
};

const findById = async (req, res) => {
  //
};

const create = async (req, res) => {
  const payload = req.body;

  try {
    const result = await todoRepo.create(payload);
    baseResponse(res, "created successfully", "created", result);
  } catch (error) {
    errorResponse(res, error);
  }
};

const update = async (req, res) => {
  //
};

const remove = async (req, res) => {
  //
};

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
};
