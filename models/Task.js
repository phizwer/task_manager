const sql = require("../services/Database");

//Task object constructor
var Task = function ({
  title,
  description,
  status,
  start_date,
  due_date,
  priority,
}) {
  this.title = title;
  this.description = description;
  this.status = status;
  this.start_date = start_date;
  this.due_date = due_date;
  this.priority = priority;
  this.created_at = new Date();
};
Task.createTask = (newTask, result) => {
  sql.query("INSERT INTO tasks SET ?", newTask, (err, results) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, results.insertId);
    }
  });
};
Task.getTaskById = (taskId, result) => {
  sql.query("SELECT * FROM tasks WHERE id = ? ", [taskId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Task.getAllTask = (result) => {
  sql.query("SELECT * FROM tasks", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};
Task.updateById = (id, task, result) => {
  sql.query("UPDATE tasks SET ? WHERE id = ?", [task, id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Task.remove = (id, result) => {
  sql.query("DELETE FROM tasks WHERE id = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;
