const express = require("express");
const router = express.Router();
const { requestResponse } = require("../utils/index");
const gallery = require("./gallery");
// const users = require("./users");
// const subject = require("./subjects");
// const categories = require("./categories");
// const repositories = require("./repositories");

let response;

router.get(
  "/",
  (req, res) => {
    response = requestResponse.success;
    response.message = "REPOSITORIES - API!";
    res.status(response.code).json(response);
  }
);

// router.post(
//   "/users/login",
//   authController.login
// );

router.use("/gallery", gallery);
// router.use("/users", users);
// router.use("/subject", subject);
// router.use("/categories", categories);
// router.use("/repositories", repositories);

module.exports = router;
