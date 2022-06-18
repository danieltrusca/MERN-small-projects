exports.getAllTasks = (req, res) => {
  res.send("All tasks");
};

exports.createTask = (req, res) => {
  //   res.send("Create a task");
  res.json(req.body);
};

exports.getTask = (req, res) => {
  //   res.send("get single task");
  const {id} = req.params;
  res.json({ taskId: id });
};

exports.updateTask = (req, res) => {
  res.send("update a task");
};

exports.deleteTask = (req, res) => {
  res.send("delete a task");
};
