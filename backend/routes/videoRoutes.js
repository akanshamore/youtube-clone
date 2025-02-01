const express = require("express");

const { getProducts } = require("../controllers/videoController");

const router = express.Router();

router.get("/", getProducts);
// router.post("/", createProduct);
// router.get("/:id", getProductById);

module.exports = router;
