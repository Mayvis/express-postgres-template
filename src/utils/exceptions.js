const { HTTP } = require("../config");

const baseResponse = (res, message, status, data) => {
  let code;

  switch (status) {
    case "ok":
      code = HTTP.OK;
      break;
    case "created":
      code = HTTP.CREATED;
      break;
    case "not found":
      code = HTTP.NOT_FOUND;
      break;
    default:
      code = HTTP.OK;
  }

  res.status(code).json({
    message,
    status,
    data,
  });
};

const errorResponse = (res, error) => {
  let message = error.toString();

  const response = {
    message,
    status: "something wrong",
    data: [],
  };

  res.status(HTTP.BAD_REQUEST).json(response);
};

module.exports = {
  baseResponse,
  errorResponse,
};
