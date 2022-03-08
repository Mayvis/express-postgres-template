const express = require("express");

const router = express.Router();

const {
  find,
  findById,
  create,
  update,
  remove,
} = require("../../controllers/v1/todo-controller");

/**
 * --------------------------------
 * You have to write router in below
 * --------------------------------
 */
router.get("/", find);
router.get("/:id", findById);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
