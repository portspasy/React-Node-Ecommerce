const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");
// get all the products
router.route("/").get(getProducts);

// get a single product by id
router.route("/:id").get(getProductById);

module.exports = router;
