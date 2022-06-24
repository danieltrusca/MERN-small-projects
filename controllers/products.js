const mongoose = require("mongoose");
const Product = require("../models/Product");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customError");

exports.getFilterProducts = asyncWrapper(async (req, res) => {
  // get all products from DB
  const products1 = await Product.find({});
  // get all products with featured true
  const products2 = await Product.find({ featured: true });
  // get all products with name='a first wooden table'
  const products = await Product.find({ name: "a first wooden table" });
  res.status(200).json({ products });
});

exports.getAllProducts = asyncWrapper(async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products });
});

exports.createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
});

exports.getProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById({ id });

  if (!product) {
    return next(createCustomError(`No product with id : ${id}`, 404));
  }

  res.status(200).json({ product });
});

exports.updateProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(createCustomError(`No product with id : ${id}`, 404));
  }

  res.status(200).json({ product });
});

exports.deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return next(createCustomError(`No product with id : ${id}`, 404));
  }

  res.status(200).json({ product });
});
