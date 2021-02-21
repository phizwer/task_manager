const express = require("express");
const {
  list_all_tasks,
  create_a_task,
  get_a_task,
  update_a_task,
  delete_a_task,
} = require("../controllers/Task");

const router = express.Router();

router.get("/", list_all_tasks);
router.get("/:id", get_a_task);
router.post("/", create_a_task);
router.put("/:id", update_a_task);
router.delete("/:id", delete_a_task);

module.exports = router;
