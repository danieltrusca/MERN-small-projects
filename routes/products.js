const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getFilterProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("../controllers/products");

// router.get("/", getAllProducts);
router.route("/").get(getAllProducts).post(createProduct);
router.get("/static", getFilterProducts);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
