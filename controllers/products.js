
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customError");


exports.getStaticProducts = (req, res) => {
  res.status(200).json({ msg: "static products route" });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({ msg: "products route" });
};
