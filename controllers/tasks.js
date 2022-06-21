const mongoose = require("mongoose");
const Task = require("../models/Task");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customError");

exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  // const task = await Task.findOne({ _id: id })

  if (!task) {
    return next(createCustomError(`No task with id : ${id}`, 404));
    // return res.status(404).json({ error: `No task with id : ${id}` });
  }
  res.status(200).json({ task });
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${id}`, 404));
  }

  res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return next(createCustomError(`No task with id : ${id}`, 404));
  }

  res.status(200).json({ task });
});
