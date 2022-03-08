function routeTampleteString() {
  return `const express = require("express");

const router = express.Router();

const {} = require(/** register controller here */)

/**
 * --------------------------------
 * You have to write router in below
 * --------------------------------
 */
router.get("/", /** write controller here */);
router.get("/:id", /** write controller here */);
router.post("/", /** write controller here */);
router.patch("/:id", /** write controller here */);
router.delete("/:id", /** write controller here */);

module.exports = router;
  `;
}

module.exports = routeTampleteString;
