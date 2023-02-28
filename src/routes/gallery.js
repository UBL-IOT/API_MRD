const express = require("express");
const router = express.Router();
const controller = require("../controller/controller_gallery");
const { checkRequest, requiredRequest } = require("../utils");

router.post(
    "/create",
    controller.create
);

router.get(
    "/getAll",
    controller.getAll
);

router.get(
    "/getById/:id",
    controller.getById
);

router.put(
    "/update/:guid",
    controller.updateOne
);

router.delete(
    "/:guid",
    controller.deleteOne
);

module.exports = router;
