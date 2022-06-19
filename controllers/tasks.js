const mongoose = require("mongoose");
const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ error: err.errors.name.message });
  }
};

exports.getTask = async (req, res) => {
  const { id } = req.params;

  // check if id is a valid mongoose ID
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  try {
    const task = await Task.findById(id);
    // const task = await Task.findOne({ _id: id })

    if (!task) {
      return res.status(404).json({ error: `No task with id : ${id}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ error: "There is not a task with this ID" });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;

  // check if id is a valid mongoose ID
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  try {
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).json({ error: `No task with id : ${id}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ error: "There is not a task with this ID" });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  // check if id is a valid mongoose ID
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  try {
    const task = await Task.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({ error: `No task with id : ${id}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ error: "There is not a task with this ID" });
  }
};
