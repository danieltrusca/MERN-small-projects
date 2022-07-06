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
  const products3 = await Product.find({ name: "a first wooden table" });
  // get all products sort by name descendant (-name) asccendant (name)
  const products = await Product.find({}).sort("-name");
  res.status(200).json({ products, nbHits: products.length });
});

exports.getAllProducts = asyncWrapper(async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  // console.log(queryObject);
  let result = Product.find(queryObject);

  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("-createdAt");
  }

  // select fields
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
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
