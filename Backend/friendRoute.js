const express = require("express");
const friendController = require("./friendController");
const router = express.Router();

router.route("/").get(friendController.getAll).post(friendController.createOne);

router
  .route("/:id")
  .get(friendController.getOne)
  .patch(friendController.updateOne)
  .delete(friendController.deleteOne);

module.exports = router;
