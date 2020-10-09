const taskRouter = require("express").Router();
const db = require("../../database/connect.js");
const Task = require("../models/tasks.js");

/**
 * Get all tasks by List id
 */
taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ id: req.body.id });
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
/**
 * Add new task
 */
taskRouter.post("/add", async (req, res) => {
  try {
    let { description, listId, adminId, usersId } = req.body;
    const newTask = new Task({ description, listId, adminId, usersId });
    const result = await newTask.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});
/**
 * Update one Task
 */

taskRouter.put("/update/:id", (req, res) => {
  Task.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
/**
 * Delete One Task
 */
taskRouter.delete("/delete/:id", (req, res) => {
  Task.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.send("success");
  });
});

module.exports = taskRouter;
