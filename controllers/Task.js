const Task = require("../models/Task");

exports.list_all_tasks = (req, res) => {
  Task.getAllTask((err, data) => {
    console.log("controller");
    if (err) {
      res.json(err);
    }
    console.log("res", data);
    return res.json(data);
  });
};

exports.create_a_task = (req, res) => {
  const task = new Task(req.body);

  //handles null error
  if (!task.title || !task.status || !task.priority) {
    return res
      .status(400)
      .json({ error: true, message: "Please provide title/status/priority" });
  } else {
    Task.createTask(task, (err, taskData) => {
      if (err) {
        return res.json(err);
      }
      const data = { task_id: taskData, ...req.body };
      return res.json(data);
    });
  }
};

exports.get_a_task = (req, res) => {
  Task.getTaskById(req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

exports.update_a_task = (req, res) => {
  Task.updateById(req.params.id, new Task(req.body), (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

exports.delete_a_task = (req, res) => {
  Task.remove(req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: "Task successfully deleted" });
  });
};
