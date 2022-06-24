const express = require("express");
const router = express.Router();

const { getAllProducts, getStaticProducts } = require("../controllers/products");

router.get("/", getAllProducts);
router.get("/static", getStaticProducts);

module.exports = router;
